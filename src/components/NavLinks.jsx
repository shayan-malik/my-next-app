import Link from "next/link";

const NavLinks = ({ navLinks, pathname, setIsOpen, isScrolled}) => {
  return (
    <>
        {navLinks.map((link) => (
              <li key={link.path}>

                <Link href={link.path}
                onClick={() => setIsOpen?.(false)}
                className={`transition-colors duration-300 ${
                  pathname === link.path
                  ? "text-blue-500"
                  : isScrolled
                  ? "text-black hover:text-blue-500"
                  : "text-white hover:text-blue-300 "
                  }`}>
                {link.name}
                </Link>

              </li>
            ))}
    </>
  )
}

export default NavLinks
