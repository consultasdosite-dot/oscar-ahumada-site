import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d315d] via-[#174f8a] to-[#2f7fbb] text-white">
      {/* EFEITOS DE FUNDO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#f6c84f]/10 blur-3xl" />

        <div className="absolute right-[-120px] top-[-100px] h-[520px] w-[520px] rounded-full border border-[#f6c84f]/20" />

        <div className="absolute right-[-40px] top-[-20px] h-[380px] w-[380px] rounded-full border border-[#f6c84f]/15" />

        <div className="absolute right-[40px] top-[60px] h-[260px] w-[260px] rounded-full border border-[#f6c84f]/10" />

        <div className="absolute bottom-[-120px] left-[25%] h-[300px] w-[700px] rounded-full bg-[#f6c84f]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
        {/* TEXTO */}
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#f6c84f] sm:text-sm">
            Numerologia Pessoal e Empresarial
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Descubra o mapa
            <span className="block text-[#f6c84f]">
              da sua vida
            </span>
            através da Numerologia.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/90 sm:text-xl">
            Há mais de 40 anos ajudando pessoas e empresas a compreenderem seus
            propósitos, desafios, talentos, ciclos e oportunidades através dos
            números.
          </p>

          {/* BOTÕES */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/mapa-numerologico"
              className="inline-flex items-center justify-center rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ffda70]"
            >
              Descobrir Meu Mapa
            </Link>

            <Link
              href="/poderdonome"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Descobrir o Poder do Meu Nome
            </Link>
          </div>

          {/* AUTORIDADE */}
          <div className="mt-9 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
            <div>
              <strong className="block text-2xl font-bold text-[#f6c84f] sm:text-3xl">
                40+
              </strong>

              <span className="mt-1 block text-xs leading-5 text-blue-100 sm:text-sm">
                anos de experiência
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-bold text-[#f6c84f] sm:text-3xl">
                30.000+
              </strong>

              <span className="mt-1 block text-xs leading-5 text-blue-100 sm:text-sm">
                mapas realizados
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-bold text-[#f6c84f] sm:text-3xl">
                20+
              </strong>

              <span className="mt-1 block text-xs leading-5 text-blue-100 sm:text-sm">
                países
              </span>
            </div>
          </div>
        </div>

        {/* ÁREA DA FOTO */}
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
          {/* HALO */}
          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6c84f]/15 blur-3xl" />

          {/* CÍRCULO NUMEROLÓGICO */}
          <div className="pointer-events-none absolute -right-8 top-5 hidden h-[280px] w-[280px] rounded-full border border-[#f6c84f]/30 lg:block">
            <div className="absolute inset-8 rounded-full border border-[#f6c84f]/20" />

            <div className="absolute inset-16 rounded-full border border-[#f6c84f]/15" />

            <span className="absolute left-1/2 top-3 -translate-x-1/2 text-lg text-[#f6c84f]/70">
              1
            </span>

            <span className="absolute right-5 top-1/3 text-lg text-[#f6c84f]/70">
              3
            </span>

            <span className="absolute bottom-6 right-16 text-lg text-[#f6c84f]/70">
              8
            </span>

            <span className="absolute bottom-12 left-9 text-lg text-[#f6c84f]/70">
              5
            </span>

            <span className="absolute left-3 top-1/3 text-lg text-[#f6c84f]/70">
              9
            </span>
          </div>

          {/* CARD DA FOTO */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-white/10 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#0d315d]">
              <Image
                src="/images/oscar-home-2026.png"
                alt="Oscar Ahumada - Numerólogo das Estrelas"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-center"
              />

              {/* DEGRADÊ INFERIOR */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0d315d]/90 via-[#0d315d]/25 to-transparent" />

              {/* NOME */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                <p className="text-xl font-semibold text-white">
                  Oscar Ahumada
                </p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f6c84f]">
                  Numerólogo das Estrelas
                </p>
              </div>
            </div>
          </div>

          {/* SELO */}
          <div className="absolute -bottom-2 -left-2 rounded-[20px] border border-[#f6c84f]/30 bg-[#0d315d]/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f6c84f]">
              Numerologia Latina
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              Números que revelam.
              <br />
              Escolhas que transformam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}