import { Container } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Causes = () => {
  return (
    <Container>
      <div className='md:-mt-10 md:flex hidden md:visible'>
        <Link href='/' className='relative'>
          <Image
            src='/assets/livelihoodgray.jpg'
            alt='Livelihood Image'
            width='1000'
            height='1000'
          />
          <div className='absolute inset-0 z-10 flex flex-col justify-end items-start px-5 py-8 drop-shadow-2xl text-white'>
            <h1 className='pb-1'>Livelihood</h1>
            <p className='font-heading1 text-3xl'>Emergency Relief</p>
          </div>
          <div className='absolute inset-0 overflow-hidden bg-red-500 opacity-50'></div>
        </Link>
        <Link href='/' className='relative'>
          <Image
            src='/assets/healthgray.jpg'
            alt='Health Image'
            width='1000'
            height='1000'
          />
          <div className='absolute inset-0 z-10 flex flex-col justify-end items-start px-5 py-8 drop-shadow-2xl text-white'>
            <h1 className='pb-1'>Health</h1>
            <p className='font-heading1 text-3xl'>Healthcare Support</p>
          </div>
          <div className='absolute inset-0 overflow-hidden bg-yellow-500 opacity-50'></div>
        </Link>
        <Link href='/' className='relative'>
          <Image
            src='/assets/educationgray.jpg'
            alt='Education Image'
            width='1000'
            height='1000'
          />
          <div className='absolute inset-0 z-10 flex flex-col justify-end items-start px-5 py-8 drop-shadow-2xl text-white'>
            <h1 className='pb-1'>Education</h1>
            <p className='font-heading1 text-3xl'>Educational Support</p>
          </div>
          <div className='absolute inset-0 overflow-hidden bg-green-500 opacity-50'></div>
        </Link>
      </div>
    </Container>
  )
}

export default Causes
