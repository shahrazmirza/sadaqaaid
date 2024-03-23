import { Container } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const Homeless = () => {
  return (
    <div>
      <Container>
        <div className='flex justify-between items-center px-10 gap-5 bg-gray-100 my-10 mb-20'>
          <h1 className='font-heading1 text-md py-14 md:text-3xl'>Helping the Homeless, Hungry, and Hurting Children</h1>
          <Link href="/" className="px-5 md:text-lg font-medium leading-none text-center text-sm border-green-700 border-solid border rounded text-white hover:text-green-700 h-10 hover:bg-white bg-green-700 flex items-center justify-center w-fit">Donate Now</Link>
        </div>

      </Container>
    </div>
  )
}

export default Homeless
