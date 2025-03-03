import Profile from "./Profile";

export default class User {
  // 1. Typage des propiétés d'un étudiant.
  id: number;
  name: string;
  firstName: string;
  file: Profile;

  // 2. Définition des valeurs par défaut .
  constructor(
    id: number,
    name: string = "name",
    firstName: string = "firstname",
    file: Profile,
  ) {
    // 3. Initialisation des propiétés d'un user.
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.file = file
  }
}
