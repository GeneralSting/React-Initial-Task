import { Employee } from "./employee";
import { PaginationMeta } from "./paginationMeta";

export type EmployeeState = {
  employees: Employee[];
  meta: PaginationMeta;
  status: "idle" | "loading" | "success" | "fail";
  error: string | undefined;
};
