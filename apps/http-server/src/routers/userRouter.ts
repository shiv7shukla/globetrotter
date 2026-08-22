import { Router } from "express";
import { registrationController } from "../controllers/user.controllers";
import { validate } from "../middlewares/validate";
import { userSchema } from "../schemas/user.schema";

export const userRouter: Router = Router();

userRouter.post("/registration", validate(userSchema), registrationController);