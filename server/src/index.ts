import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import swaggerDocs from "./swagger.js"; // ts compiles to js
import { reportError, getErrorMessage } from "./util/error.js";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Successful response.");
});

try {
    app.listen(process.env.SERVER_PORT, () =>
        console.log("Example app is listening on port 3000.")
    );

    swaggerDocs(app, process.env.SERVER_PORT);
} catch (error) {
    reportError({ message: getErrorMessage(error) });
}
