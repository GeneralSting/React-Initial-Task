import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { DetailsDialogProps } from "../../types/detailsDialogProps";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeDetailsDialog: FC<DetailsDialogProps> = ({
  open,
  employee,
  closeDialog,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={closeDialog}>
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography flexGrow={1}>
          {t("pages.directory.dialog.title")}
        </Typography>
        <IconButton
          color="inherit"
          onClick={closeDialog}
          aria-label="close dialog"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <EmployeeDetails employee={employee} />
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDetailsDialog;
