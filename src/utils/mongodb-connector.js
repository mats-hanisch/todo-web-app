import mongoose from "mongoose";

import logger from "./logger.js";


export default async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info("MongoDB connected");
    } catch (err) {
        logger.error("Failed to connect MongoDB", err);
        process.exit(1);
    }
}
