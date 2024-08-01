import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import i18next from "i18next";
import { baseTheme } from "./baseTheme";

export const darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
    },
  },

  components: {
    ...baseTheme.components,
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#1e1e1e",
        },
      },
    },
  },
});

const dark = responsiveFontSizes(darkTheme);

const darkName = (): string => {
  return i18next.t("themes.dark");
};

const darkCode = "darkTheme";

export { dark, darkCode, darkName };
