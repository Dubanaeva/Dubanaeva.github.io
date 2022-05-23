import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="w-full px-4 h-14 bg-white flex justify-between items-center drop-shadow-md sticky top-0">
            <Link className="font-semibold text-lg" to='/'>Главная</Link>
            <Link className="font-semibold text-lg" to='/profile'>
                <div className="px-3 py-2 bg-emerald-400 text-white rounded-md">
                    Профиль
                </div>
            </Link>
        </div>
    )
}