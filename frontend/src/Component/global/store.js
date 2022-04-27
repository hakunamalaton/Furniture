import { configureStore } from '@reduxjs/toolkit';

import accountSlice from '../Account/slice/accountSlice';
import cartSlice from '../OrderProcess/slice/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        account: accountSlice,
    },
})