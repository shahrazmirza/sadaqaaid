import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import DonationBox from '../Components/DonationBox';
import { Container } from '@radix-ui/themes';


const Hero = () => {
  return (
    <div className='h-screen relative'>
      <image>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src='/assets/hero1.jpg'
            alt='Hero Image'
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src='/assets/lebanon_flag.png'
            alt='Hero Image'
            layout='fill'
            objectFit='cover'
            className='opacity-25'
          />
        </div>
        <div className='absolute inset-0 overflow-hidden bg-black opacity-50'></div>
      </image>
      <Container className='absolute top-0 right-0 left-0 bottom-0'>
        <div className='md:flex h-screen items-center md:gap-20 md:p-10'>
          <h1 className='fontHeading text-2xl py-10 md:text-5xl text-white text-center md:text-start drop-shadow-2xl p-5 md:p-0 animate__animated animate__zoomIn animate__delay-1s'>Join our movement with Sadaqa Aid to end poverty and transform lives globally</h1>
          <DonationBox />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
