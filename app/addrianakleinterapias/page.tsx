"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { calcularNomeSocial } from "../lib/numerologia";

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
    titulo: "A força de quem veio para iniciar e conduzir",
    abertura:
      "Seu Nome Social é regido pelo número 1. Essa vibração está ligada à iniciativa, independência, liderança e capacidade de abrir caminhos. Existe em você uma tendência natural a tomar decisões, assumir responsabilidades e buscar autonomia para conduzir a própria vida.",
    manifestacao:
      "Quando essa força está bem direcionada, você demonstra determinação, coragem, criatividade e capacidade de transformar ideias em ação. Normalmente não gosta de depender excessivamente das decisões dos outros e pode sentir necessidade de ter liberdade para fazer as coisas do seu modo. O desafio aparece quando liderança se transforma em controle, quando a necessidade de independência dificulta receber ajuda ou quando você passa a carregar responsabilidades que poderiam ser divididas.",
    relacionamentos:
      "Nos relacionamentos, tende a valorizar admiração, respeito e autonomia. Pode assumir naturalmente a liderança da relação e desejar participar das decisões importantes. Entretanto, vínculos mais equilibrados surgem quando existe espaço para que as duas pessoas expressem suas vontades. Amar não significa comandar, assim como preservar sua independência não significa precisar fazer tudo sem apoio.",
    qualidades: [
      "Liderança",
      "Iniciativa",
      "Independência",
      "Determinação",
      "Criatividade",
      "Coragem",
      "Capacidade de decisão",
      "Espírito empreendedor",
      "Originalidade",
      "Força para abrir novos caminhos",
    ],
    atencao:
      "Observe o excesso de orgulho, impaciência, autoritarismo, dificuldade para ouvir opiniões diferentes e a tendência de querer resolver tudo sozinha. A mesma força que permite liderar também precisa aprender a reconhecer o momento de cooperar.",
    perguntas: [
      "O que independência significa verdadeiramente para mim?",
      "Consigo expressar meu ponto de vista sem precisar impor minha vontade?",
      "Tenho iniciativa para começar aquilo que realmente desejo?",
      "Por que determinadas situações me irritam quando não acontecem do meu jeito?",
      "Estou liderando as pessoas ou tentando controlá-las?",
    ],
    curiosidade:
      "Esta é a força revelada pelo seu Nome Social. Mas será que o seu Nome Completo, o seu Destino e o seu Pináculo confirmam essa independência — ou revelam um lado seu que ainda não apareceu aqui?",
  },

  2: {
    titulo: "A força da sensibilidade e das relações",
    abertura:
      "Seu Nome Social é regido pelo número 2. Essa vibração está ligada à união, cooperação, sensibilidade, diplomacia e capacidade de perceber as necessidades das pessoas ao seu redor. Você tende a compreender ambientes e emoções com facilidade e pode exercer uma influência muito maior através da delicadeza do que pela imposição.",
    manifestacao:
      "Existe uma forte necessidade de harmonia e pertencimento. Você pode ter facilidade para ouvir, aconselhar, aproximar pessoas e construir parcerias. Em alguns momentos, porém, a vontade de evitar conflitos ou de agradar pode fazer com que suas próprias necessidades fiquem em segundo plano. Quando acumula sentimentos por muito tempo, aquilo que parecia tranquilidade pode se transformar em irritação ou afastamento.",
    relacionamentos:
      "Os vínculos afetivos possuem grande importância para você. Existe desejo de cumplicidade, parceria, carinho e reciprocidade. O principal aprendizado está em amar sem se anular. Quando existe medo de rejeição ou de perder alguém, você pode aceitar situações que normalmente não aceitaria. Relações saudáveis exigem afeto, mas também limites e identidade própria.",
    qualidades: [
      "Sensibilidade",
      "Diplomacia",
      "Cooperação",
      "Empatia",
      "Capacidade de ouvir",
      "Intuição",
      "Delicadeza",
      "Parceria",
      "Conciliação",
      "Percepção emocional",
    ],
    atencao:
      "Observe a dependência emocional, a necessidade excessiva de aprovação, a dificuldade de dizer não, a ingenuidade diante das intenções dos outros e a tendência de guardar sentimentos para evitar conflitos.",
    perguntas: [
      "Até onde estou amando e a partir de onde estou apenas tentando não perder alguém?",
      "Consigo dizer não sem sentir culpa?",
      "Quanto da minha felicidade depende da aprovação das outras pessoas?",
      "Estou respeitando minhas necessidades dentro dos meus relacionamentos?",
      "Consigo manter minha identidade quando estou emocionalmente envolvida?",
    ],
    curiosidade:
      "Talvez você tenha se reconhecido profundamente nesta descrição. Mas também pode ter pensado: “sou assim, mas existe outro lado meu que não apareceu aqui”. É justamente aí que entram o Nome Completo, o Destino e o Pináculo.",
  },

  3: {
    titulo: "A força da comunicação, criatividade e expressão",
    abertura:
      "Seu Nome Social é regido pelo número 3. Essa vibração está ligada à comunicação, criatividade, expansão, sociabilidade e capacidade de transmitir ideias e emoções. Sua presença tende a ser percebida, e sua palavra, imagem ou maneira de se expressar pode abrir caminhos importantes.",
    manifestacao:
      "Você possui potencial para inspirar, comunicar, criar e aproximar pessoas. Existe uma energia que favorece entusiasmo, conhecimento, expressão artística e facilidade para encontrar novas possibilidades. O grande desafio é transformar entusiasmo em continuidade. Quando existem muitas ideias ao mesmo tempo, pode ocorrer dispersão, ansiedade por resultados ou abandono de algo antes que ele alcance todo o seu potencial.",
    relacionamentos:
      "Na vida afetiva, comunicação e admiração possuem grande importância. Você tende a buscar relações que tenham conversa, movimento, alegria e troca intelectual ou emocional. A rotina sem estímulos pode incomodar. Por isso, é importante compreender que profundidade não significa perder leveza e que estabilidade não precisa significar monotonia.",
    qualidades: [
      "Comunicação",
      "Criatividade",
      "Carisma",
      "Sociabilidade",
      "Otimismo",
      "Expressividade",
      "Imaginação",
      "Capacidade de inspirar",
      "Rapidez mental",
      "Talento para transmitir ideias",
    ],
    atencao:
      "Observe dispersão, superficialidade, excesso de compromissos, necessidade constante de reconhecimento, mudanças bruscas de entusiasmo e dificuldade para concluir aquilo que começou.",
    perguntas: [
      "Estou utilizando minha capacidade de comunicação a meu favor?",
      "Quantas ideias começo e quantas realmente termino?",
      "Preciso da aprovação das pessoas para reconhecer meu próprio valor?",
      "Estou expressando aquilo que sinto ou escondendo sentimentos atrás da alegria?",
      "Minha criatividade possui direção ou está espalhada em projetos demais?",
    ],
    curiosidade:
      "Seu Nome Social revela sua força de expressão. Mas será que o seu Nome Completo, o Destino e o Pináculo ampliam essa criatividade ou mostram uma personalidade muito mais reservada e estratégica?",
  },

  4: {
    titulo: "A força da estrutura, segurança e construção",
    abertura:
      "Seu Nome Social é regido pelo número 4. Essa vibração está ligada à estrutura, organização, trabalho, disciplina, estabilidade e capacidade de construir algo sólido. Você tende a precisar sentir que existe chão, método e continuidade naquilo que faz.",
    manifestacao:
      "Quando possui um objetivo claro, você pode demonstrar enorme persistência e capacidade de trabalho. Organização, responsabilidade e atenção aos detalhes ajudam a transformar planos em resultados concretos. Entretanto, a necessidade de segurança pode fazer com que mudanças sejam vistas inicialmente com desconfiança. O risco é transformar segurança em prisão e permanecer em situações apenas porque já são conhecidas.",
    relacionamentos:
      "Na vida afetiva, você tende a valorizar confiança, fidelidade, compromisso e continuidade. Normalmente prefere relações que possam ser construídas com tempo e consistência. Pode demonstrar amor mais através de atitudes do que de grandes declarações. O desafio é evitar que organização, expectativas ou necessidade de estabilidade se transformem em rigidez dentro da relação.",
    qualidades: [
      "Organização",
      "Disciplina",
      "Persistência",
      "Responsabilidade",
      "Lealdade",
      "Praticidade",
      "Capacidade de trabalho",
      "Estabilidade",
      "Método",
      "Construção de resultados duradouros",
    ],
    atencao:
      "Observe rigidez, teimosia, excesso de preocupação, dificuldade diante de mudanças, necessidade de controlar detalhes e tendência a permanecer presa ao passado ou a guardar ressentimentos.",
    perguntas: [
      "Estou construindo segurança ou criando limitações para mim?",
      "Como reajo quando alguma coisa foge do meu planejamento?",
      "Consigo mudar de direção quando percebo que algo não funciona mais?",
      "Minha organização facilita minha vida ou está me tornando rígido?",
      "O que tenho medo de perder quando preciso mudar?",
    ],
    curiosidade:
      "A estabilidade aparece com força no seu Nome Social. Agora imagine descobrir se o seu Nome Completo, o Destino e o Pináculo reforçam essa necessidade de segurança ou trazem números ligados à mudança, liberdade e novos caminhos.",
  },

  5: {
    titulo: "A força da liberdade, movimento e transformação",
    abertura:
      "Seu Nome Social é regido pelo número 5. Essa vibração está ligada à liberdade, movimento, mudanças, comunicação, versatilidade e necessidade de experimentar a vida. Existe uma tendência a aprender através das experiências e a buscar novos estímulos quando alguma coisa se torna previsível demais.",
    manifestacao:
      "Você pode apresentar grande capacidade de adaptação, rapidez, magnetismo e facilidade para lidar com situações inesperadas. Mudanças que assustariam outras pessoas podem despertar sua curiosidade. O desafio aparece quando a necessidade de novidade faz você perder interesse justamente naquilo que começou a dar resultado. Liberdade verdadeira não significa abandonar tudo; significa poder escolher conscientemente aquilo que deseja viver.",
    relacionamentos:
      "Na vida afetiva, atração, movimento, sensualidade e descoberta possuem importância. Você precisa sentir que existe vida dentro da relação. Controle excessivo tende a provocar afastamento. Ao mesmo tempo, é importante diferenciar liberdade de instabilidade e compreender que uma relação pode continuar interessante mesmo depois da fase inicial da conquista.",
    qualidades: [
      "Liberdade",
      "Versatilidade",
      "Magnetismo",
      "Comunicação",
      "Adaptabilidade",
      "Curiosidade",
      "Rapidez",
      "Coragem para mudanças",
      "Sensualidade",
      "Capacidade de enfrentar situações inesperadas",
    ],
    atencao:
      "Observe impulsividade, insatisfação constante, perda rápida de interesse, dificuldade com rotina, superficialidade, excessos e tendência a abandonar algo valioso apenas porque surgiu uma nova possibilidade.",
    perguntas: [
      "Estou buscando novas experiências porque quero crescer ou porque tenho dificuldade de valorizar aquilo que já conquistei?",
      "O que liberdade significa para mim?",
      "Consigo manter compromissos sem sentir que estou perdendo minha autonomia?",
      "Estou mudando porque é necessário ou apenas porque fiquei entediado?",
      "Quantas oportunidades já perdi por abandonar algo cedo demais?",
    ],
    curiosidade:
      "Seu Nome Social mostra uma forte necessidade de liberdade. Mas os outros números podem revelar justamente onde você busca estabilidade. Nome Completo, Destino e Pináculo podem mostrar esse contraste.",
  },

  6: {
    titulo: "A força do amor, cuidado e responsabilidade",
    abertura:
      "Seu Nome Social é regido pelo número 6. Essa vibração está ligada ao amor, família, responsabilidade, harmonia, beleza, cuidado e necessidade de sentir que sua presença faz diferença na vida das pessoas.",
    manifestacao:
      "Você tende a assumir responsabilidades com facilidade e pode se tornar uma referência para familiares, amigos ou pessoas próximas. Existe capacidade de acolher, aconselhar e criar ambientes de harmonia. Entretanto, justamente por perceber as necessidades dos outros, pode acabar carregando problemas que não são seus. Cuidar não significa assumir a vida de todos.",
    relacionamentos:
      "A vida amorosa costuma ocupar um espaço importante. Existe desejo de carinho, compromisso, reciprocidade, romantismo e construção de uma relação significativa. Porém, expectativas muito elevadas podem gerar frustração. A vida amorosa pode se tornar um espelho da maneira como você se ama: quanto maior seu equilíbrio interior, menor a necessidade de controlar ou exigir provas constantes de afeto.",
    qualidades: [
      "Afetividade",
      "Responsabilidade",
      "Lealdade",
      "Cuidado",
      "Generosidade",
      "Senso de família",
      "Harmonia",
      "Sensibilidade estética",
      "Capacidade de aconselhar",
      "Compromisso",
    ],
    atencao:
      "Observe perfeccionismo, cobranças excessivas, ciúme, controle, invasão do espaço das pessoas, excesso de responsabilidade e tendência a permanecer em determinadas relações por medo de rejeição ou solidão.",
    perguntas: [
      "Estou cuidando das pessoas ou assumindo responsabilidades que pertencem a elas?",
      "Consigo receber o mesmo cuidado que ofereço?",
      "Quanto minhas expectativas interferem nos meus relacionamentos?",
      "Estou permanecendo em alguma situação apenas por medo de ficar sozinha?",
      "Tenho dedicado a mim o mesmo amor que dedico aos outros?",
    ],
    curiosidade:
      "O Nome Social mostra como o amor e a responsabilidade aparecem na sua maneira de viver. Nome Completo, Destino e Pináculo podem revelar de onde vem essa necessidade — e quais outras forças precisam ser equilibradas.",
  },

  7: {
    titulo: "A força do conhecimento, profundidade e percepção",
    abertura:
      "Seu Nome Social é regido pelo número 7. Essa vibração está ligada ao pensamento, análise, conhecimento, investigação, intuição, espiritualidade e necessidade de compreender aquilo que existe além das aparências.",
    manifestacao:
      "Você tende a observar antes de agir e dificilmente se satisfaz com respostas superficiais. Existe capacidade para estudar, pesquisar, investigar e perceber detalhes que passam despercebidos para outras pessoas. O desafio surge quando a análise se torna excessiva e você permanece pensando sobre uma decisão durante tanto tempo que perde o momento de agir.",
    relacionamentos:
      "Você não procura apenas alguém para amar; precisa admirar, compreender e sentir que existe profundidade nessa conexão. Qualidade costuma ser mais importante do que quantidade, inclusive nas amizades. Pode precisar de momentos de recolhimento e silêncio, mas é importante não transformar essa necessidade em isolamento emocional.",
    qualidades: [
      "Inteligência analítica",
      "Intuição",
      "Profundidade",
      "Investigação",
      "Prudência",
      "Observação",
      "Espiritualidade",
      "Busca pelo conhecimento",
      "Capacidade de concentração",
      "Percepção",
    ],
    atencao:
      "Observe excesso de análise, isolamento, dificuldade para expressar sentimentos, intolerância com pensamentos superficiais e tendência a permanecer presa a preocupações ou pensamentos recorrentes. Em períodos de desequilíbrio, essa intensidade pode favorecer sentimentos de melancolia, angústia ou sobrecarga mental.",
    perguntas: [
      "Estou analisando para compreender ou para adiar uma decisão?",
      "Consigo compartilhar aquilo que sinto com as pessoas?",
      "Minha necessidade de ficar sozinha está me fortalecendo ou me isolando?",
      "Confio na minha percepção?",
      "Quanto espaço existe na minha vida para aquilo que não consigo explicar apenas pela razão?",
    ],
    curiosidade:
      "Seu Nome Social revela profundidade e análise. Mas talvez seu Nome Completo, Destino ou Pináculo tragam números extremamente comunicativos, materiais ou expansivos. É a combinação entre eles que começa a explicar suas aparentes contradições.",
  },

  8: {
    titulo: "A força da realização, poder e prosperidade",
    abertura:
      "Seu Nome Social é regido pelo número 8. Essa vibração está ligada à realização material, administração, autoridade, dinheiro, justiça, ambição e capacidade de transformar objetivos em resultados concretos.",
    manifestacao:
      "Existe potencial para assumir responsabilidades importantes, administrar recursos, enfrentar desafios e recuperar-se diante de dificuldades. Você tende a respeitar competência e pode sentir necessidade de conquistar independência material e reconhecimento pelo que realiza. O desafio é compreender que poder não significa controle. Quanto maior a capacidade de realização, maior também a necessidade de equilíbrio na maneira de exercê-la.",
    relacionamentos:
      "Na vida afetiva, você tende a valorizar segurança, lealdade, admiração e relações que tenham perspectivas de continuidade. Pode ser intenso e protetor, mas precisa observar possessividade ou necessidade de controlar decisões. Uma relação forte não é aquela em que uma pessoa domina; é aquela em que duas pessoas crescem juntas.",
    qualidades: [
      "Realização",
      "Administração",
      "Determinação",
      "Autoridade",
      "Praticidade",
      "Ambição",
      "Capacidade financeira",
      "Persistência",
      "Senso de justiça",
      "Poder de recuperação",
    ],
    atencao:
      "Observe autoritarismo, excesso de controle, possessividade, ciúme, necessidade de reconhecimento, dificuldade para ouvir opiniões diferentes e tendência a medir sucesso apenas através de resultados materiais ou posição social.",
    perguntas: [
      "Estou usando meu poder para construir minha vida ou para controlar aquilo que tenho medo de perder?",
      "O que sucesso significa verdadeiramente para mim?",
      "Consigo delegar responsabilidades?",
      "Como reajo quando alguém questiona minhas decisões?",
      "Minha ambição está servindo à minha vida ou minha vida está servindo apenas à ambição?",
    ],
    curiosidade:
      "O número 8 no Nome Social mostra uma poderosa relação com realização. Mas será que o seu Destino confirma essa força material? E o seu Pináculo indica que este é realmente o momento de expandir? Os outros números podem mudar completamente essa leitura.",
  },

  9: {
    titulo: "A força da sensibilidade, generosidade e visão humana",
    abertura:
      "Seu Nome Social é regido pelo número 9. Essa vibração está ligada à sensibilidade, solidariedade, idealismo, generosidade, magnetismo e capacidade de enxergar a vida através de uma perspectiva mais ampla.",
    manifestacao:
      "Existe tendência a perceber as necessidades das pessoas e a se envolver emocionalmente com aquilo em que acredita. Você pode possuir forte presença, energia, coragem e capacidade de tocar emocionalmente quem está ao seu redor. Entretanto, justamente por sentir intensamente, ambientes, pessoas e acontecimentos podem exercer grande influência sobre seu estado emocional.",
    relacionamentos:
      "No amor, existe tendência à intensidade e à idealização. Você pode imaginar uma conexão muito profunda e esperar encontrar alguém que corresponda a essa imagem. O aprendizado está em amar a pessoa real, e não apenas aquilo que ela poderia representar. Generosidade é uma qualidade, mas não deve significar viver permanentemente em função das necessidades dos outros.",
    qualidades: [
      "Generosidade",
      "Sensibilidade",
      "Solidariedade",
      "Idealismo",
      "Magnetismo",
      "Coragem",
      "Espiritualidade",
      "Visão ampla",
      "Humanitarismo",
      "Capacidade de inspirar pessoas",
    ],
    atencao:
      "Observe instabilidade emocional, idealização excessiva, dificuldade para estabelecer limites, perda de foco nos próprios objetivos, submissão e tendência a dedicar energia demais aos problemas ou expectativas das outras pessoas.",
    perguntas: [
      "Quanto da minha energia estou usando para construir a minha própria vida e quanto estou entregando às pessoas e situações ao meu redor?",
      "Estou ajudando porque realmente desejo ou porque sinto que preciso salvar alguém?",
      "Consigo estabelecer limites sem sentir culpa?",
      "Estou enxergando as pessoas como realmente são ou como gostaria que fossem?",
      "Quais sonhos meus estão esperando pela energia que tenho dedicado aos outros?",
    ],
    curiosidade:
      "Seu Nome Social revela uma energia ampla, sensível e humanitária. Nome Completo, Destino e Pináculo mostrarão se essa entrega é realmente uma das grandes forças da sua trajetória ou se existem outros objetivos pessoais pedindo espaço.",
  },

  11: {
    titulo: "A força da intuição, inspiração e influência",
    abertura:
      "Seu Nome Social é regido pelo número mestre 11. Na Numerologia Latina, essa é uma vibração de grande intensidade, associada à intuição, inspiração, magnetismo, percepção, comunicação e capacidade de influenciar pessoas.",
    manifestacao:
      "Você pode apresentar uma sensibilidade muito apurada para perceber ambientes, pessoas e situações antes mesmo de conseguir explicar racionalmente aquilo que sentiu. Existe potencial para inspirar, aconselhar, comunicar ideias e mobilizar pessoas. Essa intensidade, porém, também pode gerar excesso de responsabilidade, tensão e dificuldade para lidar com as próprias expectativas. Quando não confia na própria percepção, pode oscilar entre grande segurança e períodos de dúvida.",
    relacionamentos:
      "Na vida afetiva, tende a buscar cumplicidade, profundidade, troca emocional e identificação de ideias. Existe capacidade de demonstrar carinho e criar vínculos muito intensos. O ponto de atenção está em não transformar intensidade em dependência, nem utilizar seu magnetismo ou poder de influência para conduzir a relação apenas na direção que você considera correta.",
    qualidades: [
      "Intuição",
      "Inspiração",
      "Magnetismo",
      "Percepção",
      "Idealismo",
      "Originalidade",
      "Sensibilidade",
      "Comunicação",
      "Diplomacia",
      "Capacidade de influenciar",
      "Visão espiritual",
      "Capacidade de inspirar grupos",
    ],
    atencao:
      "Observe tensão, excesso de responsabilidade, necessidade de reconhecimento, dificuldade em aceitar posições secundárias, imposição de ideias e criação de vínculos de dependência. Sua sensibilidade para aquilo que não é imediatamente visível ou racional precisa ser acompanhada de equilíbrio e discernimento.",
    perguntas: [
      "Estou usando minha capacidade de influenciar para inspirar as pessoas ou para fazer com que elas sigam aquilo que considero certo?",
      "Consigo ouvir ideias diferentes das minhas?",
      "Sei desacelerar e confiar na minha percepção?",
      "Como utilizo meu magnetismo e minha capacidade de persuasão?",
      "Meus relacionamentos ajudam meu crescimento ou estão criando dependência?",
    ],
    curiosidade:
      "Essa força intuitiva aparece também no seu Nome Completo, no seu Destino e no seu Pináculo — ou esses números revelam uma personalidade muito mais prática do que seu Nome Social demonstra?",
  },

  22: {
    titulo: "A força de construir algo maior",
    abertura:
      "Seu Nome Social é regido pelo número mestre 22. O número 22 não deseja apenas realizar: deseja construir algo que permaneça. Essa vibração está associada à realização em grande escala, responsabilidade, organização, poder de materialização e capacidade de transformar grandes ideias em algo concreto.",
    manifestacao:
      "Existe potencial para trabalhar com projetos importantes, grupos, organizações, negócios ou realizações capazes de alcançar muitas pessoas. Você pode reunir visão, intuição, concentração e capacidade prática. Ao mesmo tempo, justamente por imaginar resultados grandiosos, pode exigir demais de si. Quando as expectativas se tornam excessivas, existe o risco de sobrecarga ou até de paralisar diante do tamanho daquilo que pretende realizar.",
    relacionamentos:
      "Na vida afetiva, tende a buscar profundidade, compromisso e construção. Pode desejar uma relação sólida, com objetivos em comum e sensação de futuro. Entretanto, responsabilidades profissionais e projetos pessoais podem ocupar tanto espaço que a vida afetiva acaba ficando em segundo plano. O aprendizado está em construir junto, ouvindo também as necessidades da outra pessoa.",
    qualidades: [
      "Grande capacidade de realização",
      "Construção",
      "Responsabilidade",
      "Determinação",
      "Organização",
      "Visão de longo prazo",
      "Liderança coletiva",
      "Intuição",
      "Poder de materialização",
      "Capacidade de administrar grandes projetos",
      "Persistência",
      "Busca por obras duradouras",
    ],
    atencao:
      "Observe exigência excessiva, autoritarismo, sobrecarga, rigidez, dificuldade diante da rejeição e necessidade de controlar resultados. Grandes objetivos precisam de estrutura, mas também de flexibilidade. Nem tudo precisa acontecer exatamente como você imaginou para possuir valor.",
    perguntas: [
      "Estou usando minha capacidade para construir algo maior ou estou exigindo tanto de mim que acabo adiando aquilo que poderia realizar?",
      "Qual realização merece verdadeiramente minha dedicação?",
      "Estou tentando construir algo duradouro ou apenas provar minha capacidade?",
      "Consigo compartilhar responsabilidades e ouvir outras pessoas?",
      "Aquilo que desejo realizar beneficia apenas minha vida ou pode deixar alguma contribuição para outras pessoas?",
    ],
    curiosidade:
      "O 22 é uma das vibrações mais intensas do Nome Social. Mas a verdadeira dimensão dessa força aparece quando observamos também seu Nome Completo, seu Destino e seu Pináculo. Eles podem confirmar essa capacidade de construção — ou mostrar exatamente onde ela precisa ser direcionada.",
  },
};


