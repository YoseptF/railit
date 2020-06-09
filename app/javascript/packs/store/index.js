import { configureStore } from '@reduxjs/toolkit';
import currentReducer from '../functions/currentSlice';

const store = configureStore({
  reducer: {
    current: currentReducer,
  },
});

export default store;
