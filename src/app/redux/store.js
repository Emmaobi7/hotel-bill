import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import custmerReducer from './customerSlice'

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    customers: custmerReducer,
  },
});

export default store;
