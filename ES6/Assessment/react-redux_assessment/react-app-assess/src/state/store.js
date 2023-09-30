
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk"; 

import productReducer from "./Product/ProductReducer";


const rootReducer = combineReducers({
    productReducer,
})

export default configureStore(
    {reducer : rootReducer},
    {},
    applyMiddleware(thunk)
)