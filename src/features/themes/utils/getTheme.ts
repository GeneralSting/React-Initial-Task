import { appThemes } from "..";

const getTheme = (themeCode: string) => {
  const selectedTheme = appThemes.find((theme) => theme.code === themeCode);
  return selectedTheme ? selectedTheme.theme : appThemes[0].theme;
};

export default getTheme;
