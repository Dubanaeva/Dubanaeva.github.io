import React from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function AnswerOption(props) {
    const optionId = uuidv4()
    return (
        <div className='flex flex-1 items-center gap-x-3 lg:text-base text-lg my-1'>
            <input className='block accent-indigo-700 h-5 w-5 hover:cursor-pointer' type="radio" id={optionId} name={props.name} />
            <label className='hover:cursor-pointer' for={optionId}>{props.label}</label>
        </div>
    )
}
