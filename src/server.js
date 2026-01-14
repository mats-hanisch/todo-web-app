import app from './app.js';
import logger from './utils/logger.js';
import { connectRedis } from './utils/redis-client.js';
import connectMongoDB from './utils/mongodb-connector.js';


const PORT = Number(process.env.PORT);


async function runServer() {
    await connectRedis();
    await connectMongoDB();
    
    app.listen(PORT, () => {
        logger.info(`Now listening on 'http://localhost:${PORT}'`);
    });
}


try {
    await runServer();
}
catch(err) {
    logger.error(`Failed to start server: ${err}`);
    process.exit(1);
}
