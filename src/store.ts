import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { optionsSlice } from "./features/headerOptions";
import employeeSlice from "./features/employees/data/employeeSlice";

const appReducers = combineReducers({
  options: optionsSlice,
  employees: employeeSlice,
});

const store = configureStore({
  reducer: appReducers,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
