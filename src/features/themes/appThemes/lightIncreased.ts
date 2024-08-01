import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import i18next from "i18next";
import { baseTheme } from "./baseTheme";

export const lightIncreasedTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#111111",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Default font family
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "6rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "3.25rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.6rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "1.375rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.125rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1.125rem",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
});

const lightIncreased = responsiveFontSizes(lightIncreasedTheme);

const lightIncreasedName = (): string => {
  return i18next.t("themes.lightIncreased");
};

const lightIncreasedCode = "lightThemeIncreased";

export { lightIncreased, lightIncreasedCode, lightIncreasedName };
