import Link from "next/link";

export default function MapaNumerologicoPage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#123d73]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f6cf68]">
              Mapa Numerológico Pessoal
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Compreenda seus talentos, desafios, ciclos e propósito através
              dos números.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/90">
              O Mapa Numerológico Pessoal é uma leitura aprofundada do seu nome
              e da sua data de nascimento, desenvolvida pelo método de Oscar
              Ahumada para ampliar o autoconhecimento e ajudar você a tomar
              decisões com mais consciência.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/solicitar-mapa"
                className="rounded-full bg-[#f6c84f] px-8 py-4 text-center text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Quero Meu Mapa Numerológico
              </Link>

              <Link
                href="/poderdonome"
                className="rounded-full border border-white/40 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Descobrir o Poder do Meu Nome
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE O MAPA REVELA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
              Uma leitura completa
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              O que o seu Mapa Numerológico pode revelar
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#607089]">
              O objetivo do mapa não é prever sua vida de forma rígida, mas
              mostrar tendências, potenciais, desafios e ciclos que podem ajudar
              você a compreender melhor sua própria trajetória.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Talentos e potenciais",
                "Identifique capacidades naturais que podem ser melhor aproveitadas na vida pessoal e profissional.",
              ],
              [
                "Desafios pessoais",
                "Compreenda padrões que podem se repetir e quais atitudes podem favorecer seu desenvolvimento.",
              ],
              [
                "Missão e propósito",
                "Aprofunde a compreensão sobre direção de vida, realização e significado pessoal.",
              ],
              [
                "Relacionamentos",
                "Observe tendências afetivas, necessidades emocionais e padrões importantes nos vínculos.",
              ],
              [
                "Vida profissional",
                "Entenda características relacionadas à iniciativa, liderança, criatividade, comunicação e realização.",
              ],
              [
                "Ciclos e momentos de vida",
                "Conheça as energias que acompanham diferentes períodos e como utilizá-las com mais consciência.",
              ],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                className="rounded-[26px] border border-[#dfd2bb] bg-white p-7 shadow-[0_12px_35px_rgba(18,61,115,0.08)]"
              >
                <h3 className="text-xl font-semibold">{titulo}</h3>

                <p className="mt-4 leading-7 text-[#607089]">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-[#edf4fb] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                Para quem é indicado
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Para quem sente que chegou a hora de compreender melhor a
                própria vida.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#607089]">
                O mapa é especialmente útil em momentos de mudança, decisões
                importantes, dúvidas profissionais, questões afetivas ou quando
                existe a sensação de que certos padrões continuam se repetindo.
              </p>
            </div>

            <div className="rounded-[30px] bg-white p-8 shadow-xl">
              <div className="space-y-5">
                {[
                  "Você quer compreender melhor quem é e como funciona.",
                  "Está vivendo uma fase de mudança ou decisão.",
                  "Deseja entender melhor seus relacionamentos.",
                  "Quer identificar potenciais profissionais.",
                  "Sente que alguns padrões se repetem.",
                  "Busca mais clareza sobre seus próximos passos.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 border-b border-[#e7dcc6] pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f6c84f] text-sm font-bold text-[#123d73]">
                      ✓
                    </div>

                    <p className="leading-7 text-[#4f627d]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
              Como funciona
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Um processo simples e personalizado
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                "01",
                "Envio dos dados",
                "Você informa seu nome e data de nascimento para a preparação da análise.",
              ],
              [
                "02",
                "Confecção do mapa",
                "Os números são analisados de acordo com o método de Numerologia Latina de Oscar Ahumada.",
              ],
              [
                "03",
                "Entrega e orientação",
                "Você recebe a leitura e as orientações para compreender como aplicar essas informações na sua vida.",
              ],
            ].map(([numero, titulo, texto]) => (
              <div
                key={numero}
                className="rounded-[28px] border border-[#dfd2bb] bg-white p-8"
              >
                <div className="text-5xl font-light text-[#d4af37]/40">
                  {numero}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {titulo}
                </h3>

                <p className="mt-4 leading-7 text-[#607089]">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="bg-[#123d73] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">
                Oscar Ahumada
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Mais de quatro décadas dedicadas à Numerologia.
              </h2>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Ao longo de sua trajetória, Oscar Ahumada desenvolveu milhares
                de mapas numerológicos pessoais e empresariais, ajudando pessoas
                a compreenderem melhor seus comportamentos, escolhas,
                relacionamentos e momentos de vida.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 text-center">
                <strong className="text-3xl text-[#f6cf68]">
                  40+
                </strong>

                <p className="mt-2 text-sm text-blue-100">
                  anos de experiência
                </p>
              </div>

              <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 text-center">
                <strong className="text-3xl text-[#f6cf68]">
                  30.000+
                </strong>

                <p className="mt-2 text-sm text-blue-100">
                  mapas realizados
                </p>
              </div>

              <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 text-center">
                <strong className="text-3xl text-[#f6cf68]">
                  20+
                </strong>

                <p className="mt-2 text-sm text-blue-100">
                  países
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contratar" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[34px] bg-gradient-to-br from-[#fffaf0] to-white p-8 text-center shadow-xl sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
              Seu próximo passo
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold">
              Conhecer seus números pode mudar a forma como você compreende suas
              escolhas.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#607089]">
              O Mapa Numerológico não decide por você. Ele amplia a visão para
              que suas decisões sejam tomadas com mais consciência e
              autoconhecimento.
            </p>

            <Link
              href="/solicitar-mapa"
              className="mt-8 inline-flex rounded-full bg-[#123d73] px-9 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
            >
              Quero Solicitar Meu Mapa Numerológico
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}