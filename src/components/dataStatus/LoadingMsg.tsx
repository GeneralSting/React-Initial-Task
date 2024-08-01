import { ReporterProps } from "../../types";
import { CircularProgress, Typography } from "@mui/material";

const LoadingMsg: React.FC<ReporterProps> = ({ message }) => {
  return (
    <div>
      <CircularProgress />
      <Typography variant="h4" textAlign="center">
        {message}
      </Typography>
    </div>
  );
};

export default LoadingMsg;
