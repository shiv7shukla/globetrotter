import type { Request, Response } from "express"
import { asyncHandler } from "../lib/asyncHandler"
import bcrypt from "bcryptjs";
import { User } from "../models/userModel";
import { UnauthorizedError } from "../lib/AppError";

export const registrationController = asyncHandler(async (req: Request, res: Response) => {
    const salt = await bcrypt.genSalt(10);
    const {
        firstName,
        lastName,
        email,
        password,
        city,
        country,
        phoneNumber,
    } = req.body.data;
    const hashedPwd = await bcrypt.hash(password, salt);
    const user = await User.create({ firstName, lastName, email, password: hashedPwd, city, country, phoneNumber });
    return res.status(201).json({ user });
});

export const logInController = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body.data;
    const userExists = await User.findOne({ email }).exec();
    if (!userExists)
        throw new UnauthorizedError("Email does not exist");
    const match = await bcrypt.compare(userExists.password, password);
    if (!match)
        throw new UnauthorizedError("Incorrect Password");
    return res.status(200).json({ msg: "user loggedin" });
});

