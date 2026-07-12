import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePg } from "drizzle-orm/node-postgres";
import { neon } from "@neondatabase/serverless";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("Neither DATABASE_URL nor POSTGRES_URL environment variable is defined");
}

// Detect if we are connecting to a local database instance
const isLocal =
  connectionString.includes("localhost") ||
  connectionString.includes("127.0.0.1") ||
  connectionString.includes("::1");

// Export the database instance with the correct adapter
export const db = isLocal
  ? drizzlePg(new Pool({ connectionString }), { schema })
  : drizzleNeon(neon(connectionString), { schema });
