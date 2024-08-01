import { BodyDataStatus, setTableEmployeeData } from "../..";
import { FC, useCallback, useMemo, useRef } from "react";
import { TableBodySuccessProps } from "../../types/table/tableBodySuccessProps";
import BodyRowEmployee from "./BodyRowEmployee";
import { useAppSelector } from "../../../../hooks";
import { useTranslation } from "react-i18next";

const TableBodySuccess: FC<TableBodySuccessProps> = ({
  employeesData,
  refetch,
  handleDialogOpen,
}) => {
  const { t } = useTranslation();

  let rowNumber = useMemo<number>(() => 0, []);
  const observer = useRef<IntersectionObserver | null>(null);
  const loadingStatus = useAppSelector((state) => state.employees.status);

  // Callback function to handle the IntersectionObserver (infinite scroll)
  const nextPageRef = useCallback(
    (node: HTMLTableRowElement | null) => {
      observer.current && observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          refetch();
        }
      });

      if (node) observer.current.observe(node);
    },
    [refetch]
  );

  return (
    <>
      {employeesData.length === 0 && loadingStatus === "success" ? (
        <BodyDataStatus message={t("dataStatus.noDataMsg")} />
      ) : (
        <>
          {employeesData.map((employee) => {
            rowNumber++;

            const rowData = setTableEmployeeData(employee);
            return (
              <BodyRowEmployee
                key={employee.id}
                employee={employee}
                rowNumber={rowNumber}
                handleDialogOpen={handleDialogOpen}
                rowData={rowData}
                nextPageRef={
                  employeesData.length === rowNumber ? nextPageRef : undefined
                }
              />
            );
          })}

          {loadingStatus === "success" && employeesData.length !== 0 && (
            <BodyDataStatus
              message={t("pages.directory.table.body.allDisplayed")}
            />
          )}
        </>
      )}
    </>
  );
};

export default TableBodySuccess;
