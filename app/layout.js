import "./globals.css";
import "react-quill/dist/quill.snow.css";

import { PT_Serif } from "next/font/google";
import Navbar from "./components/navbar";

import { headers } from "next/headers";
import Footer from "./components/Footer";
import { Providers } from "./providers";
import localFont from 'next/font/local'

const ptSerif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Grupo 500 Noches",
  description:
    "Empresa chiapaneca con 7 marcas en el mercado y presencia en 7 ciudades de la República Mexicana",
};

const bridge = localFont({
  src: [
    {
      path: '../public/fonts/bridge/bridge.ttf',
      weight: '400'
    }
  ],
  variable: '--font-bridge'
})

const adam = localFont({
  src: [
    {
      path: '../public/fonts/adam/Adam-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/adam/Adam-Light.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/adam/Adam-Medium.ttf',
      weight: '400'
    },
  ],
  variable: '--font-adam'
})
const black_burger = localFont({
  src: [
    {
      path: '../public/fonts/black_burger/Black_Burger_Rough.ttf',
      weight: '400'
    },
  ],
  variable: '--font-black-burger'
})
const black_coffee = localFont({
  src: [
    {
      path: '../public/fonts/black_coffee/Black-coffee.ttf',
      weight: '400'
    },
  ],
  variable: '--font-black-coffee'
})
const georgia = localFont({
  src: [
    {
      path: '../public/fonts/georgia/Georgia.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/georgia/georgia_bold.ttf',
      weight: '700'
    },
  ],
  variable: '--font-georgia'
})
const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/montserrat/Montserrat-VariableFont_wght.ttf',
      weight: '400'
    },
  ],
  variable: '--font-montserrat'
})
const news_goth = localFont({
  src: [
    {
      path: '../public/fonts/news-goth/NewsGothicBT.ttf',
      weight: '400'
    },
  ],
  variable: '--font-news-goth'
})
const raleway = localFont({
  src: [
    {
      path: '../public/fonts/raleway/Raleway-VariableFont_wght.ttf',
      weight: '400'
    },
  ],
  variable: '--font-raleway'
})
const roboto = localFont({
  src: [
    {
      path: '../public/fonts/roboto/Roboto-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/roboto/Roboto-Thin.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/roboto/Roboto-Bold.ttf',
      weight: '700'
    },
  ],
  variable: '--font-roboto'
})

export default async function RootLayout({ children }) {
  
  return (
    <html lang="es" className={`
      ${adam.variable}
      ${black_burger.variable}
      ${black_coffee.variable}
      ${georgia.variable}
      ${montserrat.variable}
      ${news_goth.variable}
      ${raleway.variable}
      ${roboto.variable}
      ${bridge.variable}
    `}>
      <head></head>
      <body className={ptSerif.className}>
        <Providers>
          {/* <AuthProvider session={session}> */}
            <Navbar />
            {children}
          {/* </AuthProvider> */}
        </Providers>
      </body>
    </html>
  );
}
