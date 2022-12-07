import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  id?: string;
  name: string | null;
  email: string | null;
  username: string | null;
  password: string | null;
  phone?: number | null;
  role: string | null;
}

const initialState: AuthState = {
  name: null,
  email: null,
  username: null,
  password: null,
  phone: undefined,
  role: null,
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
      state.name = null;
      state.email = null;
      state.username = null;
      state.password = null;
      state.phone = null;
      state.role = null;
    },
  },
});

export const { setActiveUser, setLogIn, setLogOut } = authSlice.actions;

export default authSlice.reducer;
