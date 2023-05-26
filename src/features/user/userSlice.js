import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../auth/loginSlice";

export const userUpdate = createAsyncThunk(
    'login/userUpdate',
    async (form) => {
        console.log(form)
        // try {
        //     const response = await axios.post(`${baseURL}/users`,form,{withCredentials: true})
        //     return response
        // }catch(err){
        //     return err.response
        // }
    }
)

const userSlice = createSlice({
    name:'user',
    initialState: {},
    extraReducers:(builder) =>  {
        builder.addCase(userUpdate.pending, (state)=> {
            state.departments = []
        }),
        builder.addCase(userUpdate.fulfilled, (state,action)=> {
            if(action.payload.status === 200){
                state.departments = action.payload.data.data
            }else if (action.payload === 401){
                state.error = []
            }
        })
    }
})

export default userSlice.reducer