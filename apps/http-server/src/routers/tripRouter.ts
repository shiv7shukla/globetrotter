import { Router } from "express";
import { validate } from "../middlewares/validate";
import { newTripSchema } from "../schemas/trip.schema";

export const userRouter: Router = Router();

userRouter.post("/newtrip", validate(newTripSchema), );