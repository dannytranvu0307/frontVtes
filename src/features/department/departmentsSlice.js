import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../auth/loginSlice";

export const departments = createAsyncThunk(
    'departments/department',
    async () => {
        try {
            const response = await axios.get(`${baseURL}/departments`,{withCredentials: true})
            return response
        }catch(err){
            return err.response.status
        }
    }
)

const authSlice = createSlice({
    name:'departments',
    initialState: {departments: []},
    extraReducers:(builder) =>  {
        builder.addCase(departments.pending, (state)=> {
            state.departments = []
        }),
        builder.addCase(departments.fulfilled, (state,action)=> {
            if(action.payload.status === 200){
                state.departments = action.payload.data.data
            }else if (action.payload === 401){
                state.error = []
            }
        })
    }
})

export default authSlice.reducer


export const selectDepartments = ( state ) => state.departments.departments
