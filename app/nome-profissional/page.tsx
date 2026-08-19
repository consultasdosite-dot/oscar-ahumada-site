"use client";

import { useMemo, useState } from "react";
import { calcularNomeSocial } from "../lib/numerologia";

type DiagnosticoNumero = {
  titulo: string;
  conversa: string;
  transmite: string;
  potencial: string;
  atencao: string;
  orientacao: string;
};

type AnaliseNomeProfissional = {
  nome: string;
  numeroNome: number;
  destino: number;
  favoravel: boolean;
  classificacao: string;
  explicacao: string;
  diagnostico: DiagnosticoNumero;
};

const diagnosticosNome: Record<number, DiagnosticoNumero> = {
  1: {
    titulo: "Liderança, iniciativa e identidade",
    conversa:
      "Se o seu nome profissional vibra no número 1, existe uma mensagem de liderança, iniciativa e independência sendo transmitida toda vez que esse nome é apresentado ao público. É uma vibração que tende a destacar identidade própria, coragem para começar e capacidade de ocupar uma posição de referência.",
    transmite:
      "Força pessoal, autonomia, iniciativa, originalidade, presença e capacidade de abrir caminhos. É um nome que pode funcionar especialmente bem quando você precisa ser percebido como alguém que lidera, decide ou apresenta algo novo.",
    potencial:
      "Quando bem utilizado, o 1 ajuda a construir uma imagem profissional marcante. Favorece empreendedorismo, pioneirismo, autoridade pessoal e disposição para assumir responsabilidades.",
    atencao:
      "A força do 1 pode se transformar em individualismo, impaciência ou excesso de autoridade. Dependendo da atividade, o público pode perceber força, mas sentir pouca proximidade.",
    orientacao:
      "Use essa vibração para assumir seu lugar e mostrar sua identidade, mas lembre-se de que liderança não significa fazer tudo sozinho. Comunicação, escuta e capacidade de criar vínculos ajudam o 1 a se tornar ainda mais forte.",
  },

  2: {
    titulo: "Parceria, sensibilidade e diplomacia",
    conversa:
      "Se o seu nome profissional vibra no número 2, ele transmite uma energia mais receptiva, diplomática e colaborativa. É uma vibração que pode aproximar pessoas e favorecer atividades nas quais confiança, parceria e sensibilidade são importantes.",
    transmite:
      "Acolhimento, cooperação, gentileza, percepção, diplomacia e capacidade de trabalhar com outras pessoas.",
    potencial:
      "Pode ser interessante para atividades que dependem de relacionamento, atendimento, parceria, negociação, cuidado ou construção de confiança.",
    atencao:
      "O excesso de sensibilidade pode reduzir a percepção de autoridade ou dificultar decisões mais firmes. Existe também o risco de depender demais da aprovação das outras pessoas.",
    orientacao:
      "Valorize sua capacidade de ouvir e criar conexões, mas não esconda sua própria posição. Um nome 2 cresce quando sensibilidade e firmeza caminham juntas.",
  },

  3: {
    titulo: "Comunicação, criatividade e visibilidade",
    conversa:
      "Se o seu nome profissional vibra no número 3, existe uma energia muito interessante para comunicação e conquista de público. É um nome que tende a favorecer expressão, criatividade, sociabilidade e capacidade de tornar uma mensagem mais atraente.",
    transmite:
      "Comunicação, simpatia, criatividade, expressão, leveza, sociabilidade e facilidade para chamar atenção.",
    potencial:
      "É especialmente interessante para quem depende de público, imagem, vendas, redes sociais, comunicação, arte, ensino, palestras ou qualquer atividade em que seja necessário transmitir uma mensagem.",
    atencao:
      "O 3 pode se dispersar. Muita criatividade sem direção pode produzir várias ideias e poucos resultados. Também existe o risco de valorizar demais aparência e exposição.",
    orientacao:
      "Use sua capacidade de comunicação com estratégia. Quanto mais clara for sua mensagem e seu posicionamento, maior será a possibilidade de transformar visibilidade em resultado.",
  },

  4: {
    titulo: "Estrutura, confiança e organização",
    conversa:
      "Um nome profissional de vibração 4 transmite seriedade, organização e estabilidade. É uma energia que pode fazer o público perceber método, responsabilidade e preocupação com aquilo que é concreto.",
    transmite:
      "Disciplina, organização, segurança, método, responsabilidade e compromisso.",
    potencial:
      "Pode favorecer profissões e negócios nos quais confiança, planejamento, técnica, administração e constância são fundamentais.",
    atencao:
      "Quando essa vibração fica rígida demais, a imagem profissional pode parecer conservadora, pesada ou pouco aberta a mudanças.",
    orientacao:
      "Mostre sua capacidade de organização, mas permita que inovação e flexibilidade também façam parte da sua imagem. Estrutura é importante, desde que não impeça o crescimento.",
  },

  5: {
    titulo: "Movimento, versatilidade e expansão",
    conversa:
      "Se o seu nome profissional vibra no número 5, existe uma energia de movimento, liberdade e adaptação. É um nome que pode transmitir dinamismo e facilidade para lidar com novidades, pessoas e diferentes situações.",
    transmite:
      "Versatilidade, curiosidade, movimento, liberdade, comunicação e capacidade de adaptação.",
    potencial:
      "Pode favorecer comércio, vendas, comunicação, viagens, internet, atividades com público e profissões que exigem rapidez para perceber oportunidades.",
    atencao:
      "O excesso de movimento pode transmitir instabilidade ou falta de continuidade. Começar muitas coisas e não consolidar nenhuma delas é um dos cuidados dessa vibração.",
    orientacao:
      "Aproveite a versatilidade do 5, mas escolha uma direção. Movimento gera oportunidade; consistência transforma oportunidade em resultado.",
  },

  6: {
    titulo: "Confiança, cuidado e responsabilidade",
    conversa:
      "Um nome profissional de vibração 6 costuma transmitir cuidado, responsabilidade e desejo de servir. É uma energia que pode criar proximidade e confiança, principalmente quando o trabalho envolve pessoas, bem-estar, beleza, família ou orientação.",
    transmite:
      "Acolhimento, responsabilidade, proteção, beleza, confiança e preocupação com o bem-estar das pessoas.",
    potencial:
      "Pode favorecer atividades ligadas a atendimento, saúde, estética, educação, terapias, família, serviços e profissões em que confiança é essencial.",
    atencao:
      "Existe tendência a assumir responsabilidades demais, querer resolver tudo para todos ou misturar cuidado profissional com envolvimento excessivo.",
    orientacao:
      "Cuide do cliente sem carregar a vida dele. Quanto mais claros forem seus limites profissionais, mais forte e confiável essa vibração se torna.",
  },

  7: {
    titulo: "Conhecimento, especialização e profundidade",
    conversa:
      "Se o seu nome profissional vibra no número 7, ele transmite uma energia mais analítica, especializada e profunda. Pode ser um nome interessante para quem precisa ser reconhecido pelo conhecimento e não necessariamente pela exposição.",
    transmite:
      "Inteligência, análise, pesquisa, especialização, discrição e profundidade.",
    potencial:
      "Favorece atividades técnicas, intelectuais, científicas, educacionais, terapêuticas, investigativas ou qualquer profissão em que conhecimento seja um diferencial.",
    atencao:
      "A imagem pode ficar distante ou reservada demais. Um excelente profissional também precisa permitir que o público compreenda aquilo que ele sabe fazer.",
    orientacao:
      "Transforme conhecimento em comunicação. Não basta saber muito: é importante tornar seu conhecimento acessível e mostrar ao público por que ele é valioso.",
  },

  8: {
    titulo: "Realização, autoridade e resultados",
    conversa:
      "Se o seu nome profissional vibra no número 8, existe uma energia muito ligada a realização, administração, autoridade e resultados materiais. É uma vibração forte para quem deseja construir uma imagem de competência, crescimento e capacidade de gestão.",
    transmite:
      "Autoridade, eficiência, ambição, administração, força material e capacidade de gerar resultados.",
    potencial:
      "Pode favorecer negócios, gestão, empreendedorismo, liderança executiva, finanças, patrimônio e atividades nas quais resultado e autoridade sejam importantes.",
    atencao:
      "A busca por resultado pode virar excesso de cobrança, controle ou preocupação exclusiva com dinheiro e status.",
    orientacao:
      "Use a força material do 8 para construir algo sólido, mas preserve relacionamento, ética e propósito. Prosperidade sustentável precisa de equilíbrio.",
  },

  9: {
    titulo: "Propósito, humanidade e alcance",
    conversa:
      "Um nome profissional de vibração 9 transmite uma energia de amplitude, sensibilidade e propósito. Pode favorecer trabalhos que desejam alcançar muitas pessoas ou produzir algum tipo de contribuição coletiva.",
    transmite:
      "Generosidade, visão ampla, sensibilidade, criatividade, humanidade e capacidade de compreender diferentes públicos.",
    potencial:
      "Pode ser interessante para arte, educação, orientação, terapias, projetos sociais e atividades que desejam deixar uma contribuição além do resultado financeiro.",
    atencao:
      "Existe risco de querer atender todo mundo, doar demais ou perder foco comercial. Propósito sem estrutura pode gerar desgaste.",
    orientacao:
      "Ajude, inspire e amplie sua mensagem, mas defina limites e objetivos. Um trabalho com propósito também precisa ser sustentável.",
  },
};

