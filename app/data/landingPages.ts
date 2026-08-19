export type CampoLandingConfig = {
  id: string;
  label: string;
  placeholder?: string;
  tipo?: "text" | "number" | "date" | "tel";
  obrigatorio?: boolean;
};

export type LandingPageConfig = {
  slug:
    | "casa"
    | "bebe"
    | "compatibilidade"
    | "empresa"
    | "nome-de-casada"
    | "nome-profissional";

  imagem: string;
  altImagem: string;

  titulo: string;
  subtitulo: string;

  campos: CampoLandingConfig[];

  textoAntesBotao: string;
  textoBotao: string;

  tituloPosDiagnostico: string;
  textoPosDiagnostico: string;

  textoBotaoOscar: string;
};

export const landingPagesConfig: Record<
  LandingPageConfig["slug"],
  LandingPageConfig
> = {
  casa: {
    slug: "casa",

    imagem: "/images/lp-casa.jpg",

    altImagem:
      "Casa elegante para diagnóstico numerológico residencial",

    titulo:
      "Descubra a energia da sua casa",

    subtitulo:
      "O número da sua residência pode revelar muito sobre a energia do ambiente onde você vive.",

    campos: [
      {
        id: "nome",
        label: "NOME",
        placeholder: "Digite seu nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "numeroCasa",
        label: "NÚMERO DA SUA RESIDÊNCIA",
        placeholder: "Ex.: 345",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "whatsapp",
        label: "SEU WHATSAPP",
        placeholder: "(00) 00000-0000",
        tipo: "tel",
        obrigatorio: true,
      },
    ],

    textoAntesBotao:
      "Receba seu diagnóstico personalizado por Oscar Ahumada e surpreenda-se com o que a energia da sua casa pode revelar.",

    textoBotao:
      "QUERO RECEBER MEU DIAGNÓSTICO",

    tituloPosDiagnostico:
      "Quer compreender melhor esta energia?",

    textoPosDiagnostico:
      "O número da residência revela apenas uma parte da vibração do imóvel. Uma análise personalizada pode mostrar como essa energia conversa com o momento dos moradores e com os objetivos da família.",

    textoBotaoOscar:
      "CONVERSAR COM OSCAR AHUMADA",
  },

  bebe: {
    slug: "bebe",

    imagem: "/images/lp-bebe.jpg",

    altImagem:
      "Bebê para análise numerológica de nome",

    titulo:
      "Descubra a energia do nome do seu bebê",

    subtitulo:
      "Antes de definir o nome, conheça a vibração numerológica que poderá acompanhar essa criança por toda a vida.",

    campos: [
      {
        id: "nome",
        label: "SEU NOME",
        placeholder: "Digite seu nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "nomeBebe",
        label: "NOME PENSADO PARA O BEBÊ",
        placeholder: "Digite o nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "whatsapp",
        label: "SEU WHATSAPP",
        placeholder: "(00) 00000-0000",
        tipo: "tel",
        obrigatorio: true,
      },
    ],

    textoAntesBotao:
      "Receba um diagnóstico inicial sobre a energia deste nome e descubra pontos que merecem atenção antes da escolha definitiva.",

    textoBotao:
      "QUERO VER A ENERGIA DESTE NOME",

    tituloPosDiagnostico:
      "Antes de registrar, vale aprofundar.",

    textoPosDiagnostico:
      "Uma escolha de nome pode envolver mais do que sonoridade e gosto pessoal. A análise completa ajuda a observar a vibração do nome e sua relação com a data de nascimento.",

    textoBotaoOscar:
      "CONVERSAR COM OSCAR AHUMADA",
  },

  compatibilidade: {
    slug: "compatibilidade",

    imagem: "/images/lp-compatibilidade.jpg",

    altImagem:
      "Casal para análise de compatibilidade numerológica",

    titulo:
      "Descubra a compatibilidade numerológica do casal",

    subtitulo:
      "Duas pessoas podem se amar profundamente e, ainda assim, viver energias muito diferentes.",

    campos: [
      {
        id: "nome",
        label: "SEU NOME",
        placeholder: "Digite seu nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "data1",
        label: "SUA DATA DE NASCIMENTO",
        tipo: "date",
        obrigatorio: true,
      },
      {
        id: "data2",
        label: "DATA DE NASCIMENTO DO PAR",
        tipo: "date",
        obrigatorio: true,
      },
      {
        id: "whatsapp",
        label: "SEU WHATSAPP",
        placeholder: "(00) 00000-0000",
        tipo: "tel",
        obrigatorio: true,
      },
    ],

    textoAntesBotao:
      "Receba um diagnóstico inicial da combinação entre as duas vibrações.",

    textoBotao:
      "QUERO VER NOSSA COMPATIBILIDADE",

    tituloPosDiagnostico:
      "Quer compreender a dinâmica entre vocês?",

    textoPosDiagnostico:
      "A compatibilidade não se resume a um único número. Uma análise completa permite compreender forças, desafios, afinidades e pontos de atenção dentro da relação.",

    textoBotaoOscar:
      "CONVERSAR COM OSCAR AHUMADA",
  },

  empresa: {
    slug: "empresa",

    imagem: "/images/lp-empresa.jpg",

    altImagem:
      "Empresa moderna para diagnóstico numerológico empresarial",

    titulo:
      "Descubra a energia do nome da sua empresa",

    subtitulo:
      "O nome empresarial pode reforçar posicionamento, movimento, expansão e percepção de mercado.",

    campos: [
      {
        id: "nome",
        label: "SEU NOME",
        placeholder: "Digite seu nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "nomeEmpresa",
        label: "NOME DA EMPRESA",
        placeholder: "Digite o nome da empresa",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "whatsapp",
        label: "SEU WHATSAPP",
        placeholder: "(00) 00000-0000",
        tipo: "tel",
        obrigatorio: true,
      },
    ],

    textoAntesBotao:
      "Receba um diagnóstico inicial da vibração do nome empresarial.",

    textoBotao:
      "QUERO ANALISAR MINHA EMPRESA",

    tituloPosDiagnostico:
      "Quer saber se essa energia combina com o objetivo do negócio?",

    textoPosDiagnostico:
      "Uma análise empresarial completa considera nome fantasia, razão social, data de início e outros elementos importantes para o posicionamento da empresa.",

    textoBotaoOscar:
      "CONVERSAR COM OSCAR AHUMADA",
  },

  "nome-de-casada": {
    slug: "nome-de-casada",

    imagem: "/images/lp-nome-casada.jpg",

    altImagem:
      "Noiva para análise numerológica de nome de casada",

    titulo:
      "Antes de mudar seu sobrenome, descubra a nova energia",

    subtitulo:
      "O casamento pode mudar o estado civil. O novo nome pode mudar também sua vibração numerológica.",

    campos: [
      {
        id: "nome",
        label: "SEU NOME",
        placeholder: "Digite seu nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "nomeAtual",
        label: "NOME ATUAL",
        placeholder: "Digite seu nome atual",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "nomeCasada",
        label: "NOME QUE PRETENDE USAR",
        placeholder: "Digite o futuro nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "whatsapp",
        label: "SEU WHATSAPP",
        placeholder: "(00) 00000-0000",
        tipo: "tel",
        obrigatorio: true,
      },
    ],

    textoAntesBotao:
      "Receba um diagnóstico inicial da mudança de vibração entre seu nome atual e o nome que pretende usar.",

    textoBotao:
      "QUERO COMPARAR OS DOIS NOMES",

    tituloPosDiagnostico:
      "Antes de definir o nome, vale analisar com profundidade.",

    textoPosDiagnostico:
      "A mudança de sobrenome pode alterar a vibração do nome completo. Uma análise personalizada ajuda a escolher conscientemente e também a definir o melhor momento para essa mudança.",

    textoBotaoOscar:
      "CONVERSAR COM OSCAR AHUMADA",
  },

  "nome-profissional": {
    slug: "nome-profissional",

    imagem: "/images/lp-nome-profissional.jpg",

    altImagem:
      "Profissional para análise numerológica de nome profissional",

    titulo:
      "Descubra a energia do seu nome profissional",

    subtitulo:
      "O nome pelo qual o mercado conhece você pode influenciar sua imagem, posicionamento e percepção profissional.",

    campos: [
      {
        id: "nome",
        label: "SEU NOME",
        placeholder: "Digite seu nome",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "nomeProfissional",
        label: "SEU NOME PROFISSIONAL",
        placeholder: "Digite o nome que utiliza",
        tipo: "text",
        obrigatorio: true,
      },
      {
        id: "whatsapp",
        label: "SEU WHATSAPP",
        placeholder: "(00) 00000-0000",
        tipo: "tel",
        obrigatorio: true,
      },
    ],

    textoAntesBotao:
      "Receba um diagnóstico inicial da vibração do nome que representa você profissionalmente.",

    textoBotao:
      "QUERO ANALISAR MEU NOME",

    tituloPosDiagnostico:
      "Quer saber se esse nome está alinhado com sua fase profissional?",

    textoPosDiagnostico:
      "Uma análise personalizada permite observar não apenas o número final, mas também como essa energia conversa com seu momento atual e com seus objetivos profissionais.",

    textoBotaoOscar:
      "CONVERSAR COM OSCAR AHUMADA",
  },
};