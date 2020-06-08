import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../functions/counterSlice';

const store = configureStore({
  reducer: counterReducer,
});

export default store;
