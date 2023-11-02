"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Boton from "../components/Boton";
import Eslogan from "../components/Eslogan";

const storeData = {
  1: {
    name: "Café Bar 500 Noches",
    description: "Descripción de la Tienda 1",
    srcImagen: "logos/500Noches.svg",
  },
  6: {
    name: "Sarajevo Café Jardín",
    description: "Descripción de la Tienda 2",
    srcImagen: "logos/Sarajevo.svg",
  },
  5: {
    name: "San Juan Leñero",
    description: "Descripción de la Tienda 2",
    srcImagen: "logos/SanJuanLeñero.svg",
  },
  4: {
    name: "Peruano Cevichería",
    description: "Descripción de la Tienda 2",
    srcImagen: "logos/Peruano.svg",
  },
  2: {
    name: "La Nación del taco",
    description: "Descripción de la Tienda 2",
    srcImagen: "logos/LaNacionDelTaco.svg",
  },
  3: {
    name: "Merendero Madero",
    description: "Descripción de la Tienda 2",
    srcImagen: "logos/MerenderoMadero.svg",
  },
};

const Store = ({ params }) => {
  console.log(params.storeId);
  const storeInfo = storeData[params.storeId];
  console.log(storeInfo.srcImagen);

  return (
    <main className=" min-h-screen items-center">
      <section
        id="hero"
        className="bg-footer-texture min-w-screen md:mx-auto hero pt-12 md:pt-0 min-h-screen flex items-center flex-wrap justify-center px-10 md:px-0 bg-main"
      >
        <div className="md:w-1/2 md:flex items-center justify-center hidden z-10">
          <Image
            src={storeInfo.srcImagen}
            width={400}
            height={400}
            alt={`logo ${storeInfo.name}`}
          />
        </div>
        <Eslogan nombre={storeInfo.name} />

        <div className="md:hidden flex justify-center z-10">
          <Image
            src={storeInfo.srcImagen}
            width={150}
            height={150}
            alt={`logo ${storeInfo.name}`}
          />
        </div>
      </section>
    </main>
  );
};

export default Store;
