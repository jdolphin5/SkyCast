import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface CustomSelectProps {
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
}

const CustomSelect: React.FC<CustomSelectProps> = (
  props: CustomSelectProps
) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.setSource(event.target.value);
  };

  return (
    <div style={{ padding: "10px 0 10px 0", backgroundColor: "#ABABAB" }}>
      <FormControl sx={{ m: 0, minWidth: 150 }}>
        <Select
          id="simple-select"
          displayEmpty
          value={props.source}
          onChange={handleChange}
          sx={{ height: "30px", backgroundColor: "#D9D9D9" }}
        >
          {props.source === "" && <MenuItem value="">Select Source</MenuItem>}
          <MenuItem value={"OpenWeatherMap"}>OpenWeatherMap</MenuItem>
          <MenuItem value={"VisualCrossing"}>VisualCrossing</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
