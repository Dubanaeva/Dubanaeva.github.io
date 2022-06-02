import React from "react";
import QuizPreview from "./QuizPreview";
import { RiEmotionSadLine } from 'react-icons/ri'
import { getNewQuizzes } from "../services/QuizzesService";


export default function NewQuizzes() {
    const newQuizzes = getNewQuizzes()
    return (
        <div className="px-4 py-3 bg-white drop-shadow rounded-md">
            <h3 className="pb-1 px-2 font-semibold inline text-xl border-b-2 border-sky-500">Новые квизы</h3>
            {newQuizzes.length ? null : (
                <h3 className="text-lg mt-4">Пока не добавлено ни одного квиза <RiEmotionSadLine className="inline" /></h3>
            )}
            {newQuizzes.map(quiz => (
                <div className="my-4">
                    <QuizPreview thumbnailUrl={quiz.thumbnail_url} title={quiz.title} id={quiz.id} likes={quiz.likes} questionsAmount={quiz.questions_amount} />
                </div>
            ))}
        </div>
    )
}