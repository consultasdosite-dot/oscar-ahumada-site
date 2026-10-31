
"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Diagnostico = {
  titulo: string;
  desafio: string;
  evitar: string[];
  conselho: string;
};

type Orientacoes = {
  pessoal: string[];
  afetivo: string[];
  espiritual: string[];
  material: string[];
  profissional: string[];
  leituraMapa: string;
};

const orientacoes: Record<number, Orientacoes> = {
  "1": {
    "pessoal": [
      "Evite iniciar vários projetos simultaneamente. Escolha prioridades.",
      "Não permita que a insegurança impeça suas decisões.",
      "Controle a impaciência e a necessidade de resultados imediatos."
    ],
    "afetivo": [
      "Evite impor suas vontades ao parceiro.",
      "Não tome decisões amorosas por impulso.",
      "Cuidado para não confundir independência com distanciamento emocional."
    ],
    "espiritual": [
      "Evite buscar respostas externas para todas as suas dúvidas.",
      "Não permita que o orgulho impeça seu crescimento interior.",
      "Reserve momentos de silêncio para compreender suas verdadeiras motivações."
    ],
    "material": [
      "Evite investimentos precipitados.",
      "Não assuma dívidas para financiar projetos ainda incertos.",
      "Cuidado com gastos motivados pelo desejo de impressionar outras pessoas."
    ],
    "profissional": [
      "Evite abandonar sua estabilidade sem planejamento.",
      "Não entre em disputas desnecessárias por liderança.",
      "Não deixe boas oportunidades passarem por medo de assumir responsabilidades."
    ],
    "leituraMapa": "Reserve momentos de silêncio para reler seu Mapa Numerológico, fazendo pausas para compreender quais talentos e desafios podem ajudá-lo a iniciar um novo ciclo com mais consciência."
  },
  "2": {
    "pessoal": [
      "Evite adiar decisões por medo de desagradar.",
      "Não permita que a opinião dos outros determine suas escolhas.",
      "Cuidado com a ansiedade e a necessidade de aprovação."
    ],
    "afetivo": [
      "Evite ciúmes, cobranças e dependência emocional.",
      "Não guarde ressentimentos esperando que o outro adivinhe seus sentimentos.",
      "Cuidado para não aceitar relações desequilibradas por medo da solidão."
    ],
    "espiritual": [
      "Evite absorver os problemas emocionais de outras pessoas.",
      "Não confunda sensibilidade com fragilidade.",
      "Cultive momentos de silêncio e fortaleça sua confiança interior."
    ],
    "material": [
      "Evite emprestar dinheiro apenas para agradar.",
      "Não assuma compromissos financeiros por pressão familiar.",
      "Cuidado com decisões econômicas motivadas pela insegurança."
    ],
    "profissional": [
      "Evite conflitos desnecessários com colegas e parceiros.",
      "Não permita que a timidez esconda suas competências.",
      "Cuidado com acordos profissionais sem condições claramente definidas."
    ],
    "leituraMapa": "Leia seu Mapa Numerológico com calma, fazendo pequenas pausas para refletir sobre sua sensibilidade, seus relacionamentos e a importância de respeitar seus próprios limites."
  },
  "3": {
    "pessoal": [
      "Evite começar muitas atividades sem concluir nenhuma.",
      "Não transforme momentos de diversão em fuga das responsabilidades.",
      "Cuidado com a procrastinação disfarçada de criatividade."
    ],
    "afetivo": [
      "Evite promessas amorosas que não pretende cumprir.",
      "Não utilize brincadeiras ou ironias para esconder sentimentos.",
      "Cuidado com relacionamentos superficiais e expectativas exageradas."
    ],
    "espiritual": [
      "Evite buscar constantemente estímulos externos.",
      "Não permita que pensamentos dispersos afastem você do autoconhecimento.",
      "Reserve tempo para refletir sobre o verdadeiro significado de suas escolhas."
    ],
    "material": [
      "Evite compras motivadas pelo entusiasmo momentâneo.",
      "Não comprometa seu orçamento com lazer excessivo.",
      "Cuidado com oportunidades financeiras que parecem fáceis demais."
    ],
    "profissional": [
      "Evite falar mais do que executar.",
      "Não abandone projetos quando desaparecer o entusiasmo inicial.",
      "Cuidado com a falta de organização e o descumprimento de prazos."
    ],
    "leituraMapa": "Dedique alguns minutos à leitura do seu Mapa Numerológico. Faça pausas para identificar talentos que talvez ainda não esteja utilizando plenamente."
  },
  "4": {
    "pessoal": [
      "Evite transformar pequenas dificuldades em grandes preocupações.",
      "Não seja excessivamente rígido consigo mesmo.",
      "Cuidado com o excesso de responsabilidades e a falta de descanso."
    ],
    "afetivo": [
      "Evite controlar a rotina das pessoas que ama.",
      "Não permita que o trabalho ocupe todo o espaço dos relacionamentos.",
      "Cuidado com críticas constantes e exigências exageradas."
    ],
    "espiritual": [
      "Evite acreditar que tudo depende exclusivamente do seu esforço.",
      "Não confunda prudência com medo de mudar.",
      "Cultive a paciência diante de situações que não pode controlar."
    ],
    "material": [
      "Evite assumir dívidas sem planejamento.",
      "Não negligencie documentos, contratos e compromissos financeiros.",
      "Cuidado com investimentos que prometem retornos rápidos."
    ],
    "profissional": [
      "Evite resistir a métodos de trabalho mais eficientes.",
      "Não assuma tarefas além da sua capacidade.",
      "Cuidado com a teimosia diante de orientações construtivas."
    ],
    "leituraMapa": "Releia seu Mapa Numerológico sem pressa. Observe, a cada pausa, quais comportamentos podem estar dificultando a construção da estabilidade que você deseja."
  },
  "5": {
    "pessoal": [
      "Evite decisões precipitadas motivadas pelo desejo de novidade.",
      "Não abandone compromissos apenas porque perdeu o entusiasmo.",
      "Cuidado com excessos e comportamentos impulsivos."
    ],
    "afetivo": [
      "Evite confundir liberdade com ausência de responsabilidade afetiva.",
      "Não tome decisões definitivas durante conflitos passageiros.",
      "Cuidado com envolvimentos que comprometam relações importantes."
    ],
    "espiritual": [
      "Evite buscar mudanças externas para fugir de conflitos interiores.",
      "Não permita que a inquietação impeça momentos de reflexão.",
      "Aprenda a reconhecer a diferença entre intuição e impulso."
    ],
    "material": [
      "Evite compras e investimentos por entusiasmo.",
      "Não comprometa suas reservas financeiras com aventuras.",
      "Cuidado com propostas que exigem decisões imediatas."
    ],
    "profissional": [
      "Evite trocar de trabalho sem avaliar as consequências.",
      "Não abandone projetos promissores por impaciência.",
      "Cuidado com oportunidades que oferecem liberdade, mas pouca segurança contratual."
    ],
    "leituraMapa": "Durante a leitura do seu Mapa Numerológico, faça pausas para refletir sobre suas escolhas e compreender se suas mudanças representam crescimento ou apenas fuga das responsabilidades."
  },
  "6": {
    "pessoal": [
      "Evite assumir responsabilidades que pertencem aos outros.",
      "Não coloque suas necessidades sempre em último lugar.",
      "Cuidado com o perfeccionismo e a autocobrança."
    ],
    "afetivo": [
      "Evite ciúmes, cobranças e atitudes controladoras.",
      "Não permaneça em relações apenas por obrigação ou culpa.",
      "Cuidado para não confundir amor com sacrifício permanente."
    ],
    "espiritual": [
      "Evite acreditar que precisa resolver os problemas de todos.",
      "Não permita que sentimentos de culpa determinem suas escolhas.",
      "Desenvolva a capacidade de perdoar sem abandonar seus limites."
    ],
    "material": [
      "Evite comprometer suas finanças para atender a todos os pedidos familiares.",
      "Não assuma dívidas de terceiros sem avaliar os riscos.",
      "Cuidado com despesas domésticas motivadas por pressão emocional."
    ],
    "profissional": [
      "Evite carregar sozinho as responsabilidades da equipe.",
      "Não permita que problemas familiares comprometam continuamente suas atividades.",
      "Cuidado com a dificuldade de delegar tarefas."
    ],
    "leituraMapa": "Leia seu Mapa Numerológico com atenção especial aos desafios afetivos. Faça pausas para refletir sobre a diferença entre cuidar das pessoas e esquecer de si mesmo."
  },
  "7": {
    "pessoal": [
      "Evite isolamento excessivo e afastamento das pessoas próximas.",
      "Não transforme dúvidas em desconfiança permanente.",
      "Cuidado com pensamentos negativos e autocrítica exagerada."
    ],
    "afetivo": [
      "Evite esconder sentimentos por medo de demonstrar vulnerabilidade.",
      "Não interprete todo silêncio como rejeição.",
      "Cuidado com a frieza emocional e a dificuldade de dialogar."
    ],
    "espiritual": [
      "Evite procurar respostas definitivas para todas as questões da vida.",
      "Não permita que crenças rígidas impeçam novas reflexões.",
      "Cultive o autoconhecimento sem se afastar da realidade prática."
    ],
    "material": [
      "Evite investimentos que não compreende completamente.",
      "Não tome decisões financeiras baseadas apenas em suposições.",
      "Cuidado com a negligência de assuntos materiais por excesso de introspecção."
    ],
    "profissional": [
      "Evite trabalhar isoladamente quando a colaboração for necessária.",
      "Não permita que o perfeccionismo atrase entregas importantes.",
      "Cuidado com a desconfiança excessiva em relação a colegas e parceiros."
    ],
    "leituraMapa": "Transforme a leitura do seu Mapa Numerológico em um momento de introspecção. Leia lentamente, faça pausas e procure compreender os ensinamentos que mais se relacionam com seu momento de vida."
  },
  "8": {
    "pessoal": [
      "Evite transformar todas as situações em disputas.",
      "Não permita que a ambição determine seu valor pessoal.",
      "Cuidado com o excesso de exigência e a necessidade de controle."
    ],
    "afetivo": [
      "Evite priorizar exclusivamente trabalho e dinheiro.",
      "Não utilize conquistas materiais como forma de exercer autoridade.",
      "Cuidado com conflitos provocados por orgulho ou competição."
    ],
    "espiritual": [
      "Evite associar sucesso financeiro à superioridade pessoal.",
      "Não abandone seus valores para alcançar resultados.",
      "Desenvolva gratidão e responsabilidade diante das conquistas."
    ],
    "material": [
      "Evite endividamento para sustentar aparências.",
      "Não assuma riscos financeiros sem planejamento.",
      "Cuidado com contratos, sociedades e investimentos pouco transparentes."
    ],
    "profissional": [
      "Evite atitudes autoritárias com colegas e subordinados.",
      "Não comprometa sua reputação por resultados imediatos.",
      "Cuidado com decisões estratégicas motivadas exclusivamente pela ambição."
    ],
    "leituraMapa": "Reserve um momento tranquilo para reler seu Mapa Numerológico. Faça pausas para avaliar como seus talentos, valores e atitudes podem contribuir para conquistas mais equilibradas."
  },
  "9": {
    "pessoal": [
      "Evite insistir em situações que já não contribuem para seu crescimento.",
      "Não permita que lembranças dolorosas determinem suas escolhas.",
      "Cuidado com a dificuldade de concluir projetos e resolver pendências."
    ],
    "afetivo": [
      "Evite permanecer em relacionamentos apenas por medo da solidão.",
      "Não alimente ressentimentos ou desejos de vingança.",
      "Cuidado com reconciliações motivadas exclusivamente pela carência."
    ],
    "espiritual": [
      "Evite transformar o passado em uma fonte permanente de sofrimento.",
      "Não confunda desapego com indiferença.",
      "Pratique o perdão como processo de libertação emocional, sem ignorar seus limites."
    ],
    "material": [
      "Evite manter compromissos financeiros que já não fazem sentido.",
      "Não realize gastos para compensar frustrações emocionais.",
      "Cuidado com decisões patrimoniais tomadas durante conflitos pessoais."
    ],
    "profissional": [
      "Evite insistir em projetos sem perspectivas apenas pelo tempo já investido.",
      "Não encerre parcerias de maneira impulsiva ou conflitiva.",
      "Cuidado com a resistência em reconhecer que determinados ciclos profissionais chegaram ao fim."
    ],
    "leituraMapa": "Leia seu Mapa Numerológico com serenidade. Faça pausas para reconhecer os aprendizados do passado e refletir sobre aquilo que precisa ser transformado antes de iniciar um novo ciclo."
  }
};

