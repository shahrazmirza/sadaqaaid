'use client'
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { Container, Section } from '@radix-ui/themes';
import Image from 'next/image';

const NavMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-gray-800 py-10'>
      <Container
        className={`fixed top-0 left-0 right-0 w-screen z-10 transition-transform transform ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className='text-white flex justify-between items-center pt-4'>
          <div className='flex items-center gap-3'>
            <Link href='/'>
              <Image
                src='/assets/logo.png'
                alt='Logo'
                width='50'
                height='30'
              />
            </Link>
            <Link href='/'>
              <h1 className='text-2xl font-basic tracking-wider'>SADAQA AID</h1>
            </Link>
          </div>
          <div className='flex text-base'>
            <Link href='/' className='px-6 text-yellow-400'>
              Home
            </Link>

            <Link href='/Ramadan' className='px-6 text-white'>
              Ramadan
            </Link>

            <Link href='/Appeals' className='px-6 text-white'>
              Appeals
            </Link>
            
            <Link href='/Projects' className='px-6 text-white'>
              Projects
            </Link>

            <Link href='/Sadaqa' className='px-6 text-white'>
              Sadaqa
            </Link>

            <Link href='/Zakat' className='px-6 text-white'>
              Zakat
            </Link>

            <Link href='/Contact' className='px-6 text-white'>
              Contact
            </Link>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavMenu;
