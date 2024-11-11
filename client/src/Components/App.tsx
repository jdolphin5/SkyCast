import React, { useEffect, useRef, useState } from "react";
import VerticalSpacing from "./VerticalSpacing";
import Header from "./Header/Header";
import Summary from "./Summary";
import OneWeekForecast from "./OneWeekForecast";
import MiscDetails from "./MiscDetails";
import NavLayout from "./Nav/NavLayout";
import * as schedule from "node-schedule";
import { CoordinatesObject, OpenWeatherMapObject } from "../types";
import Menu from "./Nav/Menu";
import { getCoordinatesData, getWeatherData } from "../Functions/API";

const App: React.FC = () => {
  const [navigationSelected, setNavigationSelected] = useState<string>("none");
  const [showHideMenu, setShowHideMenu] = useState(false);
  const [coordinatesData, setCoordinatesData] =
    useState<CoordinatesObject | null>(null);
  const [weatherData, setWeatherData] = useState<OpenWeatherMapObject[] | null>(
    null
  );
  const [lastAPICall, setLastAPICall] = useState<string | null>(null);
  const paramsWeatherDataAPICallRef = useRef({ lat: 1, lon: 1 });

  useEffect(() => {
    getCoordinatesData().then((data: CoordinatesObject | null) =>
      setCoordinatesData(data)
    );
    setLastAPICall("get_coordinates");
  }, []);

  useEffect(() => {
    if ((coordinatesData as CoordinatesObject) && coordinatesData !== null) {
      paramsWeatherDataAPICallRef.current = {
        lat: coordinatesData.lat,
        lon: coordinatesData.lon,
      };

      getWeatherData(coordinatesData.lat, coordinatesData.lon).then(
        (data: OpenWeatherMapObject[] | null) => setWeatherData(data)
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
        getCoordinatesData().then((data: CoordinatesObject | null) =>
          setCoordinatesData(data)
        );
      });
    } else if (lastAPICall === "get_weather_object") {
      const job = schedule.scheduleJob("20 * * * * *", () => {
        getWeatherData(
          paramsWeatherDataAPICallRef.current.lat,
          paramsWeatherDataAPICallRef.current.lon
        ).then((data: OpenWeatherMapObject[] | null) => setWeatherData(data));
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
        showHideMenu={showHideMenu}
        setShowHideMenu={setShowHideMenu}
      />
      <Menu
        navigationSelected={navigationSelected}
        setNavigationSelected={setNavigationSelected}
        showHideMenu={showHideMenu}
        setShowHideMenu={setShowHideMenu}
      />
      <NavLayout
        navigationSelected={navigationSelected}
        setNavigationSelected={setNavigationSelected}
        showHideMenu={showHideMenu}
        setShowHideMenu={setShowHideMenu}
      />
      <Summary />
      <VerticalSpacing />
      <OneWeekForecast />
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
      <VerticalSpacing />
    </div>
  );
};

export default App;
