// Base Imports
import React from "react";

type IDropdownProp = {
  items: any;
};

const Dropdown = ({ items }: IDropdownProp) => {
  return (
      <div className='absolute top-16 h-max bg-themeRed uppercase text-white z-[9999]'>
        {items?.map((dropdownItem: any, index: any) => (
          <a
            key={index}
            href={dropdownItem?.href}
            className="block px-6 py-4 hover:bg-themePink hover:shadow-md"
          >
            {dropdownItem?.title}
          </a>
        ))}
      </div>
  );
};

export default Dropdown;
