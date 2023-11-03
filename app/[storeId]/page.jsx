"use client";
import Image from "next/image";
import Eslogan from "../components/Eslogan";
import AboutUs from "../components/AboutUs";
import useStore from "../components/store";
import React, { useEffect } from "react";
import Loading from "../components/Loading";

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
    </main>
  );
};

export default Store;
