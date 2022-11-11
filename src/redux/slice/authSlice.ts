import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  name: string;
  email: string;
  username: string;
  password: string;
  phone?: number;
  role: string;
}

const initialState: AuthState = {
  name: "",
  email: "",
  username: "",
  password: "",
  phone: 0,
  role: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
    },
    logOut: (state) => {
      state.name = "";
      state.email = "";
      state.username = "";
      state.password = "";
      state.phone = 0;
      state.role = "";
    },
  },
});

export const { addUser, logOut } = authSlice.actions;

export default authSlice.reducer;
