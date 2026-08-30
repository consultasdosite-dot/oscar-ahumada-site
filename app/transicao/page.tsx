"use client";

import { FormEvent, useRef, useState } from "react";

type Transicao = {
  de: number;
  para: number;
  titulo: string;
  introducao: string;
  pessoal: string;
  amoroso: string;
  espiritual: string;
  profissional: string;
  material: string;
  fechamento: string;
};

const transicoes: Record<number, Transicao> = {
  1: {
    de: 1,
    para: 2,
    titulo: "Da iniciativa para as relações",
    introducao:
      "2026 coloca você diante de um ciclo de começos, decisões e afirmação pessoal. É um período para assumir a direção da própria vida, iniciar projetos e descobrir novas possibilidades. Em 2027, porém, a energia muda: você sai da força individual do 1 e entra na sensibilidade, cooperação e construção de vínculos do Ano 2.",
    pessoal:
      "Em 2026, o principal aprendizado é confiar mais em si, tomar decisões e não esperar que outras pessoas definam seus caminhos. Em 2027, a vida pedirá mais paciência, escuta e capacidade de compartilhar. O desafio será continuar acreditando em suas escolhas sem transformar independência em isolamento.",
    amoroso:
      "O Ano 1 pode trazer novos encontros, mudanças de postura afetiva ou o desejo de recomeçar emocionalmente. Em 2027, os relacionamentos ganham maior importância. Será necessário observar reciprocidade, parceria, diálogo e maturidade emocional.",
    espiritual:
      "2026 desperta a consciência da identidade: quem sou e o que realmente quero? Em 2027, sua evolução acontece através do encontro com o outro. Empatia, confiança, sensibilidade e percepção dos sinais ganham importância.",
    profissional:
      "2026 favorece novos projetos, reposicionamento profissional e protagonismo. Em 2027, os resultados dependerão mais de alianças, negociações, parcerias e da capacidade de trabalhar em conjunto.",
    material:
      "2026 estimula iniciativas para aumentar autonomia e renda. Já 2027 recomenda prudência, organização e construção gradual. O crescimento material poderá vir de acordos bem estruturados e escolhas consistentes.",
    fechamento:
      "A grande transição é aprender que começar sozinho não significa continuar sozinho. 2026 pergunta: “O que você deseja iniciar?”. 2027 perguntará: “Com quem vale a pena construir?”",
  },

  2: {
    de: 2,
    para: 3,
    titulo: "Da espera para a expressão",
    introducao:
      "2026 trabalha relações, sensibilidade, acordos e amadurecimento emocional. Muitas situações podem exigir paciência. Em 2027, você entra no Ano 3, trazendo comunicação, criatividade, movimento social e maior necessidade de expressar aquilo que amadureceu internamente.",
    pessoal:
      "2026 pede equilíbrio emocional e capacidade de observar antes de agir. Em 2027, a tendência é sentir mais leveza, coragem para se mostrar e vontade de experimentar novas possibilidades.",
    amoroso:
      "Relacionamentos recebem forte atenção em 2026. Há oportunidade de fortalecer vínculos, mas também de perceber dependências emocionais. Em 2027, o amor precisa de comunicação, alegria e espontaneidade.",
    espiritual:
      "O Ano 2 desenvolve intuição e sensibilidade. O Ano 3 transforma essa percepção em expressão. Pode surgir maior interesse por compartilhar experiências, estudar, escrever, ensinar ou falar sobre aquilo em que acredita.",
    profissional:
      "2026 favorece bastidores, parcerias e negociações. Em 2027, será hora de aparecer mais. Comunicação, marketing, criatividade, divulgação e networking podem ganhar força.",
    material:
      "A prudência de 2026 ajuda a organizar recursos. Em 2027, cuidado com gastos por entusiasmo. Ao mesmo tempo, oportunidades financeiras podem surgir através de contatos, criatividade e exposição profissional.",
    fechamento:
      "Você sai de um período de preparação emocional e entra em um período de expressão. 2026 pergunta: “O que estou sentindo?”. 2027 perguntará: “Como vou expressar isso ao mundo?”",
  },

  3: {
    de: 3,
    para: 4,
    titulo: "Da expansão para a construção",
    introducao:
      "2026 favorece comunicação, criatividade, contatos, prazer e expansão. Em 2027, a vibração 4 muda o ritmo: será necessário organizar, estruturar e transformar ideias em algo concreto.",
    pessoal:
      "Em 2026, você pode explorar interesses e ampliar sua vida social. Em 2027, será necessário selecionar prioridades, criar disciplina e assumir responsabilidades.",
    amoroso:
      "O Ano 3 traz leveza, encontros e diálogo. Em 2027, os relacionamentos passam pelo teste da realidade. Compromisso, rotina, estabilidade e construção de futuro tornam-se mais importantes.",
    espiritual:
      "2026 ajuda você a encontrar alegria e expressão interior. Em 2027, espiritualidade significa prática: transformar conhecimento em hábitos, valores e atitudes concretas.",
    profissional:
      "A criatividade de 2026 pode abrir portas. O Ano 4 exigirá planejamento, organização, método e continuidade. É um período importante para consolidar carreira ou estruturar negócios.",
    material:
      "2027 será importante para organização financeira, patrimônio e planejamento. A prosperidade tende a vir mais da disciplina e da construção do que da improvisação.",
    fechamento:
      "É a passagem de imaginar para construir. 2026 pergunta: “O que quero experimentar?”. 2027 perguntará: “O que estou disposto a construir de verdade?”",
  },

  4: {
    de: 4,
    para: 5,
    titulo: "Da estrutura para a mudança",
    introducao:
      "2026 exige trabalho, organização, disciplina e responsabilidade. Em 2027, chega o Ano 5 trazendo movimento, mudanças, liberdade e oportunidades inesperadas. Quanto melhor você organizar 2026, maior será sua liberdade em 2027.",
    pessoal:
      "O Ano 4 ensina estabilidade e perseverança. Em 2027, será necessário flexibilizar. Mudanças de rotina, interesses ou estilo de vida podem acontecer.",
    amoroso:
      "2026 pode trazer conversas sobre estabilidade e compromisso. Em 2027, relacionamentos precisam respirar. Relações rígidas podem enfrentar tensão, enquanto vínculos baseados em confiança podem ganhar novas experiências.",
    espiritual:
      "Em 2026, evolução significa constância. Em 2027, significa experiência. Viagens, novos conhecimentos, pessoas diferentes ou acontecimentos inesperados podem ampliar sua visão da vida.",
    profissional:
      "O trabalho de 2026 cria uma base. Em 2027, podem surgir mudanças profissionais, propostas, deslocamentos ou novas áreas de atuação.",
    material:
      "2026 é excelente para organizar contas, reservas e patrimônio. Isso será importante porque o Ano 5 pode trazer maior movimentação financeira e despesas inesperadas.",
    fechamento:
      "Você estará passando da segurança para o movimento. 2026 pergunta: “O que precisa de estrutura?”. 2027 perguntará: “Do que você precisa se libertar para crescer?”",
  },

  5: {
    de: 5,
    para: 6,
    titulo: "Da liberdade para o compromisso",
    introducao:
      "2026 é marcado por movimento, experiências, mudanças e desejo de liberdade. Em 2027, o Ano 6 direciona a atenção para relacionamentos, família, responsabilidades, casa e escolhas afetivas.",
    pessoal:
      "2026 amplia horizontes e pode provocar mudanças importantes. Em 2027, você tende a buscar maior equilíbrio, pertencimento e estabilidade emocional.",
    amoroso:
      "O Ano 5 favorece novidades e intensidade. Em 2027, o amor tende a pedir definição. Relações podem avançar para maior compromisso, enquanto vínculos sem estrutura podem ser questionados.",
    espiritual:
      "A liberdade de 2026 ensina através das experiências. O Ano 6 ensina através do cuidado e da responsabilidade emocional. O aprendizado estará em amar sem abandonar a si mesmo.",
    profissional:
      "2026 pode trazer mudanças profissionais ou novas oportunidades. Em 2027, será importante estabilizar resultados, cuidar da reputação e assumir responsabilidades maiores.",
    material:
      "Depois de um período de maior movimento, 2027 favorece organização doméstica, patrimônio e investimentos ligados à qualidade de vida.",
    fechamento:
      "2026 pergunta: “Que novas possibilidades quero experimentar?”. 2027 perguntará: “Com o que estou realmente disposto a me comprometer?”",
  },

  6: {
    de: 6,
    para: 7,
    titulo: "Do compromisso para a interiorização",
    introducao:
      "2026 concentra energia em família, relacionamentos, responsabilidades e equilíbrio. Em 2027, o Ano 7 reduz o ritmo externo e amplia a necessidade de reflexão, conhecimento e autoconhecimento.",
    pessoal:
      "Depois de um período em que outras pessoas podem ter exigido bastante de você, 2027 traz necessidade de espaço pessoal. Será importante respeitar seus limites e compreender melhor suas próprias necessidades.",
    amoroso:
      "2026 coloca os relacionamentos no centro das decisões. Em 2027, pode existir maior necessidade de silêncio e profundidade. Relações maduras saberão respeitar esse movimento.",
    espiritual:
      "Essa é uma transição especialmente importante espiritualmente. O Ano 7 favorece estudos, meditação, terapias, investigação interior e busca de significado.",
    profissional:
      "2026 favorece responsabilidades e reconhecimento. Em 2027, pode ser necessário revisar estratégias, estudar, especializar-se ou preparar movimentos futuros.",
    material:
      "2027 recomenda prudência. Avaliar, pesquisar e compreender riscos será mais importante do que simplesmente expandir.",
    fechamento:
      "Você sai de um ano dedicado às relações e entra em um ano dedicado à compreensão. 2026 pergunta: “Por quem e pelo que sou responsável?”. 2027 perguntará: “Quem sou quando silencio o mundo exterior?”",
  },

  7: {
    de: 7,
    para: 8,
    titulo: "Da reflexão para a realização",
    introducao:
      "2026 é um período de análise, introspecção, estudo e amadurecimento. Em 2027, você entra na força do Ano 8, uma vibração ligada a resultados, carreira, dinheiro, liderança e realização material.",
    pessoal:
      "Tudo aquilo que você compreende sobre si em 2026 pode transformar sua postura em 2027. Será necessário acreditar mais no próprio valor, posicionar-se e assumir responsabilidades maiores.",
    amoroso:
      "2026 pode trazer necessidade de espaço e reflexão emocional. Em 2027, relações passam a lidar mais diretamente com decisões, planos e realidade.",
    espiritual:
      "O Ano 7 aprofunda sua percepção. O Ano 8 testará como você aplica essa consciência no mundo material. Espiritualidade e prosperidade não precisam ser opostas.",
    profissional:
      "2027 poderá ser um dos períodos mais importantes do ciclo para carreira e negócios. Reconhecimento, liderança, negociações e crescimento podem ganhar destaque.",
    material:
      "A vibração 8 aumenta a atenção para dinheiro, patrimônio e resultados. O que foi estudado e planejado em 2026 pode começar a gerar retorno.",
    fechamento:
      "Esta é a passagem do conhecimento para o poder de realização. 2026 pergunta: “O que preciso compreender?”. 2027 perguntará: “O que farei com tudo aquilo que aprendi?”",
  },

  8: {
    de: 8,
    para: 9,
    titulo: "Da realização para a conclusão",
    introducao:
      "Você está atravessando uma transição numerológica muito significativa. Enquanto 2026 coloca você diante de resultados, poder de decisão, realização e consequências das escolhas feitas nos últimos anos, 2027 inicia uma etapa de conclusões, libertação, desapego e preparação para o encerramento de um grande ciclo.",
    pessoal:
      "Em 2026, a vibração 8 pede força, maturidade e posicionamento. É um período para reconhecer o próprio valor, estabelecer limites e assumir maior controle sobre a direção da sua vida. Em 2027, pessoas, hábitos e antigas versões de você mesmo podem começar a perder sentido.",
    amoroso:
      "No campo afetivo, 2026 pode colocar relacionamentos diante de decisões importantes. Relações consistentes podem buscar maior estabilidade. Em 2027, o amor passa por uma depuração emocional: histórias antigas podem precisar ser compreendidas, perdoadas ou encerradas.",
    espiritual:
      "2026 ensina sobre responsabilidade e consequências. Em 2027, surge maior necessidade de compreender acontecimentos passados, perdoar, abandonar ressentimentos e encontrar significado nas experiências vividas.",
    profissional:
      "2026 é especialmente relevante para carreira e negócios. Liderança, reconhecimento e crescimento podem ganhar força. Em 2027, a pergunta muda de “quanto posso conquistar?” para “o que ainda faz sentido continuar?”.",
    material:
      "O Ano 8 possui forte relação com dinheiro, patrimônio e resultados materiais. Em 2027, chega o momento de revisar despesas, investimentos, bens e compromissos.",
    fechamento:
      "Você estará passando da realização para a conclusão. 2026 pergunta: “O que ainda preciso conquistar e organizar?”. 2027 perguntará: “O que preciso concluir, compreender e deixar ir antes de começar novamente?”",
  },

  9: {
    de: 9,
    para: 1,
    titulo: "Do encerramento para um novo começo",
    introducao:
      "Esta é uma das transições mais poderosas do ciclo numerológico. 2026 encerra um ciclo de nove anos. Em 2027, o Ano 1 abre uma nova jornada. O que você conseguir concluir, liberar e compreender em 2026 determinará quanto espaço existirá para o novo entrar.",
    pessoal:
      "2026 pede desapego e encerramento de situações que já cumpriram sua função. Em 2027, uma nova identidade começa a emergir. Você poderá sentir vontade de mudar hábitos, decisões e prioridades.",
    amoroso:
      "Relações passam por avaliação profunda em 2026. Alguns vínculos podem ser renovados; outros podem chegar ao fim. Em 2027, abre-se espaço para novos encontros ou uma nova forma de viver uma relação existente.",
    espiritual:
      "O Ano 9 favorece perdão, compreensão e fechamento de ciclos emocionais. O Ano 1 traz a oportunidade de escrever uma nova história.",
    profissional:
      "2026 favorece conclusão de projetos e revisão da trajetória profissional. Em 2027, novas ideias, negócios, funções ou caminhos podem surgir.",
    material:
      "Pendências financeiras e compromissos antigos merecem atenção em 2026. Quanto mais organizado estiver, maior será sua liberdade para investir em novas possibilidades em 2027.",
    fechamento:
      "Você estará fechando uma porta e abrindo outra. 2026 pergunta: “O que terminou?”. 2027 perguntará: “O que estou pronto para começar?”",
  },
};

