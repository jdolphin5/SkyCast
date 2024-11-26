import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { users } from "./schema.js";
import * as schema from "./schema.js";
dotenv.config();

const databaseUrl = process.env.MYSQL_DATABASE_URL;

if (!databaseUrl) {
    throw new Error(
        "MYSQL_DATABASE_URL is not defined in environment variables."
    );
}

export const db = drizzle(databaseUrl, { schema, mode: "default" });

export const dbSelectFunction = async () => {
    try {
        const result = await db.select({ id: users.customId }).from(users);
        console.log(result);
    } catch (error) {
        console.error("Error executing query", error);
    }
};
