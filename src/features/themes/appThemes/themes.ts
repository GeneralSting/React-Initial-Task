import i18next from "i18next";
import { dark, darkCode, darkName } from "./dark";
import { light, lightCode, lightName } from "./light";
import {
  lightIncreased,
  lightIncreasedCode,
  lightIncreasedName,
} from "./lightIncreased";
import { solarized, solarizedCode, solarizedName } from "./solarized";
import { AppTheme } from "../types/appTheme";

const createThemes = (): AppTheme[] => {
  return [
    // first theme object will be default theme
    {
      name: lightName(),
      code: lightCode,
      theme: light,
    },
    {
      name: lightIncreasedName(),
      code: lightIncreasedCode,
      theme: lightIncreased,
    },
    {
      name: darkName(),
      code: darkCode,
      theme: dark,
    },
    {
      name: solarizedName(),
      code: solarizedCode,
      theme: solarized,
    },
  ];
};

let appThemes: AppTheme[] = createThemes();

i18next.on("languageChanged", () => {
  appThemes = createThemes();
});

const defaultTheme = appThemes[0].code;

export { appThemes, defaultTheme };