import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import swaggerDocs from "./swagger.js"; // ts compiles to js
import { reportError, getErrorMessage } from "./utils/error.js";
import { logRequest } from "./middlewares/requestLogger.js";
import mongoose from "mongoose";
import { loginRouter } from "./routes/login.js";
import { visualCrossingRouter } from "./routes/visualCrossing.js";
import { openWeatherMapRouter } from "./routes/openWeatherMap.js";
import cors from "cors";
import { fun } from "./db/index.js";
import { passport } from "./routes/request.js"; //import request for OAuth funcs

dotenv.config();

import session from "express-session";

const app: Express = express();

fun();

//connect to mongoDB
const mongoDBURI: string =
    "mongodb+srv://" +
    process.env.MONGO_DB_USER +
    ":" +
    process.env.MONGO_DB_PASSWORD +
    "@vc.7tdrb.mongodb.net/" +
    process.env.MONGO_DB_NAME +
    "?retryWrites=true&w=majority&appName=vc";

mongoose
    .connect(mongoDBURI)
    .then((result: typeof mongoose) => console.log("Connected to Mongo DB"))
    .catch((err: Error) => console.log(err));

app.use(logRequest);

app.use(
    cors({
        origin: "http://localhost:8080",
        credentials: true
    })
);

app.options("*", cors()); // Ensure preflight OPTIONS requests are handled

app.use(express.json());

app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // Should be true in production with HTTPS
            httpOnly: true, //prevent client-side scripts from accessing the cookie
            sameSite: "lax"
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
    res.send("Successful response.");
});

//app.use("/visualCrossing", visualCrossingRoutes);
app.use("/login", loginRouter);
app.use("/openWeatherMap", openWeatherMapRouter);
app.use("/visualCrossing", visualCrossingRouter);

try {
    app.listen(process.env.SERVER_PORT, () =>
        console.log("Example app is listening on port 3000.")
    );

    swaggerDocs(app, process.env.SERVER_PORT);
} catch (error) {
    reportError({ message: getErrorMessage(error) });
}
