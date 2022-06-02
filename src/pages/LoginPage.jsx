import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/forms/LoginForm'
import {Container} from "@mui/material";


export default function LoginPage() {
    return (
        <>
            <Header/>
            <Container maxWidth='xs' sx={{marginY: 4}}>
                <LoginForm/>
            </Container>
        </>

    )
}