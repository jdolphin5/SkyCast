import React, { Dispatch, SetStateAction } from "react";
import SettingsMenu from "./SettingsMenu";
import ThemesMenu from "./ThemesMenu";
import AlertsMenu from "./AlertsMenu";
import LoginMenu from "./LoginMenu";
import VerticalSpacing from "../VerticalSpacing";

interface NavLayoutProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  shouldShowMenu: boolean;
  setShouldShowMenu: Dispatch<SetStateAction<boolean>>;
  unitsType: string;
  setUnitsType: Dispatch<SetStateAction<string>>;
  themeType: string;
  setThemeType: Dispatch<SetStateAction<string>>;
  enablePushNotifications: boolean;
  setEnablePushNotifications: Dispatch<SetStateAction<boolean>>;
}

const NavLayout: React.FC<NavLayoutProps> = (props: NavLayoutProps) => {
  return (
    <>
      {props.navigationSelected === "settings" && props.shouldShowMenu && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <SettingsMenu
              navigationSelected={props.navigationSelected}
              setNavigationSelected={props.setNavigationSelected}
              unitsType={props.unitsType}
              setUnitsType={props.setUnitsType}
            />
          </div>
          <VerticalSpacing />
        </div>
      )}
      {props.navigationSelected === "themes" && props.shouldShowMenu && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <ThemesMenu
              navigationSelected={props.navigationSelected}
              setNavigationSelected={props.setNavigationSelected}
              themeType={props.themeType}
              setThemeType={props.setThemeType}
            />
          </div>
          <VerticalSpacing />
        </div>
      )}
      {props.navigationSelected === "alerts" && props.shouldShowMenu && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <AlertsMenu
              navigationSelected={props.navigationSelected}
              setNavigationSelected={props.setNavigationSelected}
              enablePushNotifications={props.enablePushNotifications}
              setEnablePushNotifications={props.setEnablePushNotifications}
            />
          </div>
          <VerticalSpacing />
        </div>
      )}
      {props.navigationSelected === "login" && props.shouldShowMenu && (
        <div>
          <div
            style={{
              margin: "auto",
              width: "339px",
              border: "1px solid black",
            }}
          >
            <LoginMenu
              navigationSelected={props.navigationSelected}
              setNavigationSelected={props.setNavigationSelected}
            />
          </div>
          <VerticalSpacing />
        </div>
      )}
      {props.navigationSelected === "none" && <VerticalSpacing />}
    </>
  );
};

export default NavLayout;
