"use client";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Sidebar from "./SideBar";

const Navbar = () => {
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [navbarWhite, setNavbarWhite] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  //Referencia para el Sidebar
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleBodyClick = (e) => {
      // Comprueba si el clic ocurrió fuera del sidebar
      if (
        showSidebar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setShowSidebar(false);
      }
    };

    // Agrega el manejador de eventos al elemento <body>
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [showSidebar, setShowSidebar, sidebarRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarSticky(true);
      } else {
        setNavbarSticky(false);
      }

      if (window.scrollY > 10) {
        setNavbarSticky
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full pt-2 px-10 ${
        navbarSticky ? " shadow-md bg-white" : "bg-transparent "
      } transition-all duration-300 ease-in-out z-50`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          { !navbarSticky ? 
            <Image
              src="/logos/Grupo500Noches.svg"
              width={150}
              height={150}
              alt="Grupo 500 Noches"
            />
            :
            <Image
              src="/logos/Grupo500NochesOscuro.svg"
              width={150}
              height={150}
              alt="Grupo 500 Noches"
            />
          }
        </div>
        <div>
          <button
            className={`
              ${ !navbarSticky ?
                "text-white hover:text-gray-800"
                :
                "hover:text-blue-800"
              }
              focus:outline-none`}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Menu />
          </button>
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            sidebarRef={sidebarRef}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
