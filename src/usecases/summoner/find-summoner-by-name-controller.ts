import { Request, Response } from "express";
import { FindSummonerByNameUseCase } from "./find-summoner-by-name-usecase";

export class FindSummonerByNameController {
  
  constructor(
    private findSummonerByNameUseCase: FindSummonerByNameUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { summonerName } = request.params;

    try {
      await this.findSummonerByNameUseCase.execute({
        summonerName
      })

      return response.status(201).send();

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || "Erro inesperado!"
      })

    }
  }
}