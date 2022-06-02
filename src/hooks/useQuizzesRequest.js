import axios from 'axios'
import {useAuthCredentials} from "./useAuthCredentials";
import {useEffect, useState} from "react";


export function useQuizzesRequest(limit = 100, offset = 0) {
    const url = `${process.env.REACT_APP_BACKEND_URL}/quizzes`
    const token = useAuthCredentials()
    const [quizzes, setQuizzes] = useState()
    useEffect(() => {
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => setQuizzes(response.data))
    }, [])
    return quizzes
}