import { Router } from "express";
import { validate } from "../middlewares/validate";
import { newTripSchema } from "../schemas/trip.schema";

export const tripRouter: Router = Router();

tripRouter.post("/newtrip", validate(newTripSchema), );