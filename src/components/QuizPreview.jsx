import React from "react";
import {Link} from "react-router-dom";


export default function QuizPreview(props) {
    return (
        <Link to={`/quiz/${props.id}`}>
            <div className="bg-white drop-shadow-sm border border-zinc-200 flex rounded-md">
                <div className="w-1/4">
                    <img className="rounded-l-md w-full" width={100} height={100} src={props.thumbnailUrl}
                         alt='quiz thumbnail'/>
                </div>
                <div className="w-3/4 flex flex-col justify-between">
                    <div className="text-lg font-bold px-3 py-2">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="flex justify-between bg-zinc-100 px-3 py-1">
                        <span>Кол-во вопросов: {props.questionsAmount}</span>
                        <span className="font-semibold">Рейтинг: {props.likes}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}