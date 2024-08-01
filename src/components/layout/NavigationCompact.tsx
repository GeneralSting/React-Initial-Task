import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import TerminalIcon from "@mui/icons-material/Terminal";
import TypographyHeader from "../styled/TypographyHeader";
import { HeaderNavigationProps } from "../../types";

const NavigationCompact: FC<HeaderNavigationProps> = ({
  title,
  urlPath,
  headerRoutes,
}) => {
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: "block",
          }}
        >
          {headerRoutes
            .filter((route) => route.name)
            .map((route) => (
              <Link to={route.path} key={route.name}>
                <MenuItem key={route.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    color={
                      location.pathname === route.path ? "secondary" : "inherit"
                    }
                  >
                    {route.name}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
        </Menu>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          to={urlPath}
          style={{
            display: "flex",
            alignItems: "center",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {" "}
          <TerminalIcon sx={{ display: "flex", mr: 1 }} />
          <TypographyHeader>{title}</TypographyHeader>
        </Link>
      </Box>
    </>
  );
};

export default NavigationCompact;
