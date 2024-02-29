import type  { NextAuthOptions } from 'next-auth'
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "../../../../lib/prisma";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Correo:",
                    type: "text",
                    placeholder: "ejemplo@email.com"
                },
                password: {
                    label: "Contraseña:",
                    type: "password"
                }
            },
            
            async authorize(credentials, req) {
                // Aquí tengo que traer la información del usuario                

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.email
                    }
                });

                if (user != null) {

                    var bcrypt = require('bcryptjs')

                    if (bcrypt.compare(credentials?.password, user.password).then(() => {
                            return true
                        })
                    )
                        return true
                }

                return null
            }
        })
    ],

    pages: {
        signIn: '/auth/signin',
    },
}