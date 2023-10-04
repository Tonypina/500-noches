import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="flex justify-center gap-1 md:gap-5 flex-wrap md:flex-nowrap	">
        <div className="flex flex-col items-center gap-1 md:gap-5">
          <Image
            className="rounded-md w-500 h-300"
            src="/galeria/tacos.png"
            width={300}
            height={300}
            alt="Tacos la nación del taco"
          />

          <Image
            className="rounded-md w-500 h-300"
            src="/galeria/sarajevoPizza.png"
            width={300}
            height={300}
            alt="Pizza Sarajevo"
          />
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-5">
          <Image
            className="rounded-md w-500 h-300"
            src="/galeria/sanJuanLeñeroTetera.png"
            width={280}
            height={280}
            alt="San Juan Leñero platillo"
          />
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-5">
          <Image
            className="rounded-md"
            src="/galeria/500NochesComida.png"
            width={300}
            height={300}
            alt="Comida 500 Noches"
          />

          <Image
            className="rounded-md"
            src="/galeria/alitasMerendero.png"
            width={300}
            height={300}
            alt="Alitas Merendero"
          />
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-5">
          <Image
            className="rounded-md"
            src="/galeria/peruanoComida.png"
            width={280}
            height={280}
            alt="Bebidas Peruano"
          />
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-5">
          <Image
            className="rounded-md"
            src="/galeria/500NochesComida2.png"
            width={300}
            height={300}
            alt="500 Noches Platillo"
          />

          <Image
            className="rounded-md"
            src="/galeria/alimento1Sarajevo.png"
            width={300}
            height={300}
            alt="Sarajevo Alimento"
          />
        </div>
      </div>
    </>
  );
};
export default Gallery;
