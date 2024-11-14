import { Box, Button, TextField } from "@mui/material";
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
        <Box sx={{ display: "inline-flex", alignItems: "center" }}>
          <TextField
            sx={{
              "& .MuiFilledInput-root": {
                height: "45px",
                width: "260px",
              },
              "& .MuiFilledInput-root:before": {
                borderBottomColor: "gray",
              },
              "& .MuiFilledInput-root:hover:before": {
                borderBottomColor: "dark-gray",
              },
              "& .MuiFilledInput-root:after": {
                borderBottomColor: "red",
              },
              "& .MuiInputLabel-root": {
                color: "dark-gray",
                fontSize: "12px",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "red",
              },
            }}
            id="filled-search"
            label="Search a city... e.g. (Newcastle,NSW,AU)"
            type="search"
            variant="filled"
          />
          <Box sx={{ marginLeft: "10px" }} /> {/* Space between components */}
          <Button
            sx={{ height: "45px", backgroundColor: "gray" }}
            variant="contained"
            onClick={() => {}}
          >
            Go!
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default SearchLocation;
