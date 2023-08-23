import { configureStore } from "@reduxjs/toolkit";
import ProductAddReducer from './CartSlice'

const store = configureStore({
    reducer:{
      productAdd:ProductAddReducer
    }
})

export default store