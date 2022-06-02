import React from "react";
import {Paper, Typography} from "@mui/material";
import {Link} from 'react-router-dom'

export default function QuizCard(props) {
    const url = `/quizzes/${props.quizId}`
    return (
        <Link to={url}>
            <Paper elevation={2}>
                <img src={props.imageUrl} alt='quiz cover'/>
                <Typography sx={{paddingX: 2, paddingY: 1}} variant='h6'>{props.title}</Typography>
            </Paper>
        </Link>
    )
}