import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "../features/usersSlice";
import LoginReducers from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    login: LoginReducers,
    users: UserReducers,
  },
});
