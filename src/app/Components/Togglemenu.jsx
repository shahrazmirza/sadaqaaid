'use client'
import React from 'react';
import classNames from 'classnames';
import { CaretDownIcon, Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import data from '../Data/NavbarItems.json';

function Togglemenu() {
  const [items, setItems] = useState([]);
 
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  useEffect(() => {
    setItems(data);
  }, []);

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
          <ul>
            {items.map((items, index) => (
              <Link key={index} className={items.classNameToggleMenu} href={items.href}>
                {items.category}
              </Link>
            ))}
          </ul>
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