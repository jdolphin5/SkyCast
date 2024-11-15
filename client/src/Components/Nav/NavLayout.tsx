import React, { Dispatch, SetStateAction } from "react";
import SettingsMenu from "./SettingsMenu";
import ThemesMenu from "./ThemesMenu";
import PushNotificationsMenu from "./PushNotificationsMenu";
import LoginMenu from "./LoginMenu";
import VerticalSpacing from "../VerticalSpacing";

interface NavLayoutProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  shouldShowMenu: boolean;
  setShouldShowMenu: Dispatch<SetStateAction<boolean>>;
  unitsType: string;
  setUnitsType: Dispatch<SetStateAction<string>>;
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
            />
          </div>
          <VerticalSpacing />
        </div>
      )}
      {props.navigationSelected === "pushnotifications" &&
        props.shouldShowMenu && (
          <div>
            <div
              style={{
                margin: "auto",
                width: "339px",
                border: "1px solid black",
              }}
            >
              <PushNotificationsMenu
                navigationSelected={props.navigationSelected}
                setNavigationSelected={props.setNavigationSelected}
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
