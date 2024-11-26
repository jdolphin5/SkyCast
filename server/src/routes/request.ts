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

const databaseUrl = process.env.MYSQL_DATABASE_URL;

if (!databaseUrl) {
    throw new Error(
        "MYSQL_DATABASE_URL is not defined in environment variables."
    );
}

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
    done(null, user);
});

// Deserialize user from the session
passport.deserializeUser(async (user: any, done: any) => {
    done(null, user);
});

export { passport };
