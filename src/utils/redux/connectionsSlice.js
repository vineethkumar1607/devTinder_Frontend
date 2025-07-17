import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";


export const fetchConnections = createAsyncThunk("user/userConnections", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/user/connections");
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch connections")
    }
})
const initialState = {
    connections: [],
    uiStrings: { title: "", emptyMessage: "" },
    isLoading: false,
    error: null

}
const connectionsSlice = createSlice({
    name: "connections",
    initialState,
    reducers: {
        removeConnections: (state) => {
            state.connections = [],
                state.isLoading = false
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchConnections.pending, (state) => {
                state.isLoading = true,
                    state.error = null
            })
            .addCase(fetchConnections.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.connections = action.payload.data,
                    state.uiStrings = action.payload.uiStrings
            })
            .addCase(fetchConnections.rejected, (state, action) => {
                state.isLoading = false,
                    state.error = action.payload
            })
    }
})

export const { removeConnections } = connectionsSlice.actions;
export default connectionsSlice.reducer;