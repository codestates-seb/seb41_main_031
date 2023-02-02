import { createSlice } from '@reduxjs/toolkit';

const initialModifyState = {
  answerId: 0,
};

const modifySlice = createSlice({
  name: 'authentication',
  initialState: initialModifyState,
  reducers: {
    modifyAnswer(state, action) {
      state.answerId = action.payload;
    },
  },
});

export const modifyActions = modifySlice.actions;

export default modifySlice.reducer;