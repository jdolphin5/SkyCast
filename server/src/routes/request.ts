//const passport = require("passport");
//const GoogleStrategy = require("passport-google-oauth20").Strategy;
//const LocalStrategy = require("passport-local").Strategy;

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { db } from "../db/index.js";

passport.use(
    new LocalStrategy(
        {
            usernameField: "username", // Default field for username in form
            passwordField: "password"
        },
        async (username: string, password: string, done: any) => {
            try {
                // Fetch user from the database
                console.log("username:", username);
                const user = await db
                    .select()
                    .from(users)
                    .where(eq(users.username, username))
                    .execute();

                if (!user.length) {
                    return done(null, false, {
                        message: "Incorrect username or password"
                    });
                }

                // Compare the hashed passwords
                const match = await bcrypt.compare(
                    password,
                    String(user[0].password)
                );
                if (!match) {
                    return done(null, false, {
                        message: "Incorrect username or password"
                    });
                }

                // Authentication successful
                return done(null, user[0]);
            } catch (err) {
                return done(err);
            }
        }
    )
);

// Serialize user into the session
passport.serializeUser((user: any, done: any) => {
    console.log("serialising user");
    done(null, user);
});

// Deserialize user from the session
passport.deserializeUser(async (user: any, done: any) => {
    console.log("deserialising user");
    done(null, user);
});

export { passport };
