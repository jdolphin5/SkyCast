//const passport = require("passport");
//const GoogleStrategy = require("passport-google-oauth20").Strategy;
//const LocalStrategy = require("passport-local").Strategy;

import { drizzle } from "drizzle-orm/mysql2";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import * as schema from "../db/schema.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { saltAndHash } from "../utils/login.js";
import bcrypt from "bcrypt";

const databaseUrl = process.env.MYSQL_DATABASE_URL;

if (!databaseUrl) {
    throw new Error(
        "MYSQL_DATABASE_URL is not defined in environment variables."
    );
}

const db = drizzle(databaseUrl, { schema, mode: "default" });

/*
passport.use(
    new GoogleStrategy(
        {
            clientID: String(process.env.CLIENT_ID),
            clientSecret: String(process.env.CLIENT_SECRET),
            callbackURL: "/auth/google/callback"
        },
        async (
            accessToken: string,
            refreshToken: string,
            profile: any,
            done: any
        ) => {
            console.log("profile", profile);

            const userEmail = profile.emails[0].value;

            // Check if user already exists in our db
            const existingUser = await db.query.users.findFirst({
                where: (users: { google_sub: any }, { eq: any }: any) =>
                    eq(users.google_sub, profile.id)
            });

            console.log("Found user:", existingUser);

            if (existingUser) {
                // User already exists
                //add email to user object (email can change according to google)
                existingUser.email = userEmail;
                return done(null, existingUser);
            }

            // If not, create a new user
            const newUser = await db
                .insert(users)
                .values([
                    {
                        email: userEmail,
                        login_type: 1,
                        google_sub: profile.id,
                        access_level: 1,
                        last_login_date_time: new Date()
                    }
                ])
                .$returningId();

            //add email to user object (email can change according to google)
            //newUser.email = userEmail;
            console.log("Created user:", newUser);

            return done(null, newUser);
        }
    )
);
*/

passport.use(
    new LocalStrategy(async (username: string, password: string, done: any) => {
        // Check if user already exists in our db
        const existingUser = await db.query.users.findFirst({
            where: (users: { username: any }, { eq: any }: any) =>
                eq(users.username, username)
        });

        if (existingUser) {
            console.log("Found user:", existingUser);

            if (existingUser.password) {
                bcrypt.compare(
                    password,
                    existingUser.password,
                    (err, result) => {
                        if (err) {
                            console.error("Error comparing password:", err);
                            return done(null, null);
                        } else if (result) {
                            console.log("Password is correct!");
                            return done(null, existingUser);
                        } else {
                            console.log("Password is incorrect.");
                            return done(null, null);
                        }
                    }
                );
            }
        }
        //if no user, create the user
        else {
            const hashedPassword = await saltAndHash(password, 10).then(
                (pass: string) => {
                    return pass;
                }
            );

            const insertedUser = await db
                .insert(users)
                .values([
                    {
                        username: username,
                        login_type: 0,
                        password: hashedPassword,
                        google_sub: null,
                        access_level: 1,
                        last_login_date_time: new Date()
                    }
                ])
                .$returningId();
            console.log("Created user:", insertedUser);
            return done(null, insertedUser);
        }
    })
);

// Serialize user into the session
passport.serializeUser((user: any, done: any) => {
    done(null, user);
});

// Deserialize user from the session
passport.deserializeUser(async (user: any, done: any) => {
    done(null, user);
});

export { passport };
