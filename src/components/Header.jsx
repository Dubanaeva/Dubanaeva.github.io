import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'


export default function Header() {
    const [isSidebarShown, setSidebarShow] = useState(false)
    return (
        <>
            <div className="hidden w-full px-4 h-14 bg-white md:flex justify-between items-center drop-shadow-md sticky top-0">
                <div className="flex gap-x-3">
                    <Link className="font-semibold text-lg" to='/'>Главная</Link>
                    <Link className="font-semibold text-lg" to='/quizzes'>Квизы</Link>
                </div>
                <Link className="font-semibold text-lg" to='/profile'>
                    <div className="px-3 py-2 bg-emerald-400 text-white rounded-md">
                        Профиль
                    </div>
                </Link>
            </div>
            <div className="flex fixed bottom-0 w-full h-14 bg-white md:hidden">

            </div>
        </>
    )
}