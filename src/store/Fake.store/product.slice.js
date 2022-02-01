import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productService} from "../../services/product.service";

const initialState = {
    products: [],
    status: null,
    error: null
};

export const getAllProducts = createAsyncThunk(
    'productSlice/getAllProducts',
    async (_, {rejectWithValue}) => {
        try {
            return await productService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })


const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        updateProduct: (state, action) => {

        }
    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.products = action.payload;
            state.error = null;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const productReducer = productSlice.reducer;

export const {updateProduct} = productSlice.actions

export default productReducer
