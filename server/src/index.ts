import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import swaggerDocs from "./swagger.js"; // ts compiles to js
import { reportError, getErrorMessage } from "./utils/error.js";
import { logRequest } from "./middlewares/requestLogger.js";

dotenv.config();

const app: Express = express();

app.use(logRequest);

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
