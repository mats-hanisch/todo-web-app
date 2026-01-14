import session from "express-session";
import { RedisStore } from "connect-redis";

import redisClient from "../utils/redis-client.js";


const sessionMiddleware = session({
    name: "sid",
    store: new RedisStore({
        client: redisClient,
        prefix: "sess:"
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        httpOnly: true,
        secure: process.env.APP_ENV === 'prod',
        sameSite: 'lax',
        maxAge: Number(process.env.MAX_SESSION_LENGTH_HOURS) * 60 * 60 * 1000 // ms
    }
});


export default sessionMiddleware;
