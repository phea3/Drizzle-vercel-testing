import { createClient } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

// Create a client instance with the connection string
const client = createClient({
  connectionString: process.env.POSTGRES_URL,
});

// Use drizzle with the client instance
export const db = drizzle(client);
