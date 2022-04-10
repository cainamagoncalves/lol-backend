import { IUsersRepository } from "../../repositories/users/IUsersRepository";
import { ICreateUserDTO } from "./create-user-DTO";

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error("O usuário já existe.")
    }

    await this.usersRepository.save(data)
  }
}