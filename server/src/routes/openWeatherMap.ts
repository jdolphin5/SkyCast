import express, { Express, Request, Response, Router } from "express";
import axios from "axios";
import { reportError, getErrorMessage } from "../utils/error.js";

export const openWeatherMapRouter: Router = express.Router({
    mergeParams: true
});

openWeatherMapRouter.get(
    "/GetCoordinates/:city/:state/:country",
    async (req: Request, res: Response) => {
        const city: String = req.params.city;
        const state: String = req.params.state;
        const country: String = req.params.country;

        try {
            const response = await axios.get(
                "http://api.openweathermap.org/geo/1.0/direct?q=" +
                    city +
                    "," +
                    state +
                    "," +
                    country +
                    "&appid=" +
                    process.env.OPENWEATHERMAP_API_KEY
            );
            res.json(response.data);
        } catch (error) {
            reportError({ message: getErrorMessage(error) });
        }
    }
);
