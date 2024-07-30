import Image from "next/image";
import useStore from "./store";

const AboutUs = () => {
  const { selectedStore } = useStore();
  return (
    <section className="contianer overflow-hidden">
      {selectedStore.plants && (
        <>
          <div className="hidden md:block relative">
            <img className="absolute -start-64 translate-y-28 scale-75 rotate-45" src={selectedStore.plants[0]} alt="plant1.png" />
            <img className="absolute -right-10 -top-[3.75rem]  scale-80" src={selectedStore.plants[1]} alt="plant2.png" />
          </div>
        </>
      )}
      {selectedStore.buho && (
        <>
          <div className="hidden md:block relative">
            <img className="absolute -left-52 -translate-y-10 scale-[0.65]" src={selectedStore.buho[0]} alt="buho1.png" />
            <img className="absolute -right-2 top-5" src={selectedStore.buho[1]} alt="buho2.png" />
            <img className="absolute -left-16 translate-y-[45vh]" src={selectedStore.buho[1]} alt="buho3.png" />
            <img className="absolute translate-x-[40vw] translate-y-[65vh]" src={selectedStore.buho[1]} alt="buho3.png" />
          </div>
        </>
      )}
      <div className="md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap">
        <div className="md:w-1/2 flex flex-col px-10 z-10">
          <p className="text-xs md:text-sm text-gold mb-3">Sobre Nosotros</p>
          <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-bold`}>
            {selectedStore.name}
          </h2>
          <p className="text-xs md:text-sm mt-4">
            {selectedStore.descripcion}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-3 p-5 md:mt-0 md:p-5 z-10">
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
      </div>
    </section>
  );
};
export default AboutUs;
