import React from "react";
import { useSelector } from "react-redux";


export default function CorrectAnswersCounter() {
    const count = useSelector(state => state.counter.value)
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">{count}</div>
            <div className="text-2xl font-bold">Пр.ответов</div>
        </div>
    )
}