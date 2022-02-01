import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";
import postReducer from "./post.slice";
import commentReducer from "./comments.slice";
import productReducer from "./Fake.store/product.slice";



const store = configureStore({
    reducer: {
        carReducer: carReducer,
        userReducer: userReducer,
        postReducer: postReducer,
        commentReducer: commentReducer,
        productReducer: productReducer
    }
})

export default store