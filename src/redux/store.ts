import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { REDUX_REDUCERS } from '../types/enums';

import AuthSlice from './AuthSlice/AuthSlice';
import UsersTableSlice from './UsersTableSlice/UsersTableSlice';

import authService from '../services/AuthService';
import userTableService from '../services/UserTableService';

const rootReducer = combineReducers({
  [REDUX_REDUCERS.AUTH]: AuthSlice,
  [REDUX_REDUCERS.USERS_TABLE]: UsersTableSlice,
  [authService.reducerPath]: authService.reducer,
  [userTableService.reducerPath]: userTableService.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authService.middleware,
        userTableService.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store: AppStore = setupStore();
