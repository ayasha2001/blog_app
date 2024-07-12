'use client'

// Base Imports
import React from 'react'

// Component Imports
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import BlogsCard from './BlogsCard'

const BlogsCarousel = () => {
  const arr = ["abc", "bcd", "cde", "efg", "abc", "bcd", "sad"]

  return (
    <div className="sm:hidden w-full">
      <Swiper spaceBetween={10} slidesPerView={1}>
        {arr.map((value, index) => (
          <SwiperSlide key={index}>
            <BlogsCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BlogsCarousel
