import { Config, defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/app/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
