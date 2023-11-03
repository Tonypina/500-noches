import useStore from "./store";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "../styles-swiper/swiper.css";
import { Pagination } from "swiper/modules";

const PlatillosPrincipales = () => {
  const { selectedStore } = useStore();
  return (
    <section className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap flex-col">
      <div>
        <h2 className="text-main text-md md:text-xlg font-semibold text-center">
          Descubre Nuestros Principales Platillos
        </h2>
        <p className="text-main text-xs md:text-sm mt-4 text-center px-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
          repudiandae.
        </p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-8 slide-size contenedor-slides"
        >
          <SwiperSlide>
            <div className="p-4 border rounded shadow">
              <Image
                src={selectedStore.platillo1}
                width={400}
                height={400}
                alt={`logo ${selectedStore.name}`}
              />
              <h3 className="text-xl font-semibold mt-2">
                {selectedStore.name}
              </h3>
              <p className="text-gray-600">{selectedStore.descripcion}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 border rounded shadow">
              <Image
                src={selectedStore.platillo1}
                width={400}
                height={400}
                alt={`logo ${selectedStore.name}`}
              />
              <h3 className="text-xl font-semibold mt-2">
                {selectedStore.name}
              </h3>
              <p className="text-gray-600">{selectedStore.descripcion}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 border rounded shadow">
              <Image
                src={selectedStore.platillo1}
                width={400}
                height={400}
                alt={`logo ${selectedStore.name}`}
              />
              <h3 className="text-xl font-semibold mt-2">
                {selectedStore.name}
              </h3>
              <p className="text-gray-600">{selectedStore.descripcion}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 border rounded shadow">
              <Image
                src={selectedStore.platillo1}
                width={400}
                height={400}
                alt={`logo ${selectedStore.name}`}
              />
              <h3 className="text-xl font-semibold mt-2">
                {selectedStore.name}
              </h3>
              <p className="text-gray-600">{selectedStore.descripcion}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 border rounded shadow">
              <Image
                src={selectedStore.platillo1}
                width={400}
                height={400}
                alt={`logo ${selectedStore.name}`}
              />
              <h3 className="text-xl font-semibold mt-2">
                {selectedStore.name}
              </h3>
              <p className="text-gray-600">{selectedStore.descripcion}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 border rounded shadow">
              <Image
                src={selectedStore.platillo1}
                width={400}
                height={400}
                alt={`logo ${selectedStore.name}`}
              />
              <h3 className="text-xl font-semibold mt-2">
                {selectedStore.name}
              </h3>
              <p className="text-gray-600">{selectedStore.descripcion}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PlatillosPrincipales;
