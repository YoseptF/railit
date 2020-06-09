/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const currentSlice = createSlice({
  name: 'current',
  initialState: {
    sub: {
      name: 'Home',
    },
  },
  reducers: {
    updateSub: (state, action) => { state.sub.name = action.payload; },
  },
});

export const selectSub = state => state.current.sub;

export const { updateSub } = currentSlice.actions;

export const updateSubAsync = newSub => dispatch => {
  setTimeout(() => {
    dispatch(updateSub(newSub));
  }, 100);
};


export default currentSlice.reducer;
