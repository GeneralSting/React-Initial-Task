import { Employee } from "./api/employee";

export type UseEmployeesResult = {
  employeesData: Employee[];
  hasMoreData: boolean;
  employeesNumber: number;
  refetch: () => void;
  searchEmployees: (query: string) => void;
};
