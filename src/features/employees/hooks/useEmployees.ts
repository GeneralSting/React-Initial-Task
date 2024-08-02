import { useEffect, useMemo, useState, useCallback } from "react";
import { Employee } from "../types/api/employee";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  fetchEmployees,
  fetchSearchedEmployees,
  resetState,
} from "../data/employeeSlice";
import { UseEmployeesResult } from "../types/useEmployeesResult";

// custom hook for employees api data manipulation
const useEmployees = (): UseEmployeesResult => {
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employees);
  const nextPageUrl = useAppSelector(
    (state) => state.employees.meta.next_page_url
  );

  const employeesNumber = useMemo(
    () => employeesData.length,
    [employeesData.length]
  );

  // Fetch employees when component mounts or search query changes
  useEffect(() => {
    if (searchQuery.length !== 0) {
      dispatch(fetchSearchedEmployees({ searchedValue: searchQuery }));
    } else {
      dispatch(fetchEmployees());
    }

    return () => {
      setEmployeesData([]);
      dispatch(resetState());
    };
  }, [dispatch, searchQuery]);

  useEffect(() => {
    if (employees.length === 0) {
      setEmployeesData([]);
      return;
    }
    setEmployeesData((prevState) => {
      const existingIds = new Set(prevState.map((employee) => employee.id));
      const newEmployees = employees.filter(
        (employee) => !existingIds.has(employee.id)
      );
      return [...prevState, ...newEmployees];
    });
  }, [employees]);

  const refetch = useCallback(async () => {
    if (nextPageUrl === null) {
      setHasMoreData(false);
      return;
    }

    if (nextPageUrl) {
      if (searchQuery.length === 0) {
        await dispatch(fetchEmployees(nextPageUrl));
      } else {
        await dispatch(
          fetchSearchedEmployees({
            searchedValue: searchQuery,
            nextPageUrl: nextPageUrl,
          })
        );
      }
    }
  }, [dispatch, nextPageUrl, searchQuery]);

  const searchEmployees = useCallback((query: string) => {
    setEmployeesData([]); // Reset employeesData on new search
    setSearchQuery(query);
  }, []);

  return {
    employeesData,
    hasMoreData,
    employeesNumber,
    refetch,
    searchEmployees,
  };
};

export default useEmployees;
