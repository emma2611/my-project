'use client'
import HeroSection from '@/components/HeroSection'
import FeaturedCourses from '@/components/FeaturedCourses'

import React from 'react'
import WhyChooseUs from '@/components/WhyChooseUs'
import FeaturedWebinars from '@/components/FeaturedWebinars'


const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07]'>
      <HeroSection/>
      <WhyChooseUs/>
      <FeaturedCourses/>
      <FeaturedWebinars/>
      

      </main>
  )
}

export default page