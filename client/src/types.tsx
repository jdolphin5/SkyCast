/* OpenWeatherMap types: https://openweathermap.org/forecast5 */

export type OpenWeatherMap_Object = {
  weather: OpenWeatherMap_Three_Hour_Object[];
  city: OpenWeatherMap_City_Object;
};

export type OpenWeatherMap_Three_Hour_Object = {
  datetime: number;
  temp: number;
  tempmax: number;
  tempmin: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
  weather: OpenWeatherMap_Weather_Object[];
  clouds_all: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  visibility: number;
  pop: number;
  rain_chance_3h: number;
  sys_pod: string;
  datetime_txt: string;
};

export type OpenWeatherMap_City_Object = {
  id: number;
  name: string;
  lat: number;
  lon: number;
  country: string;
  population: number;
  timezone: number;
  sunrise: number; //Unix, UTC
  sunset: number;
};

export type OpenWeatherMap_Weather_Object = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type OpenWeatherMap_Coordinates_Object = {
  lat: number;
  lon: number;
  city: string;
  state: string;
  country: string;
};
