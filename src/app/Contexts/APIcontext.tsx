'use client'

import { createContext, useState } from "react"


type ContextsProps={
   PhoneInput:{
    phone: string | number;
   }
} 

const defaultProps: ContextsProps = {
    PhoneInput:{
        phone: "",
    }
}

export const  APIcontext = createContext<ContextsProps>(defaultProps)

export const  ApiCall = ({children}:{children: React.ReactNode})=>{

    const [phoneId, setPhoneId] = useState<string>("")

    const [showOtpCard, setShowOtpCard] = useState<boolean>(true)

    const handleShowOtpCard = ()=>{
        setShowOtpCard(prevState => !prevState)
    }


    const value = {
        PhoneInput:{
            ...defaultProps.PhoneInput,
        },
        phoneId, setPhoneId, showOtpCard, setShowOtpCard, handleShowOtpCard
    };

    return <APIcontext value={value}> {children} </APIcontext>
}