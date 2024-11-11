import axios, { AxiosResponse } from "axios";
import {
  mapCoordinatesResponse,
  mapWeatherDataResponse,
} from "../Mappers/OpenWeatherData";
import { CoordinatesObject, OpenWeatherMapObject } from "../types";

export const getCoordinatesData =
  async (): Promise<CoordinatesObject | null> => {
    try {
      const response: AxiosResponse = await axios.get(
        process.env.REACT_APP_SERVER_URI +
          "/openWeatherMap/GetCoordinates/Newcastle/NSW/AU"
      );
      return mapCoordinatesResponse(response);
    } catch (error) {
      console.error("Error fetching coordinates data:", error);
      return null;
    }
  };

export const getWeatherData = async (
  lat: number,
  lon: number
): Promise<OpenWeatherMapObject[] | null> => {
  try {
    const response: AxiosResponse = await axios.get(
      process.env.REACT_APP_SERVER_URI +
        "/openWeatherMap/GetForecast/" +
        lat +
        "/" +
        lon
    );

    return mapWeatherDataResponse(response);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
