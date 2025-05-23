
"use client";

import { useEffect, useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import React from "react";
import Link from "next/link";
import { MdArrowOutward, MdArrowForwardIos  } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";
import { APIcontext } from "../Contexts/APIcontext";


const OtpCard = () => {
  const { fontSize, colors }: any = useContext(ThemeContext);
  const { phoneId, handleShowOtpCard }: any = useContext(APIcontext)

  const [otp, setOtp] = useState<any[]>(new Array(5).fill(""))

  const handleOtpChange = (e:any, index:any)=>{
    if(isNaN(e.target.value)) return false;
    setOtp([...otp.map((data, indx)=> indx === index ? e.target.value : data)])

    if(e.target.value && e.target.nextSibling ){
      e.target.nextSibling.focus();
    }
  }

  const handleSendOtpData = ()=>{
    if(otp.join("").length === 5 ){
        return alert(`Your OTP CODE is: ${otp.join("")}`)
    }else{
        return false;
    }
  }

  //Verify OTP count down
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(59)

  //Resend OTP function
  const resendOTP = ()=>{
    setMinutes(1);
    setSeconds(59)
  }

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      if(seconds > 0){
        setSeconds(seconds-1)
      }

      if(seconds === 0){
        if(minutes === 0){
          clearInterval(interval)
        }else{
          setSeconds(59);
          setMinutes(minutes -1);
        }
      }
    },1000)

    return()=>{
      clearInterval(interval);
    }
  },[seconds])


  return (
  
        <>
        {/* steps to login to whatsapp web */}

        <div
          style={{ borderColor: colors.primary }}
          className="w-full px-8 py-10 flex items-center border-[1.5px] 
          bg-white rounded-2xl"
        >
          <div className="flex flex-col gap-7">
            <span className="flex flex-col gap-2">
            <p style={{ fontSize: fontSize.h4 }} className="font-medium">
              Enter code on phone
            </p>
            <p>Linking WhatsApp account +234 { phoneId + " " }
            <button onClick={handleShowOtpCard} style={{color:colors.primary}} className="font-bold hover:underline">
            (edit)</button></p>
            </span>

            {/* OTP Verification section */}

            <div style={{backgroundColor:colors.border}} 
            className="flex w-full items-center justify-center p-4 gap-3 rounded-2xl">
              {
                otp.map((data, i)=>{
                    return <input key={i} value={data} onChange={(e)=>handleOtpChange(e, i)}
                  style={{fontSize: fontSize.h6}} maxLength={1} minLength={1} type="text"  className="w-[50px] h-[50px] rounded-sm
                   text-center border-gray-500 bg-white border-[2px]"/>
                  })
                   
              }

                <button onClick={handleSendOtpData} className="flex bg-black text-white 
                gap-2 px-4 py-2 items-center cursor-pointer font-bold rounded-sm">
                Send <MdArrowForwardIos /></button>
            </div>

            {/* OTP Verification Countdown */}

              <span>
              <p className={`font-bold ${minutes === 0 && seconds <= 20 ? "text-red-500" : "text-black"}`}>Your OTP will be expired in
                {minutes < 10 ? ` 0${minutes}`: minutes}:
                {seconds < 10 ? `0${seconds}`: seconds}
              </p>
             <button onClick={resendOTP} disabled={seconds > 0 || minutes > 0 }
             className={`cursor-pointer font-bold ${minutes > 0 || seconds > 0 ? "text-gray-300" : "text-black"}`}>Resend OTP
             </button>
              </span>

            <span className="flex relative flex-col gap-4 ">
              <span style={{ fontSize: fontSize.h6 }} className="flex gap-3">
                <span
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 bg-white 
                  p-1 relative after:content-[''] after:block after:w-[2px] 
                after:absolute after:h-[20px] after:bg-black after:mx-50 after:translateX-[50%] after:top-7 "
                >
                  1
                </span>
                <p>Open WhatsApp on your phone</p>
              </span>

              <span style={{ fontSize: fontSize.h6 }} className="flex gap-3">
                <span
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 bg-white 
                  p-1 relative after:content-[''] after:block after:w-[2px] 
                after:absolute after:h-[20px] after:bg-black after:mx-50 after:translateX-[50%] after:top-7 "
                >
                  2
                </span>
                <p>On Android tap Menu. On iPhone tap Settings</p>
              </span>

              <span style={{ fontSize: fontSize.h6 }} className="flex gap-3">
                <span
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 bg-white
                   p-1 relative after:content-[''] after:block after:w-[2px] 
                after:absolute after:h-[20px] after:bg-black after:mx-50 after:translateX-[50%] after:top-7 "
                >
                  3
                </span>
                <p>Tap linked devices, then Link device</p>
              </span>

              <span style={{ fontSize: fontSize.h6 }} className="flex gap-3">
                <span className="w-[30px] h-[30px] flex items-center justify-center rounded-full 
                border-2 bg-white p-1 relative">
                  4
                </span>
                <p>tap Link with phone number instead and enter this code on your phone</p>
              </span>
            </span>
            
            <Link
              href="/"
              style={{ borderColor: colors.secondary }}
              className="w-[180px] border-b-2 font-medium flex items-center mt-5 gap-2"
            >
              <p>Login with QR code</p><MdArrowForwardIos />
            </Link>

          </div>
        </div>

        {/* **************************************** */}

    </>
  );
};

export default OtpCard;
