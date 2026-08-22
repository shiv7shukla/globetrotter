import "dotenv/config"
import z from "zod"

const EnvSchema = z.object({
    PORT: z.coerce.number().nonoptional(),
    NODE_ENV: z.enum(["development", "production"]).nonoptional().default("development")
});

export const ENV = EnvSchema.parse(process.env);