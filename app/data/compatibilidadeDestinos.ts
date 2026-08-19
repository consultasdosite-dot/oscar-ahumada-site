/*
 * COMPATIBILIDADE DOS DESTINOS
 * Oscar Ahumada
 *
 * Regras:
 * - Soma de todos os dígitos da data de nascimento.
 * - Redução para 1 a 9.
 * - O número 11 é preservado.
 * - A compatibilidade é lida pela combinação dos
 *   dois Destinos, e NÃO pela soma entre eles.
 */

export type NumeroDestinoCompatibilidade =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 11;

export type DiagnosticoCompatibilidade = {
  destino1: NumeroDestinoCompatibilidade;
  destino2: NumeroDestinoCompatibilidade;

  titulo: string;
  diagnostico: string;
  potencial: string;
  atencao: string;
  orientacao: string;
};

function reduzirDestino(
  numero: number
): NumeroDestinoCompatibilidade {
  let atual = Math.abs(numero);

  while (atual > 9 && atual !== 11) {
    atual = atual
      .toString()
      .split("")
      .reduce(
        (total, digito) =>
          total + Number(digito),
        0
      );
  }

  if (
    ![1, 2, 3, 4, 5, 6, 7, 8, 9, 11].includes(
      atual
    )
  ) {
    throw new Error(
      `Destino inválido: ${atual}`
    );
  }

  return atual as NumeroDestinoCompatibilidade;
}

export function calcularDestinoCompatibilidade(
  dataNascimento: string
): NumeroDestinoCompatibilidade {
  if (!dataNascimento) {
    throw new Error(
      "Informe a data de nascimento."
    );
  }

  const numeros =
    dataNascimento.replace(/\D/g, "");

  if (numeros.length !== 8) {
    throw new Error(
      "Data de nascimento inválida."
    );
  }

  const soma = numeros
    .split("")
    .reduce(
      (total, digito) =>
        total + Number(digito),
      0
    );

  return reduzirDestino(soma);
}

/*
 * Para não precisarmos cadastrar 1x3 e 3x1
 * separadamente, sempre normalizamos a chave.
 */
function criarChave(
  numero1: NumeroDestinoCompatibilidade,
  numero2: NumeroDestinoCompatibilidade
) {
  const ordem = [numero1, numero2].sort(
    (a, b) => a - b
  );

  return `${ordem[0]}-${ordem[1]}`;
}

const compatibilidades: Record<
  string,
  Omit<
    DiagnosticoCompatibilidade,
    "destino1" | "destino2"
  >
