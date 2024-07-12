// Base Imports
import React from "react";

// Component Imports
import { CheckCircleIcon } from "@heroicons/react/16/solid";

const CheckedListItems = ({ title }: any) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="h-5 w-5 text-slate-900 m-2" />
      <p className="text-xl">{title}</p>
    </div>
  );
};

export default CheckedListItems;
