// Base Imports
import React from 'react'

// Component Imports
import BlogsCard from '../components/blogs/BlogsCard';

const arr = ["abc", "bcd", "cde", "efg", "abc", "bcd", "sad"];

const Blogs = () => {
  return (
    <div className='p-10'>
      <h1 className='uppercase text-3xl my-10'>Browse through the blogs</h1>
      <div className='flex flex-wrap'>
        {
          arr?.map((value:any,idx:number)=>{
            return <BlogsCard key={idx}/>
          })
        }
      </div>
    </div>
  )
}

export default Blogs