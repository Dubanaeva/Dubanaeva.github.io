import React from 'react'
import { Link } from 'react-router-dom'
import { ImProfile } from 'react-icons/im'

export default function PersonalInfoPreview() {
    return (
        <Link to='/profile/personal-info'>
            <div className='px-6 py-4 border rounded-md border-zinc-200 
            text-white bg-sky-600 drop-shadow-sm flex items-center gap-x-3'>
                <ImProfile />
                <p className='text-xl'>Персональная информация</p>
                
            </div>
        </Link>
    )
}