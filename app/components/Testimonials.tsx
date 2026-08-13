import Link from "next/link";

const depoimentos = [
  {
    nome: "Mônica Lentz",
    tempo: "5 meses atrás",
    texto:
      "Oscar é um numerólogo profissional de excelência, com anos de experiência e uma competência rara que transforma números em insights profundos e práticos para a vida. Ele se destaca pela empatia genuína, ética impecável em cada consulta e um toque humano que acolhe, inspira e guia com sensibilidade.",
  },
  {
    nome: "Aline S",
    tempo: "5 meses atrás",
    texto:
      "Simplesmente amei a experiência! A leitura do mapa foi esclarecedora, acolhedora e muito certeira. Em vários momentos fiquei impressionada com o quanto fez sentido pra minha vida e meu momento atual. Me senti acolhida e orientada, e saí com uma nova visão sobre meus caminhos. Trabalho feito com muito cuidado e sensibilidade. Super recomendo o querido Oscar Ahumada.",
  },
  {
    nome: "Karla Hoefel",
    tempo: "9 meses atrás",
    texto:
      "Extremamente ético e competente, todas as análises que fiz com ele em relação a trabalho, sócios, filhos, relacionamento… tudo com precisão cirúrgica! Grande disponibilidade para atender on-line e dedicado a trazer o melhor de cada cliente à tona!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#edf4fb] px-5 py-20 text-[#123d73] sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* CABEÇALHO */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c29629] sm:text-sm">
            Experiências reais
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            O que dizem sobre o trabalho de Oscar Ahumada
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#607089]">
            Experiências compartilhadas por pessoas que já passaram por uma
            análise numerológica com Oscar Ahumada.
          </p>
        </div>

        {/* NOTA GOOGLE */}
        <div className="mx-auto mt-12 max-w-4xl rounded-[32px] border border-[#d9c9aa] bg-white p-8 text-center shadow-[0_18px_50px_rgba(18,61,115,0.08)] sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#607089]">
            Avaliações no Google
          </p>

          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="text-5xl font-bold text-[#123d73]">
              5,0
            </span>

            <div className="text-left">
              <div
                className="text-2xl tracking-[0.12em] text-[#e3b82f]"
                aria-label="5 estrelas"
              >
                ★★★★★
              </div>

              <p className="mt-1 text-sm font-semibold text-[#607089]">
                74 avaliações
              </p>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#607089]">
            A confiança de quem já vivenciou uma consulta, análise ou Mapa
            Numerológico.
          </p>
        </div>

        {/* DEPOIMENTOS */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article
              key={depoimento.nome}
              className="flex h-full flex-col rounded-[30px] border border-[#dfd2bb] bg-white p-7 shadow-[0_16px_45px_rgba(18,61,115,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(18,61,115,0.12)] sm:p-8"
            >
              {/* ESTRELAS */}
              <div
                className="text-xl tracking-[0.1em] text-[#e3b82f]"
                aria-label="5 estrelas"
              >
                ★★★★★
              </div>

              {/* DEPOIMENTO */}
              <blockquote className="mt-6 flex-1 text-base leading-8 text-[#526782]">
                “{depoimento.texto}”
              </blockquote>

              {/* CLIENTE */}
              <div className="mt-8 border-t border-[#e8dfcf] pt-5">
                <p className="text-lg font-bold text-[#123d73]">
                  {depoimento.nome}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-[#edf4fb] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#246aa7]">
                    Avaliação Google
                  </span>

                  <span className="text-xs text-[#7b899c]">
                    {depoimento.tempo}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FRASE DE CONFIANÇA */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-lg leading-8 text-[#607089]">
            Cada pessoa chega à Numerologia com uma história diferente. O
            objetivo é transformar os números em informações que possam ser
            compreendidas e aplicadas à realidade de cada um.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-9 text-center">
          <Link
            href="/mapa-numerologico"
            className="inline-flex items-center justify-center rounded-full bg-[#123d73] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1f629d]"
          >
            Quero conhecer meu Mapa Numerológico
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}