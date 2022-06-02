import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import {Button, Paper, Stack, TextField, Typography} from "@mui/material";
import {useCreateUserRequest} from "../../hooks/useCreateUserRequest";
import {useAuthUserRequest} from "../../hooks/useAuthUserRequest";


export default function RegisterForm() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const navigate = useNavigate()
    const [isUserCreated, createUser] = useCreateUserRequest()
    const [isUserAuthenticated, authenticateUser] = useAuthUserRequest()

    const onSubmit = (formData) => {
        if (formData.password !== formData.password2) return
        createUser(formData.email, formData.password)
        if (isUserCreated) {
            const authCredentials = authenticateUser(formData.email, formData.password)
            if (isUserAuthenticated) {
                localStorage.setItem('token', authCredentials.access_string)
                navigate('/')
            }
        }
    }
    watch('email')
    watch('password')
    watch('password2')

    return (
        <Paper elevation={3} sx={{padding: 3}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <Typography variant='h6' align='center'>Регистрация</Typography>
                    <TextField fullWidth type='email' size='small' variant='outlined' label='Email'
                               {...register('email', {required: true})} />
                    <TextField fullWidth type='password' size='small' variant='outlined' label='Пароль'
                               {...register('password', {required: true})} />
                    <TextField fullWidth type='password' size='small' variant='outlined' label='Пароль ещё раз'
                               {...register('password2', {required: true})} />
                    <Button fullWidth type='submit' variant="contained">Зарегистрироваться</Button>
                    <Link to='/login'>
                        <Button fullWidth variant='outlined'>Логин</Button>
                    </Link>
                </Stack>
            </form>
        </Paper>
    )
}