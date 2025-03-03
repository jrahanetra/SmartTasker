import { Module } from "@nestjs/common";
import { CloudinaryProvider } from "../config/cloudinary.config";
import { CloudinaryService } from "./cloudinary.service";

@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService],
})
export class CloudinaryModule {}
