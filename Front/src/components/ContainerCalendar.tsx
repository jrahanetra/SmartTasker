import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: "200px", // Largeur du calendrier'
        },
      },
    },
  },
});

export default function DateRangeCalendarCalendarsProp() {
  const isXs = useMediaQuery("(max-width: 640px)"); // Vérifie si la taille de l'écran est xs ou plus petit

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="rounded-2xl bg-white" sx={{ width: "100%",display: isXs ? "none" : "block" }} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
