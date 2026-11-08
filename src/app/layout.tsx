"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Footer from "@/sharedComponents/footer";

const aboutLinks = [
  { label: "Our Beliefs", href: "/pages/aboutUs/ourBeliefs" },
  { label: "Our Congregation", href: "/pages/aboutUs/ourCongregation" },
  { label: "Our Worship", href: "/pages/aboutUs/ourWorship" },
  { label: "The Minister", href: "/pages/aboutUs/theMinister" },
];

const moreLinks = [
  { label: "Gallery", href: "/pages/more/gallery1" },
  { label: "The Ministry", href: "/pages/more/theMinistry" },
  { label: "Support Us", href: "/pages/more/support" },
  { label: "Church History", href: "/pages/more/ourHistory" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState<"about" | "more" | null>(null);

  const closeMenu = () => {
    setMobileMenuVisible(false);
    setOpenMenu(null);
  };

  return (
    <html lang="en">
      <body>
        <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e4c47d]/30 bg-white font-inter shadow-[0_8px_30px_rgba(25,49,35,0.08)]">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-10 lg:px-16">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/coc.png"
                alt="Church of Christ Anua Obio logo"
                width={58}
                height={58}
                className="h-12 w-12 rounded-full bg-white object-contain p-1"
                priority
              />
              <span className="hidden max-w-[170px] text-sm font-bold leading-tight tracking-wide text-[#17261f] sm:block">
                CHURCH OF CHRIST
                <span className="mt-0.5 block text-xs font-medium tracking-normal text-[#66716b]">
                  Anua Obio, Uyo
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
              <Link
                href="/"
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#17261f] transition hover:bg-[#f7f8f5] hover:text-[#196f00]"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === "about" ? null : "about")}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[#17261f] transition hover:bg-[#f7f8f5] hover:text-[#196f00]"
                  aria-expanded={openMenu === "about"}
                >
                  About us
                  <ChevronDown
                    size={15}
                    className={openMenu === "about" ? "rotate-180 transition" : "transition"}
                  />
                </button>
                {openMenu === "about" && (
                  <div className="absolute left-0 top-full mt-4 w-52 rounded-2xl border border-[#e4c47d]/50 bg-white p-2 shadow-xl">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-xl px-4 py-2.5 text-sm text-[#66716b] transition hover:bg-[#f7f8f5] hover:text-[#196f00]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/pages/lessons"
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#17261f] transition hover:bg-[#f7f8f5] hover:text-[#196f00]"
              >
                Lessons
              </Link>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[#17261f] transition hover:bg-[#f7f8f5] hover:text-[#196f00]"
                  aria-expanded={openMenu === "more"}
                >
                  More
                  <ChevronDown
                    size={15}
                    className={openMenu === "more" ? "rotate-180 transition" : "transition"}
                  />
                </button>
                {openMenu === "more" && (
                  <div className="absolute right-0 top-full mt-4 w-52 rounded-2xl border border-[#e4c47d]/50 bg-white p-2 shadow-xl">
                    {moreLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-xl px-4 py-2.5 text-sm text-[#66716b] transition hover:bg-[#f7f8f5] hover:text-[#196f00]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/pages/contactUs"
                className="ml-3 rounded-full bg-[#e4c47d] px-5 py-2.5 text-sm font-semibold text-[#17261f] transition hover:bg-white"
              >
                Get in touch
              </Link>
            </nav>

            <button
              type="button"
              aria-label={mobileMenuVisible ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuVisible}
              onClick={() => setMobileMenuVisible((visible) => !visible)}
              className="rounded-lg p-2 text-[#17261f] transition hover:bg-[#f7f8f5] md:hidden"
            >
              {mobileMenuVisible ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>

          {mobileMenuVisible && (
            <nav className="border-t border-[#e4c47d]/30 bg-white px-5 py-5 shadow-lg md:hidden" aria-label="Mobile navigation">
              <div className="mx-auto max-w-7xl space-y-2">
                <Link href="/" onClick={closeMenu} className="block rounded-xl px-4 py-3 font-semibold text-[#17261f] hover:bg-[#f7f8f5]">
                  Home
                </Link>
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === "about" ? null : "about")}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-[#17261f] hover:bg-[#f7f8f5]"
                >
                  About us <ChevronDown size={18} className={openMenu === "about" ? "rotate-180 transition" : "transition"} />
                </button>
                {openMenu === "about" && (
                  <div className="ml-4 border-l-2 border-[#e4c47d] pl-3">
                    {aboutLinks.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm text-[#66716b] hover:bg-[#f7f8f5] hover:text-[#196f00]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href="/pages/lessons" onClick={closeMenu} className="block rounded-xl px-4 py-3 font-semibold text-[#17261f] hover:bg-[#f7f8f5]">
                  Lessons
                </Link>
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-[#17261f] hover:bg-[#f7f8f5]"
                >
                  More <ChevronDown size={18} className={openMenu === "more" ? "rotate-180 transition" : "transition"} />
                </button>
                {openMenu === "more" && (
                  <div className="ml-4 border-l-2 border-[#e4c47d] pl-3">
                    {moreLinks.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm text-[#66716b] hover:bg-[#f7f8f5] hover:text-[#196f00]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href="/pages/contactUs" onClick={closeMenu} className="mt-3 block rounded-full bg-[#e4c47d] px-5 py-3 text-center font-semibold text-[#17261f]">
                  Get in touch
                </Link>
              </div>
            </nav>
          )}
        </header>

        <main className="bg-white pt-20">{children}</main>
        <div className="bg-black">
          <Footer />
        </div>
      </body>
    </html>
  );
}
