"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Boton = ({ contenido, style, sectionId, type, variante, storeId }) => {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectStore = (storeId) => {
    router.push(`/${storeId}`);
  };

  return (
    <Button
      variant={variante}
      radius="lg"
      className={`text-xsm md:text-sm ${style} hover:bg-main hover:text-white hover:border-white`}
      onClick={
        type == "scroll"
          ? () => scrollToSection(sectionId)
          : type == "tienda"
          ? () => {
              redirectStore(storeId);
            }
          : () => {
              console.log("---");
            }
      }
    >
      {contenido}
    </Button>
  );
};

export default Boton;