function somarDigitos(valor: number): number {
  let resultado = valor;

  while (resultado > 9 && resultado !== 11 && resultado !== 22) {
    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }

  return resultado;
}

function calcularDestinoData(data: string): number {
  if (!data) return 0;

  const apenasNumeros = data.replace(/\D/g, "");

  const soma = apenasNumeros
    .split("")
    .reduce((total, digito) => total + Number(digito), 0);

  return somarDigitos(soma);
}

function avaliarCombinacao(
  numeroNome: number,
  destino: number
): Pick<
  AnaliseNomeProfissional,
  "favoravel" | "classificacao" | "explicacao"
> {
  if (numeroNome === 1 && destino === 3) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "Aqui temos liderança encontrando comunicação. O Nome 1 ajuda você a ocupar uma posição de referência, enquanto o Destino 3 favorece expressão, divulgação e capacidade de alcançar o público. É uma combinação interessante quando a nova identidade precisa unir presença pessoal e visibilidade.",
    };
  }

  if (numeroNome === 1 && destino === 8) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "Esta combinação une iniciativa e realização. O Nome 1 fortalece liderança, autonomia e coragem para abrir caminhos, enquanto o Destino 8 acrescenta administração, autoridade e busca de resultados. Pode ser especialmente interessante para projetos com objetivos empresariais e financeiros.",
    };
  }

  if (numeroNome === 3 && destino === 8) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "Aqui a comunicação encontra a realização. O Nome 3 favorece criatividade, expressão e conquista de público, enquanto o Destino 8 ajuda a direcionar essa visibilidade para crescimento, gestão e resultados concretos.",
    };
  }

  if (numeroNome === 8 && destino === 3) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "Esta combinação aproxima autoridade e comunicação. O Nome 8 transmite força, gestão e capacidade de realização, enquanto o Destino 3 amplia expressão, divulgação e relacionamento com o público. É uma combinação que pode equilibrar resultado e visibilidade.",
    };
  }

  return {
    favoravel: false,
    classificacao: "Combinação a Avaliar",
    explicacao:
      "Essa combinação não está entre os pares considerados mais favoráveis dentro deste método. Isso não significa automaticamente que o nome seja ruim. Significa que, antes de assumir essa identidade profissional, vale analisar com mais profundidade se a vibração do nome e a data escolhida realmente trabalham a favor do objetivo que você deseja alcançar.",
  };
}

