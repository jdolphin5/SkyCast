import { TextField } from "@mui/material";
import React from "react";

const SearchLocation: React.FC = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "339px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          textAlign: "left",

          backgroundColor: "#D9D9D9",
          position: "relative",
        }}
      >
        <TextField
          sx={{
            "& .MuiFilledInput-root:before": {
              borderBottomColor: "gray", // default underline colour
            },
            "& .MuiFilledInput-root:hover:before": {
              borderBottomColor: "dark-gray", // hover underline colour
            },
            "& .MuiFilledInput-root:after": {
              borderBottomColor: "red", // active/focused underline colour
            },
            "& .MuiInputLabel-root": {
              color: "dark-gray", // helper text default colour
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "red", // helper text colour when focused
            },
            //
          }}
          id="filled-search"
          label="Search a city..."
          type="search"
          variant="filled"
        />
      </div>
    </div>
  );
};

export default SearchLocation;
