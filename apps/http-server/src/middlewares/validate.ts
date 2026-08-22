import { ValidationError } from '../lib/AppError';
import { ZodObject } from "zod";
import type { Request, Response, NextFunction } from "express";

export const validate = (schema: ZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            return next(new ValidationError("Validation failed", fieldErrors));
    }

        req.body = result.data;
        next();
    };