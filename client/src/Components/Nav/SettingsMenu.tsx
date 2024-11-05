import React, { Dispatch, SetStateAction } from "react";

interface SettingsMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
}

const SettingsMenu: React.FC<SettingsMenuProps> = (
  props: SettingsMenuProps
) => {
  return (
    <div
      style={{
        fontSize: "12px",
        textAlign: "left",
        paddingLeft: "15px",
        paddingRight: "15px",
        backgroundColor: "#D9D9D9",
      }}
    >
      <h1
        style={{ padding: "0", margin: "0", cursor: "pointer" }}
        onClick={() => props.setNavigationSelected("none")}
      >
        Settings X
      </h1>
      <h2 style={{ padding: "0", margin: "0" }}>Units</h2>
      <ul style={{ padding: "0", margin: "0", listStyleType: "none" }}>
        <li>Imperial</li>
        <li>Metric</li>
      </ul>
    </div>
  );
};

export default SettingsMenu;
