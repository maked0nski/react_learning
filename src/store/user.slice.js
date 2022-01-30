import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {placeholderService} from "../services/placeholder.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async () => {
        try {
            return await placeholderService.getAllUsers()
        } catch (e) {
            console.log(e)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: []
    },
    reducers:{

    }
})

const userReducer = userSlice.reducer;

export default userReducer;