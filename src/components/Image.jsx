import React from "react";


export default function Image(props) {
    return (
        <div className="w-1/3 h-64">
            <img src={props.imageUrl} alt="pic" />
        </div>
    )
}