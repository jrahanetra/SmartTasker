import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { TodoService } from './todo.service';

@ApiTags('Todo') // Regroupe les endpoints sous "Todo"
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  @ApiOperation({ summary: 'Récupère tous les todos' })
  @ApiResponse({
    status: 200,
    description: 'Retourne la liste des todos',
  })
  @ApiResponse({ status: 403, description: 'Accès refusé' })
  async findAll() {
    return await this.todoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un todo par son ID' })
  async findOne(@Param('id') id: number) {
    return await this.todoService.findTodoById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un todo item' })
  @ApiResponse({ status: 201, description: 'Todo crée avec succès' })
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Met à jour un todo' })
  async update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un todo' })
  async delete(@Param('id') id: number) {
    await this.todoService.deleteTodo(id);
    return { message: 'Todo supprimé avec succès' };
  }
}
