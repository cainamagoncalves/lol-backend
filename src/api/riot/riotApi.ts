import axios, { AxiosInstance } from "axios";

const riotApi = axios.create({
  baseURL: process.env.RIOT_API_URL,
  headers: { 'content-type': 'application/json' },
  timeout: 10 * 1000  // 10 seconds
})

export { riotApi }