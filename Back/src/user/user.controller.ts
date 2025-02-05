import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { UserService } from "./user.service";

@ApiTags("USER")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  @ApiOperation({ summary: "Récupère tous les users" })
  @ApiResponse({
    status: 200,
    description: "Retourne la liste des users",
  })
  @ApiResponse({ status: 403, description: "Accès refusé" })
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Récupère un user par son id" })
  @ApiResponse({
    status: 200,
    description: "Retourne le user",
  })
  @ApiResponse({ status: 403, description: "Accès refusé" })
  async findOne(@Param("id") id: number) {
    return await this.userService.findOneById(id);
  }

  @Post()
  @ApiOperation({ summary: "Crée un user" })
  @ApiResponse({
    status: 201,
    description: "Création de l'utilisateur",
  })
  @ApiResponse({ status: 403, description: "Accès refusé" })
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }

  @Put(":id")
  @ApiOperation({ summary: "Mise à jour d'un user" })
  @ApiResponse({
    status: 200,
    description: "Mise à jour de l'utilisateur",
  })
  @ApiResponse({ status: 403, description: "Accès refusé" })
  async update(@Param("id") id: number, @Body() user: UpdateUserDto) {
    return await this.userService.updateUser(id, user);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Suppression d'un user" })
  @ApiResponse({
    status: 200,
    description: "Suppression de l'utilisateur",
  })
  @ApiResponse({ status: 403, description: "Accès refusé" })
  async delete(@Param("id") id: number) {
    return await this.userService.deleteUser(id);
  }
}
