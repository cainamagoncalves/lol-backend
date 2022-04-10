import "reflect-metadata";
import "dotenv/config";
import "./database"
import express from "express";
import cors from "cors"
import { summonerRoutes } from "./routes/summoner.routes"
import { userRoutes } from "./routes/user.routes";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(summonerRoutes)
app.use(userRoutes)

export { app }