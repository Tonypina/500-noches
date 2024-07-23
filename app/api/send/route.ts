import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST( request: Request ) {

    const body = await request.json()

    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Página Web Grupo 500 Noches <'+process.env.RESEND_FROM_EMAIL+'>',
                to: [process.env.RESEND_TO_EMAIL],
                subject: 'Página Web: Mensaje de '+body.nombre+ " " +body.apellido+".",
                html: `<div>Correo: ${body.correo}</div><p>Mensaje: ${body.mensaje}</p>`
                // react: EmailTemplate({ body: body }),
            }),
        });

        if (res.ok) {
            const data = await res.json()
            return Response.json(data)
        }

        return Response.json({response: res}, {status: 500})

    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
