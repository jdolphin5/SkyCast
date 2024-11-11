import React, { Dispatch, SetStateAction, useState } from "react";
import CustomSelect from "./CustomSelect";

interface HeaderProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  showHideMenu: boolean;
  setShowHideMenu: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const openMainMenu = (): void => {
    console.log("clicked");
    props.setShowHideMenu(!props.showHideMenu);
    props.setNavigationSelected("none");
  };

  return (
    <div
      style={{
        textAlign: "left",
        backgroundColor: "#D9D9D9",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: props.showHideMenu ? "50px 1fr" : "50px",
          gridTemplateColumns: "120px 1fr",
          gridTemplateAreas: props.showHideMenu
            ? `
                    "navGridAreaCol1 navGridAreaCol2"
                    "navGridAreaCol3 navGridAreaCol3"
                  `
            : `
              "navGridAreaCol1 navGridAreaCol2"
              `,
        }}
      >
        {/* Left column with the MENU button */}
        <div
          style={{
            gridArea: "navGridAreaCol1",
            padding: "5px 10px 5px 10px",
            fontSize: "20px",
          }}
        >
          <button
            style={{
              border: "0",
              backgroundColor: "inherit",
              width: "100%",
              cursor: "pointer",
              padding: "0",
              fontSize: "20px",
            }}
            onClick={openMainMenu}
          >
            {/* grid for within the MENU button column */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                padding: "8px 0px 8px 0px",
                fontSize: "20px",
              }}
            >
              <div
                style={{
                  padding: "0",
                  textAlign: "left",
                }}
              >
                ≡ MENU
              </div>
              {props.showHideMenu && (
                <div style={{ padding: "0px 0px 0px 0px", textAlign: "right" }}>
                  <p
                    className={"hoverClassColor"}
                    style={
                      {
                        margin: "0px",
                        padding: "0px",
                        "--hover-color": "red",
                      } as React.CSSProperties
                    }
                  >
                    X
                  </p>
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Right column with the dropdown menu */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "0px 0px 0px 0px",
            gridArea: "navGridAreaCol2",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "14px" }}>
            <CustomSelect />
          </div>
        </div>
        {/* Menu area below MENU button to display when showHideMainMenu is set */}
      </div>
    </div>
  );
};
export default Header;
