"use client";

import LandingDiagnosticoPremium, {
  type ResultadoLandingPremium,
} from "../components/LandingDiagnosticoPremium";

import { landingPagesConfig } from "../data/landingPages";

const telefoneOscar = "555180339532";

function criarLinkWhatsApp(
  valores: Record<string, string>,
  resultado: ResultadoLandingPremium
) {
  const nome = valores.nome || "";
  const whatsapp = valores.whatsapp || "";
  const numeroCasa = valores.numeroCasa || "";

  const mensagem = [
    "Olá, Oscar Ahumada.",
    "",
    "Acabei de fazer o diagnóstico da Numerologia da Casa no seu site.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Número da residência: ${numeroCasa}`,
    "",
    `Resultado: Casa ${resultado.numero}`,
    resultado.titulo,
    "",
    resultado.diagnostico,
    "",
    resultado.positivo
      ? `Pontos favoráveis: ${resultado.positivo}`
      : "",
    "",
    resultado.atencao
      ? `Pontos de atenção: ${resultado.atencao}`
      : "",
    "",
    "Gostaria de conversar com você para compreender melhor essa energia e saber como ela se relaciona com meu Mapa Numerológico Pessoal.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${telefoneOscar}?text=${encodeURIComponent(
    mensagem
  )}`;
}

function reduzirNumero(numero: number): number {
  let atual = Math.abs(numero);

  while (atual > 9) {
    atual = atual
      .toString()
      .split("")
      .reduce(
        (total, digito) => total + Number(digito),
        0
      );
  }

  return atual;
}

const diagnosticosCasa: Record<
  number,
  ResultadoLandingPremium
> = {
  1: {
    numero: 1,

    titulo:
      "Uma casa de iniciativa, independência e novos começos",

    diagnostico:
      "Sua residência vibra na energia do número 1. Essa é uma casa que tende a estimular movimento, iniciativa, coragem e necessidade de autonomia. Quem vive nesse ambiente pode sentir uma vontade maior de tomar decisões, começar projetos, mudar de direção, empreender ou assumir mais controle sobre a própria vida. É uma vibração muito interessante para pessoas que estão iniciando uma nova fase, reconstruindo a própria identidade ou buscando independência. No cotidiano, essa energia pode tornar os moradores mais ativos, objetivos e determinados. É como se o próprio ambiente dissesse: não fique parado, faça acontecer. Por outro lado, justamente por estimular individualidade e iniciativa, essa casa pode também evidenciar diferenças de opinião e disputas sobre quem decide o quê.",

    positivo:
      "No lado positivo, a Casa 1 favorece liderança, criatividade, coragem, independência, poder de decisão e capacidade de recomeçar. Pode ser excelente para quem trabalha por conta própria, deseja iniciar um negócio, assumir novos projetos ou recuperar confiança depois de um período de estagnação. Também pode estimular cada morador a desenvolver mais identidade e força pessoal. Quando bem equilibrada, essa vibração cria um ambiente de movimento, renovação e progresso.",

    atencao:
      "Quando a energia 1 entra em desequilíbrio, podem surgir impaciência, autoritarismo, individualismo, falta de cooperação e discussões por liderança. Cada pessoa pode querer fazer tudo do seu jeito e ouvir pouco os demais. Em alguns casos, a casa pode parecer um lugar onde todos estão sempre correndo, resolvendo coisas e tomando decisões, mas com pouco espaço para convivência verdadeira. Também pode existir dificuldade em pedir ajuda ou reconhecer que algumas decisões precisam ser compartilhadas.",

    orientacao:
      "Para harmonizar uma Casa 1, é importante preservar iniciativa sem transformar autonomia em isolamento. Estimule projetos, movimento e renovação, mas crie também espaços de convivência e diálogo. E existe um ponto fundamental: a energia da casa não atua sozinha. Ela encontra o seu próprio Destino, seu nome e o momento que você está vivendo. Uma Casa 1 pode impulsionar muito uma pessoa e exigir mais equilíbrio de outra. Por isso, conhecer seu Mapa Numerológico Pessoal completo ajuda a entender se essa vibração está realmente favorecendo você.",
  },

  2: {
    numero: 2,

    titulo:
      "Uma casa de união, sensibilidade e relacionamentos",

    diagnostico:
      "Sua residência vibra na energia do número 2. Essa é uma casa voltada para vínculos, convivência, parceria, afetividade e sensibilidade. Ela tende a valorizar relações, acordos e a necessidade de sentir que existe harmonia entre as pessoas. Quem vive nesse ambiente pode perceber que assuntos emocionais, familiares e de relacionamento ganham mais importância. É uma vibração que costuma acolher, aproximar e estimular cooperação. Ao mesmo tempo, pode tornar os moradores mais sensíveis ao comportamento uns dos outros, fazendo com que pequenos gestos, palavras ou ausências tenham um peso emocional maior.",

    positivo:
      "No lado positivo, a Casa 2 favorece carinho, diplomacia, romantismo, cooperação, escuta, companheirismo e capacidade de construir acordos. Pode ser muito agradável para casais, famílias e pessoas que valorizam convivência mais íntima. Também estimula delicadeza, paciência e percepção emocional. Quando equilibrada, essa energia ajuda a criar um ambiente acolhedor, receptivo e com forte sensação de parceria.",

    atencao:
      "Quando entra em desequilíbrio, a vibração 2 pode aumentar dependência emocional, insegurança, passividade, medo de conflitos e dificuldade para tomar decisões. Algumas pessoas podem evitar dizer o que realmente pensam para não desagradar. Também pode surgir necessidade excessiva de aprovação, ciúme, carência ou sensação de que a paz da casa depende sempre de alguém ceder.",

    orientacao:
      "Para harmonizar essa vibração, é importante estimular diálogo verdadeiro e preservar a individualidade de cada morador. União não significa dependência. Uma casa harmoniosa é aquela em que as pessoas se apoiam, mas continuam ocupando seu próprio espaço. Ao cruzar essa energia com seu Mapa Numerológico Pessoal, é possível compreender se você precisa justamente de mais parceria ou se essa vibração pode intensificar uma sensibilidade que já existe em excesso.",
  },

  3: {
    numero: 3,

    titulo:
      "Uma casa de comunicação, alegria e criatividade",

    diagnostico:
      "Sua residência vibra na energia do número 3. Essa é uma casa que tende a estimular comunicação, criatividade, encontros, movimento social e necessidade de expressão. Pode ser um ambiente naturalmente mais alegre, expansivo e receptivo a visitas, conversas, festas, ideias e novos contatos. Quem vive em uma Casa 3 costuma perceber que existe sempre algum movimento, uma conversa acontecendo, um projeto surgindo ou uma vontade de fazer algo diferente. É uma vibração excelente para quem trabalha com comunicação, arte, criatividade ou público.",

    positivo:
      "No lado positivo, favorece alegria, criatividade, sociabilidade, comunicação, divulgação, vendas, expressão pessoal e capacidade de fazer conexões. Pode ser uma casa inspiradora para artistas, profissionais de comunicação, professores, vendedores e pessoas que trabalham com público. Também pode melhorar o clima emocional quando existe leveza e bom humor.",

    atencao:
      "Em desequilíbrio, a Casa 3 pode gerar dispersão, desorganização, excesso de movimento, dificuldade de concentração e tendência a começar muitas coisas sem concluir. Pode haver excesso de visitas, barulho, distrações ou dificuldade para manter rotina. Em alguns casos, a alegria aparente pode esconder falta de profundidade ou dificuldade para conversar sobre temas mais sérios.",

    orientacao:
      "Para harmonizar essa casa, aproveite sua criatividade, mas estabeleça organização e foco. Tenha espaços para convivência e também para concentração. A energia 3 é maravilhosa quando encontra direção. Cruzada com seu Mapa Numerológico Pessoal, ela pode mostrar se essa residência está ampliando seu potencial de comunicação ou reforçando uma tendência à dispersão que já existe em você.",
  },

  4: {
    numero: 4,

    titulo:
      "Uma casa de estabilidade, estrutura e segurança",

    diagnostico:
      "Sua residência vibra na energia do número 4. Essa casa tende a valorizar segurança, organização, disciplina, rotina e construção de bases sólidas. É uma vibração que pode fazer os moradores pensarem mais em patrimônio, responsabilidade, trabalho, planejamento e futuro. Quem vive nesse ambiente pode sentir maior necessidade de colocar tudo em ordem, cumprir horários, manter compromissos e construir algo duradouro. É uma casa que transmite sensação de estabilidade, mas também pode cobrar bastante esforço.",

    positivo:
      "No lado positivo, favorece organização, segurança, responsabilidade, disciplina, trabalho, patrimônio e planejamento de longo prazo. Pode ser excelente para famílias que desejam estabilidade, para quem quer construir ou organizar a vida financeira e para pessoas que precisam de mais estrutura. Essa vibração ajuda a transformar planos em algo concreto e consistente.",

    atencao:
      "Quando desequilibrada, a Casa 4 pode parecer pesada, rígida, excessivamente séria ou presa à rotina. Os moradores podem sentir que tudo exige esforço, responsabilidade e controle. Também pode surgir resistência a mudanças, excesso de preocupação, dificuldade de relaxar e sensação de que a casa virou apenas um lugar de obrigações.",

    orientacao:
      "Para harmonizar uma Casa 4, preserve a estrutura, mas inclua leveza, beleza e movimento. Mudanças pequenas, renovação de ambientes e momentos de descanso ajudam a evitar rigidez. Quando cruzamos essa vibração com seu Mapa Numerológico Pessoal, podemos entender se você precisa justamente dessa estabilidade ou se já vive uma fase em que excesso de responsabilidade está pesando demais.",
  },

  5: {
    numero: 5,

    titulo:
      "Uma casa de liberdade, movimento e mudanças",

    diagnostico:
      "Sua residência vibra na energia do número 5. Essa é uma casa que estimula movimento, liberdade, novidades, mudanças, viagens e experiências diferentes. Quem vive nesse ambiente pode sentir necessidade de sair mais, receber pessoas, mudar móveis, alterar rotinas ou experimentar coisas novas. É uma vibração dinâmica e pouco previsível. Pode ser muito interessante para quem está vivendo uma fase de expansão, transição ou busca de novas oportunidades.",

    positivo:
      "No lado positivo, favorece versatilidade, comunicação, novos contatos, viagens, mudanças positivas, oportunidades, criatividade e capacidade de adaptação. Pode ser uma excelente energia para pessoas que trabalham com vendas, comunicação, turismo, internet ou atividades que exigem movimento. A Casa 5 costuma estimular coragem para sair da zona de conforto.",

    atencao:
      "Quando desequilibrada, pode trazer instabilidade, inquietação, dificuldade de criar raízes, impulsividade e excesso de mudanças. Pode existir sensação de que nada permanece por muito tempo. Também podem surgir gastos impulsivos, decisões precipitadas e dificuldade para manter rotina ou compromisso. Em alguns casos, a casa pode parecer mais um lugar de passagem do que um verdadeiro lar.",

    orientacao:
      "Para harmonizar essa vibração, permita movimento sem perder direção. Experimente coisas novas, mas preserve alguns pontos de estabilidade. A liberdade funciona melhor quando existe consciência. No Mapa Numerológico Pessoal, podemos verificar se você está vivendo um momento que pede exatamente essa mudança ou se essa casa está aumentando uma instabilidade que já existe em sua vida.",
  },

  6: {
    numero: 6,

    titulo:
      "Uma casa de amor, família e acolhimento",

    diagnostico:
      "Sua residência vibra na energia do número 6. Essa é uma das vibrações mais ligadas ao conceito de lar, família, cuidado, afeto e responsabilidade. É uma casa que pode fortalecer vínculos, aumentar o desejo de proteger pessoas e estimular preocupação com beleza, conforto e harmonia. Quem vive nesse ambiente costuma se envolver bastante com assuntos familiares e pode sentir forte necessidade de manter todos bem.",

    positivo:
      "No lado positivo, favorece amor, família, união, responsabilidade, acolhimento, compromisso, beleza e sensação de pertencimento. É uma ótima vibração para quem deseja fortalecer relações familiares, criar um ambiente agradável e cultivar vínculos duradouros. Também pode estimular senso estético, cuidado com decoração e prazer em receber pessoas queridas.",

    atencao:
      "Quando desequilibrada, pode aumentar cobranças, perfeccionismo, preocupação excessiva e tendência a assumir problemas dos outros. Algumas pessoas podem se sentir responsáveis pela felicidade de toda a família. Também podem surgir ciúmes, controle, excesso de proteção e dificuldade de permitir que cada pessoa faça suas próprias escolhas.",

    orientacao:
      "Para harmonizar uma Casa 6, cuide sem controlar. O amor precisa de presença, mas também de limites. Preserve o conforto e a beleza do lar, mas não transforme a casa em um lugar de cobranças constantes. Cruzada com seu Mapa Numerológico Pessoal, essa vibração pode mostrar se você está vivendo uma fase de construção afetiva ou se precisa aprender a se responsabilizar menos pela vida dos outros.",
  },

  7: {
    numero: 7,

    titulo:
      "Uma casa de introspecção, estudo e profundidade",

    diagnostico:
      "Sua residência vibra na energia do número 7. Essa casa tende a estimular silêncio, reflexão, estudo, pesquisa, espiritualidade e necessidade de privacidade. Pode ser um ambiente muito agradável para quem gosta de ler, trabalhar sozinho, estudar, meditar ou simplesmente ter momentos de recolhimento. É uma vibração que convida os moradores a olhar para dentro e aprofundar pensamentos e sentimentos.",

    positivo:
      "No lado positivo, favorece concentração, conhecimento, pesquisa, autoconhecimento, espiritualidade, tranquilidade e desenvolvimento intelectual. Pode ser excelente para estudantes, terapeutas, pesquisadores, escritores e pessoas que precisam de silêncio para produzir. Também pode criar uma sensação de proteção contra excesso de estímulos externos.",

    atencao:
      "Quando entra em desequilíbrio, a Casa 7 pode aumentar isolamento, distanciamento, silêncio excessivo e dificuldade de convivência. Os moradores podem ficar cada um em seu próprio mundo. Também podem surgir sensação de solidão, excesso de pensamentos, preocupação e dificuldade de compartilhar sentimentos.",

    orientacao:
      "Para harmonizar essa casa, preserve silêncio e profundidade, mas crie também momentos de convivência e troca. Abrir as portas para pessoas queridas e manter contato com o mundo externo ajuda a equilibrar a energia. No seu Mapa Numerológico Pessoal, podemos descobrir se essa casa está favorecendo seu desenvolvimento interior ou reforçando uma tendência a se isolar demais.",
  },

  8: {
    numero: 8,

    titulo:
      "Uma casa de prosperidade, poder e realização",

    diagnostico:
      "Sua residência vibra na energia do número 8. Essa casa está fortemente relacionada à realização material, administração, patrimônio, trabalho, poder de decisão e prosperidade. Quem vive nesse ambiente pode sentir maior preocupação com dinheiro, carreira, investimentos e construção de segurança financeira. É uma vibração muito forte para pessoas que desejam crescer materialmente e assumir mais controle sobre seus resultados.",

    positivo:
      "No lado positivo, favorece negócios, finanças, administração, liderança, patrimônio, ambição saudável e capacidade de transformar esforço em resultados concretos. Pode ser uma excelente energia para empresários, executivos, profissionais autônomos e pessoas que estão construindo patrimônio ou buscando crescimento financeiro.",

    atencao:
      "Quando desequilibrada, pode aumentar conflitos por dinheiro, controle, poder e autoridade. Os moradores podem ficar excessivamente focados em trabalho, resultados e conquistas materiais. Também pode haver ciúme, disputas, rigidez, cobrança e dificuldade de demonstrar vulnerabilidade. Em alguns casos, a casa pode ser financeiramente produtiva, mas emocionalmente fria.",

    orientacao:
      "Para harmonizar uma Casa 8, busque prosperidade sem permitir que dinheiro ou poder ocupem todo o espaço da vida. Cultive afeto, diálogo e descanso. O Mapa Numerológico Pessoal ajuda a entender se essa vibração está potencializando um momento de realização ou se precisa ser equilibrada com outras áreas da sua vida.",
  },

  9: {
    numero: 9,

    titulo:
      "Uma casa de sensibilidade, generosidade e renovação",

    diagnostico:
      "Sua residência vibra na energia do número 9. Essa é uma casa ligada à sensibilidade, generosidade, criatividade, espiritualidade e encerramento de ciclos. Pode ser um ambiente onde muitas pessoas entram e saem, histórias terminam, novas fases começam e aprendizados importantes acontecem. Quem vive em uma Casa 9 pode sentir maior necessidade de ajudar, acolher, compreender e olhar para questões mais amplas da vida.",

    positivo:
      "No lado positivo, favorece compaixão, criatividade, inspiração, espiritualidade, generosidade, visão coletiva e capacidade de acolher. Pode ser uma casa muito rica para pessoas ligadas à arte, terapias, educação, causas sociais ou atividades que envolvem ajudar outras pessoas. Também pode estimular maturidade emocional e compreensão mais ampla das experiências vividas.",

    atencao:
      "Quando desequilibrada, pode trazer altos e baixos emocionais, idealização, dificuldade de desapego e tendência a carregar problemas de outras pessoas. Pode haver excesso de doação, desgaste emocional e dificuldade de colocar limites. Em alguns casos, a casa pode acumular histórias, objetos e situações que já deveriam ter sido encerradas.",

    orientacao:
      "Para harmonizar uma Casa 9, pratique desapego, organização e limites emocionais. Ajude sem carregar tudo para dentro do seu lar. Permita que ciclos terminem quando precisam terminar. Cruzada com seu Mapa Numerológico Pessoal, essa energia pode revelar se você está vivendo um momento de conclusão, renovação ou preparação para um novo ciclo.",
  },
};

function calcularCasa(
  valores: Record<string, string>
): ResultadoLandingPremium | null {
  const numeroDigitado =
    valores.numeroCasa?.trim();

  if (!numeroDigitado) {
    return null;
  }

  const somenteNumeros =
    numeroDigitado.replace(/\D/g, "");

  if (!somenteNumeros) {
    return null;
  }

  const soma = somenteNumeros
    .split("")
    .reduce(
      (total, digito) =>
        total + Number(digito),
      0
    );

  const numero = reduzirNumero(soma);

  return diagnosticosCasa[numero] ?? null;
}

export default function CasaPage() {
  const pagina = landingPagesConfig.casa;

  return (
    <LandingDiagnosticoPremium
      imagem={pagina.imagem}
      altImagem={pagina.altImagem}
      titulo={pagina.titulo}
      subtitulo={pagina.subtitulo}
      campos={pagina.campos}
      textoAntesBotao={pagina.textoAntesBotao}
      textoBotao={pagina.textoBotao}
      calcular={calcularCasa}
      tituloPosDiagnostico="Sua casa combina com a energia que você está vivendo?"
      textoPosDiagnostico="O número da residência revela apenas uma parte da história. No Mapa Numerológico Pessoal completo, Oscar Ahumada pode cruzar a energia da sua casa com seu Destino, seu nome, seus ciclos e seu momento atual para mostrar como essa vibração realmente atua na sua vida."
      textoBotaoOscar="QUERO CONHECER MEU MAPA COMPLETO"
      linkWhatsAppOscar={criarLinkWhatsApp}
    />
  );
}