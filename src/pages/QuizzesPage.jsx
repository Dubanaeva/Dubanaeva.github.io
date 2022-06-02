import React from 'react'
import Header from '../components/Header'
import QuizCard from '../components/quizzes/QuizCard'
import {Container, Grid, Skeleton, Paper} from "@mui/material";
import {useQuizzesRequest} from "../hooks/useQuizzesRequest";


export default function QuizzesPage() {
    const quizzes = useQuizzesRequest()
    if (!quizzes) {
        return (
            <>
                <Header/>
                <Container>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                </Container>
            </>
        )
    }
    return (
        <>
            <Header/>
            <Container sx={{paddingY: 4, paddingX: {xs: 3, md: 0}}}>
                <Grid container gap={2} justifyContent='space-between'>
                    {quizzes.map(quiz => (
                        <Grid item md={3} xs={12}>
                            <QuizCard quizId={quiz.id} imageUrl={quiz.thumbnail_url} title={quiz.name}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}