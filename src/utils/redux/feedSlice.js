import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

export const fetchFeedUsers = createAsyncThunk("feed/fetchFeedUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/user/feed");
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const initialState = {
    usersFeed: [],
    isLoading: false,
    error: null
}

const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        removeUserFromFeed: (state, action) => {
            return {
                ...state, // Copying all existing state
                usersFeed: state.usersFeed.filter(user => user._id !== action.payload),
                isLoading: false,
                error: null
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeedUsers.pending, (state) => {
                state.isLoading = true,
                    state.error = null
            })
            .addCase(fetchFeedUsers.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.usersFeed = action.payload
            })
            .addCase(fetchFeedUsers.rejected, (state) => {
                state.isLoading = false
                state.error = {
                    userMessage: "Couldn't load your feed. Please try again later.", // User message
                    debugMessage: action.payload?.message || "Failed to fetch feed", // For developers
                    statusCode: action.payload?.statusCode || 500
                }
            })

    }
})

export const { removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer