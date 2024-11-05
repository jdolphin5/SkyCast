import React, { useState } from "react";
import Header from "./Header/Header";
import Summary from "./Summary";
import OneWeekForecast from "./OneWeekForecast";
import MiscDetails from "./MiscDetails";
import SettingsMenu from "./Nav/SettingsMenu";

const App: React.FC = () => {
  const [navigationSelected, setNavigationSelected] = useState<string>("none");

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
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
      <div>
        <Header
          navigationSelected={navigationSelected}
          setNavigationSelected={setNavigationSelected}
        />
      </div>
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>

      {navigationSelected === "settings" && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <SettingsMenu
              navigationSelected={navigationSelected}
              setNavigationSelected={setNavigationSelected}
            />
          </div>
          <div
            style={{
              margin: "auto",
              width: "375px",
              height: "20px",
            }}
          ></div>
        </div>
      )}

      <div>
        <Summary />
      </div>
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
      <div>
        <OneWeekForecast />
      </div>
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
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
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
    </div>
  );
};

export default App;
