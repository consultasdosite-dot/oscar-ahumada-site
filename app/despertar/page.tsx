
"use client";

import { useState } from "react";
import Image from "next/image";

type Diagnostico = {
  titulo: string;
  introducao: string[];
  aprofundamento: string[];
  evolucao: string[];
};

const diagnosticos: Record<number, Diagnostico> = {
  1: {
    titulo: "O poder da individualidade",
    introducao: [
      "Existe em você uma força que deseja construir o próprio caminho.",
      "Sua iniciativa pode abrir portas que outras pessoas não teriam coragem de atravessar.",
      "Entretanto, a independência excessiva pode transformar-se em isolamento.",
      "Nem sempre aceitar ajuda significa perder sua autoridade.",
      "Seu aprendizado é liderar a própria vida sem precisar controlar tudo.",
    ],
    aprofundamento: [
      "Quantas vezes você acreditou que precisava resolver tudo sem ajuda?",
      "O número 1 representa iniciativa, autonomia e capacidade de começar. Mas sua força precisa caminhar ao lado da humildade.",
      "Na vida pessoal, reconheça suas capacidades sem transformar cada situação em uma competição.",
      "Na vida afetiva, aprenda a ouvir antes de decidir. A verdadeira liderança também sabe acolher.",
      "Na vida material, transforme suas ideias em projetos concretos. Sua iniciativa será mais produtiva quando acompanhada de planejamento.",
    ],
    evolucao: [
      "Você não precisa provar sua força a todo momento.",
      "Seu maior desbloqueio começa quando compreende que independência não significa solidão.",
      "Aprenda a decidir com confiança, compartilhar responsabilidades e reconhecer suas conquistas sem se comparar com outras pessoas.",
    ],
  },
  2: {
    titulo: "O poder da sensibilidade",
    introducao: [
      "Você percebe sentimentos que muitas pessoas não conseguem expressar.",
      "Sua sensibilidade favorece a compreensão e a aproximação entre as pessoas.",
      "Entretanto, o desejo de agradar pode fazer você esquecer suas próprias necessidades.",
      "Nem sempre preservar a paz significa permanecer em silêncio.",
      "Seu aprendizado é desenvolver harmonia sem abandonar sua identidade.",
    ],
    aprofundamento: [
      "Quantas vezes você disse sim quando desejava dizer não?",
      "O número 2 representa cooperação, diplomacia e sensibilidade. Seu desafio é não depender da aprovação alheia.",
      "Na vida pessoal, reconheça que seus sentimentos também merecem atenção.",
      "Na vida afetiva, procure reciprocidade e expresse suas necessidades com clareza.",
      "Na vida material, valorize sua capacidade de construir parcerias, mas não permita que outras pessoas decidam tudo por você.",
    ],
    evolucao: [
      "Sua sensibilidade não é fraqueza.",
      "O desbloqueio acontece quando você aprende a estabelecer limites sem culpa.",
      "Compartilhe a vida, desenvolva a confiança e lembre-se de que sua opinião possui valor.",
    ],
  },
  3: {
    titulo: "O poder da expressão",
    introducao: [
      "Existe em você uma capacidade especial de comunicar sentimentos e ideias.",
      "Sua criatividade pode transformar situações comuns em novas possibilidades.",
      "Entretanto, a dispersão pode dificultar a conclusão dos seus projetos.",
      "Por trás da alegria, talvez existam emoções que você evita revelar.",
      "Seu aprendizado é transformar expressão em realização.",
    ],
    aprofundamento: [
      "Quantas ideias você deixou para depois?",
      "O número 3 representa comunicação, criatividade e entusiasmo. Sua evolução depende de dar continuidade ao que começa.",
      "Na vida pessoal, permita-se expressar sentimentos verdadeiros.",
      "Na vida afetiva, procure profundidade além das conversas agradáveis.",
      "Na vida material, utilize sua comunicação para desenvolver oportunidades e estabeleça prioridades.",
    ],
    evolucao: [
      "Sua criatividade merece direção.",
      "O desbloqueio acontece quando você deixa de apenas imaginar possibilidades e começa a realizá-las.",
      "Use suas palavras para construir, sua alegria para fortalecer e seu talento para transformar.",
    ],
  },
  4: {
    titulo: "O poder da construção",
    introducao: [
      "Você possui capacidade para construir segurança e estabilidade.",
      "Sua perseverança ajuda a enfrentar desafios com responsabilidade.",
      "Entretanto, o excesso de preocupação pode tornar a vida pesada.",
      "Nem toda mudança representa uma ameaça àquilo que conquistou.",
      "Seu aprendizado é construir sem perder a liberdade.",
    ],
    aprofundamento: [
      "Quantas oportunidades você evitou por medo de sair da rotina?",
      "O número 4 representa disciplina, organização e perseverança. Seu desafio é não transformar responsabilidade em rigidez.",
      "Na vida pessoal, permita-se descansar sem culpa.",
      "Na vida afetiva, demonstre carinho além das obrigações.",
      "Na vida material, mantenha o planejamento, mas aceite novas possibilidades quando fizerem sentido.",
    ],
    evolucao: [
      "Sua segurança não depende de controlar cada detalhe.",
      "O desbloqueio começa quando você aprende a confiar na própria capacidade de adaptação.",
      "Construa uma vida sólida, mas deixe espaço para a alegria, a espontaneidade e o novo.",
    ],
  },
  5: {
    titulo: "O poder da liberdade",
    introducao: [
      "Você possui uma necessidade natural de movimento e novas experiências.",
      "Sua versatilidade permite descobrir caminhos diferentes.",
      "Entretanto, a busca constante por novidades pode dificultar a continuidade.",
      "Liberdade não significa ausência de compromisso.",
      "Seu aprendizado é escolher conscientemente o que merece permanecer.",
    ],
    aprofundamento: [
      "Quantas vezes você abandonou algo porque deixou de ser novidade?",
      "O número 5 representa transformação, movimento e adaptação. Seu desafio é desenvolver constância.",
      "Na vida pessoal, encontre equilíbrio entre novidade e estabilidade.",
      "Na vida afetiva, compreenda que compromisso não precisa significar aprisionamento.",
      "Na vida material, transforme sua versatilidade em resultados, evitando decisões impulsivas.",
    ],
    evolucao: [
      "A verdadeira liberdade nasce da consciência.",
      "Seu desbloqueio acontece quando você deixa de fugir das limitações e começa a escolher seus caminhos.",
      "Experimente, descubra e transforme, mas reconheça o valor daquilo que construiu.",
    ],
  },
  6: {
    titulo: "O poder do amor",
    introducao: [
      "Você possui uma grande capacidade de acolher e proteger.",
      "Sua dedicação pode proporcionar segurança às pessoas próximas.",
      "Entretanto, cuidar de todos pode fazer você esquecer de si.",
      "O amor não precisa ser demonstrado através de sacrifícios constantes.",
      "Seu aprendizado é oferecer carinho sem abandonar suas necessidades.",
    ],
    aprofundamento: [
      "Quantas responsabilidades você assumiu para evitar que outras pessoas sofressem?",
      "O número 6 representa família, harmonia e responsabilidade. Seu desafio é não transformar amor em controle.",
      "Na vida pessoal, reserve tempo para seus próprios desejos.",
      "Na vida afetiva, permita que cada pessoa assuma suas escolhas.",
      "Na vida material, valorize seu trabalho e estabeleça limites para sua generosidade.",
    ],
    evolucao: [
      "Você também merece o cuidado que oferece.",
      "O desbloqueio começa quando compreende que não precisa ser indispensável para ser amado.",
      "Cuide com carinho, compartilhe responsabilidades e aprenda a receber.",
    ],
  },
  7: {
    titulo: "O poder da sabedoria",
    introducao: [
      "Existe em você um universo interior que poucas pessoas conseguem conhecer.",
      "Sua capacidade de observar e compreender vai além das aparências.",
      "Entretanto, sua sensibilidade pode conduzir ao isolamento e à desconfiança.",
      "Nem sempre as pessoas compreendem sua maneira de amar.",
      "Seu grande aprendizado é transformar profundidade interior em liberdade emocional.",
    ],
    aprofundamento: [
      "Quantas vezes você permaneceu em silêncio quando desejava ser compreendido?",
      "O número 7 representa investigação, sabedoria e autoconhecimento. Sua mente procura respostas, mas nem tudo pode ser resolvido apenas pela análise.",
      "Na vida pessoal, confie mais em suas capacidades e evite o excesso de autocrítica.",
      "Na vida afetiva, permita que as pessoas conheçam seus sentimentos. Não espere que adivinhem aquilo que você não expressa.",
      "Na vida material, transforme conhecimento em oportunidades. Não espere dominar completamente uma situação para agir.",
    ],
    evolucao: [
      "Talvez seu maior obstáculo não esteja nas circunstâncias, mas na maneira como aprendeu a se proteger delas.",
      "Não permita que sua inteligência aprisione suas emoções ou que sua prudência impeça suas conquistas.",
      "Seu desbloqueio começa quando transforma conhecimento em ação e silêncio em comunicação consciente.",
    ],
  },
  8: {
    titulo: "O poder da realização",
    introducao: [
      "Você possui uma energia associada à liderança e à realização.",
      "Sua determinação pode transformar esforço em conquistas concretas.",
      "Entretanto, a necessidade de controlar resultados pode provocar desgaste.",
      "Seu valor não depende apenas daquilo que consegue conquistar.",
      "Seu aprendizado é utilizar o poder com equilíbrio e consciência.",
    ],
    aprofundamento: [
      "Quantas vezes você deixou de aproveitar o presente por pensar na próxima responsabilidade?",
      "O número 8 representa administração, autoridade e realização material. Seu desafio é equilibrar ambição e qualidade de vida.",
      "Na vida pessoal, reconheça suas conquistas sem cobranças permanentes.",
      "Na vida afetiva, substitua controle por confiança e diálogo.",
      "Na vida material, organize seus recursos e tome decisões conscientes, sem transformar dinheiro na única medida de sucesso.",
    ],
    evolucao: [
      "Você não precisa demonstrar força permanentemente.",
      "Seu desbloqueio acontece quando compreende que prosperidade também significa tranquilidade.",
      "Conquiste sem dominar, administre sem controlar tudo e aprenda a desfrutar aquilo que construiu.",
    ],
  },
  9: {
    titulo: "O poder da transformação",
    introducao: [
      "Você possui sensibilidade para compreender experiências e dificuldades humanas.",
      "Sua generosidade pode contribuir para transformar a vida de outras pessoas.",
      "Entretanto, ajudar não significa carregar o sofrimento alheio.",
      "Alguns ciclos precisam terminar para que novos caminhos apareçam.",
      "Seu aprendizado é desenvolver compaixão sem abandonar a si mesmo.",
    ],
    aprofundamento: [
      "Quantas vezes você permaneceu numa situação por acreditar que poderia transformar alguém?",
      "O número 9 representa compreensão, generosidade e encerramento de ciclos. Seu desafio é praticar o desapego.",
      "Na vida pessoal, reconheça quando uma experiência já cumpriu seu papel.",
      "Na vida afetiva, aprenda a perdoar sem aceitar situações que prejudiquem seu bem-estar.",
      "Na vida material, valorize seus talentos e estabeleça limites para aquilo que oferece.",
    ],
    evolucao: [
      "Seu passado não precisa determinar seu futuro.",
      "O desbloqueio começa quando você transforma experiências em sabedoria, sem carregar permanentemente suas dores.",
      "Ajude, compreenda e acolha, mas preserve sua própria caminhada.",
    ],
  },
  11: {
    titulo: "O poder da inspiração",
    introducao: [
      "Você possui uma sensibilidade capaz de perceber detalhes que passam despercebidos.",
      "Sua intuição pode inspirar ideias e novas maneiras de compreender a vida.",
      "Entretanto, a intensidade emocional pode provocar insegurança.",
      "Nem todo sentimento precisa transformar-se em preocupação.",
      "Seu aprendizado é unir inspiração, equilíbrio e confiança.",
    ],
    aprofundamento: [
      "Quantas vezes você duvidou de suas percepções por medo do julgamento alheio?",
      "O número mestre 11 representa inspiração, percepção e sensibilidade elevada. Seu desafio é encontrar equilíbrio emocional.",
      "Na vida pessoal, desenvolva confiança e discernimento.",
      "Na vida afetiva, expresse sentimentos e estabeleça limites saudáveis.",
      "Na vida material, transforme ideias inspiradoras em iniciativas práticas e sustentáveis.",
    ],
    evolucao: [
      "Sua sensibilidade pode tornar-se uma força quando acompanhada de consciência.",
      "O desbloqueio começa quando você deixa de temer sua intensidade interior.",
      "Inspire outras pessoas, mas lembre-se de cuidar da própria tranquilidade.",
    ],
  },
  22: {
    titulo: "O poder das grandes construções",
    introducao: [
      "Existe em você um potencial para transformar ideias em realizações significativas.",
      "Sua capacidade de organização pode contribuir para projetos importantes.",
      "Entretanto, grandes expectativas podem transformar-se em cobranças excessivas.",
      "Você não precisa assumir todas as responsabilidades.",
      "Seu aprendizado é construir sem sacrificar sua felicidade.",
    ],
    aprofundamento: [
      "Quantas vezes você acreditou que ninguém poderia realizar uma tarefa da mesma maneira que você?",
      "O número mestre 22 representa visão, construção e capacidade prática. Seu desafio é respeitar seus limites.",
      "Na vida pessoal, reconheça que descansar também faz parte da realização.",
      "Na vida afetiva, compartilhe decisões e permita que outras pessoas participem.",
      "Na vida material, desenvolva projetos com planejamento, paciência e propósito.",
    ],
    evolucao: [
      "Você não precisa carregar o mundo para demonstrar grandeza.",
      "Seu desbloqueio começa quando aprende a dividir responsabilidades e reconhecer pequenas conquistas.",
      "Construa algo significativo, mas inclua sua própria felicidade nesse projeto.",
    ],
  },
};