const diagnosticos: Record<number, Diagnostico> = {
  1: {
    titulo: "O desafio de começar sem se perder",
    desafio:
      "2027 poderá trazer novos começos. Seu desafio será vencer a insegurança e assumir a direção da própria vida.",
    evitar: [
      "Agir por impulso e sem planejamento.",
      "Querer controlar todas as situações.",
      "Deixar o orgulho prejudicar relacionamentos.",
      "Começar projetos sem dar continuidade.",
      "Depender da aprovação dos outros.",
    ],
    conselho:
      "Tenha iniciativa, mas escolha com consciência os caminhos que deseja construir.",
  },
  2: {
    titulo: "O desafio de equilibrar suas emoções",
    desafio:
      "Sua sensibilidade poderá ser colocada à prova, especialmente nos relacionamentos e nas decisões que exigem paciência.",
    evitar: [
      "Dependência emocional.",
      "Ciúmes e ressentimentos.",
      "Indecisão diante de oportunidades.",
      "Submissão para agradar outras pessoas.",
      "Guardar mágoas e alimentar conflitos.",
    ],
    conselho:
      "Aprenda a cooperar sem abandonar sua individualidade.",
  },
  3: {
    titulo: "O desafio de controlar a dispersão",
    desafio:
      "Ideias e oportunidades poderão surgir, mas a falta de foco poderá impedir que seus projetos avancem.",
    evitar: [
      "Gastos por impulso.",
      "Prometer mais do que consegue cumprir.",
      "Procrastinar decisões importantes.",
      "Falar sem avaliar as consequências.",
      "Abandonar projetos pela metade.",
    ],
    conselho:
      "Sua criatividade poderá abrir portas quando acompanhada de disciplina.",
  },
  4: {
    titulo: "O desafio de construir com paciência",
    desafio:
      "As responsabilidades poderão aumentar, exigindo organização, persistência e atenção à estabilidade material.",
    evitar: [
      "Teimosia e rigidez excessiva.",
      "Desorganização financeira.",
      "Excesso de trabalho.",
      "Pessimismo diante dos obstáculos.",
      "Resistência às mudanças necessárias.",
    ],
    conselho:
      "Construa bases sólidas e respeite o tempo necessário para alcançar resultados.",
  },
  5: {
    titulo: "O desafio de usar bem sua liberdade",
    desafio:
      "Mudanças e novas experiências poderão testar sua estabilidade e sua capacidade de fazer escolhas responsáveis.",
    evitar: [
      "Decisões precipitadas.",
      "Excessos e comportamentos impulsivos.",
      "Instabilidade nos relacionamentos.",
      "Aventuras financeiras sem planejamento.",
      "Abandonar compromissos importantes.",
    ],
    conselho:
      "A liberdade será sua maior conquista quando acompanhada de responsabilidade.",
  },
  6: {
    titulo: "O desafio de não carregar o mundo",
    desafio:
      "Questões familiares e afetivas poderão exigir equilíbrio entre cuidar dos outros e respeitar suas próprias necessidades.",
    evitar: [
      "Assumir problemas que não são seus.",
      "Ciúmes e cobranças excessivas.",
      "Controlar as escolhas de outras pessoas.",
      "Sacrificar seus próprios objetivos.",
      "Perfeccionismo e sentimento de culpa.",
    ],
    conselho:
      "Amar e cuidar não significa assumir todas as responsabilidades.",
  },
  7: {
    titulo: "O desafio de enfrentar suas verdades",
    desafio:
      "Será um período favorável à reflexão, mas dúvidas e questionamentos poderão gerar insegurança ou isolamento.",
    evitar: [
      "Isolamento prolongado.",
      "Desconfiança excessiva.",
      "Pessimismo e pensamentos negativos.",
      "Criticar constantemente os outros.",
      "Tomar decisões sem reflexão.",
    ],
    conselho:
      "Transforme suas dúvidas em conhecimento e suas experiências em sabedoria.",
  },
  8: {
    titulo: "O desafio de administrar poder e dinheiro",
    desafio:
      "Responsabilidades profissionais e financeiras poderão exigir maturidade, equilíbrio e decisões estratégicas.",
    evitar: [
      "Endividamento impulsivo.",
      "Autoritarismo e disputas de poder.",
      "Ambição sem limites.",
      "Negligenciar relacionamentos afetivos.",
      "Assumir riscos financeiros desnecessários.",
    ],
    conselho:
      "Busque resultados materiais sem comprometer seus valores e seu equilíbrio pessoal.",
  },
  9: {
    titulo: "O desafio de encerrar o que perdeu sentido",
    desafio:
      "2027 poderá trazer a necessidade de concluir etapas, resolver pendências e abandonar situações que já não contribuem para seu crescimento.",
    evitar: [
      "Insistir em relacionamentos desgastados.",
      "Alimentar ressentimentos.",
      "Resistir aos encerramentos necessários.",
      "Tomar decisões por culpa ou vingança.",
      "Carregar problemas do passado.",
    ],
    conselho:
      "Aprenda a encerrar ciclos com maturidade para abrir espaço a novas oportunidades.",
  },
};

