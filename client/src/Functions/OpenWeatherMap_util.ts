import {
  OpenWeatherMap_Object,
  OpenWeatherMap_Three_Hour_Object,
  OpenWeatherMap_Weather_Day,
} from "../types";
import { convertKelvinToCelsiusAndRound } from "./Util";

const calcDayName = (datetime: number): string => {
  const DAYS: string[] = new Array(
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thurs",
    "Fri",
    "Sat"
  );

  const curDay = (datetime / 86400 + 4) % 7; //number of days after Thursday Jan 1 1970 (adjusted to Sun being first day)

  return DAYS[curDay];
};

const calcMostCommon = (arr: any[]): any => {
  return arr
    .sort(
      (a: any, b: any) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
};

const getWeatherDay = (
  weatherType: string[],
  curDayName: string,
  minTemp: number,
  maxTemp: number
): OpenWeatherMap_Weather_Day => {
  const mostCommonWeatherType: string = calcMostCommon(weatherType);
  const lowCelsius: number = convertKelvinToCelsiusAndRound(minTemp);
  const highCelsius: number = convertKelvinToCelsiusAndRound(maxTemp);

  const weatherDay = {
    day: curDayName,
    weather_summary: mostCommonWeatherType,
    low: lowCelsius,
    high: highCelsius,
  };

  return weatherDay;
};

export const format_OpenWeatherMap_forecastIntoDays = (
  input: OpenWeatherMap_Object | null
): OpenWeatherMap_Weather_Day[] | null => {
  if (!input) {
    return null;
  }

  let res: OpenWeatherMap_Weather_Day[] = [];

  let curDay = input.weather[0].datetime_txt.split(" ")[0];
  let curDayName = calcDayName(input.weather[0].datetime);

  let weatherType: string[] = [];
  let minTemp: number = Number.MAX_VALUE;
  let maxTemp: number = Number.MIN_VALUE;

  for (let i = 0; i < input.weather.length; i++) {
    const forecast: OpenWeatherMap_Three_Hour_Object = input.weather[i];

    const forecastDay = forecast.datetime_txt.split(" ")[0];

    if (forecastDay !== curDay) {
      const pushWeatherDay: OpenWeatherMap_Weather_Day = getWeatherDay(
        weatherType,
        curDayName,
        minTemp,
        maxTemp
      );

      res.push(pushWeatherDay);

      curDay = forecastDay;
      curDayName = calcDayName(forecast.datetime);
      weatherType = [];
      minTemp = Number.MAX_VALUE;
      maxTemp = Number.MIN_VALUE;
    }

    weatherType.push(forecast.weather[0].main);

    minTemp = Math.min(forecast.tempmin, minTemp);
    maxTemp = Math.max(forecast.tempmax, maxTemp);
  }

  const pushWeatherDay: OpenWeatherMap_Weather_Day = getWeatherDay(
    weatherType,
    curDayName,
    minTemp,
    maxTemp
  );

  res.push(pushWeatherDay);

  return res;
};
