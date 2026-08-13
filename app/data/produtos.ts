export type Produto = {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  precoOriginal?: number;
  destaque?: string;
  checkoutUrl: string;
  codigoPromocional?: string;
  tipoCheckout: "infinitepay" | "whatsapp";
};

const catalogoWhatsApp = "https://wa.me/c/555180339532";

export const produtos: Produto[] = [
  {
    id: "mapa-casal",
    titulo: "Mapa Numerológico do Casal",
    descricao:
      "Imagine desvendar os mistérios da sua relação, compreendendo as forças que impulsionam o casal e os desafios que podem surgir. A Numerologia do Casal com Oscar Ahumada ajuda a aprofundar a conexão, fortalecer o vínculo e compreender melhor a dinâmica da vida a dois.",
    preco: 1600,
    destaque: "Relacionamentos",
    checkoutUrl: catalogoWhatsApp,
    tipoCheckout: "whatsapp",
  },

  {
    id: "mapa-pessoal-com-consulta",
    titulo: "Mapa Numerológico Pessoal 2026 e 2027 + Consulta Online",
    descricao:
      "Você recebe seu Mapa Numerológico Pessoal completo em texto, incluindo as previsões para 2026 e 2027, acompanhado de consulta online. Uma oportunidade de aprofundar o autoconhecimento e compreender melhor tudo o que está acontecendo em sua vida.",
    preco: 800,
    destaque: "Mapa completo + consulta",
    checkoutUrl: catalogoWhatsApp,
    tipoCheckout: "whatsapp",
  },

  {
    id: "mapa-pessoal-sem-consulta",
    titulo: "Mapa Numerológico Pessoal 2026 e 2027 sem Consulta",
    descricao:
      "Você recebe seu Mapa Numerológico Pessoal completo em texto, sem consulta online, para estudar seus números, ciclos, características e previsões de 2026 e 2027 no seu próprio ritmo.",
    preco: 395,
    destaque: "Mapa completo em texto",
    checkoutUrl: catalogoWhatsApp,
    tipoCheckout: "whatsapp",
  },

  {
    id: "coaching",
    titulo: "Processo de Coaching — 10 Sessões",
    descricao:
      "Um processo estruturado em 10 sessões com Oscar Ahumada baseado nos 7 Passos para o Sucesso: observar e observar-se, tomar consciência, determinar, focar em uma meta, manter o foco, concluir e alcançar o sucesso. Um trabalho voltado à consciência, disciplina, autoconhecimento e realização.",
    preco: 3500,
    destaque: "10 sessões",
    checkoutUrl: catalogoWhatsApp,
    tipoCheckout: "whatsapp",
  },

  {
    id: "curso-numerologia",
    titulo: "Curso de Numerologia Online",
    descricao:
      "Curso de Numerologia com aproximadamente 500 minutos de conteúdo, apostila e certificado. Uma oportunidade para conhecer profundamente o mundo dos números e compreender a energia vibracional utilizada na Numerologia.",
    preco: 1700,
    precoOriginal: 5300,
    destaque: "500 minutos + apostila + certificado",
    checkoutUrl:
      "https://link.infinitepay.io/oscar_jose_ahumada_/VC1D-6U5tChuc23-1700,00",
    codigoPromocional: "PROMO1700",
    tipoCheckout: "infinitepay",
  },

  {
    id: "mapa-empresarial-profissional",
    titulo: "Mapa Numerológico Empresarial ou Profissional",
    descricao:
      "Mapa Numerológico Empresarial ou Profissional em texto, vídeo e sessão online de 1 hora. Após a confirmação do pagamento, você recebe o estudo completo e, depois da leitura, é agendada a consulta online para aprofundar dúvidas e decisões.",
    preco: 800,
    precoOriginal: 1700,
    destaque: "Texto + vídeo + sessão online",
    checkoutUrl:
      "https://link.infinitepay.io/oscar_jose_ahumada_/VC1D-oGEWscgV3-800,00",
    codigoPromocional: "PROMO 50",
    tipoCheckout: "infinitepay",
  },

  {
    id: "nome-do-bebe",
    titulo: "Nome do Bebê",
    descricao:
      "Estudo numerológico para auxiliar na escolha do nome do bebê. A análise considera a compatibilidade do nome social com o nome completo, o destino e as energias que acompanharão a criança, ajudando os pais a fazerem uma escolha mais consciente e harmoniosa.",
    preco: 440,
    precoOriginal: 800,
    destaque: "Escolha consciente do nome",
    checkoutUrl:
      "https://link.infinitepay.io/oscar_jose_ahumada_/VC1D-1cWRrfa8rp-440,00",
    tipoCheckout: "infinitepay",
  },

  {
    id: "perfil-jovens",
    titulo: "Avaliação do Perfil Profissional e Comportamental para Jovens",
    descricao:
      "Avaliação destinada a jovens de 16 a 20 anos que desejam compreender habilidades, aptidões, pontos fortes, sombras e direcionamentos profissionais por meio da análise do nome social e do destino.",
    preco: 98,
    precoOriginal: 170,
    destaque: "Jovens de 16 a 20 anos",
    checkoutUrl:
      "https://link.infinitepay.io/oscar_jose_ahumada_/VC1D-2A1v1CZzG3-98,00",
    tipoCheckout: "infinitepay",
  },
];