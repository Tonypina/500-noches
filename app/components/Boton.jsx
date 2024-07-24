"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useStore from "./store";

const Boton = ({ contenido, style, sectionId, type, variante, storeId }) => {
  const router = useRouter();
  const { setSelectedStore } = useStore();

  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectStore = () => {
    setSelectedStore(storeId);
    router.push(`/conceptos/${storeId}`);
  };

  const handleClick =
    type === "scroll"
      ? scrollToSection
      : type === "tienda"
      ? redirectStore
      : () => console.log("---");

  return (
    <Button
      variant={variante}
      radius="lg"
      className={`text-xsm md:text-sm ${style} hover:bg-main hover:text-white hover:border-white`}
      onClick={handleClick}
    >
      {contenido}
    </Button>
  );
};

export default Boton;
