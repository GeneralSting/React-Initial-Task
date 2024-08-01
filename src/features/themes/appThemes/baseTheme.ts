import { createTheme, Theme } from "@mui/material/styles";

export const baseTheme: Theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
          marginTop: "8px",
          minWidth: 180,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: "bold"
        },
      },
    },
  },
});
