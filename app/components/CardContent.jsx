import Boton from "./Boton";

const CardContent = ({ logo, imagen }) => {
  return (
    <>
      <div className="bg-white h-full max-h-screen flex flex-col justify-between items-center py-10">
        <div className="mt-0 mb-auto">{imagen}</div>
        <div className="my-auto">{logo}</div>
        <Boton
          className="mt-auto"
          variante={"bordered"}
          contenido={"Conocer Más"}
          style={"bg-white text-main"}
        />
      </div>
    </>
  );
};

export default CardContent;
