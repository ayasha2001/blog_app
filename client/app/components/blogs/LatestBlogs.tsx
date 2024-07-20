// Base Imports
import React from "react";

// Component Imports
import BlogsCard from "./BlogsCard";
import BlogsCarousel from "./BlogsCarousel";

const arr = ["abc", "bcd", "cde", "efg", "abc", "bcd", "sad"];

const Blogs = () => {
  return (
    <div className="relative bg-themeBlack flex flex-col sm:flex-row h-[80vh] gap-x-4 p-4 items-center">
      <div className="w-full sm:w-[20vw] h-80 text-white neon-box rounded-md p-4 flex flex-col item-end">
        <p className="text-6xl">Popular this Month</p>
        <p className="text-lg">List of Blogs</p>
      </div>
      <div className="hidden sm:flex w-full sm:w-[80vw] h-96 relative overflow-x-auto items-center border-r-4 border-r-themeRed scrollbar-thin scrollbar-thumb-themeRed /scrollbar-track-gray-700">
        {arr?.map((value: any, index: any) => (
          <div
            key={index}
            className={`h-80 pl-10 absolute transform transition-transform duration-500 hover:skew-y-2 hover:-translate-x-8 hover:-translate-y-0.5`}
            style={{ left: `${index * 180}px` }}
          >
            <BlogsCard />
          </div>
        ))}
      </div>
      <BlogsCarousel />
    </div>
  );
};

export default Blogs;
