import redis from "redis"

export const clientRedis = redis.createClient({
  host: "localhost",
  port: "6379",
  password: "Redis2019!"
})

clientRedis.on("error", err => {
  console.log("Error " + err)
})
