import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { File } from "./file.entity";
import { FileService } from "./file.service";

@Module({
  imports: [TypeOrmModule.forFeature([File]), CloudinaryModule],
  providers: [FileService],
  exports: [TypeOrmModule, FileService], // Exporte pour permettre l'injection dans d'autres modules
})
export class FileModule {}
