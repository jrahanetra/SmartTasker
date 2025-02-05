import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoModule } from "./todo/todo.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    UserModule,
    TodoModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "Jason",
      password: "jasonfanasina",
      database: "todoAppBase",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
