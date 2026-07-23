"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
    name: "Home",
    path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name:"Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true);
      } else{
        setIsScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  useEffect(() => {
    console.log(isScrolled)
  }, [isScrolled]);





  return (
    <>
      <header className={`sticky top-0 z-50 flex justify-between p-5 items-center transition-all duration-300 ${
        isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-lg border-gray-200"
        : "bg-transparent"
      }`}>
        <div>
          <h1 className={`font-bold text-xl transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}>
            Logo
          </h1>
        </div>
        <nav className="hidden sm:block">

          <ul className="flex gap-5">
            <NavLinks
              navLinks={navLinks}
              pathname={pathname}
              setIsOpen={setIsOpen}
              isScrolled={isScrolled}
            />
          </ul>

        </nav>

        <div className="sm:hidden block cursor-pointer transition-transform duration-300 ease-in-out" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <nav
          className={`absolute top-full left-0 w-full h-screen bg-zinc-900 shadow-md transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 py-5">
            <NavLinks
            navLinks={navLinks}
            pathname={pathname}
            setIsOpen={setIsOpen}
            isScrolled={isScrolled}
            />
          </ul>
        </nav>
      </header>


      

    </>
  );
};

export default Header;
