"use client"

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  import Image from "next/image";

   
  export function LoginCard() {
    return (
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-20 place-items-center"
        >
          <Image
            src="/logos/Grupo500Noches.svg"
            width={150}
            height={150}
            alt="Grupo 500 Noches"
          />
        </CardHeader>

        <CardBody className="flex flex-col gap-4">
          <div className="h-20">
            <label class="block text-gray-700 font-bold mb-2" for="user">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>
          <div className="h-20">
            <label class="block text-gray-700 font-bold mb-2" for="password">
                Contraseña
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña"/>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth 
            onClick={() => }
          >
            Iniciar sesión
          </Button>
        </CardFooter>
      </Card>
    );
  }