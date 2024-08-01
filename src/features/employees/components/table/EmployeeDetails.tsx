import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Employee } from "../../types/api/employee";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import { DialogEmployeeInfo } from "../../types/dialogEmployeeInfo";

const EmployeeDetails = ({ employee }: { employee: Employee }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const shorterAboutText = useMemo(
    () =>
      employee.about.length > 255
        ? `${employee.about.substring(0, 255)}...`
        : employee.about,
    [employee.about]
  );

  const formatDate = useCallback(
    (dateString: Date) => {
      const date = new Date(dateString);
      // different date format depending on selected language
      return date.toLocaleDateString(t("metaData.localeDateCode"));
    },
    [t]
  );

  const infoItems: DialogEmployeeInfo[] = useMemo(
    () => [
      { label: t("pages.directory.dialog.email"), value: employee.email },
      {
        label: t("pages.directory.dialog.contact"),
        value: employee.contactNumber,
      },
      { label: t("pages.directory.dialog.address"), value: employee.adress },
      {
        label: t("pages.directory.dialog.createdAt"),
        value: formatDate(employee.created_at),
      },
      {
        label: t("pages.directory.dialog.updatedAt"),
        value: formatDate(employee.updated_at),
      },
    ],
    [
      employee.adress,
      employee.contactNumber,
      employee.created_at,
      employee.email,
      employee.updated_at,
      formatDate,
      t,
    ]
  );

  return (
    <Grid container gap={4}>
      {/* Top Section: Company Name */}
      <Grid item sm={12} display={{ xs: "none", sm: "block" }}>
        <div
          style={{
            background:
              "url(/public/images/background/employee-card-pattern.jpg) no-repeat center center",
            backgroundSize: "cover",
            padding: "2rem 0",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            {t("header.titleShort")}
          </Typography>
        </div>
      </Grid>

      {/* Employee Main Section */}
      <Grid item sm={12} container>
        <Grid item sm={5} xs={12} textAlign="center">
          <Box
            component="img"
            src={employee.imageUrl}
            alt="Employee image"
            sx={{
              width: 175,
              height: 175,
              marginTop: {
                xs: "0",
                sm: "-25%",
              },
              borderRadius: "20%",
              objectFit: "cover",
              border: `5px solid ${theme.palette.background.paper}`,
            }}
          />
        </Grid>
        <Grid
          item
          sm={7}
          xs={12}
          container
          direction="column"
          alignItems="center"
        >
          <Typography
            variant="h4"
            align="center"
          >{`${employee.firstName} ${employee.lastName}`}</Typography>
          <Typography variant="h5" align="center">
            {employee.position}
          </Typography>
        </Grid>
      </Grid>

      {/* Info Section */}
      <Grid container spacing={2}>
        {infoItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                height: "100%",
                padding: 2,
                border: `1px solid ${theme.palette.background.paper}`,
                borderRadius: 1,
                boxShadow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  wordBreak: "break-word",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* About Section */}
      <Grid item xs={12}>
        <Typography variant="body1">
          <strong>{t("pages.directory.dialog.about")}</strong>
        </Typography>
        <Typography variant="body2">{shorterAboutText}</Typography>
      </Grid>
    </Grid>
  );
};

export default EmployeeDetails;
