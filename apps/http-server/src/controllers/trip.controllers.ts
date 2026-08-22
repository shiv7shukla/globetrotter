import type { Request, Response } from "express";
import { Trip } from "../models/tripModel";
import { asyncHandler } from "../lib/asyncHandler";

export const newTripController = asyncHandler(async (req: Request, res: Response) => {
    const {
        tripName,
        startDate,
        endDate,
        city, 
        country
    } = req.body.data;

    const newTrip = await Trip.create({
        tripName,
        startDate,
        endDate,
        city, 
        country 
    });

    return res.status(201).json({ newTrip });
});