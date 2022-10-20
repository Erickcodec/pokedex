import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: undefined,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGlobalName(state, action) {
      state.name = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { setGlobalName } = userSlice.actions;
export default userSlice.reducer;
