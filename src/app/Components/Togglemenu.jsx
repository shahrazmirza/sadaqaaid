'use client'
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon, Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function Togglemenu() {
  const [items, setItems] = useState([]);
 
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <div className='flex justify-between h-10 items-center py-7'>
        <div className='flex justify-center items-center p-5 gap-2'>
          <Link href="/">
            <Image
              src='/assets/logo.png'
              alt='Logo'
              width={30}
              height={30}
              className=''
            />
          </Link>
          <Link href="/">
            <h1 className='bold'>SADAQA AID</h1>
          </Link>
        </div>
        <button className='flex text-gray-700 bg-gray-100 justify-center w-12 h-16 pt-6' onClick={toggleDiv}>
        {showDiv ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
      </div>
        {showDiv && 
        <div className='bg-gray-100 px-4 py-2 h-screen'>
        <div className=''>
          <NavigationMenu.Root>
            <NavigationMenu.List className=" list-none">
              
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-gray-700" 
                  href="/">
                  Home
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-gray-700" 
                  href="/Ramadan">
                  Ramadan
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-gray-700" 
                  href="/Appeals">
                  Appeals
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-gray-700" 
                  href="/Projects">
                  Projects
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-gray-700" 
                  href="/Sadaqa">
                  Sadaqa
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="flex px-5 py-2 font-medium leading-none my-1 hover:text-gray-700" 
                  href="/Zakat">
                  Zakat
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <Link href="/Contact" className="px-5 m-5 w-fit text-sm font-medium leading-none border-gray-700 border-solid border rounded-full text-gray-700 hover:text-white h-10 hover:bg-gray-700 text-white-100 flex items-center justify-center">Get In Touch</Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </div>
      }
    </div>
  );
}

// const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
//   <li>
//     <NavigationMenu.Link asChild>
//       <a
//         className={classNames(
//           'block p-3 pl-5',
//           className
//         )}
//         {...props}
//         ref={forwardedRef}
//       >
//         <div className="font-medium">{title}</div>
//         <p>{children}</p>
//       </a>
//     </NavigationMenu.Link>
//   </li>
// ));

export default Togglemenu;