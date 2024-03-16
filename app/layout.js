import "./globals.css";
import 'react-quill/dist/quill.snow.css'

import { PT_Serif } from "next/font/google";
import Navbar from "./components/navbar";

import { headers } from 'next/headers'
import AuthProvider from './context/AuthProvider'
import Footer from "./components/Footer";
import { Providers } from "./providers";

const ptSerif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Grupo 500 Noches",
  description: "Aplicación construida por Rosoft",
};

async function getSession(cookie) {
  const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({ children }) {
  
  const session = await getSession(headers().get('cookie') ?? '');

  return (
    <html lang="es">
      <body className={ptSerif.className}>
        <Providers>
          <AuthProvider session={session}>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
