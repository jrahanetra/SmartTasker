import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity() // Déclare cette classe comme une table
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "identifiant unique de l'user" })
  id: number;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.todos)
  @JoinColumn({ name: "id_user" })
  user: User;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  @ApiProperty({ description: "date de création de tâche", required: false })
  dateOfCreation: Date;

  @Column({ nullable: true })
  @ApiProperty({ description: "date du fin de tâche", required: false })
  dateOfEnding: Date;
}
