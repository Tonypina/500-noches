import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <section
      id="hero"
      className=" min-w-screen md:mx-auto hero pt-12 md:pt-0 min-h-screen flex items-center flex-wrap justify-center px-10 md:px-0 bg-main  flex-col "
    >
      <div className="md:w-1/2 md:flex items-center justify-center hidden z-10 mb-10">
        <Image
          src="/logos/LogoG500NochesSilueta.svg"
          width={150}
          height={150}
          alt="Grupo 500 Noches"
        />
      </div>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#F6F7F4"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </section>
  );
};
export default Loading;
