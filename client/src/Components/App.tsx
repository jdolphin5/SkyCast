import React, { useEffect, useRef, useState } from "react";
import VerticalSpacing from "./VerticalSpacing";
import Header from "./Header/Header";
import DayForecast from "./DayForecast";
import OneWeekForecast from "./OneWeekForecast";
import MiscDetails from "./MiscDetails";
import NavLayout from "./Nav/NavLayout";
import * as schedule from "node-schedule";
import {
  Coordinates_Parameters_Object,
  OpenWeatherMap_Coordinates_Object,
  OpenWeatherMap_Object,
} from "../types";
import Menu from "./Nav/Menu";
import { getCoordinatesData, getWeatherData } from "../Functions/API";
import Loading from "./Loading";
import SearchLocation from "./SearchLocation";

const App: React.FC = () => {
  const [navigationSelected, setNavigationSelected] = useState<string>("none");
  const [shouldShowMenu, setShouldShowMenu] = useState<boolean>(false);
  const [coordinatesData, setCoordinatesData] =
    useState<OpenWeatherMap_Coordinates_Object | null>(null);
  const [weatherData, setWeatherData] = useState<OpenWeatherMap_Object | null>(
    null
  );
  const [lastAPICall, setLastAPICall] = useState<string | null>(null);
  const [lastCoordinatesAPICallParams, setLastCoordinatesAPICallParams] =
    useState<Coordinates_Parameters_Object | null>(null);
  const paramsWeatherDataAPICallRef = useRef({ lat: 1, lon: 1 });
  const [source, setSource] = useState<string>("OpenWeatherMap");
  const [unitsType, setUnitsType] = React.useState("metric");

  const DEFAULT_CITY: string = "Newcastle";
  const DEFAULT_STATE: string = "NSW";
  const DEFAULT_COUNTRY: string = "AU";

  useEffect(() => {
    getCoordinatesData(DEFAULT_CITY, DEFAULT_STATE, DEFAULT_COUNTRY).then(
      (data: OpenWeatherMap_Coordinates_Object | null) =>
        setCoordinatesData(data)
    );
    setLastAPICall("get_coordinates");
    setLastCoordinatesAPICallParams({
      city: DEFAULT_CITY,
      state: DEFAULT_STATE,
      countryCode: DEFAULT_COUNTRY,
    });
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
    console.log(unitsType);
  }, [unitsType]);

  useEffect(() => {
    schedule.gracefulShutdown();

    if (lastAPICall === "get_coordinates") {
      const job = schedule.scheduleJob("20 * * * * *", () => {
        const city = lastCoordinatesAPICallParams?.city
          ? lastCoordinatesAPICallParams.city
          : DEFAULT_CITY;
        const state = lastCoordinatesAPICallParams?.state
          ? lastCoordinatesAPICallParams.state
          : DEFAULT_STATE;
        const countryCode = lastCoordinatesAPICallParams?.countryCode
          ? lastCoordinatesAPICallParams.countryCode
          : DEFAULT_COUNTRY;
        getCoordinatesData(city, state, countryCode).then(
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
        source={source}
        setSource={setSource}
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
        unitsType={unitsType}
        setUnitsType={setUnitsType}
      />
      {!weatherData && <Loading />}
      {weatherData && (
        <div>
          <SearchLocation
            coordinatesData={coordinatesData}
            setCoordinatesData={setCoordinatesData}
            lastAPICall={lastAPICall}
            setLastAPICall={setLastAPICall}
            lastCoordinatesAPICallParams={lastCoordinatesAPICallParams}
            setLastCoordinatesAPICallParams={setLastCoordinatesAPICallParams}
          />
          <VerticalSpacing />
          <DayForecast
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
          <VerticalSpacing />
          <OneWeekForecast
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
          <VerticalSpacing />

          <MiscDetails
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
        </div>
      )}

      <VerticalSpacing />
    </div>
  );
};

export default App;
