import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    loginForm: "Signin",
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = !state.isLogin;
    },
    setLoginForm: (state, action) => {
      state.loginForm = action.payload.form;
    },
  },
});

export const { setLogin, setLoginForm } = loginSlice.actions;
export default loginSlice.reducer;
