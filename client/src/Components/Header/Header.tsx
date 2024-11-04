import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import NavigationMenu from "./NavigationMenu";

const Header: React.FC = () => {
  const [showHideMenu, setShowHideMenu] = useState(false);

  const openMainMenu = (): void => {
    console.log("clicked");
    setShowHideMenu(!showHideMenu);
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
          gridTemplateRows: showHideMenu ? "50px 1fr" : "50px",
          gridTemplateColumns: "120px 1fr",
          gridTemplateAreas: showHideMenu
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
              {showHideMenu && (
                <div style={{ padding: "0px 0px 0px 0px", textAlign: "right" }}>
                  X
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Right column with the dropdown menu */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "5px 0px 5px 0px",
            gridArea: "navGridAreaCol2",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "14px" }}>
            <CustomSelect />
          </div>
        </div>
        {/* Menu area to display when showHideMainMenu is set */}
        {showHideMenu && (
          <div
            style={{
              gridArea: "navGridAreaCol3",
              width: "356px",
              textAlign: "left",
              border: "1px solid black",
            }}
          >
            <NavigationMenu />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
