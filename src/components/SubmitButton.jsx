import React from "react";


export default function SubmitButton(props) {
    return (
        <button className="bg-indigo-700 text-white px-4 py-2 rounded-md text-md hover:bg-indigo-600 w-fit">
            {props.name}
        </button>
    )
}