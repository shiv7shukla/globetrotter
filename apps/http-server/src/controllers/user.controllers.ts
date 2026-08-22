import type { Request, Response } from "express"
import { asyncHandler } from "../lib/asyncHandler"
import bcrypt from "bcryptjs";
import { User } from "../models/userModel";

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
    res.status(201).json({ user });
})