import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { FileService } from "src/file/file.service";
import { Repository } from "typeorm";
import { File } from "./../file/file.entity";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    private readonly fileService: FileService,

    private readonly cloudinaryService: CloudinaryService
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
    file?: Express.Multer.File
  ): Promise<User> {
    const { name, firstName } = createUserDto;

    return await this.userRepository.manager.transaction(
      async (transactionalEntityManager) => {
        const user = this.userRepository.create({
          name,
          firstName,
        });

        // On sauvegarde temporairement pour obtenir l'ID
        const savedUser = await transactionalEntityManager.save(user);

        if (file) {
          const fileSize = file.size;
          const imageToUpload = await this.cloudinaryService.uploadImage(
            file,
            savedUser.name
          );
          const newFile = this.fileRepository.create({
            path: imageToUpload.secure_url,
            name: savedUser.name,
            type: imageToUpload.type,
            size: String(fileSize),
          });
          const savedFile = await transactionalEntityManager.save(newFile);

          // Association du fichier à l'utilisateur
          savedUser.file = savedFile;
        }

        // Sauvegarde finale avec les modifications
        return await transactionalEntityManager.save(savedUser);
      }
    );
  }
  async create(
    userData: CreateUserDto,
    file: Express.Multer.File
  ): Promise<User> {
    const user = await this.createUser(userData, file);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id = ${id} not found`);
    }

    user.file =
      (await this.fileRepository.findOne({
        where: { user: { id } },
      })) || undefined;

    return user;
  }

  async updateUser(id: number, updateData: UpdateUserDto): Promise<User> {
    const user = await this.findOneById(id);
    Object.assign(user, updateData);
    return await this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findOneById(id);
    if (!user) {
      throw new NotFoundException("User not found");
    }

    await this.userRepository.delete(user.id);

    if (user.file) {
      const file = await this.fileRepository.findOne({
        where: { id: user.file.id },
      });

      if (file) {
        const public_id = this.extractPublicId(file.path);
        await this.cloudinaryService.deleteFile(public_id);
        await this.fileRepository.remove(file);
      }
    }
  }

  extractPublicId(url: string): string {
    const parts = url.split("/");
    const filename = parts.pop(); // Récupère "imageName.jpg"
    const folder = parts.pop(); // Récupère "folder"

    if (folder) {
      return `${folder}/${filename?.split(".")[0]}`;
    } else {
      return filename?.split(".")[0] ?? "";
    }
  }
}
