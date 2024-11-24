import express, { Request, Response, Router } from "express";
import { login } from "../services/login.js";
import { getErrorMessage } from "../utils/error.js";

export const loginRouter: Router = express.Router({
    mergeParams: true
});

loginRouter.post("/", async (req: Request, res: Response) => {
    const username: string = req.body.username;
    const password: string = req.body.password;
    try {
        login(username, password);
        res.json("login response");
    } catch (error) {
        reportError({ message: getErrorMessage(error) });
    }
});
