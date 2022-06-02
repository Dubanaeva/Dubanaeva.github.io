import axios from 'axios'
import {useState} from "react";


export function useCreateUserRequest(email, password) {
    const [isSuccess, setSuccess] = useState(null)
    const url = `${process.env.REACT_APP_BACKEND_URL}/users`
    return [
        isSuccess,
        (email, password) => axios.post(url, {email: email, password: password})
            .then(response => {
                setSuccess(true)
                return response.data
            }).catch(error => {
                setSuccess(false)
            })
    ]
}