import express, { Request, Response, Router } from "express";
import { getErrorMessage } from "../utils/error.js";
import passport from "passport";

export const loginRouter: Router = express.Router({
    mergeParams: true
});

loginRouter.post(
    "/",
    passport.authenticate("local", {
        failureRedirect: "http://localhost:8080/",
        failureMessage: true
    }),
    async (req: Request, res: Response) => {
        //successful authentication, redirect to :8080/loggedin
        console.log("app.get(/locallogin req.user:", req.user);
        res.send("http://localhost:8080/loggedin");
    }
);
