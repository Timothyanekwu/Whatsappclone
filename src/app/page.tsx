"use client";

import { useContext } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import React from "react";
import Link from "next/link";
import { MdArrowOutward, MdArrowForwardIos  } from "react-icons/md";
import { LuLockKeyhole, LuDownload } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";


const page = () => {
  const { fontSize, colors }: any = useContext(ThemeContext);

  return (
    <div className="w-full h-screen flex flex-col items-center p-4 bg-[#fff5e9]">
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
        {/* steps to login to whatsapp web */}
        <div
          style={{ borderColor: colors.primary }}
          className="w-full px-10 py-16 flex items-center border-[1.5px] justify-between bg-white rounded-2xl"
        >
          <div className="flex flex-col gap-7">
            <p style={{ fontSize: fontSize.h4 }} className="font-medium">
              Steps to log in
            </p>

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
                <p>Scan the QR code to confirm</p>
              </span>
            </span>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                style={{ accentColor: colors.secondary }}
              />
              Stay logged in on this browser
            </label>
          </div>
          {/* QR code scanning */}
          <div className="flex flex-col items-center">
            <img
              src={"/images/qrcode.png"}
              alt="QR Code"
              className="w-[250px] h-[250px] mb-8"
            />
            <Link
              href="/userauth/signin"
              style={{ borderColor: colors.secondary }}
              className="border-b-2 font-medium flex items-center gap-2"
            >
              <p>Login with phone number</p><MdArrowForwardIos />
            </Link>
          </div>
        </div>

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
