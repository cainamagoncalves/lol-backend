import axios, { AxiosInstance } from "axios";
import { IRiotApiProvider } from "../../providers/riot/IRiotApiProvider";

// export class RiotApi implements IRiotApiProvider {
//   private server: AxiosInstance

//   constructor() {
//     this.server = axios.create({
//       baseURL: process.env.RIOT_API_URL,
//       headers: { 'content-type': 'application/json' },
//       timeout: 10 * 1000  // 10 seconds
//     })
//   }

//   public async get<Response>(url: string, token?: string): Promise<Response> {
//     const { data } = await this.server.get(url, { headers: { "X-Riot-API-Token": token ?? '' } });

//     return data;
//   }
// }

const riotApi = axios.create({
  baseURL: process.env.RIOT_API_URL,
  headers: { 'content-type': 'application/json' },
  timeout: 10 * 1000  // 10 seconds
})

export { riotApi }