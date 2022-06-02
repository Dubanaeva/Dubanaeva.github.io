import axios from 'axios'
import {useState} from "react";


export function useAuthUserRequest() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/auth`
    const [authCredentials, setAuthCredentials] = useState()
    const authenticateUser = (email, password) => {
        axios.post(url, {email: email, password: password})
            .then(response => setAuthCredentials(response.data))
    }
    return [authCredentials, authenticateUser]
}
