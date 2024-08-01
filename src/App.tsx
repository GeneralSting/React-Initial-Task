import { Grid, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./features/themes";
import { useAppSelector } from "./hooks";
import { Footer, Header } from "./layout";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  const appTheme = useAppSelector((state) => state.options.appTheme);
  return (
    <>
      <ThemeProvider theme={getTheme(appTheme)}>
        <Grid
          sx={{ minHeight: "100%" }}
          container
          direction="column"
          alignItems="stretch"
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item xs display="flex" justifyContent="center" mt={4} mb={4}>
            <Routes>
              {AppRoutes().map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
