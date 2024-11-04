import React from "react";

const OneWeekForecast: React.FC = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "339px",
        height: "180px",
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
            width: "calc(100%-40px)",
            height: "calc(100%-20px)",
            overflow: "auto",
            //margin: "auto",
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            //border: "1px solid black",
            fontSize: "18px",
            textAlign: "left",
            paddingLeft: "15px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "#D9D9D9",
          }}
        >
          <div className="grid-wrapper-one-week-forecast">
            <div className="col1">Today:</div>
            <div className="col2">Sunny</div>
            <div className="col3" style={{ textAlign: "center" }}>
              15°
            </div>
            <div className="col4" style={{ textAlign: "center" }}>
              -
            </div>
            <div className="col5" style={{ textAlign: "center" }}>
              26°
            </div>

            <div className="col1">Thu:</div>
            <div className="col2">Cloudy</div>
            <div className="col3" style={{ textAlign: "center" }}>
              14°
            </div>
            <div className="col4" style={{ textAlign: "center" }}>
              -
            </div>
            <div className="col5" style={{ textAlign: "center" }}>
              26°
            </div>

            <div className="col1">Fri:</div>
            <div className="col2">Cloudy</div>
            <div className="col3" style={{ textAlign: "center" }}>
              16°
            </div>
            <div className="col4" style={{ textAlign: "center" }}>
              -
            </div>
            <div className="col5" style={{ textAlign: "center" }}>
              22°
            </div>

            <div className="col1">Sat:</div>
            <div className="col2">Cloudy</div>
            <div className="col3" style={{ textAlign: "center" }}>
              15°
            </div>
            <div className="col4" style={{ textAlign: "center" }}>
              -
            </div>
            <div className="col5" style={{ textAlign: "center" }}>
              23°
            </div>

            <div className="col1">Sun:</div>
            <div className="col2">Cloudy</div>
            <div className="col3" style={{ textAlign: "center" }}>
              15°
            </div>
            <div className="col4" style={{ textAlign: "center" }}>
              -
            </div>
            <div className="col5" style={{ textAlign: "center" }}>
              30°
            </div>

            <div className="col1">Mon:</div>
            <div className="col2">Cloudy</div>
            <div className="col3" style={{ textAlign: "center" }}>
              17°
            </div>
            <div className="col4" style={{ textAlign: "center" }}>
              -
            </div>
            <div className="col5" style={{ textAlign: "center" }}>
              27°
            </div>

            <div className="col1">Tue:</div>
            <div className="col2">Cloudy</div>
            <div className="col3" style={{ textAlign: "center" }}>
              18°
            </div>
            <div className="col4" style={{ textAlign: "center" }}>
              -
            </div>
            <div className="col5" style={{ textAlign: "center" }}>
              26°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneWeekForecast;
