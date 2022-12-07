import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  id?: string;
  name: string;
  email: string;
  image: string;
  username: string;
  password: string;
  phone: string | undefined;
  role: string;
}

const initialState: AuthState = {
  name: "",
  email: "",
  image: "",
  username: "",
  password: "",
  phone: "+84",
  role: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
    },
    setLogIn: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    setLogOut: (state) => {
      state.name = "";
      state.email = "";
      state.username = "";
      state.password = "";
      state.phone = "+84";
      state.role = "";
    },
  },
});

export const { setActiveUser, setLogIn, setLogOut } = authSlice.actions;

export default authSlice.reducer;
