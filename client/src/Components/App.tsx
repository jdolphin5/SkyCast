import React, { useEffect, useState } from "react";
import VerticalSpacing from "./VerticalSpacing";
import Header from "./Header/Header";
import Summary from "./Summary";
import OneWeekForecast from "./OneWeekForecast";
import MiscDetails from "./MiscDetails";
import NavLayout from "./Nav/NavLayout";
import * as schedule from "node-schedule";
import { CronJobFunc } from "../scripts/job";
import axios, { AxiosResponse } from "axios";
import {
  mapCoordinatesResponse,
  mapWeatherDataResponse,
} from "../Mappers/OpenWeatherData";
import { CoordinatesObject, OpenWeatherMapObject } from "../types";

const App: React.FC = () => {
  const [navigationSelected, setNavigationSelected] = useState<string>("none");
  const [showHideMenu, setShowHideMenu] = useState(false);
  const [coordinatesData, setCoordinatesData] =
    useState<CoordinatesObject | null>(null);
  const [weatherData, setWeatherData] = useState<OpenWeatherMapObject[] | null>(
    null
  );

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_SERVER_URI +
          "/openWeatherMap/GetCoordinates/Newcastle/NSW/AU"
      )
      .then((response: AxiosResponse) => {
        setCoordinatesData(mapCoordinatesResponse(response));
      });
  }, []);

  useEffect(() => {
    if (coordinatesData) {
      axios
        .get(
          process.env.REACT_APP_SERVER_URI +
            "/openWeatherMap/GetForecast/" +
            coordinatesData.lat +
            "/" +
            coordinatesData.lon
        )
        .then((response: AxiosResponse) => {
          console.log(response);
          //setWeatherData(mapWeatherDataResponse(response));
        });
    }
  }, [coordinatesData]);

  /* Cron Job to call latest API call at top of every minute */
  const job = schedule.scheduleJob("20 * * * * *", () => {
    CronJobFunc();
  });

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
