"use client"

import {Accordion, AccordionItem} from "@nextui-org/react";
import useVacants from "../hooks/useVacants"

export default function Jobs() {

  const {
    vacants,
    loading
  } = useVacants()

  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
    <main className="p-20">

      <h2 className="text-main text-md md:text-lg font-bold">
        Explora las <span className="text-gold">oportunidades</span> de trabajo que ofrecemos...
      </h2>

      {!loading && (
        <div className="mt-10">
          <Accordion variant="splitted">
            {vacants.map((vacant, index) => (
              <AccordionItem key={index}
                aria-label={`Accordion ${index + 1}`}
                title={vacant.position}>
                  {vacant.description}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}

    </main>
  )
}