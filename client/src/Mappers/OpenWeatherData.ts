import { Axios, AxiosResponse } from "axios";
import { CoordinatesObject, OpenWeatherMapObject } from "../types";

export const mapCoordinatesResponse = (response: AxiosResponse) => {
  const res: CoordinatesObject = {
    lat: response.data[0].lat,
    lon: response.data[0].lon,
    city: response.data[0].name,
    state: response.data[0].state,
    country: response.data[0].country,
  };

  return res;
};

export const mapWeatherDataResponse = (response: AxiosResponse) => {
  const res: OpenWeatherMapObject[] = {
    _id: response.data.id,
    name: response.data.name,
    datetime: response.data.datetime,
    tempmax: response.data.tempmax,
    tempmin: response.data.tempmin,
    temp: response.data.temp,
    feelslikemax: response.data.feelslikemax,
    feelslikemin: response.data.feelslikemin,
    feelslike: response.data.feelslike,
    dew: response.data.dew,
    humidity: response.data.humidity,
    precip: response.data.precip,
    precipprob: response.data.precipprob,
    precipcover: response.data.precipcover,
    preciptype: response.data.preciptype,
    snow: response.data.snow,
    snowdepth: response.data.snowdepth,
    windgust: response.data.windgust,
    windspeed: response.data.windspeed,
    winddir: response.data.winddir,
    sealevelpressure: response.data.sealevelpressure,
    cloudcover: response.data.cloudcover,
    visibility: response.data.visibility,
    solarradiation: response.data.solarradiation,
    solarenergy: response.data.solarenergy,
    uvindex: response.data.uvindex,
    severerisk: response.data.severerisk,
    sunrise: response.data.sunrise,
    sunset: response.data.sunset,
    moonphase: response.data.moonphase,
    conditions: response.data.conditions,
    description: response.data.description,
    icon: response.data.icon,
    stations: response.data.stations,
  };
};
