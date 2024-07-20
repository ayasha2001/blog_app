// Base Imports
import React, { useState } from "react";

// Other Imports
import { XMarkIcon } from "@heroicons/react/20/solid";

const KeywordInput = ({ placeholder, value = [], onChange }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && inputValue.trim()) {
      event.preventDefault();
      onChange([...value, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    const newKeywords = value.filter((_: any, i: number) => i !== index);
    onChange(newKeywords);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-themeRed"
      />
      <div className="flex flex-wrap mt-2">
        {value?.map((keyword: string, index: number) => (
          <span
            key={index}
            className="bg-themePink text-white rounded-sm px-2 py-1 mr-2 mb-2 flex items-center"
          >
            {keyword}
            <XMarkIcon
              className="h-5 w-5 ml-2 cursor-pointer"
              onClick={() => handleRemoveKeyword(index)}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordInput;
