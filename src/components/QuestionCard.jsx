import React from "react";
import AnswerButtonsGrid from "./AnswerButtonsGrid";
import QuestionBar from "./QuestionBar";
import Image from "./Image";
import CorrectAnswersCounter from './CorrectAnswersCounter'
import Countdown from 'react-countdown';


const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        return <h1>END</h1>;
    } else {
        return <span>{seconds + 60 * minutes + 3600 * hours}</span>;
    }
};


export default function QuestionCard(props) {
    return (
        <div className="relative w-full h-full p-6 flex flex-col bg-white items-center justify-between border border-gray-300">
            <QuestionBar text={props.question} />
            <div className="flex justify-between items-center">
                <div className="h-16 w-16 text-white font-bold text-lg rounded-full flex justify-center items-center bg-violet-700">
                    <Countdown date={props.countdownUntil} renderer={renderer} />
                </div>
                <Image imageUrl={props.imageUrl} />
                <CorrectAnswersCounter />
            </div>
            <AnswerButtonsGrid buttons={props.buttons} />
        </div>
    )
} 