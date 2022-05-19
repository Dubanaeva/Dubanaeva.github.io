import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";

const buttonColors = [
    {
        name: 'bg-rose',
        value: 600,
    },
    {
        name: 'bg-blue',
        value: 600,
    },
    {
        name: 'bg-amber',
        value: 500,
    },
    {
        name: 'bg-green',
        value: 500,
    }
]


function getButtonColors(buttonIndex) {
    const color = buttonColors[buttonIndex]
    return {
        initialColor: `${color.name}-${color.value}`,
        hoverColor: `${color.name}-${color.value + 100}`
    }
}


export default function AnswerButton(props) {
    const dispatch = useDispatch()

    function handleClick() {
        if (props.data.isCorrect) {
            dispatch(increment())
        }
    }
    const { initialColor, hoverColor } = getButtonColors(props.index)
    const classNames = `${initialColor} hover:${hoverColor} w-full h-16 border rounded-xl 
    transition ease-in-out hover:-translate-y-1 hover:scale-101 duration-300 text-3xl text-white font-bold`
    return (
        <button className={classNames} onClick={handleClick}>
            {props.data.name}
        </ button>
    )
}