// Base Imports
import React from "react";

const RelatedBlogsCard = ({ title, href, imgSrc }: any) => {
  return (
    <div className="flex h-28 text-medium p-2 items-center border border-themeBlack overflow-hidden mb-1 bg-themeRed hover:scale-105">
      <a className="text-themeGrey /hover:text-themeRed visited:bg-gray-400 hover:underline" href={href}>
        {title}
      </a>
      <img src={imgSrc} alt="img"  className="p-2 w-24"/>
    </div>
  );
};

export default RelatedBlogsCard;
