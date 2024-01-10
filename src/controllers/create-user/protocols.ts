import { User } from "../../models/users";

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUsers(params: CreateUserParams): Promise<User>;
}
