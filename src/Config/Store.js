import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../Store/ProductReducer/ProductReducer";
import AuthReducer from "../Store/ProductReducer/AuthReducer";



import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))



const Store= configureStore({
    reducer:{
        ProductReducer,
        AuthReducer
    },
    composedEnhancer
});

export default Store;