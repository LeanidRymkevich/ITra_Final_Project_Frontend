import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { REDUX_REDUCERS } from '../types/enums';

import AuthSlice from './AuthSlice/AuthSlice';

const rootReducer = combineReducers({
  [REDUX_REDUCERS.AUTH]: AuthSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store: AppStore = setupStore();
