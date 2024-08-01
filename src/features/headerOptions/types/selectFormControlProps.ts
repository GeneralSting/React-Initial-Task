import { SelectChangeEvent } from "@mui/material";
import { Language } from "../../languages/types/languages";
import { AppTheme } from "../../themes/types/appTheme";

export type SelectFormControlProps = {
  labelId: string;
  inputLabel: string;
  value: string;
  handleValueChange: (event: SelectChangeEvent<string>) => void;
  values: AppTheme[] | Language[];
};
