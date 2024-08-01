import { FC } from "react";
import { SelectFormControlProps } from "../types/selectFormControlProps";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Language } from "../../languages/types/languages";
import { AppTheme } from "../../themes/types/appTheme";

const SelectFormControl: FC<SelectFormControlProps> = (props) => {
  const isThemeMenu = (value: AppTheme | Language): value is AppTheme => {
    return (value as AppTheme).code !== undefined;
  };
  return (
    <FormControl sx={{ m: 1, minWidth: "100%" }}>
      <InputLabel id={props.labelId}>{props.inputLabel}</InputLabel>
      <Select
        labelId={props.labelId}
        value={props.value}
        onChange={props.handleValueChange}
        input={<OutlinedInput label={props.inputLabel} />}
      >
        {props.values.length > 0 && isThemeMenu(props.values[0])
          ? (props.values as AppTheme[]).map((theme) => (
              <MenuItem key={theme.code} value={theme.code}>
                {theme.name}
              </MenuItem>
            ))
          : (props.values as Language[]).map((language) => (
              <MenuItem key={language.abbr} value={language.abbr}>
                {language.name}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};

export default SelectFormControl;
