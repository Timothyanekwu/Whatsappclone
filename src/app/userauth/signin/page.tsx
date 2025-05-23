"use client";

import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { LuLockKeyhole, LuDownload } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import SigninCard from "../../components/SigninCard";
import { APIcontext } from "../../Contexts/APIcontext";
import OtpCard from "../../components/OtpCard";


const page = () => {
  const { fontSize, colors }: any = useContext(ThemeContext);
  const { showOtpCard }: any = useContext(APIcontext) 

  return (
    <div className="w-full h-full md:h-screen flex flex-col items-center p-4 bg-[#fff5e9]">
      <div
        style={{ fontSize: fontSize.h5, color: colors.secondary }}
        className="w-full p-4 font-bold mb-5 flex items-center gap-2"
      >
        <BsWhatsapp/>Whatsapp
      </div>

      <div className="w-full md:max-w-2/4 flex-col gap-4 flex items-center ">
        {/* //download whatsapp for windows */}

        <div
          style={{ borderColor: colors.primary }}
          className="w-full h-auto px-10 py-6 gap-6 flex flex-col md:flex-row md:items-center justify-start border-[1.5px] md:justify-between bg-white rounded-2xl"
        >
          <img src={'/images/Devices-bro.png'} className="hidden md:flex md:w-[100px] h-auto"/>
          <span className="flex-col">
            <p style={{ fontSize: fontSize.h6 }} className="font-medium">
              Download WhatsApp for Windows
            </p>
            <p style={{ fontSize: fontSize.p }} className="font-normal">
              Make calls, share your screen and get faster experience when you
              download the Windows app.
            </p>
          </span>

          <button
            style={{
              borderColor: colors.primary,
              backgroundColor: colors.secondary,
            }}
            className="px-6 py-2 rounded-full border-[2px] w-[150px] h-[50px] flex items-center gap-2"
          >
            <p>Download</p> <LuDownload/>
          </button>
        </div>

            {/* sigin card component */}

            { showOtpCard ? 
              <SigninCard/> : <OtpCard/>}
 

        {/* **************************************** */}
        <div className="mt-10 mx-auto font-medium flex items-center gap-1">
         <p> Don't have a WhatsApp account?</p>
          <Link
            href="/"
            style={{ borderColor: colors.secondary }}
            className="border-b-2 flex "
          >
            Get started <MdArrowOutward />
          </Link>
        </div>
        <p
          style={{ fontSize: fontSize.small }}
          className="font-normal text-gray-500 flex items-center gap-2"
        >
          
        <LuLockKeyhole />  Your personal messeages are end-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default page;
