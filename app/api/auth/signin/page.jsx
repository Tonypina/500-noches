
import { LoginCard } from "../../../components/LoginCard"
import Image from "next/image"

export default function SignIn() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <section className="hero w-full h-screen bg-[url(https://rossoft.com.mx/galeria/login.jpg)] bg-cover bg-no-repeat brightness-50">.</section>
            <section className="hero w-full py-10 min-h-screen flex justify-center items-center bg-transparent absolute z-10">
                <div className="columns-2 gap-8 w-full items-center justify-center">
                    <div className="w-full items-center justify-end h-full flex pr-10">
                        <LoginCard></LoginCard>
                    </div>
                    <div className="w-full flex items-center justify-center h-full">
                        <div className="">
                            <Image
                                src="/logos/LogoG500NochesSilueta.svg"
                                width={250}
                                height={250}
                                alt="Grupo 500 Noches"
                                className="block"
                            />
                            <Image
                                src="/logos/Grupo500Noches.svg"
                                width={250}
                                height={250}
                                alt="Grupo 500 Noches"
                                className="mt-10 block"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}