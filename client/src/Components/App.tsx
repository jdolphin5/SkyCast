import React, { useState } from "react";
import Header from "./Header/Header";
import Summary from "./Summary";
import OneWeekForecast from "./OneWeekForecast";
import MiscDetails from "./MiscDetails";
import SettingsMenu from "./Nav/SettingsMenu";
import ThemesMenu from "./Nav/ThemesMenu";
import PushNotificationsMenu from "./Nav/PushNotificationsMenu";
import LoginMenu from "./Nav/LoginMenu";

const App: React.FC = () => {
  const [navigationSelected, setNavigationSelected] = useState<string>("none");
  const [showHideMenu, setShowHideMenu] = useState(false);

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
          showHideMenu={showHideMenu}
          setShowHideMenu={setShowHideMenu}
        />
      </div>
      {navigationSelected === "settings" && showHideMenu && (
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
      {navigationSelected === "themes" && showHideMenu && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <ThemesMenu
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
      {navigationSelected === "pushnotifications" && showHideMenu && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <PushNotificationsMenu
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
      {navigationSelected === "login" && showHideMenu && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <LoginMenu
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
      {navigationSelected === "none" && (
        <div
          style={{
            margin: "auto",
            width: "375px",
            height: "20px",
          }}
        ></div>
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
