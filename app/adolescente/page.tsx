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

type Sexo = "masculino" | "feminino";
type Pergunta = {
  id: string;
  texto: (nome: string, sexo: Sexo) => string;
  tipo: "sim_nao" | "area" | "texto";
  placeholder?: string;
};
type Diagnostico = {
  titulo: string;
  abertura: (nome: string, sexo: Sexo) => string;
  comportamento: (nome: string, sexo: Sexo) => string;
  positivos: string[];
  atencao: string[];
  familia: (nome: string, sexo: Sexo) => string;
  alerta: (nome: string, sexo: Sexo) => string;
  talentos: string[];
  profissoes: string[];
  orientacao: (nome: string, sexo: Sexo) => string;
  perguntas: Pergunta[];
};

const genero = (sexo: Sexo, masc: string, fem: string) =>
  sexo === "masculino" ? masc : fem;

const perguntas = (
  q1: string,
  q2: string,
  q3: string,
  q4: string,
  q5: string
): Pergunta[] => [
  { id: "q1", tipo: "sim_nao", texto: (n) => q1.replaceAll("{n}", n) },
  { id: "q2", tipo: "area", texto: (n) => q2.replaceAll("{n}", n) },
  {
    id: "q3",
    tipo: "texto",
    texto: (n) => q3.replaceAll("{n}", n),
    placeholder: "Conte brevemente o que você vem observando...",
  },
  {
    id: "q4",
    tipo: "texto",
    texto: (n) => q4.replaceAll("{n}", n),
    placeholder: "Conte qual qualidade ou talento mais chama sua atenção...",
  },
  {
    id: "q5",
    tipo: "texto",
    texto: (n, s) =>
      q5
        .replaceAll("{n}", n)
        .replaceAll("{filho}", genero(s, "seu filho", "sua filha")),
    placeholder: "Escreva aqui sua pergunta para Oscar...",
  },
];

