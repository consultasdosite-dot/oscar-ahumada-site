"use client";

import { useEffect, useMemo, useState } from "react";

type Resultado = {
  numero: number;
  titulo: string;
  destaque: string;
  texto: string;
  atencao: string;
  indicado: string;
};

const resultados: Record<number, Resultado> = {
  1: {
    numero: 1,
    titulo: "Liderança, independência e iniciativa",
    destaque:
      "A energia 1 favorece empresas que precisam abrir caminhos, assumir posições e construir uma identidade própria.",
    texto:
      "No Nome Fantasia, o número 1 traz uma vibração de autonomia, iniciativa, comando e realização. É uma energia que busca independência e tende a funcionar melhor quando a empresa possui liberdade para tomar decisões, desenvolver suas próprias ideias e estabelecer seu espaço no mercado. Favorece originalidade, inovação, coragem, autoconfiança e capacidade de iniciar novos projetos.",
    atencao:
      "O excesso de independência pode gerar decisões apressadas, dificuldade para ouvir outras pessoas e uma postura excessivamente individualista. Esta energia precisa de foco, estratégia e profundidade para que a força de iniciativa não se transforme em dispersão ou luta constante.",
    indicado:
      "Pode favorecer profissionais liberais, empreendedores independentes, lideranças, negócios autorais e atividades em que iniciativa e autonomia sejam fundamentais.",
  },
  2: {
    numero: 2,
    titulo: "Parcerias, relacionamentos e cooperação",
    destaque:
      "A energia 2 cresce através das pessoas, das conexões e da capacidade de construir boas relações.",
    texto:
      "No Nome Fantasia, o número 2 estimula participação social, relacionamentos, contatos, associações e trabalho conjunto. É uma vibração ligada à diplomacia, sensibilidade, receptividade, cooperação e capacidade de compreender as necessidades do outro. Pode contribuir para empresas que dependem de relacionamento, atendimento e construção de confiança.",
    atencao:
      "A dependência excessiva da aprovação ou da ação de outras pessoas pode provocar passividade e dificuldade para tomar decisões. A empresa precisa preservar sua capacidade de iniciativa e não permanecer esperando que parceiros, clientes ou circunstâncias determinem seus movimentos.",
    indicado:
      "Pode favorecer prestação de serviços, sociedades, trabalhos em equipe, atendimento ao público, assessorias, intermediações e atividades baseadas em relacionamento.",
  },
  3: {
    numero: 3,
    titulo: "Comunicação, criatividade e expansão",
    destaque:
      "A energia 3 precisa aparecer, comunicar e conquistar seu público.",
    texto:
      "No Nome Fantasia, o número 3 possui forte relação com expressão, comunicação, criatividade, sociabilidade e expansão. Favorece empresas que precisam chamar atenção, transmitir ideias, conquistar público e criar relacionamento através da comunicação. Existe potencial para publicidade, divulgação, ensino, imagem, estética e atividades criativas.",
    atencao:
      "Por ser uma energia expansiva, pode provocar dispersão. Muitas ideias, projetos e possibilidades podem tirar a empresa do objetivo principal. Comunicação sem estratégia não garante resultado: é necessário definir público, mensagem e direção.",
    indicado:
      "Pode favorecer comunicação, marketing, publicidade, ensino, eventos, entretenimento, artes, estética, criação de conteúdo e negócios que dependem de exposição pública.",
  },
  4: {
    numero: 4,
    titulo: "Estrutura, organização e solidez",
    destaque:
      "A energia 4 trabalha para construir bases firmes e resultados duradouros.",
    texto:
      "No Nome Fantasia, o número 4 está associado à estrutura, organização, disciplina, segurança, responsabilidade e capacidade administrativa. É uma vibração que valoriza planejamento, processos, continuidade e construção de patrimônio. Seus resultados tendem a ser conquistados através de trabalho consistente e perseverança.",
    atencao:
      "É uma energia que pode exigir paciência. O excesso de rigidez, rotina ou resistência às mudanças pode diminuir a velocidade de crescimento. A empresa precisa construir segurança sem perder a capacidade de adaptação.",
    indicado:
      "Pode favorecer construção, engenharia, imóveis, agricultura, agropecuária, patrimônio, administração e negócios que necessitam de estrutura sólida e planejamento de longo prazo.",
  },
  5: {
    numero: 5,
    titulo: "Movimento, liberdade e expansão",
    destaque:
      "A energia 5 precisa de movimento, novidades e novas oportunidades.",
    texto:
      "No Nome Fantasia, o número 5 estimula liberdade, versatilidade, expansão, mudanças, contatos e experiências novas. É uma energia dinâmica, comercial e adaptável, capaz de circular por diferentes ambientes e acompanhar transformações do mercado. Favorece empresas que precisam negociar, viajar, vender, comunicar e explorar novas oportunidades.",
    atencao:
      "O movimento constante pode produzir instabilidade, mudanças excessivas e períodos de altos e baixos. O desafio é transformar versatilidade em estratégia, evitando abandonar projetos antes que amadureçam.",
    indicado:
      "Pode favorecer turismo, transportes, vendas, comércio, representação, comunicação, negócios digitais e atividades que dependem de mobilidade e constante renovação.",
  },
  6: {
    numero: 6,
    titulo: "Serviço, cuidado e responsabilidade",
    destaque:
      "A energia 6 encontra força quando seu trabalho melhora a experiência e o bem-estar das pessoas.",
    texto:
      "No Nome Fantasia, o número 6 está relacionado à responsabilidade, colaboração, proteção, harmonia e prestação de serviços. É uma energia que tende a aproximar pessoas e estimular confiança, acolhimento e senso de comunidade. Também possui ligação com estética, cuidado, saúde, equilíbrio e atividades de assistência.",
    atencao:
      "A disposição para ajudar pode transformar-se em excesso de responsabilidade ou doação. É importante que a empresa mantenha equilíbrio entre servir bem e preservar sua sustentabilidade financeira, seus limites e seus próprios interesses.",
    indicado:
      "Pode favorecer clínicas, centros terapêuticos, saúde, estética, decoração, assistência, educação, atividades comunitárias e empresas voltadas ao cuidado e bem-estar.",
  },
  7: {
    numero: 7,
    titulo: "Conhecimento, especialização e profundidade",
    destaque:
      "A energia 7 busca conhecimento, análise, especialização e compreensão profunda.",
    texto:
      "No Nome Fantasia, o número 7 favorece pesquisa, observação, análise, conhecimento especializado, estudo e desenvolvimento intelectual ou espiritual. Pode contribuir para empresas cujo valor esteja na profundidade do conhecimento, na investigação ou em uma metodologia diferenciada.",
    atencao:
      "A introspecção característica desta energia pode dificultar exposição, relacionamento com o mercado e expansão comercial. Uma empresa com forte vibração 7 precisa prestar atenção especial à comunicação, presença pública, networking e abertura para novos públicos.",
    indicado:
      "Pode favorecer pesquisa, tecnologia, consultoria especializada, ensino, desenvolvimento humano, espiritualidade, terapias, investigação e atividades baseadas em conhecimento profundo.",
  },
  8: {
    numero: 8,
    titulo: "Resultados, administração e prosperidade material",
    destaque:
      "A energia 8 possui forte conexão com realização material, gestão e resultados.",
    texto:
      "No Nome Fantasia, o número 8 está associado à eficiência, execução, administração, autoridade, organização e capacidade de lidar com recursos materiais. É uma vibração voltada para concretização, crescimento, patrimônio, dinheiro e resultados. Favorece visão prática e capacidade de administrar aquilo que foi conquistado.",
    atencao:
      "A busca intensa por resultados pode gerar rigidez, excesso de controle ou concentração demasiada no aspecto material. O crescimento precisa ser acompanhado por estratégia, equilíbrio e responsabilidade.",
    indicado:
      "Pode favorecer empreendimentos comerciais, empresas, administração, investimentos, negócios patrimoniais e atividades em que gestão financeira e resultados sejam determinantes.",
  },
  9: {
    numero: 9,
    titulo: "Propósito, humanidade e alcance coletivo",
    destaque:
      "A energia 9 amplia a visão da empresa para pessoas, sociedade e propósitos maiores.",
    texto:
      "No Nome Fantasia, o número 9 está relacionado à participação social, solidariedade, sensibilidade, visão ampla, humanitarismo e capacidade de alcançar diferentes públicos. É uma energia que tende a valorizar propósito, contribuição coletiva, conhecimento humano e atividades capazes de produzir impacto além do interesse individual.",
    atencao:
      "O forte direcionamento para os outros pode fazer a empresa negligenciar seus próprios resultados. Propósito e sustentabilidade precisam caminhar juntos para que a dedicação ao coletivo não comprometa a estrutura financeira do negócio.",
    indicado:
      "Pode favorecer projetos sociais, organizações humanitárias, terapias, educação, cultura, atividades internacionais e negócios fortemente orientados por propósito.",
  },
};

