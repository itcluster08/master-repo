import { ThemeOptions, createTheme } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

export const theme = createTheme(themeOptions);
