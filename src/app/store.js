import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../app/Slices/MenuSlice';
import { productSlice } from './Slices/ProductSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    [productSlice.reducerPath]:productSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productSlice.middleware)
});
