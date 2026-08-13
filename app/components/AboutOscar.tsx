import Link from "next/link";

export default function AboutOscar() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#123d73] sm:px-6 sm:py-24">
      {/* ELEMENTOS DECORATIVOS */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#f6c84f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#2b78b4]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ÁREA VISUAL */}
        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[36px] border border-[#d8b55a]/40" />

          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#123d73] via-[#174f8a] to-[#2b78b4] p-8 shadow-[0_25px_70px_rgba(18,61,115,0.20)] sm:p-10">
            {/* NÚMERO DECORATIVO */}
            <div className="absolute -right-6 -top-10 text-[180px] font-bold leading-none text-white/[0.05]">
              40
            </div>

            <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-[#f6c84f]">
              Uma vida dedicada aos números
            </p>

            <div className="relative mt-12">
              <p className="text-7xl font-semibold tracking-tight text-[#f6c84f] sm:text-8xl">
                40+
              </p>

              <p className="mt-2 text-xl font-semibold text-white">
                anos de experiência
              </p>

              <div className="my-8 h-px bg-white/15" />

              <p className="text-lg leading-8 text-blue-50/90">
                Décadas estudando, interpretando e aplicando a Numerologia à
                vida pessoal, profissional e empresarial.
              </p>
            </div>

            {/* NÚMEROS */}
            <div className="relative mt-10 flex gap-3">
              {[1, 3, 8].map((numero) => (
                <div
                  key={numero}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f6c84f]/40 bg-white/5 text-xl font-bold text-[#f6c84f]"
                >
                  {numero}
                </div>
              ))}
            </div>

            <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Conhecimento • Experiência • Propósito
            </p>
          </div>

          {/* SELO */}
          <div className="absolute -bottom-6 -right-3 rounded-[22px] border border-[#eadbbd] bg-[#fffaf0] px-6 py-4 shadow-xl sm:-right-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b88716]">
              Numerólogo das Estrelas
            </p>

            <p className="mt-1 font-semibold text-[#123d73]">
              Oscar Ahumada
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c29629] sm:text-sm">
            Quem é Oscar Ahumada
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Mais do que interpretar números, compreender histórias de vida.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#607089]">
            Há mais de quatro décadas, Oscar Ahumada dedica sua trajetória ao
            estudo e à aplicação da Numerologia, transformando números em uma
            linguagem capaz de ampliar o autoconhecimento e trazer novas
            perspectivas para decisões importantes.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#607089]">
            Seu trabalho envolve pessoas, profissionais, famílias e empresas,
            sempre buscando compreender as características presentes em nomes,
            datas e ciclos numerológicos.
          </p>

          {/* DESTAQUE */}
          <div className="mt-8 rounded-[28px] border-l-4 border-[#f6c84f] bg-[#f7f3eb] px-6 py-6 sm:px-8">
            <p className="text-xl font-semibold leading-8 text-[#123d73]">
              “A Numerologia não deve decidir a sua vida por você. Ela deve
              oferecer conhecimento para que suas escolhas sejam mais
              conscientes.”
            </p>

            <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[#c29629]">
              Oscar Ahumada
            </p>
          </div>

          {/* PILARES */}
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[22px] border border-[#e5dac6] bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-[#c29629]">01</p>
              <p className="mt-2 font-semibold">Autoconhecimento</p>
            </div>

            <div className="rounded-[22px] border border-[#e5dac6] bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-[#c29629]">02</p>
              <p className="mt-2 font-semibold">Escolhas conscientes</p>
            </div>

            <div className="rounded-[22px] border border-[#e5dac6] bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-[#c29629]">03</p>
              <p className="mt-2 font-semibold">Direcionamento</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9">
            <Link
              href="/mapa-numerologico"
              className="inline-flex items-center justify-center rounded-full bg-[#123d73] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1f629d]"
            >
              Conhecer o Mapa Numerológico
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}