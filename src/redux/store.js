import { configureStore } from "@reduxjs/toolkit"
import currentUserSlice from './currentUserSlice'


export default configureStore({
    reducer: {
        currentUser: currentUserSlice,
    }
})