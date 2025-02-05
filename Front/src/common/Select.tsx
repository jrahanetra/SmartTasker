import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SelectProps = {
  label: string;
  options: string[];
}

export default function BasicSelect({label, options}: SelectProps) {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F0D1A8",
        color: "black",
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{ color: "black"}}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Age"
          onChange={handleChange}
          fullWidth
        >
          {options.map((element, index) => (
            <MenuItem value={element} id={index.toString()}>
              {element}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
