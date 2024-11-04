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
        height: "667px",
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
      <div
        style={{
          margin: "auto",
          width: "339px",
          height: "60px",
          border: "1px solid black",
        }}
      >
        <Header />
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
          height: "150px",
          border: "1px solid black",
        }}
      >
        <Summary />
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
