'use client'

// Base Imports
import React, { useState } from 'react'

// Component Imports
import Dropdown from '../common/Dropdown'

// Other Imports
import { NAV_ITEMS } from './config'

const NavItems = () => {
  const [onMouseToggle, setOnMouseToggle] = useState<any>(null)

  const onMouseEnter = (idx:any) => {
    setOnMouseToggle(idx)
  }

  const onMouseLeave = () => {
    setOnMouseToggle(null)
  }

  return (
    <div className="flex col-span-3 justify-center h-full">
      {NAV_ITEMS?.map((item: any, idx: number) => {
        return <div key={idx} onMouseEnter={() => onMouseEnter(idx)} onMouseLeave={onMouseLeave}>
              <a href={item?.href} className='flex text-white text-xl px-6 items-center uppercase mirror-effect hover:cursor-pointer h-full'>{item?.title}{
                item?.children?.length  > 0 ? '^' : null
              }</a>
              {
                (item?.type === 'dropdown' && onMouseToggle === idx ) ? 
                  <Dropdown items={item?.children}/> 
                : null
              }
            </div>
      })}
    </div>
  )
}

export default NavItems