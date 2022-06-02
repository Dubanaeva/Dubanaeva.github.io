import React from 'react'
import {Link, useNavigate, Redirect} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message'
import {useDispatch, useSelector} from "react-redux";
import {setJWTToken} from "../../redux/currentUserSlice";
import {Paper, Typography, TextField, Button, Stack} from "@mui/material";
import {useAuthUserRequest} from "../../hooks/useAuthUserRequest";

export default function LoginForm() {
    const navigate = useNavigate()
    const [authCredentials, authenticateUser] = useAuthUserRequest()
    const {register, handleSubmit, watch} = useForm();
    const onSubmit = formData => {
        authenticateUser(formData.email, formData.password)
        if (authCredentials) {
            localStorage.setItem('token', authCredentials.access_string)
            navigate('/')
        }
    }

    watch('email')
    watch('password')

    return (
        <Paper elevation={3} sx={{padding: 3}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <Typography variant='h6' align='center'>Авторизация</Typography>
                    <TextField fullWidth type='email' size='small' variant='outlined' label='email'
                               {...register('email', {required: true})}/>
                    <TextField fullWidth type='password' size='small' variant='outlined' label='Пароль'
                               {...register('password', {required: true})}/>
                    <Button fullWidth type='submit' variant="contained">Войти</Button>
                    <Link to='/register'>
                        <Button fullWidth variant='outlined'>Регистрация</Button>
                    </Link>
                </Stack>
            </form>
        </Paper>
    )
}