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
          <FormControl sx={{}}>
            <div style={{ display: "flex", gap: "8px" }}>
              <p style={{ fontSize: "16px" }}>Threshold: </p>
              <TextField
                id="standard-basic-username"
                variant="standard"
                sx={{
                  width: "200px",
                  height: "40px", // Set the desired height for the TextField container
                  "& .MuiInputBase-root": {
                    height: "100% !important", // Force the root to span the parent height
                    boxSizing: "border-box", // Ensure padding/borders don't affect height
                    padding: "0", // Remove internal padding
                    display: "flex", // Use flex for proper alignment
                    alignItems: "center", // Vertically center content
                    color: "white", //Input text colour
                  },
                  "& .MuiInput-root": {
                    height: "100%", // Ensure the root fills the container
                    boxSizing: "border-box", // Prevent borders/padding issues
                    display: "flex",
                    alignItems: "center", // Align input text
                  },
                  "& .MuiInputBase-input": {
                    height: "100%", // Ensure input spans full height
                    padding: "0", // Remove any default padding
                    boxSizing: "border-box", // Avoid height calculation issues
                    display: "flex",
                    alignItems: "center", // Align text within input
                    fontSize: "16px", // Set font size of text
                  },
                  /*
                  "& .MuiInputLabel-root": {
                    height: "100%", // Match the parent container height
                    display: "flex",
                    alignItems: "center", // Center label text vertically
                    lineHeight: "normal", // Prevent default line height from affecting layout
                    transform: "translate(0, 0) scale(1)", // Remove floating effect
                    color: "white", // Label color
                    pointerEvents: "none", // Prevent interaction with the label
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "red", // Change label color on focus
                    transform: "translate(0, -20px) scale(0.75)", // Floating label effect
                    display: "none",
                  },
                  */
                  "& .MuiInput-root:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderBottom: "1px solid gray", // Default border
                  },
                  "& .MuiInput-root:hover:before": {
                    borderBottom: "2px solid currentColor", // Border on hover
                  },
                  "& .MuiInput-root:after": {
                    display: "none", // Disable focus underline effect
                  },
                  "& label+.css-5h82ro-MuiInputBase-root-MuiInput-root": {
                    marginTop: "0px",
                  },
                }}
              />
            </div>
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
              sx={{ backgroundColor: "black", width: "120px" }}
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
