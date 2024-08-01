import { Employee } from "../types/api/employee";
import { TableEmployeeData } from "../types/table/tableEmployeeData";

const setTableEmployeeData = (employee: Employee): TableEmployeeData => {
  return {
    imageUrl: employee.imageUrl,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    position: employee.position,
    detailsAction: () => {},
  };
};

export default setTableEmployeeData;
