import React from 'react'
import { Link } from 'react-router-dom'


export default function LoginForm() {
    return (
        <div className='px-6 py-8 bg-white rounded-md w-full drop-shadow-sm'>
            <div className='flex justify-center'>
                <h3 className='text-2xl text-black font-bold'>Авторизация</h3>
            </div>
            <div className='flex flex-col my-2'>
                <label className='font-semibold' htmlFor="email">Email</label>
                <input className='px-3 py-2 rounded-md border border-slate-400 focus:border-slate-600 outline-none' id='email' type='email' />
            </div>
            <div className='flex flex-col my-2'>
                <label className='font-semibold' htmlFor="password">Пароль</label>
                <input className='px-3 py-2 rounded-md border border-slate-400 focus:border-slate-600 outline-none' id='password' type='password' />
            </div>
            <div className='my-2'>
                <span className='mr-1'>Забыли пароль?</span>
                <Link className='underline text-sky-700' to='/reset-password'>Сбросить</Link>
            </div>
            <button className='px-3 py-2 my-1 bg-emerald-400 hover:bg-emerald-500 text-white font-semibold w-full rounded-md'>Войти</button>
            <Link to='/register'>
                <button className='px-3 py-2 my-1 bg-sky-500 hover:bg-sky-600 text-white font-semibold w-full rounded-md'>Регистрация</button>
            </Link>
        </div>
    )
}