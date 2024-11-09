import express, { Express, Request, Response, Router } from "express";
import axios from "axios";
import { reportError, getErrorMessage } from "../utils/error.js";

export const openWeatherMapRouter: Router = express.Router({
    mergeParams: true
});

openWeatherMapRouter.get(
    "/GetCoordinates/:city/:state/:country",
    async (req: Request, res: Response) => {
        const city: string = req.params.city;
        const state: string = req.params.state;
        const country: string = req.params.country;

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

openWeatherMapRouter.get(
    "/GetForecast/:lat/:lon",
    async (req: Request, res: Response) => {
        const lat: string = req.params.lat;
        const lon: string = req.params.lon;

        try {
            const response = await axios.get(
                "http://api.openweathermap.org/data/2.5/forecast?lat=" +
                    lat +
                    "&lon=" +
                    lon +
                    "&appid=" +
                    process.env.OPENWEATHERMAP_API_KEY
            );
            res.json(response.data);
        } catch (error) {
            reportError({ message: getErrorMessage(error) });
        }
    }
);
