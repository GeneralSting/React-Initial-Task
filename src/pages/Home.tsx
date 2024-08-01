import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12}>
        <Typography
          variant="h2"
          component="h1"
          textAlign="center"
          mr={1}
          ml={1}
        >
          {t("pages.home.title")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2" textAlign="center">
          {t("pages.home.author")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
