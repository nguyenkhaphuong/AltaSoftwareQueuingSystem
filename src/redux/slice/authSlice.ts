import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  currentUser?: any;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: undefined,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;