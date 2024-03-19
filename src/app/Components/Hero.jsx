'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight, BsChevronDown } from 'react-icons/bs';
import 'animate.css';


const Hero = () => {
  return (
      <div className='mh-screen'>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src={currentImage}
            alt='Hero Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
  );
};

export default Hero;
