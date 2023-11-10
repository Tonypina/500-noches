"use client";
import React, { useState } from "react";
import useStore from "./store";
import Image from "next/image";

const Sucursales = () => {
  const { selectedStore } = useStore();

  const primer = selectedStore.tabs[0];
  const [activeTab, setActiveTab] = useState(primer.id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap flex-col">
        <div>
          <p className="text-center text-xs md:text-sm text-gold mb-3">
            Sucursales
          </p>
          <h2 className="text-main text-md md:text-xlg font-semibold text-center">
            Descubre Nuestras Sucursales
          </h2>
        </div>
        <div className="mb-4 border p-3 border-second   rounded-lg w-full bg-gray-50">
          <ul
            className="flex justify-start w-full text-xs md:text-sm text-center "
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            {selectedStore.tabs.map((tab) => (
              <li className="mr-2" role="presentation" key={tab.id}>
                <button
                  className={`inline-block p-4 border-1 rounded-t-lg rounded-lg ${
                    activeTab === tab.id
                      ? "border-main bg-second text-white"
                      : "border-second"
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                  id={`${tab.id}-tab`}
                  data-tabs-target={tab.id}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="default-tab-content">
          {selectedStore.tabs.map((tab) => (
            // Mapa
            <div
              key={tab.id}
              className={`${
                activeTab === tab.id ? "" : "hidden"
              }  rounded-lg bg-gray-50 dark:bg-gray-800`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              {/* Contenido de la pestaña */}
              <div className="  md:px-[2rem] min-h-3/4 flex items-center py-10 flex-wrap">
                <div className="md:w-1/2 flex flex-col bg-gray-50 px-5">
                  <h2 className="text-main text-md md:text-xlg font-bold">
                    ¿Dónde nos Ubicamos?
                  </h2>
                  <p className="text-main text-xs md:text-sm mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    mollitia ullam iste numquam error voluptatem labore debitis
                    aut hic perspiciatis, qui similique in sunt facere
                    voluptates laboriosam cum repellendus pariatur dicta modi
                    doloremque. Pariatur alias minima officiis tempora
                    veritatis, quo ipsa aut sit suscipit inventore nisi animi
                    quisquam dolores at.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-3 p-5 md:mt-0 md:p-5">
                  <div className="text-main text-center container">
                    <iframe
                      src={tab.map}
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Menú */}

              <div>
                <h2 className="text-main text-md md:text-xlg font-semibold text-center">
                  Conoce Nuestro Menú
                </h2>
                <p className="text-main text-xs md:text-sm mt-4 text-center px-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum, repudiandae.
                </p>
              </div>
              <div className="flex items-center justify-center  px-8">
                <div className="w-full flex justify-center items-center h-screen ">
                  <embed
                    src="http://localhost:3000/pdf/G500-Folleto-SucursalesC.pdf"
                    type="application/pdf"
                    className="w-full md:w-5/5 h-4/5 "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Sucursales;
