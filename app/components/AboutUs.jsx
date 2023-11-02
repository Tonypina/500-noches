import Image from "next/image";
import useStore from "./store";

const AboutUs = () => {
  const { selectedStore } = useStore();
  return (
    <section
      id="about-us"
      className="contianer  md:px-[8rem] min-h-3/4 flex items-center py-20 flex-wrap"
    >
      <div className="md:w-1/2 flex flex-col px-10 ">
        <p className="text-xs md:text-sm text-gold mb-3">Sobre Nosotros</p>
        <h2 className="text-main text-md md:text-xlg font-bold">
          Sobre Nosotros <br /> Grupo 500 Noches
        </h2>
        <p className="text-main text-xs md:text-sm mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia
          ullam iste numquam error voluptatem labore debitis aut hic
          perspiciatis, qui similique in sunt facere voluptates laboriosam cum
          repellendus pariatur dicta modi doloremque. Pariatur alias minima
          officiis tempora veritatis, quo ipsa aut sit suscipit inventore nisi
          animi quisquam dolores at.
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
  );
};
export default AboutUs;
