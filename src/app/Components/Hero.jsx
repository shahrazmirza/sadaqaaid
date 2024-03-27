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
          className=''
        />
      </div>
      <div className='absolute inset-0 overflow-hidden bg-black opacity-70'></div>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          src='/assets/lebanon_flag.png'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
          className='opacity-0'
        />
      </div>
      <div className='absolute right-0 left-0 top-0 bottom-0'>
        <DonationBox />
      </div>
    </div>
  );
};

export default Hero;


// import Image from 'next/image';
// import Link from 'next/link';
// import 'animate.css';
// import DonationBox from '../Components/DonationBox';
// import { Container } from '@radix-ui/themes';

// const Hero = () => {
//   return (
//     <div className='h-screen relative'>
//       <div>
//         <div className='absolute inset-0 overflow-hidden'>
//           <Image
//             src='/assets/hero1.jpg'
//             alt='Hero Image'
//             layout='fill'
//             objectFit='cover'
//             className=''
//           />
//         </div>
//         <div className='absolute inset-0 overflow-hidden'>
//           <Image
//             src='/assets/lebanon_flag.png'
//             alt='Hero Image'
//             layout='fill'
//             objectFit='cover'
//             className='opacity-25'
//           />
//         </div>
//         <div className='absolute inset-0 overflow-hidden bg-black opacity-50'></div>
//       </div>
//       <Container className='absolute top-0 right-0 left-0 bottom-0'>
//         <div className='md:flex h-screen items-center md:gap-20 md:p-10'>
//           <h1 className='font-heading1 text-2xl py-10 md:text-5xl text-white text-center md:text-start drop-shadow-2xl p-5 md:p-0 animate__animated animate__fadeIn animate__delay-1s'>Join our movement with Sadaqa Aid to end poverty and transform lives globally</h1>
//           <DonationBox />
//         </div>
//       </Container>
//       <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-end h-screen pb-20"> {/* Adjust margin top as needed */}
//         <div className="flex space-x-2"> 
//           <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
//           <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
//           <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
//           <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
//           <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
