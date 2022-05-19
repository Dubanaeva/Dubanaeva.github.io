import React from 'react'


export default function QuestionBar(props) {
    return (
        <div className='w-full h-24 bg-gray-100 drop-shadow-lg flex justify-center items-center'>
            <span className='text-4xl'>{props.text}</span>
        </div>
    )
}