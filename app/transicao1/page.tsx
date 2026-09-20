"use client";

export default function Transicao1Page() {
  const whatsapp =
    "https://wa.me/5551980339532?text=Ol%C3%A1%20Oscar%2C%20vi%20minha%20Transi%C3%A7%C3%A3o%20Numerol%C3%B3gica%20do%20Ano%201%20para%20o%20Ano%202%20e%20quero%20saber%20como%20ser%C3%A1%20meu%20ano%20m%C3%AAs%20a%20m%C3%AAs.";

  const areas = [
    {
      numero: "01",
      titulo: "Pessoal",
      texto:
        "O Ano 1 desperta iniciativa, independência e necessidade de começar uma nova etapa. É um período para assumir escolhas, experimentar caminhos e perceber quem você deseja ser neste novo ciclo. Ao caminhar em direção ao 2, surge um aprendizado importante: nem tudo precisará ser conquistado sozinho. A força individual começa, gradualmente, a encontrar espaço para cooperação, paciência e novas conexões.",
    },
    {
      numero: "02",
      titulo: "Afetivo",
      texto:
        "Depois de uma energia fortemente ligada à individualidade, os relacionamentos começam a ganhar outra importância. Você poderá perceber com mais clareza quem realmente deseja ao seu lado. A aproximação da energia 2 aumenta a sensibilidade para vínculos, parcerias e reciprocidade. O desafio será equilibrar liberdade pessoal com a capacidade de construir junto.",
    },
    {
      numero: "03",
      titulo: "Espiritual",
      texto:
        "O Ano 1 convida você a reconhecer sua própria força e assumir responsabilidade pelos caminhos que escolhe. A transição para o 2 acrescenta sensibilidade, percepção e escuta interior. Aos poucos, agir deixa de ser suficiente: será necessário também perceber, sentir e compreender o tempo certo de cada movimento.",
    },
    {
      numero: "04",
      titulo: "Material",
      texto:
        "A energia 1 favorece iniciativas, novos projetos e decisões capazes de abrir caminhos materiais. Entretanto, aquilo que começa precisa encontrar sustentação. A aproximação do 2 chama atenção para acordos, negociações, alianças e escolhas que envolvem outras pessoas. O dinheiro e a segurança material poderão exigir menos impulso e mais estratégia.",
    },
    {
      numero: "05",
      titulo: "Profissional",
      texto:
        "É um período importante para posicionamento, novos projetos, mudanças de direção e decisões profissionais. Você é estimulado a mostrar iniciativa e assumir seu espaço. Mas a passagem para o Ano 2 começa a apresentar outra chave: contatos, sociedades, clientes, parceiros e relacionamentos profissionais poderão ter participação cada vez maior nos seus próximos resultados.",
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
            <span className="block text-[#8b6d3f]">Ano Pessoal 1</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#655d55] md:text-lg">
            Um ciclo de começos, decisões e independência que prepara você,
            gradualmente, para uma nova experiência: a energia do Ano 2.
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
              1
            </div>

            <div className="text-3xl text-[#d4b47c]">→</div>

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#d4b47c] text-5xl font-semibold text-[#29231f] md:h-28 md:w-28 md:text-6xl">
              2
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-semibold md:text-4xl">
            Da independência para a cooperação
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#e4ddd3]">
            O Ano 1 abre portas. O Ano 2 ensina a perceber quem pode atravessá-las
            com você.
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
            Primeiro você abre o caminho. Depois aprende com quem deseja
            compartilhá-lo.
          </h2>

          <p className="mt-5 leading-7 text-[#5d554d]">
            O Ano Pessoal 1 marca o início de um novo ciclo numerológico. É uma
            energia que estimula decisões, iniciativa, coragem, autonomia e
            novos começos.
          </p>

          <p className="mt-4 leading-7 text-[#5d554d]">
            Entretanto, nenhum ciclo permanece parado. Conforme você percorre
            esse caminho, começa a se aproximar de uma vibração muito
            diferente: o Ano 2, ligado à sensibilidade, aos relacionamentos, à
            cooperação, às parcerias e à capacidade de esperar o momento certo.
          </p>

          <p className="mt-4 font-semibold leading-7 text-[#765a34]">
            É justamente nessa mudança de ritmo que podem estar alguns dos
            aprendizados mais importantes do seu período.
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
            Saber que você está vivendo um Ano Pessoal 1 é apenas o começo.
            Dentro desse período, cada mês acrescenta uma nova vibração e pode
            modificar a maneira como você percebe oportunidades, decisões,
            relacionamentos, dinheiro e trabalho.
          </p>

          <p className="mt-4 font-semibold leading-7 text-[#76500e]">
            Por isso, dois momentos do mesmo ano podem pedir atitudes
            completamente diferentes.
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