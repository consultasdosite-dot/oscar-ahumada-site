"use client";

import { useEffect, useRef, useState } from "react";

type Carta = { numero: number; titulo: string; mensagens: string[] };

// As 22 interpretações foram preservadas a partir do material do Momento Material.
const cartas: Carta[] = [
  {
    "numero": 1,
    "titulo": "A Força da Decisão e da Autonomia",
    "mensagens": [
      "Olá, sou é Oscar Ahumada, e hoje quero te entregar uma mensagem importante sobre o seu momento material.",
      "Você está atravessando um ciclo onde a vida está pedindo atitude , clareza e decisão. É o instante ideal para rever suas finanças, repensar seus gastos e ajustar seu modo de administrar recursos . Este não é um tempo para deixar a vida correr solta: ou você assume o leme, ou corre o risco de se perder na maré.",
      "A energia do número 1 traz com ela a força da iniciativa, da liderança e da independência. Ela exige ação consciente, baseada em escolhas sólidas, planejadas e com visão de futuro. Evite impulsos ou decisões apressadas. Essa energia funciona melhor quando canalizada com estratégia e confiança.",
      "Dica especial: Salve esta carta no seu celular e use-a como um lembrete diário — um amuleto energético para que você mantenha o foco e a disciplina. Lembre-se: neste momento, sua prosperidade nasce da sua capacidade de agir com responsabilidade e sabedoria.",
      "Você é o construtor do seu caminho. Tudo depende da sua escolha hoje."
    ]
  },
  {
    "numero": 2,
    "titulo": "O Chamado da Organização e da Disciplina",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e a mensagem que recebo hoje para te entregar é clara: é hora de colocar ordem no seu mundo material.",
      "Você está vivendo um momento que exige estrutura, organização e disciplina. Não é tempo de adiar responsabilidades ou negligenciar pequenos detalhes — o que hoje parece simples, amanhã pode se tornar um peso.",
      "A energia do número 2 traz a necessidade de parcerias conscientes e equilíbrio nas decisões. Por isso, não carregue tudo sozinha/o: saiba ouvir, compartilhar e confiar em quem soma com você . Mas atenção: confie com sabedoria . Nem todo aliado é verdadeiro e nem toda proposta vale a pena.",
      "Este é um ciclo de ajustes e reestruturação , especialmente nas finanças e nos acordos. Negocie com delicadeza, mas não abra mão da sua firmeza interior . Evite conflitos desnecessários e aprenda a dizer não quando for preciso manter sua paz.",
      "Dica energética: Use essa carta como um lembrete sutil de que a harmonia no mundo externo começa pela sua estabilidade interior . Salve-a no seu celular ou imprima — e deixe onde você possa ver todos os dias. Ela pode ser seu amuleto de equilíbrio e foco .",
      "Lembre-se: o verdadeiro poder material nasce da clareza interna e do discernimento nas escolhas."
    ]
  },
  {
    "numero": 3,
    "titulo": "O Poder da Criatividade e da Expansão Financeira",
    "mensagens": [
      "Olá, sou Oscar Ahumada, e hoje a numerologia revela um recado especial para o seu momento material: você está diante de uma oportunidade para expandir seus horizontes com criatividade e inteligência emocional.",
      "A energia do número 3 favorece a comunicação, a expressão e a conexão com pessoas certas . Esse é o momento ideal para falar sobre seus projetos, negociar, vender suas ideias e tornar sua presença percebida. Mas atenção: para crescer, é preciso organizar o caos interno , focar e dar direção ao seu entusiasmo.",
      "Cuidado com dispersões: o excesso de ideias pode ser tão perigoso quanto a ausência delas. Não perca energia com promessas vazias ou conversas que não geram resultado. Transforme inspiração em ação concreta.",
      "Este é também um bom ciclo para ativar o marketing pessoal, impulsionar seu negócio, buscar parcerias ou novas formas de renda. A prosperidade vem quando você se posiciona com clareza e brilha com autenticidade .",
      "Dica energética: Use esta carta como um símbolo de ativação criativa . Salve no seu celular ou compartilhe com quem você quer inspirar. Ela carrega a vibração da alegria, da expansão e do magnetismo pessoal.",
      "Mostre ao mundo quem você é — e a abundância vai reconhecer seu nome."
    ]
  },
  {
    "numero": 4,
    "titulo": "Estrutura, Raízes e Construção da Prosperidade",
    "mensagens": [
      "Olá, sou é Oscar Ahumada , e a energia que rege seu momento agora é clara: é hora de construir com base sólida, firmeza e paciência.",
      "O número 4 traz a força da estrutura, da disciplina e da realização concreta . Nada será conquistado no impulso. Este é um tempo para planejar com lógica, investir com consciência e agir com constância.",
      "Se você busca resultados duradouros na vida financeira, comece arrumando sua casa interna: Organize documentos, revise contratos, corte gastos desnecessários e elimine pendências. Esse ciclo exige maturidade financeira e visão de longo prazo.",
      "Não é momento para riscos ou aventuras. Mas sim para preparar o terreno onde a abundância possa crescer com firmeza.",
      "Alerta importante: Cuidado com a rigidez excessiva. O 4 pode trazer teimosia e medo de mudança. Mantenha a ordem, mas não bloqueie o fluxo da vida. Flexibilidade também é sabedoria.",
      "Dica energética: Esta carta carrega o símbolo da estabilidade financeira construída com consciência. Salve-a como um lembrete diário: sua segurança material nasce da sua postura firme e responsável.",
      "Quem planta com estratégia, colhe com fartura. O universo recompensa os construtores."
    ]
  },
  {
    "numero": 5,
    "titulo": "Mudança, Movimento e Liberdade Financeira",
    "mensagens": [
      "Olá, sou Oscar Ahumada, e hoje trago uma mensagem para quem está em um momento de transição no campo material .",
      "A energia do número 5 traz movimento, inovação e libertação de antigos padrões . Se você está sentindo inquietação ou vontade de mudar algo na sua vida financeira, isso não é por acaso — é a vibração pedindo evolução e coragem para sair do automático.",
      "Este ciclo favorece negócios criativos, novas fontes de renda, viagens profissionais, mudanças de carreira ou até uma nova forma de lidar com o dinheiro .",
      "Mas atenção: tanta liberdade pode gerar instabilidade se você não tiver foco. Evite gastos impulsivos, decisões apressadas ou promessas fáceis demais. A chave está em inovar com responsabilidade.",
      "Se algo não está funcionando mais, não insista apenas por segurança. Talvez seja hora de soltar o que já cumpriu seu papel e abrir espaço para o novo. Confie no seu instinto — e tenha estratégia.",
      "Dica energética: Use esta carta como um convite à flexibilidade inteligente . Salve-a e leia sempre que sentir medo da mudança. Ela carrega a energia de quem se reinventa e prospera.",
      "Lembre-se: o dinheiro gosta de circular. E quem aprende a fluir com consciência, atrai a verdadeira liberdade."
    ]
  },
  {
    "numero": 6,
    "titulo": "Equilíbrio, Responsabilidade e Cuidado com as Finanças",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e hoje venho te lembrar que a prosperidade verdadeira começa onde há equilíbrio entre dar e receber.",
      "A energia do número 6 pede que você olhe para o material com responsabilidade emocional. Como você tem cuidado da sua vida financeira? Tem assumido seus compromissos? Tem se doado além do necessário e esquecido de si?",
      "Este ciclo revela um momento importante para assumir com maturidade seus deveres , tanto com você quanto com os outros. Talvez você esteja sendo chamado a sustentar algo maior: uma família, um negócio ou uma causa.",
      "Mas atenção: cuidado com o excesso de generosidade , principalmente quando isso compromete sua estabilidade. Aprenda a ajudar sem se sacrificar .",
      "Este também pode ser um tempo para resolver questões com imóveis, heranças, contratos familiares ou dívidas emocionais ligadas ao dinheiro .",
      "Dica energética: Use esta carta como uma lembrança de que cuidar da vida material com amor e lucidez é também um ato espiritual. Salve-a no seu celular e leia sempre que sentir dúvidas sobre o quanto doar e o quanto manter.",
      "Quem honra seus compromissos com equilíbrio constrói um caminho sólido, justo e próspero."
    ]
  },
  {
    "numero": 7,
    "titulo": "Silêncio, Estratégia e Sabedoria na Vida Material",
    "mensagens": [
      "Olá, aqui é Oscar Ahumada , e hoje venho te lembrar que nem todo avanço acontece no barulho. Às vezes, crescer é silenciar para escutar a voz da alma.",
      "O número 7 traz a vibração da análise, introspecção e inteligência estratégica. Este é um ciclo que te convida a olhar com profundidade para sua relação com o dinheiro e com o merecimento .",
      "Você está construindo sua prosperidade baseado na sua verdade — ou no medo de não ter? Está agindo por impulso ou com sabedoria?",
      "Este momento é ideal para estudar finanças, planejar investimentos, analisar contratos e buscar orientação espiritual ou profissional antes de agir.",
      "Alerta espiritual: Evite decisões apressadas. O 7 não gosta de pressa. Ele ensina que o verdadeiro poder nasce do autoconhecimento . Desconfie de atalhos fáceis ou promessas ilusórias.",
      "?? Sua riqueza pode estar escondida nos bastidores, no silêncio do que você ainda não viu. Confie na sua intuição. Ouça mais. Fale menos. Planeje com fé.",
      "Dica energética: Salve esta carta como um talismã da sabedoria. Leia-a sempre que sentir ansiedade ou medo de ficar para trás. Ela te lembra que quem anda no próprio tempo nunca chega atrasado.",
      "A intuição é a linguagem da alma — e a alma sabe onde está o ouro."
    ]
  },
  {
    "numero": 8,
    "titulo": "Poder, Justiça e Realização Financeira",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e hoje venho te lembrar que você tem uma missão com o poder. E o momento de reconhecer isso é agora.",
      "A energia do número 8 rege o universo das conquistas, do dinheiro, do comando e da justiça. Esse ciclo anuncia uma fase de colheita, ambição consciente e grandes oportunidades de crescimento material . Mas cuidado: tudo o que você plantar, será devolvido com precisão.",
      "Se você vem agindo com verdade, disciplina e ética, este é o momento de ver os frutos aparecerem. Mas se houver desequilíbrio, desorganização ou orgulho, o universo pode te trazer lições duras para que você volte ao eixo.",
      "Este é um excelente período para negócios, investimentos, renegociações, aumento de renda ou expansão profissional. Mas exige que você esteja no controle emocional da sua vida financeira. Não seja refém nem do medo, nem da ganância.",
      "Alerta consciente: Evite confrontos de poder. O 8 amplifica tudo. Use sua força para construir, não para dominar. O dinheiro é uma energia espiritual e responde à sua vibração.",
      "Dica energética: Salve esta carta como um lembrete do seu poder de manifestação e liderança. Leia-a toda vez que duvidar da sua capacidade de prosperar.",
      "Você nasceu para conquistar — e o universo está pronto para reconhecer quem se posiciona com integridade."
    ]
  },
  {
    "numero": 9,
    "titulo": "Desapego, Transição e Propósito Maior",
    "mensagens": [
      "Olá, aqui é Oscar Ahumada , e a mensagem de hoje é para te lembrar que nem tudo que você perde é uma derrota. Às vezes, é a vida te libertando para algo maior.",
      "O número 9 fala de encerramentos, desapego e transformação profunda. Este momento da sua jornada material pede coragem para finalizar ciclos, deixar ir o que já não tem mais propósito e liberar o que te prende ao passado.",
      "Se existe algo que está te desgastando — uma dívida, um projeto que não flui, uma sociedade desequilibrada — talvez seja hora de soltar com consciência . Desapegar também é um ato de poder.",
      "A abundância verdadeira se aproxima de quem está leve e disponível para o novo. Você não pode preencher a mão que ainda está agarrada ao que foi.",
      "Alerta da alma: Não confunda estabilidade com estagnação. Este ciclo ensina que a prosperidade também é um ato de entrega. A vida material responde melhor quando você age com propósito — e não apenas por apego.",
      "Dica energética: Salve esta carta como um símbolo de libertação e cura financeira. Leia-a quando sentir medo de perder algo. Ela vai te lembrar que o que é seu por destino não será tirado — e o que está partindo, pode estar abrindo espaço para sua real missão.",
      "Desapegar é abrir espaço para o extraordinário."
    ]
  },
  {
    "numero": 10,
    "titulo": "O Portal da Renovação e das Novas Possibilidades",
    "mensagens": [
      "Olá, sou Oscar Ahumada, e hoje quero te lembrar que você está em um ponto de virada. Um novo ciclo começa — e ele te convida a recomeçar com coragem e presença.",
      "O número 10 , dentro da numerologia espiritual, é um portal. Ele representa a síntese do velho e o nascimento do novo. É como se o universo estivesse dizendo: você concluiu uma etapa — agora é hora de liderar sua próxima fase.",
      "Este é o momento ideal para:",
      "iniciar um novo projeto; lançar algo que estava guardado; revisar sua postura diante da prosperidade e tomar decisões com protagonismo.",
      "Mas atenção: com grandes inícios, vêm grandes responsabilidades. Evite cair na ansiedade ou querer fazer tudo ao mesmo tempo. Organize, priorize, comece — e confie.",
      "Alerta energético: Essa energia pode trazer orgulho, pressa ou impulsividade. O segredo é agir com firmeza, mas com humildade espiritual. Você não precisa provar nada — só precisa ser fiel à sua essência.",
      "Dica energética: Salve esta carta como símbolo de renascimento consciente. Ela te lembra que recomeçar com sabedoria é uma das formas mais elevadas de manifestar abundância.",
      "Cada novo ciclo é uma chance de fazer diferente — e melhor."
    ]
  },
  {
    "numero": 11,
    "titulo": "Visão, Liderança e Expansão Consciente",
    "mensagens": [
      "Olá, aqui é Oscar Ahumada , e a mensagem que trago para você hoje é sobre visão e liderança na sua vida material.",
      "O número 11 é um número mestre, uma vibração poderosa que une o espiritual e o material. Ele pede que você eleve seu olhar para além do óbvio, enxergue o todo e assuma a liderança do seu destino.",
      "Este é um momento para:",
      "Expandir sua consciência sobre o dinheiro e o poder;",
      "Inspirar e influenciar positivamente seu círculo e seu negócio;",
      "Buscar equilíbrio entre intuição e ação prática.",
      "Mas atenção: O 11 também pode trazer tensão emocional e sensibilidade exagerada . É fundamental que você cuide do seu equilíbrio energético para não se perder nas dúvidas ou ansiedades.",
      "Dica energética: Salve esta carta como um talismã para manter-se centrado e focado na missão maior. Lembre-se: liderar é servir com sabedoria e amor.",
      "Quando o olhar se eleva, o caminho se amplia — e a prosperidade se torna uma consequência natural.",
      "Com luz e poder, Oscar Ahumada O Numerólogo das Estrelas"
    ]
  },
  {
    "numero": 12,
    "titulo": "Disciplina, Persistência e Construção do Legado",
    "mensagens": [
      "Olá, sou Oscar Ahumada , trazendo para você hoje uma mensagem essencial sobre a construção do seu futuro material.",
      "A energia do número 12 traz um convite para exercitar a disciplina aliada à criatividade. Este é um ciclo em que a persistência e o esforço consistente podem abrir portas importantes.",
      "Lembre-se: grandes legados não são construídos da noite para o dia, mas sim com ações repetidas e focadas, mesmo quando a motivação parece ausente.",
      "Alerta consciente: Não permita que a procrastinação ou a dúvida interrompam seu progresso. Cuidado para não cair em armadilhas de perfeccionismo que te paralisam.",
      "Este é um momento para alinhar seus objetivos materiais com seu propósito mais profundo — fazendo cada passo com atenção, amor e foco.",
      "Dica energética: Salve esta carta para se lembrar que a constância e a fé na jornada são suas maiores aliadas. Use-a como um mantra: \"Eu construo meu legado com amor, disciplina e coragem.\"",
      "Com fé e determinação, Oscar Ahumada O Numerólogo das Estrelas"
    ]
  },
  {
    "numero": 13,
    "titulo": "Transformação, Renovação e Libertação Financeira",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e hoje trago uma mensagem poderosa para quem está passando por mudanças profundas no campo material.",
      "A energia do número 13 é um convite para a transformação verdadeira. Ela pede que você abrace o ciclo natural da vida: morte de velhos hábitos e nascimento de novas possibilidades.",
      "Se você sente que alguma parte da sua vida financeira está emperrada ou desgastada, essa é a hora de agir. Não tema o fim — ele é necessário para que algo melhor floresça.",
      "Alerta vital: Cuidado com resistências internas e medos que te prendem a situações que já não servem mais. A transformação pede coragem, entrega e, sobretudo, confiança no processo.",
      "Dica energética: Salve esta carta como um amuleto para os momentos difíceis de transição. Ela carrega a força da renovação e da coragem para abrir mão do que pesa.",
      "Lembre-se: o que parece fim é, na verdade, o começo do seu novo caminho."
    ]
  },
  {
    "numero": 14,
    "titulo": "Liberdade com Responsabilidade e Novas Escolhas",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e a mensagem de hoje é para te lembrar que a verdadeira liberdade nasce da responsabilidade consciente.",
      "A energia do número 14 traz um convite para que você encontre o equilíbrio entre o desejo de mudança e o compromisso com suas escolhas. Este é um momento para agir com sabedoria, coragem e disciplina , especialmente em relação às finanças e negócios.",
      "A liberdade que o 14 oferece não é anarquia; ela pede que você faça escolhas que ampliem seu campo de possibilidades sem comprometer sua estabilidade.",
      "Alerta consciente: Cuidado com excessos e decisões impulsivas que podem gerar instabilidade. Avalie cada passo com calma e não deixe que a vontade de fugir do comum te cegue para as consequências.",
      "Dica energética: Salve esta carta como um lembrete de que você é o responsável pela sua prosperidade. Use-a para fortalecer seu foco e lembrar que o equilíbrio entre ação e controle é a chave para o sucesso.",
      "Liberdade verdadeira é a que caminha lado a lado com a responsabilidade."
    ]
  },
  {
    "numero": 15,
    "titulo": "Harmonia, Sedução e Poder de Transformação",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e hoje a mensagem é sobre o poder da harmonia e do magnetismo em sua vida material.",
      "A energia do número 15 fala de equilíbrio entre a sensualidade, o prazer e a responsabilidade. Este é um momento para você usar sua capacidade de seduzir e influenciar positivamente as pessoas ao seu redor, especialmente no campo financeiro e profissional.",
      "Seja consciente do poder que você exerce e evite manipulações ou jogos que possam prejudicar sua reputação ou energia.",
      "Alerta importante: Evite desperdícios, gastos impulsivos ou decisões baseadas apenas no prazer momentâneo. Use sua força para construir relacionamentos sólidos e prósperos.",
      "Dica energética: Salve esta carta para lembrar que a verdadeira sedução vem da autenticidade e do equilíbrio interior. Ela é seu amuleto para atrair sucesso com charme e sabedoria.",
      "A energia do 15 transforma o prazer em poder quando usada com consciência."
    ]
  },
  {
    "numero": 16,
    "titulo": "Reflexão, Introspecção e Reestruturação Necessária",
    "mensagens": [
      "Olá, aqui é Oscar Ahumada , e hoje trago uma mensagem para você que está diante de um momento de pausa e revisão na sua vida material.",
      "A energia do número 16 convida ao autoconhecimento profundo, à reflexão e à reorganização das bases financeiras e emocionais . Este é um tempo para olhar com honestidade para o que não está funcionando, sem medo de mudar e reconstruir.",
      "Nem sempre o caminho para o sucesso é rápido ou fácil — às vezes, é preciso passar pelo silêncio e pela solitude para encontrar as respostas verdadeiras.",
      "Alerta consciente: Evite o isolamento extremo ou a autocrítica dura demais. Busque equilíbrio entre o olhar crítico e a compaixão consigo mesmo.",
      "Dica energética: Salve esta carta como um lembrete de que a pausa é uma força, não uma fraqueza. Ela ajuda a fortalecer sua estrutura interna para os passos futuros.",
      "Às vezes, cair é necessário para aprender a levantar com mais sabedoria e poder."
    ]
  },
  {
    "numero": 17,
    "titulo": "Visão, Esperança e Alinhamento com o Propósito",
    "mensagens": [
      "Olá, sou Oscar Ahumada , trazendo hoje uma mensagem de otimismo e direcionamento para sua jornada material.",
      "A energia do número 17 ilumina o caminho da realização e do reconhecimento, desde que você se mantenha alinhado com seu propósito verdadeiro. Este é um momento para cultivar a esperança e investir naquilo que faz sentido para você, com ética e fé.",
      "Mas lembre-se: conquistas sólidas nascem da congruência entre intenção, palavra e ação . Não deixe que ilusões ou atalhos desviem sua energia.",
      "Alerta consciente: Cuidado com o orgulho que pode bloquear aprendizados importantes. Mantenha a humildade como aliada para seguir crescendo.",
      "Dica energética: Salve esta carta para se lembrar de que o universo conspira a favor de quem age com integridade. Ela é seu lembrete diário para manter o foco no que realmente importa.",
      "Quando a visão é clara e o coração firme, o sucesso se torna inevitável."
    ]
  },
  {
    "numero": 18,
    "titulo": "Superação, Resiliência e Justiça Material",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e hoje trago uma mensagem sobre a importância da resiliência e do equilíbrio na sua vida material.",
      "A energia do número 18 convida você a enfrentar desafios com coragem e a buscar a justiça em todas as áreas financeiras e profissionais. Este é um ciclo para superar obstáculos, limpar pendências e fortalecer sua reputação e credibilidade.",
      "Alerta importante: Evite atitudes de vingança ou descontrole emocional que possam comprometer seu caminho. A justiça que você busca começa na sua postura ética e na maneira como você lida com as situações.",
      "Dica energética: Salve esta carta para lembrar que a verdadeira força está em permanecer firme diante das tempestades. Ela é um amuleto para quem sabe que toda dificuldade é uma oportunidade de crescimento.",
      "A justiça material se manifesta para quem age com equilíbrio e perseverança."
    ]
  },
  {
    "numero": 19,
    "titulo": "Realização, Liderança e Responsabilidade Pessoal",
    "mensagens": [
      "Olá, sou Oscar Ahumada , trazendo uma mensagem importante para quem está pronto para assumir o protagonismo na vida material.",
      "A energia do número 19 é poderosa e transformadora, trazendo oportunidades de liderança e reconhecimento. Este é um momento para assumir sua responsabilidade com coragem e visão clara, sabendo que suas escolhas reverberam além do financeiro.",
      "Alerta consciente: Evite o ego inflado e a ambição desmedida que podem gerar desequilíbrio. Lidere com humildade e propósito verdadeiro.",
      "Dica energética: Salve esta carta para lembrar que a verdadeira grandeza está no serviço consciente. Ela é seu guia para manter os pés no chão enquanto seus olhos alcançam as estrelas.",
      "Quem lidera com integridade atrai prosperidade duradoura.",
      "Com força e sabedoria, Oscar Ahumada O Numerólogo das Estrelas"
    ]
  },
  {
    "numero": 20,
    "titulo": "Renovação, Alinhamento e Novos Começos Conscientes",
    "mensagens": [
      "Olá, sou Oscar Ahumada , trazendo uma mensagem de renovação para o seu momento material.",
      "A energia do número 20 representa o equilíbrio entre o passado e o futuro, pedindo que você alinhe suas ações com seu propósito maior. Este é um ciclo para deixar para trás padrões antigos e abrir espaço para novos começos, com consciência e responsabilidade.",
      "Alerta consciente: Evite a indecisão e o medo de mudar que podem paralisar sua evolução. Confie na força que vem do alinhamento interno e na coragem para recomeçar.",
      "Dica energética: Salve esta carta para se lembrar que cada fim é uma nova oportunidade. Ela é seu guia para transformar dúvidas em decisões firmes.",
      "O verdadeiro poder está em quem sabe renovar-se e avançar com fé."
    ]
  },
  {
    "numero": 21,
    "titulo": "Realização Plena e Manifestação da Abundância",
    "mensagens": [
      "Carta 21 — Realização Plena e Manifestação da Abundância",
      "Olá, sou Oscar Ahumada , e hoje trago uma mensagem para quem está pronto para colher os frutos do seu esforço.",
      "A energia do número 21 representa a realização plena, a manifestação do sucesso e da abundância material. Este é um momento para reconhecer tudo o que você conquistou e abrir-se para novas possibilidades de crescimento.",
      "Alerta consciente: Evite acomodação ou falta de foco, que podem estagnar sua evolução. Continue cultivando disciplina e propósito para que o sucesso seja duradouro.",
      "Dica energética: Salve esta carta como um lembrete da abundância que você merece. Ela é um amuleto para manter sua energia focada e sua mente aberta para o próximo ciclo.",
      "A prosperidade verdadeira nasce da gratidão e da ação consciente."
    ]
  },
  {
    "numero": 22,
    "titulo": "Mestre da Manifestação e Construção do Futuro",
    "mensagens": [
      "Olá, sou Oscar Ahumada , e hoje a mensagem é para você que está pronto para assumir seu papel como mestre criador da sua realidade material.",
      "O número 22 é o número dos mestres construtores, que unem visão espiritual e ação concreta. Este é um momento para transformar sonhos em projetos reais, com disciplina, sabedoria e coragem.",
      "Alerta consciente: Cuidado para não carregar o peso do mundo sozinho. Aprenda a delegar, confiar em parceiros e manter o equilíbrio entre o fazer e o ser.",
      "Dica energética: Salve esta carta como um talismã de força e equilíbrio. Ela é um lembrete de que o verdadeiro poder está na união da mente, do coração e da ação.",
      "Você é um arquiteto do seu destino — construa com fé, foco e paixão."
    ]
  }
];

