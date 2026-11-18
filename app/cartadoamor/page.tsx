"use client";

import { useEffect, useState } from "react";

const textos: string[][] = [
  [
    "Quando a Carta 1 surge na pergunta do amor, o Universo não está sussurrando… está declarando: você tem mais poder do que imagina.",
    "O Mago é iniciativa. É magnetismo. É a capacidade de transformar intenção em realidade. No campo afetivo, essa carta revela que você não está aqui para esperar ser escolhido(a) — você está aqui para escolher.",
    "Se está solteiro(a), essa energia indica que um novo amor pode surgir através da sua atitude. O número 1 não cruza os braços; ele cria oportunidades. Uma mensagem enviada, um convite aceito, um ambiente novo frequentado… o amor responde à ação.",
    "Se está em relacionamento, esta carta aponta para renovação. Comunicação clara, criatividade e presença consciente podem reacender a chama. O número 1 lembra que palavras têm poder — use-as para construir, não para ferir.",
    "Alerta Consciente: O lado sombra do Mago é a manipulação. Cuidado com jogos emocionais, promessas vazias ou querer controlar o outro. Amor verdadeiro não se impõe, se inspira.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou agindo com autenticidade ou tentando provar algo? O amor que você deseja começa na forma como você se posiciona.",
    "O número 1 no amor é iniciativa com verdade, desejo com propósito e conexão com responsabilidade. Você não está à mercê do destino — você é coautor da sua história afetiva.",
    "E se deseja compreender como seu nome e sua vibração pessoal influenciam diretamente seus relacionamentos, aprofunde-se na sua própria energia."
  ],
  [
    "Quando a Carta 2 se revela na pergunta do amor, a resposta não vem em gritos… vem em intuição.",
    "Aqui o amor não é impulso. É percepção. É aquela sensação que você tenta ignorar, mas que insiste em voltar. A Carta 2 fala de sensibilidade profunda, conexão espiritual e verdades que ainda não foram ditas — mas já foram sentidas.",
    "Se está solteiro(a), essa carta indica que antes de buscar alguém, você precisa ouvir a si mesmo(a). Existe um padrão se repetindo? Existe uma carência pedindo atenção? O amor certo não chega quando você está vazio(a), mas quando está consciente.",
    "Se está em relacionamento, algo pode estar oculto — não necessariamente uma traição, mas sentimentos não expressos. Conversas precisam acontecer. O que não é falado cria distância invisível.",
    "Alerta Consciente: Cuidado com o excesso de silêncio. Intuição é sabedoria, mas suposição é ilusão. Não crie histórias na sua mente sem buscar clareza.",
    "Direcionamento Espiritual: Feche os olhos e pergunte: essa relação me traz paz ou ansiedade? O amor verdadeiro traz serenidade, não confusão constante.",
    "A Carta 2 no amor ensina que nem tudo precisa ser exposto ao mundo — mas tudo precisa ser verdadeiro dentro de você. Sensibilidade não é fraqueza; é inteligência emocional elevada.",
    "E se deseja entender como sua vibração numérica influencia suas escolhas afetivas, aprofunde-se na energia do seu nome e da sua data de nascimento."
  ],
  [
    "CARTA 3 Quando a Carta 3 surge na pergunta do amor, a energia é clara: você nasceu para viver um amor abundante, não migalhas emocionais.",
    "A Carta 3 representa magnetismo natural, autoestima elevada e poder de atração. No campo afetivo, ela indica fertilidade emocional — seja para iniciar um relacionamento, fortalecer um vínculo ou até viver uma fase de maior prazer e conexão.",
    "Se está solteiro(a), essa carta anuncia fase favorável para atrair alguém que reconheça seu valor. Mas atenção: a energia do 3 não corre atrás, ela atrai. Trabalhe sua autoestima, sua presença, seu brilho. Amor não é caça, é sintonia.",
    "Se está em relacionamento, essa carta fala de crescimento. Pode indicar evolução da relação, planos a dois, construção de algo mais sólido ou até expansão da família. É tempo de nutrir o vínculo com carinho e maturidade.",
    "Alerta Consciente: Cuidado com a dependência emocional disfarçada de cuidado excessivo. Amar não é sufocar. Amor saudável respeita espaço e individualidade.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou me valorizando na mesma medida que valorizo o outro? Quem não reconhece o próprio valor aceita qualquer tipo de atenção.",
    "A Carta 3 no amor é beleza com consciência, desejo com respeito e entrega com autoestima. Ela lembra que você não precisa implorar por afeto — você precisa vibrar no seu melhor.",
    "E se deseja compreender como seu nome e sua vibração pessoal impactam diretamente seus relacionamentos, aprofunde-se na leitura do seu mapa numerológico."
  ],
  [
    "Quando a Carta 4 aparece na pergunta do amor, o recado é direto: amor precisa de base sólida.",
    "Aqui não falamos de paixão passageira, mas de estabilidade.",
    "O número 4 representa responsabilidade, proteção, maturidade emocional e construção a longo prazo. Ele não promete o mundo — ele constrói o mundo ao seu lado.",
    "Se está solteiro(a), essa carta indica que você pode atrair alguém mais maduro, estruturado ou com forte energia de liderança. Também pode ser um chamado para você assumir uma postura mais firme: definir o que quer e não aceitar menos.",
    "Se está em relacionamento, é hora de organizar a vida a dois. Conversas sobre futuro, planos concretos, decisões importantes. Amor sem direção vira confusão; amor com estrutura vira crescimento.",
    "Alerta Consciente: Cuidado com excesso de controle. Autoridade não é autoritarismo. Segurança não é posse. O número 4 equilibrado protege; o desequilibrado sufoca.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou construindo um relacionamento sólido ou apenas vivendo momentos soltos? Relacionamento sério exige posicionamento claro.",
    "O 4 no amor é compromisso, limites saudáveis e visão de futuro. Ele ensina que sentimento é importante — mas caráter e atitude sustentam a relação.",
    "E se você deseja entender como seus números influenciam sua postura afetiva e suas escolhas amorosas, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 5",
    "Quando a Carta 5 surge na pergunta do amor, o Universo fala de compromisso sério, valores alinhados e conexão espiritual.",
    "Aqui não se trata apenas de atração. Trata-se de princípios. O número 5 representa tradição, ética, respeito e construção baseada em algo maior do que o desejo momentâneo.",
    "Se está solteiro(a), essa carta indica possibilidade de conhecer alguém com intenções claras — alguém que busca estabilidade e não apenas aventura. Mas também é um chamado: seus valores estão definidos? Você sabe o que considera inegociável?",
    "Se está em relacionamento, é sinal de fortalecimento da união. Pode indicar oficialização, evolução da relação ou decisões importantes pautadas no respeito mútuo. Amor sem valores comuns dificilmente sustenta o tempo.",
    "Alerta Consciente: Cuidado para não viver um relacionamento apenas por pressão social ou tradição. Casar por medo da solidão não é compromisso, é fuga.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): essa relação está alinhada com meus princípios ou apenas com minhas emoções? O amor que dura nasce do alinhamento de propósito.",
    "O 5 no amor é lealdade, espiritualidade compartilhada e maturidade emocional. Ele lembra que relacionamento saudável não é improviso — é escolha consciente, todos os dias.",
    "E se você deseja compreender como seus números revelam seus padrões afetivos e seu destino amoroso, aprofunde-se na leitura do seu mapa numerológico."
  ],
  [
    "Quando a Carta 6 aparece na pergunta do amor, a mensagem é clara: o coração está diante de uma decisão importante.",
    "Essa carta fala de conexão intensa, atração verdadeira e encontros que marcam a alma. Mas, acima de tudo, fala de escolha consciente. Amor não é apenas sentir — é decidir permanecer.",
    "Se está solteiro(a), pode indicar a chegada de alguém que desperta emoções profundas. Porém, talvez você precise escolher entre passado e futuro, entre o confortável e o verdadeiro. Nem toda paixão é destino; algumas são teste.",
    "Se está em relacionamento, é hora de avaliar: vocês estão caminhando na mesma direção? Existe alinhamento de valores e planos? O número 6 pede maturidade para escolher o amor todos os dias — e não apenas quando é fácil.",
    "Alerta Consciente: Cuidado com triângulos amorosos ou indecisões prolongadas. Ficar em cima do muro pode custar oportunidades reais. O coração que não escolhe… perde.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou escolhendo por medo da solidão ou por verdade interior? Amor saudável nasce da liberdade, não da dependência.",
    "O 6 no amor representam união baseada em afinidade, desejo e propósito compartilhado. É química, sim — mas também é responsabilidade emocional.",
    "E se você deseja entender como seus números revelam seus padrões afetivos, seus desafios e seu destino amoroso, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 7",
    "Quando a Carta 7 surge na pergunta do amor, o recado é firme: ou você assume o controle da sua vida afetiva… ou será conduzido pelas circunstâncias.",
    "O 7 é avanço. É superação de obstáculos. É força emocional com foco. No amor, essa carta indica movimento — sair da estagnação, tomar decisões claras e não aceitar relações indefinidas.",
    "Se está solteiro(a), é hora de agir com confiança. Chega de esperar sinais eternos. O número 7 favorece atitudes objetivas: declarar interesse, encerrar ciclos passados, abrir espaço para o novo. Amor também exige coragem.",
    "Se está em relacionamento, pode indicar superação de conflitos e fortalecimento da união — desde que ambos estejam dispostos a caminhar na mesma direção. Um puxa para frente e o outro freia? Assim o carro não anda.",
    "Alerta Consciente: Cuidado com impulsividade ou querer vencer discussões a qualquer custo. Relacionamento não é competição. Se for para ganhar sozinho(a), você perde a parceria.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou conduzindo minha vida amorosa com clareza ou apenas reagindo aos acontecimentos? Quem assume o volante escolhe o destino.",
    "O 7 no amor representa determinação, foco e maturidade para seguir adiante. Ele mostra que obstáculos não são sinais para desistir — são testes para fortalecer.",
    "E se você deseja compreender como seus números revelam sua postura afetiva, seus desafios e seus ciclos amorosos, aprofunde-se na leitura do seu mapa numerológico."
  ],
  [
    "CARTA 8 Quando a Carta 8 aparece na pergunta do amor, o recado é claro: tudo o que foi plantado emocionalmente está prestes a dar frutos.",
    "A Justiça fala de equilíbrio, responsabilidade e verdade. No campo afetivo, ela revela que não há espaço para ilusões prolongadas. O relacionamento passa por um momento de clareza — onde atitudes pesam mais do que palavras.",
    "Se está solteiro(a), essa carta indica que você pode estar colhendo resultados de escolhas passadas. Padrões repetidos? Relações que não avançam? A energia do número 8 convida à autorresponsabilidade. Não é sobre culpa — é sobre consciência.",
    "Se está em relacionamento, pode representar decisões importantes: ajustes, acordos, conversas definitivas ou até formalizações. O que estiver desequilibrado precisará ser corrigido.",
    "Alerta Consciente: Cuidado com frieza excessiva ou julgamento severo. Amor não é tribunal, mas também não é terra sem lei. Equilíbrio é a palavra-chave.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou sendo justo(a) comigo e com o outro? Relacionamentos saudáveis exigem reciprocidade verdadeira.",
    "O 8 no amor é maturidade emocional. Ela lembra que cada escolha cria um efeito. Se você deseja lealdade, ofereça lealdade. Se deseja respeito, pratique respeito.",
    "E se você quer entender como seus números revelam seus ciclos afetivos, desafios cármicos e aprendizados amorosos, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 9",
    "Quando a Carta 9 surge na pergunta do amor, a mensagem não fala de ausência… fala de profundidade.",
    "O número 9 representa introspecção, maturidade emocional e sabedoria interior. No amor, essa carta indica um período de reflexão. Talvez não seja momento de buscar fora, mas de compreender o que está dentro.",
    "Se está solteiro(a), pode ser uma fase necessária de autoconhecimento. Não é solidão — é preparação. O Eremita ensina que quem não aprende com os relacionamentos passados tende a repeti-los.",
    "Se está em relacionamento, essa carta pode indicar necessidade de espaço saudável. Não para afastar, mas para fortalecer. Conversas profundas, revisões de atitudes e silêncio consciente podem trazer clareza.",
    "Alerta Consciente: Cuidado para não confundir introspecção com isolamento emocional. Fechar-se completamente impede o amor de entrar.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou buscando alguém para preencher um vazio ou para compartilhar uma plenitude? Relacionamento saudável nasce de duas pessoas inteiras.",
    "O 9 no amor é sabedoria, paciência e profundidade. Ele lembra que o tempo certo é mais importante do que a pressa.",
    "E se você deseja compreender como seus números revelam seus padrões afetivos, seus ciclos de aprendizado e suas tendências emocionais, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "Quando a Carta 10 aparece na pergunta do amor, prepare-se: algo está prestes a mudar.",
    "A energia do número 10 fala de ciclos, viradas inesperadas e encontros que parecem obra do destino. No amor, ela indica que situações estagnadas podem ganhar movimento — para melhor ou para um necessário encerramento.",
    "Se está solteiro(a), essa carta anuncia oportunidades inesperadas. Um reencontro, uma mensagem surpresa, alguém que surge quando você menos espera. Mas lembre-se: sorte favorece quem está disponível emocionalmente.",
    "Se está em relacionamento, pode indicar uma nova fase. Ajustes, mudanças de planos, decisões importantes. O que estava morno pode aquecer — ou o que estava instável pode finalmente se definir.",
    "Alerta Consciente: Cuidado com a passividade. O 10 gira, mas você escolhe como reagir. Não coloque toda responsabilidade no “destino”.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou resistindo às mudanças ou fluindo com maturidade? Ciclos se encerram para que outros mais alinhados com sua evolução comecem.",
    "A energia do número 10 no amor representa movimento cármico, aprendizado e oportunidades que surgem para alinhar você ao seu verdadeiro caminho afetivo.",
    "E se você deseja compreender como seus números revelam seus ciclos amorosos, reencontros cármicos e fases decisivas, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 11",
    "Quando a Carta 11 surge na pergunta do amor, o Universo revela que o maior poder não está na intensidade… está no equilíbrio.",
    "A energia do número 11 representa autocontrole, maturidade emocional e coragem para amar sem perder a própria identidade. No campo afetivo, indica superação de inseguranças, ciúmes e impulsos que podem sabotar relações.",
    "Se está solteiro(a), essa carta mostra que você pode estar aprendendo a não aceitar qualquer conexão apenas para não estar só. Isso é evolução. Amor não é urgência — é escolha consciente.",
    "Se está em relacionamento, a energia do número 11 pede paciência e diálogo. Desafios podem existir, mas serão vencidos com serenidade, não com confrontos agressivos. Quem grita perde a razão; quem se posiciona com firmeza ganha respeito.",
    "Alerta Consciente: Cuidado com o orgulho. Força verdadeira não é rigidez. É saber ceder quando necessário e manter limites quando preciso.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou reagindo por impulso ou agindo com consciência? Relacionamentos sólidos se constroem com inteligência emocional.",
    "A Força no amor é paixão com equilíbrio, intensidade com maturidade e coragem para enfrentar medos internos.",
    "E se você deseja compreender como seus números revelam seus desafios emocionais, seus padrões afetivos e sua capacidade de liderança no amor, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 12 Quando a Carta 12 aparece na pergunta do amor, o recado é profundo: nem toda estagnação é atraso… às vezes é preparação.",
    "O número 12 fala de pausa, mudança de perspectiva e sacrifícios conscientes. No amor, pode indicar um momento em que as coisas parecem não avançar — mas essa suspensão tem propósito.",
    "Se está solteiro(a), talvez seja hora de rever padrões. Você está insistindo no mesmo tipo de pessoa esperando resultado diferente? O 12 convida a inverter o olhar antes de tentar novamente.",
    "Se está em relacionamento, pode haver sensação de bloqueio ou desgaste. Porém, antes de qualquer decisão precipitada, a carta pede reflexão. Às vezes, é preciso ceder o orgulho para recuperar a conexão.",
    "Alerta Consciente: Cuidado com a postura de vítima. Sacrifício saudável é escolha; sofrimento repetido é apego. Ficar preso por medo não é amor.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): o que essa situação está me ensinando sobre mim? Quando você muda a visão, o cenário muda junto.",
    "O 12 no amor é maturidade para esperar, sabedoria para observar e humildade para ajustar atitudes.",
    "E se você deseja compreender como seus números revelam seus ciclos de aprendizado afetivo, seus desafios cármicos e seus pontos de transformação, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 13 Quando a Carta 13 surge na pergunta do amor, não tema. Ela não anuncia destruição… anuncia transformação profunda.",
    "A energia do número 13 representa encerramentos necessários, renascimentos e cortes que libertam. No campo afetivo, indica que um ciclo está se encerrando — seja uma relação, um padrão emocional ou uma ilusão que já não se sustenta.",
    "Se está solteiro(a), essa carta mostra que você pode estar finalizando um vínculo do passado. E isso é essencial. Amor novo não entra onde o passado ainda ocupa espaço.",
    "Se está em relacionamento, pode indicar uma grande mudança: ou a relação se transforma para um nível mais maduro, ou chega ao fim. O que não evolui, termina. Simples assim.",
    "Alerta Consciente: Cuidado com apego ao que já perdeu a essência. Permanecer por medo da mudança prolonga o sofrimento.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou segurando algo que já cumpriu seu propósito? Encerrar ciclos não é fracasso — é coragem.",
    "O 13 no amor é libertação, limpeza emocional e oportunidade de renascimento afetivo. Ela corta para curar.",
    "E se você deseja compreender como seus números revelam seus ciclos de término, renascimento e aprendizados cármicos no amor, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "Quando a Carta 14 aparece na pergunta do amor, a mensagem é clara: harmonização.",
    "A energia do número 14 representa equilíbrio emocional, paciência e união de opostos. No campo afetivo, ela indica reconciliação, ajuste fino e construção gradual. Não é paixão explosiva — é conexão que se fortalece com maturidade.",
    "Se está solteiro(a), essa carta mostra que você está aprendendo a dosar expectativas. Nem 8 nem 80. Nem entrega total no primeiro encontro, nem frieza absoluta. Amor saudável nasce da medida certa.",
    "Se está em relacionamento, é sinal de cura. Desentendimentos podem ser resolvidos com diálogo calmo e compreensão mútua. A Temperança ensina que diferenças não precisam separar — podem complementar.",
    "Alerta Consciente: Cuidado com extremos emocionais. Ciúmes excessivos, cobranças exageradas ou indiferença fria desequilibram a relação.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou agindo com equilíbrio ou reagindo por impulso? Relacionamentos duradouros exigem constância, não intensidade descontrolada.",
    "A energia do 14 no amor é maturidade, diálogo e construção paciente. Ela lembra que vínculos fortes não se constroem na pressa — se constroem na consciência.",
    "E se você deseja compreender como seus números revelam sua forma de amar, seus desafios emocionais e seus ciclos de harmonização afetiva, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 15 Quando a Carta 15 surge na pergunta do amor, a energia é intensa. Aqui existe paixão, magnetismo e atração quase irresistível. Mas também existem sombras que precisam ser encaradas.",
    "O número 15 fala de apego, dependência emocional, relações tóxicas ou padrões repetitivos baseados em carência e medo de perder. É aquela conexão que mexe com tudo… mas nem sempre constrói algo saudável.",
    "Se está solteiro(a), pode indicar envolvimento com alguém extremamente sedutor(a), porém confuso(a) ou indisponível emocionalmente. A pergunta é: é amor ou apenas desejo?",
    "Se está em relacionamento, essa carta alerta para ciúmes excessivos, controle, manipulação ou dependência. Amor não deve aprisionar. Paixão sem consciência vira prisão emocional.",
    "Alerta Consciente: Cuidado com relações baseadas apenas em química física. Intensidade não é sinônimo de felicidade. Nem tudo que arde é luz — às vezes é só fogo descontrolado.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou preso(a) por desejo ou escolho permanecer por verdade? Liberdade é o primeiro sinal de um amor saudável.",
    "O 15 no amor é convite à libertação. Ele não aparece para destruir — aparece para revelar o que precisa ser curado.",
    "E se você deseja compreender como seus números revelam seus padrões de apego, seus desafios emocionais e suas conexões cármicas no amor, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "Quando a Carta 16 surge na pergunta do amor, a mensagem é intensa: algo precisa ruir para que algo mais verdadeiro possa nascer.",
    "A energia do número 16 representa revelações inesperadas, quedas de máscaras e rompimentos de estruturas frágeis. No campo afetivo, indica que uma verdade vem à tona — e ela pode mudar tudo.",
    "Se está solteiro(a), essa carta pode mostrar que uma ilusão sobre alguém está sendo quebrada. Aquela pessoa “perfeita” talvez não fosse tão alinhada assim. Melhor descobrir agora do que investir anos em algo que não se sustenta.",
    "Se está em relacionamento, o 16 aponta para crises necessárias. Discussões, revelações ou decisões abruptas podem acontecer. Mas entenda: a Torre não destrói o que é sólido — apenas o que já estava rachado.",
    "Alerta Consciente: Cuidado com reações impulsivas movidas por orgulho. Nem toda crise é fim; algumas são ajustes urgentes.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): essa estrutura estava realmente saudável ou eu estava ignorando sinais? O que cai, cai porque não tinha base forte.",
    "O 16 no amor é despertar. É libertação através da verdade. É fim de ilusões para abrir espaço ao que é autêntico.",
    "E se você deseja compreender como seus números revelam seus ciclos de ruptura, seus aprendizados cármicos e suas reconstruções afetivas, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "Quando a Carta 17 surge na pergunta do amor, o Universo envia um sopro de cura e renovação.",
    "A energia do número 17 representa esperança, leveza, proteção espiritual e fé restaurada. No campo afetivo, indica que um período de dor ou decepção está ficando para trás. A luz começa a reaparecer.",
    "Se está solteiro(a), essa carta anuncia um momento de autoconfiança e abertura emocional. Você já não carrega o peso do passado da mesma forma — e isso muda completamente o tipo de pessoa que você atrai.",
    "Se está em relacionamento, a Estrela traz reconexão, perdão e fortalecimento. É fase de reconstruir com verdade, com transparência e com mais maturidade emocional.",
    "Alerta Consciente: Cuidado apenas com expectativas idealizadas demais. Esperança é saudável; fantasia excessiva pode gerar frustração.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou permitindo que o passado apague minha luz ou estou pronto(a) para confiar novamente? O amor floresce onde existe fé e autenticidade.",
    "O 17 no amor é cura emocional, alinhamento espiritual e reencontro com sua própria essência afetiva.",
    "E se você deseja compreender como seus números revelam seus ciclos de cura, suas conexões espirituais e seus caminhos afetivos mais promissores, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 18",
    "Quando a Carta 18 aparece na pergunta do amor, o cenário pede cautela. Nem tudo é o que parece — e nem tudo que você sente está totalmente claro.",
    "O 18 fala de inseguranças, medos inconscientes e ilusões emocionais. No campo afetivo, pode indicar confusão, dúvidas ou situações mal explicadas. É aquele momento em que o coração sente algo… mas a mente ainda não entende.",
    "Se está solteiro(a), cuidado para não idealizar alguém sem realmente conhecer. A Lua pode indicar paixão construída sobre projeções. Antes de se entregar, observe mais.",
    "Se está em relacionamento, a carta sugere que algo precisa ser esclarecido. Falta de comunicação, segredos ou interpretações equivocadas podem estar gerando tensão. O que não é iluminado pela verdade cresce na sombra da desconfiança.",
    "Alerta Consciente: Evite decisões baseadas apenas em medo ou suposição. Nem toda insegurança tem fundamento real — às vezes é reflexo de experiências passadas.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): isso é intuição verdadeira ou é ansiedade disfarçada? Clareza emocional exige silêncio interior e honestidade consigo.",
    "O 18 no amor é convite à maturidade emocional. É hora de iluminar sombras internas antes de cobrar luz do outro.",
    "E se você deseja compreender como seus números revelam seus medos ocultos, seus padrões inconscientes e seus desafios emocionais no amor, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 19",
    "Quando a Carta 19 surge na pergunta do amor, a resposta é luminosa: felicidade verdadeira está ao alcance.",
    "O 19 representa alegria, transparência, autenticidade e sucesso afetivo. No campo do amor, indica fase positiva, relações claras e sentimentos correspondidos. Aqui não há jogo, não há mistério — há verdade.",
    "Se está solteiro(a), prepare-se para viver algo leve e sincero. Pode surgir alguém que traga espontaneidade e felicidade real. E detalhe importante: você também está mais confiante, mais seguro(a), mais radiante. Amor gosta de luz própria.",
    "Se está em relacionamento, essa carta anuncia harmonia, cumplicidade e fortalecimento do vínculo. Conversas fluem, planos se alinham e o sentimento se torna mais evidente.",
    "Alerta Consciente: A única cautela é evitar ingenuidade excessiva. Felicidade não é descuido. Continue valorizando o diálogo e o respeito.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou permitindo que minha verdadeira essência apareça no amor? Relacionamentos saudáveis florescem onde existe autenticidade.",
    "O 19 no amor é sucesso emocional, clareza de intenções e alegria compartilhada. É luz que aquece, não queima.",
    "E se você deseja compreender como seus números revelam seus períodos de expansão afetiva, suas compatibilidades e seu destino amoroso, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "Quando a Carta 20 surge na pergunta do amor, o chamado é claro: chegou a hora de despertar.",
    "O 20 representa reavaliação profunda, reencontros kármicos e decisões que mudam o rumo da vida afetiva. É uma carta de consciência elevada — onde você enxerga o que antes evitava ver.",
    "Se está solteiro(a), pode indicar o retorno de alguém do passado ou a oportunidade de resolver pendências emocionais. Mas atenção: voltar não significa repetir. É reencontro para evoluir, não para reviver erros.",
    "Se está em relacionamento, essa carta aponta para uma conversa definitiva. Ajustes, perdões, decisões importantes. O amor entra em fase de verdade absoluta. O que estiver alinhado renasce mais forte; o que não estiver, se encerra.",
    "Alerta Consciente: Cuidado com julgamentos severos — tanto com o outro quanto consigo. Culpa paralisa; consciência transforma.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou pronto(a) para viver um amor mais maduro do que aquele que vivi até agora? Despertar dói no início, mas liberta para sempre.",
    "O 20 no amor é libertação emocional, segunda chance consciente e alinhamento com o seu verdadeiro propósito afetivo.",
    "E se você deseja compreender como seus números revelam seus reencontros cármicos, seus aprendizados emocionais e suas decisões afetivas mais importantes, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "CARTA 21",
    "Quando a Carta 21 aparece na pergunta do amor, a energia é de conclusão feliz e expansão. Aqui falamos de plenitude emocional.",
    "O 21 representa realização, maturidade afetiva e sensação de ciclo completo. No campo do amor, indica que você alcançou — ou está prestes a alcançar — um nível de consciência que permite viver uma relação equilibrada e verdadeira.",
    "Se está solteiro(a), essa carta mostra que você já não busca alguém para preencher vazios. Você quer compartilhar conquistas, sonhos e propósito. E isso muda completamente o tipo de relacionamento que você atrai.",
    "Se está em relacionamento, é sinal de união sólida, cumplicidade e crescimento conjunto. Pode indicar oficialização, estabilidade ou até projetos maiores a dois. Amor que soma, não que divide.",
    "Alerta Consciente: Cuidado apenas com acomodação. Plenitude não significa parar de evoluir. Relações maduras continuam se reinventando.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou vivendo o amor como complemento ou como necessidade? Relacionamentos saudáveis nascem quando duas pessoas inteiras escolhem caminhar juntas.",
    "O 21 no amor é sucesso afetivo, harmonia e sensação de missão cumprida. É conexão que expande sua vida, não que limita.",
    "E se você deseja compreender como seus números revelam seus ciclos de realização amorosa, suas compatibilidades e seu destino afetivo, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ],
  [
    "Quando a Carta 22 surge na pergunta do amor, o Universo anuncia: é tempo de recomeçar sem medo.",
    "O 22 representa liberdade, espontaneidade e novas experiências. No amor, indica início inesperado, paixão leve ou decisão ousada. É energia de aventura emocional — mas com consciência.",
    "Se está solteiro(a), essa carta aponta para um novo ciclo afetivo. Pode surgir alguém diferente do seu padrão habitual. E talvez seja exatamente isso que você precisa. Às vezes, o amor começa quando você para de tentar controlar tudo.",
    "Se está em relacionamento, o Louco pede renovação. Sair da rotina, viver experiências novas, resgatar leveza. Relação séria não precisa ser pesada.",
    "Alerta Consciente: Cuidado com impulsividade irresponsável. Liberdade não é falta de compromisso. Amor saudável une espontaneidade com maturidade.",
    "Direcionamento Espiritual: Pergunte a si mesmo(a): estou disposto(a) a viver algo novo ou continuo preso(a) ao que já conheço? Quem não arrisca emocionalmente permanece no mesmo ciclo.",
    "O 22 no amor é coragem para sentir, ousadia para começar e fé no caminho que se abre.",
    "E se você deseja compreender como seus números revelam seus novos ciclos amorosos, suas tendências emocionais e seus caminhos de liberdade afetiva, aprofunde-se na leitura do seu mapa numerológico pessoal."
  ]
];

const relogio = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit",
  second: "2-digit", hourCycle: "h23"
});
function segundosBrasilia() {
  const [h, m, s] = relogio.format(new Date()).split(":").map(Number);
  return h * 3600 + m * 60 + s;
}
function formatar(s: number) {
  return [Math.floor(s / 3600), Math.floor(s % 3600 / 60), s % 60]
    .map(n => String(n).padStart(2, "0")).join(":");
}

