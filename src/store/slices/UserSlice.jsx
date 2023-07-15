import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "currentUser",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});
export const UserReducer = UserSlice.reducer;
export const { setCurrentUser } = UserSlice.actions;
