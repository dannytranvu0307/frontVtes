import { configureStore } from '@reduxjs/toolkit';
import actionsSlice from "../actions/actionsSlice";

export default configureStore({
  reducer: {
    custom: actionsSlice
  }
})

// import { combineReducers } from "@reduxjs/toolkit";
// import actions from './actions';

// export default combineReducers({
//   actions
// });