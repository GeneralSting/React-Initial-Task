import { Employee } from "../api/employee";
import { TableEmployeeData } from "./tableEmployeeData";

export type BodyRowEmployeeProps = {
  employee: Employee;
  rowNumber: number;
  rowData: TableEmployeeData;
  nextPageRef: ((node: HTMLTableRowElement | null) => void) | undefined;
  handleDialogOpen: (employee: Employee) => void;
};
