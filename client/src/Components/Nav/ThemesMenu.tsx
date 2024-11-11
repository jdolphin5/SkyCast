import React, { Dispatch, SetStateAction } from "react";

interface ThemesMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
}

const ThemesMenu: React.FC<ThemesMenuProps> = (props: ThemesMenuProps) => {
  return (
    <div className="sub-menu-container">
      <div className="grid-sub-menu-title">
        {/*Left column with Nav Title */}
        <div className="grid-sub-menu-title-left">
          <h1>THEMES</h1>
        </div>
        {/*Right column with X to close*/}
        <div
          className="grid-sub-menu-title-right"
          onClick={() => props.setNavigationSelected("none")}
        >
          <p
            className={"hover-class-color"}
            style={
              {
                margin: "0px",
                padding: "0px",
                cursor: "pointer",
                "--hover-color": "red",
              } as React.CSSProperties
            }
          >
            X
          </p>
        </div>
      </div>

      <div className="sub-menu-list">
        <ul>
          <li>Light</li>
          <li>Dark</li>
        </ul>
      </div>
    </div>
  );
};

export default ThemesMenu;
