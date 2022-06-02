import React from 'react'
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {useQuizRequest} from "../hooks/useQuizRequest";
import {Container, Typography, Button} from "@mui/material";
import QuizAnswers from "../components/quizzes/QuizAnswers";


export default function QuizPage() {
    const params = useParams()
    const quiz = useQuizRequest(params.quizId)
    if (!quiz) {
        return (
            <>
                <Header/>
                <Container>
                    <Typography>
                        Загрузка...
                    </Typography>
                </Container>
            </>
        )
    }
    return (
        <>
            <Header/>
            <Container sx={{paddingY: 6}} maxWidth='md'>
                {quiz.quiz.map(item => (
                    <QuizAnswers question={item.question} answer1={item.answer1} answer2={item.answer2}
                                 answer3={item.answer3} answer4={item.answer4} correctAnswer={item.correctAnswer}/>
                ))}
                <Button variant='contained'>Завершить тест</Button>
            </Container>
        </>
    )
}