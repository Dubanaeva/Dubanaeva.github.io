import React from 'react'
import Header from '../components/Header'
import RegisterForm from '../components/RegisterForm'


export default function LoginPage() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='w-1/5 mx-auto mt-10'>
                <RegisterForm />
            </div>
        </div>
    )
}