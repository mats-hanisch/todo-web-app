
export class AppError extends Error {
    constructor(msg, status = 500) {
        super(msg);
        
        this.name = this.constructor.name;
        this.status = status;
        
        Error.captureStackTrace(this, this.constructor);
    }
}
