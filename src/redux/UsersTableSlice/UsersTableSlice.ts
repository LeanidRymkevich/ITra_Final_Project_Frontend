import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { User, UsersTableState } from '../../types/interfaces';
import { REDUX_REDUCERS } from '../../types/enums';
import { Order } from '../../types/types';

export const DEFAULT_USERS_TABLE_VARS: UsersTableState = {
  limit: 5,
  page: 0,
  total: 0,
  isLoading: false,
  order: 'asc',
  orderBy: 'username',
  selected: [],
  users: [],
  error: {
    msg: '',
    code: 0,
  },
};

const initialState = DEFAULT_USERS_TABLE_VARS;

const UsersTableSlice = createSlice({
  name: REDUX_REDUCERS.USERS_TABLE,
  initialState,
  reducers: {
    setLimit(state, { payload }: PayloadAction<number>) {
      state.limit = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    setTotal(state, { payload }: PayloadAction<number>) {
      state.total = payload;
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setOrder(state, { payload }: PayloadAction<Order>) {
      state.order = payload;
    },
    setOrderBy(state, { payload }: PayloadAction<keyof User>) {
      state.orderBy = payload;
    },
    setSelected(state, { payload }: PayloadAction<User['id'][]>) {
      state.selected = payload;
    },
    setUsers(state, { payload }: PayloadAction<User[]>) {
      state.users = payload;
    },
    setError(
      state,
      {
        payload,
      }: PayloadAction<{
        msg: string;
        code: number;
      }>
    ) {
      state.error = payload;
    },
    resetError(state) {
      state.error = { msg: '', code: 0 };
    },
  },
});

export const {
  setLimit,
  setPage,
  setTotal,
  setIsLoading,
  setOrder,
  setOrderBy,
  setSelected,
  setUsers,
  setError,
  resetError,
} = UsersTableSlice.actions;

export const selectError = (
  state: RootState
): {
  msg: string;
  code: number;
} => state[REDUX_REDUCERS.USERS_TABLE].error;
export const selectLimit = (state: RootState): number =>
  state[REDUX_REDUCERS.USERS_TABLE].limit;
export const selectPage = (state: RootState): number =>
  state[REDUX_REDUCERS.USERS_TABLE].page;
export const selectTotal = (state: RootState): number =>
  state[REDUX_REDUCERS.USERS_TABLE].total;
export const selectIsLoading = (state: RootState): boolean =>
  state[REDUX_REDUCERS.USERS_TABLE].isLoading;
export const selectOrder = (state: RootState): Order =>
  state[REDUX_REDUCERS.USERS_TABLE].order;
export const selectOrderBy = (state: RootState): keyof User =>
  state[REDUX_REDUCERS.USERS_TABLE].orderBy;
export const selectUsers = (state: RootState): User[] =>
  state[REDUX_REDUCERS.USERS_TABLE].users;
export const selectSelectedUserIds = (state: RootState): number[] =>
  state[REDUX_REDUCERS.USERS_TABLE].selected;

export default UsersTableSlice.reducer;
