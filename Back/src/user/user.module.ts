import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { File } from "src/file/file.entity";
import { FileModule } from "src/file/file.module";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, File]),
    FileModule,
    CloudinaryModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
