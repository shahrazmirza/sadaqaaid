'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {Chip} from "@nextui-org/react";
import { Container } from '@radix-ui/themes';
import data from '../Data/UrgentAppeals.json';

const UrgentAppeals = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
      console.log('', data);

      if (data && data.length > 0) {
          setItems(data);
      } else {
          console.error('');
      }
  }, []);

  return (
    <Container>
      <h1 className='font-heading1 md:text-5xl text-3xl text-center leading-loose pt-5 md:pt-20 md:pb-10'>Urgent Appeals</h1>
      <ul className='md:grid md:grid-cols-3 md:gap-10 md:py-10 grid gap-y-6 p-7'>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <Link href={item.href}>
                {item.image && <img src={item.image} alt={item.type} style={{ maxWidth: '100%', height: 'auto' }} />}
              </Link>
            </div>

            <div className='flex flex-col border-solid border shadow-md'>
              <div className="flex flex-col p-4">
                <Chip radius="sm" color="danger">{item.category}</Chip>
                <Link href={item.href} className='md:text-xl font-medium text-lg pt-4'>{item.type}</Link>
              </div>
              <button 
                onClick={handleCheckout}
                className="px-5 py-5 text-lg font-medium leading-none border-green-700 border-solid border rounded-b text-white hover:text-green-700 h-10 hover:bg-white bg-green-700 flex items-center justify-center w-full"
              >Donate</button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default UrgentAppeals
