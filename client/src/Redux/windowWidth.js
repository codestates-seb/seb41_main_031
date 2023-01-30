import { createSlice } from '@reduxjs/toolkit';

const initialWindowWidthState = {
  width: window.innerWidth,
};

const windowWidthSlice = createSlice({
  name: 'windowWidth',
  initialState: initialWindowWidthState,
  reducers: {
    windowResize(state, action) {
      state.width = action.payload;
    },
  },
});

export const windowWidthActions = windowWidthSlice.actions;

export default windowWidthSlice.reducer;