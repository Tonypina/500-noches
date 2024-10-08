"use client";

import Image from "next/image";
import Boton from "./components/Boton";
import SwiperMeet from "./components/SwiperMeet";
import Gallery from "./components/Gallery";
import VisualizadorPDF from "./components/VisualizadorPDF";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Footer from "./components/Footer";
import axios from 'axios';

export default function Home() {
  return (
    <>
      <main className=" min-h-screen items- px-2center">
        <section
          id="hero"
          className="min-w-screen md:mx-auto hero pt-12 md:pt-0 min-h-screen flex items-center flex-wrap justify-center px-10 md:px-0 bg-black"
        >
          <div className="video brightness-50 absolute">
            <video autoPlay muted loop>
              <source src="/videos/aeropuerto.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="md:w-1/2 md:flex items-center justify-center hidden flex-col z-10">
            <div className="mb-2">
              <Image
                src="/logos/LogoG500NochesSilueta.svg"
                width={250}
                height={250}
                alt="Grupo 500 Noches"
              />
            </div>
            <div className="">
              <Image
                className="inline-block"
                src="/logos/Grupo500Noches.svg"
                width={210}
                height={210}
                alt="Grupo 500 Noches"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center z-10">
            <div className="text-white text-center content-center	justify-center md:px-10 md:pr-20">
              <p className="text-md md:text-xlg mt-4">
                Cuidamos cada detalle para que tu <span className="font-bold">experiencia</span> sea un momento <span className="font-bold">inolvidable</span>.
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
          <div className="md:hidden flex justify-center z-10">
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
              Sobre<br /> Grupo 500 Noches
            </h2>
            <p className="text-main text-xs md:text-sm mt-4">
              Desde 2011, uniendo momentos.
            </p>
            <p className="text-main text-xs md:text-sm mt-4">
              Creemos en las cosas bonitas que podemos disfrutar como la plática, una canción, un café, la compañía e incluso la soledad.
            </p>
            <p className="text-main text-xs md:text-sm mt-4">
              Queremos tocar tus sentidos a través de nuestros espacios; cada detalle es importante, desde la luz de las velas, el libro que evoca los mejores versos y las canciones que recuerdan momentos especiales, sabores traídos desde el Mediterráneo, jardines que le declaran la paz a la guerra diaria y espacios llenos de magia para nunca olvidar lo imprescindible de la vida.
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
          className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap justify-center px-2 bg-[url(https://rossoft.com.mx/azul-concreto.png)]"
        >
          <h2 className="text-white text-md md:text-xlg font-semibold text-center w-full">
            Conoce a la Familia
          </h2>
          <p className="text-white text-xs md:text-sm mt-4 text-center px-10 w-full">
            Observa, escucha, celebra, disfruta… encuentra la experiencia que estás buscando.
          </p>

          <SwiperMeet />
        </section>
        <section
          id="galeria"
          className="contianer md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap px-2"
        >
          <div>
            <div className=" flex flex-col px-10">
              <p className="text-xs md:text-sm text-gold mb-3">Galería</p>
              <h2 className="text-main text-md md:text-xlg font-bold">
                Nuestra Galería
              </h2>
            </div>
            <p className="text-main text-xs md:text-sm mt-4 px-10 ">
              Escucha, brinda, deléitate, observa, encuentra la experiencia que
              estás buscando en nuestros espacios
            </p>
          </div>
          <div className="flex justify-center pt-5 px-10">
            <Gallery />
          </div>
        </section>
        <section
          id="opportunities"
          className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap"
        >
          <div className="md:w-1/2 flex flex-col px-10 ">
            <p className="text-xs md:text-sm text-gold mb-3">Oportunidades</p>
            <h2 className="text-main text-md md:text-xlg font-bold">
              Únete a nuestro equipo
            </h2>
            <p className="text-main text-xs md:text-sm mt-4">
              En <span className="text-gold">Grupo 500 Noches</span>, creemos
              firmemente en la fuerza y el potencial de cada individuo.
              Valoramos la diversidad, la creatividad y el compromiso con la
              excelencia en todo lo que hacemos. Si compartes nuestra pasión por
              la innovación y la colaboración, te invitamos a formar parte de
              nuestro equipo.
            </p>
            <Link href="https://bolsadetrabajo.grupo500noches.com/empleos" target="_blank">
              <Boton
                variante={"solid"}
                contenido={"Unirme al equipo"}
                style={"mt-10 bg-main text-white w-2/5"}
                type="scroll"
              />
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center mt-3 p-5 md:mt-0 md:p-5">
            <div className="text-main text-center">
              <Image
                src="/galeria/G500/oportunidades.jpg"
                width={800}
                height={450}
                alt="Grupo 500 Noches"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </section>

        <section id="contacto" className="hero">
          <div className="gap-0 sm:columns-2">
            <div className="container">
              <div className="relative sm:h-screen overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                  <Image
                    src="/galeria/espacio500Noches.png"
                    alt="Imagen de contacto"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Contenedor del logo */}
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center">
                  <div className="w-full flex flex-col items-center justify-center px-4 sm:mt-36 sm:px-0">
                    <div className="w-32 h-32 md:w-64 md:h-64">
                      <Image
                        src="/logos/LogoG500NochesSilueta.svg"
                        alt="Grupo 500 Noches"
                        layout="responsive"
                        width={250} // Estos valores se utilizan para calcular el aspecto de la imagen
                        height={250}
                      />
                    </div>
                    <div className="w-32 h-32 md:w-64 md:h-64 mt-10">
                      <Image
                        src="/logos/Grupo500Noches.svg"
                        alt="Grupo 500 Noches"
                        layout="responsive"
                        width={250}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container justify-center items-center px-20 py-8">
              <Formik
                initialValues={{ nombre: '', apellido: '', correo: '', mensaje: '' }}
                validate={(values) => {
                  const errors = {};
                  if (!values.correo) {
                    errors.correo = 'Required';
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
                    errors.correo = 'Dirección de correo inválida';
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {

                  await axios.post('/api/send', {
                    nombre: values.nombre,
                    apellido: values.apellido,
                    correo: values.correo,
                    mensaje: values.mensaje,
                  }).then( res => {
                    window.alert("El mensaje fue enviado")
                  }).catch( err => {

                  })
                  
                  setSubmitting(false);
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-main text-md md:text-xlg font-semibold ">
                          Queremos saber de ti
                        </h2>
                        <p className="mt-1 text-xs md:text-sm leading-6 text-second">
                          Utilice una dirección permanente donde pueda recibir correo.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label htmlFor="nombre" className="block text-xs md:text-sm leading-6 text-main">
                              Nombre
                            </label>
                            <div className="mt-2">
                              <Field
                                type="text"
                                name="nombre"
                                id="nombre"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-main shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-second sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label htmlFor="apellido" className="block text-xs md:text-sm leading-6 text-main">
                              Apellido
                            </label>
                            <div className="mt-2">
                              <Field
                                type="text"
                                name="apellido"
                                id="apellido"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-main shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-second sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label htmlFor="correo" className="block text-xs md:text-sm leading-6 text-main">
                              Correo electrónico
                            </label>
                            <div className="mt-2">
                              <Field
                                type="email"
                                id="correo"
                                name="correo"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-main shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-second sm:text-sm sm:leading-6"
                              />
                              <ErrorMessage name="correo" component="div" className="text-red-500 text-xs md:text-sm leading-6" />
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label htmlFor="mensaje" className="block text-xs md:text-sm leading-6 text-main">
                              Mensaje
                            </label>
                            <div className="mt-2">
                              <Field
                                as="textarea"
                                id="mensaje"
                                name="mensaje"
                                rows="3"
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-main shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-second sm:text-sm sm:leading-6"
                              />
                            </div>
                            <p className="mt-3 text-xs md:text-sm leading-6 text-second">
                              Escríbenos un mensaje.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                      <button
                        type="submit"
                        className="rounded-md bg-main px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-second focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-second"
                        disabled={isSubmitting}
                      >
                        Enviar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
