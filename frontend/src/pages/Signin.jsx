import { useState } from "react"
import { BottomHeading } from "../components/BottomHeading"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"

export const Signin=()=>{
    const [firstName, setFirstname]= useState("");
    const [lastName, setLastname]= useState("");
    const [password, setPassword]= useState("");
    const [email, setEmail]= useState("");

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center">
        <div className="bg-white rounded w-80 ">
            <Heading label={"Sign in"}/>
            <InputBox label={'Email'} placeholder={'sample@gmail.com'} onChange={(e)=>{setEmail(e.target.value)}} />
            <InputBox label={'Password'} placeholder={'123456'} onChange={(e)=>{setPassword(e.target.value)}} />
            <div className="pt-4">
            <Button label={"Sign in"} />
            </div>
            <BottomHeading label={"Don't have an account?"} buttonText={'Sign up'} to={"/signup"}/>
        </div>
        </div>

    </div>
}