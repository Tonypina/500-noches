import { EmailTemplate } from '../../components/EmailTemplate';

export async function POST( request ) {

    const body = await request.json()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: process.env.MAILER_HOST,
        auth: {
            user: process.env.MAILER_FROM,
            pass: process.env.MAILER_PASS,
        },
        secure: true,
    });
    
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            return Response.json({error: error}, {status: 500})
        } else {
            console.log("Server is ready to take our messages");
            return Response.json({status: 200})
        }
    });

    const mailData = {
        from: process.env.MAILER_FROM,
        to: process.env.MAILER_TO,
        subject: `Página Web: Mensaje de ${body.nombre} ${body.apellido}`,
        html: `<div>Correo: ${body.nombre}</div><p>Mensaje: ${body.mensaje}</p>`,
    }
    
    
    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            return Response.json({error: err}, {status: 500})
        } else {
            return Response.json({status: 200})
        }
    })
    
    return Response.json({status: 200})
}
