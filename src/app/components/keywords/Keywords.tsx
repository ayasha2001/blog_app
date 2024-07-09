import React from "react";
import { keyWordsConfig } from "./config";

const Keywords = () => {
  return (
    <div className="flex gap-x-14 h-[100vh] w-[100vw] overflow-x-auto">
      {keyWordsConfig?.map((keyword:any,idx:number) => {
        return (
          <div className="flex w-[100vw] items-center" key={idx}>
            <p className="font-bold text-[10rem]"> {keyword?.title} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Keywords;
