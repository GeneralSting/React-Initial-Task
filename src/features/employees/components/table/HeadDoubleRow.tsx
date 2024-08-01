import { TableCell, TableHead, TableRow } from "@mui/material";
import { TableHeader } from "../../types/table/tableHeader";
import { FC, useMemo } from "react";
import { getHeaderColumns } from "../..";
import { HeadDoubleRowProps } from "../../types/table/headDoubleRowProps";
import { useTranslation } from "react-i18next";
import SearchInput from "./SearchInput";
import { useAppSelector } from "../../../../hooks";
import { lightIncreasedCode } from "../../../themes";

const HeadDoubleRow: FC<HeadDoubleRowProps> = ({
  tableDataRows,
  totalRows,
  searchEmployees,
}) => {
  const appTheme = useAppSelector((state) => state.options.appTheme);

  const { t } = useTranslation();
  const headerColumns: readonly TableHeader[] = useMemo(
    () => getHeaderColumns(t),
    [t]
  );

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left" colSpan={3}>
          {`${t(
            "pages.directory.table.head.numberDisplayed"
          )} ${tableDataRows}/${totalRows}`}
        </TableCell>
        <TableCell align="right" colSpan={4}>
          <SearchInput searchedEmployees={searchEmployees} />
        </TableCell>
      </TableRow>
      <TableRow>
        {headerColumns.map((column) => (
          <TableCell
            key={column.id}
            align="center"
            style={{
              width: column.cellWidth,
            }}
            /* From MUI docs: if the goal is to make the full 2 row header sticky,
                    perhaps try to add a top value to the second row in headers, so
                    that it offset some space for the first row to stay visible
                    */
            sx={{ top: appTheme === lightIncreasedCode ? 64 : 57 }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeadDoubleRow;
