"use client";

import { useEffect, useRef, useState } from "react";
import { calcularNomeSocial } from "../lib/numerologia";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, string | number | boolean>
    ) => void;
  }
}

type InterpretacaoSocial = {
  titulo: string;
  abertura: string;
  manifestacao: string;
  relacionamentos: string;
  qualidades: string[];
  atencao: string;
  perguntas: string[];
  curiosidade: string;
};

const interpretacoes: Record<number, InterpretacaoSocial> = {
  1: {
    titulo: "Um nome que projeta liderança, iniciativa e autoridade",
    abertura: "Seu Nome Profissional é regido pelo número 1. Essa vibração favorece uma imagem de independência, liderança, pioneirismo e capacidade de decisão. É um nome que tende a transmitir força pessoal e a ideia de alguém que prefere abrir caminhos em vez de apenas seguir modelos já estabelecidos.",
    manifestacao: "No campo profissional, o 1 favorece empreendedorismo, autonomia, comando, inovação e atividades nas quais a pessoa precisa assumir a frente. Pode fortalecer uma marca pessoal quando existe clareza de posicionamento. O desafio surge quando a força do nome transmite individualismo, autoritarismo ou dificuldade de trabalhar em parceria.",
    relacionamentos: "Na relação com clientes, equipes e parceiros, esse nome tende a funcionar melhor quando você demonstra segurança sem transformar liderança em imposição. Pessoas podem procurar você esperando decisão, direção e iniciativa. A reputação cresce quando autoridade e capacidade de ouvir caminham juntas.",
    qualidades: ["Liderança", "Iniciativa", "Autoridade", "Independência", "Originalidade", "Decisão", "Empreendedorismo", "Coragem", "Inovação", "Pioneirismo"],
    atencao: "Observe se o nome está projetando confiança ou dureza excessiva. Impaciência, centralização, orgulho profissional e dificuldade de delegar podem reduzir o potencial dessa vibração. O 1 cresce quando lidera com identidade própria, mas reconhece o valor das alianças.",
    perguntas: ["Meu nome profissional transmite claramente aquilo que eu lidero?", "Minha imagem profissional demonstra confiança ou pode parecer autoritária?", "Estou ocupando uma posição de protagonismo compatível com essa vibração?", "Tenho uma identidade profissional própria ou ainda imito demais o mercado?", "Se alguém ouvir meu nome hoje, saberá pelo que desejo ser reconhecido?"],
    curiosidade: "Um Nome Profissional 1 pode favorecer protagonismo, mas o resultado não depende de um único número. A análise completa verifica se essa vibração combina com sua atividade, seus objetivos e os demais números que formam sua identidade profissional.",
  },
  2: {
    titulo: "Um nome que projeta parceria, diplomacia e confiança",
    abertura: "Seu Nome Profissional é regido pelo número 2. Essa vibração favorece cooperação, sensibilidade, diplomacia, atendimento e capacidade de criar vínculos. É um nome que tende a transmitir proximidade e pode funcionar especialmente bem em atividades nas quais confiança e relacionamento são fundamentais.",
    manifestacao: "Profissionalmente, o 2 favorece sociedades, negociações, mediação, atendimento personalizado, aconselhamento e trabalhos realizados em parceria. Sua força não está em dominar o ambiente, mas em perceber pessoas e construir pontes. O desafio é não deixar que discrição ou necessidade de aprovação enfraqueçam seu posicionamento.",
    relacionamentos: "Clientes e parceiros podem perceber nesse nome acolhimento, disponibilidade e facilidade de diálogo. Isso pode ser valioso para fidelização. Porém, relações profissionais saudáveis também exigem limites, preço bem definido e capacidade de dizer não quando necessário.",
    qualidades: ["Diplomacia", "Parceria", "Confiança", "Cooperação", "Sensibilidade", "Escuta", "Negociação", "Conciliação", "Atendimento", "Relacionamento"],
    atencao: "Observe indecisão, excesso de concessões, dificuldade de cobrar, medo de desagradar e dependência da aprovação do público. Um nome 2 ganha força quando transforma sensibilidade em estratégia de relacionamento sem perder firmeza profissional.",
    perguntas: ["Minha imagem profissional transmite confiança?", "Sei criar parcerias sem depender delas para avançar?", "Tenho dificuldade de cobrar o valor justo pelo meu trabalho?", "Meu posicionamento é claro mesmo quando preciso contrariar alguém?", "Estou usando minha capacidade de relacionamento para gerar oportunidades?"],
    curiosidade: "O 2 pode ser excelente para profissões baseadas em confiança e relacionamento. A análise numerológica profissional mostra se essa diplomacia está alinhada ao tipo de autoridade que você precisa construir no mercado.",
  },
  3: {
    titulo: "Um nome que projeta comunicação, criatividade e visibilidade",
    abertura: "Seu Nome Profissional é regido pelo número 3. Essa vibração favorece comunicação, criatividade, sociabilidade, expressão e capacidade de chamar atenção. É um nome com potencial para circular, ser comentado e ganhar visibilidade quando existe uma mensagem clara por trás dele.",
    manifestacao: "No trabalho, o 3 favorece marketing, vendas, mídia, artes, ensino, palestras, produção de conteúdo e atividades que dependem da palavra ou da imagem. Pode aumentar o poder de divulgação de uma marca pessoal. O desafio é evitar dispersão, excesso de ideias e comunicação sem estratégia.",
    relacionamentos: "Na relação com o público, esse nome tende a criar aproximação através de carisma, leveza e boa comunicação. Clientes precisam, porém, perceber conteúdo além da simpatia. Quando expressão e competência aparecem juntas, a vibração se torna muito mais comercial.",
    qualidades: ["Comunicação", "Criatividade", "Carisma", "Visibilidade", "Expressão", "Sociabilidade", "Marketing", "Persuasão", "Imaginação", "Divulgação"],
    atencao: "Observe dispersão, promessas demais, projetos inacabados e necessidade excessiva de reconhecimento. O 3 precisa transformar atenção em reputação e criatividade em resultado.",
    perguntas: ["Minha comunicação deixa claro o valor do que faço?", "Estou aparecendo para o público certo?", "Minha imagem profissional transmite conteúdo além de simpatia?", "Tenho constância na divulgação do meu trabalho?", "Minha criatividade está gerando resultados ou apenas novas ideias?"],
    curiosidade: "Um Nome Profissional 3 pode ter grande potencial de comunicação. A questão estratégica é descobrir se essa visibilidade está atraindo o público que realmente interessa ao seu trabalho.",
  },
  4: {
    titulo: "Um nome que projeta estrutura, confiança e profissionalismo",
    abertura: "Seu Nome Profissional é regido pelo número 4. Essa vibração favorece organização, disciplina, estabilidade, método e construção de credibilidade. É um nome que tende a transmitir seriedade e a ideia de alguém capaz de entregar aquilo que promete.",
    manifestacao: "Profissionalmente, o 4 favorece gestão, administração, áreas técnicas, engenharia, imóveis, finanças, processos e atividades que exigem precisão e continuidade. Pode ajudar a construir reputação sólida. O desafio aparece quando excesso de rigidez dificulta inovação e adaptação.",
    relacionamentos: "Clientes e parceiros podem esperar pontualidade, segurança e consistência de quem utiliza esse nome. A confiança tende a ser construída pela entrega. É importante, porém, evitar uma comunicação excessivamente fria ou burocrática.",
    qualidades: ["Organização", "Disciplina", "Credibilidade", "Método", "Estabilidade", "Responsabilidade", "Precisão", "Persistência", "Segurança", "Construção"],
    atencao: "Observe rigidez, resistência a mudanças, excesso de controle e comunicação conservadora demais. O 4 prospera quando mantém estrutura sem impedir evolução.",
    perguntas: ["Meu nome transmite profissionalismo e segurança?", "Minha organização está ajudando meu crescimento?", "Estou atualizando minha imagem conforme o mercado muda?", "As pessoas sabem exatamente o que podem esperar do meu trabalho?", "Tenho processos que sustentam meu crescimento profissional?"],
    curiosidade: "O 4 pode construir uma marca extremamente confiável. A análise completa mostra se essa estabilidade fortalece seu segmento ou se seu mercado exige uma vibração mais dinâmica.",
  },
  5: {
    titulo: "Um nome que projeta movimento, magnetismo e oportunidades",
    abertura: "Seu Nome Profissional é regido pelo número 5. Essa vibração favorece comunicação, versatilidade, vendas, movimento, mudanças e expansão de contatos. É um nome que tende a transmitir dinamismo e pode abrir portas em mercados que exigem adaptação rápida.",
    manifestacao: "No campo profissional, o 5 favorece comércio, internet, publicidade, turismo, eventos, vendas, comunicação e atividades com variedade de pessoas e experiências. Pode gerar magnetismo comercial. O desafio é criar continuidade para que movimento não vire instabilidade.",
    relacionamentos: "Clientes podem perceber espontaneidade, rapidez e facilidade de comunicação. Esse nome favorece networking, mas confiança comercial exige que promessas sejam acompanhadas de entrega e constância.",
    qualidades: ["Magnetismo", "Versatilidade", "Vendas", "Comunicação", "Movimento", "Networking", "Adaptação", "Oportunidades", "Expansão", "Agilidade"],
    atencao: "Observe impulsividade, mudanças frequentes de direção, dificuldade de manter rotina e busca constante pelo próximo projeto. O 5 precisa de liberdade, mas também de estratégia.",
    perguntas: ["Meu nome profissional desperta curiosidade?", "Estou transformando contatos em oportunidades reais?", "Mudo de estratégia cedo demais?", "Minha comunicação comercial é clara?", "Tenho estrutura suficiente para sustentar meu crescimento?"],
    curiosidade: "O 5 pode aumentar circulação e alcance. A análise profissional verifica se esse movimento está trabalhando a favor da sua carreira ou dispersando energia e posicionamento.",
  },
  6: {
    titulo: "Um nome que projeta confiança, cuidado e excelência",
    abertura: "Seu Nome Profissional é regido pelo número 6. Essa vibração favorece responsabilidade, cuidado, beleza, harmonia, serviço e confiança. É um nome que pode criar forte percepção de acolhimento e compromisso com a qualidade.",
    manifestacao: "Profissionalmente, o 6 favorece saúde e bem-estar, terapias, estética, beleza, educação, gastronomia, decoração, atendimento e atividades ligadas ao cuidado. Pode fortalecer fidelização e indicação. O desafio é não assumir responsabilidades demais nem cobrar menos do que o trabalho vale.",
    relacionamentos: "O público tende a esperar atenção, disponibilidade e qualidade. Essa proximidade pode criar clientes muito fiéis. É essencial estabelecer limites para que cuidado não se transforme em disponibilidade ilimitada.",
    qualidades: ["Confiança", "Cuidado", "Responsabilidade", "Qualidade", "Harmonia", "Estética", "Fidelização", "Acolhimento", "Compromisso", "Serviço"],
    atencao: "Observe perfeccionismo, excesso de responsabilidade, dificuldade de cobrar e tentativa de atender a todas as expectativas. O 6 precisa compreender que valorizar o cliente não significa desvalorizar o próprio trabalho.",
    perguntas: ["Meu nome transmite confiança e qualidade?", "Estou cobrando de acordo com o valor que entrego?", "Meus clientes respeitam meus limites profissionais?", "Minha imagem demonstra cuidado sem perder autoridade?", "Estou construindo fidelização de forma saudável?"],
    curiosidade: "O 6 pode criar grande confiança entre profissional e público. A análise completa mostra como transformar essa capacidade de cuidar em posicionamento, reconhecimento e valorização.",
  },
  7: {
    titulo: "Um nome que projeta conhecimento, especialização e profundidade",
    abertura: "Seu Nome Profissional é regido pelo número 7. Essa vibração favorece estudo, análise, pesquisa, especialização, estratégia e profundidade. É um nome que pode transmitir conhecimento técnico e a imagem de alguém que não trabalha de maneira superficial.",
    manifestacao: "No campo profissional, o 7 favorece consultoria, pesquisa, tecnologia, ciência, terapias, espiritualidade, auditoria, investigação e trabalhos especializados. Pode construir autoridade pelo conhecimento. O desafio é tornar esse conhecimento compreensível e visível ao mercado.",
    relacionamentos: "Clientes podem procurar você justamente pela especialização. A confiança tende a surgir pela competência percebida. Entretanto, distanciamento excessivo ou comunicação técnica demais pode dificultar conexão com o público.",
    qualidades: ["Especialização", "Conhecimento", "Análise", "Estratégia", "Pesquisa", "Profundidade", "Intuição", "Precisão", "Autoridade técnica", "Investigação"],
    atencao: "Observe isolamento profissional, excesso de análise, dificuldade de divulgação e perfeccionismo antes de lançar projetos. Conhecimento que ninguém percebe dificilmente se transforma em posicionamento.",
    perguntas: ["O mercado reconhece minha especialização?", "Consigo explicar meu conhecimento de forma simples?", "Estou aparecendo o suficiente para o público?", "Uso análise para decidir ou para adiar?", "Minha autoridade profissional está visível?"],
    curiosidade: "O 7 pode formar uma imagem de especialista. A análise numerológica profissional ajuda a verificar se o nome comunica essa competência de maneira compatível com o mercado que você deseja alcançar.",
  },
  8: {
    titulo: "Um nome que projeta poder, negócios e realização material",
    abertura: "Seu Nome Profissional é regido pelo número 8. Essa vibração está diretamente associada à administração, poder de realização, negócios, autoridade, dinheiro e resultados concretos. É um nome que tende a transmitir força executiva e ambição profissional.",
    manifestacao: "No trabalho, o 8 favorece empreendedorismo, gestão, finanças, liderança empresarial, investimentos, imóveis e atividades orientadas a metas. Pode fortalecer percepção de autoridade e capacidade comercial. O desafio é equilibrar ambição, ética, relacionamento e qualidade de vida.",
    relacionamentos: "Clientes e parceiros podem esperar firmeza, eficiência e resultado. Negociações precisam ser conduzidas com clareza e justiça. Autoridade aumenta quando o profissional demonstra competência sem criar distância desnecessária.",
    qualidades: ["Prosperidade", "Negócios", "Autoridade", "Administração", "Realização", "Ambição", "Resultados", "Liderança", "Estratégia financeira", "Poder de decisão"],
    atencao: "Observe excesso de controle, competição, materialismo, centralização e necessidade de demonstrar poder. O 8 alcança sua melhor expressão quando resultado financeiro é consequência de competência, estratégia e equilíbrio.",
    perguntas: ["Meu nome profissional transmite autoridade?", "Minha relação com dinheiro está compatível com meus objetivos?", "Sei negociar e valorizar meu trabalho?", "Estou construindo patrimônio ou apenas faturamento?", "Minha ambição está acompanhada de estratégia?"],
    curiosidade: "O 8 possui forte associação com realização material, mas nenhum número garante prosperidade sozinho. A análise profissional observa se o nome, a atividade e os demais números trabalham na mesma direção.",
  },
  9: {
    titulo: "Um nome que projeta propósito, influência e alcance",
    abertura: "Seu Nome Profissional é regido pelo número 9. Essa vibração favorece visão ampla, sensibilidade, influência, propósito, criatividade e capacidade de alcançar públicos diversos. É um nome que pode ganhar força quando o trabalho possui uma mensagem maior do que a simples venda.",
    manifestacao: "Profissionalmente, o 9 favorece artes, comunicação, educação, terapias, causas sociais, projetos internacionais e trabalhos que impactam muitas pessoas. Pode gerar magnetismo e reconhecimento. O desafio é transformar idealismo em estrutura comercial sustentável.",
    relacionamentos: "O público pode criar identificação emocional com sua mensagem. Isso fortalece comunidade e reputação, mas é importante estabelecer limites e não tentar resolver gratuitamente todos os problemas das pessoas.",
    qualidades: ["Influência", "Propósito", "Magnetismo", "Visão ampla", "Criatividade", "Generosidade", "Comunicação", "Alcance", "Inspiração", "Humanitarismo"],
    atencao: "Observe idealização, dificuldade de cobrar, excesso de entrega, dispersão e envolvimento emocional com problemas de clientes. Propósito e prosperidade não precisam ser opostos.",
    perguntas: ["Meu trabalho possui uma mensagem clara?", "Estou alcançando as pessoas que realmente precisam do que faço?", "Consigo cobrar adequadamente sem sentir culpa?", "Minha generosidade possui limites profissionais?", "Meu propósito está sustentado por um modelo de negócio viável?"],
    curiosidade: "O 9 pode ampliar a influência de uma marca pessoal. A análise completa verifica como transformar propósito e magnetismo em reconhecimento profissional sustentável.",
  },
  11: {
    titulo: "Um nome mestre de inspiração, magnetismo e influência",
    abertura: "Seu Nome Profissional é regido pelo número mestre 11. Na Numerologia Latina, essa vibração está associada à inspiração, intuição, comunicação, magnetismo e capacidade de influenciar pessoas. É um nome que pode criar presença marcante quando existe uma mensagem profissional consistente.",
    manifestacao: "No trabalho, o 11 favorece liderança inspiradora, comunicação, aconselhamento, terapias, arte, inovação, ensino e atividades nas quais ideias mobilizam pessoas. Pode aumentar percepção de originalidade. Por ser uma vibração intensa, exige equilíbrio entre visão e execução.",
    relacionamentos: "Clientes e seguidores podem criar forte identificação com sua mensagem. Isso aumenta responsabilidade: influência profissional deve ser exercida com clareza, ética e limites.",
    qualidades: ["Inspiração", "Magnetismo", "Intuição", "Influência", "Comunicação", "Originalidade", "Visão", "Liderança inspiradora", "Sensibilidade", "Persuasão"],
    atencao: "Observe ansiedade por reconhecimento, excesso de expectativas, oscilação entre confiança e dúvida e dificuldade de transformar grandes ideias em ações consistentes. O 11 precisa de estrutura para que inspiração se transforme em resultado.",
    perguntas: ["Qual mensagem meu nome profissional transmite?", "Estou usando minha influência com responsabilidade?", "Minha visão está acompanhada de execução?", "Meu posicionamento é realmente original?", "As pessoas entendem claramente o valor do meu trabalho?"],
    curiosidade: "O 11 pode criar grande força de influência, mas números mestres exigem análise cuidadosa. É importante verificar se a atividade profissional oferece espaço para essa vibração ser realmente utilizada.",
  },
  22: {
    titulo: "Um nome mestre de construção, escala e grandes realizações",
    abertura: "Seu Nome Profissional é regido pelo número mestre 22. Essa vibração reúne visão e capacidade de materialização. É associada à construção de projetos relevantes, organização, liderança, responsabilidade e possibilidade de alcançar resultados em maior escala.",
    manifestacao: "Profissionalmente, o 22 favorece empresas, grandes projetos, gestão, instituições, liderança de equipes, expansão e atividades que exigem planejamento de longo prazo. O potencial está em transformar uma ideia grande em estrutura concreta. O desafio é não paralisar diante do tamanho das próprias expectativas.",
    relacionamentos: "Clientes, equipes e parceiros podem esperar capacidade de organização e direção. Para crescer em escala, porém, é indispensável delegar, formar alianças e criar processos que não dependam exclusivamente de uma pessoa.",
    qualidades: ["Grande realização", "Construção", "Escala", "Liderança", "Planejamento", "Materialização", "Organização", "Visão de longo prazo", "Gestão", "Legado"],
    atencao: "Observe sobrecarga, centralização, rigidez, exigência excessiva e medo de executar algo que ainda não esteja perfeito. O 22 precisa transformar grandeza em etapas concretas.",
    perguntas: ["Estou construindo algo que pode crescer além de mim?", "Tenho estrutura para sustentar o crescimento que desejo?", "Consigo delegar responsabilidades?", "Minha visão de longo prazo está dividida em ações concretas?", "O que desejo deixar construído através do meu trabalho?"],
    curiosidade: "O 22 pode favorecer construções profissionais de grande alcance, mas seu potencial depende de coerência com a atividade e com os demais números. É essa combinação que uma análise completa precisa investigar.",
  },
};

