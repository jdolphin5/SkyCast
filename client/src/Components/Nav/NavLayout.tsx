import React, { Dispatch, SetStateAction } from "react";
import SettingsMenu from "./SettingsMenu";
import ThemesMenu from "./ThemesMenu";
import PushNotificationsMenu from "./PushNotificationsMenu";
import LoginMenu from "./LoginMenu";
import VerticalSpacing from "../VerticalSpacing";

interface NavigationMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  showHideMenu: boolean;
  setShowHideMenu: Dispatch<SetStateAction<boolean>>;
}

const NavLayout: React.FC<NavigationMenuProps> = (
  props: NavigationMenuProps
) => {
  return (
    <>
      {props.navigationSelected === "settings" && props.showHideMenu && (
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
            />
          </div>
          <VerticalSpacing />
        </div>
      )}
      {props.navigationSelected === "themes" && props.showHideMenu && (
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
        props.showHideMenu && (
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
      {props.navigationSelected === "login" && props.showHideMenu && (
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
