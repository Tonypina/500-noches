"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

const Sidebar = ({ showSidebar, setShowSidebar, sidebarRef }) => {
  const { data, status } = useSession()

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-2xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <></>
      )}

      <div
        className={`top-0 right-0 w-full md:w-[15vw] bg-white p-4 md:p-10 pl-4 md:pl-20 text-main fixed h-full z-40  ease-in-out duration-300 font-bold ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center h-full text-center">
          <div className="mb-4">
            <Image
              src="logos/Grupo500NochesOscuro.svg"
              width={150}
              height={150}
              alt="Grupo 500 Noches"
            />
          </div>
          <hr className="border-t border-main my-4 w-3/4" />
          <nav className="space-y-4 mt-5">
            <div className="text-sm md:text-base">Inicio</div>
            <div className="text-sm md:text-base">Nosotros</div>
            <div className="text-sm md:text-base">Restaurantes</div>
            <div className="text-sm md:text-base">Contacto</div>
          </nav>
          <div className="mt-auto">
            <div className="text-sm md:text-base">Redes</div>
            <hr className="border-t border-main my-4 w-3/4" />
            {status === "authenticated"
              ? 
                <div className="">
                  <div className="text-sm md:text-base">Hola {data.user.name}</div>
                  <button className="text-sm md:text-base" onClick={() => signOut()}>
                    Logout
                  </button>
                </div>
              : 
                <Link href="recursos-humanos">
                  <button className="text-sm md:text-base">Login</button>
                </Link>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
