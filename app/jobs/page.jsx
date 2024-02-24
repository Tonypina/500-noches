"use client"

import {
  Accordion, 
  AccordionItem, 
  useDisclosure, 
  Modal, 
  ModalHeader,
  ModalContent,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import useVacants from "../hooks/useVacants"
import parse from 'html-react-parser';
import { Button } from "@nextui-org/react";

import { useState } from "react";

export default function Jobs() {

  const {
    vacants,
    loading
  } = useVacants()

  const [application, setApplication] = useState({
    name: "",
    contact: "",
    email: "",
    cv: ""
  })

  const [applicationPosition, setApplicationPosition] = useState({
    position: '',
    location: '',
    restaurant: '',
  }) 

  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const AccordionTitle = (vacant) => {

    return (
      <div className="grid grid-cols-4">
        <p className="mr-5"><span className="font-semibold">Puesto: </span>{vacant.position}</p>
        <p className="mr-5"><span className="font-semibold">Ubicación: </span>{vacant.location}</p>
        <p className="mr-5"><span className="font-semibold">Restaurante: </span>{vacant.restaurant}</p>
      </div>
    )    
  }

  const handleInputValue = (index) => {
    return application[index]
  }

  const handleInputOnChange = (e, index) => {
    if (index === "cv")
      setApplication({...application, [index]: e.target.files?.[0]})
    else
      setApplication({...application, [index]: e.target.value})
  }

  const onSubmit = () => {

    const formData = new FormData()
    
    formData.append('name', application.name)
    formData.append('contact', application.contact)
    formData.append('email', application.email)
    formData.append('cv', application.cv)
    formData.append('position', applicationPosition.position)
    formData.append('location', applicationPosition.location)
    formData.append('restaurant', applicationPosition.restaurant)

    
    fetch('api/application', {
      method: 'POST',
      body: formData
    }).then(res => console.log(res))
      .catch(e => console.log(e))
  }

  return (
    <main className="p-20">
      <Modal className="p-6" isOpen={isOpen} onOpenChange={onOpenChange} title="Nueva Vacante">
        <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Aplicar Ahora!
            </ModalHeader>
            
            <Input
              className="mb-4"
              autoFocus
              variant="bordered"
              label="Nombre"
              placeholder="Ingrese su nombre"
              value={handleInputValue("name")}
              onChange={(e) => handleInputOnChange(e, "name")}
            />
            <Input
              className="mb-4"
              autoFocus
              variant="bordered"
              label="Teléfono"
              placeholder="Ingrese un número de contacto"
              value={handleInputValue("contact")}
              onChange={(e) => handleInputOnChange(e, "contact")}
            />
            <Input
              type="email"
              className="mb-4"
              autoFocus
              variant="bordered"
              label="E-mail"
              placeholder="Ingrese su correo electrónico"
              value={handleInputValue("email")}
              onChange={(e) => handleInputOnChange(e, "email")}
            />
            <div className="flex flex-col pl-4 py-2 border-2 border-stone-500	rounded-xl">
              <label className="text-[12px]" htmlFor="cv">CV</label>
              <input className="mt-1 text-small" id="cv" type="file" onChange={(e) => {
                handleInputOnChange(e, "cv")
              }}/>
            </div>
            <ModalFooter>
              <Button color="danger" onClick={() => {
                setApplication({
                  name: '',
                  contact: '',
                  email: '',
                  cv: ''
                });
                
                onClose()
              }}>Cancelar</Button>
              <Button onClick={() => {
                onSubmit()
                setApplication({
                  name: '',
                  contact: '',
                  email: '',
                  cv: ''
                });
                onClose()
              }}>Mandar Solicitud</Button>
            </ModalFooter>
          </>
        )}
        </ModalContent>
      </Modal>

      <h2 className="text-main text-md md:text-lg font-bold">
        Explora las <span className="text-gold">oportunidades</span> de trabajo que ofrecemos...
      </h2>

      {!loading && (
        <div className="mt-10 px-10">
          <Accordion variant="splitted">
            {vacants.map((vacant, index) => (
              <AccordionItem key={index}
                aria-label={`Accordion ${index + 1}`}
                title={
                  <AccordionTitle position={vacant.position} location={vacant.location} restaurant={vacant.restaurant}/>
                }>
                  {parse(vacant.description)}

                  <Button color="primary" className="font-semibold" onClick={() => {
                    setApplicationPosition({
                      position: vacant.position,
                      location: vacant.location,
                      restaurant: vacant.restaurant,
                    })
                    onOpen()
                  }}>Aplicar ahora!</Button>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}

    </main>
  )
}