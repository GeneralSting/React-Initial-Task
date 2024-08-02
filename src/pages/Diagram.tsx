import React, { useEffect, useState } from "react";
import { EmployeeDetailsDialog, useEmployees } from "../features/employees";
import { useAppSelector } from "../hooks";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose the theme you like
import { Employee } from "../features/employees/types/api/employee";
import EmployeeOrgChart from "../features/employees/components/diagram/EmployeeOrgChart";
import { LoadingMsg } from "../components";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Diagram: React.FC = () => {
  const { t } = useTranslation();
  const { employeesData, refetch, hasMoreData } = useEmployees();

  const loadingStatus = useAppSelector((state) => state.employees.status);
  const apiError = useAppSelector((state) => state.employees.error);
  const totalEmployees = useAppSelector((state) => state.employees.meta.total);

  const [open, setOpen] = useState<boolean>(false);
  const [employeeDetails, setEmployeeDetails] = useState<Employee | null>(null);

  const handleDialogOpen = (employee: Employee) => {
    setEmployeeDetails(employee);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setEmployeeDetails(null);
  };

  useEffect(() => {
    if (loadingStatus === "success") {
      refetch();
    }
  }, [loadingStatus, refetch]);

  return (
    <>
      {loadingStatus === "fail" ? (
        <Typography>
          {apiError
            ? t("pages.directory.table.body.errorMessage") + apiError
            : t("dataStatus.errorMsg")}
        </Typography>
      ) : (
        <>
          {employeesData.length === totalEmployees && !hasMoreData ? (
            <div className="chart-container">
              <EmployeeOrgChart
                employeesData={employeesData}
                handleDialogOpen={handleDialogOpen}
              />
            </div>
          ) : (
            <LoadingMsg />
          )}
          {employeeDetails && (
            <EmployeeDetailsDialog
              open={open}
              employee={employeeDetails}
              closeDialog={handleDialogClose}
            />
          )}
        </>
      )}
    </>
  );
};

export default Diagram;
