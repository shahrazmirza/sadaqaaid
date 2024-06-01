"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { Container, Section } from "@radix-ui/themes";
import Image from "next/image";
import data from "../Data/NavbarItems.json";

const NavMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="bg-gray-800 py-10 z-10 w-screen">
      <Container
        className={`fixed top-0 left-0 right-0 transition-transform transform ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="text-white flex justify-between items-center pt-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image src="/assets/logo.png" alt="Logo" width="50" height="30" />
            </Link>
            <Link href="/">
              <h1 className="text-2xl font-basic tracking-wider">SADAQA AID</h1>
            </Link>
          </div>

          <ul className="flex text-base">
            {items.map((items, index) => (
              <Link
                key={index}
                href={items.href}
                className={items.classNameNavMenu}
              >
                {items.category}
              </Link>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavMenu;
