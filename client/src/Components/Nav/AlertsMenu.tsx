import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface AlertsMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  enablePushNotifications: boolean;
  setEnablePushNotifications: Dispatch<SetStateAction<boolean>>;
}

const AlertsMenu: React.FC<AlertsMenuProps> = (props: AlertsMenuProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setEnablePushNotifications(
      (event.target as HTMLInputElement).value === "true" ? true : false
    );
  };
  return (
    <div className="sub-menu-container">
      <div className="grid-sub-menu-title">
        {/*Left column with Nav Title */}
        <div className="grid-sub-menu-title-left">
          <h1>ALERTS</h1>
        </div>
        {/*Right column with X to close*/}
        <div
          className="grid-sub-menu-title-right"
          onClick={() => props.setNavigationSelected("none")}
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

      <div className="sub-menu-list">
        <FormControl>
          <RadioGroup
            aria-labelledby="controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={props.enablePushNotifications}
            onChange={handleChange}
            sx={{
              padding: "2px 20px 2px 20px",
              margin: "0",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <FormControlLabel
                value="true"
                control={<Radio sx={{ padding: "0 5px" }} />}
                label="Enable Push Notifications"
              />
              <FormControlLabel
                value="false"
                control={<Radio sx={{ padding: "0 5px" }} />}
                label="Disable Push Notifications"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        <div>
          <Button sx={{ backgroundColor: "black", margin: "6px 0px 6px 0px" }}>
            Configure Alerts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertsMenu;
