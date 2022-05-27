
import "dotenv/config"
import express, { Request, Response } from "express"
import cors from "cors"
import { router } from "./routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../src/docs/swagger.json"
import { getVersionApi } from "@Utils/getVersion"
import { keycloak } from "@Infra/services/keycloak/config"

export const server = express()
server.use(cors())
server.use(express.json())

server.get(`/${getVersionApi()}`, (_, res) => res.send({ message: "partners-ms is running" }))

server.use(`/${getVersionApi()}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))

server.use(function (req: Request, res: Response, next) {
  const token = req.headers.authorization
  if (!token.split(" ")[1]) return res.status(500).send({ message: "token not found!" })
  next()
})

server.use(keycloak.middleware({
  logout: "/logout",
  admin: "/"
}))

server.use(`/${getVersionApi()}`, router)
