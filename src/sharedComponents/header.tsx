"use client";

import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed p-4 top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="bg-red-950 md:px-40 px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image
              src="/images/coc.png"
              alt="churchLogo"
              width={80}
              height={80}
            />
          </div>

          {/* Desktop Links (Hidden on Small Screens) */}
          <div className="block">
            <div className=" flex flex-row  gap-8 font-bold text-black">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <Link href="/lessons" className="hover:text-gray-300 transition">
                Sermon
              </Link>
              <Link href="/teaching" className="hover:text-gray-300 transition">
                Teachings
              </Link>
              <Link href="/gallery" className="hover:text-gray-300 transition">
                Gallery
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuVisible ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Links */}
        {mobileMenuVisible && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-lg absolute w-full">
            <Link
              href="/"
              className="text-black hover:text-gray-600 transition"
            >
              Home
            </Link>
            <Link
              href="/lessons"
              className="text-black hover:text-gray-600 transition"
            >
              Sermon
            </Link>
            <Link
              href="/teaching"
              className="text-black hover:text-gray-600 transition"
            >
              Teachings
            </Link>
            <Link
              href="/gallery"
              className="text-black hover:text-gray-600 transition"
            >
              Gallery
            </Link>
          </div>
        )}
      </div>

      {/* Push content down so it's not hidden behind navbar */}
      {/* <div className="pt-20"></div> */}
    </>
  );
};

export default Navbar;
