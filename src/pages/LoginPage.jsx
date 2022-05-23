import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'


export default function LoginPage() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='w-1/5 mx-auto mt-10'>
                <LoginForm />
            </div>
        </div>
    )
}