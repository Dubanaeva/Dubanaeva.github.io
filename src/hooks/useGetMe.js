import axios from "axios";
import {useEffect} from "react";
import {useAuthCredentials} from "./useAuthCredentials";


export function useGetMe(token) {
    const getJwtToken = useAuthCredentials()
    const url = `${process.env.REACT_APP_BACKEND_URL}/users/me`
    let currentUser
    useEffect(() => {
        currentUser = axios.get(url).then(response => response.data)
    })
    return currentUser
}
