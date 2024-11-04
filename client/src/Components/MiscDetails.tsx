import React from "react";

const MiscDetails: React.FC = () => {
  return (
    <div
      style={{
        fontSize: "12px",
        textAlign: "left",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
        backgroundColor: "#D9D9D9",
      }}
    >
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Wind speed: 10m/s (average of 2mins)
      </div>
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Wind direction: 100°
      </div>
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Wind gust: 10m/s (under 20 secs)
      </div>
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Rain: 10mm/h (last hour)
      </div>
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Snow: 10mm/h (last hour)
      </div>
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Timezone: +1100 UTC
      </div>
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Atmospheric Pressure: 10 hPa
      </div>
      <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        Humidity: 70%
      </div>
    </div>
  );
};

export default MiscDetails;
