export class AppError extends Error {
    constructor(
        public statusCode: number,
        public code: string,
        message: string,
        public isOperational = true,
        public details?: Record<string, string[] | undefined>
    ) {
        super(message);
    }
}

export class ValidationError extends AppError {
    constructor(message: string, details?: Record<string, string[] | undefined>) {
        super(400, "VALIDATION_ERROR", message, true, details);
    }
}

export class NotFoundError extends AppError {
    constructor(resource: string) {
        super(404, "NOT_FOUND", `${resource} not found`);
    }
}

export class ConflictError extends AppError {
    constructor(message: string) {
        super(409, "CONFLICT", message);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "Authentication required") {
        super(401, "UNAUTHORIZED", message);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "You don't have permission to do this") {
        super(403, "FORBIDDEN", message);
    }
}

export class DatabaseError extends AppError {
    constructor(message = "A database error occurred") {
        super(500, "DATABASE_ERROR", message, false);
    }
}