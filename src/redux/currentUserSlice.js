import {createSlice} from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        user: null,
        jwtToken: null,
        isAuthenticated: false,
    },
    reducers: {
        setJWTToken: (state, token) => {
            state.jwtToken = token
        },
        setCurrentUser: (state, user) => {
            state.user = user
        },
        setAuthenticated: (state, value) => {
            state.isAuthenticated = value
        }
    },
})

export const {setCurrentUser, setAuthenticated, setJWTToken} = currentUserSlice.actions
export default currentUserSlice.reducer