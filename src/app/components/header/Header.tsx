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

  console.log(isMobile, ':: isMobile')

  return (
    <div className="grid grid-cols-5 items-center mx-auto w-full sm:w-[90vw] h-16 theme-blue text-center">
      <div className="text-white">logo</div>
      { !isMobile ? <NavItems /> : <NavSidebar />}
      {/* <AccountItems />  */}
    </div>
  );
};

export default Header;