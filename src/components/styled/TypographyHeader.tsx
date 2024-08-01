import { styled, Typography } from "@mui/material";

const TypographyHeader = styled(Typography)({
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});

TypographyHeader.defaultProps = {
  variant: "h5",
  noWrap: true,
};

export default TypographyHeader;
