import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { File } from "./file.entity";

@Injectable()
export class FileService {
  constructor(
    private cloudinaryService: CloudinaryService,

    @InjectRepository(File)
    private fileRepository: Repository<File>
  ) {}

  async upload(file: Express.Multer.File, user: User): Promise<File> {
    const result = await this.cloudinaryService.uploadImage(
      file,
      user.name,
    );

    const newFile = new File();
    newFile.path = result.url;
    newFile.name = result.filename;

    return this.fileRepository.save(newFile);
  }

  async delete(file: File | null): Promise<void> {
    if (!file?.id) {
      // Récupère l'entité complète si l'objet file ne contient pas d'ID
      file = await this.fileRepository.findOne({ where: { id: file?.id } });
      if (!file) {
        throw new NotFoundException("File not found");
      }
    }

    await this.fileRepository.remove(file);
  }
}
