import { configureStore } from '@reduxjs/toolkit';

import authSlice from './cart slices/auth-slice';
import cartSlice from './cart slices/cart-slice';
import uiSlice from './cart slices/ui-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
