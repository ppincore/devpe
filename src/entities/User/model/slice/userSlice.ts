import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { parseJwt } from '../../../../shared/lib/utils/parseJwt';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../../../../shared/const/browserStorage';
import type { User, UserSchema } from '../types/user';

const offAuthState: UserSchema = {
  _init: false,
  token: '',
  userData: {},
};

// const isAuthDisabled = import.meta.env.VITE_IS_AUTH_DISABLED;
const isAuthDisabled = false;

const initialState: UserSchema = isAuthDisabled
  ? offAuthState
  : { _init: false };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Omit<UserSchema, '_init'>>) => {
      const { token, userData } = action.payload;

      if (!token) {
        return;
      }
      state.userData = userData;
      state.token = token;
      localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY, token);
      state._init = true;
    },
    initAuthData: (state) => {
      if (state._init) {
        return;
      }
      const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
      if (token) {
        state.userData = parseJwt<User>(token);
        state.token = token;
      }

      state._init = true;
    },
    logOutUser: (state) => {
      const localStorageToken = localStorage.getItem(
        ACCESS_TOKEN_LOCAL_STORAGE_KEY,
      );
      if (localStorageToken) {
        localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
        state.userData = {
          id: '',
          userName: '',
          email: '',
          avatar: '',
        };
        state._init = false;
        state.token = '';
      }
    },
  },
  selectors: {
    selectIsInit: (state) => state._init,
    getUserAuthData: (state) => state.userData,
    isAuthenticated: (state) => Boolean(state.token && state.userData?.id),
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
