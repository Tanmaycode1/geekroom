import CounterCardContainer from '@/Components/CounterCard/CounterCard'
import About from '@/Components/Home/About/About'
import AboutLanding from '@/Components/Home/About/AboutLanding'
import Testimonials from '@/Components/Testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div style={{background: '#1a1a1a'}}>
      <AboutLanding/>
      <About/>
      <CounterCardContainer/>
     {/* <Testimonials/> */}
    </div>
  )
}

export default page