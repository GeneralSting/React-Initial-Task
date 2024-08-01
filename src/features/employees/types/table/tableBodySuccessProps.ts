import { Employee } from "../api/employee"

export type TableBodySuccessProps = {
  employeesData: Employee[];
  refetch: () => void;
  handleDialogOpen: (employee: Employee) => void;
}