const tabelaNumerologica: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, Ñ: 6, O: 7, P: 8, Q: 9,
  R: 1, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
};

function prepararNome(nome: string) {
  return nome
    .toUpperCase()
    .replace(/[ÁÀÂÃÄ]/g, "A")
    .replace(/[ÉÈÊË]/g, "E")
    .replace(/[ÍÌÎÏ]/g, "I")
    .replace(/[ÓÒÔÕÖ]/g, "O")
    .replace(/[ÚÙÛÜ]/g, "U")
    .replace(/Ç/g, "C");
}

function reduzirParaNove(numero: number): number {
  let atual = numero;
  while (atual > 9) {
    atual = String(atual)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }
  return atual;
}

function calcularNomeFantasia(nome: string) {
  const nomePreparado = prepararNome(nome);
  let soma = 0;

  for (const caractere of nomePreparado) {
    if (tabelaNumerologica[caractere]) {
      soma += tabelaNumerologica[caractere];
    }
  }

  if (soma === 0) return null;

  return {
    soma,
    numero: reduzirParaNove(soma),
  };
}

export default function NomeFantasiaPage() {
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [calculado, setCalculado] = useState<{
    soma: number;
    numero: number;
  } | null>(null);
  const [mostrarOferta, setMostrarOferta] = useState(false);

  const resultado = useMemo(() => {
    if (!calculado) return null;
    return resultados[calculado.numero];
  }, [calculado]);

  useEffect(() => {
    if (!calculado) {
      setMostrarOferta(false);
      return;
    }

    setMostrarOferta(false);

    const timer = window.setTimeout(() => {
      const agora = new Date();

      if (agora.getHours() < 22) {
        setMostrarOferta(true);
      }
    }, 40000);

    return () => window.clearTimeout(timer);
  }, [calculado]);

  function analisarNome() {
    const nome = nomeFantasia.trim();

    if (!nome) {
      setCalculado(null);
      return;
    }

    setMostrarOferta(false);
    setCalculado(calcularNomeFantasia(nome));

    setTimeout(() => {
      document
        .getElementById("resultado")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function novaAnalise() {
    setNomeFantasia("");
    setCalculado(null);
    setMostrarOferta(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#29231f]">
      {/* HERO */}
      <section className="px-5 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8b6d3f]">
            Numerologia Empresarial
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Descubra a energia do
            <span className="block text-[#8b6d3f]">Nome Fantasia</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#655d55] md:text-lg">
            O nome pelo qual sua empresa é conhecida possui uma vibração
            numerológica. Descubra agora qual energia está presente no seu Nome
            Fantasia.
          </p>
        </div>
      </section>

      {/* CALCULADORA */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-[#ded4c4] bg-white p-6 shadow-sm md:p-10">
          <label
            htmlFor="nomeFantasia"
            className="block text-sm font-semibold text-[#403830]"
          >
            Digite o Nome Fantasia da empresa
          </label>

          <input
            id="nomeFantasia"
            type="text"
            value={nomeFantasia}
            onChange={(event) => setNomeFantasia(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                analisarNome();
              }
            }}
            placeholder="Ex.: AuraMeets"
            className="mt-3 w-full rounded-2xl border border-[#d8cebf] bg-[#fcfaf6] px-5 py-4 text-lg outline-none transition focus:border-[#9c7a46] focus:ring-2 focus:ring-[#9c7a46]/15"
          />

          <p className="mt-3 text-sm leading-6 text-[#746b61]">
            Digite o nome exatamente como sua empresa utiliza e é conhecida
            comercialmente.
          </p>

          <button
            type="button"
            onClick={analisarNome}
            className="mt-6 w-full rounded-2xl bg-[#2f2924] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#8b6d3f]"
          >
            DESCOBRIR A ENERGIA DO NOME
          </button>
        </div>
      </section>

      {/* RESULTADO */}
      {resultado && calculado && (
        <section id="resultado" className="scroll-mt-6 px-5 pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-[32px] bg-[#29231f] text-white shadow-xl">
              <div className="px-6 py-10 text-center md:px-12 md:py-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4b47c]">
                  Resultado do Nome Fantasia
                </p>

                <p className="mt-3 text-lg text-[#e7dfd4]">
                  {nomeFantasia.trim()}
                </p>

                <div className="mx-auto mt-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#d4b47c] text-5xl font-semibold text-[#d4b47c]">
                  {resultado.numero}
                </div>

                <h2 className="mt-7 text-2xl font-semibold md:text-4xl">
                  {resultado.titulo}
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#e4ddd3] md:text-lg">
                  {resultado.destaque}
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <article className="rounded-[26px] border border-[#ded4c4] bg-white p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6d3f]">
                  Potencial da energia
                </p>
                <p className="mt-4 leading-7 text-[#514941]">{resultado.texto}</p>
              </article>

              <article className="rounded-[26px] border border-[#d6a64a] bg-[#fff4dc] p-6 shadow-sm md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b77a16] text-lg font-bold text-white">
                    !
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a5a0a]">
                    Ponto de atenção
                  </p>
                </div>

                <p className="leading-7 text-[#59461f]">{resultado.atencao}</p>

                <p className="mt-5 border-t border-[#e5c982] pt-4 text-sm font-semibold leading-6 text-[#76500e]">
                  Este ponto merece ser analisado em conjunto com os outros
                  números da sua empresa.
                </p>
              </article>
            </div>

            <article className="mt-6 rounded-[26px] border border-[#ded4c4] bg-[#eee5d7] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#765a34]">
                Áreas favorecidas
              </p>
              <p className="mt-4 leading-7 text-[#4e453c]">{resultado.indicado}</p>
            </article>

            {/* ANÁLISE COMPLETA */}
            <section className="mt-10 rounded-[32px] border border-[#d9cbb7] bg-white p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6d3f]">
                Atenção
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                O Nome Fantasia é apenas uma parte da identidade numerológica
                da sua empresa.
              </h3>

              <p className="mt-5 leading-7 text-[#5f564d]">
                Para compreender se existe harmonia entre as principais
                vibrações do negócio, uma análise empresarial completa deve
                observar outros elementos além do Nome Fantasia.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {[
                  {
                    numero: "01",
                    titulo: "Nome Fantasia",
                    texto:
                      "A identidade pela qual a empresa se apresenta ao mercado.",
                  },
                  {
                    numero: "02",
                    titulo: "Razão Social",
                    texto:
                      "A vibração presente no nome oficial e jurídico da empresa.",
                  },
                  {
                    numero: "03",
                    titulo: "Destino da Empresa",
                    texto:
                      "Calculado através da data de abertura, início ou registro da empresa.",
                  },
                  {
                    numero: "04",
                    titulo: "Endereço",
                    texto:
                      "Analisamos o número e também como o endereço é escrito, inclusive complementos como LJ, Loja, Sala ou similares.",
                  },
                  {
                    numero: "05",
                    titulo: "Logomarca",
                    texto:
                      "A identidade visual também participa da leitura completa da empresa.",
                  },
                ].map((item) => (
                  <div
                    key={item.numero}
                    className="rounded-2xl bg-[#f7f3eb] p-5"
                  >
                    <div className="flex gap-4">
                      <span className="text-sm font-bold text-[#9a7744]">
                        {item.numero}
                      </span>
                      <div>
                        <h4 className="font-semibold">{item.titulo}</h4>
                        <p className="mt-1 text-sm leading-6 text-[#6a6158]">
                          {item.texto}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-8 rounded-[32px] bg-[#8b6d3f] px-7 py-10 text-center text-white md:px-12 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f1dfbf]">
                Numerologia Empresarial
              </p>

              <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold leading-tight md:text-4xl">
                Seu Nome Fantasia combina com os outros números da sua empresa?
              </h3>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#fff8ec]">
                Uma empresa pode apresentar números excelentes quando
                analisados separadamente e, ainda assim, revelar conflitos
                quando observamos o conjunto. A análise empresarial permite
                estudar a relação entre essas vibrações.
              </p>

              <a
                href="https://wa.me/5551980339532?text=Ol%C3%A1%20Oscar%2C%20fiz%20o%20teste%20do%20Nome%20Fantasia%20no%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20An%C3%A1lise%20Numerol%C3%B3gica%20Empresarial."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-[#604923] transition hover:scale-[1.02]"
              >
                CONHECER A NUMEROLOGIA EMPRESARIAL
              </a>
            </section>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={novaAnalise}
                className="text-sm font-semibold text-[#765a34] underline underline-offset-4"
              >
                Calcular outro Nome Fantasia
              </button>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-5 text-[#857b70]">
              Este resultado apresenta exclusivamente a vibração numerológica
              do Nome Fantasia. Uma avaliação empresarial completa considera o
              conjunto dos elementos que compõem a identidade numerológica do
              negócio.
            </p>
          </div>
        </section>
      )}

      {/* POP-UP DA OFERTA */}
      {mostrarOferta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#17120d]/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-oferta"
        >
          <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-[#d6ad63] bg-white p-5 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setMostrarOferta(false)}
              aria-label="Fechar oferta"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#ded4c4] bg-white text-xl font-bold text-[#29231f] transition hover:bg-[#f7f3eb]"
            >
              ×
            </button>

            <div className="pr-10 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#8b6d3f]">
                Super oferta para hoje
              </p>
              <p className="mt-2 inline-block rounded-full bg-[#fff3cc] px-4 py-2 text-sm font-bold text-[#8a5a0a]">
                TERMINA HOJE ÀS 22:00
              </p>
            </div>

            <h2
              id="titulo-oferta"
              className="mx-auto mt-5 max-w-lg text-center text-2xl font-bold leading-tight text-[#29231f] sm:text-3xl"
            >
              Você descobriu apenas uma parte do que a Numerologia pode revelar.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-[#655d55] sm:text-base">
              Aproveite a condição especial de hoje para conhecer seu Mapa
              Numerológico Pessoal Completo e aprofundar a análise dos seus
              principais números.
            </p>

            <div className="mt-6 rounded-[24px] bg-[#29231f] p-5 text-center text-white sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4b47c]">
                Mapa completo + consulta online com Oscar Ahumada
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#e7dfd4]">
                Condição especial de hoje
              </p>
              <p className="mt-1 text-4xl font-extrabold text-[#d4b47c]">
                10x de R$ 35,00
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#e7dfd4]">
                Mapa Numerológico completo em texto + consulta online individual
                com Oscar Ahumada.
              </p>

              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-1avOg6eqCs-350,00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-full bg-[#d4b47c] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.04em] text-[#29231f] transition hover:-translate-y-1 hover:bg-[#e3c58f]"
              >
                Quero meu mapa + consulta
              </a>
            </div>

            <div className="mt-4 rounded-[22px] border border-[#ded4c4] bg-[#fffaf0] p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8b6d3f]">
                Prefere sem consulta?
              </p>
              <p className="mt-2 text-xl font-bold text-[#29231f]">
                Mapa Numerológico Completo em Texto
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#8b6d3f]">
                10x de R$ 17,00
              </p>

              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-GNIINzUFVO-170,00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-full border-2 border-[#29231f] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-[#29231f] transition hover:bg-[#29231f] hover:text-white"
              >
                Quero somente o mapa
              </a>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-[#746b61]">
              Oferta especial disponível nesta página até às 22:00 de hoje.
            </p>
          </div>
        </div>
      )}

      <footer className="border-t border-[#ddd3c4] px-5 py-8 text-center text-sm text-[#786f66]">
        Oscar Ahumada • Numerólogo das Estrelas
      </footer>
    </main>
  );
}
