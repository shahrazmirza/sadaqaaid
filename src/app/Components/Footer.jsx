"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@radix-ui/themes";
import {
  MdLocalPhone,
  MdLocationOn,
  MdEmail,
  MdCopyright,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start("animate");
    }
  }, [isInView]);

  return (
    <div className="pt-10 md:mt-20 mt-10 pb-5 bg-gray-100 px-7">
      <Container>
        <div className="md:flex">
          <div>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  width="40"
                  height="30"
                />
              </Link>
            </motion.div>
            <motion.p
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.25 },
                },
              }}
              initial="initial"
              animate={fadeControls}
              className="text-lg/snug font-medium leading-10 pt-2"
            >
              About Us
            </motion.p>
            <motion.p
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                },
              }}
              initial="initial"
              animate={fadeControls}
              className="text-l/snug font-normal leading-6"
            >
              Established in 2024, Sadaqa Aid Incorporated is a humanitarian and
              development organisation headquartered in Dubbo, NSW, Australia.
              Our roots are firmly grounded in Islamic values, which serve as
              the cornerstone of our mission to empower the less fortunate on a
              global scale. At Sadaqa Aid, we believe that every individual
              possesses a God-given purpose, and it is our duty to alleviate
              suffering and help individuals fulfill their potential.
            </motion.p>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.75 },
                },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link
                className="text-l/snug font-normal text-gray-500 leading-10"
                href="/About"
              >
                Learn more
              </Link>
            </motion.div>

            {/* <motion.div 
            ref={ref} 
            variants={{ 
              initial: { y: 50, opacity:0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay:1.0 }}
            }}
            initial = 'initial'
            animate={fadeControls}
            className='flex pt-5'
            >
              <Link href="/" className='pr-1 text-l/snug font-normal text-gray-700 leading-10'><div className="font-bold text-white rounded-full bg-gray-700 flex items-center justify-center font-mono h-7 w-7 px-2"><FaFacebookF  /></div></Link>
              <Link href="/" className='pr-1 text-l/snug font-normal text-gray-700 leading-10'><div className="font-bold text-white rounded-full bg-gray-700 flex items-center justify-center font-mono h-7 w-7 px-2"><FaTwitter  /></div></Link>
              <Link href="/" className='pr-1 text-l/snug font-normal text-gray-700 leading-10'><div className="font-bold text-white rounded-full bg-gray-700 flex items-center justify-center font-mono h-7 w-7 px-2"><FaLinkedinIn  /></div></Link>
              <Link href="/Contact" className='text-l/snug font-normal text-gray-700 leading-10'><div className="font-bold text-white rounded-full bg-gray-700 flex items-center justify-center font-mono h-7 w-7 px-2"><FaRegEnvelope  /></div></Link>
            </motion.div> */}
          </div>

          <motion.div
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1.25 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="flex flex-col md:px-40 md:shrink-0 text-center"
          >
            <p className="text-base/snug font-medium leading-10">Menu</p>
            <Link
              href="/"
              className="text-l/snug font-normal text-gray-700 leading-10"
            >
              Home
            </Link>
            <Link
              href="/Ramadan"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Ramadan
            </Link>
            {/* <Link href="/" className='text-l/snug font-normal text-gray-500 leading-10'>About</Link> */}
            <Link
              href="/Appeals"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Appeals
            </Link>
            <Link
              href="/Projects"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Projects
            </Link>
            <Link
              href="/Sadaqa"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Sadaqa
            </Link>
            <Link
              href="/Zakat"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Zakat
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1.5 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="flex flex-col text-center"
          >
            <p className="text-base/snug font-medium leading-10">
              Get in Touch
            </p>
            <Link
              href="/Contact"
              className="text-l/snug font-normal text-gray-700 leading-10"
            >
              Contact us
            </Link>
            <div className="flex justify-center items-center">
              <div className="text-gray-500 leading-10 pr-1">
                <MdLocalPhone />
              </div>
              <p className="text-l/snug font-normal text-gray-500 leading-10">
                0403 320 350
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-gray-500 leading-10 pr-1">
                <MdEmail />
              </div>
              <p className="text-l/snug font-normal text-gray-500 leading-10">
                info@sadaqaaid.org.au
              </p>
            </div>

            {/* <div className='flex justify-center items-center'>
                <div className='text-gray-500 leading-10 pr-1'>
                  <MdLocationOn />
                </div>
                <p className='text-l/snug font-normal text-gray-500 leading-10 shrink-0'>56 Valencia Blvd, Doreen VIC 3754</p>
              </div> */}
          </motion.div>
        </div>
        <div className="md:text-base text-sm text-gray-800 pt-5 md:flex md:gap-1 md:justify-center md:items-center">
          <div className="flex gap-1 justify-center items-center">
            <MdCopyright />
            <p>2024 Sadaqa Aid Incorporated</p>
          </div>
          <p className="text-center">(ABN 39 290 059 100)</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
