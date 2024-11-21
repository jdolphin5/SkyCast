import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { users } from "./schema.js";
dotenv.config();

const databaseUrl = process.env.MYSQL_DATABASE_URL;

if (!databaseUrl) {
    throw new Error(
        "MYSQL_DATABASE_URL is not defined in environment variables."
    );
}

const db = drizzle(databaseUrl);

export const fun = async () => {
    try {
        const result = await db.select({ id: users.id }).from(users);
        console.log(result);
    } catch (error) {
        console.error("Error executing query", error);
    }
};
