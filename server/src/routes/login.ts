import express, { Request, Response, Router } from "express";
import axios from "axios";
import { reportError, getErrorMessage } from "../utils/error.js";

export const loginRouter: Router = express.Router({
    mergeParams: true
});

loginRouter.post("/", async (req: Request, res: Response) => {
    const username: string = req.params.username;
    const password: string = req.params.password;

    try {
        console.log("username", username, "password", password);
        res.json("login response");
    } catch (error) {
        reportError({ message: getErrorMessage(error) });
    }
});
