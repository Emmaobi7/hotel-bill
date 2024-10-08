import { createSlice } from "@reduxjs/toolkit";

const initialState = { customers: [] } 


const customerSlice =createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer:(state, action) => {
            state.customers.push(action.payload);
        },
        removeCustomer:(state, action) => {
            state.customers = state.customers.filter((customer) => customer.id !== action.payload);
        }
    }
})

export const { addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;