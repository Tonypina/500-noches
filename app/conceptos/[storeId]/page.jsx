"use client";
import Image from "next/image";
import Eslogan from "../../components/Eslogan";
import AboutUs from "../../components/AboutUs";
import useStore from "../../components/store";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import PlatillosPrincipales from "../../components/PlatillosPrincipales";
import Sucursales from "../../components/Sucursales";
import ReviewCard from "../../components/ReviewCard";
import Footer from "../../components/Footer";

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
    <>
      <main className={`min-h-screen ${selectedStore.colors[1]} bg-[#F0F0F0] items-center ${selectedStore.textFont}`}>
        <section
          id="hero"
          className={`min-w-screen md:mx-auto hero pt-12 md:pt-0 min-h-screen flex items-center flex-wrap justify-center px-10 md:px-0`}
        >
          <div className="h-full content-bottom absolute overflow-hidden">
            <div className="h-full w-full bg-black opacity-70 absolute z-10"></div>
            <img className="-translate-y-60 w-screen" src={selectedStore.hero_image} alt="Imagen" />
          </div>
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
        {selectedStore.border_img && (
          <div className="z-30 w-full absolute -translate-y-20 rotate-180">
            <img className="w-full h-28" src={selectedStore.border_img} alt="" />
          </div>
        )}
        <AboutUs id="about-us"/>
        <PlatillosPrincipales />
        <Sucursales />
        <div className="mt-5 h-fit relative">
          <div className="h-full w-full absolute overflow-hidden">
            {selectedStore.comentarios_image === "/texturas/195.jpg" && 
              <div className="h-full w-full bg-black opacity-30 absolute z-10"></div>
            }
            {selectedStore.border_img && (
              <div className="w-screen absolute">
                <img className="w-full h-28" src={selectedStore.border_img} alt="" />
              </div>
            )}
            <div className="w-screen">
              <img className="w-full" src={selectedStore.comentarios_image} alt="Fondo de comentarios" />
            </div>
          </div>
          <div className="z-10 relative py-20">
            <p className="text-center text-xs md:text-sm text-gold">Reseñas</p>
            <h2 className={`${selectedStore.titleFont} ${selectedStore.comentarios_image === "/texturas/195.jpg" ? "text-gold" : ""} text-md md:text-xlg font-semibold text-center`}>
              ¿QUE DICEN LAS <span className={`${selectedStore.colors[2]}`}>PERSONAS</span> SOBRE <span className={`${selectedStore.colors[3]}`}>NOSOTROS</span>?
            </h2>
            <p className={`${selectedStore.comentarios_image === "/texturas/195.jpg" ? "text-white" : ""} text-xs md:text-sm mt-4 text-center px-10`}>
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
        </div>
      </main>
      <Footer tiendaSeleccionada={selectedStore.name} />
    </>
  );
};

export default Store;
