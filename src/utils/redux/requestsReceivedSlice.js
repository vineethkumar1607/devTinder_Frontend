import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";


export const fetchRequestsReceived = createAsyncThunk("user/userRequestsReceived", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/user/requests/received");
     
        return response.data

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching the requests")
    }
})

const initialState = {
    requests: [],
    uiStrings: {
        title: "",
        emptyMessage: ""
    },
    isLoading: false,
    error: null
}

const requestReceivedSlice = createSlice({
    name: "requestsReceived",
    initialState,
    reducers: {
        clearRequests: (state, action) => {
            state.requests = [],
                state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRequestsReceived.pending, (state) => {
                state.isLoading = true,
                    state.error = null
            })
            .addCase(fetchRequestsReceived.fulfilled, (state, action) => {
                state.isLoading = false;
                state.requests = action.payload.data || [];
                state.uiStrings = action.payload.uiStrings || {
                    title: "Requests",
                    emptyMessage: "No pending requests"
                };
            })
            .addCase(fetchRequestsReceived.rejected, (state, action) => {
                state.isLoading = false,
                    state.error = action.payload
            })
    }
})

export const { clearRequests } = requestReceivedSlice.actions;

export default requestReceivedSlice.reducer