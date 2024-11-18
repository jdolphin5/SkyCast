import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ConfigureAlertsProps {
  shouldShowConfigure: boolean;
  setShouldShowConfigure: Dispatch<SetStateAction<boolean>>;
}

const ConfigureAlerts: React.FC<ConfigureAlertsProps> = (
  props: ConfigureAlertsProps
) => {
  type AlertType =
    | "Temperature"
    | "Rainfall"
    | "Wind Speed"
    | "Wind Direction"
    | "Pressure"
    | "Humidity"
    | "";

  const [alertType, setAlertType] = useState<AlertType>("");
  const [unitsType, setUnitsType] = useState<string>("");

  //used to avoid warning due to unitsType being set to a value without a rendered MenuItem
  const [isResettingUnitsType, setIsResettingUnitsType] =
    useState<boolean>(false);

  const defaultUnits: Map<AlertType, string> = new Map<AlertType, string>([
    ["Temperature", "Celsius"],
    ["Rainfall", "mm/h"],
    ["Wind Speed", "m/s"],
    ["Wind Direction", "Degrees"],
    ["Pressure", "hPa"],
    ["Humidity", "Percentage"],
  ]);

  useEffect(() => {
    console.log(alertType);
    setUnitsType(defaultUnits.get(alertType) || "");
    setIsResettingUnitsType(false);
  }, [alertType]);

  useEffect(() => {
    console.log(unitsType);
  }, [unitsType]);

  const handleChange = (type: string) => (event: SelectChangeEvent) => {
    if (type === "alertType") {
      //assert that this value must be of type AlertType
      setAlertType(event.target.value as AlertType);
      setIsResettingUnitsType(true);
    } else if (type === "unitsType") {
      setUnitsType(event.target.value);
    }
  };

  return (
    <div>
      <div className="grid-sub-menu-title">
        {/*Left column with Nav Title */}
        <div className="grid-sub-menu-title-left">
          <h1>CONFIGURE ALERTS</h1>
        </div>
        {/*Right column with X to close*/}
        <div
          className="grid-sub-menu-title-right"
          onClick={() => props.setShouldShowConfigure(false)}
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

      <div className="sub-menu-list" style={{ padding: "6px 0 0 0" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <FormControl>
            <Select
              id="simple-select"
              displayEmpty
              value={alertType}
              onChange={handleChange("alertType")}
              sx={{
                height: "30px",
                width: "200px",
                backgroundColor: "gray",
              }}
            >
              {alertType === "" && <MenuItem value="">Select Type</MenuItem>}
              <MenuItem value={"Temperature"}>Temperature</MenuItem>
              <MenuItem value={"Rainfall"}>Rainfall</MenuItem>
              <MenuItem value={"Wind Speed"}>Wind Speed</MenuItem>
              <MenuItem value={"Wind Direction"}>Wind Direction</MenuItem>
              <MenuItem value={"Pressure"}>Pressure</MenuItem>
              <MenuItem value={"Humidity"}>Humidity</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              id="standard-basic-username"
              label="Threshold"
              variant="standard"
              sx={{
                width: "200px",
                "& .MuiFormControl-root": {
                  //height: "40px", // Adjust the overall height of the TextField
                  //width: "260px", // Adjust the overall width of the TextField
                },
                "& .MuiInput-root": {
                  //height: "100%", // Ensure input area fills the container
                  //height: "45px", // Adjust input height
                  //width: "260px", // Adjust input width
                },
                "& .MuiInputBase-input": {
                  //class for the user-entered text
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  //class for the label / helper text
                  //transform: "translate(0, 12px) scale(1)", // Adjust label position for alignment
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  //class for the label / helper text when focused
                  //transform: "translate(0, -6px) scale(0.75)", // Shrink label when focused
                  color: "red",
                },
                "& .MuiInput-root:before": {
                  borderBottomColor: "gray", // Default border color
                },
                "& .MuiInput-root:hover:before": {
                  borderBottomColor: "darkgray", // Hover border color
                },
                "& .MuiInput-root:after": {
                  borderBottomColor: "red", // Focused border color
                },
              }}
            />
          </FormControl>

          {!isResettingUnitsType && (
            <FormControl>
              <Select
                id="simple-select"
                displayEmpty
                value={unitsType}
                onChange={handleChange("unitsType")}
                sx={{
                  height: "30px",
                  width: "200px",
                  backgroundColor: "gray",
                }}
                disabled={alertType === ""}
              >
                {alertType === "" && unitsType === "" && (
                  <MenuItem value="">Units</MenuItem>
                )}
                {/* Dynamically render MenuItem options based on alertType */}
                {alertType === "Temperature" && [
                  <MenuItem key="1" value="Celsius">
                    Celsius
                  </MenuItem>,
                  <MenuItem key="2" value="Fahrenheit">
                    Fahrenheit
                  </MenuItem>,
                ]}
                ,
                {alertType === "Rainfall" && [
                  <MenuItem key="1" value="mm/h">
                    mm/h
                  </MenuItem>,
                ]}
                ,
                {alertType === "Wind Speed" && [
                  <MenuItem key="1" value="m/s">
                    m/s
                  </MenuItem>,
                ]}
                ,
                {alertType === "Wind Direction" && [
                  <MenuItem key="1" value="Degrees">
                    Degrees
                  </MenuItem>,
                ]}
                ,
                {alertType === "Pressure" && [
                  <MenuItem key="1" value="hPa">
                    hPa
                  </MenuItem>,
                ]}
                ,
                {alertType === "Humidity" && [
                  <MenuItem key="1" value="Percentage">
                    Percentage
                  </MenuItem>,
                ]}
              </Select>
            </FormControl>
          )}
          <FormControl>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", width: "100px" }}
            >
              Add Alert
            </Button>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default ConfigureAlerts;
