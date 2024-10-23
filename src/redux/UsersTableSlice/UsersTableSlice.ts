import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { User, UsersTableState } from '../../types/interfaces';
import { REDUX_REDUCERS } from '../../types/enums';
import { Order } from '../../types/types';
import userTableService from '../../services/UserTableService';

export const DEFAULT_USERS_TABLE_VARS: UsersTableState = {
  limit: 5,
  page: 1,
  total: 0,
  isLoading: false,
  order: 'asc',
  orderBy: 'username',
  selectedUserIds: [],
  users: [],
  error: '',
  code: 0,
};

const initialState = DEFAULT_USERS_TABLE_VARS;

const UsersTableSlice = createSlice({
  name: REDUX_REDUCERS.USERS_TABLE,
  initialState,
  reducers: {
    setError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
    setLimit(state, { payload }: PayloadAction<number>) {
      state.limit = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    setOrder(state, { payload }: PayloadAction<Order>) {
      state.order = payload;
    },
    setOrderBy(state, { payload }: PayloadAction<keyof User>) {
      state.orderBy = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userTableService.endpoints.getUsers.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        userTableService.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.total = payload.data.total;
          state.users = payload.data.users;
        }
      )
      .addMatcher(
        userTableService.endpoints.getUsers.matchRejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.code =
            typeof payload?.status === 'number' ? payload?.status : 0;
          state.error = (payload?.data as { error: string }).error;
        }
      )
      .addMatcher(
        userTableService.endpoints.updateUser.matchPending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        userTableService.endpoints.updateUser.matchFulfilled,
        (state, { payload }) => {
          const { id } = payload.data;
          state.isLoading = false;
          state.users = [
            ...state.users.filter((user) => user.id !== id),
            payload.data,
          ];
        }
      )
      .addMatcher(
        userTableService.endpoints.updateUser.matchRejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.code =
            typeof payload?.status === 'number' ? payload?.status : 0;
          state.error = (payload?.data as { error: string }).error;
        }
      )
      .addMatcher(
        userTableService.endpoints.deleteUser.matchPending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        userTableService.endpoints.deleteUser.matchFulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.users = state.users.filter(
            (user) => user.id !== payload.data.id
          );
        }
      )
      .addMatcher(
        userTableService.endpoints.deleteUser.matchRejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.code =
            typeof payload?.status === 'number' ? payload?.status : 0;
          state.error = (payload?.data as { error: string }).error;
        }
      );
  },
});

export const { setLimit, setPage, setOrder, setOrderBy } =
  UsersTableSlice.actions;

export const selectError = (state: RootState): string =>
  state[REDUX_REDUCERS.USERS_TABLE].error;
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

export default UsersTableSlice.reducer;
