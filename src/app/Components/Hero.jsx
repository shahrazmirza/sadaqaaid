import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import DonationBox from '../Components/DonationBox';
import { Container } from '@radix-ui/themes';


const Hero = () => {
  return (
    <div className='h-screen relative z-0'>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          src='/assets/hero1.jpg'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
          className='pb-20'
        />
      </div>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          src='/assets/lebanon_flag.png'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
          className='pb-20 opacity-25'
        />
      </div>
      <div className='absolute right-20 top-0 h-full flex items-center'>
        <DonationBox />
      </div>
    </div>
  );
};

export default Hero;
