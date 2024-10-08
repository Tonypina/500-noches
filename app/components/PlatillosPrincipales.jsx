import useStore from "./store";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "../styles-swiper/swiper.css";
import { Pagination, Navigation } from "swiper/modules";

const PlatillosPrincipales = () => {
  const { selectedStore } = useStore();
  return (
    <>
      <section className="contianer relative md:px-[8rem] h-fit flex items-center flex-wrap flex-col m-0">
        <div className="absolute h-full w-full overflow-hidden">
          <img className="h-full w-full" src={selectedStore.platillos_image} alt="Textura" />
        </div>

        {selectedStore.border_img && (
          <div className="w-full absolute">
            <img className="w-full h-28" src={selectedStore.border_img} alt="" />
          </div>
        )}
        
        <div className={`z-10 mt-16 pt-14 ${selectedStore.platillos_image === '/texturas/bg_charcoal.jpg' ? 'text-white' : 'text-black'}`}>
          <h2 className={`${selectedStore.titleFont} text-md md:text-xlg font-semibold text-center ${selectedStore.platillos_image === '/texturas/bg_charcoal.jpg' || selectedStore.platillos_image === '/texturas/brown.jpg' ? 'text-gold' : ''}`}>
            DESCUBRE NUESTROS <span className={selectedStore.colors[2]}>PLATILLOS</span> PRINCIPALES
          </h2>
          <p className="text-xs md:text-sm mt-4 text-center px-10">
            Delicias que hacen brillar nuestras noches.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 pb-14 contenedor-slides ">
          <Swiper
            modules={[Pagination]}
            effect={"coverflow"}
            pagination
            slidesPerView={3}
            spaceBetween={25}
            className="platillosEspecialesSwiper mt-8 mb-16 slide-size contenedor-slides"
          >
            {selectedStore.platillos.map((platillo, index) => (
              <SwiperSlide key={index}>
                <div className={`${selectedStore.platillos_image === "/texturas/bg_charcoal.jpg" ? "bg-[#484848]" : "bg-white"} p-4 rounded shadow bg-gray-50`}>
                  <Image
                    src={platillo.image}
                    width={400}
                    height={400}
                    alt={`Platillo ${platillo.name}`}
                  />
                  <h3 className={`${selectedStore.titleFont} text-xl font-semibold mt-2`}>
                    {platillo.name}
                  </h3>
                  <p className="text-gray-600">{platillo.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {selectedStore.border_img && (
        <div className="w-full -translate-y-20 rotate-180">
          <img className="w-full h-28" src={selectedStore.border_img} alt="" />
        </div>
      )}
    </>
  );
};

export default PlatillosPrincipales;
