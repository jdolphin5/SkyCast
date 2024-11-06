import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CustomSelect: React.FC = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ padding: "10px 0 10px 0", backgroundColor: "#ABABAB" }}>
      <FormControl sx={{ m: 0, minWidth: 150 }}>
        <Select
          id="demo-simple-select-helper"
          displayEmpty
          value={age}
          onChange={handleChange}
          sx={{ height: "30px", backgroundColor: "#D9D9D9" }}
        >
          {age === "" && <MenuItem value="">Select Source</MenuItem>}
          <MenuItem value={10}>OpenWeatherMap</MenuItem>
          <MenuItem value={20}>VisualCrossing</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
