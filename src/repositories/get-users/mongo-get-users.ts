import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        fisrtName: "Felipe",
        lastName: "Rocha",
        email: "Felipe@gmial.com",
        password: "123",
      },
    ];
  }
}
