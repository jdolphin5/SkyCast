import React, { Dispatch, SetStateAction } from "react";
import {
  OpenWeatherMap_Object,
  OpenWeatherMap_Three_Hour_Object,
} from "../types";
import { format_OpenWeatherMap_forecastGetFirstForecast } from "../Functions/OpenWeatherMap_util";

interface MiscDetailsProps {
  weatherData: OpenWeatherMap_Object | null;
  setWeatherData: Dispatch<SetStateAction<OpenWeatherMap_Object | null>>;
}

const MiscDetails: React.FC<MiscDetailsProps> = (props: MiscDetailsProps) => {
  const forecast: OpenWeatherMap_Three_Hour_Object | null =
    format_OpenWeatherMap_forecastGetFirstForecast(props.weatherData);
  let timezone =
    props.weatherData?.city.timezone != null //checks both undefined and null
      ? String(props.weatherData.city.timezone / 36)
      : "undefined";

  return (
    <div
      style={{
        margin: "auto",
        width: "339px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          textAlign: "left",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "15px",
          paddingBottom: "15px",
          backgroundColor: "#D9D9D9",
          position: "relative",
        }}
      >
        {forecast && (
          <div>
            <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
              Wind speed: {forecast.wind_speed}m/s (average of 2 mins)
            </div>
            <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
              Wind direction: {forecast.wind_deg}°
            </div>
            <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
              Wind gust: {forecast.wind_gust}m/s
            </div>
            <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
              Rain: {forecast.rain_chance_3h}mm/h (last 3 hours)
            </div>
            <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
              Timezone: +{timezone} UTC
            </div>
            <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
              Atmospheric Pressure: {forecast.pressure} hPa
            </div>
            <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
              Humidity: {forecast.humidity}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiscDetails;
