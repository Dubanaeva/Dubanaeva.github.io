import {useDispatch} from "react-redux";
import {setAuthenticated, setJWTToken, setCurrentUser} from '../redux/currentUserSlice'

export function useLogout() {
    const dispatch = useDispatch()
    return () => {
        dispatch(setAuthenticated(false))
        dispatch(setJWTToken(null))
        dispatch(setCurrentUser(null))
    }
}