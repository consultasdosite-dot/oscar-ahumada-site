"use client";

export default function Transicao2Page() {
  const whatsapp =
    "https://wa.me/5551980339532?text=Ol%C3%A1%20Oscar%2C%20vi%20minha%20Transi%C3%A7%C3%A3o%20Numerol%C3%B3gica%20do%20Ano%202%20para%20o%20Ano%203%20e%20quero%20saber%20como%20ser%C3%A1%20meu%20ano%20m%C3%AAs%20a%20m%C3%AAs.";

  const areas = [
    {
      numero: "01",
      titulo: "Pessoal",
      texto:
        "O Ano 2 convida você a desenvolver paciência, sensibilidade, cooperação e percepção das pessoas ao seu redor. Nem tudo precisa acontecer na velocidade que você gostaria. Conforme a energia 3 começa a se aproximar, surge um movimento de maior expressão, sociabilidade e desejo de mostrar ao mundo aquilo que você pensa, sente e deseja realizar.",
    },
    {
      numero: "02",
      titulo: "Afetivo",
      texto:
        "Relacionamentos possuem importância especial na energia 2. É um período que pode ampliar sua percepção sobre reciprocidade, companheirismo, aproximações e necessidades emocionais. Na passagem para o 3, a vida afetiva tende a pedir mais diálogo, leveza e expressão dos sentimentos. Aquilo que permaneceu guardado poderá precisar encontrar palavras.",
    },
    {
      numero: "03",
      titulo: "Espiritual",
      texto:
        "A energia 2 desenvolve percepção, sensibilidade e capacidade de escutar aquilo que nem sempre é dito. A aproximação do 3 acrescenta uma necessidade diferente: transformar percepções internas em expressão. Conhecimentos, sentimentos e aprendizados podem começar a pedir uma forma mais clara de manifestação em sua vida.",
    },
    {
      numero: "04",
      titulo: "Material",
      texto:
        "O Ano 2 pode destacar acordos, parcerias, negociações e decisões que dependem de outras pessoas. À medida que o 3 se aproxima, comunicação, contatos e criatividade passam a ter maior importância. Novas ideias podem surgir, mas será fundamental diferenciar oportunidades consistentes de entusiasmo momentâneo e evitar decisões financeiras motivadas apenas pela empolgação.",
    },
    {
      numero: "05",
      titulo: "Profissional",
      texto:
        "No campo profissional, o Ano 2 valoriza colaboração, relacionamento, diplomacia e construção de alianças. A passagem para o 3 começa a ampliar a necessidade de comunicar melhor seu trabalho, apresentar ideias, criar contatos e tornar seus talentos mais visíveis. Pode ser um momento importante para perceber que competência também precisa ser comunicada para ser reconhecida.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#29231f]">
      {/* HERO */}
      <section className="px-5 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8b6d3f]">
            Sua Transição Numerológica
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Você está vivendo o
            <span className="block text-[#8b6d3f]">Ano Pessoal 2</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#655d55] md:text-lg">
            Um ciclo de sensibilidade, relacionamentos e cooperação que prepara
            você, gradualmente, para uma energia de maior expressão,
            criatividade e comunicação: o Ano 3.
          </p>
        </div>
      </section>

      {/* TRANSIÇÃO */}
      <section className="px-5 pb-10">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-[#29231f] px-6 py-10 text-center text-white shadow-xl md:px-12 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4b47c]">
            Transição
          </p>

          <div className="mt-7 flex items-center justify-center gap-5 md:gap-9">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#d4b47c] text-5xl font-semibold text-[#d4b47c] md:h-28 md:w-28 md:text-6xl">
              2
            </div>

            <div className="text-3xl text-[#d4b47c]">→</div>

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#d4b47c] text-5xl font-semibold text-[#29231f] md:h-28 md:w-28 md:text-6xl">
              3
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-semibold md:text-4xl">
            Da sensibilidade para a expressão
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#e4ddd3]">
            O Ano 2 ensina você a perceber e sentir. O Ano 3 começa a convidar
            você a expressar, comunicar e mostrar ao mundo aquilo que existe
            dentro de você.
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="px-5 pb-10">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-[#ded4c4] bg-white p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6d3f]">
            O que esta transição representa?
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
            Depois de aprender a ouvir e perceber, chega o momento de encontrar
            sua própria voz.
          </h2>

          <p className="mt-5 leading-7 text-[#5d554d]">
            O Ano Pessoal 2 trabalha relações, sensibilidade, paciência,
            cooperação e capacidade de compreender que algumas conquistas
            precisam de tempo, parceria e maturação.
          </p>

          <p className="mt-4 leading-7 text-[#5d554d]">
            Conforme esse ciclo avança, você começa a se aproximar da energia
            3. O movimento tende a mudar: expressão, criatividade, comunicação,
            sociabilidade e exposição passam a ganhar maior importância.
          </p>

          <p className="mt-4 font-semibold leading-7 text-[#765a34]">
            Aquilo que você percebeu e amadureceu internamente começa a pedir
            uma forma de expressão.
          </p>
        </div>
      </section>

      {/* CINCO ÁREAS */}
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6d3f]">
              Cinco áreas da sua vida
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:text-4xl">
              Como essa transição pode se manifestar?
            </h2>
          </div>

          <div className="grid gap-5">
            {areas.map((area) => (
              <article
                key={area.numero}
                className="rounded-[26px] border border-[#ded4c4] bg-white p-6 md:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eee5d7] text-sm font-bold text-[#8b6d3f]">
                    {area.numero}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {area.titulo}
                    </h3>

                    <p className="mt-3 leading-7 text-[#5d554d]">
                      {area.texto}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PONTO DE ATENÇÃO */}
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-[#d6a64a] bg-[#fff4dc] p-7 shadow-sm md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b77a16] text-xl font-bold text-white">
              !
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a5a0a]">
              Um ponto importante
            </p>
          </div>

          <h2 className="mt-5 text-2xl font-semibold leading-tight text-[#59461f] md:text-3xl">
            Seu ano não terá a mesma energia durante os 12 meses.
          </h2>

          <p className="mt-4 leading-7 text-[#59461f]">
            Saber que você está vivendo um Ano Pessoal 2 é apenas o começo.
            Cada mês acrescenta uma vibração diferente ao seu ciclo e pode
            alterar a forma como relacionamentos, decisões, dinheiro, trabalho
            e oportunidades se apresentam.
          </p>

          <p className="mt-4 font-semibold leading-7 text-[#76500e]">
            Existem meses para aproximar, meses para comunicar, meses para agir
            e outros em que observar e esperar pode ser tão importante quanto
            tomar uma decisão.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-[#8b6d3f] px-7 py-10 text-center text-white md:px-12 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f1dfbf]">
            Sua previsão personalizada
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            E como será o seu ano mês a mês?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#fff8ec]">
            Conhecer a transição mostra o movimento geral. Mas são os seus
            ciclos mensais que permitem aprofundar quando determinadas energias
            ganham força ao longo do ano.
          </p>

          <div className="mx-auto mt-7 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-5">
            {["Pessoal", "Afetivo", "Espiritual", "Material", "Profissional"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/30 bg-white/10 px-3 py-3 text-sm font-semibold"
                >
                  {item}
                </div>
              )
            )}
          </div>

          <p className="mx-auto mt-7 max-w-xl font-semibold leading-7">
            Descubra as tendências de cada mês e prepare-se para viver seu ciclo
            com mais consciência e direção.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-bold text-[#604923] transition hover:scale-[1.02] md:text-base"
          >
            QUERO CONHECER MEU ANO MÊS A MÊS
          </a>
        </div>
      </section>

      {/* ASSINATURA */}
      <section className="px-5 pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-semibold text-[#443b33]">
            Oscar Ahumada
          </p>

          <p className="mt-1 text-sm text-[#786f66]">
            Numerólogo das Estrelas
          </p>

          <p className="mx-auto mt-5 max-w-xl text-xs leading-5 text-[#857b70]">
            Esta leitura apresenta tendências numerológicas gerais da transição
            entre os ciclos. A análise personalizada considera seus períodos e
            movimentos individuais ao longo do ano.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#ddd3c4] px-5 py-8 text-center text-sm text-[#786f66]">
        Oscar Ahumada • Numerólogo das Estrelas
      </footer>
    </main>
  );
}