import React from "react";
import Header from "./Header";
import Summary from "./Summary";
import OneWeekForecast from "./OneWeekForecast";
import MiscDetails from "./MiscDetails";

const App: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "375px",
        height: "auto",
        border: "1px solid black",
        backgroundColor: "#BABABA",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
      <div>
        <Header />
      </div>
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
      <div>
        <Summary />
      </div>
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
      <div>
        <OneWeekForecast />
      </div>
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
      <div
        style={{
          margin: "auto",
          width: "339px",
          height: "180px",
          border: "1px solid black",
        }}
      >
        <MiscDetails />
      </div>
      <div
        style={{
          margin: "auto",
          width: "375px",
          height: "20px",
        }}
      ></div>
    </div>
  );
};

export default App;
