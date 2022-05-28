import React from 'react'
import Header from '../components/Header'
import QuizCard from '../components/quizzes/QuizCard'


export default function QuizzesPage() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='mt-12 mx-auto md:w-3/5 md:px-0 px-6 w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-4 gap-y-8'>
                <QuizCard imageUrl="https://picsum.photos/300/200" title="hello"/>
                <QuizCard imageUrl="https://picsum.photos/300/200" title="hello"/>
                <QuizCard imageUrl="https://picsum.photos/300/200" title="hello"/>
                <QuizCard imageUrl="https://picsum.photos/300/200" title="hello"/>
                <QuizCard imageUrl="https://picsum.photos/300/200" title="hello"/>
                <QuizCard imageUrl="https://picsum.photos/300/200" title="hello"/>
                <QuizCard imageUrl="https://picsum.photos/300/200" title="hello"/>
            </div>
        </div>
    )
}