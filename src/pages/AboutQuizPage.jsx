import React from 'react'
import Header from "../components/Header";
import {Container, Skeleton, Typography, Button, Stack} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {useQuizRequest} from "../hooks/useQuizRequest";


export default function AboutQuizPage() {
    const params = useParams()
    const quiz = useQuizRequest(params.quizId)

    const handleStartButton = () => {
    }

    if (!quiz) {
        return (
            <>
                <Header/>
                <Container>
                    <Skeleton/>
                </Container>
            </>
        )
    }
    const questionsAmount = quiz.quiz.length
    const quizStartUrl = `/start/${params.quizId}`

    return (
        <>
            <Header/>
            <Container>
                <Stack sx={{marginY: 4}}>
                    <Typography variant='h4'>{quiz.name}</Typography>
                    <Typography variant='body1'>{quiz.description}</Typography>
                    <Typography variant='p'>Количество вопросов: {questionsAmount}</Typography>
                    <Link to={quizStartUrl}>
                        <Button onClick={handleStartButton} sx={{maxWidth: 16}} variant='contained'>Начать</Button>
                    </Link>
                </Stack>
            </Container>
        </>
    )
}