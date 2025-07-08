import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.user = action.payload.user,
                state.isAuthenticated = true,
                state.isLoading = false;
        },
        logOutUser: (state) => {
            state.user = null,
                state.isAuthenticated = false,
                state.isLoading = false;
        },
        finishLoading: (state) => {
            state.isLoading = false;
        }
    },
})
// exporting auto generated action slices from the slice
export const { setLoggedInUser, logOutUser, finishLoading } = userSlice.actions;
// exporting reducer function
export default userSlice.reducer;