const LINK_CARTAO = "https://pay.infinitepay.io/oscar_jose_ahumada_/VC1D-gbTsONaWdT-395,00";
const CHAVE_PIX = "08677876863";

export default function AddrianaKleinTerapiasPage() {
  const [nome, setNome] = useState("");
  const [resultado, setResultado] = useState<ReturnType<typeof calcularNomeSocial> | null>(null);
  const [pixAberto, setPixAberto] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const resultadoRef = useRef<HTMLElement | null>(null);

  const interpretacao = resultado ? interpretacoes[resultado.revelacaoNomeSocial] : null;

  useEffect(() => {
    if (resultado) {
      const id = window.setTimeout(() => resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return () => window.clearTimeout(id);
    }
  }, [resultado]);

  function consultar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nomeLimpo = nome.trim();
    if (!nomeLimpo) return;
    setResultado(calcularNomeSocial(nomeLimpo));
    setPixAberto(false);
    setCopiado(false);
  }

  async function copiarPix() {
    try {
      await navigator.clipboard.writeText(CHAVE_PIX);
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f9f6f0] px-4 py-8 text-[#49352c] sm:py-12">
      <div className="mx-auto max-w-xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_55px_rgba(73,53,44,0.09)]">
          <Image src="/addriana-klein.png" alt="Addriana Klein — A verdadeira transformação começa de dentro para fora" width={504} height={759} priority sizes="(max-width: 640px) 100vw, 576px" className="h-auto w-full" />
          <div className="px-5 pb-8 pt-7 sm:px-10">
            <form onSubmit={consultar} className="space-y-4">
              <label htmlFor="nome-social" className="block text-center font-serif text-2xl leading-snug">Descubra o poder do seu nome</label>
              <input id="nome-social" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome social. Ex.: Maria" aria-label="Digite seu nome social" required autoComplete="given-name" className="w-full rounded-xl border border-[#d8c7b7] bg-[#fffdfa] px-4 py-4 text-base outline-none focus:border-[#a77d55] focus:ring-2 focus:ring-[#a77d55]/20" />
              <button type="submit" className="w-full rounded-xl bg-[#815c43] px-5 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#65432f]">Revelar o poder do meu nome</button>
            </form>
          </div>
        </div>

        {resultado && (
          <section ref={resultadoRef} aria-live="polite" className="mt-6 scroll-mt-5 rounded-3xl bg-white px-5 py-8 shadow-[0_12px_55px_rgba(73,53,44,0.09)] sm:px-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#98714f]">Sua revelação numerológica</p>
            <h1 className="mt-3 break-words text-center font-serif text-3xl">{resultado.nomeNormalizado}</h1>
            <p className="mt-3 text-center text-4xl font-semibold text-[#98714f]">{resultado.revelacaoNomeSocial}</p>
            {resultado.numeroMestre && <p className="mt-1 text-center text-sm">Número mestre</p>}
            {interpretacao ? (
              <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#594a41]">
                <h2 className="font-serif text-2xl leading-snug text-[#49352c]">{interpretacao.titulo}</h2>
                <p>{interpretacao.abertura}</p>
                <p>{interpretacao.manifestacao}</p>
                <p>{interpretacao.relacionamentos}</p>
                <p><strong className="text-[#49352c]">Seus talentos:</strong> {interpretacao.qualidades.join(", ")}.</p>
                <p><strong className="text-[#49352c]">Pontos de atenção:</strong> {interpretacao.atencao}</p>
                <p className="border-t border-[#eee3d7] pt-5 italic">{interpretacao.curiosidade}</p>
              </div>
            ) : (
              <p className="mt-6 text-center">Seu número foi calculado. Para uma interpretação aprofundada, conheça o Mapa Numerológico Pessoal Completo.</p>
            )}

            <div className="mt-8 border-t border-[#e9ddd0] pt-8 text-center">
              <h2 className="font-serif text-2xl leading-snug">Seu nome é apenas o começo</h2>
              <p className="mt-3 text-sm leading-6">Mapa Numerológico Pessoal Completo com consulta online individual com Oscar Ahumada.</p>
              <p className="mt-5 text-sm">De <span className="line-through">R$ 530,00</span> por</p>
              <p className="mt-1 text-4xl font-bold text-[#815c43]">R$ 395,00</p>
              <p className="mt-2 text-sm">Condição especial da parceria Addriana Klein</p>
              <div className="mt-6 space-y-3">
                <a href={LINK_CARTAO} target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl bg-[#815c43] px-5 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#65432f]">Pagar com cartão</a>
                <button type="button" onClick={() => setPixAberto((v) => !v)} aria-expanded={pixAberto} className="w-full rounded-xl border border-[#815c43] px-5 py-4 text-sm font-bold uppercase tracking-wide text-[#815c43] hover:bg-[#fbf5ef]">Pagar com Pix</button>
              </div>
              {pixAberto && (
                <div className="mt-4 rounded-xl bg-[#faf5ee] p-5 text-left text-sm leading-7">
                  <p><strong>Valor:</strong> R$ 395,00</p>
                  <p><strong>Chave Pix (CPF):</strong> {CHAVE_PIX}</p>
                  <p><strong>Favorecido:</strong> Oscar José Ahumada</p>
                  <p><strong>Banco informado:</strong> Wise</p>
                  <button type="button" onClick={copiarPix} className="mt-3 w-full rounded-lg bg-[#815c43] px-4 py-3 font-semibold text-white">{copiado ? "Chave copiada" : "Copiar chave Pix"}</button>
                  <p className="mt-3 text-xs">Confira o favorecido exibido no aplicativo bancário antes de confirmar. A confirmação do pagamento é manual.</p>
                </div>
              )}
              <p className="mt-6 text-xs leading-5 text-[#77685f]">Entrega em até 48 horas após a confirmação do pagamento e o recebimento dos dados necessários.</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
