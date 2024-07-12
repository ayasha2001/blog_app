"use client";

// Base Imports
import React from "react";

// Component Imports
import Keywords from "./keywords/Keywords";
import Blogs from "../blogs/LatestBlogs";

// Other Imports
import { CRICKET_INTRO_TITLE } from "@/frameworks/utils/textVariables";

const Landing = () => {
  return (
    <>
    {/* Section 1 */}
      <div className="flex flex-col h-[140vh] relative justify-center">
          <div className="flex h-[70vh] w-full border-b theme-grey justify-center items-center">
              <h1 className="flex-wrap w-3/5 text-6xl text-center font-semibold tracking-wide"> {CRICKET_INTRO_TITLE} </h1>
          </div>
          <div className="flex h-[70vh] border-b items-center justify-center text-3xl font-normal">
              Welcome to the Cricket Family. Here we can discuss, celebrate and share opinion around cricket.
          </div>
        <img
          src='/kkr-logo.png'
          alt="players image"
          className="h-72 w-auto absolute right-1/2 left-1/2 z-10 -translate-x-1/2"
        />
      </div>
      {/* Section 2 */}
      <Keywords />
      {/* Section 3 */}
      <Blogs />
      {/* Extra Setion */}
      <div className='h-[70vh] w-full flex items-center justify-center bg-gradient-to-r from-bg-gray-100 to-bg-gray-50' >
        <h3 className="text-[10rem] uppercase hover:text-gray-100 hover:drop-shadow-sm text-gray-50 cursor-default text-gradient-to-r from-text-gray-50 to-text-white">Cricket</h3>
      </div>
    </>
  );
};

export default Landing;
