"use client";
import { Button } from "@nextui-org/react";

const Boton = ({ contenido, style, sectionId, type, variante }) => {
  const scrollToSection = (sectionId) => {
    console.log(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      variant={variante}
      radius="lg"
      className={`text-xsm md:text-sm ${style} hover:bg-main hover:text-white hover:border-white`}
      onClick={
        type == "scroll"
          ? () => scrollToSection(sectionId)
          : () => {
              console.log("hola");
            }
      }
    >
      {contenido}
    </Button>
  );
};

export default Boton;
