export default function Offers() {
  return (
    <section className="bg-white px-5 py-20 text-[#123d73] sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#123d73] via-[#174f8a] to-[#2b78b4] px-7 py-12 text-white shadow-[0_25px_70px_rgba(18,61,115,0.18)] sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            {/* TEXTO */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f6c84f] sm:text-sm">
                Ofertas e atendimentos
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Encontre o atendimento ideal para o seu momento
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Conheça os Mapas Numerológicos, consultas, análises e condições
                especiais disponíveis atualmente no catálogo oficial de Oscar
                Ahumada no WhatsApp.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                As ofertas podem ser atualizadas ao longo do ano, por isso o
                catálogo concentra sempre as condições disponíveis no momento.
              </p>

              <a
                href="https://wa.me/c/555180339532"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Ver Ofertas no WhatsApp
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>

            {/* DESTAQUES */}
            <div className="grid gap-4">
              <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
                  Mapas Numerológicos
                </p>

                <p className="mt-3 leading-7 text-blue-100">
                  Opções pessoais, empresariais e análises específicas para
                  diferentes momentos e decisões.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
                  Consultas
                </p>

                <p className="mt-3 leading-7 text-blue-100">
                  Atendimentos personalizados para aprofundar dúvidas, ciclos,
                  escolhas e direcionamentos.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
                  Condições Especiais
                </p>

                <p className="mt-3 leading-7 text-blue-100">
                  Promoções e oportunidades disponíveis por tempo limitado no
                  catálogo oficial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}