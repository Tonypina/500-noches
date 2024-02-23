"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import CardContent from "./CardContent";
import "../styles-swiper/swiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

const SwiperMeet = () => {
  return (
    <div className="contenedor-slides mx-auto mt-10 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 80,
          modifier: 1,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]} // Habilitar la navegación
        className="mySwiper slide-size contenedor-slides"
      >
        <SwiperSlide className="card-shadow rounded-lg">
          {/* Cafe 500 Noches */}
          <CardContent
            id={"cafe-500-noches"}
            imagen={
              <Image
                src={"/restaurantes/500Noches/espacio500Noches.png"}
                width={270}
                height={250}
                alt="logo Cafe 500 Noches "
              />
            }
            logo={
              <Image
                src="/logos/500Noches.svg"
                width={100}
                height={100}
                alt="Logo 500 noches"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide className="card-shadow">
          {/* Merendero Madero */}
          <CardContent
            id={"merendero-madero"}
            imagen={
              <Image
                src={"/restaurantes/merendero/espacioMerenderoMadero.png"}
                width={270}
                height={250}
                alt="logo San Juan Leñero"
              />
            }
            logo={
              <Image
                src="/logos/MerenderoMadero.svg"
                width={100}
                height={100}
                alt="Logo merendero Madero"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide className="card-shadow">
          {/* Peruano */}
          <CardContent
            id={"peruano"}
            imagen={
              <Image
                src={"/restaurantes/Peruano/espacioPeruano.png"}
                width={270}
                height={250}
                alt="logo San Juan Leñero"
              />
            }
            logo={
              <Image
                src="/logos/Peruano.svg"
                width={100}
                height={100}
                alt="logo Peruano"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide className="card-shadow">
          {/* San Juan Leñero */}
          <CardContent
            id={"san-juan-leñero"}
            imagen={
              <Image
                src={"/restaurantes/sanJuanLeñero/mesa.png"}
                width={270}
                height={250}
                alt="logo San Juan Leñero"
              />
            }
            logo={
              <Image
                src="/logos/SanJuanLeñero.svg"
                width={100}
                height={100}
                alt="logo San Juan Leñero"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide className="card-shadow">
          {/* Sarajevo */}
          <CardContent
            id={"sarajevo"}
            imagen={
              <Image
                src={"/restaurantes/sarajevo/espacioSarajevo.png"}
                width={220}
                height={220}
                alt="logo San Juan Leñero"
              />
            }
            logo={
              <Image
                src="/logos/Sarajevo.svg"
                width={90}
                height={90}
                alt="Logo Sarajevo"
              />
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperMeet;
