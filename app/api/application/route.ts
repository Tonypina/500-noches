import { Resend } from 'resend'
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL
const toEmail = process.env.RESEND_TO_EMAIL

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const name = data.get('name')
    const contact = data.get('contact')
    const email = data.get('email')
    const file = data.get('cv')
    const cv = file as File
    const position = data.get('position')
    const location = data.get('location')
    const restaurant = data.get('restaurant')
    
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: `${name} aplicó a una posición!`,
            html: `
                <div>
                    <h1>${name} aplicó a la posición de ${position}</h1>
                    <h3>Datos del aplicante</h3>
                    <p><span className='font-semibold'>Nombre: </span>${name}</p>
                    <p><span className='font-semibold'>Teléfono: </span>${contact}</p>
                    <p><span className='font-semibold'>E-mail: </span>${email}</p>
                
                    <h3>Vacante a la que aplicó</h3>
                    <p><span className='font-semibold'>Posición: </span>${position}</p>
                    <p><span className='font-semibold'>Ubicación: </span>${location}</p>
                    <p><span className='font-semibold'>Restaurante: </span>${restaurant}</p>
                </div>
            `,
            attachments: [
                {
                    filename: cv.name,
                    content: Buffer.from(await cv.arrayBuffer())
                }
            ]
        });
        
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}