import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

// Async Thunk for updating user profile
export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch('/profile/edit', profileData);
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Profile update failed');
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  updateProfileLoading: false,
  updateProfileError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.updateProfileLoading = true;
        state.updateProfileError = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.updateProfileLoading = false;
        state.user = action.payload; // res.data.user
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.updateProfileLoading = false;
        state.updateProfileError = action.payload;
      });
  },
});

export const { setLoggedInUser, finishLoading, logoutUser } = userSlice.actions;
export default userSlice.reducer;
