"use client";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/sharedComponents/footer";
import Navbar from "@/sharedComponents/header";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { AlignRightIcon, ChevronDown, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] =
    useState<boolean>(false);
  const [moreDropdownVisible, setMoreDropdownVisible] =
    useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(true);
  };
  const toggleAboutDropdown = () => {
    setAboutDropdownVisible(!aboutDropdownVisible);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <div className="fixed  md:px-48 top-0 left-0 w-full z-50 bg-white shadow-md">
          <div className="flex justify-between px-4 relative md:space-x-4 md:shadow-none shadow-2xl items-center ">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/coc.png"
                alt="churchLogo"
                width={150}
                height={150}
              />
            </Link>

            {/* Desktop Links (Hidden on Small Screens) */}
            <div className="hidden  md:block text-md">
              <div className=" flex flex-row  gap-x-24 font-medium text-[#666666]">
                <Link href="/" className="hover:text-gray-950 transition">
                  Home
                </Link>
                <div className="relative">
                  {/* About Us Button */}

                  <div className="flex items-center gap-1 hover:text-green-950 transition">
                    <Link href="/pages/aboutUs">
                      <div onMouseEnter={() => setAboutDropdownVisible(true)}>
                        About Us
                      </div>
                    </Link>
                  </div>

                  {/* Dropdown Menu */}
                  {aboutDropdownVisible && (
                    <div
                      onMouseLeave={() => setAboutDropdownVisible(false)}
                      className="absolute -left-12 top-full mt-2 w-40 bg-white shadow-lg rounded-lg py-2"
                    >
                      <Link
                        href="/pages/aboutUs/ourBeliefs"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Our Belief
                      </Link>
                      <Link
                        href="/pages/aboutUs/ourHistory"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Our History
                      </Link>
                      <Link
                        href="/pages/aboutUs/ourWorship"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Our Worship
                      </Link>
                      <Link
                        href="/pages/aboutUs/theMinister"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        The Minister
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/pages/lessons"
                  className="hover:text-gray-950 transition "
                >
                  Lessons
                </Link>
                <Link
                  href="/pages/contactUs"
                  className="hover:text-gray-950 transition"
                >
                  Get in Touch
                </Link>
                <div className="relative">
                  {/* M Button */}
                  <button
                    onMouseEnter={() => setMoreDropdownVisible(true)}
                    className="flex items-center gap-1 hover:text-green-950 transition"
                  >
                    More{" "}
                  </button>

                  {/* Dropdown Menu */}
                  {moreDropdownVisible && (
                    <div
                      onMouseLeave={() => setMoreDropdownVisible(false)}
                      className="absolute -left-12 top-full mt-2 w-40 bg-white shadow-lg rounded-lg py-2"
                    >
                      <Link
                        href="/pages/more/gallery1"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Gallery
                      </Link>
                      <Link
                        href="/pages/more/theMinistry"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        The Ministry
                      </Link>
                      <Link
                        href="/pages/more/support"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Support Us
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="sm:block md:hidden">
              <button className="md:hidden block text-black focus:outline-none">
                {mobileMenuVisible ? (
                  <X size={28} onClick={() => setMobileMenuVisible(false)} />
                ) : (
                  <AlignRightIcon size={28} onClick={toggleMobileMenu} />
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden block ">
            <hr />
          </div>

          {/* MOBILE LINKSSS */}
          {mobileMenuVisible && (
            <div className="md:hidden absolute top-0 left-0 w-full font-semibold text-2xl">
              <div
                className="w-full flex flex-col space-y-4 p-4 bg-white shadow-xl 
                    absolute top-16 left-0 transition-all duration-300 ease-in-out 
                    translate-y-[-100%] opacity-0"
                style={{
                  transform: mobileMenuVisible
                    ? "translateY(0)"
                    : "translateY(-100%)",
                  opacity: mobileMenuVisible ? 1 : 0,
                }}
              >
                <Link
                  href="/"
                  className="hover:text-gray-950 transition hover:bg-gray-100"
                >
                  <div onClick={() => setMobileMenuVisible(false)}>Home</div>
                </Link>
                {/* About Us Button */}
                <div className="flex items-center gap-1 hover:text-green-950 transition">
                  <Link href="/pages/aboutUs">
                    <div onMouseEnter={() => setAboutDropdownVisible(true)}>
                      About Us
                    </div>
                  </Link>
                </div>
                {/* Dropdown Menu */}
                {aboutDropdownVisible && (
                  <div
                    onMouseLeave={() => setAboutDropdownVisible(false)}
                    className="absolute left-0 top-20  w-40 bg-white shadow-custom-xl rounded-lg py-2"
                  >
                    <Link
                      href="/pages/aboutUs/theChurch"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {" "}
                      <div
                        onClick={() => {
                          setMobileMenuVisible(false);
                          setAboutDropdownVisible(false);
                        }}
                      >
                        The Church
                      </div>
                    </Link>
                    <Link
                      href="/pages/aboutUs/ourBeliefs"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div
                        onClick={() => {
                          setMobileMenuVisible(false);
                          setAboutDropdownVisible(false);
                        }}
                      >
                        Our Belief{" "}
                      </div>
                    </Link>
                    <Link
                      href="/pages/aboutUs/ourWorship"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div
                        onClick={() => {
                          setMobileMenuVisible(false);
                          setAboutDropdownVisible(false);
                        }}
                      >
                        Our Worship{" "}
                      </div>
                    </Link>
                    <Link
                      href="/pages/aboutUs/theMinister"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div
                        onClick={() => {
                          setMobileMenuVisible(false);
                          setAboutDropdownVisible(false);
                        }}
                      >
                        The Minister{" "}
                      </div>
                    </Link>
                  </div>
                )}{" "}
                <Link
                  href="/pages/lessons"
                  className="hover:text-gray-950 transition hover:bg-gray-100"
                >
                  Lessons
                </Link>
                <Link
                  href="/pages/contactUs"
                  className="hover:text-gray-950 transition hover:bg-gray-100"
                >
                  Get in Touch
                </Link>
                {/* M Button */}
                <button
                  onMouseEnter={() => setMoreDropdownVisible(true)}
                  className="flex items-center gap-1 hover:text-green-950 transition"
                >
                  More{" "}
                </button>
                {/* Dropdown Menu */}
                {moreDropdownVisible && (
                  <div
                    onMouseLeave={() => setMoreDropdownVisible(false)}
                    className="absolute left-0 top-48 mt-2 w-40 bg-white shadow-custom-xl rounded-lg py-2"
                  >
                    <Link
                      href="/pages/more/gallery1"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div
                        onClick={() => {
                          setMobileMenuVisible(false);
                          setMoreDropdownVisible(false);
                        }}
                      >
                        Gallery
                      </div>
                    </Link>
                    <Link
                      href="/pages/more/theMinistry"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div
                        onClick={() => {
                          setMobileMenuVisible(false);
                          setMoreDropdownVisible(false);
                        }}
                      >
                        The Ministry
                      </div>
                    </Link>
                    <Link
                      href="/pages/more/support"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div
                        onClick={() => {
                          setMobileMenuVisible(false);
                          setMoreDropdownVisible(false);
                        }}
                      >
                        Support Us{" "}
                      </div>
                    </Link>
                  </div>
                )}{" "}
              </div>
            </div>
          )}
        </div>

        <main className="bg-[#fff]">{children}</main>
        <div className="bg-black">
          <Footer />
        </div>
      </body>
    </html>
  );
}
