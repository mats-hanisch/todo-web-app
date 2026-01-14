import logger from "../utils/logger.js";


export default function errorHandlerMiddleware(err, req, res, next) {
    // use logger to show error
    logger.error(`${err.message} - ${req.method} ${req.url}`, { stack: err.stack });
    
    // request failed :(
    res.status(500).json({ error: 'Internal Server Error' });
}
