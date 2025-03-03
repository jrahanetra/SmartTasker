import User from "./User";

export default class Profile {
  // 1. Typage des propiétés d'un étudiant.
  id: number;
  path: string;
  name: string;
  type: string;
  size: string;
  user: User;

  // 2. Définition des valeurs par défaut .
  constructor(
    id: number,
    path: string = "name",
    name: string = "name",
    type: string,
    size: string,
    user: User
  ) {
    // 3. Initialisation des propiétés d'un user.
    this.id = id;
    this.path = path;
    this.name = name;
    this.size = size;
    this.type = type;
    this.user = user;
  }
}
