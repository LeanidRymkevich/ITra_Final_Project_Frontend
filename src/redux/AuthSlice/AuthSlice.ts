import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { REDUX_REDUCERS } from '../../types/enums';
import { AuthState, AuthResponse } from '../../types/interfaces';

const initialState: AuthState = {
  token: null,
  username: null,
  role: null,
};

export const AuthSlice = createSlice({
  name: REDUX_REDUCERS.AUTH,
  initialState,
  reducers: {
    setState(state, { payload }: PayloadAction<AuthResponse>) {
      state.token = payload.token;
      state.username = payload.data.username;
      state.role = payload.data.role;
    },
    resetState(state) {
      state.token = null;
      state.username = null;
      state.role = null;
    },
  },
});

export const { setState, resetState } = AuthSlice.actions;

export const selectToken = (state: RootState): string | null =>
  state[REDUX_REDUCERS.AUTH].token;
export const selectUsername = (state: RootState): string | null =>
  state[REDUX_REDUCERS.AUTH].username;
export const selectRole = (state: RootState): string | null =>
  state[REDUX_REDUCERS.AUTH].role;

export default AuthSlice.reducer;