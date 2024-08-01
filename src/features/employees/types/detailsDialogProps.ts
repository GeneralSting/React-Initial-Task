import { Employee } from "./api/employee";

export type DetailsDialogProps = {
  open: boolean;
  employee: Employee;
  closeDialog: () => void;
};
