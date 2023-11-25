import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white text-xs md:text-xs bg-[url(http://localhost:3000/azul-concreto.png)] p-7 pt-10">
      <div className="flex justify-around md:gap-5  md:flex-nowrap">
        <div>
          <Image
            src="/logos/Grupo500Noches.svg"
            width={170}
            height={170}
            alt="Logo Grupo 500 Noches"
          />
        </div>
        <div>
          <h1 className="mb-4">MAPA DEL SITIO</h1>
          <div className="columns-2">
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
                <Link href="#directorio">Directorio</Link>
              </li>
              <li>
                <Link href="#contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          CONTACTO
          <ul className="mt-3">
            <li>contacto@contacto.com</li>
            <li>+52 55 5555 5555</li>
          </ul>
        </div>
        <div>
          SUCURSALES
          <ul className="mt-3">
            <li>- Café Bar 500 Noches</li>
            <li>- Sarajevo Café Jardín</li>
            <li>- San Juan Leñero</li>
            <li>- Peruano Cevichería</li>
            <li>- La Nación del taco</li>
            <li>- Merendero Madero</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center ">
        <hr className="border-t border-white my-4 w-full" />
      </div>
      <div className="flex justify-between">
        <div>@2023, Grupo 500 Noches</div>
        <div className="flex">
          Siguenos:
          <div className="flex gap-2">
            <Facebook size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