function reduzir(numero: number): number {
  let resultado = numero;

  while (resultado > 9) {
    resultado = String(resultado)
      .split("")
      .reduce((total, numeroAtual) => total + Number(numeroAtual), 0);
  }

  return resultado;
}

function calcularAnoPessoal(dataNascimento: string, ano: number): number {
  const partes = dataNascimento.split("-");

  if (partes.length !== 3) return 0;

  const mes = Number(partes[1]);
  const dia = Number(partes[2]);

  const somaAno = String(ano)
    .split("")
    .reduce((total, numeroAtual) => total + Number(numeroAtual), 0);

  return reduzir(dia + mes + somaAno);
}

function BlocoResultado({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {
  return (
    <div className="border-b border-[#e8e1d4] pb-7 last:border-none">
      <h3 className="mb-3 text-xl font-bold text-[#12365c]">{titulo}</h3>

      <p className="text-[17px] leading-8 text-[#475569]">{texto}</p>
    </div>
  );
}

export default function TransicaoPage() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [resultado, setResultado] = useState<Transicao | null>(null);

  const resultadoRef = useRef<HTMLDivElement>(null);

  function descobrirTransicao(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!nome.trim() || !dataNascimento || !whatsapp.trim()) {
      alert("Preencha seu nome, data de nascimento e WhatsApp.");
      return;
    }

    const ano2026 = calcularAnoPessoal(dataNascimento, 2026);
    const ano2027 = calcularAnoPessoal(dataNascimento, 2027);

    const leitura = transicoes[ano2026];

    if (!leitura) {
      alert("Não foi possível calcular sua transição.");
      return;
    }

    setResultado({
      ...leitura,
      para: ano2027,
    });

    window.setTimeout(() => {
      resultadoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }

  const mensagemWhatsApp = resultado
    ? encodeURIComponent(
        `Olá Oscar, meu nome é ${nome}. Minha data de nascimento é ${dataNascimento}. Minha transição numerológica é do Ano Pessoal ${resultado.de} em 2026 para o Ano Pessoal ${resultado.para} em 2027. Gostaria de conhecer o poder total do meu Mapa Numerológico.`
      )
    : "";

  return (
    <main className="min-h-screen bg-[#f3efe7] pt-28 md:pt-36">
      {/* PRIMEIRA PARTE */}
      <section className="mx-auto max-w-[1500px] px-4 pb-10 md:px-8">
        <div className="overflow-hidden rounded-[28px] bg-[#0c2745] shadow-2xl">
          <div className="grid items-start lg:grid-cols-2">
            {/* IMAGEM */}
            <div className="bg-[#071c32]">
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <img
                  src="/images/lp-transicao-2027.png"
                  alt="Oscar Ahumada em Belo Horizonte"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>

              <div className="hidden px-8 py-7 lg:block">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f6cf68]">
                  Oscar Ahumada
                </p>

                <p className="mt-1 text-xl font-semibold text-white">
                  Numerólogo das Estrelas
                </p>

                <p className="mt-3 max-w-xl leading-7 text-white/65">
                  Mais de quatro décadas estudando os números como instrumento
                  de autoconhecimento, orientação e tomada de decisão.
                </p>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="px-6 py-9 sm:px-9 md:py-10 lg:px-12 lg:py-11">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f6cf68]">
                Diagnóstico numerológico gratuito
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-[1.12] text-white sm:text-4xl xl:text-5xl">
                Como será sua transição de{" "}
                <span className="text-[#f6cf68]">
                  2026 para 2027?
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Me diga sua data de nascimento e descubra a energia que acompanha
                você em 2026 e o novo movimento que começa em 2027.
              </p>

              <p className="mt-3 leading-7 text-white/65">
                Sua mensagem aborda os aspectos pessoal, amoroso, espiritual,
                profissional e material.
              </p>

              <form
                onSubmit={descobrirTransicao}
                className="mt-7 space-y-4"
              >
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    Seu nome
                  </label>

                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full rounded-xl border border-white/10 bg-white px-4 py-4 text-base text-[#12365c] outline-none transition focus:ring-2 focus:ring-[#f5a623]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dataNascimento"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    Data de nascimento
                  </label>

                  <input
                    id="dataNascimento"
                    type="date"
                    value={dataNascimento}
                    onChange={(event) =>
                      setDataNascimento(event.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-white px-4 py-4 text-base text-[#12365c] outline-none transition focus:ring-2 focus:ring-[#f5a623]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    WhatsApp
                  </label>

                  <input
                    id="whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={(event) => setWhatsapp(event.target.value)}
                    placeholder="(31) 99999-9999"
                    className="w-full rounded-xl border border-white/10 bg-white px-4 py-4 text-base text-[#12365c] outline-none transition focus:ring-2 focus:ring-[#f5a623]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#e87518] via-[#f5a623] to-[#f6c64d] px-5 py-5 text-base font-extrabold uppercase tracking-wide text-[#12365c] shadow-xl transition hover:-translate-y-1 hover:brightness-105"
                >
                  Quero descobrir minha transição
                </button>
              </form>

              <p className="mt-4 text-center text-xs leading-6 text-white/50">
                Resultado gratuito calculado a partir da sua data de nascimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      {resultado && (
        <section
          ref={resultadoRef}
          className="mx-auto max-w-5xl scroll-mt-36 px-4 pb-20 md:px-8"
        >
          <div className="overflow-hidden rounded-[28px] bg-white shadow-xl">
            <div className="bg-[#0c2745] px-6 py-9 text-center md:px-12 md:py-11">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f6cf68]">
                {nome}, esta é a sua transição
              </p>

              <div className="mt-4 flex items-center justify-center gap-5">
                <span className="text-5xl font-black text-white md:text-7xl">
                  {resultado.de}
                </span>

                <span className="text-4xl font-light text-[#f6cf68] md:text-6xl">
                  →
                </span>

                <span className="text-5xl font-black text-white md:text-7xl">
                  {resultado.para}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#f6cf68] md:text-3xl">
                {resultado.titulo}
              </h2>
            </div>

            <div className="px-6 py-9 md:px-12 md:py-12">
              <p className="mb-10 text-lg leading-8 text-[#334155]">
                {resultado.introducao}
              </p>

              <div className="space-y-7">
                <BlocoResultado
                  titulo="Pessoal"
                  texto={resultado.pessoal}
                />

                <BlocoResultado
                  titulo="Amoroso"
                  texto={resultado.amoroso}
                />

                <BlocoResultado
                  titulo="Espiritual"
                  texto={resultado.espiritual}
                />

                <BlocoResultado
                  titulo="Profissional"
                  texto={resultado.profissional}
                />

                <BlocoResultado
                  titulo="Material"
                  texto={resultado.material}
                />
              </div>

              <div className="mt-10 rounded-2xl border border-[#e8d39b] bg-[#fffaf0] p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c47b14]">
                  O ponto mais importante
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#12365c]">
                  O que essa passagem está pedindo de você?
                </h3>

                <p className="mt-4 text-[17px] leading-8 text-[#475569]">
                  {resultado.fechamento}
                </p>
              </div>

              {/* CTA FINAL */}
              <div className="mt-12 rounded-[24px] bg-[#0c2745] px-6 py-9 text-center md:px-10 md:py-11">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f6cf68]">
                  Sua transição é apenas uma parte da sua história
                </p>

                <h3 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-tight text-white md:text-4xl">
                  Conheça o poder total do seu Mapa Numerológico
                </h3>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/75">
                  O Ano Pessoal mostra a energia do momento. O Mapa Numerológico
                  completo aprofunda seus talentos, desafios, relacionamentos,
                  missão, ciclos, vida profissional, material e os movimentos
                  mais importantes da sua trajetória.
                </p>

                <a
                  href={`https://wa.me/555180339532?text=${mensagemWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full max-w-3xl items-center justify-center rounded-2xl bg-gradient-to-r from-[#e87518] via-[#f5a623] to-[#f6c64d] px-7 py-6 text-center text-base font-extrabold uppercase tracking-wide text-[#12365c] shadow-xl transition hover:-translate-y-1 hover:brightness-105 md:text-xl"
                >
                  Conheça o poder total do seu Mapa Numerológico
                </a>

                <p className="mt-4 text-sm text-white/55">
                  Converse diretamente com Oscar Ahumada
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}