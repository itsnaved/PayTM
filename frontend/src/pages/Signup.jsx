import { useState } from "react"
import { BottomHeading } from "../components/BottomHeading"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import axios from "axios";
import { Navigate } from "react-router-dom"

export const Signup=()=>{
    const [firstName, setFirstname]= useState("");
    const [lastName, setLastname]= useState("");
    const [password, setPassword]= useState("");
    const [email, setEmail]= useState("");

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center">
        <div className="bg-white rounded w-80 ">
            <Heading label={"Sign up"}/>
            <SubHeading label={'Enter your information to create an account'} />
            <InputBox label={'First Name'} placeholder={'John'} onChange={(e)=>{setFirstname(e.target.value)}}/>
            <InputBox label={'Last Name'} placeholder={'Doe'} onChange={(e)=>{setLastname(e.target.value)}} />
            <InputBox label={'Email'} placeholder={'sample@gmail.com'} onChange={(e)=>{setEmail(e.target.value)}} />
            <InputBox label={'Password'} placeholder={'123456'} onChange={(e)=>{setPassword(e.target.value)}} />
            <Button onClick={async()=>{
                const response= await axios.post("http://localhost:3000/api/v1/signup", {
                    username,
                    password,
                    firstName,
                    lastName
                });
                localStorage.setItem("token", response.data.token)
                Navigate("/dashboard")
            }} 
            label={"Sign up"} />
            <BottomHeading label={"Already have an account?"} buttonText={'Sign in'} to={"/signin"}/>
        </div>
        </div>

    </div>
}