import React from "react";
import { Link } from "react-router-dom";



const HEADER_ITEMS = [
    {
        "name": "Главная",
        "url": "/"
    },
    {
        "name": "Тесты",
        "url": "/tests",
    }
]


export default function Header() {
    return (
        <div className="w-full h-14 bg-violet-300 flex justify-center">
            <ul className="flex h-full w-1/2 gap-x-4">
                {HEADER_ITEMS.map(item => (
                    <Link className="block h-full flex items-center" to={item.url}>
                        <li className="font-semibold text-lg">
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}