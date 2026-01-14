import { AppError } from "./app-errors.js";


export class MissingCredentialsError extends AppError {
    constructor() {
        super("Missing credentials", 400);
    }
}

export class UserAlreadyExistsError extends AppError {
    constructor() {
        super("User already exists", 409);
    }
}

export class InvalidCredentialsError extends AppError {
    constructor() {
        super("Invalid credentials", 401);
    }
}
