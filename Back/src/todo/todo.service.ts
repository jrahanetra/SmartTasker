import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  // Créer un TODO
  async create(todoData: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(todoData);
    return await this.todoRepository.save(todo);
  }

  // Récupérer tous les TODO
  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findTodoById(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) throw new NotFoundException(`Todo avec id ${id} introuvable`);
    return todo;
  }

  async updateTodo(id: number, updateData: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findTodoById(id);
    Object.assign(todo, updateData);
    return await this.todoRepository.save(todo);
  }

  async deleteTodo(id: number): Promise<void> {
    const todo = await this.findTodoById(id);
    await this.todoRepository.remove(todo);
  }
}
