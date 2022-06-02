import React from 'react'
import { Navigate } from "react-router-dom";
import {useLoginStatus} from "../hooks/useLoginStatus";


// Компоненты с этими роутами будут требовать аутентификацию
export default function ProtectedRoute({children}) {
    const isAuthenticated = useLoginStatus()

    if (!isAuthenticated) {
        return <Navigate to='/login' replace/>
    }
    return children
}