import ContactForm from '@/Components/ContactForm/ContactForm'
import Locations from '@/Components/Locations/Locations'
import React from 'react'

const page = () => {
  return (
    <div style={{backgroundColor: '#1a1a1a'}}>
      <ContactForm/>
      <Locations/>
    </div>
  )
}

export default page