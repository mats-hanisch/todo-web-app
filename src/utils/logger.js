import winston from "winston";


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        // use colorized output
        winston.format.colorize(),

        // custom timestamp format
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),

        // show stacktrace
        winston.format.errors({ stack: true }),

        // custom format
        winston.format.printf(({ timestamp, level, message, stack }) => {
            return stack
                ? `${timestamp} [${level}]: ${message}\n\n${stack}`
                : `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        // use console
        new winston.transports.Console()
    ],
});


export default logger;
