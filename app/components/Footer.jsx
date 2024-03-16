import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
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
          <h1 className="mb-4">MAPA DEL SITIO</h1>
          <div className="grid grid-cols-2 gap-2">
            <ul>
              <li>
                <Link href="#inicio">Inicio</Link>
              </li>
              <li>
                <Link href="#about-us">Nosotros</Link>
              </li>
              <li>
                <Link href="#conoce-la-familia">Restaurantes</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#galeria">Galería</Link>
              </li>
              <li>
                <Link href="#contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h1>CONTACTO</h1>
          <ul className="mt-3">
            <li>contacto@contacto.com</li>
            <li>+52 55 5555 5555</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h1>CONCEPTOS</h1>
          <ul className="mt-3">
            <li>- Café Bar 500 Noches</li>
            <li>- Sarajevo Café Jardín</li>
            <li>- San Juan Leñero</li>
            <li>- Peruano Cevichería</li>
            <li>- Merendero Madero</li>
            <li>- Búho Café</li>
            <li>- Cinema Stereo</li>
            <li>- Histórico Café Tostador</li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-white my-4" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>@2023, Grupo 500 Noches</div>
        <div className="flex gap-2">
          <span>Siguenos:</span>
          <Linkedin size={20} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
