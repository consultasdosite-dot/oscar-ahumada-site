/*
 * PREVISÕES NUMEROLÓGICAS
 * OSCAR AHUMADA
 *
 * Biblioteca para:
 * - Ano Pessoal
 * - Mês Pessoal
 * - Previsões 2026
 * - Previsões 2027
 *
 * As previsões trabalham com as vibrações de 1 a 9.
 */

export type NumeroPrevisao = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type PrevisaoAnual = {
  numero: NumeroPrevisao;
  titulo: string;
  abertura: string;
  movimentoDoAno: string;
  profissionalFinanceiro: string;
  afetivo: string;
  pontoAtencao: string;
  orientacaoOscar: string;
};

export type PrevisaoMensal = {
  numero: NumeroPrevisao;
  titulo: string;
  energia: string;
  favorece: string;
  atencao: string;
  atitude: string;
};

export type MesNumerologico = {
  mes: number;
  nomeMes: string;
  numero: NumeroPrevisao;
  previsao: PrevisaoMensal;
  transicaoProximoAno: boolean;
};

export type PrevisaoAnoCompleta = {
  ano: number;
  numeroAnoPessoal: NumeroPrevisao;
  anual: PrevisaoAnual;
  meses: MesNumerologico[];
};

export const nomesMeses = [
  "",
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

/*
 * Para as previsões utilizamos 1 a 9.
 *
 * Caso algum cálculo intermediário resulte em:
 * 11 => 2
 * 22 => 4
 */
export function reduzirParaPrevisao(numero: number): NumeroPrevisao {
  let atual = Math.abs(numero);

  while (atual > 9) {
    atual = atual
      .toString()
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }

  return atual as NumeroPrevisao;
}

/*
 * PREVISÕES ANUAIS
 */

export const previsoesAnuais: Record<NumeroPrevisao, PrevisaoAnual> = {
  1: {
    numero: 1,

    titulo: "Um ano para começar uma nova fase",

    abertura:
      "Você entra em um período regido pela força do número 1. Quero que olhe para este ano como uma porta que se abre. Existe uma energia de início, reação, criatividade, vitalidade e ação pedindo que você deixe de olhar excessivamente para aquilo que terminou e comece a pensar no que deseja construir daqui para frente.",

    movimentoDoAno:
      "Este é um ano para tomar decisões, criar novos projetos, reformular situações que já perderam sentido e recuperar sua capacidade de escolha. A vida pode pedir mais iniciativa. Quanto mais você assumir a direção das próprias decisões, maior será a possibilidade de sentir que está realmente começando um novo ciclo.",

    profissionalFinanceiro:
      "No campo profissional e material, existe força para iniciar projetos, mudar estratégias, buscar maior independência e colocar ideias em prática. Não espere que todas as condições sejam perfeitas para começar. O número 1 favorece quem reage e cria movimento.",

    afetivo:
      "Afetivamente, é um período para limpar mágoas e não construir o futuro olhando permanentemente para trás. Pode representar um novo amor, uma nova etapa dentro de uma relação existente ou simplesmente uma nova maneira de você se posicionar emocionalmente.",

    pontoAtencao:
      "Evite transformar independência em isolamento ou iniciativa em impulsividade. Começar é importante, mas também será necessário criar direção para aquilo que está começando.",

    orientacaoOscar:
      "Este ano pede coragem para renascer. Pergunte a si mesmo: se eu pudesse começar uma parte da minha vida novamente, o que faria diferente? Talvez a resposta indique exatamente onde sua energia precisa ser colocada.",
  },

  2: {
    numero: 2,

    titulo: "Um ano de parcerias, união e cooperação",

    abertura:
      "A vibração 2 traz um período em que as relações ganham importância. Depois da iniciativa e dos movimentos individuais, chega o momento de compreender que determinados objetivos precisam da participação de outras pessoas.",

    movimentoDoAno:
      "Parcerias, sociedades, alianças, amizades e relações familiares podem ocupar mais espaço. Será importante ouvir, observar e permitir ajuda. Ao mesmo tempo, você também poderá ser chamado a colaborar com os projetos de outras pessoas.",

    profissionalFinanceiro:
      "Profissionalmente, trabalhar em conjunto pode produzir resultados melhores do que insistir em fazer tudo sozinho. Negociações, sociedades e acordos precisam de paciência e atenção aos detalhes.",

    afetivo:
      "A energia do 2 favorece aproximações, compromissos e construção de vínculos. Para quem está em uma relação, será importante observar se existe verdadeira reciprocidade. Para quem está sozinho, pode existir maior abertura para novas conexões.",

    pontoAtencao:
      "Não confunda parceria com dependência. Cooperar é diferente de abandonar suas próprias necessidades para evitar conflitos.",

    orientacaoOscar:
      "Abra espaço para o outro, mas continue ocupando seu próprio lugar. As melhores uniões são aquelas em que duas pessoas inteiras escolhem caminhar juntas.",
  },

  3: {
    numero: 3,

    titulo: "Um ano de criatividade, expansão e comunicação",

    abertura:
      "Agora a energia muda e pede expressão. O número 3 traz criatividade, comunicação, sociabilidade e possibilidade de expansão. Ideias que estavam amadurecendo podem encontrar um público ou uma forma mais clara de serem apresentadas.",

    movimentoDoAno:
      "É um período favorável para divulgar, conversar, criar contatos, ampliar círculos sociais e permitir que suas ideias circulem. A vida pode apresentar mais convites, propostas e oportunidades de interação.",

    profissionalFinanceiro:
      "Profissionalmente, comunicação, publicidade, vendas, criatividade e relacionamento com o público ganham força. Projetos que dependem de visibilidade podem ser favorecidos.",

    afetivo:
      "A vida afetiva tende a pedir leveza, comunicação e presença. Novas pessoas podem aparecer e relações existentes podem ganhar mais movimento quando existe diálogo e disposição para compartilhar experiências.",

    pontoAtencao:
      "O cuidado principal é a dispersão. Muitas propostas não significam necessariamente que todas merecem sua energia.",

    orientacaoOscar:
      "Mostre aquilo que sabe fazer. O 3 não gosta de talento escondido. Mas escolha onde colocar sua criatividade para que sua expansão produza resultados.",
  },

  4: {
    numero: 4,

    titulo: "Um ano para consolidar e construir",

    abertura:
      "A energia 4 pede organização, trabalho e estrutura. Aquilo que foi iniciado e desenvolvido anteriormente precisa agora encontrar bases mais sólidas.",

    movimentoDoAno:
      "É um período de construção. Organizar documentos, responsabilidades, projetos, finanças e compromissos pode ocupar mais atenção. O avanço tende a acontecer através de disciplina e continuidade.",

    profissionalFinanceiro:
      "O campo profissional pode exigir maior esforço, mas também oferece oportunidade de consolidar aquilo que já vem sendo construído. Planejamento e praticidade serão mais importantes do que pressa.",

    afetivo:
      "Afetivamente, existe potencial de consolidação. Relações precisam de clareza, compromisso e atitudes concretas. Também será importante expressar sentimentos que ficaram guardados.",

    pontoAtencao:
      "Evite excesso de trabalho, rigidez e preocupação. A busca por segurança não deve transformar o ano inteiro em obrigação.",

    orientacaoOscar:
      "Organize a vida para que ela trabalhe a seu favor. Este não é necessariamente um ano de atalhos; é um ano para construir algo que possa permanecer.",
  },

  5: {
    numero: 5,

    titulo: "Um ano de mudanças e novas experiências",

    abertura:
      "O número 5 movimenta a vida. Mudanças, viagens, novos contatos e experiências diferentes podem ganhar destaque. O livre-arbítrio será especialmente importante porque muitas situações podem apresentar mais de uma possibilidade.",

    movimentoDoAno:
      "Você poderá sentir vontade de alterar rotinas, ambientes, projetos ou relacionamentos. É um período para conhecer novas possibilidades e experimentar caminhos diferentes.",

    profissionalFinanceiro:
      "No trabalho, intercâmbios, novos clientes, comunicação, comércio, viagens e expansão podem ser favorecidos. Entretanto, mudanças financeiras precisam ser feitas com atenção para não transformar entusiasmo em imprudência.",

    afetivo:
      "Afetivamente, cuide daquilo que realmente possui valor. O desejo de novidade pode aproximar novas pessoas, mas também pode provocar inquietação com relações que entraram em rotina.",

    pontoAtencao:
      "Nem toda mudança precisa ser definitiva. Evite destruir algo importante apenas porque neste momento você sente necessidade de novidade.",

    orientacaoOscar:
      "Experimente, conheça e movimente-se. Mas antes de abandonar aquilo que construiu, pergunte se realmente terminou ou se apenas deixou de ser novidade.",
  },

  6: {
    numero: 6,

    titulo: "Um ano de amor, harmonia e responsabilidades",

    abertura:
      "A vibração 6 coloca relacionamentos, família, responsabilidades e busca de harmonia em primeiro plano. É um período que pode aproximar pessoas e favorecer reconciliações e decisões importantes.",

    movimentoDoAno:
      "Assuntos familiares, jurídicos, administrativos ou situações que precisam ser colocadas em ordem podem pedir sua atenção. A energia favorece acordos e tentativas de harmonização.",

    profissionalFinanceiro:
      "No campo material, organização e responsabilidade continuam importantes. Atividades ligadas a pessoas, atendimento, beleza, cuidado, educação e serviços podem receber estímulo.",

    afetivo:
      "Este é um dos períodos em que a vida afetiva pode ganhar maior destaque. Relações existentes podem buscar mais compromisso e pessoas solteiras podem sentir maior desejo de encontrar alguém com valores semelhantes.",

    pontoAtencao:
      "O cuidado está em assumir responsabilidades excessivas ou tentar resolver a vida de todos. Harmonia não significa carregar todos os problemas.",

    orientacaoOscar:
      "Aproxime, cuide e harmonize, mas preserve seu equilíbrio. Amor não deve ser sinônimo de sacrifício permanente.",
  },

  7: {
    numero: 7,

    titulo: "Um ano de reflexão, maturidade e autoconhecimento",

    abertura:
      "A vibração do número 7 muda a velocidade externa e aumenta a necessidade de olhar para dentro. É um período de maturidade, reflexão, estudo e revisão de escolhas.",

    movimentoDoAno:
      "Você poderá sentir necessidade de observar mais antes de agir. Determinadas áreas podem parecer mais lentas, não necessariamente porque estejam dando errado, mas porque este período pede análise e compreensão.",

    profissionalFinanceiro:
      "Profissionalmente, o crescimento pode estar mais relacionado a conhecimento, planejamento, pesquisa e aperfeiçoamento do que à expansão imediata. Evite decisões tomadas apenas pela ansiedade de produzir movimento.",

    afetivo:
      "Nos relacionamentos, trabalhe a confiança e não tente imaginar aquilo que o outro está pensando sem conversar. Pode existir necessidade maior de espaço e silêncio.",

    pontoAtencao:
      "Cuidado para que introspecção não se transforme em isolamento, pessimismo ou excesso de preocupação.",

    orientacaoOscar:
      "Nem todo ano precisa ser vivido correndo. O 7 ensina que algumas das decisões mais importantes surgem quando diminuímos o ruído e conseguimos nos escutar.",
  },

  8: {
    numero: 8,

    titulo: "Um ano de realização material e recuperação",

    abertura:
      "Depois de períodos de reflexão e amadurecimento, a vibração 8 traz uma força maior de realização, administração e resultados. É hora de voltar os olhos para aquilo que pode ser concretizado.",

    movimentoDoAno:
      "Existe possibilidade de recuperar confiança, reorganizar questões materiais e perceber resultados de esforços anteriores. Justiça, equilíbrio e responsabilidade serão temas importantes.",

    profissionalFinanceiro:
      "O número 8 favorece administração, negócios, investimentos, compras importantes e reorganização financeira, sempre com cautela. Ambição pode produzir crescimento quando acompanhada de planejamento e humildade.",

    afetivo:
      "Afetivamente, controle e proteção excessivos precisam ser observados. Sua força pode oferecer segurança, mas não deve sufocar quem está ao seu lado.",

    pontoAtencao:
      "Evite excesso de confiança, autoritarismo ou acreditar que somente os resultados materiais determinam se o ano foi positivo.",

    orientacaoOscar:
      "Prosperidade é consequência de decisões, disciplina e consciência. Faça o dinheiro e o poder trabalharem a favor da sua vida, e não o contrário.",
  },

  9: {
    numero: 9,

    titulo: "Um ano de realizações, encerramentos e renovação",

    abertura:
      "O número 9 representa o fechamento de uma sequência. Sonhos podem ser realizados, objetivos antigos podem finalmente encontrar uma resposta e situações que perderam sentido podem pedir encerramento.",

    movimentoDoAno:
      "É um período para selecionar o que continuará com você e aquilo que precisa ser liberado. Viagens, novos conhecimentos e experiências capazes de ampliar sua visão podem ganhar importância.",

    profissionalFinanceiro:
      "Profissionalmente, conclua aquilo que está pendente e observe quais projetos ainda possuem futuro. Algumas finalizações serão necessárias para liberar espaço para o próximo ciclo.",

    afetivo:
      "A vida afetiva pede verdade. Relações, sentimentos e histórias que ficaram indefinidas podem precisar de uma posição mais clara. Viva intensamente, mas não tente obrigar outras pessoas a sentir ou pensar como você.",

    pontoAtencao:
      "Evite idealização excessiva, fanatismo emocional e dificuldade de desapegar daquilo que já cumpriu sua função.",

    orientacaoOscar:
      "O 9 ensina que terminar também é uma forma de começar. Faça as pazes com aquilo que precisa ficar no passado para chegar mais leve ao novo ciclo.",
  },
};

/*
 * PREVISÕES MENSAIS
 *
 * O mês pessoal utiliza a mesma natureza qualitativa
 * das vibrações 1 a 9, porém aplicada a um período
 * mais curto e objetivo.
 */

export const previsoesMensais: Record<NumeroPrevisao, PrevisaoMensal> = {
  1: {
    numero: 1,
    titulo: "Iniciativa e novos movimentos",
    energia:
      "Este mês pede atitude. Existe uma força favorável para iniciar, decidir, reagir e colocar algo novo em movimento.",
    favorece:
      "Novos projetos, decisões pessoais, liderança, mudanças de estratégia e iniciativas profissionais.",
    atencao:
      "Impaciência, autoritarismo e decisões tomadas apenas para provar independência.",
    atitude:
      "Escolha uma prioridade e dê o primeiro passo. Não espere que outra pessoa comece aquilo que depende de você.",
  },

  2: {
    numero: 2,
    titulo: "Parcerias e sensibilidade",
    energia:
      "O ritmo pede mais observação, cooperação e capacidade de escutar. Pessoas e relações podem ser importantes para aquilo que precisa acontecer.",
    favorece:
      "Parcerias, acordos, conversas, reconciliações, planejamento e aproximações afetivas.",
    atencao:
      "Dependência, indecisão e excesso de sensibilidade diante das atitudes dos outros.",
    atitude:
      "Ouça, negocie e tenha paciência. Nem tudo precisa ser resolvido através da força.",
  },

  3: {
    numero: 3,
    titulo: "Comunicação e expansão",
    energia:
      "A energia ganha movimento social. Comunicação, criatividade e exposição podem abrir caminhos.",
    favorece:
      "Divulgação, vendas, contatos, eventos, redes sociais, encontros, criatividade e novas amizades.",
    atencao:
      "Dispersão, excesso de compromissos e prometer mais do que conseguirá cumprir.",
    atitude:
      "Mostre suas ideias e converse com as pessoas certas. Sua palavra pode criar oportunidades.",
  },

  4: {
    numero: 4,
    titulo: "Organização e consolidação",
    energia:
      "Este mês pede estrutura. É hora de colocar ordem no que está acumulado e construir bases mais seguras.",
    favorece:
      "Organização financeira, documentos, trabalho, planejamento, reformas, contratos e decisões práticas.",
    atencao:
      "Rigidez, excesso de cobrança e resistência a pequenas mudanças necessárias.",
    atitude:
      "Organize primeiro. Quanto mais clara estiver sua estrutura, mais fácil será avançar.",
  },

  5: {
    numero: 5,
    titulo: "Mudanças e oportunidades",
    energia:
      "Movimento, novidade e oportunidades inesperadas podem alterar a rotina. Flexibilidade será uma grande aliada.",
    favorece:
      "Viagens, contatos comerciais, mudanças, experiências novas, divulgação e negociações.",
    atencao:
      "Impulsividade, gastos sem planejamento, instabilidade e decisões baseadas apenas na vontade de mudar.",
    atitude:
      "Esteja aberto ao novo, mas observe se a oportunidade realmente combina com seus objetivos.",
  },

  6: {
    numero: 6,
    titulo: "Afeto, família e responsabilidades",
    energia:
      "Relacionamentos e responsabilidades podem ganhar destaque. É um mês de aproximação, cuidado e busca de equilíbrio.",
    favorece:
      "Família, acordos, relacionamentos, casa, beleza, compromissos e reconciliações.",
    atencao:
      "Cobrança, perfeccionismo e assumir problemas que pertencem às outras pessoas.",
    atitude:
      "Cuide do que é importante, mas lembre que você também precisa receber cuidado.",
  },

  7: {
    numero: 7,
    titulo: "Reflexão e análise",
    energia:
      "A energia convida a observar mais e agir com menos ansiedade. Estudo, reflexão e planejamento podem produzir respostas importantes.",
    favorece:
      "Pesquisa, cursos, revisão de projetos, autoconhecimento, organização mental e decisões que exigem análise.",
    atencao:
      "Isolamento, pessimismo, excesso de dúvidas e tentativa de controlar tudo através da razão.",
    atitude:
      "Não force respostas. Observe, estude e dê tempo para que algumas situações revelem aquilo que ainda não está claro.",
  },

  8: {
    numero: 8,
    titulo: "Resultados e vida material",
    energia:
      "O mês direciona atenção para trabalho, dinheiro, administração, decisões e resultados concretos.",
    favorece:
      "Negócios, investimentos conscientes, negociações, organização financeira, liderança e decisões profissionais.",
    atencao:
      "Autoritarismo, conflitos por dinheiro, controle e decisões excessivamente ambiciosas.",
    atitude:
      "Seja objetivo. Avalie números, resultados e responsabilidades antes de assumir novos compromissos.",
  },

  9: {
    numero: 9,
    titulo: "Conclusões e liberação",
    energia:
      "Este mês pode mostrar com mais clareza o que chegou ao fim de um processo. Algumas conclusões serão importantes para abrir espaço.",
    favorece:
      "Finalizações, desapego, viagens, atividades humanitárias, reconciliações internas e encerramento de pendências.",
    atencao:
      "Insistir em situações encerradas, dramatizar despedidas ou tentar resolver os problemas de todos.",
    atitude:
      "Termine o que precisa ser terminado. Liberar espaço também é preparar o futuro.",
  },
};

export function obterPrevisaoAnual(
  numero: number
): PrevisaoAnual {
  return previsoesAnuais[reduzirParaPrevisao(numero)];
}

export function obterPrevisaoMensal(
  numero: number
): PrevisaoMensal {
  return previsoesMensais[reduzirParaPrevisao(numero)];
}

/*
 * Calcula o Ano Pessoal diretamente para as previsões.
 *
 * Dia + mês de nascimento + ano analisado.
 */
export function calcularAnoPessoalPrevisao(
  dataNascimento: string,
  ano: number
): NumeroPrevisao {
  const partes = dataNascimento.split("-");

  if (partes.length !== 3) {
    throw new Error("Data de nascimento inválida.");
  }

  const mes = Number(partes[1]);
  const dia = Number(partes[2]);

  if (!dia || !mes) {
    throw new Error("Data de nascimento inválida.");
  }

  const numeros = `${dia
    .toString()
    .padStart(2, "0")}${mes
    .toString()
    .padStart(2, "0")}${ano}`;

  const soma = numeros
    .split("")
    .reduce((total, digito) => total + Number(digito), 0);

  return reduzirParaPrevisao(soma);
}

/*
 * Mês Pessoal:
 *
 * Ano Pessoal + mês calendário.
 */
export function calcularMesPessoalPrevisao(
  anoPessoal: NumeroPrevisao,
  mes: number
): NumeroPrevisao {
  if (mes < 1 || mes > 12) {
    throw new Error("Mês inválido.");
  }

  return reduzirParaPrevisao(anoPessoal + mes);
}

/*
 * Monta os 12 meses de determinado ano.
 *
 * Outubro, Novembro e Dezembro recebem
 * a marca de transição para o ano seguinte.
 */
export function montarMesesDoAno(
  anoPessoal: NumeroPrevisao
): MesNumerologico[] {
  return Array.from({ length: 12 }, (_, index) => {
    const mes = index + 1;

    const numero = calcularMesPessoalPrevisao(
      anoPessoal,
      mes
    );

    return {
      mes,
      nomeMes: nomesMeses[mes],
      numero,
      previsao: obterPrevisaoMensal(numero),
      transicaoProximoAno: mes >= 10,
    };
  });
}

/*
 * Monta uma previsão completa de um ano.
 */
export function montarPrevisaoAno(
  dataNascimento: string,
  ano: number
): PrevisaoAnoCompleta {
  const numeroAnoPessoal = calcularAnoPessoalPrevisao(
    dataNascimento,
    ano
  );

  return {
    ano,
    numeroAnoPessoal,
    anual: obterPrevisaoAnual(numeroAnoPessoal),
    meses: montarMesesDoAno(numeroAnoPessoal),
  };
}

/*
 * FUNÇÃO PRINCIPAL DO MAPA ATUAL
 *
 * Retorna automaticamente:
 * - previsão completa 2026
 * - previsão completa 2027
 */
export function montarPrevisoes2026e2027(
  dataNascimento: string
): {
  previsao2026: PrevisaoAnoCompleta;
  previsao2027: PrevisaoAnoCompleta;
} {
  return {
    previsao2026: montarPrevisaoAno(
      dataNascimento,
      2026
    ),

    previsao2027: montarPrevisaoAno(
      dataNascimento,
      2027
    ),
  };
}