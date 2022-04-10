import { riotApi } from "../../api/riot/riotApi";
import { IFindSummonerByNameDTO } from "./find-summoner-by-name-DTO";

interface IFindSummonerByNameResponse {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export class FindSummonerByNameUseCase {

  async execute(data: IFindSummonerByNameDTO) {

    const { data: findSummonerByNameResponseData } = await riotApi.get<IFindSummonerByNameResponse>(`/lol/summoner/v4/summoners/by-name/${encodeURI(data.summonerName)}`, {
      headers: { "X-Riot-Token": process.env.RIOT_API_TOKEN ?? '' }
    })

    return findSummonerByNameResponseData;
  }
}