import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    openLogin: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
      const { isLoggedIn } = action.payload;
      state.isLoggedIn = isLoggedIn;
    },
    closeLogin: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { openLogin, closeLogin } = commonSlice.actions;

export default commonSlice.reducer;
