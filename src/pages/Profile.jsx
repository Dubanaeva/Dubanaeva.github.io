import React from "react";
import PersonalInfoPreview from "../components/PersonalInfoPreview";
import Header from '../components/Header'
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";


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