import axios, { AxiosResponse } from "axios";
import {
  mapCoordinatesResponse,
  mapWeatherDataResponse,
} from "../Mappers/OpenWeatherData";
import {
  OpenWeatherMap_Coordinates_Object,
  OpenWeatherMap_Object,
} from "../types";

export const loginCall = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/local/login",
      { username, password },
      {
        withCredentials: true,
      }
    );
    console.log("Login response:", response.data);
    if (response.data.redirectUrl) {
      window.location.href = response.data.redirectUrl;
    }
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
  }
};

export const signupCall = async (
  username: string,
  password: string
): Promise<any | null> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/local/signup",
      {
        username: username,
        password: password,
        withCredentials: true,
      }
    );

    window.location.href = response.data.redirectUrl;
  } catch (error: any) {
    console.error("Error signing up with username/password", error);

    if (error.response) {
      window.location.href = error.response.data.redirectUrl;
    }
  }
};

export const isAuthenticatedCall = async (): Promise<any | null> => {
  try {
    const response = await axios.get(
      "http://localhost:3000/auth/isAuthenticated",
      {
        //need to send session cookie with the request
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error returning authentication status", error);
  }
};

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
