import { TFunction } from "i18next";
import { TableHeader } from "../types/table/tableHeader";

const createHeader = (
  id: TableHeader["id"],
  label: TableHeader["label"],
  cellWidth?: TableHeader["cellWidth"]
): TableHeader => {
  return {
    id: id,
    label: label,
    cellWidth: cellWidth,
  };
};

const getHeaderColumns = (
  t: TFunction<"global", undefined>
): readonly TableHeader[] => {
  const tableHeaders: TableHeader[] = [
    createHeader("rowNumber", "#", 50),
    createHeader("image", t("pages.directory.table.head.image"), 75),
    createHeader("name", t("pages.directory.table.head.name"), 150),
    createHeader("lastname", t("pages.directory.table.head.lastname"), 150),
    createHeader("email", t("pages.directory.table.head.email"), 200),
    createHeader("position", t("pages.directory.table.head.position"), 200),
    createHeader(
      "actionDetails",
      t("pages.directory.table.head.dialogDetails"),
      100
    ),
  ];
  return tableHeaders;
};

export default getHeaderColumns;
