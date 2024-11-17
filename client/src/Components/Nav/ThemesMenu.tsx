import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface ThemesMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  themeType: string;
  setThemeType: Dispatch<SetStateAction<string>>;
}

const ThemesMenu: React.FC<ThemesMenuProps> = (props: ThemesMenuProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setThemeType((event.target as HTMLInputElement).value);
  };

  return (
    <div className="sub-menu-container">
      <div className="grid-sub-menu-title">
        {/*Left column with Nav Title */}
        <div className="grid-sub-menu-title-left">
          <h1>THEMES</h1>
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
        <FormControl sx={{ width: "100%" }}>
          <FormLabel
            id="controlled-radio-buttons-group"
            sx={{
              textAlign: "center",
              backgroundColor: "#444444",
              color: "#EEEEEE",
              //width: "100%",
            }}
          >
            MODE
          </FormLabel>
          <RadioGroup
            aria-labelledby="controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={props.themeType}
            onChange={handleChange}
            sx={{
              padding: "2px 20px 2px 20px",
              margin: "0",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <FormControlLabel
                value="light"
                control={<Radio sx={{ padding: "0 5px" }} />}
                label="Light"
              />
              <FormControlLabel
                value="dark"
                control={<Radio sx={{ padding: "0 5px" }} />}
                label="Dark"
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default ThemesMenu;
