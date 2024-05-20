import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';
    constructor() {
        super('Route not found');
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors() {
        return [
            { message: 'Not Found' }
        ]
    }
}