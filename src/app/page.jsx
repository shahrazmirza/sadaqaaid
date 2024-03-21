import React from 'react'
import Navbar from './Components/Navbar'
import Scroll_to_top from './Components/Scroll_to_top';
import Whatsapp from './Components/Whatsapp'
import Hero from './Components/Hero'

export default async function Home() {
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <Hero />
    </div>
  )
}
