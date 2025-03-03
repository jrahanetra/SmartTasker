import { File } from "src/file/file.entity";
import { Todo } from "src/todo/todo.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
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

  @OneToOne(() => File, (file) => file.user, {
    cascade: true,
    nullable: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "id_profile" })
  file?: File;
}
