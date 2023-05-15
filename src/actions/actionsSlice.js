import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const actionsSlice = createSlice({
    name: 'myslice',
    initialState: {
        todo: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload)
        },
        updateTodo: (state, action) => {

        },
        removeTodo: (state,action) => {
            console.log(action)
            state.todo.splice(action.payload, 1)
        },
    }
})

export const { addTodo, updateTodo, removeTodo} = actionsSlice.actions;
export default actionsSlice.reducer