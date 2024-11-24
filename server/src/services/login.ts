import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "../db/schema.js";
import { users } from "../db/schema.js";

export const login = async (username: string, password: string) => {
    console.log("username", username, "password", password);

    const databaseUrl = process.env.MYSQL_DATABASE_URL;

    if (!databaseUrl) {
        throw new Error(
            "MYSQL_DATABASE_URL is not defined in environment variables."
        );
    }

    const db = drizzle(databaseUrl, { schema, mode: "default" });

    const saltRounds: number = 10;
    let hashedPassword = "";

    bcrypt.genSalt(saltRounds, (err, salt: any) => {
        if (err) {
            console.log("error generating salt for password");
            return;
        }

        bcrypt.hash(password, salt, async (err, hash: any) => {
            if (err) {
                console.log("error hashing password");
                return;
            }

            console.log("hashed pw", hash);

            const user = await db.query.users.findFirst({
                where: (users: { username: any }, { eq: any }: any) =>
                    eq(users.username, username)
            });

            if (!user) {
                const currentDateTime = new Date();
                console.log("current date/time:", currentDateTime);

                const insertedUser = await db.insert(users).values({
                    username: username,
                    password_hash: hash,
                    last_login_date_time: currentDateTime
                });

                console.log("user inserted");
            } else {
                console.log("user:", user);
            }
        });
    });
};
