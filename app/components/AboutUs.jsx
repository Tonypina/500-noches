import Image from "next/image";
import useStore from "./store";

const AboutUs = () => {
  const { selectedStore } = useStore();
  return (
    <section className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap">
      <div className="md:w-1/2 flex flex-col px-10 ">
        <p className="text-xs md:text-sm text-gold mb-3">Sobre Nosotros</p>
        <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-bold`}>
          {selectedStore.name}
        </h2>
        <p className="text-xs md:text-sm mt-4">
          {selectedStore.descripcion}
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-3 p-5 md:mt-0 md:p-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-full ">
            <Image
              src={selectedStore.galeria1}
              width={800}
              height={450}
              alt="Grupo 500 Noches"
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-full ">
            <Image
              src={selectedStore.galeria2}
              width={800}
              height={450}
              alt="Grupo 500 Noches"
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-full ">
            <Image
              src={selectedStore.galeria3}
              width={800}
              height={450}
              alt="Grupo 500 Noches"
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-full ">
            <Image
              src={selectedStore.galeria4}
              width={800}
              height={450}
              alt="Grupo 500 Noches"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
