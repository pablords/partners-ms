import { Kafka } from "kafkajs"

export const kafka = new Kafka({
  clientId: "partner-app",
  brokers: ["localhost:9092"]
})
