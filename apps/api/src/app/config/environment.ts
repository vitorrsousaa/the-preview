import dotenv from "dotenv";
import * as z from "zod";

export const envSchema = z.object({
	STAGE: z.literal("dev").or(z.literal("prod")),
});

dotenv.config();

try {
	envSchema.parse(process.env);
} catch (error) {
	if (error instanceof z.ZodError) {
		console.error("Error on environment variables:", error.errors);
		process.exit(1);
	}
}

export interface IConfig {
	STAGE: string;
}

export class Config implements IConfig {
	public STAGE = process.env.STAGE as string;
}
