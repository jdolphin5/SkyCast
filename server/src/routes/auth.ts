import express, { Request, Response, Router } from "express";
import { getErrorMessage } from "../utils/error.js";
import passport from "passport";

export const authRouter: Router = express.Router({
    mergeParams: true
});

authRouter.post("/local/", (req, res, next) => {
    passport.authenticate("local", (err: Error, user: any, info: any) => {
        if (err || !user) {
            // Authentication failed, send a failure response
            return res.status(401).json({
                message: "Authentication failed",
                redirectUrl: "http://localhost:8080/" // Provide the redirect URL for the client to handle
            });
        }
        // Authentication successful, proceed to the next middleware
        req.login(user, (err) => {
            if (err) {
                return next(err); // Handle login error
            }
            // Send success response
            res.json({
                message: "Authentication successful",
                redirectUrl: "http://localhost:8080/auth/loggedin" // Provide the redirect URL for the client to handle
            });
        });
    })(req, res, next);
});
