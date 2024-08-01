import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../routes";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h2" component="h1" textAlign="center">
          {t("pages.pageNotFound.title")}
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Link to={ROOT_PATH}>
          <Button variant="contained">
            {t("pages.pageNotFound.returnBtn")}
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
