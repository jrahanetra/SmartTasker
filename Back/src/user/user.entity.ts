import { Todo } from "src/todo/todo.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity() // Déclare cette classe comme une table
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  firstName: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  @JoinColumn()
  todos: Todo[];
}
