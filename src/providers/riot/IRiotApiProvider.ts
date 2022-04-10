interface IFindSummonerByNameResponse {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export interface IRiotApiProvider {
  get<Response>(url: string, token?: string): Promise<Response>
}