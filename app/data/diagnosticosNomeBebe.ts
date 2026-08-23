export type NumeroNomeBebe =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 11
  | 22;

export type DiagnosticoNomeBebe = {
  numero: NumeroNomeBebe;
  titulo: string;
  revelacao: string;
  potenciais: string;
  desafios: string;
  orientacaoPais: string;
  importanciaDestino: string;
};

export const diagnosticosNomeBebe: Record<
  NumeroNomeBebe,
  DiagnosticoNomeBebe
> = {
  1: {
    numero: 1,

    titulo:
      "Um nome de iniciativa, independência e força de identidade",

    revelacao:
      "Um nome regido pelo número 1 tende a transmitir uma vibração de autonomia, iniciativa, coragem e necessidade de abrir caminhos. É uma energia que pode estimular desde cedo o desejo de fazer as coisas de maneira própria, desenvolver personalidade marcante e buscar reconhecimento pela própria capacidade. Essa criança pode demonstrar vontade de decidir, experimentar e ocupar seu espaço com mais firmeza. É um nome que favorece identidade, presença e espírito pioneiro.",

    potenciais:
      "Entre os potenciais mais positivos estão liderança, criatividade, capacidade de decisão, independência, coragem para começar e força para enfrentar situações novas. A criança pode sentir maior facilidade para assumir responsabilidades, defender suas ideias e buscar caminhos próprios. Em ambientes que respeitam sua individualidade, essa vibração pode fortalecer autoconfiança e iniciativa.",

    desafios:
      "Quando essa energia fica excessiva, podem aparecer impaciência, dificuldade de aceitar limites, resistência a orientações, competitividade ou necessidade constante de provar capacidade. Também pode existir tendência a querer fazer tudo sozinho e dificuldade de pedir ajuda. O desafio é aprender que independência não significa isolamento e que liderança verdadeira também exige escuta.",

    orientacaoPais:
      "Os pais podem estimular autonomia sem transformar a criança em alguém que precise decidir tudo sozinha. É importante oferecer espaço para iniciativa, mas também ensinar cooperação, respeito e capacidade de compartilhar decisões. Um nome 1 funciona melhor quando a criança percebe que pode ser forte sem precisar competir permanentemente.",

    importanciaDestino:
      "Antes de definir esse nome, é importante conhecer o possível Destino da criança. Um nome 1 pode fortalecer maravilhosamente um Destino que precise de iniciativa, mas também pode intensificar excesso de independência em determinadas combinações. A possível data de nascimento ajuda a revelar essa relação. Uma consulta com Oscar Ahumada permite cruzar a vibração do nome com o futuro Destino da criança e avaliar se essa combinação realmente favorece seu desenvolvimento.",
  },

  2: {
    numero: 2,

    titulo:
      "Um nome de sensibilidade, união e capacidade de criar vínculos",

    revelacao:
      "O número 2 transmite uma vibração mais sensível, cooperativa e afetiva. Um bebê com essa energia no nome pode desenvolver grande percepção das pessoas e do ambiente, valorizando vínculos, proximidade e sensação de segurança emocional. É uma vibração que favorece delicadeza, diplomacia, amizade e capacidade de perceber nuances emocionais que outras pessoas nem sempre notam.",

    potenciais:
      "Pode estimular empatia, paciência, capacidade de ouvir, cooperação, senso de parceria e facilidade para construir relações profundas. Essa criança pode se destacar pela habilidade de aproximar pessoas, perceber conflitos antes que cresçam e criar ambientes mais harmoniosos. Também pode possuir sensibilidade artística e emocional bastante desenvolvida.",

    desafios:
      "Em excesso, essa vibração pode aumentar insegurança, dependência emocional, medo de desagradar ou dificuldade de tomar decisões. A criança pode sentir demais o ambiente e as opiniões externas. Também pode preferir ceder para manter a paz, mesmo quando deveria expressar aquilo que pensa ou deseja.",

    orientacaoPais:
      "É importante incentivar essa criança a confiar na própria percepção e aprender a expressar vontades com clareza. Sensibilidade é uma qualidade, não uma fraqueza. Os pais podem ajudá-la a compreender que preservar relações não significa abrir mão de si mesma.",

    importanciaDestino:
      "O número 2 no nome pode ser extremamente harmonioso em determinados Destinos e mais sensível em outros. A data de nascimento mostrará se essa energia de parceria equilibra ou intensifica tendências emocionais. Por isso, antes da escolha definitiva, vale cruzar nome e possível Destino em uma consulta com Oscar Ahumada.",
  },

  3: {
    numero: 3,

    titulo:
      "Um nome de comunicação, criatividade e expressão",

    revelacao:
      "O número 3 transmite alegria, comunicação, espontaneidade e forte necessidade de expressão. É uma vibração que pode estimular uma criança curiosa, criativa, comunicativa e capaz de chamar atenção naturalmente pela forma como fala, brinca ou se expressa. Pode existir grande necessidade de trocar ideias, participar, imaginar e transformar situações comuns em experiências mais leves e criativas.",

    potenciais:
      "Favorece comunicação, criatividade, sociabilidade, humor, arte, expressão verbal e facilidade para criar conexões. Essa criança pode desenvolver talento para música, escrita, teatro, comunicação, desenho ou atividades que envolvam exposição e criatividade. Também pode ter facilidade para inspirar outras pessoas por meio do entusiasmo.",

    desafios:
      "Quando desequilibrada, essa energia pode gerar dispersão, dificuldade de manter foco, excesso de estímulos, impaciência com rotinas e tendência a abandonar algo quando perde o interesse. Também pode existir necessidade constante de atenção e dificuldade para lidar com críticas.",

    orientacaoPais:
      "O melhor caminho é estimular criatividade com alguma estrutura. Incentivar talentos, comunicação e expressão, mas também ensinar continuidade, concentração e responsabilidade. A criança não precisa deixar de ser espontânea para aprender disciplina.",

    importanciaDestino:
      "Um nome 3 pode expandir fortemente a comunicação de determinados Destinos, mas também pode aumentar dispersão em outros. A possível data de nascimento ajudará a mostrar se essa vibração complementa ou desequilibra o futuro Destino. Oscar Ahumada pode analisar essa combinação antes da escolha definitiva.",
  },

  4: {
    numero: 4,

    titulo:
      "Um nome de estabilidade, disciplina e construção",

    revelacao:
      "O número 4 traz uma vibração de estrutura, segurança, organização e responsabilidade. É um nome que pode estimular uma criança mais observadora, prática e comprometida com aquilo que começa. Existe tendência a valorizar regras claras, rotina, previsibilidade e sensação de segurança. Quando bem vivida, essa energia ajuda a construir bases sólidas para a vida.",

    potenciais:
      "Favorece disciplina, organização, persistência, responsabilidade, concentração e capacidade de construir resultados de longo prazo. Essa criança pode ter facilidade para cumprir tarefas, aprender por repetição, organizar objetos, seguir métodos e assumir compromissos com seriedade.",

    desafios:
      "Em excesso, a vibração 4 pode gerar rigidez, medo de mudanças, dificuldade de improvisar, excesso de cobrança e necessidade de controlar o ambiente. A criança pode sentir desconforto quando algo sai do planejado ou demonstrar resistência diante de situações novas.",

    orientacaoPais:
      "É importante oferecer segurança, mas também estimular flexibilidade. Rotina ajuda, mas a criança precisa perceber que mudanças fazem parte da vida e não representam necessariamente ameaça. Brincadeiras criativas e experiências novas podem ajudar bastante nesse equilíbrio.",

    importanciaDestino:
      "Um nome 4 pode oferecer estabilidade a um Destino mais agitado ou reforçar demais uma natureza já rígida. É justamente por isso que a possível data de nascimento deve ser analisada junto ao nome. Uma consulta com Oscar Ahumada pode mostrar se essa estrutura favorece ou limita a combinação.",
  },

  5: {
    numero: 5,

    titulo:
      "Um nome de liberdade, movimento e experiências",

    revelacao:
      "O número 5 transmite liberdade, curiosidade, movimento e necessidade de experimentar a vida. É uma vibração dinâmica, que pode estimular uma criança inquieta, versátil, curiosa e aberta a novas experiências. Essa energia costuma gostar de mudanças, pessoas diferentes, viagens, conhecimento e tudo aquilo que quebra monotonia.",

    potenciais:
      "Favorece adaptação, comunicação, versatilidade, coragem para experimentar, curiosidade e capacidade de lidar com ambientes variados. Essa criança pode aprender rapidamente por experiência e demonstrar facilidade para interagir com diferentes pessoas e situações.",

    desafios:
      "Quando excessiva, essa vibração pode gerar inquietação, impulsividade, dificuldade de manter rotina, resistência a limites e tendência a perder interesse rapidamente. Pode existir também dificuldade em concluir aquilo que começou.",

    orientacaoPais:
      "A melhor orientação é oferecer liberdade com responsabilidade. A criança precisa experimentar, mas também entender consequências, horários, continuidade e compromisso. Um ambiente excessivamente rígido pode gerar rebeldia; ausência total de limites também não ajuda.",

    importanciaDestino:
      "A vibração 5 pode ser excelente para determinados Destinos e intensa demais para outros. A possível data de nascimento mostrará se esse nome traz equilíbrio, expansão ou excesso de movimento. Oscar Ahumada pode cruzar nome e Destino para orientar essa escolha com mais precisão.",
  },

  6: {
    numero: 6,

    titulo:
      "Um nome de amor, proteção, beleza e responsabilidade",

    revelacao:
      "O número 6 possui forte ligação com afeto, família, cuidado, responsabilidade e necessidade de harmonia. É uma vibração que pode estimular uma criança carinhosa, protetora, sensível às necessidades dos outros e muito ligada ao ambiente familiar. Também pode existir forte percepção estética e desejo de criar beleza e equilíbrio ao redor.",

    potenciais:
      "Favorece amor, responsabilidade, cuidado, capacidade de acolher, lealdade, senso familiar e sensibilidade artística. Essa criança pode demonstrar desde cedo preocupação com pessoas, animais, beleza, justiça e relações afetivas.",

    desafios:
      "Em desequilíbrio, pode aparecer excesso de preocupação, perfeccionismo, ciúme, cobrança ou tendência a assumir responsabilidades que não pertencem à criança. Pode sentir que precisa agradar ou cuidar de todo mundo.",

    orientacaoPais:
      "É importante ensinar que amar não significa se responsabilizar pela felicidade dos outros. Incentive o cuidado, mas preserve espaço para que a criança pense também em si mesma. Evitar cobranças por perfeição será essencial.",

    importanciaDestino:
      "O nome 6 pode trazer equilíbrio emocional para alguns Destinos e excesso de responsabilidade para outros. A possível data de nascimento revelará como essa vibração encontra o futuro Destino. Uma consulta com Oscar Ahumada ajuda a compreender se esse nome realmente favorece a combinação.",
  },

  7: {
    numero: 7,

    titulo:
      "Um nome de profundidade, conhecimento e introspecção",

    revelacao:
      "O número 7 transmite uma vibração profunda, analítica e introspectiva. Pode estimular uma criança observadora, curiosa sobre o sentido das coisas e com necessidade maior de momentos de silêncio e privacidade. É uma energia associada a estudo, pesquisa, conhecimento e busca de compreensão mais profunda.",

    potenciais:
      "Favorece inteligência analítica, concentração, pesquisa, observação, espiritualidade, estudo e capacidade de perceber detalhes que passam despercebidos. Essa criança pode aprender muito por observação e demonstrar interesses profundos desde cedo.",

    desafios:
      "Em excesso, pode gerar isolamento, dificuldade de expressar sentimentos, excesso de pensamentos, timidez ou sensação de não ser compreendida. Também pode existir seletividade exagerada em amizades ou ambientes.",

    orientacaoPais:
      "Respeite a necessidade de silêncio e tempo interno, mas incentive também convivência, comunicação e expressão emocional. Não force exposição excessiva, mas ajude a criança a criar pontes com o mundo.",

    importanciaDestino:
      "Um nome 7 pode aprofundar talentos intelectuais ou tornar determinada combinação excessivamente introspectiva. A possível data de nascimento é fundamental para entender essa relação. Oscar Ahumada pode analisar se esse nome conversa harmoniosamente com o Destino da criança.",
  },

  8: {
    numero: 8,

    titulo:
      "Um nome de realização, poder pessoal e prosperidade",

    revelacao:
      "O número 8 traz uma vibração de força, realização, liderança, administração e relação com o mundo material. Pode estimular uma criança determinada, prática e naturalmente interessada em resultados, conquistas e organização. É uma energia que tende a desenvolver senso de poder pessoal e capacidade de assumir responsabilidades importantes.",

    potenciais:
      "Favorece liderança, administração, ambição saudável, disciplina financeira, capacidade de decisão e realização material. Essa criança pode demonstrar grande senso de responsabilidade e habilidade para organizar pessoas ou recursos.",

    desafios:
      "Quando excessiva, pode gerar autoritarismo, cobrança, rigidez, competitividade ou preocupação exagerada com resultados e reconhecimento. Existe também o risco de aprender muito cedo a medir valor apenas por desempenho.",

    orientacaoPais:
      "Ensine que realização é importante, mas não define o valor pessoal. Estimule liderança com sensibilidade, ambição com ética e resultados sem pressão excessiva. A criança precisa aprender a vencer sem precisar dominar.",

    importanciaDestino:
      "O número 8 pode potencializar muito um Destino compatível ou intensificar uma personalidade já muito exigente. Por isso, a possível data de nascimento deve ser cruzada com o nome. Oscar Ahumada pode avaliar se essa vibração favorece equilíbrio e realização futura.",
  },

  9: {
    numero: 9,

    titulo:
      "Um nome de sensibilidade, generosidade e visão ampla",

    revelacao:
      "O número 9 transmite uma vibração humanitária, sensível, criativa e voltada para uma compreensão mais ampla da vida. Pode estimular uma criança generosa, empática, imaginativa e capaz de perceber necessidades além de si mesma. É uma energia relacionada a criatividade, compaixão, arte e desejo de contribuir.",

    potenciais:
      "Favorece generosidade, sensibilidade, criatividade, visão ampla, solidariedade, capacidade artística e empatia. Essa criança pode demonstrar forte preocupação com pessoas, animais, justiça ou causas coletivas.",

    desafios:
      "Em excesso, pode gerar idealização, dificuldade de colocar limites, excesso de entrega e tendência a absorver problemas das outras pessoas. Pode também sofrer quando percebe injustiças ou situações que não consegue resolver.",

    orientacaoPais:
      "Ensine generosidade com limites. A criança pode ajudar, cuidar e se importar, mas precisa compreender que não é responsável por resolver tudo. Incentivar expressão artística também pode ser muito positivo.",

    importanciaDestino:
      "Um nome 9 pode ampliar uma natureza já sensível ou trazer consciência e amplitude a outros Destinos. A possível data de nascimento ajudará a revelar essa relação. Uma consulta com Oscar Ahumada permite analisar se nome e Destino trabalham a favor um do outro.",
  },

  11: {
    numero: 11,

    titulo:
      "Um nome mestre de inspiração, intuição e sensibilidade",

    revelacao:
      "O número 11 é uma vibração mestre. Em um nome, pode indicar grande sensibilidade, intuição, percepção e capacidade de inspirar. Essa criança pode demonstrar uma forma diferente de perceber pessoas, ambientes e situações. Existe potencial para criatividade elevada, visão original e forte sensibilidade emocional.",

    potenciais:
      "Favorece intuição, inspiração, criatividade, percepção, espiritualidade, comunicação inspiradora e capacidade de enxergar possibilidades que outras pessoas não percebem. Pode existir talento para arte, conhecimento, orientação ou atividades que dependam de visão diferenciada.",

    desafios:
      "Por ser uma vibração intensa, pode aumentar ansiedade, sensibilidade exagerada, expectativas elevadas, dificuldade de lidar com ambientes muito pesados ou tendência a idealizar. Também pode existir grande cobrança interna.",

    orientacaoPais:
      "Essa criança precisa ser incentivada sem pressão excessiva. É importante respeitar sua sensibilidade, ensinar formas de lidar com ansiedade e ajudar a transformar inspiração em atitudes concretas. O número 11 precisa de chão para expressar todo o seu potencial.",

    importanciaDestino:
      "Em números mestres, conhecer o Destino é ainda mais importante. Um nome 11 pode criar uma combinação extraordinária quando encontra um Destino compatível, mas também pode intensificar sensibilidade e tensão emocional. A possível data de nascimento deve ser analisada com muito cuidado. Uma consulta com Oscar Ahumada é especialmente indicada antes da escolha definitiva.",
  },

  22: {
    numero: 22,

    titulo:
      "Um nome mestre de construção, visão e grandes realizações",

    revelacao:
      "O número 22 é uma vibração mestre associada à capacidade de transformar grandes ideias em algo concreto. Em um nome, pode estimular visão ampla, capacidade de organização, responsabilidade e potencial para construir projetos importantes. É uma energia que combina idealismo com realização e pode trazer uma sensação de missão ou necessidade de fazer algo significativo.",

    potenciais:
      "Favorece planejamento, liderança, visão de longo prazo, capacidade de construção, responsabilidade, organização e realização de grandes projetos. Essa criança pode desenvolver habilidade para enxergar possibilidades amplas e, ao mesmo tempo, criar estruturas para realizá-las.",

    desafios:
      "Quando essa vibração fica pesada, pode gerar cobrança excessiva, perfeccionismo, medo de falhar, necessidade de controle ou sensação de carregar responsabilidades grandes demais. Existe o risco de transformar potencial em pressão.",

    orientacaoPais:
      "Um nome 22 precisa ser acompanhado por uma educação que respeite o tempo da criança. Não transforme potencial em obrigação. Estimule responsabilidade, mas também brincadeira, leveza e liberdade para errar. Grandes capacidades se desenvolvem melhor sem cobrança precoce.",

    importanciaDestino:
      "Por se tratar de um Número Mestre, é fundamental conhecer o possível Destino antes de definir esse nome. A combinação entre Nome 22 e Destino pode revelar grande força de realização ou indicar a necessidade de mais equilíbrio. Uma consulta personalizada com Oscar Ahumada permite analisar essa combinação com profundidade antes da decisão final.",
  },
};

export function obterDiagnosticoNomeBebe(
  numero: NumeroNomeBebe
): DiagnosticoNomeBebe {
  const diagnostico =
    diagnosticosNomeBebe[numero];

  if (!diagnostico) {
    throw new Error(
      `Diagnóstico do Nome do Bebê não encontrado para o número ${numero}.`
    );
  }

  return diagnostico;
}