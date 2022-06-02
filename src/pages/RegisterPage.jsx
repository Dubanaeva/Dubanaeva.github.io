import React from 'react'
import Header from '../components/Header'
import RegisterForm from '../components/forms/RegisterForm'
import {Container} from "@mui/material";


export default function RegisterPage() {
    return (
        <>
            <Header/>
            <Container maxWidth='xs' sx={{marginY: 4}}>
                <RegisterForm/>
            </Container>
        </>

    )
}