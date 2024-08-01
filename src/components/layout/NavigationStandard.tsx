import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import TerminalIcon from "@mui/icons-material/Terminal";
import TypographyHeader from "../styled/TypographyHeader";
import { HeaderNavigationProps } from "../../types";
import { FC } from "react";

const NavigationStandard: FC<HeaderNavigationProps> = ({
  title,
  urlPath,
  headerRoutes,
}) => {
  const location = useLocation();

  return (
    <>
      <Box mr={4} sx={{ display: "flex", alignItems: "center" }}>
        <Link to={urlPath} className="location-link">
          <TerminalIcon sx={{ mr: 1 }} />
          <TypographyHeader>{title}</TypographyHeader>
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        {headerRoutes
          .filter((route) => route.name)
          .map((route) => (
            <Link to={route.path} key={route.name}>
              <Button
                color={
                  location.pathname === route.path ? "secondary" : "inherit"
                }
                sx={{
                  my: 2,
                  display: "block",
                }}
              >
                {route.name}
              </Button>
            </Link>
          ))}
      </Box>
    </>
  );
};

export default NavigationStandard;
