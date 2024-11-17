import React, { Dispatch, SetStateAction } from "react";

interface NavigationMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = (
  props: NavigationMenuProps
) => {
  return (
    <div
      style={{
        textAlign: "left",
        backgroundColor: "#444444",
        color: "#EEEEEE",
        fontSize: "18px",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          padding: "10px 10px 10px 10px",
          margin: "0px",
        }}
      >
        {/* Settings will include units - metric/imperial */}
        <li
          style={{ cursor: "pointer" }}
          onClick={() => props.setNavigationSelected("settings")}
        >
          Settings
        </li>
        {/* Themes will include light/dark mode */}
        <li
          style={{ cursor: "pointer" }}
          onClick={() => props.setNavigationSelected("themes")}
        >
          Themes
        </li>
        {/* Push notifications will have an interface to enable/disable and define based on metrics */}
        <li
          style={{ cursor: "pointer" }}
          onClick={() => props.setNavigationSelected("alerts")}
        >
          Alerts
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => props.setNavigationSelected("login")}
        >
          Login
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
