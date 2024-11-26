import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import swaggerDocs from "./swagger.js"; // ts compiles to js
import { reportError, getErrorMessage } from "./utils/error.js";
import { logRequest } from "./middlewares/requestLogger.js";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth.js";
import { visualCrossingRouter } from "./routes/visualCrossing.js";
import { openWeatherMapRouter } from "./routes/openWeatherMap.js";
import cors from "cors";
import { dbSelectFunction } from "./db/index.js";
import { passport } from "./routes/request.js"; //import request for OAuth funcs

dotenv.config();

//should not be used in production environment - default session storage MemoryStore
//likely to leak memory
import session from "express-session";

const app: Express = express();

dbSelectFunction();

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
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true
    })
);

//ensure preflight OPTIONS requests are handled
app.options("*", cors());

app.use(express.json());

//store session data on server-side using express-session middleware
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
//same as app.use(passport.authenticate('session'));
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
    res.send("Successful response.");
});

//app.use("/visualCrossing", visualCrossingRoutes);
app.use("/auth", authRouter);
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
