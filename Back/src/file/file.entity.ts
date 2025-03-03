import { User } from "src/user/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "File" })
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  size: string;

  @OneToOne(() => User, (user) => user.file)
  user: User;
}
