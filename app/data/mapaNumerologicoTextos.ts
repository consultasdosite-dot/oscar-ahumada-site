/*
 * BIBLIOTECA OFICIAL DE INTERPRETAÇÕES
 * MAPA NUMEROLÓGICO — OSCAR AHUMADA
 *
 * Baseada na metodologia de Numerologia Latina
 * utilizada por Oscar Ahumada.
 *
 * Este arquivo contém a interpretação fundamental
 * das vibrações 1 a 9, 11 e 22.
 */

export type NumeroMapa =
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

export type InterpretacaoNumeroMapa = {
  numero: NumeroMapa;
  titulo: string;
  essencia: string;
  palavrasChave: string[];
  diagnostico: string;
  potencialidades: string[];
  pontosAtencao: string[];
  atitudes: string;
  trabalho: string;
  relacionamentos: string;
  reflexao: string[];
  orientacaoOscar: string;
};

export const mapaNumerologicoTextos: Record<
  NumeroMapa,
  InterpretacaoNumeroMapa
> = {
  1: {
    numero: 1,

    titulo: "Independência, Liderança e Realização",

    essencia:
      "O número 1 representa impulso, autoridade, atividade, vontade, individualidade, liderança e independência. É uma vibração que deseja abrir caminhos, tomar decisões e construir uma identidade própria.",

    palavrasChave: [
      "independência",
      "autonomia",
      "coragem",
      "ousadia",
      "autossuficiência",
      "originalidade",
      "criatividade",
      "pioneirismo",
      "individualidade",
      "dinamismo",
      "liderança",
      "força",
      "comando",
      "inventividade",
      "inovação",
      "destaque",
      "ambição",
      "decisão",
    ],

    diagnostico:
      "Quando encontro o número 1 em uma posição importante do seu mapa, vejo uma energia que não nasceu para viver esperando que os outros decidam tudo. Existe em você uma necessidade de construir seu próprio caminho, experimentar sua capacidade de liderança e perceber até onde sua criatividade pode levá-lo. Você tende a funcionar melhor quando sente que possui autonomia para agir, decidir e transformar ideias em realidade.",

    potencialidades: [
      "Capacidade natural de liderança.",
      "Coragem para iniciar projetos e abrir novos caminhos.",
      "Criatividade e originalidade para encontrar soluções.",
      "Independência intelectual e material.",
      "Rapidez para tomar decisões.",
      "Capacidade de assumir posições de comando.",
      "Força para superar obstáculos.",
      "Potencial para alcançar destaque profissional.",
    ],

    pontosAtencao: [
      "Centralizar decisões excessivamente.",
      "Querer controlar pessoas e situações.",
      "Confundir liderança com imposição.",
      "Assumir responsabilidades que poderiam ser divididas.",
      "Criar dependência nas pessoas ao seu redor.",
      "Demonstrar rigidez nos relacionamentos.",
      "Ter dificuldade em aceitar opiniões diferentes.",
    ],

    atitudes:
      "Sua grande aprendizagem está em compreender que independência não significa fazer tudo sozinho. Quanto mais você aprende a liderar sem dominar, delegar sem perder autoridade e ouvir sem abandonar suas convicções, mais madura se torna a energia do número 1.",

    trabalho:
      "Profissionalmente, esta vibração favorece situações em que exista iniciativa, autonomia, comando, criatividade, inovação e possibilidade de crescimento. Você pode se destacar liderando equipes, empreendendo, administrando projetos ou ocupando posições nas quais sua capacidade de decisão seja valorizada.",

    relacionamentos:
      "Nos relacionamentos, sua intensidade pode fazer com que naturalmente assuma a direção. O cuidado está em não transformar proteção em controle. Permitir que o outro tenha voz, iniciativa e independência fortalece seus vínculos e diminui o peso das responsabilidades que você tende a assumir.",

    reflexao: [
      "Estou liderando ou tentando controlar?",
      "Consigo delegar responsabilidades?",
      "Permito que as pessoas próximas tomem suas próprias decisões?",
      "Estou usando minha criatividade para construir algo realmente meu?",
    ],

    orientacaoOscar:
      "Use sua força para abrir caminhos, não para carregar o mundo inteiro nas costas. O verdadeiro líder não precisa controlar tudo: ele inspira, orienta e permite que cada pessoa desenvolva sua própria força.",
  },

  2: {
    numero: 2,

    titulo: "Cooperação, Sensibilidade e Relacionamentos",

    essencia:
      "O número 2 representa dualidade, união, solidariedade, companhia e complementaridade. É uma vibração ligada aos relacionamentos, à cooperação e à capacidade de perceber os diferentes lados de uma situação.",

    palavrasChave: [
      "relacionamento",
      "cooperação",
      "compromisso",
      "simpatia",
      "diplomacia",
      "adaptabilidade",
      "associação",
      "sensibilidade",
      "companhia",
      "tato",
      "persuasão",
      "romantismo",
      "reflexão",
      "harmonia",
      "intermediação",
      "gentileza",
      "observação",
    ],

    diagnostico:
      "Quando o número 2 aparece com força no seu mapa, percebo uma pessoa que possui grande sensibilidade para compreender ambientes e pessoas. Você tende a perceber nuances que muitas vezes passam despercebidas pelos outros. Existe uma necessidade importante de compartilhar, cooperar, criar vínculos e sentir que existe reciprocidade.",

    potencialidades: [
      "Diplomacia.",
      "Capacidade de cooperação.",
      "Sensibilidade para compreender pessoas.",
      "Facilidade para trabalhar em parceria.",
      "Lealdade aos sentimentos.",
      "Capacidade de conciliação.",
      "Gentileza e percepção emocional.",
      "Talento para assessorar e apoiar projetos.",
    ],

    pontosAtencao: [
      "Dependência emocional.",
      "Submissão para evitar conflitos.",
      "Dificuldade em exercer autoridade.",
      "Necessidade excessiva de aprovação.",
      "Insegurança diante de decisões.",
      "Colocar as necessidades dos outros sempre antes das próprias.",
    ],

    atitudes:
      "O equilíbrio desta vibração acontece quando você aprende que cooperar não significa renunciar à própria identidade. É possível amar, ajudar, acompanhar e construir junto sem entregar ao outro o poder sobre sua vida.",

    trabalho:
      "No campo profissional, o número 2 favorece sociedades, assessorias, trabalhos em equipe, negociação, atendimento, relações humanas e atividades em que diplomacia e sensibilidade sejam importantes.",

    relacionamentos:
      "Você tende a valorizar profundamente os vínculos afetivos. Precisa sentir troca, carinho e segurança. O desafio é não transformar o desejo de companhia em dependência ou aceitar situações apenas por medo de ficar sozinho.",

    reflexao: [
      "Estou cooperando ou me anulando?",
      "Consigo dizer não quando necessário?",
      "Minhas relações possuem verdadeira reciprocidade?",
      "Quanto da minha segurança depende da aprovação dos outros?",
    ],

    orientacaoOscar:
      "Sua sensibilidade é uma força, desde que você não entregue sua própria direção às pessoas que ama. Caminhar junto é diferente de caminhar atrás.",
  },

  3: {
    numero: 3,

    titulo: "Expressão, Criatividade e Comunicação",

    essencia:
      "O número 3 representa atividade, entusiasmo, inteligência, criatividade e habilidade de comunicação. É uma vibração ligada à expressão, sociabilidade, alegria e capacidade de conquistar pessoas.",

    palavrasChave: [
      "expressividade",
      "alegria",
      "otimismo",
      "jovialidade",
      "sociabilidade",
      "popularidade",
      "criatividade",
      "comunicação",
      "publicidade",
      "divulgação",
      "vendas",
      "magnetismo",
      "amizade",
      "artes",
      "charme",
      "confiança",
    ],

    diagnostico:
      "O número 3 traz para o seu mapa uma necessidade de expressão. Existe algo em você que precisa circular: ideias, palavras, criatividade, alegria ou conhecimento. Quando essa energia encontra espaço, você pode transformar ambientes e aproximar pessoas com muita naturalidade.",

    potencialidades: [
      "Comunicação.",
      "Carisma.",
      "Criatividade.",
      "Facilidade para conquistar o público.",
      "Sociabilidade.",
      "Otimismo.",
      "Capacidade artística.",
      "Talento para divulgação e vendas.",
    ],

    pontosAtencao: [
      "Dispersão.",
      "Impaciência.",
      "Superficialidade.",
      "Excesso de crítica.",
      "Esconder dificuldades atrás de uma aparência alegre.",
      "Usar a palavra de maneira impulsiva ou destrutiva.",
      "Começar muitas coisas e terminar poucas.",
    ],

    atitudes:
      "Sua comunicação precisa ter direção. Quanto mais você transforma criatividade em realização concreta, menos espaço existe para dispersão. Sua palavra pode abrir portas, aproximar pessoas e gerar oportunidades — por isso precisa ser utilizada com consciência.",

    trabalho:
      "Comunicação, publicidade, vendas, artes, mídia, ensino, eventos, entretenimento e atividades que envolvam público podem favorecer esta vibração.",

    relacionamentos:
      "Você precisa de leveza, conversa e estímulo nos relacionamentos. A monotonia pode incomodar. Entretanto, aprender a conversar também sobre assuntos difíceis torna os vínculos mais profundos.",

    reflexao: [
      "Estou expressando o que realmente sinto?",
      "Minha criatividade está produzindo resultados?",
      "Estou dispersando minha energia em projetos demais?",
      "Uso minhas palavras para construir ou para ferir?",
    ],

    orientacaoOscar:
      "Você possui uma energia que pode iluminar ambientes. Mas lembre-se: comunicar não é apenas falar. É conseguir transformar aquilo que existe dentro de você em algo que tenha significado para outras pessoas.",
  },

  4: {
    numero: 4,

    titulo: "Estrutura, Ordem e Construção",

    essencia:
      "O número 4 representa estabilidade, paciência, organização, dever, ordem e construção. É a busca pelo sólido, pelo real e pelo que pode permanecer ao longo do tempo.",

    palavrasChave: [
      "ordem",
      "trabalho",
      "organização",
      "método",
      "pontualidade",
      "seriedade",
      "estabilidade",
      "segurança",
      "estrutura",
      "firmeza",
      "solidez",
      "disciplina",
      "paciência",
      "determinação",
      "confiabilidade",
    ],

    diagnostico:
      "Quando encontro o número 4 no mapa, vejo uma energia que precisa construir bases. Você tende a valorizar aquilo que é seguro, organizado e duradouro. Existe uma capacidade importante para trabalhar com método e transformar projetos em estruturas concretas.",

    potencialidades: [
      "Organização.",
      "Disciplina.",
      "Persistência.",
      "Responsabilidade.",
      "Confiabilidade.",
      "Capacidade de planejamento.",
      "Construção de patrimônio e estabilidade.",
      "Força para projetos de longo prazo.",
    ],

    pontosAtencao: [
      "Rigidez.",
      "Resistência às mudanças.",
      "Conservadorismo excessivo.",
      "Apego ao passado.",
      "Rotina sufocante.",
      "Dificuldade para abandonar estruturas que já perderam sentido.",
    ],

    atitudes:
      "Sua segurança não pode se transformar em prisão. Estruturas existem para sustentar a vida, e não para impedir que ela evolua. Aprender a mudar sem perder sua base é uma das grandes conquistas desta vibração.",

    trabalho:
      "Atividades que exigem organização, administração, planejamento, engenharia, processos, controle, logística, construção ou responsabilidade de longo prazo combinam com esta energia.",

    relacionamentos:
      "Você tende a buscar segurança e continuidade. Demonstra afeto muitas vezes através de responsabilidade e presença. O desafio é permitir mais espontaneidade e não tentar organizar os sentimentos como se fossem uma planilha.",

    reflexao: [
      "Minha organização está ajudando ou limitando minha vida?",
      "Tenho medo de mudar apenas porque já conheço o caminho atual?",
      "Estou construindo algo duradouro?",
      "Consigo flexibilizar meus planos quando a realidade muda?",
    ],

    orientacaoOscar:
      "Construa bases fortes, mas deixe portas e janelas abertas. Segurança é importante; imobilidade é outra coisa.",
  },

  5: {
    numero: 5,

    titulo: "Liberdade, Movimento e Transformação",

    essencia:
      "O número 5 representa adaptação, mobilidade, progresso, curiosidade, viagens, inovação, comunicação e liberdade.",

    palavrasChave: [
      "mudança",
      "movimento",
      "liberdade",
      "viagem",
      "experimentação",
      "versatilidade",
      "flexibilidade",
      "rapidez",
      "oportunidade",
      "originalidade",
      "comunicação",
      "magnetismo",
      "carisma",
      "sedução",
      "adaptação",
    ],

    diagnostico:
      "O número 5 mostra uma energia que precisa respirar. Você tende a crescer quando existe movimento, novidade, descoberta e possibilidade de escolha. Mudanças que assustariam outras pessoas podem despertar em você curiosidade e vontade de experimentar.",

    potencialidades: [
      "Versatilidade.",
      "Adaptação rápida.",
      "Comunicação.",
      "Capacidade de superar crises.",
      "Magnetismo pessoal.",
      "Curiosidade.",
      "Coragem para mudar.",
      "Facilidade para aproveitar oportunidades.",
    ],

    pontosAtencao: [
      "Instabilidade.",
      "Insatisfação constante.",
      "Abandonar algo apenas porque perdeu a novidade.",
      "Impulsividade.",
      "Excessos.",
      "Dificuldade em criar raízes.",
      "Destruir aquilo que levou tempo para conquistar.",
    ],

    atitudes:
      "Liberdade verdadeira não significa fugir de compromissos. Sua evolução acontece quando você consegue manter movimento sem perder direção.",

    trabalho:
      "Comunicação, viagens, comércio, vendas, publicidade, inovação, atividades digitais e ambientes dinâmicos podem estimular muito esta vibração.",

    relacionamentos:
      "Você precisa sentir espaço dentro das relações. Controle excessivo tende a afastá-lo. Ao mesmo tempo, liberdade precisa caminhar junto com responsabilidade emocional.",

    reflexao: [
      "Estou buscando liberdade ou fugindo de responsabilidades?",
      "Consigo permanecer quando a novidade termina?",
      "As mudanças que faço possuem direção?",
      "Estou usando minha versatilidade para crescer?",
    ],

    orientacaoOscar:
      "Movimente-se, conheça, experimente e transforme. Apenas não confunda liberdade com a necessidade de abandonar tudo cada vez que a vida fica previsível.",
  },

  6: {
    numero: 6,

    titulo: "Amor, Responsabilidade e Harmonia",

    essencia:
      "O número 6 está ligado ao amor, à beleza, à harmonia, à família, à responsabilidade, ao cuidado e à capacidade de entrega.",

    palavrasChave: [
      "amor",
      "afetividade",
      "família",
      "responsabilidade",
      "harmonia",
      "compromisso",
      "dedicação",
      "amizade",
      "diplomacia",
      "parceria",
      "justiça",
      "educação",
      "cura",
      "ética",
      "fidelidade",
    ],

    diagnostico:
      "Quando o número 6 aparece com força, existe uma necessidade profunda de criar harmonia e cuidar das pessoas. Você tende a perceber rapidamente aquilo que precisa ser organizado, protegido ou acolhido.",

    potencialidades: [
      "Responsabilidade.",
      "Capacidade de cuidar.",
      "Lealdade.",
      "Diplomacia.",
      "Senso de família.",
      "Busca de harmonia.",
      "Sensibilidade estética.",
      "Capacidade de servir e orientar.",
    ],

    pontosAtencao: [
      "Perfeccionismo.",
      "Sacrifício excessivo.",
      "Assumir problemas dos outros.",
      "Culpa.",
      "Cobrança afetiva.",
      "Acreditar que precisa resolver tudo para todos.",
    ],

    atitudes:
      "Ajudar é uma qualidade, mas sacrificar continuamente seus próprios desejos pode gerar frustração. Aprender a cuidar também de si é indispensável.",

    trabalho:
      "Educação, saúde, terapias, estética, artes, direito, aconselhamento, atendimento e atividades ligadas ao bem-estar podem harmonizar esta vibração.",

    relacionamentos:
      "A vida afetiva possui grande importância. Você busca compromisso, presença e segurança emocional. Precisa apenas cuidar para não transformar amor em responsabilidade permanente pelo outro.",

    reflexao: [
      "Estou cuidando ou me sacrificando?",
      "Consigo receber tanto quanto ofereço?",
      "Estou tentando construir relações perfeitas?",
      "Tenho reservado espaço para minhas próprias necessidades?",
    ],

    orientacaoOscar:
      "Você pode fazer muito pelas pessoas que ama. Mas não esqueça de incluir seu próprio nome na lista das pessoas que merecem seus cuidados.",
  },

  7: {
    numero: 7,

    titulo: "Conhecimento, Análise e Profundidade",

    essencia:
      "O número 7 representa intelecto, análise, investigação, conhecimento, introspecção e busca por respostas profundas.",

    palavrasChave: [
      "conhecimento",
      "estudo",
      "pesquisa",
      "análise",
      "sabedoria",
      "introspecção",
      "perfeição",
      "imaginação",
      "persistência",
      "ética",
      "literatura",
      "arte",
      "música",
      "tranquilidade",
    ],

    diagnostico:
      "O número 7 indica uma mente que dificilmente se satisfaz com respostas superficiais. Você tende a observar, analisar e procurar compreender o que existe por trás das aparências.",

    potencialidades: [
      "Inteligência analítica.",
      "Capacidade de pesquisa.",
      "Profundidade.",
      "Intuição associada à observação.",
      "Concentração.",
      "Busca de conhecimento.",
      "Persistência intelectual.",
      "Capacidade de especialização.",
    ],

    pontosAtencao: [
      "Isolamento.",
      "Pessimismo.",
      "Excesso de análise.",
      "Dificuldade para confiar.",
      "Exigência exagerada consigo e com os outros.",
      "Distanciamento emocional.",
    ],

    atitudes:
      "Seu silêncio pode produzir conhecimento, mas não permita que ele construa muros. Compartilhar aquilo que você descobre também faz parte da sua evolução.",

    trabalho:
      "Pesquisa, tecnologia, ciência, análise, ensino especializado, terapias, investigação, escrita e atividades que exigem concentração podem favorecer esta vibração.",

    relacionamentos:
      "Você precisa de profundidade e confiança. Nem sempre demonstra rapidamente o que sente. O desafio é não esperar que as pessoas adivinhem aquilo que você mantém em silêncio.",

    reflexao: [
      "Estou refletindo ou me isolando?",
      "Minha exigência está impedindo que eu aproveite o que já conquistei?",
      "Consigo compartilhar meus sentimentos?",
      "Estou usando meu conhecimento de maneira prática?",
    ],

    orientacaoOscar:
      "Continue buscando respostas. Apenas lembre que algumas delas aparecem nos livros e outras surgem quando permitimos que alguém se aproxime.",
  },

  8: {
    numero: 8,

    titulo: "Poder, Realização e Prosperidade",

    essencia:
      "O número 8 representa justiça, equilíbrio, trabalho, determinação, poder, administração, realização social e material.",

    palavrasChave: [
      "administração",
      "negócios",
      "ambição",
      "execução",
      "finanças",
      "sucesso material",
      "competência",
      "autoridade",
      "determinação",
      "liderança",
      "reconhecimento",
      "conquista",
      "dinheiro",
      "responsabilidade",
      "senso prático",
    ],

    diagnostico:
      "O número 8 coloca em evidência sua relação com realização, poder e resultados. Existe potencial para administrar recursos, assumir responsabilidades importantes e transformar esforço em conquistas concretas.",

    potencialidades: [
      "Administração.",
      "Capacidade financeira.",
      "Determinação.",
      "Autoridade.",
      "Realismo.",
      "Força de execução.",
      "Construção patrimonial.",
      "Capacidade de recuperação.",
    ],

    pontosAtencao: [
      "Materialismo.",
      "Necessidade excessiva de controle.",
      "Autoritarismo.",
      "Ciúme e possessividade.",
      "Medir sucesso apenas por dinheiro ou posição.",
      "Dureza emocional.",
    ],

    atitudes:
      "Poder e dinheiro são ferramentas. O equilíbrio acontece quando você os utiliza para construir liberdade e segurança, e não para medir seu próprio valor.",

    trabalho:
      "Administração, negócios, finanças, gestão, patrimônio, liderança executiva, empreendedorismo e posições de responsabilidade são ambientes naturais para esta energia.",

    relacionamentos:
      "Você tende a demonstrar segurança através de atitudes concretas. Precisa cuidar para que proteção não se transforme em posse e para que trabalho e objetivos materiais não ocupem todo o espaço afetivo.",

    reflexao: [
      "O dinheiro trabalha para mim ou eu vivo apenas para ele?",
      "Estou exercendo autoridade com justiça?",
      "Consigo demonstrar vulnerabilidade?",
      "Minha ambição está alinhada com aquilo que realmente valorizo?",
    ],

    orientacaoOscar:
      "Construa, prospere e conquiste. Mas lembre-se de que patrimônio é aquilo que você possui; valor pessoal é aquilo que você é.",
  },

  9: {
    numero: 9,

    titulo: "Humanitarismo, Emoção e Visão Universal",

    essencia:
      "O número 9 representa altruísmo, emotividade, paixão, idealismo, compaixão, espiritualidade, ajuda e compartilhamento.",

    palavrasChave: [
      "humanitarismo",
      "doação",
      "inspiração",
      "espiritualidade",
      "desapego",
      "visão universal",
      "compaixão",
      "idealismo",
      "tolerância",
      "carisma",
      "responsabilidade social",
      "fé",
      "esperança",
      "expansão",
    ],

    diagnostico:
      "O número 9 amplia sua percepção para além dos interesses exclusivamente pessoais. Existe uma energia emocional intensa e uma tendência a perceber necessidades coletivas, causas, pessoas ou projetos que possam receber sua contribuição.",

    potencialidades: [
      "Generosidade.",
      "Visão ampla.",
      "Compaixão.",
      "Criatividade.",
      "Carisma.",
      "Capacidade de atingir muitas pessoas.",
      "Idealismo.",
      "Responsabilidade social.",
    ],

    pontosAtencao: [
      "Idealização excessiva.",
      "Ser facilmente influenciado.",
      "Altos e baixos emocionais.",
      "Sacrificar a vida pessoal por causas ou pessoas.",
      "Dificuldade de desapegar.",
      "Frustração quando a realidade não corresponde aos ideais.",
    ],

    atitudes:
      "Sua capacidade de ajudar precisa caminhar junto com discernimento. Nem toda causa precisa ser sua e nem toda pessoa pode ser salva por você.",

    trabalho:
      "Projetos sociais, arte, comunicação de massa, educação, atividades internacionais, cultura, terapias e trabalhos que produzam impacto coletivo podem favorecer esta vibração.",

    relacionamentos:
      "Você pode amar com muita intensidade e idealismo. É importante enxergar as pessoas como realmente são, evitando criar expectativas impossíveis de serem correspondidas.",

    reflexao: [
      "Estou ajudando porque posso ou porque me sinto responsável por todos?",
      "Consigo encerrar ciclos?",
      "Idealizo demais pessoas e situações?",
      "Minha sensibilidade está sendo transformada em algo construtivo?",
    ],

    orientacaoOscar:
      "Você pode tocar muitas vidas, mas não precisa carregar todas elas. Sua generosidade cresce quando aprende também a respeitar seus próprios limites.",
  },

  11: {
    numero: 11,

    titulo: "Intuição, Inspiração e Maestria",

    essencia:
      "O 11 é um número mestre ligado à inspiração, idealismo, intuição, percepção e capacidade de acessar dimensões mais sutis da experiência.",

    palavrasChave: [
      "intuição",
      "inspiração",
      "idealismo",
      "percepção",
      "sensibilidade",
      "revelação",
      "originalidade",
      "altruísmo",
      "equilíbrio",
      "visão",
      "força interior",
    ],

    diagnostico:
      "Ter o 11 em uma posição importante do mapa indica uma vibração de grande sensibilidade e percepção. Muitas vezes você sente ou percebe algo antes de conseguir explicar racionalmente. É uma energia que pode inspirar pessoas quando encontra direção e equilíbrio.",

    potencialidades: [
      "Intuição desenvolvida.",
      "Inspiração.",
      "Carisma.",
      "Percepção diferenciada.",
      "Originalidade.",
      "Capacidade de orientar.",
      "Idealismo.",
      "Força inspiradora.",
    ],

    pontosAtencao: [
      "Insegurança.",
      "Oscilações emocionais.",
      "Renunciar ao próprio poder.",
      "Dependência.",
      "Dificuldade em transformar inspiração em ação.",
      "Sentir-se diferente ou incompreendido.",
    ],

    atitudes:
      "O desafio do 11 é confiar na própria percepção sem abandonar a realidade. Intuição precisa encontrar estrutura para produzir resultados.",

    trabalho:
      "Atividades criativas, terapêuticas, educacionais, artísticas, de aconselhamento ou que permitam inspirar e orientar pessoas podem favorecer esta energia.",

    relacionamentos:
      "Sua sensibilidade pode fazer com que perceba intensamente o ambiente emocional. É fundamental estabelecer limites e não absorver tudo o que acontece ao redor.",

    reflexao: [
      "Confio naquilo que percebo?",
      "Estou transformando inspiração em realização?",
      "Tenho renunciado à minha força para manter relações?",
      "Consigo diferenciar intuição de ansiedade ou expectativa?",
    ],

    orientacaoOscar:
      "O 11 não pede que você seja perfeito. Pede que aprenda a reconhecer sua percepção e tenha coragem para transformá-la em algo útil e concreto.",
  },

  22: {
    numero: 22,

    titulo: "Grande Construção, Visão e Realização",

    essencia:
      "O 22 é um número mestre de construção, inspiração e realização em grande escala. Está relacionado à capacidade de superar limites e transformar grandes ideias em estruturas duradouras.",

    palavrasChave: [
      "construção",
      "superação",
      "conquista",
      "grandes projetos",
      "organizações",
      "grandes negócios",
      "missão",
      "realização",
      "determinação",
      "precisão",
      "maestria",
      "liderança",
      "coletividade",
    ],

    diagnostico:
      "Quando o 22 aparece com força, encontro uma energia que pode pensar grande. Existe potencial para construir algo que ultrapasse interesses exclusivamente pessoais e alcance grupos, organizações ou projetos de maior dimensão.",

    potencialidades: [
      "Visão de grande escala.",
      "Capacidade de construção.",
      "Determinação.",
      "Resistência.",
      "Habilidade para grandes projetos.",
      "Capacidade de organização.",
      "Contato com estruturas de poder.",
      "Potencial para deixar um legado.",
    ],

    pontosAtencao: [
      "Pressão excessiva sobre si mesmo.",
      "Instabilidade diante de grandes expectativas.",
      "Perfeccionismo.",
      "Medo de assumir a própria dimensão.",
      "Ficar preso ao passado ou às estruturas.",
      "Transformar grandes sonhos em simples rotina.",
    ],

    atitudes:
      "O 22 precisa unir visão e execução. Sonhar grande não basta; é necessário organizar etapas, respeitar processos e transformar inspiração em construção.",

    trabalho:
      "Grandes organizações, empreendedorismo, administração, projetos internacionais, engenharia, sistemas, gestão e iniciativas de impacto coletivo podem expressar esta vibração.",

    relacionamentos:
      "Sua intensidade e foco em grandes objetivos podem ocupar muito espaço. É importante não transformar relacionamentos em mais um projeto a ser administrado.",

    reflexao: [
      "Estou permitindo que meus projetos tenham a dimensão que realmente podem alcançar?",
      "Transformo minhas ideias em estruturas concretas?",
      "Meu perfeccionismo está atrasando minhas realizações?",
      "O que estou construindo que poderá permanecer depois de mim?",
    ],

    orientacaoOscar:
      "O 22 traz a possibilidade de construir algo maior do que você imaginava. Mas toda grande obra começa com uma decisão concreta e um primeiro passo bem executado.",
  },
};

/*
 * FUNÇÃO CENTRAL
 *
 * Permite que qualquer capítulo do futuro mapa
 * solicite automaticamente a interpretação de um número.
 */
export function obterTextoMapa(
  numero: NumeroMapa
): InterpretacaoNumeroMapa {
  return mapaNumerologicoTextos[numero];
}

/*
 * Verifica se um valor calculado possui interpretação
 * dentro da biblioteca oficial.
 */
export function possuiTextoMapa(
  numero: number
): numero is NumeroMapa {
  return numero in mapaNumerologicoTextos;
}