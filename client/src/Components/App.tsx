import React, { useEffect, useRef, useState } from "react";
import VerticalSpacing from "./VerticalSpacing";
import Header from "./Header/Header";
import DayForecast from "./DayForecast";
import OneWeekForecast from "./OneWeekForecast";
import MiscDetails from "./MiscDetails";
import NavLayout from "./Nav/NavLayout";
import * as schedule from "node-schedule";
import {
  OpenWeatherMap_Coordinates_Object,
  OpenWeatherMap_Object,
} from "../types";
import Menu from "./Nav/Menu";
import { getCoordinatesData, getWeatherData } from "../Functions/API";
import Loading from "./Loading";

const App: React.FC = () => {
  const [navigationSelected, setNavigationSelected] = useState<string>("none");
  const [shouldShowMenu, setShouldShowMenu] = useState<boolean>(false);
  const [coordinatesData, setCoordinatesData] =
    useState<OpenWeatherMap_Coordinates_Object | null>(null);
  const [weatherData, setWeatherData] = useState<OpenWeatherMap_Object | null>(
    null
  );
  const [lastAPICall, setLastAPICall] = useState<string | null>(null);
  const paramsWeatherDataAPICallRef = useRef({ lat: 1, lon: 1 });

  useEffect(() => {
    getCoordinatesData().then(
      (data: OpenWeatherMap_Coordinates_Object | null) =>
        setCoordinatesData(data)
    );
    setLastAPICall("get_coordinates");
  }, []);

  useEffect(() => {
    if (
      (coordinatesData as OpenWeatherMap_Coordinates_Object) &&
      coordinatesData !== null
    ) {
      paramsWeatherDataAPICallRef.current = {
        lat: coordinatesData.lat,
        lon: coordinatesData.lon,
      };

      getWeatherData(coordinatesData.lat, coordinatesData.lon).then(
        (data: OpenWeatherMap_Object | null) => setWeatherData(data)
      );
      setLastAPICall("get_weather_object");
    }
  }, [coordinatesData]);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  useEffect(() => {
    schedule.gracefulShutdown();

    if (lastAPICall === "get_coordinates") {
      const job = schedule.scheduleJob("20 * * * * *", () => {
        getCoordinatesData().then(
          (data: OpenWeatherMap_Coordinates_Object | null) =>
            setCoordinatesData(data)
        );
      });
    } else if (lastAPICall === "get_weather_object") {
      const job = schedule.scheduleJob("20 * * * * *", () => {
        getWeatherData(
          paramsWeatherDataAPICallRef.current.lat,
          paramsWeatherDataAPICallRef.current.lon
        ).then((data: OpenWeatherMap_Object | null) => setWeatherData(data));
      });
    }
  }, [lastAPICall]);

  return (
    <div
      style={{
        textAlign: "center",
        width: "375px",
        height: "auto",
        border: "1px solid black",
        backgroundColor: "#BABABA",
      }}
    >
      <VerticalSpacing />
      <Header
        navigationSelected={navigationSelected}
        setNavigationSelected={setNavigationSelected}
        shouldShowMenu={shouldShowMenu}
        setShouldShowMenu={setShouldShowMenu}
      />
      <Menu
        navigationSelected={navigationSelected}
        setNavigationSelected={setNavigationSelected}
        shouldShowMenu={shouldShowMenu}
        setShouldShowMenu={setShouldShowMenu}
      />
      <NavLayout
        navigationSelected={navigationSelected}
        setNavigationSelected={setNavigationSelected}
        shouldShowMenu={shouldShowMenu}
        setShouldShowMenu={setShouldShowMenu}
      />
      {!weatherData && <Loading />}
      {weatherData && (
        <div>
          <DayForecast />
          <VerticalSpacing />
          <OneWeekForecast
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
          <VerticalSpacing />
          <div
            style={{
              margin: "auto",
              width: "339px",
              height: "180px",
              border: "1px solid black",
            }}
          >
            <MiscDetails />
          </div>
        </div>
      )}

      <VerticalSpacing />
    </div>
  );
};

export default App;
