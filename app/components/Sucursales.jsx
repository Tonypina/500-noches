import React, { useState } from "react";
import useStore from "./store";
import backImageReserv from "../../public/texturas/reservarFondo.png";
import Menu from "./Menu";
import OpenTableWidget from "./OpenTableWidget"
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
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
      <section
        id="#sucursales"
        className="container mx-auto px-4 mt-20 md:px-8 w-full pb-10 md:pb-20 flex-wrap flex-col"
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
              <div className={`md:px-[2rem] min-h-3/4 flex flex-col items-center py-10`}>
                <div className="w-full justify-center flex bg-gray-50 px-5 md:pb-10">
                  <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-bold`}>
                    ¿<span className={`${selectedStore.colors[2]}`}>DÓNDE</span> NOS UBICAMOS?
                  </h2>
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
                  CONOCE NUESTRO <span className={`${selectedStore.colors[2]}`}>MENÚ</span>
                </h2>
              </div>
              <div className="flex items-center justify-center  px-8">
                <Menu folderPath={selectedStore.menuSrc + "/" + tab.id}/>
              </div>
              {/* Reservar */}

              <div
                style={{
                  backgroundImage: `url(${backImageReserv.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="relative flex flex-wrap md:flex-nowrap md:flex-row items-center justify-center w-full"
              >
                <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
                <div
                  className="bg-white bg-opacity-80 rounded-lg flex flex-col justify-center items-center p-5 m-5 w-full md:w-auto md:max-w-md"
                  style={{
                    opacity: "0.8",
                  }}
                >
                  <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-semibold text-center`}>
                    <span className={`${selectedStore.colors[2]}`}>PONTE EN</span> CONTACTO
                  </h2>
                  <div className="flex">
                    <MapPin className="flex-col" size={18} />
                    <p className="flex-col ml-2">{tab.direction}</p>
                  </div>
                  <div className="flex">
                    <Mail className="flex-col" size={18} />
                    <p className="flex-col ml-2">{tab.mail}</p>
                  </div>
                  <div className="flex">
                    <Phone className="flex-col" size={18} />
                    <p className="flex-col ml-2">{tab.phone}</p>
                  </div>
                  <hr className="border-t border-gold my-4 w-full" />
                  <div className="text-sm md:text-base flex justify-around gap-10 mb-6 ">
                    <Link
                      href={`${tab.facebook}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook size={24} className="duration-300 hover:scale-110" />
                    </Link>
                    <Link
                      href={`${tab.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram size={24} className="duration-300 hover:scale-110" />
                    </Link>
                    {tab.tiktok !== "" ? (
                      <>
                        <Link
                          href={`${tab.tiktok}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image 
                            src={"/logos/tik-tok.png"} 
                            width={24} 
                            height={24}
                            className="duration-300 hover:scale-110"
                          />
                        </Link>
                      </>
                    ) : null}
                  </div>
                </div>
                {tab.openTableSrc ? (
                  <div className="z-20 flex flex-col items-center w-full h-full md:translate-y-20">
                    <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-semibold text-center`}>
                      <span className={`${selectedStore.colors[3]}`}>RESERVA</span> AHORA
                    </h2>
                    <OpenTableWidget tabId={tab.id} openTableSrc={tab.openTableSrc}/>
                  </div>
                ) : null}
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
