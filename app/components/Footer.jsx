import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = ({ params }) => {
  return (
    <footer className="text-white text-xs bg-[url(https://rossoft.com.mx/azul-concreto.png)] p-4 md:p-7 pt-10">
      <div className="flex justify-center flex-col md:flex-row justify-around gap-5">
        <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <Image
            src="/logos/LogoG500NochesSilueta.svg"
            width={170}
            height={170}
            alt="Logo Grupo 500 Noches"
          />
          <Image
            className="mt-1"
            src="/logos/Grupo500Noches.svg"
            width={130}
            height={130}
            alt="Logo Grupo 500 Noches"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <h1 className="mb-4 text-gold">MAPA DEL SITIO</h1>
          <div className="grid grid-cols-2 gap-2">
            <ul>
              <li className="mt-1">
                <Link href="#inicio">Inicio</Link>
              </li>
              <li className="mt-1">
                <Link href="#about-us">Nosotros</Link>
              </li>
              <li className="mt-1">
                <Link href="#conoce-la-familia">Restaurantes</Link>
              </li>
            </ul>
            <ul>
              <li className="mt-1">
                <Link href="#galeria">Galería</Link>
              </li>
              <li className="mt-1">
                <Link href="#contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h1 className="text-gold">CONTACTO</h1>
          <ul className="mt-3">
            <li className="mt-1">info@grupo500noches.com.mx</li>
            <li className="mt-1">+52 55 5555 5555</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h1 className="text-gold">CONCEPTOS</h1>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <ul>
              <li className="mt-1"><a href="/conceptos/cafe-500-noches">Café Bar 500 Noches</a></li>
              <li className="mt-1"><a href="/conceptos/sarajevo">Sarajevo Café Jardín</a></li>
              <li className="mt-1"><a href="/conceptos/san-juan-lenero">San Juan Leñero</a></li>
              <li className="mt-1"><a href="/conceptos/cinema-stereo">Cinema Stereo</a></li>
            </ul>
            <ul>
              <li className="mt-1"><a href="https://www.instagram.com/historicocafetostador/?hl=es" target="_blank">Histórico Café Tostador</a></li>
              <li className="mt-1"><a href="/conceptos/buho-cafe">Búho Café</a></li>
              <li className="mt-1"><a href="/conceptos/merendero-madero">Merendero Madero</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t border-white my-4" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>@2024, Grupo 500 Noches</div>
        <div className="flex gap-2">
          <span>Siguenos:</span>
          <Linkedin size={20} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
