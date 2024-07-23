"use client";
import Boton from "./Boton";
import useStore from "./store";

const Eslogan = () => {
  const { selectedStore } = useStore();

  return (
    <div className="md:w-1/2 flex flex-col items-center justify-center z-10">
      <div className="text-white text-center content-center	justify-center md:px-10 md:pr-20">
        <p className="text-sm md:text-lg "></p>
        <h1 className={`${selectedStore.titleFont} text-md md:text-xlg mt-4`}>
          {selectedStore.name}
        </h1>
        <p className={`${selectedStore.textFont} text-sm md:text-lg mt-4`}>{selectedStore.eslogan}</p>
      </div>
      <Boton
        variante={"solid"}
        contenido={"Descubrir"}
        style={"mt-10 bg-main text-white"}
        type="scroll"
        sectionId={"about-us"}
      />
    </div>
  );
};
export default Eslogan;
