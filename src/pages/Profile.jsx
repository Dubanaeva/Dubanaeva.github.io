import React from "react";
import PersonalInfoPreview from "../components/PersonalInfoPreview";
import Header from '../components/Header'



export default function Profile() {
    return (
        <>
            <Header />
            <div className="w-1/2 mx-auto mt-6">
                <PersonalInfoPreview/>
                
            </div>
        </>
    )
}