"use client";

import { CRICKET_INTRO_TITLE } from "@/frameworks/utils/textVariables";
// Base Imports
import React from "react";

//Other Imports


const Landing = () => {
  return (
    <div className="flex flex-col h-[140vh] relative justify-center">
        <div className="flex h-[70vh] w-full border-b theme-grey justify-center items-center">
            <h1 className="flex-wrap w-3/5 text-6xl text-center"> {CRICKET_INTRO_TITLE} </h1>
        </div>
        <div className="h-[70vh] border-b">
            jfijfej
        </div>
      <img
        src='/kkr-logo.png'
        alt="players image"
        className="h-72 w-auto absolute right-1/2 left-1/2 z-10 -translate-x-1/2"
      />
    </div>
  );
};

export default Landing;
