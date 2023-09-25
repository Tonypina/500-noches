import type  { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Usuario:",
                    type: "text",
                    placeholder: "tu-usuario"
                },
                password: {
                    label: "Contraseña:",
                    type: "password"
                }
            },
            
            async authorize(credentials, req) {
                // Aquí tengo que traer la información del usuario
                const user = {
                    id: "42",
                    name: "Prueba",
                    password: "prueba"
                }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }

                return null
            }
        })
    ],

    pages: {
        signIn: '/auth/signin',
    },
}