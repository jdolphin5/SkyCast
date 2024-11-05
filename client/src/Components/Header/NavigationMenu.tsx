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
        backgroundColor: "#ABABAB",
      }}
    >
      <ul style={{ listStyleType: "none", padding: "0px 10px 0px 10px" }}>
        {/* Settings will include units - metric/imperial */}
        <li
          style={{ cursor: "pointer" }}
          onClick={() => props.setNavigationSelected("settings")}
        >
          Settings
        </li>
        {/* Theme will include light/dark mode */}
        <li>Theme</li>
        {/* Push notifications will have an interface to enable/disable and define based on metrics */}
        <li>Push Notifications</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
