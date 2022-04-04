
import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../src/docs/swagger.json"
import { getVersionApi } from "@Utils/getVersion"

export const server = express()
server.use(cors())
server.use(express.json())

server.get(`/${getVersionApi()}`, (_, res) => res.send({ message: "partners-ms is running" }))

server.use(`/${getVersionApi()}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))

server.use(`/${getVersionApi()}`, router)
