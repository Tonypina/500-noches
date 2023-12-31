"use client";
import Image from "next/image";
import Eslogan from "../components/Eslogan";
import AboutUs from "../components/AboutUs";
import useStore from "../components/store";
import React, { useEffect } from "react";
import Loading from "../components/Loading";
import PlatillosPrincipales from "../components/PlatillosPrincipales";
import Sucursales from "../components/Sucursales";
import ReviewCard from "../components/ReviewCard";

const Store = ({ params }) => {
  const { selectedStore, setSelectedStore } = useStore();
  useEffect(() => {
    if (!selectedStore) {
      setSelectedStore(params.storeId);
    }
  }, [selectedStore, setSelectedStore, params.storeId]);

  if (!selectedStore) {
    return <Loading />;
  }

  return (
    <main className=" min-h-screen items-center">
      <section
        id="hero"
        className="bg-footer-texture min-w-screen md:mx-auto hero pt-12 md:pt-0 min-h-screen flex items-center flex-wrap justify-center px-10 md:px-0 bg-main"
      >
        <div className="md:w-1/2 md:flex items-center justify-center hidden z-10">
          <Image
            src={selectedStore.srcImagen}
            width={400}
            height={400}
            alt={`logo ${selectedStore.name}`}
          />
        </div>
        <Eslogan />

        <div className="md:hidden flex justify-center z-10">
          <Image
            src={selectedStore.srcImagen}
            width={150}
            height={150}
            alt={`logo ${selectedStore.name}`}
          />
        </div>
      </section>
      <AboutUs />
      <PlatillosPrincipales />
      <Sucursales />
      <div className="mt-5">
        <p className="text-center text-xs md:text-sm text-gold ">Reseñas</p>
        <h2 className="text-main text-md md:text-xlg font-semibold text-center">
          ¿Qué dicen las personas sobre nosotros?
        </h2>
        <p className="text-main text-xs md:text-sm mt-4 text-center px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia
          ullam iste numquam error voluptatem labore debitis aut hic
          perspiciatis,
        </p>
        <div className="flex flex-wrap justify-center">
          <ReviewCard
            tienda={selectedStore.name}
            opinion={selectedStore.comentarios[0].comentario}
            name={selectedStore.comentarios[0].nombrePersona}
            ciudad={selectedStore.comentarios[0].tienda}
          />
          <ReviewCard
            tienda={selectedStore.name}
            opinion={selectedStore.comentarios[1].comentario}
            name={selectedStore.comentarios[1].nombrePersona}
            ciudad={selectedStore.comentarios[1].tienda}
          />
          <ReviewCard
            tienda={selectedStore.name}
            opinion={selectedStore.comentarios[2].comentario}
            name={selectedStore.comentarios[2].nombrePersona}
            ciudad={selectedStore.comentarios[2].tienda}
          />
        </div>
      </div>
    </main>
  );
};

export default Store;
