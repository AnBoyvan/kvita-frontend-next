import { createSlice } from '@reduxjs/toolkit';

const localCartSlice = createSlice({
  name: 'localCart',
  initialState: { items: [] },
  reducers: {
    setLocalCart: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setLocalCart } = localCartSlice.actions;

export const localCartReducer = localCartSlice.reducer;
