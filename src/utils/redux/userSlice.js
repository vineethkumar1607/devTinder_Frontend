import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    isAuthenticated: false,

}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.user = action.payload.user,
                state.isAuthenticated = true

        },
        logOutUser: (state, action) => {
            state.user = null,
                state.isAuthenticated = false
        }
    },


})
// exporting auto generated action slices from the slice
export const { setLoggedInUser, logOutUser } = userSlice.actions;
// exporting reducer function
export default userSlice.reducer;