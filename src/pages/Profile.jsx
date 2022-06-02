import React from "react";
import PersonalInfoPreview from "../components/PersonalInfoPreview";
import Header from '../components/Header'
import {useGetMe} from "../hooks/useGetMe";



export default function Profile() {
    const user = useGetMe()
    return (
        <>
            <Header />
            <div className="w-1/2 mx-auto mt-6">
                <PersonalInfoPreview/>
                
            </div>
        </>
    )
}