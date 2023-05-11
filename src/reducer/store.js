import { configureStore } from '@reduxjs/toolkit';
import actionsSlice from "../actions/actionsSlice";

export default configureStore({
  reducer: {
    custom: actionsSlice
  }
})

