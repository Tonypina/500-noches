import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Sidebar = ({ showSidebar, setShowSidebar, sidebarRef }) => {
  return (
    <>
      {showSidebar ? (
        <button
          className={`flex text-2xl text-black items-center cursor-pointer fixed right-10 top-6 z-50 md:hidden`}
          onClick={() => setShowSidebar(false)}
        >
          x
        </button>
      ) : (
        <></>
      )}

      <div
        ref={sidebarRef}
        className={`top-0 right-0 w-full md:w-[15vw] bg-white p-4 md:p-10 pl-4 md:pl-20 text-main fixed h-full z-40  ease-in-out duration-300 font-bold ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center h-full text-center">
          <div className="mb-4">
            <Image
              src="/logos/Grupo500NochesOscuro.svg"
              width={150}
              height={150}
              alt="Grupo 500 Noches"
            />
          </div>
          <hr className="border-t border-main my-4 w-full" />
          <nav className="space-y-4 mt-5">
            <div className="text-sm md:text-base">Inicio</div>
            <div className="text-sm md:text-base">Nosotros</div>
            <div className="text-sm md:text-base">Restaurantes</div>
            <div className="text-sm md:text-base">Contacto</div>
          </nav>
          <div className="mt-auto">
            <div className="text-sm md:text-base flex justify-around gap-10 mb-6 ">
              <Facebook size={25} />
              <Instagram size={25} />
              <Linkedin size={25} absoluteStrokeWidth={true} />
            </div>
            <hr className="border-t border-main my-4 w-full" />
            <button className="text-sm md:text-base">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
