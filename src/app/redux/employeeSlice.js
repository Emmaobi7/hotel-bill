import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [],
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        removeEmployee: (state, action) => {
            state.employees = state.employees.filter((employee) => employee.id !== action.payload)
        } 
    }
})

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;