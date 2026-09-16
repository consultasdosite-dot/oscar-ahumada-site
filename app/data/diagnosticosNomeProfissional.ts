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
  potenciais?: string;
  pontosTrabalhar?: string;
  caracteristicasEssenciais?: string;
  habilidadesNaturais?: string;
  ambientesIdeais?: string;
  sugestoesCarreiras?: string;
  diferenciais?: string;
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

    potenciais:
      "Liderança, iniciativa, autonomia, criatividade, coragem e poder de decisão.",

    pontosTrabalhar:
      "Autoritarismo, impaciência, individualismo, dificuldade em receber orientação e excesso de competitividade.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 1, que valoriza independência, liderança e iniciativa.",

    habilidadesNaturais:
      "Ação e dinamismo: Capacidade de transformar ideias em projetos concretos.\\n\\nCriatividade e originalidade: Busca por inovação e diferenciação em qualquer campo.\\n\\nDecisão e comando: Aptidão para direcionar equipes, resolver desafios e assumir responsabilidades.\\n\\nAdaptação e movimento: Preferência por ambientes com mudanças, viagens ou exposição a novos cenários.\\n\\nCompetitividade: Motivação por desafios e reconhecimento público.",

    ambientesIdeais:
      "Indústrias dinâmicas: Engenharia, mecânica, setor aeroespacial, marítimo ou industrial.\\n\\nLiderança estratégica: Direção de empresas, cargos executivos (gerente, presidente) ou empreendedorismo.\\n\\nCriatividade aplicada: Publicidade, moda, invenções, jornalismo ou comunicação.\\n\\nÁreas de impacto: Militar, advocacia (magistratura), instrução ou vendas.",

    sugestoesCarreiras:
      "1. Empreendedorismo: Dona de negócio, inventora ou criadora de produtos/serviços.\\n\\n2. Liderança corporativa: Executiva, diretora ou presidente de empresa.\\n\\n3. Comunicação e expressão: Publicitária, jornalista ou apresentadora de produtos.\\n\\n4. Tecnologia e engenharia: Engenheira, eletricista ou profissional de setores aeroespaciais.\\n\\n5. Defesa e estratégia: Militar, magistrado ou instrutora em áreas técnicas.\\n\\n6. Arte e inovação: Criadora de moda, designer ou profissional de marketing criativo.",

    diferenciais:
      "Sua força está em transformar ideias em ações, liderar com originalidade e buscar reconhecimento através de resultados tangíveis.\\n\\nAmbientes rotineiros ou controlados podem limitar seu potencial, enquanto desafios competitivos e projetos autônomos são seu combustível.",

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

    potenciais:
      "Diplomacia, cooperação, sensibilidade, percepção, persuasão e capacidade de conciliar.",

    pontosTrabalhar:
      "Insegurança, dependência da aprovação, indecisão, dificuldade diante de conflitos e excesso de sensibilidade.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 2, que valoriza diplomacia, harmonia e conexão humana.",

    habilidadesNaturais:
      "Mediação e imparcialidade: Capacidade de unir pessoas ou grupos, promovendo acordos e equilíbrio.\\n\\nSensibilidade e estética: Domínio de elementos culturais, artísticos ou visuais para criar ambientes ou experiências harmoniosas.\\n\\nPersuasão e comunicação: Habilidade de recolher informações, esclarecer dúvidas e influenciar decisões com delicadeza.\\n\\nAtenção ao detalhe: Percepção aguçada para organizar dados, cuidar de infraestruturas ou garantir funcionalidade em serviços.\\n\\nAdaptação e ritmo: Facilidade para trabalhar em ambientes dinâmicos, mantendo a calma e a organização.",

    ambientesIdeais:
      "Beleza e estética: Design de moda, decoração, cuidados com plantas ou gestão de espaços culturais.\\n\\nRelações interpessoais: Mediação, consultoria, psicologia ou assistência social.\\n\\nArtes e cultura: Dança, música, literatura, poesia ou gestão de eventos artísticos.\\n\\nServiços e infraestrutura: Atendimento ao público, hotelaria, restaurante ou bibliotecas.\\n\\nPolítica e diplomacia: Negociações, relações públicas ou cargos que envolvam cooperação internacional.",

    sugestoesCarreiras:
      "1. Mediação e consultoria: Mediadora de conflitos, consultora de relações humanas ou especialista em gestão de equipes.\\n\\n2. Artes e cultura: Coreógrafa, designer de interiores, curadora de exposições ou editora literária.\\n\\n3. Serviços e atendimento: Secretária executiva, gerente de hotelaria, assistente social ou florista.\\n\\n4. Política e diplomacia: Assessora de relações públicas, diplomata ou gestora de projetos comunitários.\\n\\n5. Saúde e bem-estar: Terapeuta holística, psicóloga ou especialista em terapias restauradoras.\\n\\n6. Infraestrutura e organização: Bibliotecária, organizadora de eventos ou gestora de espaços culturais.",

    diferenciais:
      "Sua força está em ligar pessoas e ideias, harmonizar ambientes e garantir fluidez em processos.\\n\\nAmbientes que valorizem colaboração e atendimento personalizado são ideais, enquanto situações de confronto direto ou falta de estrutura podem desgastar seu potencial.",

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

    potenciais:
      "Comunicação, criatividade, expressão, sociabilidade, entusiasmo e imaginação.",

    pontosTrabalhar:
      "Dispersão, dificuldade de concluir projetos, superficialidade, excesso de atividades e necessidade de reconhecimento.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 3, que valoriza criatividade, expressão e conexão social.",

    habilidadesNaturais:
      "Imaginação e inspiração: Dom para gerar ideias inovadoras e transmitir entusiasmo.\\n\\nComunicação e expressão: Habilidade de usar a voz, a palavra ou a arte para se conectar com o público.\\n\\nAdaptação e movimento: Preferência por ambientes dinâmicos, com mudanças, viagens ou interações sociais.\\n\\nJovialidade e alegria: Capacidade de trazer leveza e prazer a projetos, evitando situações estressantes ou rotineiras.\\n\\nVisualização e especulação: Domínio de elementos visuais, jogos de estratégia ou cenários futuros.",

    ambientesIdeais:
      "Comunicação e entretenimento: Jornalismo, teatro, cinema, locução, dança ou eventos.\\n\\nArtes e design: Desenho, estilismo, decoração, artes gráficas ou criação de conteúdo visual.\\n\\nEducação e instrução: Ensino, cursos, palestras ou tutoria, com foco em adolescentes ou adultos.\\n\\nVendas e marketing: Comércio de luxo, telemarketing, publicidade ou relações públicas.\\n\\nTurismo e mobilidade: Agenciamento de viagens, aviação, marinha ou gestão de meios de transporte.",

    sugestoesCarreiras:
      "1. Comunicação e mídia: Jornalista, apresentadora de TV, locutora ou redatora de publicidade.\\n\\n2. Artes e design: Artista plástica, estilista, decoradora ou designer gráfico.\\n\\n3. Educação e instrução: Professora de arte, palestrante ou instrutora de cursos criativos.\\n\\n4. Vendas e marketing: Vendedora de produtos de luxo, consultora de imagem ou especialista em relações públicas.\\n\\n5. Turismo e eventos: Organizadora de viagens, promotora de eventos ou gestora de festivais.\\n\\n6. Entretenimento e esportes: Atriz, comentarista esportivo, coreógrafa ou produtora cultural.\\n\\n7. Tecnologia e especulação: Criadora de conteúdo digital, especialista em jogos ou consultora de tendências.",

    diferenciais:
      "Sua força está em iluminar ambientes com criatividade, conectar pessoas através da comunicação e transformar ideias em ações dinâmicas.\\n\\nAmbientes que permitem liberdade artística e interação social são ideais, enquanto rotinas rígidas ou pressão por resultados imediatos podem limitar seu potencial.",

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

    potenciais:
      "Organização, disciplina, método, responsabilidade, persistência e capacidade de construir.",

    pontosTrabalhar:
      "Rigidez, resistência às mudanças, excesso de controle, preocupação excessiva e dificuldade para improvisar.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 4, que valoriza estabilidade, método e solidez.",

    habilidadesNaturais:
      "Organização e controle: Domínio de sistemas, padrões e regulamentos para garantir eficiência e segurança.\\n\\nPraticidade e exatidão: Capacidade de trabalhar com elementos tangíveis (terra, concreto, dados) e seguir técnicas comprovadas.\\n\\nResiliência e paciência: Habilidade de enfrentar desafios desgastantes e transformar-se em autoridade através da experiência.\\n\\nConservação e manutenção: Aptidão para preservar, reformar ou melhorar estruturas, processos ou propriedades.\\n\\nSeriedade e responsabilidade: Compromisso com regras, qualidade e resultados duradouros.",

    ambientesIdeais:
      "Engenharia e construção: Projetos de infraestrutura, arquitetura ou manutenção de obras.\\n\\nAdministração e gestão: Supervisão, fiscalização, controle de qualidade ou gestão de propriedades.\\n\\nServiços públicos e governo: Cargos em órgãos governamentais, polícia ou pesquisa científica.\\n\\nIndústria e produção: Manufatura, logística, armazenamento ou setores de mineração/geologia.\\n\\nEconomia e finanças: Bancos, contratos, advocacia ou planejamento econômico.",

    sugestoesCarreiras:
      "1. Engenharia e infraestrutura: Engenheira civil, arquiteta ou gestora de projetos de construção.\\n\\n2. Administração e controle: Supervisora, fiscal, gerente de qualidade ou administradora de propriedades.\\n\\n3. Serviços públicos: Servidora pública, policial, pesquisadora ou funcionária de órgãos governamentais.\\n\\n4. Indústria e logística: Técnica de manutenção, especialista em armazenamento ou geóloga.\\n\\n5. Economia e finanças: Economista, bancária, advogada ou consultora de contratos.\\n\\n6. Agricultura e artesanato: Proprietária de fazenda, artesã ou paisagista.\\n\\n7. Educação e métodos: Professora de disciplinas técnicas, diagramadora ou cerimonialista.",

    diferenciais:
      "Sua força está em construir bases sólidas, garantir estabilidade e transformar processos em sistemas duradouros.\\n\\nAmbientes que valorizem rotina organizada e resultados tangíveis são ideais, enquanto pressões por inovação rápida ou ambientes caóticos podem desgastar seu potencial.",

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

    potenciais:
      "Versatilidade, adaptação, comunicação, ousadia, rapidez e capacidade de inovar.",

    pontosTrabalhar:
      "Impulsividade, instabilidade, dificuldade com rotina, perda rápida de interesse e tendência a assumir riscos desnecessários.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 5, que valoriza dinamismo, liberdade e expansão.",

    habilidadesNaturais:
      "Versatilidade e movimento: Capacidade de lidar com múltiplas atividades, viagens e situações inesperadas.\\n\\nCriatividade e originalidade: Dom para gerar soluções rápidas, inovar e explorar novidades.\\n\\nPresença de espírito e audácia: Habilidade de comandar sistemas complexos e assumir riscos calculados.\\n\\nCuriosidade e interesse global: Fascínio por temas internacionais, tecnológicos ou espaciais, com foco no progresso humano.\\n\\nAdaptação e destemor: Resistência a rotinas e busca constante por evolução, alegria e liberdade.",

    ambientesIdeais:
      "Comunicação e propaganda: Trabalho em TV, jornais, publicidade ou gestão de redes sociais.\\n\\nNegócios internacionais: Exportação, importação, gestão de empresas multinacionais ou turismo global.\\n\\nTecnologia e inovação: Astronomia, tecnologia avançada, especulação financeira ou bolsa de valores.\\n\\nEntretenimento e multidões: Eventos, esportes, promoções ou gestão de público em larga escala.\\n\\nLegislação e progresso: Cargos políticos (congressista, legisladora) ou projetos que beneficiem a sociedade.",

    sugestoesCarreiras:
      "1. Comunicação e mídia: Apresentadora de TV, redatora de publicidade ou gestora de conteúdo digital.\\n\\n2. Negócios globais: Empresária internacional, especialista em comércio exterior ou consultora de expansão de mercado.\\n\\n3. Tecnologia e especulação: Analista de bolsa, pesquisadora em astronomia ou desenvolvedora de tecnologias disruptivas.\\n\\n4. Entretenimento e eventos: Promotora de festivais, gerente de esportes ou produtora de conteúdo para multidões.\\n\\n5. Política e legislação: Congressista, ativista social ou gestora de projetos comunitários.\\n\\n6. Turismo e diversão: Organizadora de excursões, guia internacional ou especialista em experiências únicas.\\n\\n7. Artes e expressão: Artista performática, coreógrafa ou criadora de conteúdo para redes sociais.",

    diferenciais:
      "Sua força está em transformar ideias em ações dinâmicas, explorar novos horizontes e lidar com situações complexas com entusiasmo.\\n\\nAmbientes que ofereçam liberdade de horário, desafios constantes e oportunidades de crescimento são ideais, enquanto rotinas rígidas ou falta de autonomia podem limitar seu potencial.",

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

    potenciais:
      "Responsabilidade, cuidado, senso de justiça, acolhimento, harmonia e compromisso.",

    pontosTrabalhar:
      "Excesso de responsabilidade, perfeccionismo, dificuldade em delegar, cobrança e tendência a assumir problemas dos outros.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 6, que valoriza humanitarismo, proteção e harmonia social.",

    habilidadesNaturais:
      "Compromisso com o bem-estar coletivo: Dom para cuidar de necessidades sociais, garantir conforto e promover justiça.\\n\\nSenso prático e idealismo: Capacidade de transformar sonhos em ações concretas, com foco em resultados tangíveis.\\n\\nResponsabilidade e dedicação: Habilidade de assumir deveres com seriedade, especialmente em contextos tradicionais ou religiosos.\\n\\nConexão emocional e artística: Sensibilidade para lidar com situações humanas, aliada a um senso estético refinado.\\n\\nLigação comunitária: Preferência por ambientes que valorizem família, tradição e estabilidade.",

    ambientesIdeais:
      "Serviços sociais e públicos: Assistência a pessoas carentes, medicina preventiva ou gestão de políticas públicas.\\n\\nSaúde e bem-estar: Enfermagem, terapias alternativas ou psicologia.\\n\\nEducação e cultura: Ensino, pedagogia, arqueologia, história ou gestão de museus.\\n\\nArtes e design: Música, literatura, paisagismo, fotografia ou decoração.\\n\\nAdministração comunitária: Gestão de imóveis, empresas familiares ou cargos em instituições religiosas.",

    sugestoesCarreiras:
      "1. Assistência social e saúde: Assistente social, enfermeira, terapeuta holística ou médica de família.\\n\\n2. Educação e cultura: Professora, curadora de museus, historiadora ou arqueóloga.\\n\\n3. Artes e design: Fotógrafa, paisagista, decoradora ou escritora.\\n\\n4. Serviço público: Advogada pública, gestora de políticas sociais ou diplomata.\\n\\n5. Administração familiar: Inventariante, administradora de propriedades ou gestora de empresas familiares.\\n\\n6. Conservação e tradição: Restauradora de arte, especialista em patrimônio histórico ou consultora de ética corporativa.",

    diferenciais:
      "Sua força está em proteger e cuidar, harmonizar conflitos e transformar ideais em ações práticas.\\n\\nAmbientes que valorizem estabilidade, ética e ligação comunitária são ideais, enquanto situações de alta competitividade ou desumanização podem desgastar seu potencial.",

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

    potenciais:
      "Análise, investigação, especialização, percepção, intuição e profundidade intelectual.",

    pontosTrabalhar:
      "Isolamento, excesso de análise, dificuldade de exposição, desconfiança e demora para transformar conhecimento em ação.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 7, que valoriza profundidade, análise e sabedoria.",

    habilidadesNaturais:
      "Investigação e pesquisa: Dom para explorar mistérios, fenômenos complexos e áreas como metafísica ou ocultismo.\\n\\nIntrospecção e discrição: Preferência por ambientes de isolamento, contemplação e aprofundamento de conhecimentos.\\n\\nHabilidade técnica e manual: Capacidade de sintetizar dados, realizar cálculos precisos e dominar técnicas especializadas.\\n\\nIntuição e percepção: Habilidade de enxergar além do óbvio, identificar padrões e conectar-se com o sagrado.\\n\\nLiderança estratégica: Quando reconhecida, assume cargos de direção com autoridade e visão ampla.",

    ambientesIdeais:
      "Ciência e pesquisa: Laboratórios, análise de dados, neurologia, química ou cartografia.\\n\\nFilosofia e metafísica: Escrita, docência, psicanálise ou estudos esotéricos.\\n\\nEngenharia e construção: Projetos técnicos, gestão de obras ou fundação de empresas.\\n\\nPolítica e governança: Cargos de liderança, administração pública ou direção de instituições.\\n\\nEducação e avaliação: Fiscalização, supervisão, peritagem ou ensino superior.",

    sugestoesCarreiras:
      "1. Ciência e análise: Pesquisadora em laboratório, neurologista, química ou analista de sistemas.\\n\\n2. Filosofia e espiritualidade: Escritora, filósofa, psicanalista ou especialista em metafísica.\\n\\n3. Engenharia e construção: Engenheira civil, arquiteta ou gestora de projetos de infraestrutura.\\n\\n4. Liderança estratégica: Diretora, presidente, governante ou administradora de empresas.\\n\\n5. Educação e avaliação: Professora universitária, catedrática, fiscal ou perita em áreas técnicas.\\n\\n6. Política e governança: Gestora pública, legisladora ou consultora em políticas sociais.\\n\\n7. Detecção e especialização: Detetive, nutricionista, historiadora ou arqueóloga.",

    diferenciais:
      "Sua força está em desvendar verdades, sintetizar complexidades e liderar com autoridade.\\n\\nAmbientes que permitam isolamento criativo, profundidade intelectual e reconhecimento são ideais, enquanto situações de superficialidade ou pressão por resultados imediatos podem desgastar seu potencial.",

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

    potenciais:
      "Liderança, administração, estratégia, determinação, visão financeira e capacidade de realização.",

    pontosTrabalhar:
      "Autoritarismo, excesso de controle, ambição desequilibrada, dificuldade em delegar e valorização excessiva dos resultados materiais.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 8, que valoriza autoridade, eficiência e concretização.",

    habilidadesNaturais:
      "Liderança estratégica: Dom para dirigir equipes, estabelecer regras e transformar desafios em resultados tangíveis.\\n\\nResistência e persistência: Capacidade de superar obstáculos, lidar com pressões e emergências com imparcialidade.\\n\\nAnálise humana e política: Habilidade de negociar, avaliar contextos sociais e tomar decisões influentes.\\n\\nVisão internacional e macro: Interesse por grandes organizações, projetos globais e estratégias de longo prazo.\\n\\nAmbição e reconhecimento: Busca por recompensas financeiras, autoridade em sua área e legado duradouro.",

    ambientesIdeais:
      "Negócios e finanças: Gestão de empresas, consultoria econômica, bancos ou administração de franquias.\\n\\nPolítica e governo: Cargos públicos, pesquisa de campo, estatística ou direção de instituições cívicas.\\n\\nSaúde e medicina: Psicologia, psicanálise, pesquisa médica ou gestão de hospitais.\\n\\nPropriedades e seguros: Negociação de imóveis, leilões, empréstimos ou manutenção de patrimônios.\\n\\nLiteratura e educação: Escrita didática, não ficção ou ensino focado em temas práticos.",

    sugestoesCarreiras:
      "1. Liderança corporativa: Diretora executiva, proprietária de empresa, gestora de franquias ou consultora estratégica.\\n\\n2. Política e governança: Juíza, legisladora, pesquisadora de políticas públicas ou administradora de órgãos governamentais.\\n\\n3. Finanças e negócios: Analista de mercado, especialista em seguros, corretora de imóveis ou gestora de investimentos.\\n\\n4. Saúde e psicologia: Psicóloga clínica, psicanalista, médica ou curadora de projetos sociais.\\n\\n5. Propriedades e infraestrutura: Engenheira civil, arquiteta ou especialista em reabilitação de espaços.\\n\\n6. Educação e comunicação: Escritora de não ficção, professora universitária ou palestrante em temas técnicos.\\n\\n7. Detecção e análise: Detetive, perita forense ou estatística aplicada a contextos sociais.",

    diferenciais:
      "Sua força está em transformar desafios em conquistas, liderar com autoridade e garantir resultados concretos. Ambientes que ofereçam reconhecimento, desafios complexos e oportunidades de crescimento financeiro são ideais, enquanto situações de passividade ou falta de estrutura podem limitar seu potencial.",

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

    potenciais:
      "Visão humanitária, criatividade, generosidade, sensibilidade, inspiração e capacidade de mobilizar pessoas.",

    pontosTrabalhar:
      "Idealização, excesso de entrega, dificuldade em estabelecer limites, dispersão de objetivos e tendência a colocar as necessidades dos outros antes das próprias.",

    caracteristicasEssenciais:
      "Sua energia profissional é regida pelo número 9, que valoriza idealismo, compaixão e transcendência.",

    habilidadesNaturais:
      "Filantropia e devoção: Dom para servir à humanidade, com foco em caridade, reconstrução e bem-estar coletivo.\\n\\nSensibilidade e perfeccionismo: Capacidade de perceber nuances emocionais e buscar excelência em projetos sociais ou artísticos.\\n\\nDiplomacia e abertura cultural: Habilidade de conectar-se com outras culturas, religiões ou contextos internacionais.\\n\\nCriatividade e multiplicidade: Talentos variados, desde artes até ciências humanas, com necessidade de inspiração e expressão.\\n\\nResiliência e sacrifício: Disposição para enfrentar desafios por ideais, mesmo que exijam renúncia pessoal.",

    ambientesIdeais:
      "Saúde e assistência: Medicina, enfermagem, serviço social ou trabalho em ONGs.\\n\\nArtes e entretenimento: Teatro, cinema, literatura, poesia ou artes visuais (pintura, desenho, arquitetura).\\n\\nPolítica e diplomacia: Cargos públicos, gestão de sindicatos ou representação em organismos internacionais.\\n\\nEducação e filosofia: Ensino, pesquisa acadêmica ou divulgação de conhecimento através de mídia.\\n\\nTurismo e intercâmbio cultural: Organização de excursões, gestão de projetos internacionais ou marketing cultural.",

    sugestoesCarreiras:
      "1. Saúde e humanitarismo: Médica, enfermeira, assistente social ou missionária.\\n\\n2. Artes e expressão: Atriz, escritora, pintora, arquiteta ou coreógrafa.\\n\\n3. Política e diplomacia: Política, gestora de sindicatos ou representante em instituições internacionais.\\n\\n4. Educação e filosofia: Professora universitária, pesquisadora ou divulgadora de conhecimento.\\n\\n5. Turismo e cultura: Organizadora de viagens, gestora de eventos culturais ou especialista em marketing internacional.\\n\\n6. Filantropia e benemerência: Mecenas, distribuidora de recursos para causas sociais ou fundadora de ONGs.\\n\\n7. Ciências humanas: Antropóloga, socióloga ou especialista em desenvolvimento sustentável.",

    diferenciais:
      "Sua força está em transformar ideais em ações, conectar pessoas através da arte e servir com compaixão. Ambientes que permitam liberdade criativa, contato com a diversidade cultural e impacto social são ideais, enquanto situações de confronto direto ou superficialidade podem desgastar seu potencial.",

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