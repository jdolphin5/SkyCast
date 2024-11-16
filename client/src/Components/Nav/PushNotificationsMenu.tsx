import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface PushNotificationsMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  enablePushNotifications: boolean;
  setEnablePushNotifications: Dispatch<SetStateAction<boolean>>;
}

const PushNotificationsMenu: React.FC<PushNotificationsMenuProps> = (
  props: PushNotificationsMenuProps
) => {
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
          <h1>PUSH NOTIFICATIONS</h1>
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
          <FormLabel
            id="controlled-radio-buttons-group"
            sx={{
              textAlign: "center",
              backgroundColor: "#444444",
              color: "#EEEEEE",
            }}
          >
            UNITS
          </FormLabel>
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
                label="Enabled"
              />
              <FormControlLabel
                value="false"
                control={<Radio sx={{ padding: "0 5px" }} />}
                label="Disabled"
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default PushNotificationsMenu;
