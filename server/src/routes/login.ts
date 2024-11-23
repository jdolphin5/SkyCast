import express, { Request, Response, Router } from "express";
import axios from "axios";
import { reportError, getErrorMessage } from "../utils/error.js";
import bcrypt from "bcrypt";

export const loginRouter: Router = express.Router({
    mergeParams: true
});

loginRouter.post("/", async (req: Request, res: Response) => {
    const username: string = req.body.username;
    const password: string = req.body.password;

    try {
        console.log("username", username, "password", password);

        const saltRounds: number = 10;

        bcrypt.genSalt(saltRounds, (err, salt: any) => {
            if (err) {
                console.log("error generating salt for password");
                return;
            }

            bcrypt.hash(password, salt, (err, hash: any) => {
                if (err) {
                    console.log("error hashing password");
                    return;
                }

                console.log("hashed pw", hash);
            });
        });

        res.json("login response");
    } catch (error) {
        reportError({ message: getErrorMessage(error) });
    }
});
