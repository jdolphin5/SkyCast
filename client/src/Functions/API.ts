import axios, { AxiosResponse } from "axios";
import {
  mapCoordinatesResponse,
  mapWeatherDataResponse,
} from "../Mappers/OpenWeatherData";
import {
  OpenWeatherMap_Coordinates_Object,
  OpenWeatherMap_Object,
} from "../types";

export const getCoordinatesData = async (
  city: string,
  state: string,
  countryCode: string
): Promise<OpenWeatherMap_Coordinates_Object | null> => {
  try {
    const response: AxiosResponse = await axios.get(
      process.env.REACT_APP_SERVER_URI +
        "/openWeatherMap/GetCoordinates/" +
        city +
        "/" +
        state +
        "/" +
        countryCode
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
): Promise<OpenWeatherMap_Object | null> => {
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
