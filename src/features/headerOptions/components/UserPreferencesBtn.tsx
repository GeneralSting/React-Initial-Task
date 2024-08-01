import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { setAppTheme, setLanguage } from "../data/optionsSlice";
import { useTranslation } from "react-i18next";
import { languages } from "../../languages";
import SelectFormControl from "./SelectFormControl";
import { appThemes } from "../../themes";

const UserPreferencesBtn = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const appTheme = useAppSelector((state) => state.options.appTheme);
  const appLanguage = useAppSelector((state) => state.options.language);

  const handleThemeChange = (event: SelectChangeEvent<string>) => {
    const themeValue = event.target.value;
    dispatch(setAppTheme(themeValue));
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const languageValue = event.target.value;
    dispatch(setLanguage(languageValue));
  };

  const handleDialogOpen = () => {
    setOpen(true);
  }

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Tooltip title={t("header.options.tooltipTitle")}>
        <IconButton
          onClick={handleDialogOpen}
          edge="start"
          aria-label="menu"
        >
          <Avatar>{appLanguage}</Avatar>
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleDialogClose} fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          {t("header.options.title")}
          <IconButton
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close dialog"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container direction="row" alignItems="center" spacing={4}>
            <Grid
              item
              md={6}
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SelectFormControl
                labelId="theme-select"
                inputLabel={t("header.options.themeLabel")}
                value={appTheme}
                handleValueChange={handleThemeChange}
                values={appThemes}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SelectFormControl
                labelId="language-select"
                inputLabel={t("header.options.languageLabel")}
                value={appLanguage}
                handleValueChange={handleLanguageChange}
                values={languages}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default UserPreferencesBtn;
