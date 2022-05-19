import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import AnswerOption from './AnswerOption';


export default function QuestionCard(props) {
    const questionId = uuidv4()

    return (
        <div className='flex flex-col w-full bg-white py-4 px-6 rounded-lg border border-gray-300'>
            {props.imageUrl ? <img className='w-fit rounded-md px-2 py-3' src={props.imageUrl} alt='task'/> : null}
            <h3 className='lg:text-lg text-xl font-medium my-1'>{props.question}</h3>
            <div className='flex flex-col'>
                {props.answers.map(answer => (
                    <AnswerOption name={questionId} label={answer} />
                ))}
            </div>
        </div>
    )
}