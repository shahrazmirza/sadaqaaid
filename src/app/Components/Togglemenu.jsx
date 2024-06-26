"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import {
  CaretDownIcon,
  Cross1Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Chip } from "@nextui-org/react";

function Togglemenu() {
  const [items, setItems] = useState([]);

  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <div className="flex justify-between h-10 items-center py-7">
        <div className="flex justify-center items-center p-5 gap-2">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className=""
            />
          </Link>
          <Link href="/">
            <h1 className="bold">SADAQA AID</h1>
          </Link>
        </div>
        <button
          className="flex text-gray-800 bg-gray-100 justify-center w-12 h-16 pt-6"
          onClick={toggleDiv}
        >
          {showDiv ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
      </div>
      {showDiv && (
        <div className="bg-gray-100 px-5 py-2 h-screen">
          <div className="">
            <NavigationMenu.Root>
              <NavigationMenu.List className=" list-none">
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="font-heading1 flex text-xl py-2 font-medium leading-none my-1 hover:text-gray-800"
                    href="/"
                  >
                    Home
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="font-heading1 flex text-xl py-2 font-medium leading-none my-1 hover:text-gray-800"
                    href="/About"
                  >
                    About Us
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="font-heading1 flex text-xl py-2 font-medium leading-none my-1 hover:text-gray-800"
                    href="/Ramadan"
                  >
                    Ramadan
                  </NavigationMenu.Link>
                  <ul className="grid grid-cols-2 gap-0 text-xs leading-8">
                    <Link href="/Ramadan">
                      <Chip radius="sm">Ramadan Meals</Chip>
                    </Link>
                    <Link href="/Ramadan">
                      <Chip radius="sm">Iftar</Chip>
                    </Link>
                    <Link href="/Ramadan">
                      <Chip radius="sm">Kaffarah</Chip>
                    </Link>
                    <Link href="/Ramadan">
                      <Chip radius="sm">Fidya</Chip>
                    </Link>
                    <Link href="/Ramadan">
                      <Chip radius="sm">Eid Gifts</Chip>
                    </Link>
                    <Link href="/Ramadan">
                      <Chip radius="sm">Zakat-ul-Fitr</Chip>
                    </Link>
                  </ul>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="font-heading1 flex text-xl py-2 font-medium leading-none my-1 hover:text-gray-800"
                    href="/Appeals"
                  >
                    Appeals
                  </NavigationMenu.Link>
                  <ul className="grid grid-cols-2 gap-0 text-xs leading-8">
                    <Link href="/Appeals">
                      <Chip radius="sm">Palestine Appeal</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Yemen Appeal</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Syria Relief</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Afghanistan Emergency</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Turkiye Emergency</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Rohingya Appeal</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Pakistan Emergency</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Lebanon Appeal</Chip>
                    </Link>
                    <Link href="/Appeals">
                      <Chip radius="sm">Bangladesh Relief</Chip>
                    </Link>
                  </ul>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="font-heading1 flex text-xl py-2 font-medium leading-none my-1 hover:text-gray-800"
                    href="/Projects"
                  >
                    Projects
                  </NavigationMenu.Link>
                  <ul className="grid grid-cols-2 gap-0 text-xs leading-8">
                    <Link href="/Projects">
                      <Chip radius="sm">Pakistan School</Chip>
                    </Link>
                    <Link href="/Projects">
                      <Chip radius="sm">Pakistan Surgeries</Chip>
                    </Link>
                    <Link href="/Projects">
                      <Chip radius="sm">Pakistan Water Stations</Chip>
                    </Link>
                  </ul>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <Link
                    href="/Contact"
                    className="px-5 my-5 w-fit text-sm font-medium leading-none border-gray-800 bg-gray-800 border-solid border rounded-full text-white h-10 flex items-center justify-center"
                  >
                    Get In Touch
                  </Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </div>
      )}
    </div>
  );
}

export default Togglemenu;
