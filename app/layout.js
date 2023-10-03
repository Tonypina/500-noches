import "./globals.css";
import { PT_Serif } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const ptSerif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Grupo 500 Noches",
  description: "Aplicación construida por Rosoft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
