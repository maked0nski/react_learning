import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../services/placeholder.service";


export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await placeholderService.getAllComments();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: undefined,
        comment: undefined,
        status: null,
        error: null
    },
    reducers: {
        commentItem: (state, action) => {
            state.comment = {...action.payload.comment}
        }
    },
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
            state.error = null;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const commentReducer = commentSlice.reducer;

export const {commentItem}= commentSlice.actions;

export default commentReducer;