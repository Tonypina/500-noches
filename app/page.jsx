import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black min-h-screen items-center">
      <section className="hero  py-10 min-h-screen flex items-center ">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/logos/Grupo500Noches.svg"
            width={150}
            height={150}
            alt="Grupo 500 Noches"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-4xl font-bold">En cada Rincón, en cada plato</p>
            <p className="text-2xl mt-4">
              Explora un mundo de sabores y<br />
              Experiencias únicas
            </p>
            <p className="text-lg mt-4">
              Cada bocado es un paso hacia la exploración
              <br />
              de lo desconocido
            </p>
          </div>
        </div>
      </section>
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-4xl font-bold">En cada Rincón, en cada plato</p>
          <p className="text-2xl mt-4">
            Explora un mundo de sabores y<br />
            Experiencias únicas
          </p>
          <p className="text-lg mt-4">
            Cada bocado es un paso hacia la exploración
            <br />
            de lo desconocido
          </p>
        </div>
      </div>
    </main>
  );
}
