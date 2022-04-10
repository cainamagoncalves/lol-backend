import { FindSummonerByNameController } from "./find-summoner-by-name-controller";
import { FindSummonerByNameUseCase } from "./find-summoner-by-name-usecase";

const findSummonerByNameUseCase = new FindSummonerByNameUseCase()
const findSummonerByNameController = new FindSummonerByNameController(findSummonerByNameUseCase);

export { findSummonerByNameController }