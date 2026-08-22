import { userLogInSchema } from './../schemas/user.schema';
import { Router } from "express";
import { registrationController } from "../controllers/user.controllers";
import { validate } from "../middlewares/validate";
import { userRegistrationSchema } from "../schemas/user.schema";

export const userRouter: Router = Router();

userRouter.post("/registration", validate(userRegistrationSchema), registrationController);
userRouter.post("/login", validate(userLogInSchema), );