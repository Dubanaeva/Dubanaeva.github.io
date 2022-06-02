import React, {useEffect} from "react";
import Header from "../components/Header";
import NewQuizzes from "../components/NewQuizzes";
import NewsFeed from "../components/NewsFeed";
import {Container} from "@mui/material";


export default function IndexPage() {
    return (
        <>
            <Header/>
            <Container>
                <NewQuizzes/>
                <NewsFeed/>
            </Container>
        </>
    )
} 