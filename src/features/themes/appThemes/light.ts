import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import i18next from "i18next";
import { baseTheme } from "./baseTheme";

export const lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#111111",
    },
  },

  components: {
    ...baseTheme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(198, 58%, 43%)",
        },
      },
    },
  },
});

const light = responsiveFontSizes(lightTheme);

const lightName = (): string => {
  return i18next.t("themes.light");
};

const lightCode = "lightTheme";

export { light, lightCode, lightName };
