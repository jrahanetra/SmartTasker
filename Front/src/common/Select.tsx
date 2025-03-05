import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SelectProps = {
  label: string;
  options: string[];
  filter: string;
  setFilter: (filter: string) => void;
};

export default function BasicSelect({
  label,
  options,
  filter,
  setFilter,
}: SelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === "None") {
      setFilter("");
    } else {
      setFilter(event.target.value as string);
    }
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
        <InputLabel id="demo-simple-select-label" style={{ color: "black" }}>
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
            <MenuItem key={index} value={element} id={index.toString()}>
              {element}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
