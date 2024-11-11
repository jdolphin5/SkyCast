import { Axios, AxiosResponse } from "axios";
import {
  CoordinatesObject,
  OpenWeatherMapObject,
  WeatherObject,
} from "../types";

export const mapCoordinatesResponse = (
  response: AxiosResponse
): CoordinatesObject => {
  const res: CoordinatesObject = {
    lat: response.data[0].lat,
    lon: response.data[0].lon,
    city: response.data[0].name,
    state: response.data[0].state,
    country: response.data[0].country,
  };

  return res;
};

export const mapWeatherDataResponse = (
  response: AxiosResponse
): OpenWeatherMapObject[] => {
  let res: OpenWeatherMapObject[] = [];

  response.data.list.map((d: any) => {
    let weatherArr: WeatherObject[] = [];

    d.weather.map((f: any) => {
      const w: WeatherObject = {
        id: f.id,
        main: f.main,
        description: f.description,
        icon: f.icon,
      };

      weatherArr.push(w);
    });

    const obj: OpenWeatherMapObject = {
      datetime: d.dt,
      temp: d.main.temp,
      tempmax: d.main.temp_max,
      tempmin: d.main.temp_min,
      pressure: d.main.pressure,
      sea_level: d.main.sea_level,
      grnd_level: d.main.grnd_level,
      humidity: d.main.humidity,
      temp_kf: d.main.temp_kf,
      weather: weatherArr,
      clouds_all: d.clouds.all,

      wind_speed: d.wind.speed,
      wind_deg: d.wind.deg,
      wind_gust: d.wind.gust,
      visibility: d.visibility,
      pop: d.pop,
      rain_chance_3h: d.rain ? d.rain["3h"] : undefined,
      sys_pod: d.sys.pod,
      datetime_txt: d.dt_txt,
    };

    res.push(obj);
  });

  return res;
};
