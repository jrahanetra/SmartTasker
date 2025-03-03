import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CreateTodoDto, UpdateTodoDto } from "./todo.dto";
import { Todo } from "./todo.entity";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  // Créer un TODO
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const { id_user, ...todoData } = createTodoDto;

    // Récupérer l'utilisateur à partir de son ID
    const user = await this.userRepository.findOne({ where: { id: id_user } });
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    // Créer la tâche en associant l'utilisateur
    const newTodo = this.todoRepository.create({
      ...todoData,
      user,
    });

    return await this.todoRepository.save(newTodo);
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
    const { id_user, ...todoData } = updateData;
    const user = await this.userRepository.findOne({
      where: { id: id_user },
    });

    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    // Créer la tâche en associant l'utilisateur
    const updateDataWithUser = this.todoRepository.create({
      ...updateData,
      user,
    });

    Object.assign(todo, updateDataWithUser);
    return await this.todoRepository.save(todo);
  }

  async deleteTodo(id: number): Promise<void> {
    const todo = await this.findTodoById(id);
    await this.todoRepository.remove(todo);
  }

  async getToDoListOfUser(id_user: number): Promise<Todo[]> {
    return await this.todoRepository
      .createQueryBuilder("todo")
      .where("todo.id_user = :id_user", { id_user })
      .leftJoinAndSelect("todo.user", "user") // Si relation User existe
      .getMany();
  }
}
