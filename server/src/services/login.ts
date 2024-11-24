import { getErrorMessage } from "../utils/error";
import bcrypt from "bcrypt";

export const login = (username: string, password: string) => {
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
};
