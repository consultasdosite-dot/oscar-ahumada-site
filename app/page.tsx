import Link from "next/link";

import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutOscar from "./components/AboutOscar";
import Testimonials from "./components/Testimonials";
import Offers from "./components/Offers";
import FAQ from "./components/FAQ";

export default function Home() {
  const diagnosticos = [
    {
      titulo: "ANALISAR MINHA CASA",
      href: "/casa",
    },
    {
      titulo: "COMPATIBILIDADE DO CASAL",
      href: "/compatibilidade",
    },
    {
      titulo: "ESCOLHER NOME DO BEBÊ",
      href: "/bebe",
    },
    {
      titulo: "ANALISAR NOME PROFISSIONAL",
      href: "/nome-profissional",
    },
  ];

  return (
    <main>
      <Hero />

      {/* DIAGNÓSTICOS GRATUITOS */}
      <section className="bg-[#f3efe7] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#b77a10]">
              Experimente a Numerologia
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#17395f] sm:text-3xl">
              Escolha seu diagnóstico gratuito
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#65768b]">
              Descubra o que os números podem revelar antes de tomar
              decisões importantes.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {diagnosticos.map((diagnostico) => (
              <Link
                key={diagnostico.href}
                href={diagnostico.href}
                className="
                  flex min-h-[74px] items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#e87518]
                  via-[#f5a623]
                  to-[#f6c64d]
                  px-3 py-4
                  text-center
                  text-[11px] font-black
                  uppercase
                  leading-4
                  tracking-[0.04em]
                  text-[#12365c]
                  shadow-[0_8px_22px_rgba(220,125,20,0.22)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:brightness-105
                  hover:shadow-[0_12px_28px_rgba(220,125,20,0.32)]
                  sm:text-[12px]
                  lg:min-h-[78px]
                "
              >
                {diagnostico.titulo}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <AboutOscar />
      <Testimonials />
      <Offers />
      <FAQ />
    </main>
  );
}