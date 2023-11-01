import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

const Sidebar = ({ showSidebar, setShowSidebar, sidebarRef }) => {
  const { data, status } = useSession()

  const scrollToSection = (sectionId) => {

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <nav className="mt-5">
            <Link href="/">
              <div className="py-3 text-sm md:text-base">Inicio</div>
            </Link>
            <Link href="#about-us">
              <div className="py-3 text-sm md:text-base">Nosotros</div>
            </Link>
            <Link href="#conoce-la-familia">
              <div className="py-3 text-sm md:text-base">Restaurantes</div>
            </Link>
            <Link href="#galeria">
              <div className="py-3 text-sm md:text-base">Galería</div>
            </Link>
            <Link href="#directorio">
              <div className="py-3 text-sm md:text-base">Directorio</div>
            </Link>
            <Link href="#contacto">
              <div className="py-3 text-sm md:text-base">Contacto</div>
            </Link>

            {status === "authenticated"
              ? 
                <div>
                  <hr className="border-t border-main my-4" />
                  <div className="text-sm md:text-base">Administración</div>
                  <hr className="border-t border-main my-4" />
                  <Link href="recursos-humanos">
                    <div className="text-sm md:text-base">Vacantes</div>
                  </Link>
                </div>
              : null
            }
          </nav>
          <div className="mt-auto">
            <div className="text-sm md:text-base flex justify-around gap-10 mb-6 ">
              <Facebook size={25} />
              <Instagram size={25} />
              <Linkedin size={25} absoluteStrokeWidth={true} />
            </div>
            <hr className="border-t border-main my-4 w-full" />
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
