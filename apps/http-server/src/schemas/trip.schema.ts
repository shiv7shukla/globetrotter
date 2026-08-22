import z from "zod";

export const newTripSchema = z.object({
    tripName: z.string().nonempty(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    city: z.string().nonempty(),
    country: z.string().nonempty(),
})