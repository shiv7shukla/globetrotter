import { AppError } from "./AppError";
import type { Request, Response, NextFunction } from "express";

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
        error: {
            code: err.code,
            message: err.message,
            ...(err.details ? { fields: err.details } : {}),
        },
        });
    }

    console.error("UNEXPECTED ERROR:", err);
    res.status(500).json({
        error: { code: "INTERNAL_ERROR", message: "Something went wrong" },
    });
};