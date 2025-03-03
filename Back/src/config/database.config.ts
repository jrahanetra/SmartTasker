import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: "mysql",
  host: process.env.MARIADB_HOST,
  port: 3306,
  username: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
});
