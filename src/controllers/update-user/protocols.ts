import { User } from "../../models/users";

export interface UpdateUserParams {
  fisrtName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserRepository {
  update(id: string, params: UpdateUserParams): Promise<User>;
}
