"use client";
import React, { useState } from "react";
import useStore from "./store";
import Boton from "./Boton";
import backImageReserv from "../../public/texturas/reservarFondo.png";
import ReviewCard from "./ReviewCard";

const Sucursales = () => {
  const { selectedStore } = useStore();

  const primer = selectedStore.tabs[0];
  const [activeTab, setActiveTab] = useState(primer.id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section
        id="#sucursales"
        className="container mx-auto px-4 md:px-8 w-full pb-10 md:pb-20 flex-wrap flex-col"
      >
        <div>
          <p className="text-center text-xs md:text-sm text-gold mb-3">
            Sucursales
          </p>
          <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-semibold text-center`}>
            DESCUBRE NUESTRAS <span className={`${selectedStore.colors[2]}`}>SUCURSALES</span>
          </h2>
        </div>
        <div className={`mb-4 p-3 w-full bg-white`}>
          <ul
            className="flex flex-wrap justify-center w-full text-xs md:text-sm text-center md:overflow-x-hidden"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            {selectedStore.tabs.map((tab) => (
              <li className="mr-2 mb-2" role="presentation" key={tab.id}>
                <button
                  className={`${selectedStore.tabs_style.tabs_border} inline-block p-3 text-xs md:text-sm ${
                    activeTab === tab.id
                      ? selectedStore.tabs_style.active_tab
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
        <div className="mb-4 bg-white" id="default-tab-content">
          {selectedStore.tabs.map((tab) => (
            // Mapa

            <div
              key={tab.id}
              className={`${
                activeTab === tab.id ? "" : "hidden"
              } rounded-lg bg-gray-50 dark:bg-gray-800 ${selectedStore.tabs_style.map_border}`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              {/* Contenido de la pestaña */}
              <div className={`md:px-[2rem] min-h-3/4 flex flex-col md:flex-row items-center py-10`}>
                <div className="w-full md:flex md:flex-col bg-gray-50 px-5">
                  <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-bold`}>
                    ¿<span className={`${selectedStore.colors[2]}`}>DONDE</span> NOS UBICAMOS?
                  </h2>
                  <p className="text-xs md:text-sm mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    mollitia ullam iste numquam error voluptatem labore debitis
                    aut hic perspiciatis, qui similique in sunt facere
                    voluptates laboriosam cum repellendus pariatur dicta modi
                    doloremque. Pariatur alias minima officiis tempora
                    veritatis, quo ipsa aut sit suscipit inventore nisi animi
                    quisquam dolores at.
                  </p>
                </div>
                <div className="w-full flex justify-center mt-3 md:mt-0 px-5">
                  <div className={`${selectedStore.tabs_style.map_border} text-center container w-full`}>
                    <iframe
                      src={tab.map}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* Menú */}
              <div>
                <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-semibold text-center`}>
                  CONOCE NUESTRO <span className={`${selectedStore.colors[2]}`}>MENU</span>
                </h2>
                <p className="text-xs md:text-sm mt-4 text-center px-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum, repudiandae.
                </p>
              </div>
              <div className="flex items-center justify-center  px-8">
                <div className="w-full flex justify-center items-center h-screen ">
                  <embed
                    src="https://rossoft.com.mx/pdf/G500-Folleto-SucursalesC.pdf"
                    //src={selectedStore.menu}
                    type="application/pdf"
                    className="w-full md:w-5/5 h-4/5 "
                  />
                </div>
              </div>
              {/* Reservar */}

              <div
                style={{
                  backgroundImage: `url(${backImageReserv.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="relative flex md:flex-row items-center w-full"
              >
                <div
                  className="bg-white bg-opacity-80 rounded-lg flex flex-col items-center p-5 m-5 w-full md:w-auto md:max-w-md"
                  style={{
                    opacity: "0.8",
                  }}
                >
                  <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-semibold text-center`}>
                    <span className={`${selectedStore.colors[2]}`}>RESERVA</span> AHORA
                  </h2>
                  <p className=" text-xs md:text-sm mt-4 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam nam repellendus ducimus, corporis officiis rerum qui
                    sapiente assumenda minima explicabo!
                  </p>

                  <Boton
                    variante={"solid"}
                    contenido={"Reservar"}
                    style={"mt-10 bg-main text-white"}
                    type="scroll"
                    sectionId={"about-us"}
                  />
                </div>
                {/* Esta div actúa como un contenedor de relleno en pantallas más grandes para empujar el recuadro a la izquierda */}
                <div className="flex-grow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Sucursales;
