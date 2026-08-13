export type InterpretacaoNome = {
  combinacao: string;
  resultado: number;
  texto: string;
};

export const interpretacoesNome: Record<string, InterpretacaoNome> = {

  // COMBINAÇÕES INICIADAS EM 1
  "1+1": {
    combinacao: "1+1",
    resultado: 2,
    texto: "Dualidade entre independência e necessidade de companhia, dinamismo e passividade. Há sensibilidade e emotividade, embora nem sempre seja fácil demonstrá-las. O aprendizado está em harmonizar autonomia e relacionamento.",
  },
  "1+2": {
    combinacao: "1+2",
    resultado: 3,
    texto: "Forte emotividade e sensibilidade, compensadas por expressão, adaptação e criatividade. Pode alternar determinação e dependência emocional. Precisa equilibrar amor, estabilidade e independência.",
  },
  "1+3": {
    combinacao: "1+3",
    resultado: 4,
    texto: "Energia, iniciativa e vontade de decidir. Em grupo demonstra inteligência rápida e sociabilidade; na vida privada valoriza ordem e estabilidade. Deve observar mudanças de humor, autoridade e ciúme.",
  },
  "1+4": {
    combinacao: "1+4",
    resultado: 5,
    texto: "Liberdade é uma necessidade importante. Há individualidade, impulso e capacidade de organizar, administrar e liderar quando existe motivação. No amor, intensidade e expectativas podem gerar instabilidade.",
  },
  "1+5": {
    combinacao: "1+5",
    resultado: 6,
    texto: "Dinamismo e independência convivem com organização, método e sensibilidade artística. Busca paz e harmonia. No amor é afetivo e responsável, mas expectativas de perfeição podem complicar os vínculos.",
  },
  "1+6": {
    combinacao: "1+6",
    resultado: 7,
    texto: "Prudência, reflexão e independência intelectual. Prefere analisar prós e contras e, às vezes, recolher-se. No campo afetivo existe sensibilidade, mas dificuldade para expressar sentimentos.",
  },
  "1+7": {
    combinacao: "1+7",
    resultado: 8,
    texto: "Forte energia, autoridade, independência e capacidade analítica. Pode esconder inquietação e insegurança. Nos relacionamentos, precisa equilibrar admiração, controle e respeito ao espaço do outro.",
  },
  "1+8": {
    combinacao: "1+8",
    resultado: 9,
    texto: "Força, confiança e magnetismo escondem grande sensibilidade. Emoções intensas podem gerar generosidade ou reações fortes. No amor há paixão, sensualidade e necessidade de equilíbrio emocional.",
  },
  "1+9": {
    combinacao: "1+9",
    resultado: 1,
    texto: "Personalidade marcante, idealismo e capacidade de servir a causas justas ou humanitárias. Gosta de reconhecimento. No amor procura alguém que possa amar e admirar, equilibrando autoridade e sensibilidade.",
  },

  // COMBINAÇÕES INICIADAS EM 2
  "2+1": {
    combinacao: "2+1",
    resultado: 3,
    texto: "Criatividade, adaptação e comunicação suavizam sua firmeza. Existe interesse por expressão e conhecimento. No amor pode haver tensão entre independência, necessidade de afeto, profissão e vida familiar.",
  },
  "2+2": {
    combinacao: "2+2",
    resultado: 4,
    texto: "Sensibilidade, emotividade e cautela são fortes. O medo de se ferir pode levar a pensar demais e perder oportunidades. Trabalho e família são importantes; segurança favorece estabilidade.",
  },
  "2+3": {
    combinacao: "2+3",
    resultado: 5,
    texto: "Comunicação, sociabilidade, rapidez e habilidade criativa. Possui vitalidade, decisão e senso prático. Apesar do dinamismo, existe profunda necessidade de amor, família e estabilidade.",
  },
  "2+4": {
    combinacao: "2+4",
    resultado: 6,
    texto: "Necessita tranquilidade e estabilidade e valoriza cotidiano e família. Possui trabalho, paciência, organização, método e ambição. No amor busca compromisso, continuidade e segurança.",
  },
  "2+5": {
    combinacao: "2+5",
    resultado: 7,
    texto: "Magnetismo e mistério escondem natureza séria, reflexiva e introspectiva. Há contraste entre curiosidade e necessidade de reflexão. No amor busca estabilidade, união e segurança.",
  },
  "2+6": {
    combinacao: "2+6",
    resultado: 8,
    texto: "Energia, ambição, organização e atenção aos detalhes convivem com diplomacia. Pode reagir intensamente a injustiças. Valoriza palavra e lealdade; no amor busca carinho, paz e estabilidade.",
  },
  "2+7": {
    combinacao: "2+7",
    resultado: 9,
    texto: "Grande sensibilidade e emotividade, com fases de timidez ou sonho. O ambiente influencia muito. Procura independência, mas pode dedicar-se demais aos outros. No amor deve evitar anular-se.",
  },
  "2+8": {
    combinacao: "2+8",
    resultado: 1,
    texto: "Personalidade forte, senso prático e ação, mas com dualidade entre dinamismo e uma parte reservada e adaptável. No amor precisa equilibrar necessidade de apoio e autonomia.",
  },
  "2+9": {
    combinacao: "2+9",
    resultado: 2,
    texto: "Praticidade, adaptação, compreensão e independência. Inteligência e memória favorecem expressão, comunicação e criatividade, inclusive em equipe. Vida afetiva e familiar são importantes, mas não exclusivas.",
  },

  // COMBINAÇÕES INICIADAS EM 3
  "3+1": {
    combinacao: "3+1",
    resultado: 4,
    texto: "Sensibilidade por trás de aparência firme. Responsabilidade, racionalidade, disciplina e organização convivem com inteligência social. No amor valoriza fidelidade e estabilidade, mas pode ser rígido.",
  },
  "3+2": {
    combinacao: "3+2",
    resultado: 5,
    texto: "Curiosidade, rapidez de assimilação e habilidade, com nervosismo. Trabalha bem em equipe, mas preserva independência e aventura. No amor pode agir impulsivamente e depois se arrepender.",
  },
  "3+3": {
    combinacao: "3+3",
    resultado: 6,
    texto: "Sociabilidade, alegria, otimismo, adaptação e persuasão. Pode dramatizar para evitar conflitos. Comunicação é um talento. No amor deseja viver intensamente, mas pode ter dificuldade para escolher.",
  },
  "3+4": {
    combinacao: "3+4",
    resultado: 7,
    texto: "Busca estabilidade e segurança, mas também liberdade. Idealismo, adaptação e comunicação estão presentes. No amor pode mostrar reserva e desconfiança e preferir independência a relações inadequadas.",
  },
  "3+5": {
    combinacao: "3+5",
    resultado: 8,
    texto: "Inteligência, energia, persistência e desejo de realização material. Criatividade e comunicação favorecem conquistas. Pode duvidar de si em alguns momentos. No amor valoriza confiança, respeito e autenticidade.",
  },
  "3+6": {
    combinacao: "3+6",
    resultado: 9,
    texto: "Sensibilidade, generosidade e grande emotividade. Interesse pelas pessoas e por causas sociais, humanitárias, místicas ou esotéricas. No amor deve evitar anular-se pelo parceiro ou família.",
  },
  "3+7": {
    combinacao: "3+7",
    resultado: 1,
    texto: "Independência, habilidade, criatividade e inteligência rápida. Sabe esperar o momento certo. Deve observar autoritarismo e egocentrismo. No amor há sensualidade, abertura e iniciativa.",
  },
  "3+8": {
    combinacao: "3+8",
    resultado: 2,
    texto: "Grande sensibilidade e ligação familiar. Rapidez, comunicação e alternância entre introversão e extroversão. Bom senso de cooperação e negócios. No amor tende à franqueza, intensidade e fidelidade.",
  },
  "3+9": {
    combinacao: "3+9",
    resultado: 3,
    texto: "Simpatia, entusiasmo, comunicação e cuidado com a aparência. Inteligência rápida e criatividade favorecem arte e expressão. Deve evitar superficialidade. No amor há sensualidade, sentimento e diversão.",
  },

  // COMBINAÇÕES INICIADAS EM 4
  "4+1": {
    combinacao: "4+1",
    resultado: 5,
    texto: "Valoriza profundamente liberdade e imagem pessoal. Iniciativa, autoridade, viagens e novos contatos. No amor pode demorar a se comprometer, mas quando decide tende a assumir responsabilidades.",
  },
  "4+2": {
    combinacao: "4+2",
    resultado: 6,
    texto: "Organização, método, responsabilidade e trabalho em equipe. Paciência e perseverança constroem resultados. Na vida afetiva busca amor, estabilidade e segurança.",
  },
  "4+3": {
    combinacao: "4+3",
    resultado: 7,
    texto: "Inteligência perspicaz, reflexão e busca de conhecimento. Pensa bastante antes de decidir. Comunicação e habilidade prática abrem caminhos. No amor é carinhoso, mas pode viver inquietação.",
  },
  "4+4": {
    combinacao: "4+4",
    resultado: 8,
    texto: "Franqueza, honestidade, coragem, reserva e forte senso de lealdade. Confiança precisa ser conquistada. Trabalho e realização material são importantes. No amor é exigente e fiel.",
  },
  "4+5": {
    combinacao: "4+5",
    resultado: 9,
    texto: "Sentimentos, imaginação e assimilação de novas ideias favorecem conquistas. Gosta de aventuras e natureza. No amor é emotivo e romântico, embora a timidez possa dificultar expressão.",
  },
  "4+6": {
    combinacao: "4+6",
    resultado: 1,
    texto: "Força, determinação, estabilidade, responsabilidade e reserva. Paciência e atenção aos detalhes, mas impaciência nas pequenas contrariedades. No amor deseja lar harmônico e pensa muito antes de comprometer-se.",
  },
  "4+7": {
    combinacao: "4+7",
    resultado: 2,
    texto: "Seriedade, estabilidade, sensibilidade e reserva. Grande capacidade de trabalho, justiça e análise. No amor pode conter emoções, mas quando assume um vínculo tende à fidelidade.",
  },
  "4+8": {
    combinacao: "4+8",
    resultado: 3,
    texto: "Magnetismo e carisma escondem necessidade de segurança. Comunicação e criatividade ajudam a destacar-se. A dualidade entre expressão e estabilidade também aparece no amor.",
  },
  "4+9": {
    combinacao: "4+9",
    resultado: 4,
    texto: "Tranquilidade, reserva, profundidade, honestidade e detalhismo. Afinidade com misticismo e natureza. No amor busca romantismo, tranquilidade, estabilidade e fidelidade.",
  },

  // COMBINAÇÕES INICIADAS EM 5
  "5+1": {
    combinacao: "5+1",
    resultado: 6,
    texto: "Organização, método, iniciativa e comando, com idealismo e desejo de liberdade. Sentimentos influenciam muito. No amor é exigente e pensa bastante antes do compromisso definitivo.",
  },
  "5+2": {
    combinacao: "5+2",
    resultado: 7,
    texto: "Dualidade entre conquista, curiosidade e sociabilidade e uma parte afetiva, reservada e necessitada de calma. No amor pode alternar entusiasmo e solidão.",
  },
  "5+3": {
    combinacao: "5+3",
    resultado: 8,
    texto: "Inteligência, sociabilidade, comunicação e coragem diante de riscos. A necessidade de destaque pode gerar impulsividade, mas o carisma ajuda. No amor valoriza proteção e confiança mútua.",
  },
  "5+4": {
    combinacao: "5+4",
    resultado: 9,
    texto: "Reserva, discrição, pragmatismo, trabalho, paciência e eficiência. Por trás do lado prático há idealismo e humanitarismo. No amor busca fidelidade e estabilidade, mas pode ter ciúme.",
  },
  "5+5": {
    combinacao: "5+5",
    resultado: 1,
    texto: "Curiosidade, adaptação, rapidez e desejo de viver intensamente. Magnetismo, energia e liderança, com pontos de atenção em impaciência, impulsividade e instabilidade. No amor há forte paixão.",
  },
  "5+6": {
    combinacao: "5+6",
    resultado: 2,
    texto: "Grande sensibilidade e influência do ambiente familiar. Idealismo e projetos convivem com organização prática. Há conflito entre liberdade sonhada e segurança. Amor e família são muito importantes.",
  },
  "5+7": {
    combinacao: "5+7",
    resultado: 3,
    texto: "Magnetismo, sensualidade, coragem e comunicação, com intelecto questionador. Gosta de viagens e evita rotina; dispersão pode custar oportunidades. No amor há encanto e indecisão.",
  },
  "5+8": {
    combinacao: "5+8",
    resultado: 4,
    texto: "Desejo de independência e grandes projetos, com ordem, constância e atenção aos detalhes. Gosta de mudanças dentro de alguma estrutura. No amor demora a decidir, mas assume responsabilidades.",
  },
  "5+9": {
    combinacao: "5+9",
    resultado: 5,
    texto: "Curiosidade, adaptação, rapidez, magnetismo e liderança. Precisa observar impaciência, impulsividade e instabilidade. No amor existe sedução, paixão e temperamento intenso.",
  },

  // COMBINAÇÕES INICIADAS EM 6
  "6+1": {
    combinacao: "6+1",
    resultado: 7,
    texto: "Estabilidade, confiança e valorização da vida privada. Reflete muito antes de decidir. No amor, a exigência de perfeição pode dificultar vínculos; aceitar imperfeições favorece a felicidade.",
  },
  "6+2": {
    combinacao: "6+2",
    resultado: 8,
    texto: "Energia, empreendimento, persistência, reserva e segurança. Quando motivado, age com eficiência, organização e cooperação. No amor é mais sensível do que aparenta.",
  },
  "6+3": {
    combinacao: "6+3",
    resultado: 9,
    texto: "Idealismo, sociabilidade, comunicação, organização e curiosidade por temas sociais, humanitários ou espirituais. No amor valoriza carinho, família e conforto, mas pode exigir demais.",
  },
  "6+4": {
    combinacao: "6+4",
    resultado: 1,
    texto: "Energia, estabilidade, mente viva, organização e persistência. Dificilmente desiste, embora possa perder paciência com pequenas contrariedades. No amor precisa admirar e respeitar profundamente.",
  },
  "6+5": {
    combinacao: "6+5",
    resultado: 2,
    texto: "Adaptação e capacidade de aproveitar circunstâncias. Sensibilidade e cooperação favorecem associações profissionais, humanitárias ou sociais. Emotividade torna os vínculos afetivos importantes.",
  },
  "6+6": {
    combinacao: "6+6",
    resultado: 3,
    texto: "Abertura, amizade, entusiasmo e expressão. Sensibilidade, inteligência e adaptação favorecem criatividade e comunicação. Deve equilibrar reconhecimento, perfeccionismo e tolerância. No amor é exigente e sensual.",
  },
  "6+7": {
    combinacao: "6+7",
    resultado: 4,
    texto: "Prudência, método, organização, independência e intuição. Pode esperar ser compreendido sem comunicar claramente suas necessidades. No amor deseja reciprocidade, mas perfeccionismo eleva expectativas.",
  },
  "6+8": {
    combinacao: "6+8",
    resultado: 5,
    texto: "Curiosidade, inteligência e adaptação, com tendência a mudar rapidamente de interesse. Valoriza liberdade e grandes realizações, mas pode ser autoritário. No amor busca segurança material e social.",
  },
  "6+9": {
    combinacao: "6+9",
    resultado: 6,
    texto: "Capacidade de amar, acolher e criar harmonia. Organização e responsabilidade convivem com emotividade e imaginação. Busca propósito e causas humanitárias ou espirituais. No amor pode idealizar demais.",
  },

  // COMBINAÇÕES INICIADAS EM 7
  "7+1": {
    combinacao: "7+1",
    resultado: 8,
    texto: "Determinação, dinamismo, empreendimento e liderança, com discrição e senso de justiça. Busca crescimento material e evolução interior. No amor pode dividir-se entre profissão e vida a dois.",
  },
  "7+2": {
    combinacao: "7+2",
    resultado: 9,
    texto: "Grande emotividade, sensibilidade e dedicação. Quando contrariado, pode fechar-se e canalizar energia para trabalho ou causas humanitárias. No amor é romântico e busca conexão profunda.",
  },
  "7+3": {
    combinacao: "7+3",
    resultado: 1,
    texto: "Dinamismo, independência e adaptação, alternando sociabilidade e solidão. No trabalho pode ser irregular conforme o ânimo. No amor busca afinidades intelectuais e espirituais e pode exigir demais.",
  },
  "7+4": {
    combinacao: "7+4",
    resultado: 2,
    texto: "Introversão, seriedade, reflexão e intuição. Sensibilidade leva a proteger-se de conflitos. Busca independência e liberdade material, emocional e espiritual. No amor é afetuoso, mas pouco expressivo.",
  },
  "7+5": {
    combinacao: "7+5",
    resultado: 3,
    texto: "Persuasão, criatividade, elegância e adaptação rápida. Inteligência analítica e cuidado com a imagem. Alterna entusiasmo e reflexão. No amor pode ser expansivo em um momento e misterioso em outro.",
  },
  "7+6": {
    combinacao: "7+6",
    resultado: 4,
    texto: "Introspecção e tendência a fechar-se quando realidade e sonhos não coincidem. Atenção aos detalhes, trabalho e investigação. No amor é reservado, exigente e deseja ser profundamente compreendido.",
  },
  "7+7": {
    combinacao: "7+7",
    resultado: 5,
    texto: "Inquietação, curiosidade, justiça, arte e necessidade de mudanças. Preserva independência e pode parecer distante. No amor pode viver instabilidade e dificuldade para saber o que deseja.",
  },
  "7+8": {
    combinacao: "7+8",
    resultado: 6,
    texto: "Presença agradável, magnetismo, organização, responsabilidade, imaginação e raciocínio rápido. Busca justiça e evolução. No amor deseja calma e segurança, mas pode ter dificuldade para comunicar sentimentos.",
  },
  "7+9": {
    combinacao: "7+9",
    resultado: 7,
    texto: "Reserva, sensibilidade e interesse por arte, filosofia e espiritualidade. Forte senso de justiça e liberdade. No amor tende a idealizar muito a pessoa que procura.",
  },

  // COMBINAÇÕES INICIADAS EM 8
  "8+1": {
    combinacao: "8+1",
    resultado: 9,
    texto: "Atividade, determinação, independência e liderança. Por trás da firmeza há sensibilidade e vulnerabilidade. Diante de dificuldades pode fechar-se. No amor é franco, dedicado e intenso, mas deve equilibrar autoridade.",
  },
  "8+2": {
    combinacao: "8+2",
    resultado: 1,
    texto: "Resistência, individualidade, independência, comando e ambição. Existe dualidade entre dinamismo e introspecção, materialidade e espiritualidade. No amor oscila entre paixão, proximidade e forte independência.",
  },
  "8+3": {
    combinacao: "8+3",
    resultado: 2,
    texto: "Sensibilidade e bom senso comercial, com coragem e iniciativa diante de desafios. Emotividade convive com prudência e inteligência rápida. Gosta de trocar ideias. No amor é sensível, sensual e afetuoso.",
  },
  "8+4": {
    combinacao: "8+4",
    resultado: 3,
    texto: "Adaptação, bom humor, compreensão rápida e persuasão, preservando a intimidade. Trabalho e paciência favorecem criatividade, artesanato, arte e literatura. No amor há paixão e tendência ao ciúme.",
  },
  "8+5": {
    combinacao: "8+5",
    resultado: 4,
    texto: "Personalidade forte e grande sensibilidade. Precisa de ação e mudanças, mas também reflexão e organização. Tensões internas podem se acumular. No amor deve trocar controle por diálogo e respeito.",
  },
  "8+6": {
    combinacao: "8+6",
    resultado: 5,
    texto: "Você é uma pessoa aberta, simpática, sociável e ativa. Possui muita curiosidade e extroversão e gosta de mudanças, liberdade e viagens. Sua rapidez, adaptação, organização e método favorecem diferentes atividades. O desafio é não abandonar projetos quando surge algo novo. No amor deseja estabilidade e segurança sem perder a liberdade.",
  },
  "8+7": {
    combinacao: "8+7",
    resultado: 6,
    texto: "Reserva, discrição e desejo de agradar, evitando confrontos. Família, sociedade e afetos são importantes. Precisa conciliar necessidade de amor e responsabilidades com independência e realização pessoal.",
  },
  "8+8": {
    combinacao: "8+8",
    resultado: 7,
    texto: "Natureza intensa, inquieta e dinâmica, mas também muito sensível. Autoridade e impulsividade convivem com reflexão e reserva. No amor pode alternar intensidade e fechamento; no fundo necessita amar e ser amado.",
  },
  "8+9": {
    combinacao: "8+9",
    resultado: 8,
    texto: "Energia, persistência, elegância, discrição e desejo de comandar e realizar materialmente. Praticidade, lealdade e franqueza. No amor existe paixão e exigência, mas também ternura.",
  },

  // COMBINAÇÕES INICIADAS EM 9
  "9+1": {
    combinacao: "9+1",
    resultado: 1,
    texto: "Presença marcante, disciplina, ambição, autoridade e vitalidade, com sociabilidade e generosidade. Idealismo e humanitarismo. No amor é exigente na escolha e valoriza família, moral e fidelidade.",
  },
  "9+2": {
    combinacao: "9+2",
    resultado: 2,
    texto: "Sonhos, emotividade, resistência e desejo de contribuir para um mundo melhor. Sem expressão, essa energia pode virar dependência ou isolamento. No amor é sensível e precisa de demonstrações de afeto.",
  },
  "9+3": {
    combinacao: "9+3",
    resultado: 3,
    texto: "Presença atraente, senso estético e comunicação. Por trás da imagem sociável há idealismo, espiritualidade, habilidade e criatividade. No amor tende à correção, com possível possessividade.",
  },
  "9+4": {
    combinacao: "9+4",
    resultado: 4,
    texto: "Tranquilidade, reserva, profundidade, honestidade e detalhismo. Afinidade com misticismo, natureza e autenticidade. No amor busca romantismo, tranquilidade, estabilidade e fidelidade.",
  },
  "9+5": {
    combinacao: "9+5",
    resultado: 5,
    texto: "Liberdade e independência são essenciais. Grandes aspirações, adaptação e gosto por experiências. Curiosidade e mudanças podem gerar instabilidade. Gosta de ajudar. No amor há intensidade e sensualidade.",
  },
  "9+6": {
    combinacao: "9+6",
    resultado: 6,
    texto: "Tranquilidade, firmeza, equilíbrio, organização e método. Vida interior intensa, reflexão e adaptação. Grandes desafios estimulam realizações. No amor há romantismo e sensualidade, devendo observar autoritarismo.",
  },
  "9+7": {
    combinacao: "9+7",
    resultado: 7,
    texto: "Reserva, sensibilidade, arte, filosofia e espiritualidade, com forte justiça e liberdade. Em momentos difíceis pode fechar-se. No amor idealiza demais e pode dificultar a escolha.",
  },
  "9+8": {
    combinacao: "9+8",
    resultado: 8,
    texto: "Energia, determinação e segurança, com tendência a assumir muitas responsabilidades. A realização profissional é importante. No amor pode ser exigente e ciumento; receptividade e flexibilidade trazem equilíbrio.",
  },
  "9+9": {
    combinacao: "9+9",
    resultado: 9,
    texto: "Grande emotividade, entrega, sonhos elevados e espiritualidade. Busca reconhecimento e capacidade de conduzir projetos para melhorar o mundo. No amor há dualidade entre romantismo, carinho, liberdade e controle.",
  },
};

export function obterInterpretacaoNome(
  vogais: number,
  consoantes: number,
  nome?: string
): InterpretacaoNome | null {
  const chave = `${vogais}+${consoantes}`;
  const interpretacao = interpretacoesNome[chave];

  if (!interpretacao) return null;
  if (!nome?.trim()) return interpretacao;

  const primeiroNome = nome.trim().split(/\s+/)[0];

  return {
    ...interpretacao,
    texto: `${primeiroNome}, ${interpretacao.texto.charAt(0).toLowerCase()}${interpretacao.texto.slice(1)}`,
  };
}