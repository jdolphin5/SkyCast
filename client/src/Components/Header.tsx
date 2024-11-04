import React, { useState } from "react";

const Header: React.FC = () => {
  const [showHideMainMenu, setShowHideMainMenu] = useState(false);

  const openMainMenu = (): void => {
    console.log("clicked");
    setShowHideMainMenu(!showHideMainMenu);
  };

  return (
    <div
      style={{
        textAlign: "left",
        backgroundColor: "#D9D9D9",
        height: "100%",
      }}
    >
      <div className="grid-wrapper-header">
        <div style={{ padding: "5px 10px 5px 10px", fontSize: "20px" }}>
          <button
            style={{
              border: "0",
              backgroundColor: "inherit",
              width: "100%",
              cursor: "pointer",
              padding: "0",
            }}
            onClick={openMainMenu}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
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
              {showHideMainMenu && (
                <div style={{ padding: "0px 0px 0px 0px", textAlign: "right" }}>
                  X
                </div>
              )}
            </div>
          </button>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "5px 0px 5px 0px" }}>
          <div style={{ textAlign: "center", fontSize: "14px" }}>
            Source: Openweathermap
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
