import { EntityRepository, getRepository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../usecases/user/create-user-DTO";
import { IUsersRepository } from "../users/IUsersRepository";

@EntityRepository(User)
export class PostgresUsersRepository implements IUsersRepository {
  public async save(data: Omit<User, 'id'>): Promise<void> {
    const userRepository = getRepository(User);

    const user = userRepository.create(data);

    await userRepository.save(user)
  }

  public async findByEmail(email: string): Promise<User> {
    const userRepository = getRepository(User);

    return await userRepository.findOne({ where: { email } })
  }
}