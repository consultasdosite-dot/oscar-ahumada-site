export type NumeroNomeProfissional =
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

export type DiagnosticoNomeProfissional = {
  numero: NumeroNomeProfissional;
  titulo: string;
  imagemTransmitida: string;
  atitudes: string;
  aptidoes: string;
  positivos: string;
  negativos: string;
  atividadesFavorecidas: string;
  orientacao: string;
};

export const diagnosticosNomeProfissional: Record<
  NumeroNomeProfissional,
  DiagnosticoNomeProfissional
> = {
  1: {
    numero: 1,

    titulo:
      "Um nome profissional de liderança, iniciativa e identidade forte",

    imagemTransmitida:
      "O número 1 transmite uma imagem profissional de independência, iniciativa, coragem e capacidade de liderança. É um nome que tende a fazer a pessoa parecer alguém capaz de tomar decisões, abrir caminhos e assumir responsabilidades. Pode favorecer uma presença marcante e uma percepção de autoridade, especialmente em atividades nas quais é importante demonstrar segurança, individualidade e poder de decisão.",

    atitudes:
      "Essa vibração tende a estimular atitudes mais diretas, objetivas e competitivas. A pessoa pode sentir maior necessidade de conduzir projetos, iniciar movimentos e imprimir sua própria maneira de trabalhar. Existe facilidade para assumir riscos e defender ideias, mas também uma tendência a querer resolver tudo rapidamente ou sem depender de outras pessoas.",

    aptidoes:
      "Favorece empreendedorismo, liderança, inovação, criação de projetos, tomada de decisão e funções em que é necessário assumir protagonismo. Também pode ser interessante para profissionais que trabalham com marca pessoal, consultoria, vendas, gestão e atividades autônomas.",

    positivos:
      "Entre os pontos positivos estão coragem, iniciativa, independência, criatividade, determinação e capacidade de começar. Essa vibração pode ajudar o profissional a se posicionar, criar autoridade e ser lembrado por suas ideias e decisões.",

    negativos:
      "Quando desequilibrada, pode transmitir autoritarismo, impaciência, egocentrismo ou dificuldade de trabalhar em equipe. O profissional pode parecer excessivamente competitivo ou pouco receptivo às opiniões dos outros.",

    atividadesFavorecidas:
      "Empreendedorismo, liderança, consultoria, direção, gestão, vendas, inovação, criação de marcas, profissões autônomas e posições que exigem comando e iniciativa.",

    orientacao:
      "Um Nome Profissional 1 funciona melhor quando liderança não se transforma em imposição. Antes de assumir definitivamente esse nome, é importante cruzar essa vibração com seu Destino e com o momento profissional que você está vivendo. Uma consulta com Oscar Ahumada pode mostrar se esse nome realmente fortalece a imagem que você deseja construir.",
  },

  2: {
    numero: 2,

    titulo:
      "Um nome profissional de diplomacia, sensibilidade e parceria",

    imagemTransmitida:
      "O número 2 transmite uma imagem de profissional sensível, cooperativo, acessível e capaz de construir boas relações. É uma vibração que favorece proximidade, confiança e habilidade para compreender necessidades de clientes, parceiros e equipes.",

    atitudes:
      "Estimula atitudes diplomáticas, pacientes e conciliadoras. A pessoa tende a observar antes de agir, ouvir opiniões e procurar soluções que preservem relações. Pode existir grande habilidade para trabalhar em dupla, equipes ou ambientes que exigem negociação.",

    aptidoes:
      "Favorece atendimento, relacionamento com clientes, recursos humanos, terapias, assistência, diplomacia, mediação, parcerias e atividades que dependem de percepção emocional e capacidade de escuta.",

    positivos:
      "Empatia, cooperação, paciência, delicadeza, capacidade de negociação e facilidade para criar confiança. Pode favorecer profissionais que precisam construir relações duradouras.",

    negativos:
      "Em excesso, pode transmitir insegurança, dependência, dificuldade para decidir ou excesso de preocupação com aprovação. O profissional pode evitar posicionamentos importantes para não gerar conflitos.",

    atividadesFavorecidas:
      "Atendimento, terapias, recursos humanos, mediação, relacionamento, consultoria, assistência, saúde, estética e atividades em parceria.",

    orientacao:
      "O Nome Profissional 2 precisa transmitir sensibilidade sem perder autoridade. O cruzamento com seu Destino pode mostrar se essa vibração fortalece sua carreira ou se você precisa de um nome com mais poder de posicionamento.",
  },

  3: {
    numero: 3,

    titulo:
      "Um nome profissional de comunicação, criatividade e visibilidade",

    imagemTransmitida:
      "O número 3 transmite uma imagem profissional comunicativa, criativa, agradável e expansiva. É uma vibração que tende a favorecer visibilidade, simpatia, divulgação e capacidade de criar conexão com diferentes públicos.",

    atitudes:
      "Estimula espontaneidade, comunicação, sociabilidade e criatividade. O profissional tende a se expressar com facilidade, apresentar ideias, criar conteúdos e encontrar maneiras diferentes de comunicar sua mensagem.",

    aptidoes:
      "Favorece marketing, comunicação, redes sociais, publicidade, vendas, ensino, arte, entretenimento, palestras, produção de conteúdo e profissões que dependem de exposição.",

    positivos:
      "Criatividade, alegria, comunicação, carisma, facilidade de divulgação e capacidade de despertar interesse. Pode ser excelente para construção de audiência e marca pessoal.",

    negativos:
      "Pode gerar dispersão, excesso de promessas, dificuldade de manter foco ou imagem pouco consistente. Em excesso, o profissional pode parecer mais preocupado em aparecer do que em aprofundar resultados.",

    atividadesFavorecidas:
      "Marketing, publicidade, comunicação, redes sociais, palestras, ensino, vendas, entretenimento, arte e produção de conteúdo.",

    orientacao:
      "Um Nome Profissional 3 pode ampliar muito sua exposição. O ponto é saber se você precisa justamente de visibilidade ou de mais estrutura e autoridade. Essa resposta aparece quando o nome é comparado com seu Destino e seus objetivos profissionais.",
  },

  4: {
    numero: 4,

    titulo:
      "Um nome profissional de segurança, organização e credibilidade",

    imagemTransmitida:
      "O número 4 transmite uma imagem sólida, confiável, organizada e responsável. É um nome que pode favorecer percepção de estabilidade, competência técnica e compromisso com resultados consistentes.",

    atitudes:
      "Estimula disciplina, planejamento, organização e atenção aos detalhes. O profissional tende a trabalhar com método, regras e processos bem definidos.",

    aptidoes:
      "Favorece administração, engenharia, finanças, contabilidade, tecnologia, planejamento, arquitetura, operações e atividades que exigem precisão e continuidade.",

    positivos:
      "Disciplina, responsabilidade, confiança, consistência, organização e capacidade de construir resultados de longo prazo.",

    negativos:
      "Pode transmitir rigidez, excesso de formalidade, resistência a mudanças ou dificuldade de inovar. O profissional pode parecer sério demais para mercados que exigem leveza e criatividade.",

    atividadesFavorecidas:
      "Administração, engenharia, finanças, tecnologia, contabilidade, planejamento, construção, logística e gestão de processos.",

    orientacao:
      "O Nome Profissional 4 é excelente para construir credibilidade, mas precisa ser analisado dentro do seu setor e do seu Destino. Em algumas carreiras, estabilidade é uma força; em outras, pode limitar inovação.",
  },

  5: {
    numero: 5,

    titulo:
      "Um nome profissional de movimento, inovação e versatilidade",

    imagemTransmitida:
      "O número 5 transmite dinamismo, liberdade, modernidade e capacidade de adaptação. É um nome que tende a criar uma imagem profissional mais flexível, atual e aberta a mudanças.",

    atitudes:
      "Estimula movimento, comunicação, curiosidade e rapidez. A pessoa tende a experimentar estratégias, explorar novos mercados e buscar oportunidades diferentes.",

    aptidoes:
      "Favorece vendas, comunicação, comércio, turismo, internet, tecnologia, marketing, eventos, negociação e profissões que exigem mobilidade.",

    positivos:
      "Versatilidade, rapidez, capacidade de adaptação, comunicação, coragem para mudar e habilidade para aproveitar oportunidades.",

    negativos:
      "Pode gerar instabilidade, dispersão, impulsividade e dificuldade de manter constância. Em excesso, o profissional pode transmitir falta de compromisso ou excesso de mudanças.",

    atividadesFavorecidas:
      "Vendas, comércio, marketing digital, viagens, tecnologia, eventos, comunicação, negociação e atividades dinâmicas.",

    orientacao:
      "O Nome Profissional 5 pode ser poderoso para mercados rápidos e modernos. A questão é verificar se essa liberdade complementa seu Destino ou aumenta uma tendência à dispersão.",
  },

  6: {
    numero: 6,

    titulo:
      "Um nome profissional de confiança, cuidado e excelência",

    imagemTransmitida:
      "O número 6 transmite acolhimento, responsabilidade, cuidado e preocupação com qualidade. É uma vibração que pode favorecer profissionais percebidos como confiáveis, cuidadosos e comprometidos com pessoas.",

    atitudes:
      "Estimula responsabilidade, dedicação, senso estético e desejo de entregar qualidade. O profissional tende a cuidar da experiência do cliente e valorizar relacionamento.",

    aptidoes:
      "Favorece saúde, estética, terapias, educação, gastronomia, design, atendimento, arquitetura, moda e profissões ligadas ao bem-estar.",

    positivos:
      "Responsabilidade, confiança, beleza, sensibilidade, dedicação e capacidade de criar vínculos duradouros.",

    negativos:
      "Pode gerar perfeccionismo, excesso de responsabilidade, dificuldade de delegar ou tendência a querer agradar todos os clientes.",

    atividadesFavorecidas:
      "Saúde, terapias, estética, educação, gastronomia, design, arquitetura, moda, atendimento e serviços personalizados.",

    orientacao:
      "O Nome Profissional 6 transmite confiança e cuidado. Mas é importante verificar se essa vibração está alinhada ao posicionamento que você deseja e ao seu Destino profissional.",
  },

  7: {
    numero: 7,

    titulo:
      "Um nome profissional de conhecimento, especialização e profundidade",

    imagemTransmitida:
      "O número 7 transmite conhecimento, seletividade, profundidade e especialização. Pode criar a percepção de um profissional mais técnico, analítico ou intelectual.",

    atitudes:
      "Estimula pesquisa, estudo, observação, análise e busca por excelência técnica. A pessoa tende a preferir dominar profundamente seu campo antes de se expor.",

    aptidoes:
      "Favorece pesquisa, tecnologia, ciência, psicologia, terapias, consultoria, ensino especializado, escrita e atividades intelectuais.",

    positivos:
      "Conhecimento, profundidade, capacidade analítica, concentração, especialização e credibilidade técnica.",

    negativos:
      "Pode transmitir distanciamento, dificuldade de comunicação, isolamento ou excesso de perfeccionismo. O profissional pode saber muito, mas divulgar pouco.",

    atividadesFavorecidas:
      "Consultoria, pesquisa, tecnologia, ciência, terapias, psicologia, escrita, ensino especializado e análise.",

    orientacao:
      "O Nome Profissional 7 pode construir autoridade por conhecimento. A análise com seu Destino mostra se você precisa aprofundar ainda mais essa imagem ou acrescentar mais comunicação e exposição.",
  },

  8: {
    numero: 8,

    titulo:
      "Um nome profissional de poder, prosperidade e realização",

    imagemTransmitida:
      "O número 8 transmite força, autoridade, capacidade administrativa e orientação para resultados. É uma das vibrações mais ligadas a negócios, crescimento e realização material.",

    atitudes:
      "Estimula ambição, tomada de decisão, visão estratégica, administração e foco em resultados. O profissional tende a pensar em crescimento, expansão e retorno.",

    aptidoes:
      "Favorece negócios, finanças, gestão, empreendedorismo, investimentos, liderança, imóveis, administração e cargos executivos.",

    positivos:
      "Autoridade, estratégia, liderança, capacidade de administrar recursos, visão financeira e potencial de crescimento.",

    negativos:
      "Pode transmitir excesso de poder, rigidez, materialismo, competitividade ou imagem distante. O profissional precisa evitar que autoridade seja percebida como arrogância.",

    atividadesFavorecidas:
      "Empresas, finanças, gestão, investimentos, vendas de alto valor, imóveis, administração, liderança e empreendedorismo.",

    orientacao:
      "O Nome Profissional 8 é muito forte para realização, mas precisa estar alinhado ao seu Destino. Em determinadas combinações, potencializa prosperidade; em outras, pode gerar excesso de pressão ou cobrança.",
  },

  9: {
    numero: 9,

    titulo:
      "Um nome profissional de propósito, sensibilidade e alcance",

    imagemTransmitida:
      "O número 9 transmite amplitude, sensibilidade, criatividade e preocupação com algo maior do que apenas resultados individuais.",

    atitudes:
      "Estimula generosidade, visão global, criatividade e capacidade de compreender diferentes públicos. O profissional pode buscar impacto, significado e contribuição.",

    aptidoes:
      "Favorece arte, educação, terapias, projetos sociais, comunicação, cultura, saúde, causas humanitárias e atividades internacionais.",

    positivos:
      "Visão ampla, empatia, criatividade, generosidade, capacidade de inspirar e facilidade de compreender diferentes perfis.",

    negativos:
      "Pode gerar idealização, dificuldade de cobrar adequadamente, excesso de entrega ou falta de foco em resultados financeiros.",

    atividadesFavorecidas:
      "Arte, cultura, educação, terapias, saúde, projetos sociais, comunicação, atividades internacionais e trabalhos de impacto.",

    orientacao:
      "O Nome Profissional 9 pode trazer propósito e reconhecimento, mas precisa ser analisado para que generosidade não prejudique posicionamento financeiro e profissional.",
  },

  11: {
    numero: 11,

    titulo:
      "Um nome profissional mestre de inspiração e influência",

    imagemTransmitida:
      "O número 11 transmite inspiração, intuição, originalidade e uma presença diferenciada. Pode criar a percepção de alguém capaz de enxergar possibilidades antes dos outros.",

    atitudes:
      "Estimula criatividade elevada, percepção, inovação, sensibilidade e desejo de transmitir ideias que provoquem transformação.",

    aptidoes:
      "Favorece comunicação inspiradora, arte, espiritualidade, inovação, liderança intelectual, terapias, ensino e projetos autorais.",

    positivos:
      "Intuição, criatividade, inspiração, magnetismo, visão diferenciada e capacidade de influenciar pessoas.",

    negativos:
      "Pode aumentar ansiedade, perfeccionismo, instabilidade emocional e expectativas excessivas. A pessoa pode ter muitas ideias e dificuldade de transformá-las em ação.",

    atividadesFavorecidas:
      "Comunicação, arte, terapias, inovação, desenvolvimento humano, ensino, projetos autorais e atividades de inspiração.",

    orientacao:
      "Por ser Número Mestre, o 11 exige análise cuidadosa. Quando alinhado ao Destino, pode produzir uma marca profissional muito forte. Quando desalinhado, pode aumentar tensão e instabilidade.",
  },

  22: {
    numero: 22,

    titulo:
      "Um nome profissional mestre de construção e grandes realizações",

    imagemTransmitida:
      "O número 22 transmite capacidade de construir projetos de grande alcance. É uma vibração que une visão ampla, planejamento, responsabilidade e realização concreta.",

    atitudes:
      "Estimula pensamento estratégico, organização, responsabilidade, liderança e visão de longo prazo. O profissional tende a pensar grande e buscar estruturas capazes de sustentar crescimento.",

    aptidoes:
      "Favorece empreendedorismo de grande porte, gestão, engenharia, arquitetura, investimentos, projetos sociais estruturados, liderança e construção de organizações.",

    positivos:
      "Visão, planejamento, liderança, responsabilidade, capacidade de construção e potencial para projetos de grande impacto.",

    negativos:
      "Pode gerar pressão excessiva, perfeccionismo, medo de fracassar, rigidez e necessidade de controlar muitos detalhes.",

    atividadesFavorecidas:
      "Grandes empresas, empreendedorismo, gestão, construção, engenharia, investimentos, liderança institucional e projetos de grande escala.",

    orientacao:
      "O Nome Profissional 22 possui enorme força, mas nem sempre é a vibração mais adequada simplesmente por ser um Número Mestre. É indispensável cruzá-lo com seu Destino e com seus objetivos profissionais para saber se essa energia realmente trabalha a seu favor.",
  },
};

export function obterDiagnosticoNomeProfissional(
  numero: NumeroNomeProfissional
): DiagnosticoNomeProfissional {
  const diagnostico =
    diagnosticosNomeProfissional[numero];

  if (!diagnostico) {
    throw new Error(
      `Diagnóstico de Nome Profissional não encontrado para o número ${numero}.`
    );
  }

  return diagnostico;
}