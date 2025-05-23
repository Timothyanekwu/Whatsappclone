import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import React from "react";
import Link from "next/link";
import {  MdArrowForwardIos  } from "react-icons/md";
import { APIcontext } from "../Contexts/APIcontext";



const SigninCard = () => {

    const { fontSize, colors }: any = useContext(ThemeContext);
    
    const { phoneId, setPhoneId, setShowOtpCard }:any = useContext(APIcontext)

      const handleInputPhone =(e: any)=>{
         if(isNaN(e.target.value)){
        return false;
        }setPhoneId(e.target.value)
      }
    
      const handleSubmitPhone=()=>{
        if(phoneId.length === 10){
           alert(`Your phone No: ${phoneId}`)
           setShowOtpCard((prev: any)=>!prev)
        }else{
          return false;
        }
      }
     

  return (
    <>
               {/* steps to login to whatsapp web */}
        <div
          style={{ borderColor: colors.primary }}
          className="w-full px-10 py-16 flex items-center justify-center border-[1.5px] bg-white rounded-2xl"
        >
          <div className="flex flex-col items-center">
            <p style={{ fontSize: fontSize.h4 }} className="font-medium text-center">
              Enter phone number
            </p>

            <p style={{ fontSize: fontSize.p }} className="text-center">
             Select a country and enter your phone number.
            </p>

            <label style={{borderColor: colors.border}} className="flex mt-5 items-center w-[320px] h-[50px] p-2 rounded-full border-2 bg-white">
            <p style={{fontSize:fontSize.p}} className="font-medium">+234</p>
            <input style={{fontSize:fontSize.p}} maxLength={10} minLength={0} type="text" 
            onChange={handleInputPhone} value={phoneId}
            className="w-full h-full font-medium p-2 bg-transparent border-0 outline-0" required/>
            </label>


            <button type="submit" onClick={handleSubmitPhone} style={{backgroundColor:colors.primary}} 
            className="cursor-pointer px-6 py-3 text-white font-semibold hover:bg-green-500 rounded-full mt-5">
            Next</button>
            
            <Link
              href="/"
              style={{ borderColor: colors.secondary }}
              className="border-b-2 font-medium flex items-center mt-5 gap-2"
            >
              <p>Login with QR code</p><MdArrowForwardIos />
            </Link>

            </div>
          </div>
    </>
  )
}

export default SigninCard