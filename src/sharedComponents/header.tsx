"use client";

import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="bg-white sticky  w-full justify-center space-y-12 gap-10  font-sans">
      {/* <div className="h-16 w-16 rounded-full justify-center text-center my-12 flex item-center">
        <Image
          src="/images/coclogo.jpg"
          alt="coclogo"
          width={40}
          height={40}
          className="w-full h-full rounded-full text-center object-contain"
        />
      </div> */}

      <div className=" justify-center flex text-[#174124] flex-row gap-x-24  items-center">
        <Link href="/">Home</Link>
        <Link href="/sermon">Sermon</Link>
        <Link href="/teaching">Teachings</Link>
        <Link href="/gallery">Gallery</Link>
      </div>

      {/* hamburger menu */}
      {/* <button
          type="button"
          onClick={toggleMobileMenu}
          className=" cursor-pointer focus:outline-none md:hidden"
        >
          <MenuIcon />
        </button> */}
      {/* Navigation Links (Mobile) */}
      {/* <div
          className={`md:hidden absolute flex px-4 flex-col text-black gap-y-6 top-full right-0 bg-[#fbf7ee] w-[30%] ${
            isMobileMenuVisible ? "" : "hidden"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/sermon">Sermon</Link>
          <Link href="/teaching">Teachings</Link>
          <Link href="/gallery">Gallery</Link>
        </div> */}

      {/* Navigation Links (Desktop) */}

      {/* <div className="hidden md:flex flex-row gap-x-24  items-center">
        <Link href="/">Home</Link>
        <Link href="/sermon">Sermon</Link>
        <Link href="/teaching">Teachings</Link>
        <Link href="/gallery">Gallery</Link>
      </div> */}
    </div>
  );
};

export default Navbar;
