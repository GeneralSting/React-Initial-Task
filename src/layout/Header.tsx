import { useTranslation } from "react-i18next";
import { AppRoutes, ROOT_PATH } from "../routes";
import { UserPreferencesBtn } from "../features/headerOptions";
import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavigationCompact, NavigationStandard } from "../components";

const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isBreakpointSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isBreakpointSmall ? (
            <NavigationCompact
              title={t("header.titleShort")}
              urlPath={ROOT_PATH}
              headerRoutes={AppRoutes()}
            />
          ) : (
            <NavigationStandard
              title={t("header.title")}
              urlPath={ROOT_PATH}
              headerRoutes={AppRoutes()}
            />
          )}
          <UserPreferencesBtn />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
