"use client";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Sidebar from "./SideBar";

const Navbar = () => {
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarSticky(true);
      } else {
        setNavbarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento del scroll cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full pt-2 px-10 ${
        navbarSticky ? "bg-white shadow-md" : "bg-transparent"
      } transition-all duration-300 ease-in-out z-50`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logos/Grupo500Noches.svg"
            width={150}
            height={150}
            alt="Grupo 500 Noches"
          />
        </div>
        <div>
          <button
            className="text-white hover:text-gray-800 focus:outline-none"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Menu />
          </button>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
