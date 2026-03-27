import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@/types/Products';
import { fetchProductsMock } from '@/services/api/mockProducts';

interface ProductsState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    isLoading: false,
    error: null,
};

// Async thunk to simulate API call
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const data = await fetchProductsMock();
    return data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // delete product from UI only
        removeProduct(state, action: PayloadAction<string>) {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const { removeProduct } = productsSlice.actions;
export default productsSlice.reducer;