const alfabeto: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 9,
  R: 1, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
};

function calcularNumero(nome: string): number | null {
  const primeiroNome = nome.trim().split(/\s+/)[0] || "";

  const letras = primeiroNome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  if (!/^[A-Z]+$/.test(letras)) return null;

  let soma = 0;

  for (const letra of letras) {
    soma += alfabeto[letra] ?? 0;
  }

  while (soma > 9 && soma !== 11 && soma !== 22) {
    soma = String(soma)
      .split("")
      .reduce((total, digito) => total + Number(digito), 0);
  }

  return soma;
}

export default function DespertarPage() {
  const [nome, setNome] = useState("");
  const [nomeConfirmado, setNomeConfirmado] = useState("");
  const [fase, setFase] = useState(0);
  const [erro, setErro] = useState("");

  const numero = nomeConfirmado
    ? calcularNumero(nomeConfirmado)
    : null;

  const diagnostico = numero !== null
    ? diagnosticos[numero]
    : null;

  const primeiroNome = nomeConfirmado.trim().split(/\s+/)[0] || "";

  const nomeExibicao = primeiroNome
    ? primeiroNome.charAt(0).toUpperCase() +
      primeiroNome.slice(1).toLowerCase()
    : "";

  function iniciar() {
    const valor = nome.trim();

    if (!calcularNumero(valor)) {
      setErro("Digite seu primeiro nome utilizando apenas letras.");
      return;
    }

    setErro("");
    setNomeConfirmado(valor);
    setFase(1);
  }

  function reiniciar() {
    setNome("");
    setNomeConfirmado("");
    setFase(0);
    setErro("");
  }

  function compartilhar() {
    const mensagem =
      "Quero compartilhar uma experiência de autoconhecimento com você. " +
      "Descubra o poder do seu nome através da Numerologia Latina de Oscar Ahumada: " +
      "https://www.oscarahumada.com.br/despertar";

    window.open(
      `https://wa.me/?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-4 py-8 text-[#302b27] sm:py-12">
      <div className="mx-auto w-full max-w-xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5">
          <div className="relative aspect-square w-full bg-[#eee8dd]">
            <Image
              src="/images/oscar-mentoria-topo.png"
              alt="Oscar Ahumada convidando você para uma jornada de autoconhecimento"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-cover"
            />
          </div>

          <div className="px-5 py-8 sm:px-10 sm:py-10">
            {fase === 0 && (
              <section className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a17d42]">
                  Numerologia Latina
                </p>

                <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                  Desperte o poder do seu nome
                </h1>

                <p className="mt-5 text-base leading-7 text-[#655e55]">
                  Seu nome pode revelar características que você
                  reconhece, desafios que precisa compreender e
                  talentos que merecem ser desenvolvidos.
                </p>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    iniciar();
                  }}
                  className="mt-8"
                >
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-left text-sm font-medium"
                  >
                    Qual é o seu primeiro nome?
                  </label>

                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    placeholder="Digite seu primeiro nome"
                    autoComplete="given-name"
                    maxLength={60}
                    className="w-full rounded-xl border border-[#d8d0c3] bg-white px-4 py-4 text-base outline-none transition focus:border-[#b28a50] focus:ring-2 focus:ring-[#b28a50]/20"
                  />

                  {erro && (
                    <p role="alert" className="mt-2 text-left text-sm text-red-700">
                      {erro}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="mt-5 w-full rounded-xl bg-[#172b43] px-5 py-4 font-semibold text-white transition hover:bg-[#253e5a]"
                  >
                    DESPERTAR MEU NOME
                  </button>
                </form>
              </section>
            )}

            {fase > 0 && diagnostico && (
              <article>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a17d42]">
                    Sua jornada de autoconhecimento
                  </p>

                  <h1 className="mt-3 break-words font-serif text-3xl sm:text-4xl">
                    {nomeExibicao}
                  </h1>

                  <h2 className="mt-3 font-serif text-xl text-[#a17d42] sm:text-2xl">
                    {diagnostico.titulo}
                  </h2>

                  <p className="mt-2 text-sm text-[#746b61]">
                    Etapa {fase} de 3
                  </p>

                  <div className="mt-5 flex gap-2">
                    {[1, 2, 3].map((etapa) => (
                      <span
                        key={etapa}
                        className={`h-1.5 flex-1 rounded-full ${
                          fase >= etapa
                            ? "bg-[#b28a50]"
                            : "bg-[#e8e2d9]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-base leading-8 text-[#403a34]">
                  {diagnostico.introducao.map((paragrafo, index) => (
                    <p key={`intro-${index}`}>{paragrafo}</p>
                  ))}
                </div>

                {fase >= 2 && (
                  <section className="mt-9 border-t border-[#e9e3d9] pt-8">
                    <h3 className="font-serif text-2xl">
                      Aprenda a utilizar seu poder
                    </h3>

                    <div className="mt-5 space-y-5 text-base leading-8">
                      {diagnostico.aprofundamento.map((paragrafo, index) => (
                        <p key={`profundo-${index}`}>{paragrafo}</p>
                      ))}
                    </div>
                  </section>
                )}

                {fase >= 3 && (
                  <section className="mt-9 border-t border-[#e9e3d9] pt-8">
                    <h3 className="font-serif text-2xl">
                      Desbloqueie o caminho da sua evolução
                    </h3>

                    <div className="mt-5 space-y-5 text-base leading-8">
                      {diagnostico.evolucao.map((paragrafo, index) => (
                        <p key={`evolucao-${index}`}>{paragrafo}</p>
                      ))}
                    </div>

                    <div className="mt-9 rounded-2xl bg-[#f8f5ef] p-5">
                      <h3 className="font-serif text-xl">
                        Seu nome é apenas o começo
                      </h3>

                      <p className="mt-4 leading-7">
                        Sua data de nascimento revela outra dimensão
                        importante do autoconhecimento: o seu Destino.
                      </p>

                      <p className="mt-4 leading-7">
                        Com a Numerologia Latina de Oscar Ahumada,
                        você poderá aprofundar a compreensão dos seus
                        talentos, reconhecer comportamentos que
                        dificultam suas realizações e descobrir
                        caminhos para uma vida mais consciente.
                      </p>

                      <a
                        href="https://www.oscarahumada.com.br"
                        className="mt-6 block rounded-xl bg-[#172b43] px-5 py-4 text-center font-semibold text-white"
                      >
                        QUERO CONHECER MEU DESTINO
                      </a>
                    </div>

                    <div className="mt-9 text-center">
                      <h3 className="font-serif text-2xl">
                        Compartilhe esta descoberta
                      </h3>

                      <p className="mt-4 leading-7">
                        Convide três amigas para descobrir o poder
                        que existe em seus próprios nomes.
                      </p>

                      <button
                        type="button"
                        onClick={compartilhar}
                        className="mt-5 w-full rounded-xl border border-[#b28a50] px-5 py-4 font-semibold text-[#80602e] transition hover:bg-[#f8f5ef]"
                      >
                        COMPARTILHAR COM 3 AMIGAS
                      </button>

                      <p className="mt-3 text-xs text-[#82786d]">
                        Escolha as destinatárias no WhatsApp.
                      </p>
                    </div>
                  </section>
                )}

                {fase < 3 && (
                  <button
                    type="button"
                    onClick={() => setFase((atual) => atual + 1)}
                    className="mt-9 w-full rounded-xl bg-[#172b43] px-5 py-4 font-semibold text-white transition hover:bg-[#253e5a]"
                  >
                    LEIA MAIS
                  </button>
                )}

                <button
                  type="button"
                  onClick={reiniciar}
                  className="mt-6 w-full py-3 text-sm text-[#746b61] underline underline-offset-4"
                >
                  Consultar outro nome
                </button>
              </article>
            )}
          </div>
        </div>

        <div className="mt-7 text-center">
          <p className="font-serif text-xl text-[#a17d42]">
            Oscar Ahumada
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#746b61]">
            Numerólogo das Estrelas
          </p>
        </div>
      </div>
    </main>
  );
}
