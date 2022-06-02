import axios from 'axios'
import {useEffect, useState} from "react";
import {useAuthCredentials} from "./useAuthCredentials";


export function useQuizRequest(pk) {
    const token = useAuthCredentials()
    const [quiz, setQuiz] = useState()
    useEffect(() => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/quizzes/${pk}`
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setQuiz(response.data)
            })
        }
        , [pk]
    )
    return quiz
}