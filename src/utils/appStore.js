import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import userReducer from './userSlice'
import { itemApi } from "./itemAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
const appStore = configureStore({
    reducer:{
        [itemApi.reducerPath]:itemApi.reducer,
        cart : cartReducer,
        user : userReducer
    },
    // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(itemApi.middleware)
})
setupListeners(appStore.dispatch)
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

export default appStore