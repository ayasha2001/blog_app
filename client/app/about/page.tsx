// Base Imports
import React from "react";

// Component Imports
import { ABOUT_CONFIGS } from "../components/about/config";
import CheckedListItems from "../components/about/CheckedListItems";

const About = () => {
  return (
    <div className="grid sm:grid-cols-2 w-[100vw]">
      <div className="p-6 sm:p-20 mt-10 sm:mt-0">
        <h2 className="text-4xl font-semibold mb-10 text-center">
          Hi, I’m James Clear.
        </h2>
        <p className="flex-wrap text-xl text-center">
          I’ve been writing at JamesClear.com about habits, decision making, and
          continuous improvement since 2012. I’m the author of the #1 New York
          Times bestseller, Atomic Habits, which has sold more than 20 million
          copies worldwide and has been translated into more than 60 languages.
          I’m also known for my popular 3-2-1 newsletter, which is sent out each
          week to more than 3 million subscribers. Click here to learn more and
          sign up.
        </p>
        <p className="mt-5 text-xl text-center">
          You can find me elsewhere on Twitter and Instagram.
        </p>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:justify-center px-4">
        {ABOUT_CONFIGS?.map((item: any) => {
          return <CheckedListItems title={item?.title} />;
        })}
      </div>
    </div>
  );
};

export default About;
