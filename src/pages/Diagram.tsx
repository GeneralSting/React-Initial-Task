import React, { useEffect, useState } from "react";
import { EmployeeDetailsDialog, useEmployees } from "../features/employees";
import { useAppSelector } from "../hooks";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose the theme you like
import { Employee } from "../features/employees/types/api/employee";
import EmployeeOrgChart from "../features/employees/components/diagram/EmployeeOrgChart";
import { LoadingMsg } from "../components";

const Diagram: React.FC = () => {
  const { employeesData, employeesNumber, refetch } = useEmployees();

  const loadingStatus = useAppSelector((state) => state.employees.status);
  const nextPage = useAppSelector(
    (state) => state.employees.meta.next_page_url
  );

  const [open, setOpen] = useState<boolean>(false);
  const [employeeDetails, setEmployeeDetails] = useState<Employee | null>(null);

  useEffect(() => {
    if (loadingStatus === "success" && nextPage !== null) {
      refetch();
    }
  }, [loadingStatus, nextPage, refetch]);

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
      {employeesData.length === employeesNumber ? (
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
  );
};

export default Diagram;
