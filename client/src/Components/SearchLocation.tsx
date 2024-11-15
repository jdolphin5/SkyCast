import { Box, Button, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getCoordinatesData } from "../Functions/API";
import {
  Coordinates_Parameters_Object,
  OpenWeatherMap_Coordinates_Object,
} from "../types";

interface SearchLocationProps {
  coordinatesData: OpenWeatherMap_Coordinates_Object | null;
  setCoordinatesData: Dispatch<
    SetStateAction<OpenWeatherMap_Coordinates_Object | null>
  >;
  lastAPICall: string | null;
  setLastAPICall: Dispatch<SetStateAction<string | null>>;
  lastCoordinatesAPICallParams: Coordinates_Parameters_Object | null;
  setLastCoordinatesAPICallParams: Dispatch<
    SetStateAction<Coordinates_Parameters_Object | null>
  >;
}

const SearchLocation: React.FC<SearchLocationProps> = (
  props: SearchLocationProps
) => {
  const [locationSearch, setLocationSearch] = useState<string>("");

  useEffect(() => {
    console.log(locationSearch);
  }, [locationSearch]);

  const handleSubmit = () => {
    const arr: string[] = locationSearch.split(",");

    if (arr.length === 3) {
      const city: string = arr[0];
      const state: string = arr[1];
      const countryCode: string = arr[2];

      getCoordinatesData(city, state, countryCode).then(
        (data: OpenWeatherMap_Coordinates_Object | null) => {
          props.setCoordinatesData(data);
          props.setLastAPICall("get_coordinates");
          props.setLastCoordinatesAPICallParams({
            city: city,
            state: state,
            countryCode: countryCode,
          });
        }
      );
    } else {
      console.log("Error - Please enter city,state,country");
    }
  };

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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setLocationSearch(event.target.value);
            }}
          />
          <Box sx={{ marginLeft: "10px" }} /> {/* Space between components */}
          <Button
            sx={{ height: "45px", backgroundColor: "gray" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Go!
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default SearchLocation;
