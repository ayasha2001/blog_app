// Base Imports
import React from "react";

const BlogsCard = () => {
  return (
    <div className="shadow-custom-heavy cursor-pointer h-80 w-64 p-4 bg-gradient-to-r from-themePink to-themeRed rounded-md relative transition-transform duration-500">
      <span>
        <p>Article</p> <p> on Jun 18, 2024</p>
      </span>
      <h2 className="font-bold text-md text-themeGrey">CSS Length Units</h2>
      <p>VIEW TRANSITIONS</p>
    </div>
  );
};

export default BlogsCard;
