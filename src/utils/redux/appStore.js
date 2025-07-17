import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice";
import connectionsReducer from "./connectionsSlice";
import requestsReceivedReducer from "./requestsReceivedSlice"

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionsReducer,
        requests: requestsReceivedReducer
    }
})