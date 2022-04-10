import Routes from "express"
import { findSummonerByNameController } from "../usecases/summoner"

const routes = Routes()

routes.get("/summoner/:summonerName", (request, response) => findSummonerByNameController.handle(request, response))

export { routes as summonerRoutes }