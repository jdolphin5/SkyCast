import React from "react";

const DayForecast: React.FC = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "339px",
        height: "150px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "55%",
            height: "100%",
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
              fontSize: "12px",
              marginTop: "10px",
              marginBottom: "3px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Newcastle, Australia
          </div>
          <div
            style={{
              fontSize: "12px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Lon: -32.919, Lat: 151.779
          </div>
          <div
            style={{
              fontSize: "50px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            23°
          </div>
          <div
            style={{
              fontSize: "12px",
              marginBottom: "5px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Sunny
          </div>
          <div
            style={{
              fontSize: "12px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            L:16° H:26°
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
