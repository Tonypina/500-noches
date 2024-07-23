import Boton from "./Boton";

const CardContent = ({ logo, imagen, id }) => {
  return (
    <>
      <div className="bg-white h-full px-0 pt-0 max-h-screen flex flex-col justify-between items-center py-10">
        <div className="mt-0 mx-0 mb-auto w-full">{imagen}</div>
        <div className="my-auto">{logo}</div>
        <Boton
          storeId={id}
          type={"tienda"}
          className="mt-auto"
          variante={"bordered"}
          contenido={"Descubrir"}
          style={"bg-white text-main"}
        />
      </div>
    </>
  );
};

export default CardContent;
