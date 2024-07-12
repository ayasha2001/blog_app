'use client'

// Base Imports
import React from "react";

// Component Imports
import NavItems from "./NavItems";
import AccountItems from "./AccountItems";
import NavSidebar from "./NavSidebar";

// Other Imports
import useDevice from '@/frameworks/utils/useDevice'

const Header = () => {
  const { isMobile } = useDevice();

  return (
    <div className="grid grid-cols-5 items-center mx-auto w-full sm:w-[90vw] h-16 bg-themeRed sm:text-center">
      <div className="text-white col-span-4 mx-6 sm:mx-0 sm:col-span-1">Logo</div>
      { !isMobile ? <NavItems /> : <NavSidebar />}
      { !isMobile ? <AccountItems/> : null}
    </div>
  );
};

export default Header;