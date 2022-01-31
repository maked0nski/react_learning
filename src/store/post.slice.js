import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {placeholderService} from "../services/placeholder.service";

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await placeholderService.getAllPosts();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getPostById = createAsyncThunk(
    'postSlice/getPostById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            const post = await placeholderService.getPostById(id);
            dispatch(postItem({post}))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: undefined,
        post: undefined,
        status: null,
        error: null
    },
    reducers: {
        postItem: (state, action) => {
            state.post = {...action.payload.post}
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
            state.error = null
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const postReducer = postSlice.reducer;

export const {postItem} = postSlice.actions;

export default postReducer;