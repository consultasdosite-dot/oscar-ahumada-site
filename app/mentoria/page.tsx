"use client";

import Image from "next/image";
import { useState } from "react";

export default function MentoriaPage() {
  const whatsapp = "5551980339532";
  const chavePix = "08677876863";

  const [pixAberto, setPixAberto] = useState<number | null>(null);
  const [copiado, setCopiado] = useState(false);

  const contato = (mensagem: string) =>
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

  async function copiarPix() {
    try {
      await navigator.clipboard.writeText(chavePix);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000);
    } catch {
      alert("Copie manualmente a chave Pix: " + chavePix);
    }
  }

  const planos = [
    {
      id: 1,
      titulo: "Sessão individual",
      sessoes: "1 sessão",
      valor: "395,00",
      descricao: "O primeiro passo para sua transformação.",
      link: "https://pay.infinitepay.io/oscar_jose_ahumada_/VC1D-YFJzztMmfm-395,00",
    },
    {
      id: 3,
      titulo: "Programa inicial",
      sessoes: "3 sessões",
      valor: "1.185,00",
      descricao: "Clareza, direcionamento e planejamento pessoal.",
      link: "https://pay.infinitepay.io/oscar_jose_ahumada_/VC1D-WSL5g1Zrzl-1185,00",
    },
    {
      id: 10,
      titulo: "Programa completo",
      sessoes: "10 sessões",
      valor: "3.500,00",
      descricao: "Uma jornada de desenvolvimento e acompanhamento.",
      link: "https://pay.infinitepay.io/oscar_jose_ahumada_/VC1D-kOsGuVcB7G-3500,00",
    },
  ];

  const etapas = [
    {
      numero: "01",
      titulo: "Observação",
      texto:
        "Identificar novos pontos de vista, reconhecer crenças, paradigmas e comportamentos que influenciam suas escolhas. Descobrir novas possibilidades para construir os resultados que você deseja.",
    },
    {
      numero: "02",
      titulo: "Consciência",
      texto:
        "Desenvolver a consciência sobre seu poder de escolha, compreendendo suas decisões, suas atitudes e as consequências que elas produzem em sua vida.",
    },
    {
      numero: "03",
      titulo: "Determinação dos objetivos",
      texto:
        "Definir claramente suas metas, compreender aonde deseja chegar e estabelecer prioridades que orientem suas decisões e ações.",
    },
    {
      numero: "04",
      titulo: "Consistência",
      texto:
        "Transformar conhecimento em atitudes. Acompanharei você durante esse processo, auxiliando na superação das dificuldades que surgirem ao longo do caminho.",
    },
    {
      numero: "05",
      titulo: "Tomada de decisão",
      texto:
        "Avaliar continuamente sua evolução, corrigir estratégias quando necessário e desenvolver segurança para tomar decisões conscientes.",
    },
    {
      numero: "06",
      titulo: "Conclusão",
      texto:
        "Consolidar os aprendizados por meio de um plano de ação personalizado, fundamentado no compromisso com seus objetivos.",
    },
    {
      numero: "07",
      titulo: "Otimismo e autocrítica",
      texto:
        "Aprender a perceber oportunidades, interpretar situações sob novas perspectivas e desenvolver a capacidade de enxergar soluções, não somente problemas.",
    },
  ];

  const metodologia = [
    {
      titulo: "Planejamento contínuo",
      texto:
        "Organizar prioridades e construir estratégias semanais alinhadas aos seus objetivos de longo prazo.",
    },
    {
      titulo: "Liderança pelo exemplo",
      texto:
        "Desenvolver uma cultura pessoal de excelência, compromisso, responsabilidade e disciplina.",
    },
    {
      titulo: "Identificação de talentos",
      texto:
        "Reconhecer suas competências naturais e desenvolver habilidades que ainda não foram plenamente exploradas.",
    },
    {
      titulo: "Treinamento diário",
      texto:
        "Aprimorar suas habilidades continuamente, trabalhando suas dificuldades e desenvolvendo novas competências.",
    },
    {
      titulo: "A vida é seu campo de jogo",
      texto:
        "Transformar situações cotidianas em oportunidades de aprendizado, crescimento e evolução.",
    },
    {
      titulo: "Motivação individual",
      texto:
        "Compreender suas verdadeiras motivações e assumir a responsabilidade pelo próprio desenvolvimento.",
    },
    {
      titulo: "Disciplina e comprometimento",
      texto:
        "Construir hábitos consistentes que contribuam para alcançar seus objetivos pessoais e profissionais.",
    },
    {
      titulo: "Relacionamento e trabalho em equipe",
      texto:
        "Desenvolver a comunicação, a cooperação e a inteligência nas relações interpessoais.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f1e9] selection:bg-[#c9a45c] selection:text-black">
      {/* APRESENTAÇÃO PRINCIPAL */}

      <section className="relative overflow-hidden border-b border-[#c9a45c]/20 bg-gradient-to-b from-[#201b12] to-[#0b0b0b] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="order-2 text-center md:order-1 md:text-left">
            <div className="font-serif text-6xl text-[#c9a45c]">OA</div>

            <p className="mt-5 text-sm tracking-[0.35em] text-[#c9a45c]">
              OSCAR AHUMADA
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Mais de 30 anos de experiência
            </p>

            <h1 className="mt-10 font-serif text-4xl leading-tight md:text-7xl">
              Mentoria
              <span className="block text-[#c9a45c]">Personalizada</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
              Você não precisa caminhar sozinho para conquistar a vida que
              deseja.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-neutral-400">
              Autoconhecimento, clareza, propósito e estratégia para
              transformar suas intenções em atitudes.
            </p>

            <a
              href="#investimento"
              className="mt-10 inline-block rounded-md bg-[#c9a45c] px-9 py-5 text-sm font-bold tracking-wider text-black transition hover:bg-[#e2c78a]"
            >
              QUERO TRANSFORMAR MINHA VIDA
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-[#c9a45c]/30 bg-[#151515] shadow-2xl shadow-black/30">
              <Image
                src="/images/oscar-mentoria-topo.png"
                alt="Oscar Ahumada no topo da página da mentoria, em pose acolhedora com a mão estendida"
                width={900}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA PROFISSIONAL */}

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c9a45c]">
          Minha trajetória
        </p>

        <h2 className="mb-8 font-serif text-4xl md:text-5xl">
          Conhecimento que nasce da experiência
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
          <p>
            Há mais de 30 anos, dedico minha vida ao desenvolvimento humano.
            Muito antes de o Coaching se popularizar, eu já atuava como
            treinador, orientador e consultor pessoal.
          </p>

          <p>
            Meu mestre, Ruben Szych, escolheu-me como seu primeiro discípulo,
            confiando-me uma equipe de vendas que eu deveria preparar para
            vencer.
          </p>

          <p>
            Essa oportunidade surgiu após uma intensa experiência de campo, na
            qual conquistei o título de melhor vendedor de joias do Brasil.
          </p>

          <p>
            Ao longo dos anos, por meio de experiências, treinamentos, estudos e
            livros, compreendi que muitas pessoas precisam de orientação para
            alcançar suas metas, assim como eu precisei para me tornar quem sou
            hoje.
          </p>

          <p>
            Agora, coloco essa experiência à sua disposição para acompanhá-lo na
            construção de uma vida mais consciente, equilibrada e alinhada aos
            seus objetivos.
          </p>
        </div>

        <div className="mt-12 border-l-2 border-[#c9a45c] py-4 pl-6">
          <p className="font-serif text-2xl italic leading-relaxed text-[#c9a45c]">
            Meu papel não é dizer quem você deve ser, mas ajudá-lo a descobrir
            quem você pode se tornar.
          </p>

          <p className="mt-5 text-sm text-neutral-400">Oscar Ahumada</p>
        </div>
      </section>

      {/* AUTOCONHECIMENTO */}

      <section className="border-y border-[#c9a45c]/15 bg-[#141414] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl">
            O poder do autoconhecimento
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-neutral-300">
            A mentoria pessoal parte do princípio de que você possui
            conhecimentos e experiências fundamentais para compreender os
            desafios da sua própria vida. Meu trabalho é ajudá-lo a reconhecer
            esses recursos e utilizá-los de maneira mais consciente.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Numerologia", "Grafologia", "Astrologia"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#c9a45c]/30 bg-[#0d0d0d] p-8"
              >
                <h3 className="font-serif text-2xl text-[#c9a45c]">{item}</h3>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl leading-relaxed text-neutral-400">
            Utilizaremos ferramentas interpretativas de autoconhecimento e
            exercícios de reflexão comportamental para ampliar sua percepção
            sobre talentos, escolhas e possibilidades.
          </p>
        </div>
      </section>

      {/* ETAPAS */}

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c9a45c]">
            Sua jornada de transformação
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            As 7 etapas da mentoria
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-neutral-400">
            Antes de iniciarmos, você deverá identificar aquilo que deseja
            alcançar. Suas metas serão definidas de maneira clara, objetiva e
            personalizada.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {etapas.map((etapa) => (
            <article
              key={etapa.numero}
              className="rounded-xl border border-[#c9a45c]/20 bg-[#141414] p-8"
            >
              <span className="font-serif text-5xl text-[#c9a45c]">
                {etapa.numero}
              </span>

              <h3 className="mt-5 text-xl font-semibold">{etapa.titulo}</h3>

              <p className="mt-4 leading-relaxed text-neutral-400">
                {etapa.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* METODOLOGIA */}

      <section className="border-y border-[#c9a45c]/15 bg-[#141414] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-4xl md:text-5xl">
            Minha metodologia de treinamento
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-relaxed text-neutral-300">
            Um sistema de desenvolvimento individual voltado ao reconhecimento
            de talentos, competências, valores, crenças e comportamentos que
            influenciam seu desempenho pessoal e profissional.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {metodologia.map((item) => (
              <article
                key={item.titulo}
                className="border-l-2 border-[#c9a45c]/60 pl-6"
              >
                <h3 className="text-xl font-semibold text-[#c9a45c]">
                  {item.titulo}
                </h3>

                <p className="mt-3 leading-relaxed text-neutral-400">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETÊNCIAS */}

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center font-serif text-4xl">
          Competências que iremos desenvolver
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            "Habilidades de comunicação",
            "Resolução de conflitos",
            "Capacidade de negociação",
            "Planejamento e organização",
            "Visão sistêmica",
            "Criatividade",
            "Liderança",
            "Relacionamento interpessoal",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#c9a45c]/20 bg-[#141414] p-5"
            >
              <span className="mr-3 text-[#c9a45c]">◆</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* COMPROMISSO */}

      <section className="bg-[#c9a45c] px-6 py-16 text-[#17120a]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl">
            Você está preparado para mudar?
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Nenhuma metodologia substitui sua vontade de crescer. Para que essa
            jornada seja significativa, é necessário assumir um compromisso
            consigo mesmo.
          </p>

          <div className="mt-8 space-y-3 text-lg font-medium">
            <p>Seja guiado por suas convicções.</p>
            <p>Esteja disposto a aprender.</p>
            <p>Esteja disposto a ouvir.</p>
            <p>Seja consistente.</p>
            <p>Seja honesto consigo mesmo.</p>
          </div>
        </div>
      </section>

      {/* DURAÇÃO */}

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-serif text-4xl">Duração do programa</h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-300">
          Cada pessoa possui sua própria história, seus desafios e seu ritmo de
          desenvolvimento. A duração da mentoria será definida de acordo com as
          metas estabelecidas nas primeiras sessões e poderá ser ajustada
          conforme sua evolução.
        </p>
      </section>

      {/* INVESTIMENTO */}

      <section
        id="investimento"
        className="scroll-mt-8 border-y border-[#c9a45c]/20 bg-[#141414] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#c9a45c]">
            Sua melhor escolha
          </p>

          <h2 className="mt-5 text-center font-serif text-4xl md:text-5xl">
            Invista em você
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-neutral-400">
            Sua transformação começa com uma decisão. Escolha seu programa de
            mentoria.
          </p>

          <div className="mt-14 grid items-start gap-6 md:grid-cols-3">
            {planos.map((plano) => (
              <article
                key={plano.id}
                className={`relative flex flex-col rounded-xl border p-6 text-center ${
                  plano.id === 10
                    ? "border-[#c9a45c] bg-[#211b11]"
                    : "border-[#c9a45c]/25 bg-[#0b0b0b]"
                }`}
              >
                {plano.id === 10 && (
                  <div className="mb-6 rounded-md bg-[#c9a45c] px-4 py-3 text-xs font-bold tracking-widest text-black">
                    DESCONTO ESPECIAL
                  </div>
                )}

                <h3 className="font-serif text-2xl">{plano.titulo}</h3>

                <p className="mt-4 text-neutral-300">{plano.sessoes}</p>

                {plano.id === 10 && (
                  <p className="mt-5 text-lg text-neutral-400 line-through">
                    De R$ 3.950,00
                  </p>
                )}

                <p className="mt-5 text-4xl font-bold text-[#c9a45c]">
                  R$ {plano.valor}
                </p>

                {plano.id === 10 && (
                  <p className="mt-3 font-semibold text-[#c9a45c]">
                    Economize R$ 450,00
                  </p>
                )}

                <p className="mb-8 mt-5 leading-relaxed text-neutral-400">
                  {plano.descricao}
                </p>

                <button
                  type="button"
                  aria-expanded={pixAberto === plano.id}
                  onClick={() => {
                    setCopiado(false);
                    setPixAberto(pixAberto === plano.id ? null : plano.id);
                  }}
                  className="w-full rounded-md bg-[#c9a45c] px-4 py-4 text-sm font-bold text-black transition hover:bg-[#e2c78a]"
                >
                  PAGAR COM PIX
                </button>

                {pixAberto === plano.id && (
                  <div className="mt-4 rounded-lg border border-[#c9a45c]/40 bg-[#0b0b0b] p-5">
                    <p className="text-sm font-semibold text-[#c9a45c]">
                      PAGAMENTO VIA PIX
                    </p>

                    <p className="mt-4 font-semibold">Banco Wise</p>

                    <p className="mt-2 text-sm text-neutral-400">
                      Favorecido
                    </p>

                    <p className="text-sm">Oscar Jose Ahumada</p>

                    <p className="mt-4 text-sm text-neutral-400">
                      Valor do pagamento
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#c9a45c]">
                      R$ {plano.valor}
                    </p>

                    <p className="mt-5 text-xs tracking-widest text-neutral-400">
                      CHAVE PIX — CPF
                    </p>

                    <p className="mt-2 text-xl font-semibold">{chavePix}</p>

                    <button
                      type="button"
                      onClick={copiarPix}
                      className="mt-5 w-full rounded-md bg-[#c9a45c] px-3 py-3 text-xs font-bold text-black"
                    >
                      {copiado ? "CHAVE PIX COPIADA!" : "COPIAR CHAVE PIX"}
                    </button>

                    <p className="mt-5 text-xs leading-relaxed text-neutral-400">
                      Realize o pagamento pelo aplicativo do seu banco, confira
                      os dados do favorecido e envie o comprovante pelo
                      WhatsApp.
                    </p>

                    <a
                      href={contato(
                        `Olá, Oscar! Realizei o pagamento via Pix do programa de mentoria de ${plano.sessoes}, no valor de R$ ${plano.valor}. Gostaria de enviar meu comprovante e agendar meu atendimento.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 block w-full rounded-md bg-[#168746] px-3 py-4 text-xs font-bold text-white transition hover:bg-[#126c38]"
                    >
                      ENVIAR COMPROVANTE
                    </a>
                  </div>
                )}

                <a
                  href={plano.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full rounded-md border border-[#c9a45c] px-4 py-4 text-sm font-bold text-[#c9a45c] transition hover:bg-[#c9a45c] hover:text-black"
                >
                  PAGAR COM CARTÃO
                </a>

                <p className="mt-3 text-sm text-neutral-300">
                  Parcele em até 12x
                </p>

                <p className="mt-2 text-xs text-neutral-500">
                  Pagamento processado pela InfinitePay. Condições de
                  parcelamento no checkout.
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-400">
            Após a confirmação do pagamento, entre em contato pelo WhatsApp
            para organizarmos o início da sua mentoria personalizada.
          </p>

          <div className="mt-6 text-center">
            <a
              href={contato(
                "Olá, Oscar! Contratei sua mentoria e gostaria de agendar meu atendimento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#168746] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#126c38]"
            >
              JÁ PAGUEI — QUERO AGENDAR
            </a>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          O futuro que você deseja começa com as
          <span className="text-[#c9a45c]"> decisões que você toma hoje.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-neutral-400">
          Permita-me compartilhar minha experiência e acompanhá-lo nessa
          jornada de autoconhecimento, desenvolvimento e realização pessoal.
        </p>

        <a
          href={contato(
            "Olá, Oscar! Gostaria de conversar sobre sua mentoria personalizada."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-md bg-[#c9a45c] px-8 py-5 text-sm font-bold text-black transition hover:bg-[#e2c78a]"
        >
          QUERO CONVERSAR COM OSCAR
        </a>
      </section>

      {/* RODAPÉ */}

      <footer className="border-t border-[#c9a45c]/20 px-6 py-10 text-center">
        <div className="font-serif text-4xl text-[#c9a45c]">OA</div>

        <p className="mt-4 text-lg tracking-widest">OSCAR AHUMADA</p>

        <p className="mt-2 text-xs tracking-widest text-[#c9a45c]">
          NUMERÓLOGO DAS ESTRELAS
        </p>

        <a
          href="https://www.oscarahumada.com.br"
          className="mt-5 inline-block text-sm text-neutral-400"
        >
          www.oscarahumada.com.br
        </a>

        <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-neutral-500">
          A mentoria destina-se ao desenvolvimento pessoal e não substitui
          acompanhamento médico ou psicológico. Os resultados dependem de
          fatores individuais.
        </p>
      </footer>
    </main>
  );
}