export default function NomeProfissionalPage() {
  const [nome, setNome] = useState("");
  const [resultado, setResultado] = useState<ReturnType<
    typeof calcularNomeSocial
  > | null>(null);
  const [mostrarOferta, setMostrarOferta] = useState(false);
  const resultadoRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!resultado) return;

    const timer = window.setTimeout(() => {
      resultadoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [resultado]);

  useEffect(() => {
    if (!resultado) {
      setMostrarOferta(false);
      return;
    }

    setMostrarOferta(false);

    const timer = window.setTimeout(() => {
      const agora = new Date();

      if (agora.getHours() < 22) {
        setMostrarOferta(true);
      }
    }, 40000);

    return () => window.clearTimeout(timer);
  }, [resultado]);

  function revelarNome() {
    const nomeLimpo = nome.trim();

    if (!nomeLimpo) {
      setResultado(null);
      return;
    }

    const novoResultado = calcularNomeSocial(nomeLimpo);
    setMostrarOferta(false);
    setResultado(novoResultado);

    window.gtag?.("event", "diagnostico_concluido", {
      tipo_diagnostico: "nome_profissional",
    });
  }

  function limparCalculo() {
    setNome("");
    setResultado(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const interpretacao = resultado
    ? interpretacoes[resultado.revelacaoNomeSocial] ?? null
    : null;

  function compartilharWhatsApp() {
    if (!resultado) return;

    const primeiroNome =
      resultado.nomeOriginal.trim().split(/\s+/)[0] ||
      resultado.nomeNormalizado;

    const mensagem = `Descobri o que meu nome revela através da Numerologia Latina de Oscar Ahumada.

Meu nome: ${primeiroNome}
Energia do Nome Profissional: ${resultado.revelacaoNomeSocial}${
      resultado.numeroMestre ? " — Número Mestre" : ""
    }

Analise também seu Nome Profissional:
https://www.oscarahumada.com.br/nomeprofissional`;

    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function compartilharNativo() {
    if (!resultado) return;

    const primeiroNome =
      resultado.nomeOriginal.trim().split(/\s+/)[0] ||
      resultado.nomeNormalizado;

    const texto = `Meu Nome Profissional revelou o número ${
      resultado.revelacaoNomeSocial
    }${
      resultado.numeroMestre ? " — Número Mestre" : ""
    }. Faça também a análise do seu Nome Profissional pela Numerologia Latina de Oscar Ahumada.`;

    const url = "https://www.oscarahumada.com.br/nomeprofissional";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Descubra a Energia do Seu Nome Profissional",
          text: `${primeiroNome}: ${texto}`,
          url,
        });
      } catch {
        // O usuário pode simplesmente cancelar o compartilhamento.
      }
    } else {
      compartilharWhatsApp();
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#faf4f6] via-[#fbf7f2] to-[#fbf7f2] px-4 py-8 text-[#3b071d] sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* HERO */}
        <section className="w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#3b071d] via-[#560d2b] to-[#741c42] px-5 py-6 text-white shadow-2xl sm:rounded-[36px] sm:px-10 sm:py-8 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f4d58d] sm:text-sm sm:tracking-[0.3em]">
              Método Oscar Ahumada
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Descubra a Energia do Seu Nome Profissional
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-blue-50/90 sm:mt-4 sm:text-lg sm:leading-8">
              Digite o nome que você usa ou pretende usar profissionalmente e descubra o
              que a Numerologia Latina revela sobre a energia que ele projeta no mercado.
            </p>

            <div className="mx-auto mt-5 max-w-2xl rounded-[24px] border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:mt-6 sm:rounded-[28px] sm:p-5">
              <label
                htmlFor="nome"
                className="block text-left text-sm font-semibold text-white"
              >
                Digite seu nome
              </label>

              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    revelarNome();
                  }
                }}
                placeholder="Ex.: Oscar"
                autoComplete="name"
                className="mt-3 w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-base text-[#3b071d] outline-none transition placeholder:text-slate-400 focus:border-[#f4d58d] focus:ring-4 focus:ring-[#f4d58d]/20 sm:text-lg"
              />

              <button
                type="button"
                onClick={revelarNome}
                className="mt-4 w-full rounded-full bg-[#e7bd68] px-6 py-4 text-sm font-bold uppercase tracking-[0.06em] text-[#3b071d] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#f3d58f] sm:px-8 sm:tracking-[0.08em]"
              >
                Analisar Meu Nome Profissional
              </button>
            </div>
          </div>
        </section>

        {resultado && (
          <section
            ref={resultadoRef}
            className="mt-7 scroll-mt-36 rounded-[26px] border border-[#e2cfad] bg-white p-5 shadow-xl sm:mt-10 sm:scroll-mt-40 sm:rounded-[32px] sm:p-10"
          >
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a87523] sm:text-sm sm:tracking-[0.25em]">
                Sua Revelação
              </p>

              <h2 className="mt-3 break-words text-3xl font-bold tracking-tight sm:text-4xl">
                {resultado.nomeOriginal}
              </h2>

              <div className="mt-6 inline-flex min-h-24 min-w-24 items-center justify-center rounded-full border border-[#c89a45]/50 bg-[#fbf1df] px-5 text-4xl font-bold text-[#a87523] shadow-inner sm:mt-7 sm:min-h-28 sm:min-w-28 sm:text-5xl">
                {resultado.revelacaoNomeSocial}
              </div>

              {resultado.numeroMestre && (
                <p className="mt-4 text-base font-bold uppercase tracking-[0.16em] text-[#a87523] sm:text-lg sm:tracking-[0.2em]">
                  Número Mestre {resultado.revelacaoNomeSocial}
                </p>
              )}
            </div>
            {/* INTERPRETAÇÃO */}
            {interpretacao && (
              <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ddc59e] bg-gradient-to-br from-[#fffaf7] to-[#f7ece7] shadow-lg">
                <div className="bg-[#3b071d] px-5 py-6 text-center text-white sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f4d58d]">
                    Numerologia Latina
                  </p>

                  <h3 className="mx-auto mt-3 max-w-3xl text-2xl font-semibold sm:text-3xl">
                    {interpretacao.titulo}
                  </h3>
                </div>

                <div className="px-5 py-8 sm:px-10 sm:py-10">
                  <div className="mx-auto max-w-3xl space-y-8">
                    <p className="text-base leading-8 text-[#55434b] sm:text-lg sm:leading-9">
                      {interpretacao.abertura}
                    </p>

                    <div>
                      <h4 className="text-xl font-bold text-[#3b071d]">
                        Como essa energia atua profissionalmente
                      </h4>
                      <p className="mt-3 text-base leading-8 text-[#55434b] sm:text-lg">
                        {interpretacao.manifestacao}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#3b071d]">
                        Clientes, público e parcerias
                      </h4>
                      <p className="mt-3 text-base leading-8 text-[#55434b] sm:text-lg">
                        {interpretacao.relacionamentos}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#3b071d]">
                        Forças profissionais deste nome
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {interpretacao.qualidades.map((qualidade) => (
                          <span
                            key={qualidade}
                            className="rounded-full border border-[#dcc49b] bg-white px-4 py-2 text-sm font-semibold text-[#3b071d]"
                          >
                            {qualidade}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-[#ead9ba] bg-white p-5 sm:p-6">
                      <h4 className="text-xl font-bold text-[#a87523]">
                        O que você deve observar
                      </h4>
                      <p className="mt-3 text-base leading-8 text-[#55434b]">
                        {interpretacao.atencao}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#3b071d]">
                        Perguntas estratégicas para você
                      </h4>

                      <div className="mt-4 space-y-3">
                        {interpretacao.perguntas.map((pergunta, index) => (
                          <div
                            key={pergunta}
                            className="flex items-start gap-4 rounded-[22px] border-2 border-[#c89a45] bg-[#fffaf5] p-5 shadow-md sm:p-6"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3b071d] text-lg font-extrabold text-[#f4d58d] shadow-sm">
                              {index + 1}
                            </span>
                            <p className="pt-1 text-lg font-extrabold leading-8 text-[#3b071d] sm:text-xl">
                              {pergunta}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] bg-[#f7edf1] p-6 text-center sm:p-8">
                      <p className="text-lg font-semibold leading-8 text-[#3b071d]">
                        {interpretacao.curiosidade}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* OS 4 NÚMEROS */}
            <div className="mt-8 rounded-[28px] border border-[#dcc49b] bg-[#fff9f1] p-6 sm:p-8">
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#a87523]">
                Seu nome profissional pode ser estratégico
              </p>

              <h3 className="mx-auto mt-4 max-w-3xl text-center text-2xl font-bold leading-tight text-[#3b071d] sm:text-3xl">
                O número do seu Nome Profissional mostra a energia que esse nome projeta.
                Mas uma decisão profissional não deve considerar apenas um número.
              </h3>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#a87523]">1. Nome Profissional</p>
                  <p className="mt-2 leading-7 text-[#74616a]">
                    Revela a energia do nome pelo qual você deseja ser reconhecido no mercado.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#a87523]">2. Nome Completo</p>
                  <p className="mt-2 leading-7 text-[#74616a]">
                    Mostra forças da sua identidade original que também influenciam sua trajetória.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#a87523]">3. Destino</p>
                  <p className="mt-2 leading-7 text-[#74616a]">
                    Ajuda a compreender tendências da sua trajetória e a direção dos seus objetivos.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#a87523]">4. Pináculo</p>
                  <p className="mt-2 leading-7 text-[#74616a]">
                    Ajuda a compreender os ciclos que podem influenciar decisões, expansão e mudanças.
                  </p>
                </div>
              </div>
            </div>

            {/* COMPARTILHAMENTO */}
            <div className="mt-8 rounded-[26px] border border-[#e4ccd7] bg-[#f7edf1] p-5 text-center sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#560d2b]">
                Seu nome profissional revelou algo importante?
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#3b071d] sm:text-2xl">
                Compartilhe e descubra o que o nome de alguém especial também
                revela.
              </h3>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={compartilharWhatsApp}
                  className="rounded-full bg-[#3b071d] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#560d2b]"
                >
                  Compartilhar no WhatsApp
                </button>

                <button
                  type="button"
                  onClick={compartilharNativo}
                  className="rounded-full border border-[#3b071d] px-7 py-4 text-sm font-bold text-[#3b071d] transition hover:bg-white"
                >
                  Compartilhar Minha Análise
                </button>

                <a
                  href="https://wa.me/5551980339532?text=Ol%C3%A1%2C%20Oscar.%20Fiz%20a%20an%C3%A1lise%20do%20Nome%20Profissional%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:brightness-95"
                >
                  Falar com Oscar no WhatsApp
                </a>
              </div>
            </div>

            {/* CTA FINAL */}
            <div className="mt-8 rounded-[26px] bg-gradient-to-r from-[#3b071d] to-[#560d2b] px-5 py-8 text-center text-white sm:mt-10 sm:rounded-[30px] sm:px-10 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4d58d] sm:text-sm">
                Seu Nome Profissional é apenas uma parte
              </p>

              <h3 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
                Descubra o que acontece quando os principais números da sua
                Numerologia são analisados em conjunto.
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                O Mapa Numerológico completo aprofunda as informações do seu
                nome e da sua data de nascimento, revelando forças, desafios,
                ciclos e tendências que não aparecem apenas no Nome Social.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/#servicos"
                  className="rounded-full bg-[#e7bd68] px-8 py-4 text-sm font-bold text-[#3b071d] transition hover:-translate-y-1 hover:bg-[#f3d58f]"
                >
                  Quero uma Análise Completa
                </a>

                <button
                  type="button"
                  onClick={limparCalculo}
                  className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Calcular Outro Nome
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    
      {mostrarOferta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2c0b1b]/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-oferta"
        >
          <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-[#d6ad63] bg-white p-5 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setMostrarOferta(false)}
              aria-label="Fechar oferta"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold text-[#3b071d] transition hover:bg-slate-50"
            >
              ×
            </button>

            <div className="pr-10 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a87523]">
                Super oferta para hoje
              </p>
              <p className="mt-2 inline-block rounded-full bg-[#fbecd0] px-4 py-2 text-sm font-bold text-[#8b5e18]">
                TERMINA HOJE ÀS 22:00
              </p>
            </div>

            <h2
              id="titulo-oferta"
              className="mx-auto mt-5 max-w-lg text-center text-2xl font-bold leading-tight text-[#3b071d] sm:text-3xl"
            >
              Você descobriu a vibração do seu Nome Profissional. Agora é possível aprofundar essa análise.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-[#74616a] sm:text-base">
              Conheça seu Mapa Numerológico Pessoal Completo, com a análise do
              Nome Social, Nome Completo, Destino, Pináculos e outras informações
              importantes da sua Numerologia.
            </p>

            <div className="mt-6 rounded-[24px] bg-[#3b071d] p-5 text-center text-white sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f4d58d]">
                Mapa completo + consulta online com Oscar Ahumada
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-blue-100">
                Condição especial de hoje
              </p>
              <p className="mt-1 text-4xl font-extrabold text-[#f4d58d]">
                10x de R$ 35,00
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-blue-100">
                Mapa Numerológico completo em texto + consulta online individual
                com Oscar Ahumada.
              </p>
              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-1avOg6eqCs-350,00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-full bg-[#e7bd68] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.04em] text-[#3b071d] transition hover:-translate-y-1 hover:bg-[#f3d58f]"
              >
                Quero meu mapa + consulta
              </a>
            </div>

            <div className="mt-4 rounded-[22px] border border-[#e2cfad] bg-[#fff9f1] p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a87523]">
                Prefere sem consulta?
              </p>
              <p className="mt-2 text-xl font-bold text-[#3b071d]">
                Mapa Numerológico Completo em Texto
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#a87523]">
                10x de R$ 17,00
              </p>
              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-GNIINzUFVO-170,00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-full border-2 border-[#3b071d] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-[#3b071d] transition hover:bg-[#3b071d] hover:text-white"
              >
                Quero somente o mapa
              </a>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-[#74616a]">
              Oferta especial disponível nesta página até às 22:00 de hoje.
            </p>
          </div>
        </div>
      )}

</main>
  );
}