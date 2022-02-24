import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { summonerRoutes } from './routes/summoner.routes'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(summonerRoutes)

export { app }