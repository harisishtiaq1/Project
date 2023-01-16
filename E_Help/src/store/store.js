import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../slices/auth/authSlice"

 const store= configureStore({
    reducer:{
    auth:authreducer
},
});

export default store;