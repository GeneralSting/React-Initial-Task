import { useTranslation } from "react-i18next";
import { useAppSelector } from "../hooks";
import { useState } from "react";
import {
  BodyDataStatus,
  EmployeeDetailsDialog,
  HeadDoubleRow,
  TableBodyLoading,
  TableBodySuccess,
  useEmployees,
} from "../features/employees";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { Employee } from "../features/employees/types/api/employee";

const Directory = () => {
  const { t } = useTranslation();
  const {
    employeesData,
    employeesNumber,
    refetch,
    searchEmployees,
  } = useEmployees();

  const [open, setOpen] = useState<boolean>(false);
  const [employeeDetails, setEmployeeDetails] = useState<Employee | null>(null);

  const loadingStatus = useAppSelector((state) => state.employees.status);
  const totalRows: number = useAppSelector(
    (state) => state.employees.meta.total
  );
  const apiError = useAppSelector((state) => state.employees.error);

  const handleDialogOpen = (employee: Employee) => {
    setEmployeeDetails(employee);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setEmployeeDetails(null);
  };

  return (
    <>
      <Paper sx={{ overflow: "hidden", alignItems: "center" }}>
        <TableContainer
          //  minWidth helps to avoid table size jumping when new data is added (infnite scroll)
          sx={{
            maxHeight: "80vh",
            maxWidth: "90vw",
            minWidth: "50vw",
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <HeadDoubleRow
              tableDataRows={employeesNumber}
              totalRows={totalRows}
              searchEmployees={searchEmployees}
            />

            <TableBody>
              {(loadingStatus === "success" || loadingStatus === "loading") && (
                <TableBodySuccess
                  employeesData={employeesData}
                  refetch={refetch}
                  handleDialogOpen={handleDialogOpen}
                />
              )}

              {loadingStatus === "loading" && <TableBodyLoading />}

              {loadingStatus === "fail" && (
                <BodyDataStatus
                  message={
                    apiError
                      ? t("pages.directory.table.body.errorMessage") + apiError
                      : t("dataStatus.errorMsg")
                  }
                />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {employeeDetails && (
        <EmployeeDetailsDialog
          open={open}
          employee={employeeDetails}
          closeDialog={handleDialogClose}
        />
      )}
    </>
  );
};

export default Directory;
