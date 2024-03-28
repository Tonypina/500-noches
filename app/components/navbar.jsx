"use client";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Sidebar from "./SideBar";
import Link from "next/link";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";
import { usePathname } from "next/navigation";
import path from "path";

const Navbar = () => {
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  //Referencia para el Sidebar
  const sidebarRef = useRef(null);

  const pathname = usePathname();
  
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
    const stickyPaths = ['/jobs', '/recursos-humanos', '/admin'];

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

    if ( !stickyPaths.includes(pathname) ) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setNavbarSticky(true)
    }
    
    return () => {
      if ( !stickyPaths.includes(pathname) ) {
        window.addEventListener("scroll", handleScroll);
      } else {
        setNavbarSticky(true)
      }
    };
  }, [pathname]);

  // Cambiar cuando se realice el catálogo
  const restaurants = [
    {
      name: "Café Bar 500 Noches",
      link: "/cafe-500-noches"
    },
    {
      name: "Sarajevo Café Jardín",
      link: "/sarajevo"
    },
    {
      name: "San Juan Leñero",
      link: "/san-juan-lenero"
    },
    {
      name: "Merendero Madero",
      link: "/merendero-madero"
    },
    {
      name: "Buho Café",
      link: "/buho-cafe"
    },
    {
      name: "Cinema Stereo",
      link: "/cinema-stereo"
    },
    {
      name: "Histórico Café Tostador",
      link: "https://www.facebook.com/eltostadorcafe/"
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full py-1 px-10 z-10 ${
        navbarSticky ? " shadow-md bg-white" : "bg-transparent "
      } transition-all duration-300 ease-in-out z-50`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          { !navbarSticky ? 
            <>
              <Image
                className="mr-5"
                src="/logos/LogoG500NochesSilueta.svg"
                width={30}
                height={30}
                alt="Grupo 500 Noches"
              />
              <Image
                src="/logos/Grupo500Noches.svg"
                width={150}
                height={150}
                alt="Grupo 500 Noches"
              />
            </>
            :
            <>
              <Image
                className="mr-5"
                src="/logos/LogoEscafandra-azul.svg"
                width={30}
                height={30}
                alt="Grupo 500 Noches"
              />
              <Image
                src="/logos/Grupo500NochesOscuro.svg"
                width={150}
                height={150}
                alt="Grupo 500 Noches"
              />
            </>
          }
        </div>
        <div className={`hidden sm:flex text-main font-semibold tracking-wide ${
          navbarSticky ? "text-blue-950" : "text-white"
        }`}>
          <Link href="/" className="mr-5">
            <div className="pr-10 mr-5 md:text-base duration-300 hover:scale-110">
              Inicio
            </div>
          </Link>
          <Link href="#about-us" className="mr-5">
            <div className="pr-10 mr-5 md:text-base duration-300 hover:scale-110">
              Nosotros
            </div>
          </Link>
          <div>
            <div className="pr-10 mr-5 peer duration-300 hover:scale-110">
              <Link href="#conoce-la-familia" className="flex items-center mr-5">
                <p className="mr-2">Conceptos</p>
                <ChevronDownIcon className="text-small" />
              </Link>
            </div>
            <div className={`hidden absolute peer-hover:flex hover:flex
              w-[210px]
              flex-col drop-shadow-lg
              pt-4
              pl-5
              rounded-md
              z-0
              ${
                navbarSticky ? "text-blue-950 bg-white" : "text-white"
              }`}>
              {restaurants.map((restaurant, index) => (
                <a key={index} className="pr-5 py-3 duration-300 hover:scale-110" href={restaurant.link}>{restaurant.name}</a>
              ))}
            </div>
          </div>
          <Link href="#galeria" className="mr-5">
            <div className="pr-10 mr-5 md:text-base duration-300 hover:scale-110">
              Galería
            </div>
          </Link>
          <Link href="#opportunities" className="mr-5">
            <div className="pr-10 mr-5 md:text-base duration-300 hover:scale-110">
              Carreras
            </div>
          </Link>
          <Link href="#contacto" className="mr-5">
            <div className="pr-10 mr-5 md:text-base duration-300 hover:scale-110">
              Contacto
            </div>
          </Link>
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
