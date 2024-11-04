import React from "react";

const Summary: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "90%",
          overflow: "auto",
          margin: "auto",
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          border: "1px solid black",
          backgroundColor: "#D9D9D9",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Newcastle, Australia
        </div>
        <div
          style={{
            fontSize: "14px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Lon: -32.919, Lat: 151.779
        </div>
        <div
          style={{ fontSize: "56px", marginLeft: "auto", marginRight: "auto" }}
        >
          23°
        </div>
        <div
          style={{ fontSize: "14px", marginLeft: "auto", marginRight: "auto" }}
        >
          Sunny
        </div>
        <div
          style={{ fontSize: "14px", marginLeft: "auto", marginRight: "auto" }}
        >
          L:16° H:26°
        </div>
      </div>
    </div>
  );
};

export default Summary;
