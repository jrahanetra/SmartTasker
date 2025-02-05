import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Déclare cette classe comme une table
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  description: string;

  @Column()
  status: string;
}
