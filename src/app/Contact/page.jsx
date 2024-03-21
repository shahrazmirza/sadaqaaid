import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import { Container } from '@radix-ui/themes'
import ContactForm from '../Components/ContactForm'
import Whatsapp from '../Components/Whatsapp'

const Contact = () => {
  return (
    <div className='mh-screen'>
      <Navbar />
      <Whatsapp />
      <div className='flex justify-center items-center relative'>
        <div className='relative z-10'>
          <p className='text-4xl font-bold capitalize pt-10 tracking-wider text-gray-800 leading-loose animate__animated animate__zoomIn animate__delay-1s'>
            contact us
          </p>
        </div>
      </div>

      <div>
        <div className='py-5'>
          <div className='pt-5 pb-5'>
            <Container>
              <ContactForm />
            </Container>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
