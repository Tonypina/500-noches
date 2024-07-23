import * as React from 'react';

type RequestBody = {
  nombre: string
  apellido: string
  correo: string
  mensaje: string
}

interface EmailTemplateProps {
  body: RequestBody;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  body,
}) => (
  <div>
    <h3>Nombre: {body.nombre} {body.apellido}</h3>
    <h3>Correo: {body.correo}</h3>
    <h3>Mensaje: {body.mensaje}</h3>
  </div>
);
