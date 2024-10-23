import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { User, UsersTableState } from '../../types/interfaces';
import { REDUX_REDUCERS } from '../../types/enums';
import { Order } from '../../types/types';

export const DEFAULT_USERS_TABLE_VARS: UsersTableState = {
  limit: 5,
  page: 1,
  total: 0,
  isLoading: false,
  order: 'asc',
  orderBy: 'username',
  selectedUserIds: [],
  users: {},
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
    setUsers(state, { payload }: PayloadAction<User[]>) {
      state.users = payload.reduce(
        (
          acc: Record<User['id'], Omit<User, 'id'>>,
          user: User
        ): Record<User['id'], Omit<User, 'id'>> => {
          const { id, ...data } = user;
          return {
            ...acc,
            [id]: data,
          };
        },
        {}
      );
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
  setUsers,
} = UsersTableSlice.actions;

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
  Object.entries(state.users_table.users).map(([id, data]): User => {
    return {
      id: +id,
      ...data,
    };
  });

export default UsersTableSlice.reducer;
