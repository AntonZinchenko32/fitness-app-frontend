import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth/slice';
import { productsReducer } from './products';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;