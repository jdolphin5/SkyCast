import express, { NextFunction, Request, Response, Router } from "express";
import { getErrorMessage } from "../utils/error.js";
import passport from "passport";
import { users } from "../db/schema.js";
import bcrypt from "bcrypt";
import { db } from "../db/index.js";
import { eq } from "drizzle-orm";

export const authRouter: Router = express.Router({
    mergeParams: true
});

authRouter.post(
    "/local/login",
    (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate("local", (err: Error, user: any, info: any) => {
            if (err) {
                console.error("Error during login:", err);
                return res.status(500).json({
                    error: "An error occurred",
                    message: "Authentication failed - error",
                    redirectUrl: "http://localhost:8080/"
                });
            }

            if (!user) {
                console.log("User not found - authentication failed");

                return res.status(401).json({
                    error: info?.message || "Login failed",
                    message: "User not found - authentication failed",
                    redirectUrl: "http://localhost:8080/"
                });
            }

            // Successful authentication
            req.login(user, (loginErr) => {
                if (loginErr) {
                    console.log("Failed to log in user");

                    return res.status(500).json({
                        error: "Failed to log in user",
                        message: "Failed to login user",
                        redirectUrl: "http://localhost:8080/"
                    });
                }
                return res.json({
                    success: true,
                    message: "Login successful",
                    redirectUrl: "http://localhost:8080/auth/loggedin"
                });
            });
        })(req, res, next); // Pass req, res, next to the middleware
    }
);

authRouter.post(
    "/local/signup",
    async (req: Request, res: Response): Promise<void> => {
        const { username, password } = req.body;

        try {
            // Check if user already exists
            const existingUser = await db
                .select()
                .from(users)
                .where(eq(users.username, username))
                .execute();
            if (existingUser.length > 0) {
                console.log("user already exists");
                res.status(400).json({
                    error: "User already exists",
                    message: "User already exists",
                    redirectUrl: "http://localhost:8080/"
                });
                return;
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            await db
                .insert(users)
                .values({
                    username: username,
                    password: hashedPassword,
                    login_type: 0,
                    access_level: 1
                })
                .execute();

            res.json({
                success: true,
                message: "User registered successfully",
                redirectUrl: "http://localhost:8080/auth/loggedin"
            });
        } catch (err) {
            console.error("Error during sign-up:", err);
            res.status(500).json({
                error: "An error occurred during sign-up",
                message: "An error occurred during sign-up",
                redirectUrl: "http://localhost:8080/"
            });
        }
    }
);

authRouter.get("/isAuthenticated", async (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
        res.send({ isAuth: true });
    } else {
        res.send({ isAuth: false });
    }
});
