import { User } from "../../models/users";
import { HttpRequest } from "../protocols";

export interface UpdateUserParams {
  fisrtName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}

export interface IUpdateUserRepository {
  update(id: string, params: UpdateUserParams): Promise<User>;
}
