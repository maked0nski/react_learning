import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../services/placeholder.service";

export const getAllUsers = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await placeholderService.getAllUsers()
        } catch (e) {
            console.log(e)
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
            state.error = null
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer;