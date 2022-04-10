import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-usecase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, name } = request.body;

    try {
      await this.createUserUseCase.execute({
        email,
        password,
        name
      })
      return response.status(201).send({ message: "Usuário criado com sucesso." })
    } catch (error: any) {
      return response.status(400).send({ message: error.message })
    }
  }
}