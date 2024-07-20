'use client'

// Base Imports
import React, { useState } from 'react'

// Component Imports
import Dropdown from '../common/Dropdown';

// Other Imports
import { ACCOUNT_ITEMS } from './config';

const AccountItems = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const AccountItems = ACCOUNT_ITEMS;
    const onClick = () => {
        setIsOpenDropdown(!isOpenDropdown)
    }

  return <div onClick={onClick} className='relative h-full flex flex-row'>
      <span className='flex items-center h-full text-white cursor-pointer'> AccountItems</span> 
      { isOpenDropdown ? <Dropdown items={AccountItems} /> : null }
    </div>
}

export default AccountItems