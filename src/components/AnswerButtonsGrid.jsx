import React from "react";
import AnswerButton from "./AnswerButton";

function enumerate(iterable, start = 0) {
    return iterable.map(elem => [start++, elem])
}


export default function AnswerButtonsGrid(props) {
    return (
        <div className="grid gap-4 grid-cols-2 w-full">
            {enumerate(props.buttons).map(button => <AnswerButton data={button[1]} index={button[0]}/>)}
        </div>
    )
}