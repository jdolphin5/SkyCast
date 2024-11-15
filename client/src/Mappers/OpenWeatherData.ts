import { AxiosResponse } from "axios";
import {
  OpenWeatherMap_Coordinates_Object,
  OpenWeatherMap_Object,
  OpenWeatherMap_Weather_Object,
  OpenWeatherMap_Three_Hour_Object,
  OpenWeatherMap_City_Object,
} from "../types";

export const mapCoordinatesResponse = (
  response: AxiosResponse
): OpenWeatherMap_Coordinates_Object => {
  const res: OpenWeatherMap_Coordinates_Object = {
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
): OpenWeatherMap_Object => {
  let three_hour_res: OpenWeatherMap_Three_Hour_Object[] = [];

  response.data.list.map((d: any) => {
    let weatherArr: OpenWeatherMap_Weather_Object[] = [];

    d.weather.map((f: any) => {
      const w: OpenWeatherMap_Weather_Object = {
        id: f.id,
        main: f.main,
        description: f.description,
        icon: f.icon,
      };

      weatherArr.push(w);
    });

    const obj: OpenWeatherMap_Three_Hour_Object = {
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
      rain_chance_3h: d.rain ? d.rain["3h"] : "0",
      sys_pod: d.sys.pod,
      datetime_txt: d.dt_txt,
    };

    three_hour_res.push(obj);
  });

  const city_res: OpenWeatherMap_City_Object = {
    id: response.data.city.id,
    name: response.data.city.name,
    lat: response.data.city.coord.lat,
    lon: response.data.city.coord.lon,
    country: response.data.city.country,
    population: response.data.city.population,
    timezone: response.data.city.timezone,
    sunrise: response.data.city.sunrise, //Unix, UTC
    sunset: response.data.city.sunset,
  };

  const res = {
    weather: three_hour_res,
    city: city_res,
  };

  return res;
};
