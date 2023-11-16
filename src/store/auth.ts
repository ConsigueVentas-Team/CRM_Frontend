import { getCookie, getLocalStorage, removeCookie, removeLocalStorage, setCookie, setLocalStorage } from '@/lib/utils';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/types/auth';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: getLocalStorage('isAuthenticated') === 'true' && getCookie('accessToken') ? true : false,
  user: JSON.parse(getLocalStorage('user') as string) || null
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      setLocalStorage('isAuthenticated', 'true')
      setLocalStorage('user', JSON.stringify(action.payload.user))
      setCookie('accessToken', action.payload.access, 1)
      setCookie('refreshToken', action.payload.refresh, 1)
    },
    logout: (state) => {
      state.isAuthenticated = false;
      removeLocalStorage('isAuthenticated');
      removeLocalStorage('user');
      removeCookie('accessToken');
      removeCookie('refreshToken');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;