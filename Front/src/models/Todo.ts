import User from "./User";

export class CreateTodo {
  title: string;
  description: string;
  status: string;
  dateOfCreation: Date;
  dateOfEnding: Date | null;
  id_user: number;

  constructor(
    title: string,
    description: string,
    status: string,
    dateOfCreation: Date,
    dateOfEnding: Date | null,
    id_user: number
  ) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.dateOfCreation = dateOfCreation;
    this.dateOfEnding = dateOfEnding;
    this.id_user = id_user;
  }
}

export class Todo {
  // 1. Typage des propiétés d'un étudiant.
  id: number;
  title: string;
  description: string;
  status: string;
  dateOfCreation: Date;
  dateOfEnding: Date;
  user: User;

  // 2. Définition des valeurs par défaut .
  constructor(
    id: number,
    title: string,
    description: string,
    status: string,
    dateOfCreation: Date,
    dateOfEnding: Date,
    user: User
  ) {
    // 3. Initialisation des propiétés d'un user.
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dateOfCreation = dateOfCreation;
    this.dateOfEnding = dateOfEnding;
    this.user = user
  }
}