const WHATSAPP = "5531972159908";
const OFERTA_DIA = "15/11/2026";
const DATA_LIMITE = "2026-11-16T00:00:00-03:00";
const CHAVE_JOGADA = "oscar-mm-jogo1-2026-v1";

function tempoOferta() {
  const agora = Date.now();
  const termina = new Date(DATA_LIMITE).getTime();
  const horarioBrasil = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit", month: "2-digit", year: "numeric",
  }).format(new Date(agora));
  return horarioBrasil === OFERTA_DIA ? Math.max(0, Math.floor((termina - agora) / 1000)) : 0;
}

function mensagemWhatsApp(texto: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

function cronometro(total: number) {
  const horas = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const segundos = String(total % 60).padStart(2, "0");
  return [horas, minutos, segundos];
}

export default function MeuMomentoMaterialJogo1() {
  const [numeroEscolhido, setNumeroEscolhido] = useState<number | null>(null);
  const [tempoRestante, setTempoRestante] = useState<number | null>(null);
  const resultadoRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const salvo = window.sessionStorage.getItem(CHAVE_JOGADA);
      if (salvo) {
        const numero = Number(salvo);
        if (Number.isInteger(numero) && numero >= 1 && numero <= 22) {
          setNumeroEscolhido(numero);
        }
      }
    } catch {
      // O jogo permanece utilizável quando o armazenamento está indisponível.
    }
    setTempoRestante(tempoOferta());
    const timer = window.setInterval(() => setTempoRestante(tempoOferta()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (numeroEscolhido === null) return;
    const frame = window.requestAnimationFrame(() => {
      resultadoRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [numeroEscolhido]);

  const carta = numeroEscolhido === null
    ? null
    : cartas.find((item) => item.numero === numeroEscolhido) ?? null;

  function escolherCarta(posicao: number) {
    if (numeroEscolhido !== null) return;
    // Cada carta tem uma interpretação única, e a posição escolhida é respeitada.
    setNumeroEscolhido(posicao);
    try {
      window.sessionStorage.setItem(CHAVE_JOGADA, String(posicao));
    } catch { /* Sem armazenamento, mantém-se a escolha durante esta exibição. */ }
  }

  const [horas, minutos, segundos] = cronometro(tempoRestante ?? 0);
  const ofertaAtiva = tempoRestante !== null && tempoRestante > 0;

  return (
    <main className="mm-page">
      <div className="mm-wrap">
        <div className="mm-brand">OA <span>OSCAR AHUMADA</span></div>
        <div className="mm-subbrand">NUMERÓLOGO DAS ESTRELAS</div>
        <div className="mm-line" />
        <h1>MEU MOMENTO MATERIAL</h1>
        {!carta ? (
          <section className="mm-introduction">
            <h2>Escolha sua carta</h2>
            <p>Concentre-se no seu momento material, mentalize uma pergunta e toque em uma das 22 cartas. Esta é uma única jogada.</p>
            <div className="mm-deck" aria-label="Escolha uma das 22 cartas">
              {cartas.map((item) => (
                <button
                  key={item.numero}
                  type="button"
                  onClick={() => escolherCarta(item.numero)}
                  className="mm-card"
                  aria-label={`Escolher a carta ${item.numero}`}
                >
                  {/* A numeração é apenas acessível, não visível no verso. */}
                  <span className="mm-sr">Carta {item.numero}</span>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <>
            <article ref={resultadoRef} className="mm-result" aria-live="polite">
              <div className="mm-eyebrow">SUA CARTA REVELADA</div>
              <div className="mm-number">{carta.numero}</div>
              <h2>{carta.titulo}</h2>
              <div className="mm-message">
                {carta.mensagens.map((mensagem, index) => <p key={index}>{mensagem}</p>)}
              </div>
              <p className="mm-signature">Oscar Ahumada<br /><small>Numerólogo das Estrelas</small></p>
              <p className="mm-disclaimer">Esta carta oferece uma reflexão simbólica de autoconhecimento, não uma garantia de resultados financeiros.</p>
            </article>

            <section className="mm-promos" aria-label="Promoções especiais">
              <h2>UMA OPORTUNIDADE ESPECIAL PARA VOCÊ</h2>
              {ofertaAtiva ? (
                <>
                  <div className="mm-offer">
                    <p className="mm-tag">PROMOÇÃO ESPECIAL DO DIA</p>
                    <h3>MAPA NUMEROLÓGICO DAS PREVISÕES</h3>
                    <p>Suas previsões personalizadas <strong>em texto, sem consulta</strong>.</p>
                    <div className="mm-price">R$ 62,00</div>
                    <p className="mm-valid">Oferta válida somente hoje, 15/11/2026, até 23h59, horário de Brasília.</p>
                    <p className="mm-count-title">A oferta termina em:</p>
                    <div className="mm-clock" role="timer" aria-label={`${horas} horas, ${minutos} minutos e ${segundos} segundos restantes`}>
                      <span><strong>{horas}</strong><small>HORAS</small></span>
                      <span><strong>{minutos}</strong><small>MINUTOS</small></span>
                      <span><strong>{segundos}</strong><small>SEGUNDOS</small></span>
                    </div>
                    <a className="mm-buy" href={mensagemWhatsApp("Olá, Oscar Ahumada! Quero aproveitar a promoção de hoje de R$ 62,00 pelo Mapa Numerológico das Previsões em texto, sem consulta.")} target="_blank" rel="noopener noreferrer">QUERO APROVEITAR A OFERTA</a>
                  </div>

                  <div className="mm-offer mm-offer-alt">
                    <p className="mm-tag">CONDIÇÃO ESPECIAL PARA QUEM JÁ É CLIENTE</p>
                    <h3>VOCÊ QUE JÁ TEM SEU MAPA NUMEROLÓGICO TEM UM PRESENTE ESPECIAL!</h3>
                    <p>Se você já adquiriu seu Mapa Numerológico por <strong>R$ 260,00</strong>, hoje pode escolher uma destas condições pelo valor especial de <strong>R$ 62,00</strong>:</p>
                    <p><strong>1.</strong> Um Mapa Numerológico das Previsões em texto, sem consulta, para um parente.</p>
                    <p><strong>2.</strong> Uma sessão de Constelação Individual.</p>
                    <div className="mm-price">R$ 62,00</div>
                    <p className="mm-valid">Condição válida somente hoje, 15/11/2026, até 23h59, horário de Brasília.</p>
                    <a className="mm-buy" href={mensagemWhatsApp("Olá, Oscar Ahumada! Já adquiri meu Mapa Numerológico por R$ 260,00 e quero aproveitar a condição especial de R$ 62,00. Gostaria de escolher entre o mapa de previsões para um parente e a sessão de Constelação Individual.")} target="_blank" rel="noopener noreferrer">QUERO APROVEITAR A OFERTA</a>
                  </div>
                </>
              ) : (
                <p className="mm-expired">A promoção do dia 15/11/2026 foi encerrada. Para conhecer as condições atuais, entre em contato pelo WhatsApp.</p>
              )}
            </section>
          </>
        )}
        <p className="mm-site"><a href="https://www.oscarahumada.com.br">www.oscarahumada.com.br</a></p>
      </div>
      <style jsx>{`
        .mm-page{min-height:100vh;background:radial-gradient(circle at top,#13383a 0,#08191d 38%,#050e12 100%);color:#f4eee3;padding:38px 12px 55px;font-family:Arial,Helvetica,sans-serif}
        .mm-wrap{max-width:950px;margin:auto;text-align:center}
        .mm-brand{font:36px Georgia,serif;color:#e5c077;letter-spacing:2px}.mm-brand span{font:16px Arial,sans-serif;letter-spacing:2px;margin-left:8px;color:#eee1ca}
        .mm-subbrand{font-size:11px;letter-spacing:3px;margin-top:8px;color:#daba7c}.mm-line{width:100px;height:1px;background:#aa894b;margin:23px auto}
        h1{font:normal clamp(29px,5vw,51px) Georgia,serif;letter-spacing:2px;color:#efd39b;margin:0 0 18px}
        .mm-introduction h2,.mm-promos>h2{font:normal clamp(23px,4vw,33px) Georgia,serif;color:#f0d29c;margin:17px 0}
        .mm-introduction>p{max-width:640px;margin:0 auto 20px;line-height:1.7;color:#e9e0d3}
        .mm-deck{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px;max-width:775px;margin:30px auto}
        .mm-card{display:block;width:100%;aspect-ratio:199/348;border:1px solid #bc974e;border-radius:5px;background:#063039 url('/mm-verso-carta.jpg') center/100% 100% no-repeat;cursor:pointer;box-shadow:0 10px 18px #0009;transition:transform .2s,box-shadow .2s}
        .mm-card:hover,.mm-card:focus-visible{transform:translateY(-7px);box-shadow:0 15px 22px #000b;outline:2px solid #ffda8b;outline-offset:3px}
        .mm-sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
        .mm-result{scroll-margin-top:22px;max-width:760px;text-align:center;margin:30px auto 24px;padding:clamp(20px,5vw,45px);background:#0e2225;border:1px solid #b08f55;border-radius:15px;box-shadow:0 12px 35px #0006}
        .mm-eyebrow{text-align:center;font-size:12px;letter-spacing:3px;color:#d5ba85}.mm-number{font:76px Georgia,serif;color:#edc77c;text-align:center;margin-top:12px}
        .mm-result h2{font:normal clamp(24px,4vw,34px) Georgia,serif;text-align:center;color:#f1d5a3;margin:8px 0 28px}
        .mm-message{text-align:center;font-size:17px;line-height:1.8;color:#f1e9dd}.mm-message p{margin:0 0 18px}
        .mm-signature{line-height:1.6;color:#e7c990;margin-top:30px}.mm-signature small{font-size:12px;letter-spacing:1.2px}
        .mm-disclaimer{border-top:1px solid #536062;margin-top:30px;padding-top:16px;font-size:12px;line-height:1.5;color:#b8c2bb}
        .mm-promos{max-width:760px;margin:45px auto}.mm-offer{border:1px solid #d8b373;border-radius:16px;background:linear-gradient(155deg,#122e33,#091b1f);padding:clamp(23px,4vw,38px);margin:22px auto;color:#f8f2e7;box-shadow:0 14px 35px #0005}
        .mm-tag{font-size:12px;font-weight:bold;letter-spacing:2px;color:#efca84}.mm-offer h3{font:normal clamp(23px,4vw,32px) Georgia,serif;color:#f7dba2;margin:13px 0 22px}
        .mm-offer p{font-size:16px;line-height:1.65}.mm-price{font-weight:700;font-size:clamp(37px,7vw,53px);color:#f4ce83;margin:16px 0}.mm-valid{font-size:13px!important;color:#e4d6c2}
        .mm-count-title{font-size:13px!important;letter-spacing:1px}.mm-clock{display:flex;gap:9px;justify-content:center;margin:18px auto 27px}.mm-clock span{min-width:77px;border-radius:9px;background:#223d40;padding:11px 13px}
        .mm-clock strong{display:block;font-size:30px;color:#f4d28a;font-variant-numeric:tabular-nums}.mm-clock small{display:block;font-size:10px;letter-spacing:1px;color:#eee}
        .mm-buy{display:block;max-width:500px;margin:22px auto 0;background:linear-gradient(180deg,#ffe5a4,#e5ae47);border:1px solid #fff1ca;color:#17272a;font-weight:800;text-decoration:none;border-radius:40px;padding:16px 18px;box-shadow:0 7px 18px #0005}
        .mm-buy:hover,.mm-buy:focus-visible{filter:brightness(1.08);outline:2px solid #fff;outline-offset:3px}
        .mm-offer-alt{background:linear-gradient(155deg,#1a3032,#0b1a1c)}.mm-expired{padding:24px;line-height:1.7;background:#173037;border:1px solid #876f46;border-radius:12px}
        .mm-site{font-size:12px;margin-top:45px}.mm-site a{color:#dbc28f;text-decoration:none}
        @media(max-width:640px){.mm-page{padding:25px 10px 45px}.mm-brand{font-size:31px}.mm-brand span{font-size:12px;letter-spacing:1px}.mm-deck{grid-template-columns:repeat(4,minmax(0,1fr));gap:9px}.mm-message{font-size:16px}}
        @media(max-width:350px){.mm-deck{grid-template-columns:repeat(3,minmax(0,1fr))}.mm-clock span{min-width:70px;padding:10px 6px}}
      `}</style>
    </main>
  );
}
