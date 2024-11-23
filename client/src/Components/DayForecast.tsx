import React, { Dispatch, SetStateAction } from "react";
import {
  OpenWeatherMap_Object,
  OpenWeatherMap_Weather_Summary,
} from "../types";
import { format_OpenWeatherMap_forecastIntoSingleSummary } from "../Functions/OpenWeatherMap_util";

interface DayForecastProps {
  weatherData: OpenWeatherMap_Object | null;
  setWeatherData: Dispatch<SetStateAction<OpenWeatherMap_Object | null>>;
}

const DayForecast: React.FC<DayForecastProps> = (props: DayForecastProps) => {
  const weatherDataFormattedIntoSummary: OpenWeatherMap_Weather_Summary | null =
    format_OpenWeatherMap_forecastIntoSingleSummary(props.weatherData);

  return (
    <div
      style={{
        margin: "auto",
        width: "339px",
        height: "150px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "55%",
            height: "100%",
            overflow: "auto",
            margin: "auto",
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            border: "1px solid black",
            backgroundColor: "#D9D9D9",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              marginTop: "10px",
              marginBottom: "3px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {weatherDataFormattedIntoSummary?.location}
          </div>
          <div
            style={{
              fontSize: "12px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Lon: {weatherDataFormattedIntoSummary?.lon}, Lat:{" "}
            {weatherDataFormattedIntoSummary?.lat}
          </div>
          <div
            style={{
              fontSize: "50px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {weatherDataFormattedIntoSummary?.temp}°
          </div>
          <div
            style={{
              fontSize: "12px",
              marginBottom: "5px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {weatherDataFormattedIntoSummary?.weatherType}
          </div>
          <div
            style={{
              fontSize: "12px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            L:{weatherDataFormattedIntoSummary?.lowTemp}° H:
            {weatherDataFormattedIntoSummary?.highTemp}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
