import { createSlice } from "@reduxjs/toolkit";
import { authRequest } from "./request";
import { LOGIN_SUCCESS } from "../../utils/UserStatus";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) ?? null,
  status: sessionStorage.getItem("status") ?? false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("status");
      state.user = null;
      state.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRequest.pending, (state) => {
        console.log("Pending authentication request...");
      })
      .addCase(authRequest.fulfilled, (state, action) => {
        const user = action.payload;
        const status = LOGIN_SUCCESS;
        sessionStorage.setItem("status", status);
        sessionStorage.setItem("user", JSON.stringify(user));
        state.user = user;
        state.status = status;
        console.log("Authentication successful:", user);
      })
      .addCase(authRequest.rejected, (state, action) => {
        console.log("Authentication failed:", action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
export const selectUserId = (state) => state.auth.user.id;
export default authSlice.reducer;
