import React from 'react'
import Navbar from '../Components/Navbar'
import Scroll_to_top from '../Components/Scroll_to_top';
import Whatsapp from '../Components/Whatsapp'
import ProjectsContent from '../Components/ProjectsContent'
import Footer from '../Components/Footer'
import { Container } from '@radix-ui/themes';
import Image from 'next/image';
import visionImage from '../../../public/assets/Vision.svg';
import missionImage from '../../../public/assets/Mission.svg';

const About = () => {
  return (
    
    <div className='mh-screen'>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <Container>
        <div className='flex justify-center items-center relative'>
          <div className='relative z-10 md:pb-20 pb-10'>
            <p className='font-heading1 md:text-5xl text-3xl font-bold capitalize md:pt-20 pt-10 tracking-wider text-gray-800 leading-loose animate__animated animate__zoomIn animate__delay-1s'>
              About Us
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-5 px-7 md:text-start text-center'>
          <p>Established in 2024, Sadaqa Aid Incorporated is a humanitarian and development organisation headquartered in Dubbo, NSW, Australia. Our roots are firmly grounded in Islamic values, which serve as the cornerstone of our mission to empower the less fortunate on a global scale. At Sadaqa Aid, we believe that every individual possesses a God-given purpose, and it is our duty to alleviate suffering and help individuals fulfill their potential.</p>
          <p>Driven by compassion and a vision for a more equitable world, we are dedicated to fighting poverty, alleviating suffering, and addressing injustices wherever they exist. Our organisation operates through a network of committed volunteers, donors, community members, partners, and staff, all working together to bring about positive change in the world.</p>
          <h1 className="md:text-3xl font-bold text-2xl py-4">Vision and mission</h1>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-10'>
            <div className='col-span-1 border-solid border-b rounded-xl shadow-md'>
              <Image 
                src={visionImage} 
                alt='visionImage' 
                width={500} 
                height={500}
                className='rounded-t-xl' 
              />
              <div className='flex flex-col gap-5 p-5'>
                <h1 className='text-2xl font-bold pt-4'>Our vision</h1>
                <p>To create a world where communities thrive, social obligations are fulfilled, justice prevails, and people unite in solidarity to alleviate suffering, ensuring dignity, opportunity, and essential resources for all individuals.</p>
              </div>
            </div>
            <div className='col-span-1 border-solid border-b rounded-xl shadow-md'>
              <Image 
                src={missionImage} 
                alt='missionImage' 
                width={500} 
                height={500} 
                className='rounded-t-xl'
              />
              <div className='flex flex-col gap-5 p-5'>
                <h1 className='text-2xl font-bold pt-4'>Our mission</h1>
                <p>To mobilise resources, build partnerships, and empower communities to mitigate disasters, promote sustainable development, support the marginalised, empower individuals through education, and advance gender equality, thereby advocating for the rights and dignity of all individuals.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </Container>
    </div>
    
  )
}

export default About
