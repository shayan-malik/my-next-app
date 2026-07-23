"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative flex justify-between p-5 items-center shadow-sm shadow-gray-500">
        <div className="font-bold text-xl">
          <h1>Logo</h1>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden block cursor-pointer transition-transform duration-300 ease-in-out" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <nav
          className={`absolute top-full left-0 w-full h-full bg-zinc-900 shadow-md transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 py-5">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
