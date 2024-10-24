import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { REDUX_REDUCERS, USER_ROLES } from '../../types/enums';
import { AuthState, AuthResponse } from '../../types/interfaces';
import { getAuthStateFromLS } from '../../utils/localStorageUtils';

const initialState: AuthState = {
  ...getAuthStateFromLS(),
  unauthorizedError: '',
};

const AuthSlice = createSlice({
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
    setUnauthorizedError(state, { payload }: PayloadAction<string>) {
      state.unauthorizedError = payload;
    },
  },
});

export const { setState, resetState, setUnauthorizedError } = AuthSlice.actions;

export const selectToken = (state: RootState): string | null =>
  state[REDUX_REDUCERS.AUTH].token;
export const selectUsername = (state: RootState): string | null =>
  state[REDUX_REDUCERS.AUTH].username;
export const selectRole = (state: RootState): USER_ROLES | null =>
  state[REDUX_REDUCERS.AUTH].role;
export const selectUnauthorizedError = (state: RootState): string =>
  state[REDUX_REDUCERS.AUTH].unauthorizedError;

export default AuthSlice.reducer;
