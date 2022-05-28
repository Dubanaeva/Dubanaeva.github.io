import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'


export default function LoginPage() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='xl:w-1/5 lg:w-1/4 md:w-1/3 w-3/4 mx-auto mt-10'>
                <LoginForm />
            </div>
        </div>
    )
}