> = {
  "1-1": {
    titulo:
      "Duas personalidades fortes aprendendo a caminhar juntas",

    diagnostico:
      "Vocês possuem muita independência, iniciativa e necessidade de conduzir a própria vida. Essa semelhança pode criar uma relação intensa, mas também disputas quando ambos acreditam que sua maneira de fazer as coisas é a melhor.",

    potencial:
      "Existe força, criatividade, coragem e capacidade para realizar projetos importantes juntos.",

    atencao:
      "O maior risco está na competição, na imposição e na dificuldade de ceder.",

    orientacao:
      "Vocês funcionam melhor quando deixam de competir e reconhecem que estão olhando para alguém que possui uma força muito parecida com a sua.",
  },

  "1-2": {
    titulo:
      "Uma relação em que força e sensibilidade podem se completar",

    diagnostico:
      "A pessoa 1 tende a possuir mais iniciativa e energia de comando, enquanto a pessoa 2 traz sensibilidade, cuidado e capacidade de cooperação. Essa diferença pode criar uma combinação muito interessante.",

    potencial:
      "O 1 pode oferecer direção e segurança, enquanto o 2 acrescenta carinho, atenção e diplomacia.",

    atencao:
      "O cuidado está em o 1 assumir todas as decisões e o 2 acabar se tornando dependente ou abrindo mão da própria iniciativa.",

    orientacao:
      "Para a relação crescer, o 1 precisa permitir participação e o 2 precisa ocupar seu espaço.",
  },

  "1-3": {
    titulo:
      "Energia, criatividade e muita vontade de viver",

    diagnostico:
      "Vocês formam uma combinação ativa e criativa. O 1 tende a buscar direção e objetividade, enquanto o 3 traz alegria, comunicação e espontaneidade.",

    potencial:
      "Favorece aventuras, criatividade, movimento, vida social e capacidade de superar momentos difíceis com entusiasmo.",

    atencao:
      "O 1 pode achar o 3 disperso e querer controlar sua energia. O 3, por sua vez, pode sentir o 1 rígido ou sério demais.",

    orientacao:
      "O 1 pode ajudar a dar direção aos projetos, e o 3 pode lembrar ao 1 que a vida também precisa de leveza.",
  },

  "1-4": {
    titulo:
      "O impulso encontra a cautela",

    diagnostico:
      "O número 1 gosta de começar, inovar e avançar. O número 4 prefere analisar, organizar e construir com segurança. Vocês possuem ritmos bem diferentes.",

    potencial:
      "Quando trabalham juntos, o 1 oferece coragem e o 4 estrutura, planejamento e estabilidade.",

    atencao:
      "O 1 pode considerar o 4 lento ou resistente. O 4 pode achar o 1 precipitado ou arriscado demais.",

    orientacao:
      "Em vez de tentar mudar o outro, usem as diferenças: um ajuda a acelerar e o outro evita decisões impensadas.",
  },

  "1-5": {
    titulo:
      "Uma relação intensa, dinâmica e cheia de novidades",

    diagnostico:
      "Vocês compartilham gosto por movimento, novidade, aventura e liberdade. Existe muita energia para viver experiências diferentes juntos.",

    potencial:
      "Magnetismo, dinamismo, criatividade, viagens, sensualidade e capacidade de renovar continuamente a relação.",

    atencao:
      "Os dois valorizam liberdade e podem se inquietar com rotina ou excesso de compromisso.",

    orientacao:
      "A relação precisa continuar interessante, mas liberdade funciona melhor quando existe confiança e responsabilidade.",
  },

  "1-6": {
    titulo:
      "Uma combinação muito favorável ao amor",

    diagnostico:
      "O 1 tende a cuidar, conduzir e proteger. O 6 valoriza profundamente o relacionamento, o compromisso e a vida a dois. Existe forte potencial afetivo nesta combinação.",

    potencial:
      "Amor, compromisso, proteção, cuidado, construção familiar e desejo de permanência.",

    atencao:
      "O 1 pode querer impor sua vontade e o 6 pode cobrar, exigir ou controlar demais.",

    orientacao:
      "Existe muito potencial de amor aqui. Apenas cuidem para que proteção e dedicação não se transformem em controle.",
  },

  "1-7": {
    titulo:
      "Duas pessoas diferentes que podem ampliar o mundo uma da outra",

    diagnostico:
      "O 1 gosta de ação, decisão e movimento. O 7 tende a ser mais introspectivo, seletivo e reflexivo. Justamente por serem diferentes, existe possibilidade de grande aprendizado.",

    potencial:
      "O 1 pode estimular o 7 a experimentar mais a vida, enquanto o 7 ajuda o 1 a refletir antes de agir.",

    atencao:
      "O excesso de atividade do 1 pode cansar o 7, enquanto o silêncio do 7 pode parecer distanciamento para o 1.",

    orientacao:
      "Respeitem os ritmos diferentes. Nem toda pausa é falta de amor e nem todo movimento é falta de profundidade.",
  },

  "1-8": {
    titulo:
      "Duas forças poderosas precisam aprender a cooperar",

    diagnostico:
      "1 e 8 possuem personalidade forte, capacidade de decisão e desejo de realização. Essa combinação pode construir muito, desde que não transforme a relação em uma disputa permanente.",

    potencial:
      "Determinação, coragem, liderança, ambição e grande capacidade de realização conjunta.",

    atencao:
      "Competição, autoritarismo e necessidade de decidir quem está certo podem desgastar a relação.",

    orientacao:
      "Quando juntam forças em vez de disputar poder, vocês podem se tornar uma dupla extremamente realizadora.",
  },

  "1-9": {
    titulo:
      "Uma união entre iniciativa e grande sensibilidade",

    diagnostico:
      "O 1 tende a olhar para seus próprios projetos e realizações. O 9 possui visão mais ampla e frequentemente se preocupa com outras pessoas e causas.",

    potencial:
      "Existe amor, proteção, grandes ideias e capacidade de ampliar a visão um do outro.",

    atencao:
      "O 1 pode querer comandar, enquanto o 9 nem sempre aceita seguir. O 9 também pode dedicar muita energia a pessoas externas à relação.",

    orientacao:
      "A comunicação será essencial. Quando compreendem suas diferenças, existe possibilidade de uma relação duradoura.",
  },

  "1-11": {
    titulo:
      "Magnetismo, inspiração e grandes possibilidades",

    diagnostico:
      "Pode existir forte magnetismo entre vocês. O 1 se destaca pela capacidade de agir e realizar, enquanto o 11 traz inspiração, percepção e visão de possibilidades maiores.",

    potencial:
      "Criatividade, reconhecimento, grandes projetos e capacidade de transformar inspiração em realização.",

    atencao:
      "Egocentrismo, competição e necessidade de reconhecimento podem gerar conflitos.",

    orientacao:
      "Quando deixam o orgulho de lado e cooperam, podem ser excelentes parceiros no amor e também em projetos.",
  },

  "2-2": {
    titulo:
      "Muito afeto, cumplicidade e necessidade de iniciativa",

    diagnostico:
      "Vocês possuem sensibilidade semelhante e provavelmente valorizam amizade, carinho, confidências e companhia. Existe muita capacidade de cuidar um do outro.",

    potencial:
      "Afeto, companheirismo, compreensão, cuidado e forte identificação emocional.",

    atencao:
      "A relação pode ficar passiva, previsível ou dependente se nenhum dos dois assumir novas iniciativas.",

    orientacao:
      "Preservem a cumplicidade, mas acrescentem novidade e respeitem também os desejos individuais.",
  },

  "2-3": {
    titulo:
      "Sensibilidade encontra alegria e expansão",

    diagnostico:
      "O 2 tende a valorizar mais intimidade e companhia a dois. O 3 gosta de movimento, grupos, comunicação e vida social.",

    potencial:
      "O 3 pode trazer alegria e expansão para o mundo do 2, enquanto o 2 oferece sensibilidade e estabilidade emocional.",

    atencao:
      "O 2 pode querer atenção exclusiva, enquanto o 3 pode dispersar sua energia em muitas pessoas e atividades.",

    orientacao:
      "O segredo é encontrar um equilíbrio entre a vida do casal e a vida social.",
  },

  "2-4": {
    titulo:
      "Uma combinação de segurança e harmonia",

    diagnostico:
      "O 2 busca parceria e proteção, enquanto o 4 oferece estabilidade, planejamento e uma maneira prática de construir o futuro.",

    potencial:
      "Segurança, planejamento, compromisso, confiança e construção de uma vida estável.",

    atencao:
      "A relação pode cair em rotina e excesso de previsibilidade.",

    orientacao:
      "Façam planos, mas deixem espaço para viagens, surpresas e experiências inesperadas.",
  },

  "2-5": {
    titulo:
      "Ritmos diferentes que exigem adaptação",

    diagnostico:
      "O 2 tende a ser mais reservado, sensível e cuidadoso. O 5 é inquieto, dinâmico e precisa sentir liberdade.",

    potencial:
      "O 5 pode estimular o 2 a viver novas experiências, enquanto o 2 oferece equilíbrio emocional ao 5.",

    atencao:
      "Tentar controlar o 5 ou exigir que o 2 acompanhe toda sua agitação pode provocar conflitos.",

    orientacao:
      "Nem o 2 precisa correr o tempo todo, nem o 5 precisa parar completamente. Encontrem um ritmo comum.",
  },

  "2-6": {
    titulo:
      "Uma relação de muita dedicação",

    diagnostico:
      "Vocês tendem a valorizar o cuidado, o amor e a construção do relacionamento. Ambos podem se preocupar muito em não magoar o outro.",

    potencial:
      "Dedicação, carinho, família, compromisso e vontade de construir um futuro juntos.",

    atencao:
      "Guardar incômodos para evitar conflitos pode produzir explosões quando finalmente resolvem conversar.",

    orientacao:
      "Não esperem acumular frustrações. Diálogo frequente é melhor do que paz aparente.",
  },

  "2-7": {
    titulo:
      "Uma relação tranquila que precisa respeitar espaços",

    diagnostico:
      "O 2 busca companhia e proximidade. O 7 precisa de momentos de silêncio, reflexão e privacidade.",

    potencial:
      "Pode existir harmonia, calma, sensibilidade e respeito profundo.",

    atencao:
      "O 2 pode interpretar a necessidade de isolamento do 7 como falta de interesse.",

    orientacao:
      "Compreender que o 7 precisa ficar sozinho em alguns momentos evita muitos conflitos.",
  },

  "2-8": {
    titulo:
      "Direção e cooperação podem se complementar",

    diagnostico:
      "O 8 possui forte capacidade de decidir e conduzir, enquanto o 2 sabe cooperar e acrescentar sensibilidade à relação.",

    potencial:
      "Proteção, organização, afetividade, parceria e capacidade de construir juntos.",

    atencao:
      "O 8 precisa evitar sufocar o 2 com sua autoridade.",

    orientacao:
      "A relação cresce quando o 8 lidera sem dominar e o 2 participa sem se anular.",
  },

  "2-9": {
    titulo:
      "Muito sentimento e uma forte sensação de união",

    diagnostico:
      "Vocês possuem grande sensibilidade e capacidade de dividir amor. O 2 tende a concentrar mais energia na relação, enquanto o 9 frequentemente olha também para questões externas e coletivas.",

    potencial:
      "Compreensão, carinho, emoção, solidariedade e sensação de encontrar alguém muito especial.",

    atencao:
      "Sentimentalismo excessivo pode dificultar decisões objetivas.",

    orientacao:
      "Amem intensamente, mas mantenham equilíbrio entre emoção e realidade.",
  },

  "2-11": {
    titulo:
      "Uma parceria de compreensão, apoio e inspiração",

    diagnostico:
      "O 11 possui idealismo e inspiração, enquanto o 2 sabe apoiar, cooperar e criar equilíbrio.",

    potencial:
      "Amor, compreensão, espiritualidade, apoio mútuo e projetos realizados em parceria.",

    atencao:
      "O 2 não deve viver apenas em função dos ideais do 11.",

    orientacao:
      "Quando ambos ocupam seu próprio espaço, essa combinação pode ser produtiva e afetivamente muito rica.",
  },

  "3-3": {
    titulo:
      "Alegria, diversão e muita energia social",

    diagnostico:
      "Vocês formam uma dupla animada, comunicativa e que gosta de aproveitar a vida. Existe facilidade para diversão, amizades e atividades sociais.",

    potencial:
      "Alegria, criatividade, comunicação, sociabilidade e capacidade de manter a relação leve.",

    atencao:
      "Liberdade excessiva, dispersão e falta de responsabilidade com o compromisso podem enfraquecer a relação.",

    orientacao:
      "Continuem se divertindo, mas lembrem que uma relação também precisa de compromisso e continuidade.",
  },

  "3-4": {
    titulo:
      "Espontaneidade encontra organização",

    diagnostico:
      "O 3 é mais acelerado, criativo e espontâneo. O 4 prefere método, organização e segurança.",

    potencial:
      "O 3 traz leveza e inovação, enquanto o 4 ajuda a transformar ideias em algo concreto.",

    atencao:
      "O 3 pode considerar o 4 sério demais; o 4 pode considerar o 3 disperso ou irresponsável.",

    orientacao:
      "Aprendam um com o outro: o 3 pode desenvolver mais disciplina e o 4 pode permitir mais espontaneidade.",
  },

  "3-5": {
    titulo:
      "Uma relação pronta para viver novas experiências",

    diagnostico:
      "Vocês possuem muita energia, impulsividade e desejo de movimento. Não costumam precisar de muito planejamento para decidir viver uma experiência nova.",

    potencial:
      "Aventura, diversão, criatividade, sensualidade, viagens e forte atração pela novidade.",

    atencao:
      "Responsabilidades e compromissos podem acabar ficando em segundo plano.",

    orientacao:
      "Aproveitem a espontaneidade, mas criem algumas bases para que a relação não dependa apenas da novidade.",
  },

  "3-6": {
    titulo:
      "Alegria e segurança emocional podem construir um longo romance",

    diagnostico:
      "A pessoa 3 encontra no 6 a segurança emocional que procura. Vocês podem formar um casal alegre e compartilhar interesses como cinema, arte e música. O 6 tende a ser mais caseiro, enquanto o 3 normalmente possui maior necessidade de vida social.",

    potencial:
      "Afeto, criatividade, alegria, interesses em comum e capacidade de construir um vínculo duradouro.",

    atencao:
      "O 6 precisa evitar controlar o 3, que necessita de liberdade. O 3, por sua vez, precisa oferecer atenção suficiente ao relacionamento.",

    orientacao:
      "Há muito potencial quando conseguem equilibrar a necessidade de segurança do 6 com a liberdade e sociabilidade do 3.",
  },

  "3-7": {
    titulo:
      "Uma atração entre mundos muito diferentes",

    diagnostico:
      "O 3 quer conversar, sair e conhecer pessoas. O 7 tende a preferir silêncio, introspecção e ambientes mais reservados.",

    potencial:
      "As diferenças podem despertar curiosidade e oferecer muito aprendizado.",

    atencao:
      "Depois que o efeito da novidade passa, os ritmos diferentes exigem compreensão e paciência.",

    orientacao:
      "Não tentem transformar um ao outro. Construam atividades que respeitem tanto a sociabilidade quanto a necessidade de recolhimento.",
  },

  "3-8": {
    titulo:
      "Vitalidade, admiração e capacidade de realização",

    diagnostico:
      "O 3 traz criatividade, afetividade e espontaneidade. O 8 oferece direção, decisão e habilidade para administrar situações.",

    potencial:
      "Admiração mútua, dinamismo, criatividade, realização e muita energia.",

    atencao:
      "O 8 precisa controlar ciúme e a vontade de dirigir todos os passos do 3.",

    orientacao:
      "Quando existe liberdade e confiança, essa combinação pode unir criatividade e grande capacidade de realização.",
  },

  "3-9": {
    titulo:
      "Muito amor, emoção e grandes sonhos",

    diagnostico:
      "Vocês se compreendem emocionalmente e possuem muita capacidade de sonhar e criar juntos.",

    potencial:
      "Amor, criatividade, emoção, inspiração e grande sensibilidade.",

    atencao:
      "Podem criar planos distantes da realidade e transformar conflitos em dramas maiores do que precisam ser.",

    orientacao:
      "Sonhem juntos, mas tragam os projetos e as conversas importantes para o terreno da realidade.",
  },

  "3-11": {
    titulo:
      "O entusiasmo encontra a inspiração",

    diagnostico:
      "O 11 pode se sentir atraído pelo entusiasmo e otimismo do 3. O 3, por sua vez, pode aprender com o 11 a concentrar melhor suas energias.",

    potencial:
      "Criatividade, inspiração, aprendizado, grandes projetos e crescimento mútuo.",

    atencao:
      "A agitação do 3 pode incomodar o 11, enquanto o perfeccionismo do 11 pode limitar a espontaneidade do 3.",

    orientacao:
      "Existe muito aprendizado nessa combinação quando cada um valoriza aquilo que o outro possui de diferente.",
  },

  "4-4": {
    titulo:
      "Lealdade, segurança e muita previsibilidade",

    diagnostico:
      "Vocês são parecidos na busca por controle, organização, compromisso e estabilidade.",

    potencial:
      "Confiança, fidelidade, planejamento, disciplina e construção de longo prazo.",

    atencao:
      "A rotina pode dominar a relação e reduzir espontaneidade e emoção.",

    orientacao:
      "Mantenham a segurança, mas criem novidades para que o relacionamento continue vivo.",
  },

  "4-5": {
    titulo:
      "Os opostos podem ensinar muito um ao outro",

    diagnostico:
      "O 4 prefere organização e previsibilidade. O 5 precisa de liberdade, movimento e novidade.",

    potencial:
      "O 5 pode estimular o 4 a experimentar mais, enquanto o 4 ajuda o 5 a construir maior estabilidade.",

    atencao:
      "O 4 não deve tentar controlar o 5, que reage mal a restrições.",

    orientacao:
      "A relação pode funcionar quando segurança e liberdade deixam de ser inimigas.",
  },

  "4-6": {
    titulo:
      "Uma dupla estável com desejo de construir família",

    diagnostico:
      "O 4 oferece organização e estrutura. O 6 acrescenta afeto, beleza, dedicação e forte desejo de vida familiar.",

    potencial:
      "Família, estabilidade, fidelidade, patrimônio, carinho e construção de longo prazo.",

    atencao:
      "Excesso de rotina e padrões muito rígidos podem reduzir espontaneidade.",

    orientacao:
      "Vocês possuem excelente capacidade de construir juntos. Não esqueçam de continuar cultivando romance e novidade.",
  },

  "4-7": {
    titulo:
      "O realizador encontra o pensador",

    diagnostico:
      "O 4 está mais ligado ao mundo prático e concreto. O 7 procura compreender aspectos mais profundos e subjetivos da vida.",

    potencial:
      "Seriedade, conhecimento, estabilidade, profundidade e preferência por ambientes tranquilos.",

    atencao:
      "O excesso de exigência e perfeccionismo pode gerar distância.",

    orientacao:
      "Um pode ajudar o outro a unir realidade e reflexão, ação e conhecimento.",
  },

  "4-8": {
    titulo:
      "Uma parceria de construção e realização",

    diagnostico:
      "O 8 possui ousadia e visão de grandes projetos. O 4 sabe organizar detalhes e criar estruturas para que as ideias possam permanecer.",

    potencial:
      "Realização, patrimônio, planejamento, grandes projetos e segurança.",

    atencao:
      "O excesso de trabalho e preocupação material pode ocupar espaço demais na relação.",

    orientacao:
      "Vocês se completam muito bem quando transformam ambição em projetos comuns.",
  },

  "4-9": {
    titulo:
      "Realidade e idealismo podem se complementar",

    diagnostico:
      "O 4 oferece estabilidade e praticidade. O 9 possui grandes ideias e uma visão mais ampla da vida.",

    potencial:
      "O 4 pode transformar sonhos em ações concretas, e o 9 amplia horizontes e possibilidades.",

    atencao:
      "O 9 pode dedicar tanta energia ao mundo externo que o 4 se sinta deixado de lado.",

    orientacao:
      "Conversem sobre prioridades. Grandes sonhos também precisam de espaço para a vida a dois.",
  },

  "4-11": {
    titulo:
      "Praticidade e idealismo precisam aprender a cooperar",

    diagnostico:
      "O 4 possui orientação prática, trabalho e estrutura. O 11 traz inspiração, idealismo e percepção mais subjetiva.",

    potencial:
      "Quando unidos, podem transformar inspiração em algo real e duradouro.",

    atencao:
      "O 4 pode considerar o 11 pouco realista, enquanto o 11 pode se sentir limitado pela praticidade do 4.",

    orientacao:
      "O caminho está em aprender um com o outro: o 4 amplia sua visão e o 11 encontra meios concretos de realizar seus ideais.",
  },

  "5-5": {
    titulo:
      "Uma combinação quente, livre e imprevisível",

    diagnostico:
      "Vocês compartilham curiosidade, sensualidade, desejo de liberdade e necessidade de fugir da rotina.",

    potencial:
      "Paixão, aventura, criatividade, viagens, novidade e muita energia.",

    atencao:
      "A busca constante por liberdade pode fazer esquecer que relacionamento também exige responsabilidade.",

    orientacao:
      "Criem experiências novas sem abandonar o compromisso que sustenta a relação.",
  },

  "5-6": {
    titulo:
      "Dinamismo e delicadeza precisam encontrar um ponto comum",

    diagnostico:
      "O 5 é dinâmico, inquieto e gosta de estar em movimento. O 6 tende a ser mais caseiro e ligado ao cuidado e à estabilidade afetiva.",

    potencial:
      "O 5 traz movimento e entusiasmo; o 6 oferece carinho, segurança e acolhimento.",

    atencao:
      "As diferenças de ritmo podem gerar cobranças ou sensação de limitação.",

    orientacao:
      "A adaptação é fundamental: um não precisa viver preso à casa e o outro não precisa viver permanentemente em movimento.",
  },

  "5-7": {
    titulo:
      "Movimento e introspecção precisam de compreensão",

    diagnostico:
      "O 5 busca experiências, novidade e estímulo. O 7 valoriza silêncio, reflexão e momentos sozinho.",

    potencial:
      "Um pode ampliar profundamente a maneira como o outro vive e percebe o mundo.",

    atencao:
      "A agitação do 5 pode cansar o 7, e a necessidade de recolhimento do 7 pode frustrar o 5.",

    orientacao:
      "Respeitem as diferenças e criem momentos em que aventura e tranquilidade possam coexistir.",
  },

  "5-8": {
    titulo:
      "Uma parceria rápida, intensa e realizadora",

    diagnostico:
      "Vocês possuem agilidade, ideias e desejo de avançar. O 8 tende a organizar e dar direção à energia impulsiva do 5.",

    potencial:
      "Negócios, viagens, projetos, criatividade, dinamismo e grande capacidade de realização.",

    atencao:
      "O 5 precisa controlar impulsividade, principalmente na comunicação.",

    orientacao:
      "Pensem antes de reagir e usem a rapidez de vocês para construir, não para criar conflitos.",
  },

  "5-9": {
    titulo:
      "Uma relação aberta ao mundo e às experiências",

    diagnostico:
      "Vocês tendem a gostar de viagens, pessoas, movimento e experiências que ampliem horizontes.",

    potencial:
      "Liberdade, conhecimento, viagens, tolerância e muitos projetos compartilhados.",

    atencao:
      "A relação pode ficar tão voltada para o mundo externo que falte atenção ao vínculo entre vocês.",

    orientacao:
      "Aproveitem a liberdade, mas reservem também espaço exclusivo para a relação.",
  },

  "5-11": {
    titulo:
      "Liberdade e inspiração podem gerar grandes experiências",

    diagnostico:
      "O 5 procura aventura e liberdade. O 11 tende a buscar realizações inspiradoras e propósitos maiores.",

    potencial:
      "Criatividade, inspiração, sensibilidade e possibilidade de realizar projetos diferentes.",

    atencao:
      "Ambos podem apresentar instabilidade emocional, inquietação ou ansiedade.",

    orientacao:
      "Procurem atividades prazerosas em comum e usem a criatividade para aproximar, não para dispersar.",
  },

  "6-6": {
    titulo:
      "Muito amor exige cuidado com cobranças",

    diagnostico:
      "O amor e o desejo de cuidar são muito fortes nesta combinação. Vocês tendem a valorizar compromisso, família e presença.",

    potencial:
      "Carinho, responsabilidade, família, compromisso e grande dedicação.",

    atencao:
      "Justamente por serem parecidos, podem se tornar críticos, possessivos ou controladores.",

    orientacao:
      "Criem projetos e novidades que renovem o relacionamento e reduzam a tendência de cobrar perfeição.",
  },

  "6-7": {
    titulo:
      "A comunicação é o ponto decisivo desta relação",

    diagnostico:
      "O 6 se preocupa muito com o relacionamento e com a vida a dois. O 7 tende a viver mais voltado para o próprio mundo interior.",

    potencial:
      "Existe possibilidade de profundo aprendizado e complementação.",

    atencao:
      "Sem diálogo, cada um pode acabar vivendo em um mundo diferente dentro da mesma relação.",

    orientacao:
      "Conversem antes que o silêncio se transforme em distância.",
  },

  "6-8": {
    titulo:
      "Uma combinação altamente compatível",

    diagnostico:
      "O 6 oferece amor, apoio e dedicação. O 8 possui força, ambição e capacidade de liderança. Existe uma complementaridade natural entre vocês.",

    potencial:
      "Família, prosperidade, segurança, apoio, realização e construção de patrimônio.",

    atencao:
      "O 8 precisa evitar que liderança se transforme em domínio, e o 6 não deve assumir sozinho todo o suporte emocional.",

    orientacao:
      "Quando cada um valoriza o papel do outro, essa combinação possui excelente capacidade de realização conjunta.",
  },

  "6-9": {
    titulo:
      "Muito amor, sensibilidade e desejo de paz",

    diagnostico:
      "Vocês possuem grande capacidade de dar amor e tendem a buscar conciliação. O 9 encontra no 6 segurança, enquanto o 6 valoriza a sensibilidade e amizade do 9.",

    potencial:
      "Companheirismo, carinho, compreensão, paz e grande sensibilidade.",

    atencao:
      "Podem absorver problemas demais ou evitar conflitos importantes.",

    orientacao:
      "Conversem abertamente e preservem a relação como um lugar de apoio, não de acúmulo de preocupações.",
  },

  "6-11": {
    titulo:
      "Uma parceria de admiração, harmonia e propósito",

    diagnostico:
      "O 6 valoriza família, justiça e harmonia. O 11 traz espiritualidade, inspiração e desejo de contribuir com algo maior.",

    potencial:
      "Admiração, parceria, espiritualidade, família e projetos significativos.",

    atencao:
      "O desejo de perfeição pode criar cobranças excessivas.",

    orientacao:
      "Unam o senso de equilíbrio do 6 à inspiração do 11. Existe potencial para construir algo muito bonito juntos.",
  },

  "7-7": {
    titulo:
      "Uma conexão profunda entre duas pessoas seletivas",

    diagnostico:
      "Vocês valorizam conhecimento, inteligência, reflexão e possuem grande necessidade de espaço individual.",

    potencial:
      "Profundidade, compreensão intelectual, estudo, espiritualidade e afinidade mental.",

    atencao:
      "Existe o risco de cada um se isolar e a relação perder comunicação.",

    orientacao:
      "Não deixem que dois mundos interiores interessantes acabem se tornando dois mundos separados.",
  },

  "7-8": {
    titulo:
      "Duas energias antagônicas que podem se completar",

    diagnostico:
      "O 7 é mais introspectivo e reflexivo. O 8 possui energia prática, ambição e desejo de realização material.",

    potencial:
      "O 8 estimula o 7 à ação e o 7 ensina o 8 a ponderar e observar com mais profundidade.",

    atencao:
      "No início, as diferenças podem provocar choques e incompreensão.",

    orientacao:
      "Quando aceitam que estão olhando para mundos diferentes, podem criar uma combinação bastante equilibrada.",
  },

  "7-9": {
    titulo:
      "Uma combinação de grande compatibilidade",

    diagnostico:
      "Existe forte potencial emocional e intelectual nesta união. O 9 tende a oferecer muito amor, enquanto o 7 acrescenta profundidade e intuição.",

    potencial:
      "Amor, conhecimento, viagens, sensibilidade, pesquisa e crescimento interior.",

    atencao:
      "O 7 pode acabar recebendo mais afeto do que demonstra.",

    orientacao:
      "Expressem sentimentos e usem viagens e experiências culturais para fortalecer ainda mais a conexão.",
  },

  "7-11": {
    titulo:
      "Conhecimento, espiritualidade e profundidade",

    diagnostico:
      "Vocês possuem forte interesse por conhecimento e podem compartilhar uma visão mais profunda sobre a vida.",

    potencial:
      "Aprendizado, espiritualidade, desenvolvimento pessoal e grande conexão intelectual.",

    atencao:
      "Existe risco de isolamento e de viver apenas no mundo das ideias.",

    orientacao:
      "Além de pensar e sonhar, construam algo concreto juntos.",
  },

  "8-8": {
    titulo:
      "Uma relação poderosa precisa evitar competição",

    diagnostico:
      "Vocês possuem liderança, ambição e muita força. Isso pode criar uma união extremamente realizadora ou uma disputa constante por autoridade.",

    potencial:
      "Poder, prosperidade, coragem, realização e capacidade de enfrentar grandes desafios.",

    atencao:
      "Arrogância, competição e necessidade de controlar podem desgastar rapidamente o relacionamento.",

    orientacao:
      "Façam planos conjuntos. Vocês ganham muito mais quando o sucesso de um também representa o sucesso do outro.",
  },

  "8-9": {
    titulo:
      "Praticidade e idealismo podem formar uma bela parceria",

    diagnostico:
      "O 8 oferece base prática, coragem e capacidade material. O 9 traz idealismo, sensibilidade e visão ampla.",

    potencial:
      "Realização, proteção, generosidade, projetos e crescimento conjunto.",

    atencao:
      "As prioridades podem ser diferentes: o 8 tende a olhar mais para resultados e o 9 para propósitos amplos.",

    orientacao:
      "Quando unem realidade e idealismo, podem construir algo muito maior do que conseguiriam separadamente.",
  },

  "8-11": {
    titulo:
      "Intuição e organização podem gerar grandes conquistas",

    diagnostico:
      "O 11 possui visão e intuição. O 8 sabe estabelecer metas, administrar recursos e transformar projetos em resultados.",

    potencial:
      "Grandes realizações, sucesso material, inspiração, estratégia e capacidade de superar dificuldades.",

    atencao:
      "O excesso de ambição ou expectativa pode aumentar a pressão entre vocês.",

    orientacao:
      "A visão do 11 e a capacidade executiva do 8 podem formar uma dupla muito poderosa quando existe respeito.",
  },

  "9-9": {
    titulo:
      "Duas pessoas sensíveis precisam lembrar de cuidar da relação",

    diagnostico:
      "Vocês possuem grande generosidade e frequentemente se preocupam com os outros antes de pensar em si mesmos.",

    potencial:
      "Amizade, solidariedade, sensibilidade, amor e compreensão profunda.",

    atencao:
      "A dedicação ao mundo externo pode fazer com que a relação fique em segundo plano.",

    orientacao:
      "Há tempo para ajudar o mundo e também para cuidar de vocês. Reservem energia para a vida a dois.",
  },

  "9-11": {
    titulo:
      "Propósito, sensibilidade e grandes ideais",

    diagnostico:
      "Vocês podem compartilhar preocupação com outras pessoas, causas e projetos que tragam algum impacto positivo.",

    potencial:
      "Humanitarismo, inspiração, sensibilidade, grandes projetos e crescimento espiritual.",

    atencao:
      "Aspectos emocionais, ansiedade e excesso de idealização podem prejudicar a relação.",

    orientacao:
      "Trabalhem a comunicação e tragam os sonhos para o presente. Grandes ideais também precisam de uma relação saudável no cotidiano.",
  },

  "11-11": {
    titulo:
      "Uma relação intensa entre duas personalidades muito semelhantes",

    diagnostico:
      "Vocês possuem grande sensibilidade, inspiração e personalidade forte. Estar diante de alguém tão semelhante pode produzir enorme admiração, mas também fazer com que cada um enxergue no outro aspectos de si mesmo que ainda precisa compreender.",

    potencial:
      "Intuição, genialidade, inspiração, grandes projetos e forte afinidade.",

    atencao:
      "Competitividade, tensão, orgulho e dificuldade de reconhecer os próprios padrões podem provocar conflitos.",

    orientacao:
      "O autoconhecimento é a chave. Quando usam a semelhança para se compreender em vez de competir, essa relação pode ser muito bem-sucedida.",
  },
};

export function obterCompatibilidadeDestinos(
  destino1: NumeroDestinoCompatibilidade,
  destino2: NumeroDestinoCompatibilidade
): DiagnosticoCompatibilidade {
  const chave = criarChave(
    destino1,
    destino2
  );

  const leitura =
    compatibilidades[chave];

  if (!leitura) {
    throw new Error(
      `Compatibilidade não encontrada para Destino ${destino1} com Destino ${destino2}.`
    );
  }

  return {
    destino1,
    destino2,
    ...leitura,
  };
}

export function calcularCompatibilidadePelasDatas(
  data1: string,
  data2: string
): DiagnosticoCompatibilidade {
  const destino1 =
    calcularDestinoCompatibilidade(data1);

  const destino2 =
    calcularDestinoCompatibilidade(data2);

  return obterCompatibilidadeDestinos(
    destino1,
    destino2
  );
}