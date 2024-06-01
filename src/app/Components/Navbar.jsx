"use client";
import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Togglemenu from "./Togglemenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>{isMobile ? <Togglemenu /> : <NavMenu />}</div>;
};

export default Navbar;
