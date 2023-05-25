import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/loginSlice';
import departmentsReducer from '../features/department/departmentsSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    departments: departmentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});