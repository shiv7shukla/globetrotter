import z from "zod";

export const userSchema = z.object({
    email: z.string().email("Must be a valid email address").nonempty(),
    firstName: z.string().min(3, "Too small to be a name").max(15),
    password: z.string().min(8, "Password must be at least 8 characters"),
    lastName: z.string().min(3, "Too small to be a name").max(15),
    city: z.string().nonempty(),
    country: z.string().nonempty(),
    phoneNumber: z.string().nonempty()
});