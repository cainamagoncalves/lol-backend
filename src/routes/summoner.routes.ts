import Routes from "express"
import { FindSummonerByName } from "../usecases/summoner/find-summoner-by-name-usecase"

const routes = Routes()

const findSummonerByName = new FindSummonerByName()

routes.get("/summoner/:summonerName", findSummonerByName.execute)

export { routes as summonerRoutes }