const diagnosticos: Record<number, Diagnostico> = {
  1: {
    titulo: "A força da independência, iniciativa e liderança",
    abertura: (n, s) =>
      `${n} possui no nome uma vibração ligada à autonomia, iniciativa, coragem e necessidade de construir a própria identidade. Na adolescência, essa energia pode aparecer como desejo de fazer escolhas por conta própria, defender opiniões e conquistar espaço para mostrar do que ${genero(s, "ele", "ela")} é capaz.`,
    comportamento: (n, s) =>
      `Quando essa força está bem direcionada, ${n} pode demonstrar determinação, criatividade, competitividade saudável e facilidade para tomar iniciativa. Quando se sente excessivamente ${genero(s, "controlado", "controlada")}, porém, pode reagir com impaciência, oposição ou insistência em fazer tudo do próprio jeito.`,
    positivos: ["Iniciativa", "Coragem", "Independência", "Criatividade", "Liderança", "Determinação", "Originalidade", "Capacidade de decisão"],
    atencao: ["Teimosia", "Impaciência", "Dificuldade em receber ordens", "Orgulho", "Competitividade excessiva", "Resistência em pedir ajuda"],
    familia: (n, s) =>
      `${n} tende a responder melhor a limites claros quando também recebe responsabilidade e espaço para participar das decisões. Com ${genero(s, "ele", "ela")}, orientar costuma funcionar melhor do que simplesmente impor.`,
    alerta: () =>
      `Se a necessidade de independência vier acompanhada de agressividade frequente, conflitos cada vez mais intensos, isolamento repentino, abandono importante dos estudos, comportamentos de risco ou mudanças marcantes de comportamento, não atribua isso simplesmente ao Número 1. Esses sinais merecem diálogo e atenção específica dos responsáveis.`,
    talentos: ["Liderança", "Iniciativa para começar projetos", "Tomada de decisão", "Criatividade prática", "Autonomia", "Capacidade de mobilizar pessoas"],
    profissoes: ["Empreendedorismo", "Administração e gestão", "Tecnologia", "Engenharia", "Liderança comercial", "Comunicação", "Esportes competitivos", "Profissões autônomas"],
    orientacao: (n) =>
      `O principal estímulo para ${n} é aprender que independência não significa fazer tudo sem orientação. Liderança amadurece quando iniciativa, responsabilidade e capacidade de ouvir caminham juntas.`,
    perguntas: perguntas(
      "{n} costuma querer fazer as coisas do próprio jeito, mesmo quando você tenta orientar?",
      "Em qual área a necessidade de independência de {n} aparece com mais força?",
      "Quando {n} é contrariado, qual comportamento mais chama sua atenção?",
      "Qual talento ou qualidade você percebe em {n} e gostaria que fosse mais desenvolvido?",
      "Se pudesse fazer uma única pergunta a Oscar sobre o comportamento ou futuro de {filho}, o que gostaria de compreender?"
    ),
  },
  2: {
    titulo: "A força da sensibilidade, cooperação e vínculos",
    abertura: (n, s) =>
      `${n} traz uma vibração ligada à sensibilidade, parceria, diplomacia e percepção emocional. Na adolescência, pode perceber com intensidade o ambiente, as palavras e a maneira como é ${genero(s, "tratado", "tratada")} pelas pessoas.`,
    comportamento: (n, s) =>
      `${n} pode ser ${genero(s, "conciliador", "conciliadora")}, gentil e ${genero(s, "atento", "atenta")} às necessidades dos outros. O desafio surge quando a vontade de pertencer ou evitar conflitos faz ${genero(s, "ele", "ela")} esconder o que sente, depender demais da aprovação alheia ou ter dificuldade para dizer não.`,
    positivos: ["Empatia", "Diplomacia", "Cooperação", "Sensibilidade", "Capacidade de ouvir", "Intuição", "Delicadeza", "Parceria"],
    atencao: ["Insegurança", "Dependência de aprovação", "Medo de rejeição", "Dificuldade em dizer não", "Excesso de sensibilidade", "Guardar sentimentos"],
    familia: (n) =>
      `${n} precisa sentir que pode falar sem ser ridicularizado ou imediatamente corrigido. Conversas acolhedoras, combinadas com limites consistentes, ajudam a fortalecer segurança emocional e identidade.`,
    alerta: () =>
      `Observe com atenção se a busca por aceitação vier acompanhada de medo excessivo de rejeição, submissão diante de amigos ou relacionamentos, dificuldade persistente para dizer não, isolamento após conflitos, queda importante da autoestima ou mudanças acentuadas para conseguir ser aceito pelo grupo. Esses sinais merecem atenção além da leitura numerológica.`,
    talentos: ["Escuta", "Mediação", "Trabalho em equipe", "Percepção emocional", "Diplomacia", "Construção de vínculos"],
    profissoes: ["Psicologia", "Recursos Humanos", "Educação", "Saúde e cuidado", "Relações públicas", "Mediação", "Atendimento ao público", "Artes colaborativas"],
    orientacao: (n) =>
      `O desenvolvimento de ${n} ganha força quando aprende a cooperar sem se anular e a reconhecer que sensibilidade também pode ser uma competência importante.`,
    perguntas: perguntas(
      "{n} costuma mudar de opinião para evitar conflitos ou agradar outras pessoas?",
      "Em qual área você percebe que {n} mais busca aprovação?",
      "Existe alguma situação em que {n} parece guardar sentimentos em vez de dizer o que realmente pensa?",
      "Qual qualidade de relacionamento ou sensibilidade você mais admira em {n}?",
      "O que você gostaria que Oscar ajudasse a compreender sobre as emoções, relações ou futuro de {filho}?"
    ),
  },
  3: {
    titulo: "A força da comunicação, criatividade e expressão",
    abertura: (n, s) =>
      `${n} possui uma vibração ligada à comunicação, criatividade, sociabilidade e expressão. Na adolescência, pode existir forte necessidade de ser ${genero(s, "ouvido", "ouvida")}, ${genero(s, "reconhecido", "reconhecida")} e ${genero(s, "estimulado", "estimulada")} a mostrar ideias e talentos.`,
    comportamento: (n) =>
      `${n} pode demonstrar carisma, imaginação, humor e facilidade para criar conexões. O ponto de atenção é a dispersão: muitos interesses, entusiasmo rápido e dificuldade para manter constância até concluir aquilo que começou.`,
    positivos: ["Comunicação", "Criatividade", "Carisma", "Sociabilidade", "Imaginação", "Otimismo", "Expressividade", "Facilidade para inspirar"],
    atencao: ["Dispersão", "Falta de continuidade", "Necessidade de atenção", "Impulsividade verbal", "Superficialidade", "Desânimo diante da rotina"],
    familia: (n) =>
      `${n} tende a responder bem quando pode explicar suas ideias e participar da conversa. Metas curtas, estímulos criativos e reconhecimento do esforço podem ajudar a transformar entusiasmo em realização.`,
    alerta: () =>
      `Mudanças bruscas entre expansividade e retraimento, necessidade extrema de aprovação, abandono recorrente de responsabilidades, queda importante no rendimento ou uso constante do humor para esconder dificuldades merecem ser observados com cuidado. Não trate sofrimento persistente apenas como uma característica do Número 3.`,
    talentos: ["Comunicação", "Criatividade", "Expressão artística", "Facilidade com público", "Produção de ideias", "Capacidade de motivar"],
    profissoes: ["Comunicação", "Publicidade e marketing", "Design", "Artes", "Produção de conteúdo", "Jornalismo", "Eventos", "Ensino e apresentações"],
    orientacao: (n) =>
      `O grande aprendizado para ${n} é perceber que talento ganha força quando existe direção, disciplina e continuidade.`,
    perguntas: perguntas(
      "{n} começa projetos ou atividades com entusiasmo e depois perde o interesse rapidamente?",
      "Em qual área {n} mais demonstra necessidade de ser reconhecido ou valorizado?",
      "Que atividade faz {n} perder a noção do tempo porque realmente gosta de realizá-la?",
      "Qual talento criativo ou comunicativo você percebe em {n}?",
      "Se Oscar pudesse ajudar a direcionar os talentos de {filho}, o que você gostaria de perguntar?"
    ),
  },
  4: {
    titulo: "A força da disciplina, estrutura e construção",
    abertura: (n) =>
      `${n} traz uma vibração ligada à organização, responsabilidade, estabilidade e capacidade de construir resultados com persistência. Pode preferir compreender as regras e sentir segurança antes de mudar de direção.`,
    comportamento: (n, s) =>
      `${n} pode ser ${genero(s, "responsável", "responsável")}, ${genero(s, "prático", "prática")} e persistente. Em desequilíbrio, a necessidade de segurança pode aparecer como rigidez, resistência a mudanças, preocupação excessiva ou dificuldade em aceitar maneiras diferentes de fazer as coisas.`,
    positivos: ["Disciplina", "Organização", "Persistência", "Responsabilidade", "Praticidade", "Lealdade", "Concentração", "Capacidade de construir"],
    atencao: ["Rigidez", "Teimosia", "Medo de mudanças", "Excesso de cobrança", "Preocupação", "Dificuldade em improvisar"],
    familia: (n) =>
      `${n} tende a se sentir melhor quando sabe o que se espera e quando as regras são coerentes. Mudanças podem ser apresentadas gradualmente, explicando motivos e objetivos.`,
    alerta: () =>
      `Rigidez cada vez maior, medo intenso de errar, autocobrança desproporcional, sofrimento acentuado diante de mudanças, necessidade extrema de controle ou paralisação por medo de falhar merecem atenção específica. Esses comportamentos não devem ser explicados somente pela vibração 4.`,
    talentos: ["Organização", "Planejamento", "Disciplina", "Raciocínio prático", "Execução de processos", "Persistência"],
    profissoes: ["Engenharia", "Arquitetura", "Administração", "Finanças", "Contabilidade", "Tecnologia", "Logística", "Áreas técnicas e planejamento"],
    orientacao: (n) =>
      `Para ${n}, segurança é importante, mas o amadurecimento também passa por aprender que mudar de estratégia não significa perder estabilidade.`,
    perguntas: perguntas(
      "{n} demonstra desconforto quando planos mudam ou quando algo foge do esperado?",
      "Em qual área você percebe maior necessidade de segurança ou controle em {n}?",
      "Existe alguma mudança que {n} vem evitando mesmo podendo ser positiva?",
      "Qual capacidade de organização, responsabilidade ou persistência você mais reconhece em {n}?",
      "Que dúvida sobre estudos, comportamento ou futuro de {filho} você gostaria de levar a Oscar?"
    ),
  },
  5: {
    titulo: "A força da liberdade, movimento e descoberta",
    abertura: (n) =>
      `${n} possui uma vibração ligada à liberdade, curiosidade, movimento, versatilidade e desejo de experimentar. Na adolescência, essa energia pode intensificar a busca por novidades e autonomia.`,
    comportamento: (n) =>
      `${n} pode aprender rapidamente pela experiência, adaptar-se bem e demonstrar coragem para explorar caminhos diferentes. O desafio está em distinguir liberdade de impulsividade e novidade de falta de continuidade.`,
    positivos: ["Versatilidade", "Curiosidade", "Adaptabilidade", "Comunicação", "Coragem para mudanças", "Rapidez", "Magnetismo", "Espírito explorador"],
    atencao: ["Impulsividade", "Inquietação", "Falta de constância", "Busca excessiva por novidade", "Dificuldade com rotina", "Decisões precipitadas"],
    familia: (n) =>
      `${n} tende a reagir mal à sensação de prisão. Limites objetivos, consequências compreensíveis e algum espaço de escolha ajudam a transformar liberdade em responsabilidade.`,
    alerta: () =>
      `Impulsividade intensa, exposição frequente a situações perigosas, desrespeito persistente a limites importantes, decisões precipitadas com consequências relevantes ou busca constante por estímulos que coloque o adolescente em risco precisam ser tratados como sinais concretos de atenção, independentemente da Numerologia.`,
    talentos: ["Adaptabilidade", "Comunicação", "Negociação", "Aprendizado pela experiência", "Versatilidade", "Rapidez para reagir a mudanças"],
    profissoes: ["Turismo", "Comunicação", "Marketing e vendas", "Comércio", "Eventos", "Mídias digitais", "Aviação e mobilidade", "Carreiras com variedade e movimento"],
    orientacao: (n) =>
      `O potencial de ${n} cresce quando aprende que liberdade verdadeira inclui saber escolher, sustentar compromissos e avaliar consequências.`,
    perguntas: perguntas(
      "{n} perde o interesse rapidamente quando uma atividade se torna repetitiva?",
      "Em qual área a necessidade de liberdade de {n} aparece com mais intensidade?",
      "Existe alguma mudança ou experiência que {n} deseja muito viver e que preocupa você?",
      "Qual habilidade de adaptação, comunicação ou coragem você mais percebe em {n}?",
      "Se pudesse perguntar a Oscar como orientar a liberdade e o futuro de {filho}, o que gostaria de compreender?"
    ),
  },
  6: {
    titulo: "A força do cuidado, responsabilidade e vínculos afetivos",
    abertura: (n) =>
      `${n} traz uma vibração ligada ao afeto, família, responsabilidade, senso de proteção e busca por harmonia. Pode demonstrar desde cedo preocupação com pessoas próximas e forte percepção das relações.`,
    comportamento: (n, s) =>
      `${n} pode ser ${genero(s, "carinhoso", "carinhosa")}, responsável e ${genero(s, "disposto", "disposta")} a ajudar. O desafio aparece quando assume problemas que não pertencem a ${genero(s, "ele", "ela")}, cobra demais de si ou dos outros, ou sofre excessivamente quando sente falta de reconhecimento afetivo.`,
    positivos: ["Responsabilidade", "Afetividade", "Lealdade", "Generosidade", "Senso de família", "Cuidado", "Harmonia", "Capacidade de aconselhar"],
    atencao: ["Perfeccionismo", "Cobrança excessiva", "Ciúme", "Excesso de responsabilidade", "Necessidade de aprovação afetiva", "Dificuldade em se priorizar"],
    familia: (n) =>
      `${n} precisa aprender que ajudar não significa assumir tudo. É importante reconhecer sua generosidade e, ao mesmo tempo, incentivar limites e autonomia emocional.`,
    alerta: () =>
      `Culpa excessiva, assumir conflitos familiares como responsabilidade própria, relacionamentos de dependência, perfeccionismo intenso, sofrimento acentuado diante de rejeição ou colocar continuamente as necessidades dos outros acima das próprias merecem atenção especial.`,
    talentos: ["Cuidado com pessoas", "Senso estético", "Responsabilidade", "Aconselhamento", "Conciliação", "Capacidade de criar ambientes acolhedores"],
    profissoes: ["Saúde", "Psicologia", "Educação", "Nutrição", "Estética e design", "Arquitetura de interiores", "Serviço social", "Áreas de cuidado e orientação"],
    orientacao: (n) =>
      `O amadurecimento de ${n} passa por equilibrar responsabilidade com autocuidado e compreender que não precisa resolver a vida de todas as pessoas.`,
    perguntas: perguntas(
      "{n} costuma assumir problemas ou responsabilidades de outras pessoas?",
      "Em qual área você percebe que {n} mais busca harmonia ou aprovação afetiva?",
      "Existe alguma relação ou responsabilidade que parece estar pesando emocionalmente sobre {n}?",
      "Qual capacidade de cuidar, aconselhar ou assumir responsabilidades você mais admira em {n}?",
      "O que você gostaria que Oscar ajudasse a compreender sobre os vínculos e o futuro de {filho}?"
    ),
  },
  7: {
    titulo: "A força da análise, conhecimento e profundidade",
    abertura: (n, s) =>
      `${n} possui uma vibração ligada à investigação, conhecimento, observação, profundidade e necessidade de compreender as coisas além da superfície. Pode ser mais ${genero(s, "seletivo", "seletiva")} na maneira de se abrir.`,
    comportamento: (n, s) =>
      `${n} pode demonstrar concentração, inteligência analítica, curiosidade e percepção. Quando ${genero(s, "pressionado", "pressionada")} demais, pode se fechar, pensar excessivamente ou preferir o isolamento a explicar aquilo que sente.`,
    positivos: ["Análise", "Concentração", "Observação", "Intuição", "Profundidade", "Pesquisa", "Pensamento crítico", "Busca por conhecimento"],
    atencao: ["Isolamento", "Excesso de análise", "Dificuldade em expressar emoções", "Desconfiança", "Autocrítica", "Distanciamento"],
    familia: (n) =>
      `${n} pode precisar de tempo para organizar pensamentos antes de conversar. Respeitar momentos de silêncio sem abandonar o diálogo ajuda a construir confiança.`,
    alerta: () =>
      `Isolamento crescente, fechamento emocional persistente, perda importante de interesse pela convivência, queda significativa nas atividades habituais ou dificuldade contínua de comunicar sofrimento merecem atenção. Não presuma que isso seja apenas necessidade de ficar sozinho por causa do Número 7.`,
    talentos: ["Pesquisa", "Análise", "Concentração", "Investigação", "Pensamento crítico", "Aprendizado aprofundado"],
    profissoes: ["Pesquisa", "Tecnologia e programação", "Ciências", "Medicina", "Psicologia", "Engenharia", "Análise de dados", "Investigação e áreas acadêmicas"],
    orientacao: (n) =>
      `Para ${n}, conhecimento pode ser uma grande fonte de confiança. O equilíbrio aparece quando pensar profundamente não impede agir, experimentar e compartilhar sentimentos.`,
    perguntas: perguntas(
      "{n} costuma guardar pensamentos ou sentimentos e falar somente depois de muito tempo?",
      "Em qual área você percebe que {n} mais se fecha ou pensa excessivamente?",
      "Existe algum assunto que desperta uma curiosidade muito profunda em {n}?",
      "Qual capacidade intelectual, intuitiva ou investigativa você mais percebe em {n}?",
      "Se Oscar pudesse ajudar a compreender o mundo interior e o futuro de {filho}, qual seria sua pergunta?"
    ),
  },
  8: {
    titulo: "A força da realização, ambição e capacidade de gestão",
    abertura: (n) =>
      `${n} traz uma vibração ligada à realização, organização, autoridade, resultados e capacidade de lidar com desafios concretos. Pode demonstrar desde cedo desejo de conquistar independência e reconhecimento.`,
    comportamento: (n, s) =>
      `${n} pode ser ${genero(s, "determinado", "determinada")}, ${genero(s, "competitivo", "competitiva")} e ${genero(s, "orientado", "orientada")} a resultados. O ponto de atenção aparece quando transforma desempenho em medida de valor pessoal ou tenta controlar situações para evitar sentir vulnerabilidade.`,
    positivos: ["Determinação", "Gestão", "Praticidade", "Ambição saudável", "Persistência", "Senso de justiça", "Organização", "Capacidade de realização"],
    atencao: ["Autoritarismo", "Excesso de cobrança", "Competitividade", "Controle", "Materialismo", "Dificuldade em aceitar fracassos"],
    familia: (n) =>
      `${n} tende a crescer quando recebe responsabilidades proporcionais à idade e aprende que resultado é importante, mas caráter, equilíbrio e processo também são.`,
    alerta: () =>
      `Necessidade extrema de controle, conflitos recorrentes por autoridade, pressão excessiva por desempenho, intolerância intensa ao fracasso ou associar o próprio valor somente a resultados e conquistas merecem atenção especial dos responsáveis.`,
    talentos: ["Gestão", "Liderança executiva", "Negociação", "Visão de resultados", "Organização financeira", "Capacidade de assumir responsabilidades"],
    profissoes: ["Administração", "Empreendedorismo", "Economia", "Finanças", "Direito", "Engenharia", "Gestão comercial", "Mercado imobiliário e negócios"],
    orientacao: (n) =>
      `O potencial de realização de ${n} pode ser muito produtivo quando ambição, ética, disciplina e capacidade de cooperar se desenvolvem juntas.`,
    perguntas: perguntas(
      "{n} demonstra forte necessidade de vencer, conquistar ou provar capacidade?",
      "Em qual área você percebe maior cobrança por resultados em {n}?",
      "Existe algum objetivo que {n} leva tão a sério que acaba se cobrando além do necessário?",
      "Qual capacidade de liderança, organização ou realização você mais reconhece em {n}?",
      "O que você gostaria de perguntar a Oscar sobre prosperidade, escolhas e futuro de {filho}?"
    ),
  },
  9: {
    titulo: "A força da sensibilidade, idealismo e visão humana",
    abertura: (n) =>
      `${n} possui uma vibração ligada à sensibilidade, generosidade, idealismo, imaginação e percepção das necessidades das pessoas. Pode reagir intensamente a injustiças e situações que mexem com seus valores.`,
    comportamento: (n, s) =>
      `${n} pode ser ${genero(s, "generoso", "generosa")}, ${genero(s, "inspirador", "inspiradora")} e capaz de enxergar além dos próprios interesses. O desafio é não absorver problemas alheios, idealizar demais pessoas ou situações e esquecer dos próprios objetivos.`,
    positivos: ["Generosidade", "Sensibilidade", "Idealismo", "Criatividade", "Solidariedade", "Visão ampla", "Magnetismo", "Capacidade de inspirar"],
    atencao: ["Idealização", "Dificuldade em colocar limites", "Oscilações emocionais", "Excesso de entrega", "Frustração com injustiças", "Perda de foco pessoal"],
    familia: (n) =>
      `${n} precisa perceber que empatia não exige carregar todos os problemas. Incentivar projetos próprios e limites saudáveis ajuda a transformar sensibilidade em força.`,
    alerta: () =>
      `Dificuldade persistente para estabelecer limites, envolvimento excessivo com problemas dos outros, relações prejudiciais mantidas por culpa, abandono dos próprios objetivos ou sofrimento intenso por não conseguir encerrar vínculos merecem atenção além da interpretação numerológica.`,
    talentos: ["Empatia", "Criatividade", "Visão humanitária", "Comunicação inspiradora", "Capacidade de compreender diferentes perspectivas", "Mobilização para causas"],
    profissoes: ["Psicologia", "Artes", "Comunicação", "Direito e causas sociais", "Saúde", "Educação", "Relações internacionais", "Projetos sociais e humanitários"],
    orientacao: (n) =>
      `O amadurecimento de ${n} passa por transformar idealismo em ação concreta sem abandonar os próprios sonhos para viver apenas em função dos outros.`,
    perguntas: perguntas(
      "{n} se envolve emocionalmente com problemas de amigos ou situações que considera injustas?",
      "Em qual área você percebe que {n} mais entrega energia aos outros?",
      "Existe alguma situação ou relação que parece ocupar espaço demais na vida de {n}?",
      "Qual qualidade humana, criativa ou solidária você mais admira em {n}?",
      "Se pudesse perguntar a Oscar como direcionar a sensibilidade e o futuro de {filho}, o que gostaria de compreender?"
    ),
  },
  11: {
    titulo: "A força da intuição, inspiração e percepção",
    abertura: (n) =>
      `${n} apresenta a vibração mestre 11, associada à intuição, inspiração, percepção, sensibilidade e capacidade de influenciar por ideias. Na adolescência, essa intensidade pode aparecer como grande percepção do ambiente e das pessoas.`,
    comportamento: (n, s) =>
      `${n} pode ser ${genero(s, "intuitivo", "intuitiva")}, ${genero(s, "criativo", "criativa")} e ${genero(s, "inspirador", "inspiradora")}. Ao mesmo tempo, pode sentir pressão interna, oscilar entre confiança e dúvida ou se cobrar por perceber que pensa e sente as situações de maneira intensa.`,
    positivos: ["Intuição", "Inspiração", "Criatividade", "Magnetismo", "Percepção", "Comunicação", "Idealismo", "Capacidade de influenciar positivamente"],
    atencao: ["Ansiedade por expectativas", "Oscilação de confiança", "Excesso de sensibilidade", "Autocobrança", "Idealização", "Dificuldade em desacelerar"],
    familia: (n) =>
      `${n} se beneficia de um ambiente em que possa falar sobre ideias e percepções sem ser imediatamente desacreditado. Também precisa aprender a verificar intuições com realidade, experiência e discernimento.`,
    alerta: () =>
      `Sensibilidade muito intensa acompanhada de sobrecarga, pressão por corresponder a expectativas elevadas, oscilações acentuadas de confiança, dificuldade persistente para desacelerar ou sofrimento emocional importante merece atenção concreta. O Número 11 não deve ser usado para romantizar sofrimento ou explicar sozinho essas mudanças.`,
    talentos: ["Intuição", "Criatividade", "Comunicação inspiradora", "Percepção de padrões", "Imaginação", "Capacidade de mobilizar por ideias"],
    profissoes: ["Comunicação", "Psicologia", "Artes", "Educação", "Design", "Tecnologia criativa", "Pesquisa humana", "Projetos de inovação e impacto"],
    orientacao: (n) =>
      `O 11 indica um potencial que precisa de equilíbrio, estudo e prática para se transformar em realização. O importante é estimular sem criar expectativas excessivas.`,
    perguntas: perguntas(
      "{n} costuma perceber situações ou pessoas de maneira muito intuitiva, mesmo sem conseguir explicar por quê?",
      "Em qual área você percebe maior sensibilidade ou intensidade em {n}?",
      "Existe alguma ideia, interesse ou percepção recorrente que parece especialmente importante para {n}?",
      "Qual capacidade de inspirar, criar ou perceber você mais reconhece em {n}?",
      "O que você gostaria que Oscar ajudasse a compreender sobre a sensibilidade e o futuro de {filho}?"
    ),
  },
  22: {
    titulo: "A força de construir, organizar e realizar em grande escala",
    abertura: (n) =>
      `${n} apresenta a vibração mestre 22, ligada à capacidade de transformar ideias em estruturas concretas, organizar projetos e pensar em realizações de longo prazo. Na adolescência, isso pode aparecer como ambição, senso de responsabilidade ou desejo de fazer algo significativo.`,
    comportamento: (n, s) =>
      `${n} pode demonstrar visão prática, persistência e capacidade de assumir responsabilidades. O desafio surge quando a expectativa fica grande demais e ${genero(s, "ele", "ela")} passa a se cobrar, controlar tudo ou adiar projetos por medo de não alcançar o padrão imaginado.`,
    positivos: ["Visão de longo prazo", "Organização", "Responsabilidade", "Determinação", "Liderança", "Praticidade", "Persistência", "Capacidade de materialização"],
    atencao: ["Autocobrança", "Rigidez", "Sobrecarga", "Perfeccionismo", "Controle", "Medo de não corresponder às expectativas"],
    familia: (n) =>
      `${n} precisa de desafios proporcionais à idade, sem carregar responsabilidades adultas antes do tempo. Grandes potenciais se desenvolvem melhor com etapas, orientação e espaço para aprender com erros.`,
    alerta: () =>
      `Perfeccionismo intenso, sobrecarga, medo de fracassar diante de grandes expectativas, assumir responsabilidades incompatíveis com a idade ou paralisar por acreditar que nada é suficientemente bom merecem atenção especial. Potencial não deve ser transformado em pressão sobre o adolescente.`,
    talentos: ["Planejamento de longo prazo", "Organização de projetos", "Liderança", "Visão estratégica", "Execução", "Transformação de ideias em estruturas concretas"],
    profissoes: ["Engenharia", "Arquitetura", "Empreendedorismo", "Administração", "Tecnologia", "Gestão de grandes projetos", "Urbanismo e infraestrutura", "Negócios e inovação"],
    orientacao: (n) =>
      `Para ${n}, aprender a dividir grandes objetivos em passos possíveis pode ser tão importante quanto sonhar grande. Estrutura deve servir ao crescimento, não se transformar em pressão.`,
    perguntas: perguntas(
      "{n} demonstra vontade de realizar algo grande, mas às vezes se cobra ou trava diante da responsabilidade?",
      "Em qual área você percebe maior potencial de construção ou liderança em {n}?",
      "Existe algum projeto ou objetivo importante que {n} gostaria de realizar, mas ainda não sabe como começar?",
      "Qual capacidade de organização, visão ou realização você mais reconhece em {n}?",
      "Se Oscar pudesse ajudar a direcionar o potencial e o futuro de {filho}, qual seria sua pergunta?"
    ),
  },
};