export default function CartasDoAmor() {
  const [carta, setCarta] = useState<number | null>(null);
  const [agora, setAgora] = useState<number | null>(null);
  useEffect(() => {
    const atualizar = () => setAgora(segundosBrasilia());
    atualizar();
    const timer = window.setInterval(atualizar, 1000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [carta]);
  const ativa = agora !== null && agora >= 36000 && agora < 79200;
  const mensagem = `Olá, Oscar! Escolhi a Carta ${carta} do Amor e quero agendar a Constelação Amorosa Individual pela oferta de R$ 62,00.`;
  return (
    <main className="amor" style={{ width: "100%", maxWidth: "100%", minWidth: 0, boxSizing: "border-box", display: "block" }}>
      <header><span>OSCAR AHUMADA · NUMERÓLOGO DAS ESTRELAS</span><h1>AS CARTAS DO AMOR VOLTARAM!</h1></header>
      {carta === null ? (
        <><p className="intro">O que os números revelam sobre sua vida amorosa? Respire, pense no amor e escolha uma das 22 cartas gratuitamente.</p>
        <div className="cartas">{textos.map((_, i) => (
          <button key={i} onClick={() => setCarta(i + 1)} aria-label={`Escolher carta ${i + 1}`}>
            <img src="/cartadoamor/verso.jpg" alt="" /><span>{i + 1}</span>
          </button>
        ))}</div></>
      ) : (
        <div className="amor-leitura" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 720, margin: "24px auto 0", minWidth: 0 }}><div style={{ display: "flex", justifyContent: "center", width: "100%" }}><img className="revelada" style={{ display: "block", width: 140, maxWidth: "65%", height: "auto", margin: "0 auto 16px" }} src={`/cartadoamor/${carta}carta.jpg`} alt={`Carta ${carta} do amor`} /></div>
          <h2>CARTA {carta}</h2>
          <div className="resultado">{textos[carta - 1].map((p, i) => <p key={i}>{p}</p>)}</div>
          <section className="oferta">
            <h3>OFERTA EXCLUSIVA DO DIA</h3><h2>Constelação Amorosa Individual</h2>
            <p>Um momento de reflexão sobre seus padrões afetivos e sua história no amor.</p>
            {ativa ? <><p className="preco-antigo">De <del>R$ 260,00</del> por apenas</p><div className="preco">R$ 62,00</div>
              <p>Oferta termina às 22h (horário de Brasília)</p><div className="contador" aria-label="Tempo restante">{formatar(79200 - agora!)}</div>
              <a className="cta" href={`https://wa.me/5531972159908?text=${encodeURIComponent(mensagem)}`} target="_blank" rel="noopener noreferrer">QUERO TRANSFORMAR MINHA VIDA AMOROSA</a></> : <p>Oferta disponível todos os dias, das 10h às 22h, horário de Brasília.</p>}
          </section>
          <button className="voltar" onClick={() => setCarta(null)}>VOLTAR ÀS CARTAS</button>
        </div>
      )}
      <footer>Oscar Ahumada — Numerólogo das Estrelas</footer>
      <style jsx>{`
        .amor { min-height:100vh; background:#210d16; color:#fff6e8; padding:30px 16px; text-align:center; font-family:Arial,sans-serif; }
        header,.intro,.cartas,footer { max-width:880px; margin-left:auto; margin-right:auto; }
        header span { color:#e4c789; font-size:12px; letter-spacing:2px; }
        h1 { color:#efd096; font-size:clamp(26px,5vw,44px); margin:18px 0; }
        h2 { color:#efd096; margin:16px 0; font-size:26px; }
        h3 { color:#efd096; font-size:15px; letter-spacing:1px; }
        .intro { font-size:18px; line-height:1.6; margin-bottom:30px; }
        .cartas { display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:12px; }
        .cartas button { background:transparent; border:0; padding:0; color:#efd096; cursor:pointer; min-width:0; }
        .cartas img { display:block; width:100%; border-radius:8px; border:1px solid #b28a50; }
        .cartas span { display:block; padding:6px; }
        .amor .amor-leitura { display:flex !important; flex-direction:column !important; align-items:center !important; width:100% !important; max-width:720px !important; margin:24px auto 0 !important; padding:0 !important; box-sizing:border-box; text-align:center; float:none !important; height:auto !important; }
        .amor .amor-leitura .revelada { display:block !important; position:static !important; float:none !important; width:140px !important; max-width:65% !important; height:auto !important; margin:0 auto 16px !important; border-radius:8px; border:1px solid #b28a50; }
        .amor .amor-leitura > h2 { text-align:center; }
        .amor .amor-leitura .resultado, .amor .amor-leitura .oferta { display:block !important; position:static !important; float:none !important; width:100%; box-sizing:border-box; }
        .resultado { max-width:720px; margin:0 auto; text-align:left; font-size:17px; line-height:1.7; overflow-wrap:break-word; }
        .resultado p { margin:0 0 18px; }
        .oferta { max-width:600px; margin:32px auto; padding:24px 16px; border:1px solid #d5ad69; border-radius:16px; background:#491b2b; }
        .oferta p { margin:12px 0; line-height:1.5; }
        .preco-antigo { color:#ead9d5; }
        .preco { color:#ffe09c; font-size:52px; font-weight:bold; }
        .contador { font-size:32px; font-variant-numeric:tabular-nums; font-weight:bold; margin:14px 0; }
        .cta,.voltar { display:inline-block; border:0; border-radius:9px; padding:16px 20px; background:#e8c37d; color:#32121c; font-weight:bold; text-decoration:none; cursor:pointer; line-height:1.4; }
        .voltar { background:transparent; border:1px solid #b28a50; color:#efd096; }
        footer { margin-top:36px; color:#d7b985; font-size:13px; }
        @media(max-width:600px) { .cartas { grid-template-columns:repeat(4,minmax(0,1fr)); gap:8px; } .amor .amor-leitura .revelada { width:112px !important; } .resultado { font-size:16px; } }
      `}</style>
    </main>
  );
}
