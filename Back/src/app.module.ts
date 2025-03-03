import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoModule } from "./todo/todo.module";
import { UserModule } from "./user/user.module";
import { databaseConfig } from "./config/database.config";
import { CloudinaryModule } from "./cloudinary/cloudinary.module";
import { FileModule } from "./file/file.module";

@Module({
  imports: [
    UserModule,
    TodoModule,
    FileModule,
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfig,
    }),
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