// Contagem diária até 00h00 no horário de Brasília.
function segundosAteMeiaNoiteBrasilia(): number {
  const partes = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const valor = (tipo: string) =>
    Number(partes.find((parte) => parte.type === tipo)?.value ?? 0);
  const decorridos = valor("hour") * 3600 + valor("minute") * 60 + valor("second");
  return 86400 - decorridos;
}

function ContagemPromocional({ segundos }: { segundos: number | null }) {
  const formatar = (numero: number) => String(numero).padStart(2, "0");
  const horas = segundos === null ? "--" : formatar(Math.floor(segundos / 3600));
  const minutos = segundos === null ? "--" : formatar(Math.floor((segundos % 3600) / 60));
  const restantes = segundos === null ? "--" : formatar(segundos % 60);

  return (
    <div className="mt-4 text-center text-[#e8d5b3]" aria-live="off">
      <p className="text-sm font-semibold">Oferta do dia termina em:</p>
      <p className="mt-1 text-3xl font-extrabold tracking-wider tabular-nums text-[#e3c17b] sm:text-4xl">
        {horas}:{minutos}:{restantes}
      </p>
    </div>
  );
}

function reduzirNumero(numero: number): number {
  let resultado = numero;

  while (resultado > 9) {
    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }

  return resultado;
}

