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
      "Observe o excesso de orgulho, impaciência, autoritarismo, dificuldade para ouvir opiniões diferentes e a tendência de querer resolver tudo sozinho. A mesma força que permite liderar também precisa aprender a reconhecer o momento de cooperar.",
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
      "Consigo manter minha identidade quando estou emocionalmente envolvido?",
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
      "Observe rigidez, teimosia, excesso de preocupação, dificuldade diante de mudanças, necessidade de controlar detalhes e tendência a permanecer preso ao passado ou a guardar ressentimentos.",
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
      "Estou permanecendo em alguma situação apenas por medo de ficar sozinho?",
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
      "Observe excesso de análise, isolamento, dificuldade para expressar sentimentos, intolerância com pensamentos superficiais e tendência a permanecer preso a preocupações ou pensamentos recorrentes. Em períodos de desequilíbrio, essa intensidade pode favorecer sentimentos de melancolia, angústia ou sobrecarga mental.",
    perguntas: [
      "Estou analisando para compreender ou para adiar uma decisão?",
      "Consigo compartilhar aquilo que sinto com as pessoas?",
      "Minha necessidade de ficar sozinho está me fortalecendo ou me isolando?",
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

export default function PoderDoNomePage() {
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
      tipo_diagnostico: "poder_do_nome",
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
Revelação do Nome Social: ${resultado.revelacaoNomeSocial}${
      resultado.numeroMestre ? " — Número Mestre" : ""
    }

Faça também a revelação do seu nome:
https://www.oscarahumada.com.br/poderdonome`;

    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function compartilharNativo() {
    if (!resultado) return;

    const primeiroNome =
      resultado.nomeOriginal.trim().split(/\s+/)[0] ||
      resultado.nomeNormalizado;

    const texto = `Meu Nome Social revelou o número ${
      resultado.revelacaoNomeSocial
    }${
      resultado.numeroMestre ? " — Número Mestre" : ""
    }. Faça também a revelação do seu nome pela Numerologia Latina de Oscar Ahumada.`;

    const url = "https://www.oscarahumada.com.br/poderdonome";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Descubra o Poder do Seu Nome",
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
    <main className="min-h-screen bg-gradient-to-b from-[#edf4fb] via-[#f7f3eb] to-[#f7f3eb] px-4 py-8 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        {/* HERO */}
        <section className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-5 py-6 text-white shadow-2xl sm:rounded-[36px] sm:px-10 sm:py-8 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f6cf68] sm:text-sm sm:tracking-[0.3em]">
              Método Oscar Ahumada
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Descubra o Poder do Seu Nome
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-blue-50/90 sm:mt-4 sm:text-lg sm:leading-8">
              Digite o nome pelo qual você é conhecido no dia a dia e descubra o
              que a Numerologia Latina revela sobre a vibração do seu Nome
              Social.
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
                className="mt-3 w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-base text-[#123d73] outline-none transition placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20 sm:text-lg"
              />

              <button
                type="button"
                onClick={revelarNome}
                className="mt-4 w-full rounded-full bg-[#f6c84f] px-6 py-4 text-sm font-bold uppercase tracking-[0.06em] text-[#123d73] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ffda70] sm:px-8 sm:tracking-[0.08em]"
              >
                Revelar o Poder do Meu Nome
              </button>
            </div>
          </div>
        </section>

        {resultado && (
          <section
            ref={resultadoRef}
            className="mt-7 scroll-mt-4 rounded-[26px] border border-[#dbcba9] bg-white p-5 shadow-xl sm:mt-10 sm:scroll-mt-6 sm:rounded-[32px] sm:p-10"
          >
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c29629] sm:text-sm sm:tracking-[0.25em]">
                Sua Revelação
              </p>

              <h2 className="mt-3 break-words text-3xl font-bold tracking-tight sm:text-4xl">
                {resultado.nomeNormalizado}
              </h2>

              <div className="mt-6 inline-flex min-h-24 min-w-24 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#faf5e7] px-5 text-4xl font-bold text-[#c29629] shadow-inner sm:mt-7 sm:min-h-28 sm:min-w-28 sm:text-5xl">
                {resultado.revelacaoNomeSocial}
              </div>

              {resultado.numeroMestre && (
                <p className="mt-4 text-base font-bold uppercase tracking-[0.16em] text-[#c29629] sm:text-lg sm:tracking-[0.2em]">
                  Número Mestre {resultado.revelacaoNomeSocial}
                </p>
              )}
            </div>
            {/* INTERPRETAÇÃO */}
            {interpretacao && (
              <div className="mt-8 overflow-hidden rounded-[28px] border border-[#d9c28d] bg-gradient-to-br from-[#fffdf8] to-[#f8f1e2] shadow-lg">
                <div className="bg-[#123d73] px-5 py-6 text-center text-white sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">
                    Numerologia Latina
                  </p>

                  <h3 className="mx-auto mt-3 max-w-3xl text-2xl font-semibold sm:text-3xl">
                    {interpretacao.titulo}
                  </h3>
                </div>

                <div className="px-5 py-8 sm:px-10 sm:py-10">
                  <div className="mx-auto max-w-3xl space-y-8">
                    <p className="text-base leading-8 text-[#334b68] sm:text-lg sm:leading-9">
                      {interpretacao.abertura}
                    </p>

                    <div>
                      <h4 className="text-xl font-bold text-[#123d73]">
                        Como essa energia se manifesta
                      </h4>
                      <p className="mt-3 text-base leading-8 text-[#334b68] sm:text-lg">
                        {interpretacao.manifestacao}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#123d73]">
                        Amor e relacionamentos
                      </h4>
                      <p className="mt-3 text-base leading-8 text-[#334b68] sm:text-lg">
                        {interpretacao.relacionamentos}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#123d73]">
                        Seus pontos de força
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {interpretacao.qualidades.map((qualidade) => (
                          <span
                            key={qualidade}
                            className="rounded-full border border-[#d8c18b] bg-white px-4 py-2 text-sm font-semibold text-[#123d73]"
                          >
                            {qualidade}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-[#e3d3ae] bg-white p-5 sm:p-6">
                      <h4 className="text-xl font-bold text-[#c29629]">
                        O que você deve observar
                      </h4>
                      <p className="mt-3 text-base leading-8 text-[#334b68]">
                        {interpretacao.atencao}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#123d73]">
                        Perguntas para sua reflexão
                      </h4>

                      <div className="mt-4 space-y-3">
                        {interpretacao.perguntas.map((pergunta, index) => (
                          <div
                            key={pergunta}
                            className="flex items-start gap-4 rounded-[22px] border-2 border-[#d4af37] bg-[#fffdf7] p-5 shadow-md sm:p-6"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123d73] text-lg font-extrabold text-[#f6cf68] shadow-sm">
                              {index + 1}
                            </span>
                            <p className="pt-1 text-lg font-extrabold leading-8 text-[#123d73] sm:text-xl">
                              {pergunta}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] bg-[#edf5fc] p-6 text-center sm:p-8">
                      <p className="text-lg font-semibold leading-8 text-[#123d73]">
                        {interpretacao.curiosidade}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* OS 4 NÚMEROS */}
            <div className="mt-8 rounded-[28px] border border-[#d8c18b] bg-[#fffaf0] p-6 sm:p-8">
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#c29629]">
                Existe muito mais para descobrir
              </p>

              <h3 className="mx-auto mt-4 max-w-3xl text-center text-2xl font-bold leading-tight text-[#123d73] sm:text-3xl">
                Você descobriu apenas 1 dos 4 números que revelam a força do seu
                nome e da sua trajetória.
              </h3>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#c29629]">1. Nome Social</p>
                  <p className="mt-2 leading-7 text-[#607089]">
                    Revela a vibração do nome pelo qual você é reconhecido e
                    chamado no dia a dia.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#c29629]">2. Nome Completo</p>
                  <p className="mt-2 leading-7 text-[#607089]">
                    Mostra outras forças presentes na identidade registrada no
                    seu nascimento.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#c29629]">3. Destino</p>
                  <p className="mt-2 leading-7 text-[#607089]">
                    Revela tendências importantes da trajetória construída a
                    partir da sua data de nascimento.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-bold text-[#c29629]">4. Pináculo</p>
                  <p className="mt-2 leading-7 text-[#607089]">
                    Ajuda a compreender os grandes ciclos e fases que acompanham
                    sua trajetória.
                  </p>
                </div>
              </div>
            </div>

            {/* COMPARTILHAMENTO */}
            <div className="mt-8 rounded-[26px] border border-[#cbd9e7] bg-[#edf5fc] p-5 text-center sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246aa7]">
                Seu nome revelou algo sobre você?
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#123d73] sm:text-2xl">
                Compartilhe e descubra o que o nome de alguém especial também
                revela.
              </h3>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={compartilharWhatsApp}
                  className="rounded-full bg-[#123d73] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
                >
                  Compartilhar no WhatsApp
                </button>

                <button
                  type="button"
                  onClick={compartilharNativo}
                  className="rounded-full border border-[#123d73] px-7 py-4 text-sm font-bold text-[#123d73] transition hover:bg-white"
                >
                  Compartilhar Minha Revelação
                </button>

                <a
                  href="https://wa.me/5551980339532?text=Ol%C3%A1%2C%20Oscar.%20Fiz%20a%20an%C3%A1lise%20do%20Poder%20do%20Nome%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:brightness-95"
                >
                  Falar com Oscar no WhatsApp
                </a>
              </div>
            </div>

            {/* CTA FINAL */}
            <div className="mt-8 rounded-[26px] bg-gradient-to-r from-[#123d73] to-[#1f629d] px-5 py-8 text-center text-white sm:mt-10 sm:rounded-[30px] sm:px-10 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6cf68] sm:text-sm">
                Seu Nome Social é apenas o começo
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
                  className="rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70]"
                >
                  Quero Descobrir Meu Mapa Completo
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07182d]/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-oferta"
        >
          <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-[#e2c46d] bg-white p-5 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setMostrarOferta(false)}
              aria-label="Fechar oferta"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold text-[#123d73] transition hover:bg-slate-50"
            >
              ×
            </button>

            <div className="pr-10 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c29629]">
                Super oferta para hoje
              </p>
              <p className="mt-2 inline-block rounded-full bg-[#fff3cc] px-4 py-2 text-sm font-bold text-[#9a6b00]">
                TERMINA HOJE ÀS 22:00
              </p>
            </div>

            <h2
              id="titulo-oferta"
              className="mx-auto mt-5 max-w-lg text-center text-2xl font-bold leading-tight text-[#123d73] sm:text-3xl"
            >
              Você descobriu apenas uma parte do que seus números revelam sobre você.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-[#607089] sm:text-base">
              Conheça seu Mapa Numerológico Pessoal Completo, com a análise do
              Nome Social, Nome Completo, Destino, Pináculos e outras informações
              importantes da sua Numerologia.
            </p>

            <div className="mt-6 rounded-[24px] bg-[#123d73] p-5 text-center text-white sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6cf68]">
                Mapa completo + consulta online com Oscar Ahumada
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-blue-100">
                Condição especial de hoje
              </p>
              <p className="mt-1 text-4xl font-extrabold text-[#f6cf68]">
                10x de R$ 35,00
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-blue-100">
                Mapa Numerológico completo em texto + consulta online individual
                com Oscar Ahumada.
              </p>
              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-VqvXqgWhxu-395,00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-full bg-[#f6c84f] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.04em] text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Quero meu mapa + consulta
              </a>
            </div>

            <div className="mt-4 rounded-[22px] border border-[#dbcba9] bg-[#fffaf0] p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c29629]">
                Prefere sem consulta?
              </p>
              <p className="mt-2 text-xl font-bold text-[#123d73]">
                Mapa Numerológico Completo em Texto
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#c29629]">
                10x de R$ 17,00
              </p>
              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-GNIINzUFVO-170,00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-full border-2 border-[#123d73] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-[#123d73] transition hover:bg-[#123d73] hover:text-white"
              >
                Quero somente o mapa
              </a>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-[#607089]">
              Oferta especial disponível nesta página até às 22:00 de hoje.
            </p>
          </div>
        </div>
      )}

</main>
  );
}