export default function AdolescentePage() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState<Sexo>("masculino");
  const [resultado, setResultado] =
    useState<ReturnType<typeof calcularNomeSocial> | null>(null);
  const [mostrarOferta, setMostrarOferta] = useState(false);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const resultadoRef = useRef<HTMLElement | null>(null);

  const primeiroNome =
    resultado?.nomeOriginal.trim().split(/\s+/)[0] ||
    resultado?.nomeNormalizado ||
    "";

  const diagnostico = resultado
    ? diagnosticos[resultado.revelacaoNomeSocial] ?? null
    : null;

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
      if (new Date().getHours() < 22) setMostrarOferta(true);
    }, 50000);
    return () => window.clearTimeout(timer);
  }, [resultado]);

  function revelar() {
    const idadeNumero = Number(idade);
    if (
      !nome.trim() ||
      !Number.isInteger(idadeNumero) ||
      idadeNumero < 13 ||
      idadeNumero > 18
    ) {
      alert("Informe o nome e uma idade entre 13 e 18 anos.");
      return;
    }

    setRespostas({});
    setMostrarOferta(false);
    setResultado(calcularNomeSocial(nome.trim()));

    window.gtag?.("event", "diagnostico_adolescente_concluido", {
      idade: idadeNumero,
      sexo,
    });
  }

  function atualizarResposta(id: string, valor: string) {
    setRespostas((atual) => ({ ...atual, [id]: valor }));
  }

  function limpar() {
    setNome("");
    setIdade("");
    setResultado(null);
    setRespostas({});
    setMostrarOferta(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function enviarParaOscar() {
    if (!resultado || !diagnostico) return;

    const respostasFormatadas = diagnostico.perguntas
      .map((item, index) => {
        const resposta = respostas[item.id]?.trim() || "Não respondida";
        return `${index + 1}. ${item.texto(primeiroNome, sexo)}\nResposta: ${resposta}`;
      })
      .join("\n\n");

    const mensagem = `Olá, Oscar. Fiz o diagnóstico numerológico do adolescente no seu site.

Nome: ${primeiroNome}
Idade: ${idade} anos
Sexo: ${sexo === "masculino" ? "Masculino" : "Feminino"}
Resultado do nome: Número ${resultado.revelacaoNomeSocial}${
      resultado.numeroMestre ? " — Número Mestre" : ""
    }

MINHAS RESPOSTAS:

${respostasFormatadas}

Gostaria de conversar com você sobre este diagnóstico.`;

    window.gtag?.("event", "adolescente_whatsapp", {
      numero_resultado: resultado.revelacaoNomeSocial,
    });

    window.open(
      `https://wa.me/5531972159908?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const respostasCompletas =
    !!diagnostico &&
    diagnostico.perguntas.every((item) => respostas[item.id]?.trim());

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#edf4fb] via-[#f7f3eb] to-[#f7f3eb] px-4 py-8 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-5 py-7 text-white shadow-2xl sm:rounded-[36px] sm:px-10 sm:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">
              Método Oscar Ahumada
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Descubra o que o nome do seu filho revela
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg">
              Um diagnóstico numerológico para compreender melhor comportamento,
              talentos, desafios e possíveis afinidades profissionais entre 13 e 18 anos.
            </p>

            <div className="mx-auto mt-6 max-w-2xl rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <label className="block text-left text-sm font-semibold">
                Nome pelo qual o adolescente é conhecido
              </label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex.: Rogério"
                className="mt-2 w-full rounded-2xl bg-white px-5 py-4 text-[#123d73] outline-none"
              />

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-left text-sm font-semibold">
                    Idade
                  </label>
                  <input
                    type="number"
                    min={13}
                    max={18}
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder="13 a 18"
                    className="mt-2 w-full rounded-2xl bg-white px-5 py-4 text-[#123d73] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-left text-sm font-semibold">
                    Sexo
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {(["masculino", "feminino"] as Sexo[]).map((opcao) => (
                      <button
                        key={opcao}
                        type="button"
                        onClick={() => setSexo(opcao)}
                        className={`rounded-2xl px-3 py-4 text-sm font-bold ${
                          sexo === opcao
                            ? "bg-[#f6c84f] text-[#123d73]"
                            : "border border-white/30 bg-white/10 text-white"
                        }`}
                      >
                        {opcao === "masculino" ? "Masculino" : "Feminino"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={revelar}
                className="mt-5 w-full rounded-full bg-[#f6c84f] px-6 py-4 text-sm font-extrabold uppercase text-[#123d73] shadow-lg"
              >
                Fazer diagnóstico
              </button>
            </div>
          </div>
        </section>

        {resultado && diagnostico && (
          <section
            ref={resultadoRef}
            className="mt-8 scroll-mt-5 rounded-[28px] border border-[#dbcba9] bg-white p-5 shadow-xl sm:p-10"
          >
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c29629]">
                Diagnóstico do nome
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {primeiroNome}
              </h2>
              <p className="mt-2 text-sm font-semibold text-[#607089]">
                {idade} anos • {sexo === "masculino" ? "Masculino" : "Feminino"}
              </p>
              <div className="mt-5 inline-flex min-h-24 min-w-24 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#faf5e7] px-5 text-4xl font-bold text-[#c29629]">
                {resultado.revelacaoNomeSocial}
              </div>
              {resultado.numeroMestre && (
                <p className="mt-3 font-bold uppercase tracking-[0.16em] text-[#c29629]">
                  Número Mestre {resultado.revelacaoNomeSocial}
                </p>
              )}
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-[#d9c28d] bg-gradient-to-br from-[#fffdf8] to-[#f8f1e2] shadow-lg">
              <div className="bg-[#123d73] px-5 py-6 text-center text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">
                  Numerologia Latina
                </p>
                <h3 className="mx-auto mt-3 max-w-3xl text-2xl font-semibold sm:text-3xl">
                  {diagnostico.titulo}
                </h3>
              </div>

              <div className="px-5 py-8 sm:px-10">
                <div className="mx-auto max-w-3xl space-y-8">
                  <p className="text-base leading-8 text-[#334b68] sm:text-lg">
                    {diagnostico.abertura(primeiroNome, sexo)}
                  </p>

                  <div>
                    <h4 className="text-xl font-bold">
                      Como essa energia pode aparecer
                    </h4>
                    <p className="mt-3 text-base leading-8 text-[#334b68]">
                      {diagnostico.comportamento(primeiroNome, sexo)}
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-[#d8c18b] bg-white p-5">
                      <h4 className="text-xl font-bold">
                        Características positivas
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {diagnostico.positivos.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-[#edf5fc] px-3 py-2 text-sm font-semibold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-[#e3d3ae] bg-white p-5">
                      <h4 className="text-xl font-bold text-[#c29629]">
                        Pontos que merecem atenção
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {diagnostico.atencao.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-[#fff7df] px-3 py-2 text-sm font-semibold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold">Família e orientação</h4>
                    <p className="mt-3 text-base leading-8 text-[#334b68]">
                      {diagnostico.familia(primeiroNome, sexo)}
                    </p>
                  </div>

                  <div className="rounded-[24px] border-2 border-[#c74b3c] bg-[#fff3f0] p-6 shadow-lg">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#a83227]">
                      Atenção especial
                    </p>
                    <h4 className="mt-2 text-xl font-extrabold text-[#8f2f25]">
                      Observe com mais cuidado
                    </h4>
                    <p className="mt-3 text-base leading-8 text-[#593d3a]">
                      {diagnostico.alerta(primeiroNome, sexo)}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-[#d8c18b] bg-white p-6">
                    <h4 className="text-xl font-bold">Talentos que podem ser estimulados</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {diagnostico.talentos.map((item) => (
                        <span key={item} className="rounded-full bg-[#f5ecd5] px-4 py-2 text-sm font-semibold">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] bg-[#edf5fc] p-6">
                    <h4 className="text-xl font-bold">
                      Possíveis afinidades profissionais
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#607089]">
                      Estas áreas são possibilidades de afinidade relacionadas à
                      vibração do nome. Não determinam a profissão e devem ser
                      consideradas junto com interesses, aptidões, experiências e
                      outros aspectos do mapa numerológico.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {diagnostico.profissoes.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#cbd9e7] bg-white px-4 py-2 text-sm font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#d8c18b] bg-[#fffaf0] p-6">
                    <h4 className="text-xl font-bold text-[#c29629]">
                      Como estimular este potencial
                    </h4>
                    <p className="mt-3 text-base leading-8 text-[#334b68]">
                      {diagnostico.orientacao(primeiroNome, sexo)}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-[#cbd9e7] bg-[#f8fafc] p-5">
                    <p className="text-sm leading-7 text-[#52657b]">
                      <strong>Importante:</strong> a Numerologia não diagnostica condições de saúde mental.
                      Mudanças intensas ou persistentes de comportamento, sofrimento emocional importante ou
                      situações que coloquem o adolescente em risco devem ser avaliadas independentemente do
                      resultado numerológico e, quando necessário, com apoio profissional qualificado.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold">
                      Agora queremos compreender melhor {primeiroNome}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[#607089]">
                      Responda pensando no momento atual. Suas respostas poderão ser
                      enviadas diretamente para Oscar.
                    </p>

                    <div className="mt-5 space-y-5">
                      {diagnostico.perguntas.map((item, index) => (
                        <div
                          key={item.id}
                          className="rounded-[22px] border-2 border-[#d4af37] bg-[#fffdf7] p-5 shadow-md"
                        >
                          <div className="flex items-start gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123d73] text-lg font-extrabold text-[#f6cf68]">
                              {index + 1}
                            </span>
                            <p className="pt-1 text-lg font-extrabold leading-8">
                              {item.texto(primeiroNome, sexo)}
                            </p>
                          </div>

                          {item.tipo === "sim_nao" && (
                            <div className="mt-5 grid grid-cols-2 gap-3">
                              {["Sim", "Não"].map((opcao) => (
                                <button
                                  key={opcao}
                                  type="button"
                                  onClick={() =>
                                    atualizarResposta(item.id, opcao)
                                  }
                                  className={`rounded-full border-2 px-5 py-3 font-bold ${
                                    respostas[item.id] === opcao
                                      ? "border-[#123d73] bg-[#123d73] text-white"
                                      : "border-[#cbd9e7] bg-white"
                                  }`}
                                >
                                  {opcao}
                                </button>
                              ))}
                            </div>
                          )}

                          {item.tipo === "area" && (
                            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                              {["Família", "Escola", "Amizades", "Futuro"].map(
                                (opcao) => (
                                  <button
                                    key={opcao}
                                    type="button"
                                    onClick={() =>
                                      atualizarResposta(item.id, opcao)
                                    }
                                    className={`rounded-full border-2 px-3 py-3 text-sm font-bold ${
                                      respostas[item.id] === opcao
                                        ? "border-[#123d73] bg-[#123d73] text-white"
                                        : "border-[#cbd9e7] bg-white"
                                    }`}
                                  >
                                    {opcao}
                                  </button>
                                )
                              )}
                            </div>
                          )}

                          {item.tipo === "texto" && (
                            <textarea
                              rows={4}
                              value={respostas[item.id] ?? ""}
                              onChange={(e) =>
                                atualizarResposta(item.id, e.target.value)
                              }
                              placeholder={item.placeholder}
                              className="mt-5 w-full resize-none rounded-[18px] border border-[#cbd9e7] bg-white px-5 py-4 text-base leading-7 outline-none focus:border-[#d4af37]"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[24px] bg-[#123d73] p-5 text-center text-white shadow-lg sm:p-7">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6cf68]">
                        Converse diretamente com Oscar
                      </p>
                      <h4 className="mt-3 text-xl font-bold sm:text-2xl">
                        Quer que Oscar conheça suas respostas?
                      </h4>
                      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                        A mensagem será preparada com o diagnóstico e suas respostas
                        para você revisar antes de enviar.
                      </p>
                      <button
                        type="button"
                        onClick={enviarParaOscar}
                        disabled={!respostasCompletas}
                        className="mt-5 w-full rounded-full bg-[#25D366] px-6 py-4 text-sm font-extrabold uppercase text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Enviar minhas respostas para Oscar
                      </button>
                      <p className="mt-3 text-xs text-blue-100">
                        O botão será liberado depois que você responder às cinco
                        perguntas.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] bg-[#edf5fc] p-6 text-center">
                    <p className="text-base font-semibold leading-8">
                      O nome revela apenas uma parte. Nome completo, data de
                      nascimento, Destino e ciclos numerológicos podem ampliar a
                      compreensão sobre talentos, desafios e caminhos de
                      desenvolvimento.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={limpar}
                    className="w-full rounded-full border border-[#123d73] px-8 py-4 text-sm font-bold"
                  >
                    Fazer outro diagnóstico
                  </button>
                </div>
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
        >
          <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-[#e2c46d] bg-white p-5 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setMostrarOferta(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#123d73] text-xl font-bold text-white"
              aria-label="Fechar oferta"
            >
              ×
            </button>

            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c29629]">
                Super oferta para hoje
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#123d73]">
                Termina hoje às 22:00
              </p>

              <div className="mx-auto mt-5 w-full max-w-[240px] overflow-hidden rounded-[22px] border border-[#e2c46d] bg-black shadow-lg">
                <div className="relative aspect-[9/16] w-full">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/CtOTHXgwMwk?rel=0&playsinline=1"
                    title="Mensagem de Oscar Ahumada"
                    className="absolute inset-0 h-full w-full"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#123d73]">
                O nome revelou uma parte. O mapa completo pode mostrar muito mais.
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#607089]">
                Aprofunde a análise com os principais números do mapa numerológico
                e compreenda melhor talentos, desafios e ciclos.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-1avOg6eqCs-350,00"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[22px] bg-[#123d73] p-5 text-center text-white shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f6cf68]">
                  Mapa completo + consulta online
                </p>
                <p className="mt-2 text-2xl font-extrabold">10x de R$ 35,00</p>
                <p className="mt-2 text-sm text-blue-100">com Oscar Ahumada</p>
              </a>

              <a
                href="https://pay.infinitepay.io/oscar_jose_ahumada_/Ri1B-GNIINzUFVO-170,00"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[22px] border-2 border-[#d4af37] bg-[#fffaf0] p-5 text-center text-[#123d73]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c29629]">
                  Mapa Numerológico Completo em Texto
                </p>
                <p className="mt-2 text-2xl font-extrabold">10x de R$ 17,00</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
