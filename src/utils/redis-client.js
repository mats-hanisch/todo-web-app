import { createClient } from "redis";

import logger from "./logger.js";


const redisClient = createClient({
    url: process.env.REDIS_URL,
    socket: {
        tls: true
    }
});

redisClient.on("connect", () => {
    logger.info("Redis connected");
});

redisClient.on("error", err => {
    logger.error(`Redis error occured: ${err}`);
});


export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect().catch(err => logger.error(`Failed to connect to Redis: ${err}`));;
  }
}


export default redisClient;
