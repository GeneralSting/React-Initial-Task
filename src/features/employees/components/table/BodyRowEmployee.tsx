import { Button, TableCell, TableRow } from "@mui/material";
import { FC } from "react";
import { TableCellImage } from "../..";
import { BodyRowEmployeeProps } from "../../types/table/bodyRowEmployeeProps";
import { useTranslation } from "react-i18next";

const BodyRowEmployee: FC<BodyRowEmployeeProps> = ({
  employee,
  rowNumber,
  handleDialogOpen,
  nextPageRef,
  rowData,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} ref={nextPageRef}>
        <TableCell align="center">{rowNumber}</TableCell>
        <TableCellImage
          imgUrl={rowData.imageUrl}
          employeeName={rowData.firstName}
          employeeLastName={rowData.lastName}
        />
        <TableCell align="center">{rowData.firstName}</TableCell>
        <TableCell align="center">{rowData.lastName}</TableCell>
        <TableCell align="center">{rowData.email}</TableCell>
        <TableCell align="center">{rowData.position}</TableCell>
        <TableCell align="center">
          <Button onClick={() => handleDialogOpen(employee)}>
            {t("pages.directory.table.head.showDetailsBtn")}
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BodyRowEmployee;
