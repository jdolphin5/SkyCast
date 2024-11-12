import React, { Dispatch, SetStateAction } from "react";
import { OpenWeatherMap_Object, OpenWeatherMap_Weather_Day } from "../types";
import { format_OpenWeatherMap_forecastIntoDays } from "../Functions/OpenWeatherMap_util";

interface OneWeekForecastProps {
  weatherData: OpenWeatherMap_Object | null;
  setWeatherData: Dispatch<SetStateAction<OpenWeatherMap_Object | null>>;
}

const OneWeekForecast: React.FC<OneWeekForecastProps> = (
  props: OneWeekForecastProps
) => {
  const weatherDataFormattedIntoDays: OpenWeatherMap_Weather_Day[] | null =
    format_OpenWeatherMap_forecastIntoDays(props.weatherData);

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
          position: "relative",
        }}
      >
        <div
          style={{
            width: "calc(100%-40px)",
            overflow: "auto",
            //margin: "auto",
            position: "relative",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            //border: "1px solid black",
            fontSize: "18px",
            textAlign: "left",
            paddingLeft: "15px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "#D9D9D9",
          }}
        >
          <div className="grid-wrapper-one-week-forecast">
            {weatherDataFormattedIntoDays?.map(
              (w: OpenWeatherMap_Weather_Day, index) => (
                <React.Fragment key={index}>
                  <div className="col1">{index === 0 ? "Today" : w.day}:</div>
                  <div className="col2">{w.weather_summary}</div>
                  <div className="col3" style={{ textAlign: "center" }}>
                    {w.low}°
                  </div>
                  <div className="col4" style={{ textAlign: "center" }}>
                    -
                  </div>
                  <div className="col5" style={{ textAlign: "center" }}>
                    {w.high}°
                  </div>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneWeekForecast;
