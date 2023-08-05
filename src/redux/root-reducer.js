import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';
import { localCartReducer } from './localCart/localCart-slice';

const persistAuthConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistLocalCartConfig = {
  key: 'localCart',
  storage,
};

const persistedAuthReducer = persistReducer(
  persistAuthConfig,
  authReducer
);

const persistedLocalCartReducer = persistReducer(
  persistLocalCartConfig,
  localCartReducer
);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  localCart: persistedLocalCartReducer,
});
