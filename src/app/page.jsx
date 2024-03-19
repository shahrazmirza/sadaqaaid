import React from 'react'
import NavMenu from './Components/NavMenu'
// import Whatsapp from './Components/Whatsapp'
// import Hero from './Components/Hero'

export default async function Home() {
  return (
    <div className='mw-screen mh-screen overflow-hidden'>
      <NavMenu />
      {/* <Whatsapp />
      <Hero /> */}
    </div>
  )
}
