import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';


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
      </div>
  );
};

export default Hero;
