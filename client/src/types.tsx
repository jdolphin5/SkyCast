export type OpenWeatherMapObject = {
  datetime: string;
  temp: number;
  tempmax: number;
  tempmin: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
  weather: WeatherObject[];
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

export type WeatherObject = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CoordinatesObject = {
  lat: number;
  lon: number;
  city: string;
  state: string;
  country: string;
};
