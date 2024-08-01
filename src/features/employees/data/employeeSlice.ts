import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeState } from "../types/api/employeeState";
import { EmployeeApiResponse } from "../types/api/employeeApiResponse";
import EmployeeModel from "../models/employeeModel";
import metaInitialState from "./metaInitialState";
import setEmployeeMetaData from "../utils/setEmployeeMetaData";

type FetchSearchedEmployeesPayload = {
  searchedValue: string;
  nextPageUrl?: string;
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetch",
  async (nextPageUrl?: string) => {
    const employeeModel = new EmployeeModel();
    const response = await employeeModel.getEmployeesData(nextPageUrl);
    return response;
  }
);

export const fetchSearchedEmployees = createAsyncThunk(
  "employeesSearch/fetch",
  async (searchedEmployeesPayload: FetchSearchedEmployeesPayload) => {
    const employeeModel = new EmployeeModel();
    const response = await employeeModel.getSearchedEmployees(
      searchedEmployeesPayload.searchedValue,
      searchedEmployeesPayload.nextPageUrl
    );
    return response;
  }
);

const initialState: EmployeeState = {
  employees: [],
  meta: metaInitialState,
  status: "idle",
  error: undefined,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    // reset action
    resetState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchEmployees.fulfilled,
        (state, action: PayloadAction<EmployeeApiResponse>) => {
          state.status = "success";
          state.employees = action.payload.data;
          state.meta = setEmployeeMetaData(action.payload);
        }
      )
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })

      .addCase(fetchSearchedEmployees.pending, (state) => {
        state.status = "loading";
      })

      .addCase(
        fetchSearchedEmployees.fulfilled,
        (state, action: PayloadAction<EmployeeApiResponse>) => {
          state.status = "success";
          state.employees = action.payload.data;
          state.meta = setEmployeeMetaData(action.payload);
        }
      )
      .addCase(fetchSearchedEmployees.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      });
  },
});

export const { resetState } = employeeSlice.actions;

export default employeeSlice.reducer;
