// Base Imports
import React from "react";

type IDropdownProp = {
  items: any;
};

const Dropdown = ({ items }: IDropdownProp) => {
  return (
      <div className='absolute top-16 h-max theme-blue uppercase text-white z-999'>
        {items?.map((dropdownItem: any, index: any) => (
          <a
            key={index}
            href={dropdownItem.href}
            className="block px-6 py-4 theme-light-blue hover:shadow-md"
          >
            {dropdownItem.title}
          </a>
        ))}
      </div>
  );
};

export default Dropdown;
