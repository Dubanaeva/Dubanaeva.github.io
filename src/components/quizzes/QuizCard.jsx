import React from "react";


export default function QuizCard(props) {
    return (
        <div className="bg-white drop-shadow rounded-lg md:hover:scale-105 transition-all cursor-pointer">
            <img className="rounded-t-lg w-full" src={props.imageUrl} alt='quiz cover' />
            <div className="px-4 py-2">
                <h3 className="text-lg font-semibold">{props.title}</h3>
            </div>
        </div>
    )
}