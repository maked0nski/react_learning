import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const delCar = createAsyncThunk(
    'carSlice/delCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const editCar = createAsyncThunk(
    'carSlice/editCar',
    async ({car}, {dispatch}) => {
        try {
            console.log(car)
            await carService.update(car.id, car)
            getAllCars()

        } catch (e) {
            console.log(e)
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        updCar: {},
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({...action.payload.data})
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        editCarBtn: (state, action) => {
            state.updCar = {...action.payload.car}
            console.log(state.updCar);
        },
        updateCar: (state, action) => {
            // state.updCar = {...action.payload.car}
            // console.log(action.payload);
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
            state.error = null
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const carReducer = carSlice.reducer;


export const {addCar, deleteCar, updateCar, editCarBtn} = carSlice.actions;
export default carReducer;