const telefoneWhatsApp = "555180339532";

function criarWhatsApp(mensagem: string) {
  return `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(
    mensagem
  )}`;
}

export default function NomeProfissionalPage() {
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [analisar, setAnalisar] = useState(false);

  const destino = useMemo(
    () => calcularDestinoData(dataLancamento),
    [dataLancamento]
  );

  const resultados = useMemo<AnaliseNomeProfissional[]>(() => {
    if (!analisar || !dataLancamento) return [];

    const nomes = [nome1, nome2, nome3]
      .map((nome) => nome.trim())
      .filter(Boolean);

    return nomes.map((nome) => {
      const calculo = calcularNomeSocial(nome);
      const numeroNome = calculo.revelacaoNomeSocial;
      const avaliacao = avaliarCombinacao(numeroNome, destino);

      const diagnostico =
        diagnosticosNome[numeroNome] ?? {
          titulo: "Uma vibração que merece análise individual",
          conversa:
            "Este resultado merece uma leitura mais detalhada dentro do contexto profissional e dos objetivos que você deseja alcançar.",
          transmite:
            "Cada nome comunica uma determinada energia quando é utilizado profissionalmente.",
          potencial:
            "Uma análise completa permite compreender como essa vibração pode ser utilizada.",
          atencao:
            "O número isolado não deve ser a única referência para uma decisão profissional.",
          orientacao:
            "Antes de alterar ou lançar uma identidade, analise também a data e o objetivo profissional.",
        };

      return {
        nome,
        numeroNome,
        destino,
        diagnostico,
        ...avaliacao,
      };
    });
  }, [analisar, dataLancamento, destino, nome1, nome2, nome3]);

  function resetarAnalise() {
    setAnalisar(false);
  }

  function executarAnalise() {
    if (!nome1.trim() || !dataLancamento) {
      return;
    }

    setAnalisar(true);

    setTimeout(() => {
      document
        .getElementById("resultado-nome-profissional")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  }

  function limparTudo() {
    setNome1("");
    setNome2("");
    setNome3("");
    setDataLancamento("");
    setAnalisar(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const primeiroResultado = resultados[0];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#edf4fb] via-[#f7f3eb] to-[#f7f3eb] px-4 py-6 text-[#123d73] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-5 py-9 text-white shadow-2xl sm:px-10 sm:py-12 lg:px-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6cf68] sm:text-sm">
              Numerologia Profissional
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              O que seu nome profissional está comunicando sobre você?
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-50/90 sm:text-lg sm:leading-8">
              Compare até três opções e descubra como a vibração do nome se
              relaciona com a data escolhida para lançar essa identidade.
            </p>

            <div className="mx-auto mt-7 max-w-4xl rounded-[24px] border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:p-6">
              <div className="grid gap-3 md:grid-cols-3">
                <input
                  type="text"
                  value={nome1}
                  onChange={(event) => {
                    setNome1(event.target.value);
                    resetarAnalise();
                  }}
                  placeholder="Primeiro nome profissional"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />

                <input
                  type="text"
                  value={nome2}
                  onChange={(event) => {
                    setNome2(event.target.value);
                    resetarAnalise();
                  }}
                  placeholder="Segunda opção"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />

                <input
                  type="text"
                  value={nome3}
                  onChange={(event) => {
                    setNome3(event.target.value);
                    resetarAnalise();
                  }}
                  placeholder="Terceira opção"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="dataLancamento"
                  className="block text-left text-sm font-semibold"
                >
                  Data de lançamento da nova identidade
                </label>

                <input
                  id="dataLancamento"
                  type="date"
                  value={dataLancamento}
                  onChange={(event) => {
                    setDataLancamento(event.target.value);
                    resetarAnalise();
                  }}
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />
              </div>

              <button
                type="button"
                onClick={executarAnalise}
                className="mt-4 w-full rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Analisar Nome e Data
              </button>
            </div>
          </div>
        </section>

        {/* INTRODUÇÃO */}
        {resultados.length === 0 && (
          <section className="px-2 py-12 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                Sua identidade também possui uma vibração
              </p>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Um nome profissional será visto, falado e lembrado muitas vezes
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#607089]">
                Por isso, não basta apenas gostar de um nome. É importante
                compreender o tipo de energia que ele projeta e como essa
                vibração conversa com a data escolhida para seu lançamento.
              </p>
            </div>
          </section>
        )}

        {/* RESULTADOS */}
        {resultados.length > 0 && (
          <section
            id="resultado-nome-profissional"
            className="scroll-mt-28 py-10 sm:py-14"
          >
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                  Resultado da sua análise
                </p>

                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Destino da data escolhida: {destino}
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#607089]">
                  Agora quero conversar com você sobre aquilo que cada nome
                  pode estar transmitindo.
                </p>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {resultados.map((resultado) => (
                  <article
                    key={resultado.nome}
                    className={`overflow-hidden rounded-[30px] border bg-white shadow-xl ${
                      resultado.favoravel
                        ? "border-[#d4af37]"
                        : "border-[#d8d8d8]"
                    }`}
                  >
                    <div
                      className={`px-6 py-7 text-center text-white ${
                        resultado.favoravel
                          ? "bg-[#123d73]"
                          : "bg-[#607089]"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6cf68]">
                        Nome Profissional
                      </p>

                      <h3 className="mt-3 break-words text-3xl font-bold">
                        {resultado.nome.toUpperCase()}
                      </h3>

                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <div className="rounded-full bg-[#f6c84f] px-5 py-3 text-xl font-bold text-[#123d73]">
                          Nome {resultado.numeroNome}
                        </div>

                        <span className="text-xl">+</span>

                        <div className="rounded-full border border-white/30 px-5 py-3 text-xl font-bold">
                          Destino {resultado.destino}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.18em] ${
                          resultado.favoravel
                            ? "text-[#c29629]"
                            : "text-[#607089]"
                        }`}
                      >
                        {resultado.classificacao}
                      </p>

                      <h4 className="mt-3 text-2xl font-semibold text-[#123d73]">
                        {resultado.diagnostico.titulo}
                      </h4>

                      <p className="mt-4 leading-8 text-[#405675]">
                        {resultado.diagnostico.conversa}
                      </p>

                      <div className="mt-6 rounded-[22px] bg-[#edf4fb] p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246aa7]">
                          O que esse nome transmite
                        </p>

                        <p className="mt-3 leading-7 text-[#405675]">
                          {resultado.diagnostico.transmite}
                        </p>
                      </div>

                      <div className="mt-4 rounded-[22px] bg-[#f3f8fc] p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246aa7]">
                          Potencial profissional
                        </p>

                        <p className="mt-3 leading-7 text-[#405675]">
                          {resultado.diagnostico.potencial}
                        </p>
                      </div>

                      <div className="mt-4 rounded-[22px] border border-[#eadbbd] bg-[#fffaf0] p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b88716]">
                          Ponto de atenção
                        </p>

                        <p className="mt-3 leading-7 text-[#405675]">
                          {resultado.diagnostico.atencao}
                        </p>
                      </div>

                      <div className="mt-4 rounded-[22px] bg-[#123d73] p-5 text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6c84f]">
                          Minha orientação para você
                        </p>

                        <p className="mt-3 leading-7 text-blue-50">
                          {resultado.diagnostico.orientacao}
                        </p>
                      </div>

                      <div className="mt-5 border-t border-[#eadfc9] pt-5">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c29629]">
                          Nome + Data de lançamento
                        </p>

                        <p className="mt-3 leading-7 text-[#405675]">
                          {resultado.explicacao}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* ENQUETE */}
              {primeiroResultado && (
                <div className="mx-auto mt-9 max-w-4xl rounded-[32px] bg-white p-6 shadow-xl sm:p-10">
                  <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c29629]">
                      Quero saber como esse resultado bateu em você
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                      Qual dessas respostas representa melhor o que você está
                      pensando agora?
                    </h3>

                    <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#607089]">
                      Toque em uma opção e fale diretamente comigo pelo
                      WhatsApp.
                    </p>
                  </div>

                  <div className="mt-7 grid gap-4">
                    <a
                      href={criarWhatsApp(
                        `Olá, Oscar. Fiz o diagnóstico do meu Nome Profissional no seu site. Testei "${primeiroResultado.nome}", que apresentou vibração ${primeiroResultado.numeroNome}, e me identifiquei com o diagnóstico.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[20px] border border-[#d8b55a] bg-[#fffaf0] px-5 py-5 font-bold text-[#123d73] transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      1. Você se identificou com esse diagnóstico?
                    </a>

                    <a
                      href={criarWhatsApp(
                        `Olá, Oscar. Fiz o diagnóstico do meu Nome Profissional no seu site. Gostaria de uma assessoria para harmonizar a energia do meu nome profissional e encontrar a data certa para esse renascimento numerológico.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[20px] bg-[#123d73] px-5 py-5 font-bold leading-7 text-white transition hover:-translate-y-1 hover:bg-[#1f629d] hover:shadow-lg"
                    >
                      2. Gostaria de uma assessoria para harmonizar a energia do
                      seu nome profissional e encontrar a data certa para esse
                      renascimento numerológico?
                    </a>

                    <a
                      href={criarWhatsApp(
                        `Olá, Oscar. Fiz o diagnóstico do meu Nome Profissional e agora quero conhecer meu momento atual de acordo com a minha data de nascimento.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[20px] bg-[#f6c84f] px-5 py-5 font-bold leading-7 text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70] hover:shadow-lg"
                    >
                      3. Quer conhecer seu momento atual de acordo com sua data
                      de nascimento?
                    </a>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-9 rounded-[34px] bg-gradient-to-br from-[#fffaf0] to-white p-7 text-center shadow-xl sm:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                  Antes de lançar sua nova identidade
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
                  Um nome profissional será repetido, divulgado e associado à
                  sua imagem por muitos anos.
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#607089]">
                  Na análise completa podemos estudar diferentes possibilidades
                  de nome e encontrar uma data de lançamento que trabalhe em
                  conjunto com essa nova identidade.
                </p>

                <a
                  href="/solicitar-nome-profissional"
                  className="mt-7 inline-flex rounded-full bg-[#123d73] px-9 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
                >
                  Quero uma Análise Completa do Meu Nome Profissional
                </a>

                <button
                  type="button"
                  onClick={limparTudo}
                  className="mx-auto mt-5 block text-sm font-semibold text-[#607089] underline underline-offset-4"
                >
                  Testar outros nomes e datas
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}