import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import productsReducer from '@/features/products/productsSlice';
import cartReducer from '@/features/cart/cartSlice';
import favoritesReducer from '@/features/favorites/favoritesSlice';
import uiReducer from '@/features/ui/uiSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        ui: uiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;