import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: {
    userList: {},
  },
  reducers: {
    getUserList: (state, action) => {},
  },
});

export const { getUserList } = UserSlice.actions;
export default UserSlice.reducer;
