import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../usecases/user/create-user-DTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: ICreateUserDTO): Promise<void>;
}