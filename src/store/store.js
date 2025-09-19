import { configureStore } from '@reduxjs/toolkit';
import ProjectReducer from '../slices/projectSlice';

export const store = configureStore({
  reducer: {
    projects: ProjectReducer,
  },
});