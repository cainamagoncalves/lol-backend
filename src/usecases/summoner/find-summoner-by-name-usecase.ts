import { Request, Response } from "express";
import { riotApi } from "../../api/riot/riotApi";

type FindSummonerByNameResponse = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export class FindSummonerByName {

  async execute(request: Request, response: Response) {

    try {
      const { summonerName } = request.params;
  
      const { data } = await riotApi.get<FindSummonerByNameResponse>(`/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`, {
        headers: { 'X-Riot-Token': process.env.RIOT_API_TOKEN ?? '' },
      })
  
      return response.json(data);

    } catch (err: any) {
      
      return response.status(err.response.status).json(err.response.data)
    }
  }
}