export default function DesafioPage() {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [erro, setErro] = useState("");
  const [anoPessoal, setAnoPessoal] = useState<number | null>(null);

  const resultadoRef = useRef<HTMLElement | null>(null);

  const [segundosRestantes, setSegundosRestantes] = useState<number | null>(null);

  useEffect(() => {
    const atualizar = () => setSegundosRestantes(segundosAteMeiaNoiteBrasilia());
    atualizar();
    const intervalo = window.setInterval(atualizar, 1000);
    return () => window.clearInterval(intervalo);
  }, []);



  function descobrirDesafio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");

    const diaNumero = Number(dia);
    const mesNumero = Number(mes);

    if (
      dia.trim() === "" ||
      mes.trim() === "" ||
      !Number.isInteger(diaNumero) ||
      !Number.isInteger(mesNumero) ||
      mesNumero < 1 ||
      mesNumero > 12
    ) {
      setErro("Informe um dia e um mês válidos.");
      return;
    }

    const diasNoMes = new Date(2024, mesNumero, 0).getDate();

    if (diaNumero < 1 || diaNumero > diasNoMes) {
      setErro("Esta data de nascimento não é válida.");
      return;
    }

    const soma =
      String(diaNumero)
        .split("")
        .reduce((total, numero) => total + Number(numero), 0) +
      String(mesNumero)
        .split("")
        .reduce((total, numero) => total + Number(numero), 0) +
      2 + 0 + 2 + 7;

    setAnoPessoal(reduzirNumero(soma));

    setTimeout(() => {
      resultadoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  const diagnostico =
    anoPessoal !== null ? diagnosticos[anoPessoal] : null;

  return (
    <main className="min-h-screen bg-[#17130f] text-white">
      <section className="mx-auto w-full max-w-[1500px] md:grid md:min-h-screen md:grid-cols-2">
        {/* FOTOGRAFIA */}
        <div className="bg-[#201b17]">
          <img
            src="/oscar-desafio.png"
            alt="Oscar Ahumada — Numerólogo das Estrelas"
            className="block h-auto w-full md:h-full md:object-cover md:object-center"
          />
        </div>

        {/* TÍTULO E FORMULÁRIO */}
        <div className="flex items-center justify-center px-6 py-9 md:px-10 md:py-14 lg:px-14">
          <div className="w-full max-w-[520px] text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-[#e3c17b] md:text-4xl lg:text-5xl">
              QUAIS SERÃO SEUS MAIORES DESAFIOS EM 2027?
            </h1>

            <form onSubmit={descobrirDesafio} className="mt-8">
              <p className="mb-5 text-base font-bold text-[#e3c17b] sm:text-lg">
                INFORME O DIA E O MÊS DO SEU NASCIMENTO
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="dia-desafio"
                    className="mb-2 block text-sm font-bold"
                  >
                    DIA
                  </label>

                  <input
                    id="dia-desafio"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="31"
                    placeholder="DD"
                    value={dia}
                    onChange={(event) => setDia(event.target.value)}
                    className="w-full rounded-xl border border-[#bda16e] bg-white px-3 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mes-desafio"
                    className="mb-2 block text-sm font-bold"
                  >
                    MÊS
                  </label>

                  <input
                    id="mes-desafio"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="12"
                    placeholder="MM"
                    value={mes}
                    onChange={(event) => setMes(event.target.value)}
                    className="w-full rounded-xl border border-[#bda16e] bg-white px-3 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-[#d7b46c] px-5 py-4 text-base font-extrabold uppercase tracking-wide text-[#17130f] transition hover:bg-[#edce8e]"
              >
                DESCOBRIR MEUS DESAFIOS
              </button>

              {erro && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  {erro}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO NUMEROLÓGICO */}
      {diagnostico && (
        <section
          ref={resultadoRef}
          className="mx-auto max-w-[850px] scroll-mt-6 px-5 py-12"
        >
          <div className="rounded-2xl border border-[#bda16e] bg-[#211b16] p-6 md:p-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#d7b46c]">
              Seu diagnóstico numerológico para 2027
            </p>

            <h2 className="mt-4 text-center text-3xl font-extrabold text-[#e3c17b]">
              ANO PESSOAL {anoPessoal}
            </h2>

            <h3 className="mt-5 text-center text-xl font-bold">
              {diagnostico.titulo}
            </h3>

            <p className="mt-6 leading-7 text-[#eee4d6]">
              {diagnostico.desafio}
            </p>

            <h4 className="mt-7 text-lg font-bold text-[#e3c17b]">
              SEUS 15 ALERTAS PARA 2027
            </h4>

            {([
              ["PESSOAL", "pessoal"],
              ["AFETIVO", "afetivo"],
              ["ESPIRITUAL", "espiritual"],
              ["MATERIAL", "material"],
              ["PROFISSIONAL", "profissional"],
            ] as const).map(([titulo, area]) => (
              <div key={area} className="mt-6">
                <h5 className="text-base font-bold text-[#e3c17b]">{titulo}</h5>
                <ol className="mt-3 list-decimal space-y-3 pl-5 text-[#eee4d6]">
                  {orientacoes[anoPessoal!][area].map((dica) => (
                    <li key={dica} className="leading-7">{dica}</li>
                  ))}
                </ol>
                {area === "espiritual" && (
                  <div className="mt-4 rounded-xl border border-[#6d5739] bg-[#33291f] p-4">
                    <p className="font-bold text-[#e3c17b]">UMA ORIENTAÇÃO PARA SEU AUTOCONHECIMENTO</p>
                    <p className="mt-2 leading-7 text-[#eee4d6]">
                      Se você já possui seu Mapa Numerológico, este é um excelente momento para revisitá-lo. Se ainda não possui, conheça o que uma análise personalizada pode revelar sobre seus talentos e desafios.
                    </p>
                    <p className="mt-3 leading-7 text-[#eee4d6]">
                      {orientacoes[anoPessoal!].leituraMapa}
                    </p>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-7 rounded-xl bg-[#33291f] p-5">
              <h4 className="font-bold text-[#e3c17b]">
                CONSELHO DE OSCAR AHUMADA
              </h4>

              <p className="mt-3 leading-7">
                {diagnostico.conselho}
              </p>
            </div>

            <div className="mt-9 border-t border-[#6d5739] pt-8 text-center">
              <div>
                <p className="mb-6 text-base leading-7 text-[#eee4d6]">
                  Você acabou de conhecer 15 alertas para 2027. Mas existem outros aspectos da sua vida que merecem atenção. O Mapa Numerológico Completo aprofunda a interpretação de seus talentos, desafios e tendências pessoais, ajudando você a refletir sobre suas escolhas com mais consciência.
                </p>
                <h4 className="text-center text-2xl font-extrabold text-[#e3c17b]">
                  PROMOÇÃO ESPECIAL PARA VOCÊ!
                </h4>
                <p className="mt-3 text-center text-sm text-[#eee4d6]">
                  Condições especiais para quem está lendo seu diagnóstico.
                </p>

                {[
                  {
                    titulo: "MAPA NUMEROLÓGICO PESSOAL COMPLETO",
                    detalhe: "Sem consulta individual",
                    anterior: "R$ 395,00",
                    promocional: "R$ 170,00",
                    botao: "QUERO MEU MAPA COMPLETO",
                    mensagem:
                      "Olá, Oscar Ahumada! Li meu diagnóstico dos desafios numerológicos de 2027 e quero aproveitar a promoção do Mapa Numerológico Pessoal Completo sem consulta, de R$ 395,00 por R$ 170,00. Como faço para adquirir?",
                  },
                  {
                    titulo: "MAPA NUMEROLÓGICO PESSOAL COMPLETO + CONSULTA",
                    detalhe: "Com consulta individual",
                    anterior: "R$ 800,00",
                    promocional: "R$ 395,00",
                    botao: "QUERO MEU MAPA + CONSULTA",
                    mensagem:
                      "Olá, Oscar Ahumada! Li meu diagnóstico dos desafios numerológicos de 2027 e quero aproveitar a promoção do Mapa Numerológico Pessoal Completo com consulta, de R$ 800,00 por R$ 395,00. Como faço para adquirir e agendar?",
                  },
                  {
                    titulo: "MAPA DE PREVISÕES ATÉ 31/12/2027",
                    detalhe:
                      "Aspectos pessoais, afetivos, espirituais, materiais e profissionais",
                    anterior: "R$ 260,00",
                    promocional: "R$ 80,00",
                    botao: "QUERO MINHAS PREVISÕES",
                    mensagem:
                      "Olá, Oscar Ahumada! Li meu diagnóstico dos desafios numerológicos de 2027 e quero aproveitar a promoção do Mapa de Previsões até 31/12/2027, incluindo aspectos pessoais, afetivos, espirituais, materiais e profissionais, de R$ 260,00 por R$ 80,00. Como faço para adquirir?",
                  },
                ].map((oferta) => (
                  <div
                    key={oferta.titulo}
                    className="mt-5 rounded-xl border border-[#6d5739] bg-[#33291f] p-5 text-center"
                  >
                    <h5 className="text-base font-extrabold text-white">
                      {oferta.titulo}
                    </h5>
                    <p className="mt-2 text-sm text-[#eee4d6]">
                      {oferta.detalhe}
                    </p>
                    <p className="mt-4 text-sm text-[#c9b9a4] line-through">
                      De {oferta.anterior}
                    </p>
                    <p className="mt-1 text-3xl font-extrabold text-[#e3c17b]">
                      Por {oferta.promocional}
                    </p>
                    <a
                      href={`https://wa.me/5531972159908?text=${encodeURIComponent(oferta.mensagem)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 block rounded-xl bg-[#16803d] px-4 py-4 text-center text-sm font-extrabold text-white transition hover:bg-[#116632]"
                    >
                      {oferta.botao} — WHATSAPP
                    </a>
                    <ContagemPromocional segundos={segundosRestantes} />
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-[#c9b9a4]">
                Oscar Ahumada — Numerólogo das Estrelas
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
