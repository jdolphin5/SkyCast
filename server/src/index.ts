import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import swaggerDocs from "./swagger.js"; // ts compiles to js
import { reportError, getErrorMessage } from "./utils/error.js";
import { logRequest } from "./middlewares/requestLogger.js";
import { mongoose }, mongoose from "mongoose";

dotenv.config();

const app: Express = express();

//connect to mongoDB
const dbURI: string =
    "mongodb+srv://" +
    process.env.MONGO_DB_USER +
    ":" +
    process.env.MONGO_DB_PASSWORD +
    "@vc.7tdrb.mongodb.net/" +
    process.env.MONGO_DB_COLLECTION_ONE +
    "?retryWrites=true&w=majority&appName=vc";

mongoose
    .connect(dbURI)
    .then((result: typeof mongoose) => console.log("Connected to Mongo DB"))
    .catch((err: Error) => console.log(err));

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
