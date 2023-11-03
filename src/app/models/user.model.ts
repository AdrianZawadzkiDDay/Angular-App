import {Role} from "./role.enum";

export class User {
  id: number |undefined;
  email: string = "";
  password: string = "";
  name: string = "";
  token: string = "";
  role: Role = Role.USER;
}