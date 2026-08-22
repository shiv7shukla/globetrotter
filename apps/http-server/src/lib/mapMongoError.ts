import { MongoServerError } from "mongodb";
import { Error as MongooseError } from "mongoose";
import { AppError, ConflictError, DatabaseError, ValidationError } from "./AppError";

export function mapMongoError(err: unknown): AppError {
    if (err instanceof MongoServerError && err.code === 11000) {
        const field = Object.keys(err.keyPattern ?? {})[0] ?? "field";
        return new ConflictError(`${field} already exists`);
    }

    if (err instanceof MongooseError.ValidationError) {
        const fieldErrors: Record<string, string[]> = {};
        for (const [key, e] of Object.entries(err.errors)) {
            fieldErrors[key] = [e.message];
        }
        return new ValidationError("Validation failed", fieldErrors);
    }

    if (err instanceof MongooseError.CastError) {
        return new ValidationError("Validation failed", {
            [err.path]: [`Invalid value for ${err.path}`],
        });
    }

    return new DatabaseError();
}