import React from "react";
import Header from "../components/Header";
import NewQuizzes from "../components/NewQuizzes";
import NewsFeed from "../components/NewsFeed";


export default function IndexPage() {
    return (
        <div className="w-full">
            <Header />
            <div className="w-1/3 mx-auto">
                <div className="flex gap-y-4 flex-col justify-center mt-6">
                    <NewQuizzes />
                    <NewsFeed />
                </div>
            </div>
        </div>
    )
} 