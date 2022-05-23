import React from "react";
import { Link } from "react-router-dom";
import { truncateText } from "../utils/textUtils";


export default function News(props) {
    return (
        <Link to={`/news/${props.id}`}>
            <div className="bg-white border-t py-2 border-neutral-200 flex items-center gap-x-2">
                <div className="">
                    <img className="rounded-md w-12" src={props.thumbnailUrl} alt='news thumbnail' />
                </div>
                <div className="w-3/4 flex flex-col justify-between">
                    <p className="text-sm font-semibold">{props.title}</p>
                    <p className="text-xs text-neutral-600">{truncateText(props.content, 12)}</p>
                </div>
            </div>
        </Link>
    )
}