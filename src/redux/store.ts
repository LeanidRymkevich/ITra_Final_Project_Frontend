import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { REDUX_REDUCERS } from '../types/enums';

import AuthSlice from './AuthSlice/AuthSlice';
import authService from '../services/AuthService';

const rootReducer = combineReducers({
  [REDUX_REDUCERS.AUTH]: AuthSlice,
  [authService.reducerPath]: authService.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authService.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store: AppStore = setupStore();
