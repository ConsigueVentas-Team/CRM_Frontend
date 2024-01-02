import {
  getCookie,
  getLocalStorage,
  getSessionStorage,
  removeCookie,
  removeLocalStorage,
  removeSessionStorage,
  setCookie,
  setLocalStorage,
  setSessionStorage,
} from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/auth";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated:
    (getLocalStorage("isAuthenticated") || getSessionStorage("isAuthenticated")) === "true" && getCookie("accessToken")
      ? true
      : false,
  user: JSON.parse(getLocalStorage("user") as string) || JSON.parse(getSessionStorage("user") as string) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      if (action.payload.remember) {
        setLocalStorage("isAuthenticated", "true");
        setLocalStorage("user", JSON.stringify(action.payload.user));
      } 
      if (!action.payload.remember) {
        setSessionStorage("isAuthenticated", "true");
        setSessionStorage("user", JSON.stringify(action.payload.user));
      }
      setCookie("accessToken", action.payload.access, 1);
      setCookie("refreshToken", action.payload.refresh, 1);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeLocalStorage("isAuthenticated");
      removeLocalStorage("user");
      removeSessionStorage("isAuthenticated");
      removeSessionStorage("user");
      removeCookie("accessToken");
      removeCookie("refreshToken");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
