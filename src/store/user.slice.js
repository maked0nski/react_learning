import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../services/placeholder.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await placeholderService.getAllUsers()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getUserById = createAsyncThunk(
    'userSlice/getUserById',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            const user = await placeholderService.getUserById(id);
            dispatch(usersItem({user}))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: undefined,
        users: undefined,
        // posts: undefined,
        status: null,
        error: null,
    },
    reducers: {
        usersItem: (state, action) => {
            state.user = {...action.payload.user}
        }
    },
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
        },
        [getUserById.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getUserById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
            console.log(action.payload)
            state.error = null
        },
        [getUserById.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const userReducer = userSlice.reducer;

export const {usersItem} = userSlice.actions;

export default userReducer;