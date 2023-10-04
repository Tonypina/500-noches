import Image from "next/image";
import Boton from "./components/Boton";
import SwiperMeet from "./components/SwiperMeet";
import Gallery from "./components/Gallery";
import VisualizadorPDF from "./components/VisualizadorPDF";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen items-center">
        <section
          id="hero"
          className="min-w-screen md:mx-auto bg-black hero pt-12 md:pt-0 min-h-screen flex items-center flex-wrap justify-center px-10 md:px-0"
        >
          <div className="md:w-1/2 md:flex items-center justify-center hidden">
            <Image
              src="/logos/LogoG500NochesSilueta.svg"
              width={250}
              height={250}
              alt="Grupo 500 Noches"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center ">
            <div className="text-white text-center content-center	justify-center md:px-10 md:pr-20">
              <p className="text-sm md:text-lg ">
                En cada Rincón, en cada plato
              </p>
              <p className="text-md md:text-xlg mt-4 font-bold">
                Explora un mundo de sabores y<br />
                Experiencias únicas
              </p>
              <p className="text-sm md:text-lg mt-4">
                Cada bocado es un paso hacia la exploración
                <br />
                de lo desconocido
              </p>
            </div>
            <Boton
              variante={"solid"}
              contenido={"Conocer más"}
              style={"mt-10 bg-main text-white"}
              type="scroll"
              sectionId={"about-us"}
            />
          </div>
          <div className="md:hidden flex justify-center ">
            <Image
              src="/logos/LogoG500NochesSilueta.svg"
              width={150}
              height={150}
              alt="Grupo 500 Noches"
            />
          </div>
        </section>
        <section
          id="about-us"
          className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap"
        >
          <div className="md:w-1/2 flex flex-col px-10 ">
            <p className="text-xs md:text-sm text-gold mb-3">Bienvenid@</p>
            <h2 className="text-main text-md md:text-xlg font-bold">
              Sobre Nosotros <br /> Grupo 500 Noches
            </h2>
            <p className="text-main text-xs md:text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              mollitia ullam iste numquam error voluptatem labore debitis aut
              hic perspiciatis, qui similique in sunt facere voluptates
              laboriosam cum repellendus pariatur dicta modi doloremque.
              Pariatur alias minima officiis tempora veritatis, quo ipsa aut sit
              suscipit inventore nisi animi quisquam dolores at.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-3 p-5 md:mt-0 md:p-5">
            <div className="text-main text-center">
              <Image
                src="/espacio-500-chiapas.png"
                width={800}
                height={450}
                alt="Grupo 500 Noches"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </section>
        <section
          id="conoce-la-familia"
          className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap justify-center px-2"
        >
          <h2 className="text-main text-md md:text-xlg font-bold text-center">
            Conoce a la Familia
          </h2>
          <p className="text-main text-xs md:text-sm mt-4 text-center px-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            repudiandae. Qui tempore, cum in assumenda eius laboriosam? Tempore
            suscipit, dicta, error laborum iure in nobis ullam ipsa quaerat odio
            repudiandae.
          </p>

          <SwiperMeet />
        </section>
        <section
          id="galeria"
          className="contianer s md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap justify-center px-2"
        >
          <div>
            <div className="md:w-1/2 flex flex-col px-10">
              <p className="text-xs md:text-sm text-gold mb-3">Galería</p>
              <h2 className="text-main text-md md:text-xlg font-bold">
                Nuestra Galería Especial
              </h2>
            </div>
            <p className="text-main text-xs md:text-sm mt-4 px-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              repudiandae. Qui tempore, cum in assumenda eius laboriosam?
              Tempore suscipit, dicta, error laborum iure in nobis ullam ipsa
              quaerat odio repudiandae.
            </p>
          </div>
          <div className="flex justify-center pt-5 px-10">
            <Gallery />
          </div>
        </section>
        <section
          id="directorio"
          className="contianer md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap justify-center px-2"
        >
          <h2 className="text-main text-md md:text-xlg font-bold text-center">
            Conoce a la Familia
          </h2>
          <p className="text-main text-xs md:text-sm mt-4 text-center px-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            repudiandae. Qui tempore, cum in assumenda eius laboriosam? Tempore
            suscipit, dicta, error laborum iure in nobis ullam ipsa quaerat odio
            repudiandae.
          </p>
          <VisualizadorPDF />
        </section>
      </main>
    </>
  );
}
