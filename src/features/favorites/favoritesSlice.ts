import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
    items: string[]; // store product IDs
}

const initialState: FavoritesState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<string>) {
            if (state.items.includes(action.payload)) {
                state.items = state.items.filter((id) => id !== action.payload);
            } else {
                state.items.push(action.payload);
            }
        },
        clearFavorites(state) {
            state.items = [];
        },
    },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;