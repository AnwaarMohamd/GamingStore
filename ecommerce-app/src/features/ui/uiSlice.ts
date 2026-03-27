import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    toastMessage: string | null;
    darkMode: boolean;
}

const initialState: UIState = {
    toastMessage: null,
    darkMode: true,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showToast(state, action: PayloadAction<string>) {
            state.toastMessage = action.payload;
        },
        hideToast(state) {
            state.toastMessage = null;
        },
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { showToast, hideToast, toggleDarkMode } = uiSlice.actions;
export default uiSlice.reducer;