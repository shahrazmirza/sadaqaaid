import React from 'react'
import Navbar from './Components/Navbar'
import Scroll_to_top from './Components/Scroll_to_top';
import Whatsapp from './Components/Whatsapp'
import Hero from './Components/Hero'
import Causes from './Components/Causes'
import UrgentCauses from './Components/UrgentCauses';
import UrgentAppeals from './Components/UrgentAppeals';
import Homeless from './Components/Homeless';
import Footer from '../app/Components/Footer';

export default async function Home() {
  return (
    <div className='w-screen overflow-hidden'>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <Hero />
      <Causes />
      <UrgentCauses />
      <UrgentAppeals />
      <Homeless />
      <Footer />
    </div>
  )
}
