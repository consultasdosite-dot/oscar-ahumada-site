
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConteudoCarta = {
  interpretacao: string;
  motivacao: string;
};

const conteudos: Record<number, ConteudoCarta> = {
  1: {
    interpretacao:
      "Esta carta indica um momento favorável para colocar suas contas em ordem e reorganizar sua vida financeira. Observe com atenção a maneira como administra seus recursos, seus compromissos e seus investimentos. Talvez seja a oportunidade de rever despesas, estabelecer novas prioridades e definir objetivos materiais mais claros. Antes de assumir responsabilidades financeiras, procure planejar suas decisões com prudência e consciência.",
    motivacao:
      "A prosperidade começa quando você assume o controle de suas escolhas e organiza seus recursos com responsabilidade.",
  },
  2: {
    interpretacao:
      "Amor e dinheiro podem estar influenciando um ao outro em sua vida. Esta carta convida você a observar se situações afetivas estão provocando dificuldades financeiras ou se preocupações materiais estão interferindo em seus relacionamentos. Procure compreender os motivos dessas situações e perceber se existe algum desequilíbrio na maneira como responsabilidades e recursos são compartilhados. Pergunte a si mesmo: quem está protegendo quem, e com qual finalidade?",
    motivacao:
      "O equilíbrio entre amor e dinheiro se fortalece quando existe diálogo, transparência e respeito pelas necessidades de cada pessoa.",
  },
  3: {
    interpretacao:
      "Sua vida social e profissional poderá oferecer oportunidades interessantes de crescimento. Esta carta destaca sua inteligência, sua capacidade de comunicação e o potencial de conquistar novos espaços. Aproveite para apresentar ideias, ampliar contatos e demonstrar suas habilidades. Talvez seja o momento de participar de projetos que aumentem sua visibilidade profissional e contribuam para alcançar melhores resultados materiais.",
    motivacao:
      "Seu crescimento ganha força quando você transforma inteligência, comunicação e iniciativa em oportunidades concretas.",
  },
  4: {
    interpretacao:
      "Esta carta apresenta perspectivas favoráveis para consolidar sua segurança financeira e avaliar investimentos patrimoniais. Projetos relacionados à aquisição de bens, à organização do patrimônio ou ao fortalecimento de sua estabilidade poderão ganhar importância. Entretanto, nenhuma decisão deve ser tomada apenas pelo entusiasmo. Analise os riscos, suas condições financeiras e os compromissos envolvidos. A energia desta carta destaca a importância de construir bases sólidas para seu futuro.",
    motivacao:
      "A segurança material é construída com planejamento, perseverança e decisões conscientes.",
  },
  5: {
    interpretacao:
      "Novas possibilidades poderão surgir no mundo dos negócios, dos contatos profissionais e das questões que exigem acordos ou decisões formais. Esta carta apresenta um período de movimento financeiro e oportunidades de expansão. Procure conhecer pessoas, desenvolver parcerias e avaliar projetos que possam contribuir para seu crescimento. Mantenha atenção às responsabilidades envolvidas e busque informações antes de assumir compromissos.",
    motivacao:
      "Oportunidades podem surgir de novos contatos, mas seus resultados dependem da maneira como você se prepara e age.",
  },
  6: {
    interpretacao:
      "Decisões relacionadas às finanças, aos negócios ou a questões de justiça poderão exigir responsabilidade e serenidade. Esta carta recomenda objetividade, organização e atenção aos detalhes. Evite agir sob pressão e procure registrar informações importantes, especialmente quando estiver avaliando contratos, acordos ou compromissos financeiros. Mantenha seus objetivos claros e considere todas as consequências antes de decidir.",
    motivacao:
      "A tranquilidade nas decisões financeiras nasce da informação, da organização e da responsabilidade.",
  },
  7: {
    interpretacao:
      "Chegou o momento de refletir sobre seus caminhos e encontrar soluções para situações que parecem difíceis. Esta carta destaca a importância da análise, da concentração e do conhecimento. Em vez de tomar decisões precipitadas, procure compreender os fatos e utilizar sua experiência para identificar alternativas. O número 7 está simbolicamente associado à sabedoria e ao aprofundamento intelectual, qualidades que poderão contribuir para reorganizar sua vida material.",
    motivacao:
      "Seu conhecimento pode se transformar em uma grande ferramenta para superar desafios e construir novas possibilidades.",
  },
  8: {
    interpretacao:
      "Esta carta apresenta perspectivas favoráveis de crescimento financeiro e realização material. É um momento para reconhecer o valor de seus esforços e observar oportunidades de colher resultados de projetos anteriores. Você poderá considerar novos investimentos ou iniciativas profissionais, desde que existam condições adequadas. Aproveite seu entusiasmo para planejar os próximos passos e administrar com responsabilidade aquilo que conquistar.",
    motivacao:
      "A realização material ganha consistência quando suas oportunidades são acompanhadas de planejamento e dedicação.",
  },
  9: {
    interpretacao:
      "Esta carta traz uma mensagem especial sobre proteção, generosidade e solidariedade. Talvez alguém próximo esteja precisando de sua atenção ou de uma ajuda que poderá fazer diferença em sua vida. Observe as pessoas que enfrentam dificuldades e procure compreender de que maneira poderá contribuir. A colaboração pode envolver recursos materiais, orientação, conhecimento ou simplesmente disponibilidade para ouvir. Ofereça aquilo que estiver ao seu alcance, preservando também suas próprias necessidades.",
    motivacao:
      "A verdadeira riqueza também se manifesta na capacidade de compartilhar, acolher e transformar positivamente a vida de alguém.",
  },
  10: {
    interpretacao:
      "Esta carta destaca a possibilidade de colher resultados importantes de iniciativas e esforços realizados anteriormente. Negócios, projetos profissionais ou decisões financeiras poderão apresentar novos desdobramentos. Uma mudança significativa pode modificar sua maneira de administrar recursos e ampliar suas perspectivas de crescimento. Observe como seus projetos estão se desenvolvendo e procure agir com atenção diante das oportunidades.",
    motivacao:
      "Os resultados que você deseja conquistar começam a ganhar forma quando preparação e oportunidade caminham juntas.",
  },
  11: {
    interpretacao:
      "Sua vida profissional poderá entrar em uma fase de crescimento e reconhecimento. Esta carta representa o desejo de alcançar uma posição mais adequada à sua experiência, aos seus conhecimentos e aos méritos construídos ao longo do tempo. Talvez surjam oportunidades de assumir novas responsabilidades ou ampliar sua atuação. Reconheça suas capacidades e prepare-se para demonstrar o valor de seu trabalho.",
    motivacao:
      "Sua experiência merece reconhecimento, e sua determinação pode abrir caminhos para alcançar novos objetivos profissionais.",
  },
  12: {
    interpretacao:
      "Talvez você esteja enfrentando dificuldades para abandonar um projeto ou uma situação que exigiu muito esforço e dedicação. Esta carta recomenda reflexão e paciência antes de tomar decisões definitivas. Nem sempre o momento é apropriado para insistir ou mudar de direção rapidamente. Avalie aquilo que construiu, considere as alternativas existentes e procure compreender se é necessário esperar, reorganizar ou transformar seus planos.",
    motivacao:
      "Saber esperar também é uma demonstração de sabedoria quando existe clareza sobre aquilo que você deseja preservar.",
  },
  13: {
    interpretacao:
      "Esta carta alerta para a possibilidade de afastamento ou interrupção de um projeto profissional ou financeiro. Antes de assumir novos compromissos, procure analisar cuidadosamente os riscos envolvidos. Se estiver negociando contratos, parcerias ou investimentos, valorize acordos claros e devidamente formalizados. Evite basear decisões importantes apenas em promessas ou expectativas. Caso ainda não existam condições seguras para avançar, considere aguardar.",
    motivacao:
      "A prudência protege suas conquistas e permite que seus próximos passos sejam dados com mais segurança.",
  },
  14: {
    interpretacao:
      "Esta carta destaca sua capacidade de liderança e a importância de exercer o poder com equilíbrio. Talvez você esteja assumindo responsabilidades que exigem paciência, compreensão e tolerância diante das limitações de outras pessoas. Nem todos poderão agir com a mesma rapidez ou capacidade que você. Procure respeitar diferenças, delegar tarefas quando necessário e conduzir situações profissionais com serenidade.",
    motivacao:
      "A liderança se fortalece quando o conhecimento é acompanhado de paciência, respeito e capacidade de compreender as pessoas.",
  },
  15: {
    interpretacao:
      "Esta carta convida você a refletir sobre sua relação com o dinheiro, o poder e as conquistas materiais. Pergunte a si mesmo se está exigindo resultados excessivos ou permitindo que a ambição prejudique sua tranquilidade. O crescimento financeiro precisa ser acompanhado de responsabilidade e equilíbrio. Por outro lado, se você tem dedicado muito esforço sem receber uma remuneração adequada, talvez seja o momento de reavaliar seus ganhos e reconhecer seu valor profissional.",
    motivacao:
      "Prosperar também significa saber valorizar seu trabalho sem permitir que o dinheiro determine todos os seus princípios.",
  },
  16: {
    interpretacao:
      "Esta carta destaca a fertilidade de suas ideias e o potencial de desenvolvimento de um projeto importante. Talvez esteja chegando o momento de recuperar a confiança e transformar dificuldades em oportunidades. Observe seus talentos, valorize suas capacidades e procure identificar como poderá aplicá-los de maneira prática. Acredite em seu potencial, mas acompanhe sua determinação com planejamento e atitudes concretas.",
    motivacao:
      "Seus talentos podem transformar possibilidades em realizações quando você decide colocá-los em movimento.",
  },
  17: {
    interpretacao:
      "A carta 17, simbolicamente associada à Estrela, apresenta uma mensagem de esperança e perspectivas favoráveis para a vida financeira e profissional. Seus esforços poderão encontrar reconhecimento e novas oportunidades de crescimento. Entretanto, o entusiasmo precisa caminhar ao lado da consciência e da seriedade. Organize seus objetivos e procure agir com responsabilidade para construir uma realidade material mais satisfatória.",
    motivacao:
      "Sua estrela brilha com mais intensidade quando você une esperança, competência e atitudes conscientes.",
  },
  18: {
    interpretacao:
      "Chegou o momento de despertar para novas possibilidades e reavaliar a direção de sua vida profissional ou financeira. Talvez você esteja percebendo que algumas decisões anteriores não produziram os resultados desejados. Esta carta convida você a reagir, reorganizar prioridades e recuperar a iniciativa. Em vez de permanecer preso às dificuldades, procure identificar o que pode ser transformado a partir de agora.",
    motivacao:
      "Hoje pode ser o ponto de partida para uma nova fase, desde que você decida recuperar o comando de seus objetivos.",
  },
  19: {
    interpretacao:
      "Esta carta destaca a responsabilidade que acompanha suas decisões, especialmente quando outras pessoas dependem de sua orientação ou de seus resultados. Talvez seja necessário demonstrar maior segurança, organização e capacidade de liderança. Observe como suas atitudes influenciam aqueles que convivem ou trabalham com você. Exercitar o espírito de comando significa assumir compromissos com clareza, responsabilidade e respeito.",
    motivacao:
      "A verdadeira liderança se revela quando suas atitudes transmitem segurança e inspiram confiança.",
  },
  20: {
    interpretacao:
      "Esta carta convida você a refletir sobre a maneira como utiliza seu poder de decisão. Talvez esteja fazendo julgamentos ou críticas sem conhecer todos os fatos. Antes de agir, procure compreender a situação e avaliar as informações disponíveis. Se existem motivos reais para promover mudanças, será importante transformar suas palavras em atitudes concretas. Evite permanecer apenas nas reclamações e procure encontrar soluções.",
    motivacao:
      "Seu poder pessoal se fortalece quando suas decisões são justas e suas palavras se transformam em ações.",
  },
  21: {
    interpretacao:
      "Novos caminhos poderão surgir para ampliar suas perspectivas financeiras e profissionais. Esta carta destaca oportunidades de crescimento que também poderão exigir responsabilidades maiores. Antes de aceitar uma proposta ou assumir um novo desafio, pergunte a si mesmo se possui os conhecimentos, a disponibilidade e as condições necessárias. Reconheça aquilo que deseja alcançar e prepare-se para construir resultados compatíveis com seus objetivos.",
    motivacao:
      "O mundo pode abrir novas portas para você, mas é sua preparação que ajudará a transformar oportunidades em conquistas.",
  },
  22: {
    interpretacao:
      "Esta carta convida você a observar com sinceridade o que está acontecendo em sua vida financeira e material. Talvez esteja chegando o momento de interromper a rotina por alguns instantes e avaliar suas decisões. Pergunte a si mesmo se o caminho atual corresponde à realidade que deseja construir. Reflita sobre seus recursos, responsabilidades e objetivos antes de definir uma nova direção. A clareza será fundamental para seus próximos passos.",
    motivacao:
      "Quando você compreende sua realidade e define onde deseja chegar, começa a construir um futuro com mais consciência.",
  },
};

function embaralharCartas(): number[] {
  const numeros = Array.from(
    { length: 22 },
    (_, i) => i + 1
  );

  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [numeros[i], numeros[j]] = [
      numeros[j],
      numeros[i],
    ];
  }

  return numeros;
}

export default function Jogo8Page() {
  const [cartas, setCartas] = useState<number[]>([]);
  const [escolhida, setEscolhida] = useState<number | null>(
    null
  );

  useEffect(() => {
    setCartas(embaralharCartas());
  }, []);

  useEffect(() => {
    if (escolhida !== null) {
      document
        .getElementById("mesa-cartas")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  }, [escolhida]);

  function escolherCarta(numero: number) {
    if (escolhida !== null) return;
    setEscolhida(numero);
  }

  const conteudo =
    escolhida === null ? null : conteudos[escolhida];

  return (
    <main className="pagina">
      <section className="conteudo">
        <div className="titulo">
          <p className="etapa">JOGO 8 DE 9</p>

          <h1>FINANÇAS E VIDA MATERIAL</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas
            para descobrir a mensagem sobre suas
            finanças, seus recursos e sua vida material.
          </p>
        </div>

        <div className="mesa" id="mesa-cartas">
          {escolhida === null ? (
            <div className="cartas">
              {cartas.map((numero, indice) => (
                <button
                  key={indice}
                  type="button"
                  className="carta"
                  onClick={() => escolherCarta(numero)}
                  aria-label={`Escolher carta na posição ${indice + 1}`}
                >
                  <img
                    src="/verso-cartas.jpg"
                    alt=""
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div
              className="resultado"
              aria-live="polite"
            >
              <p className="etapa">
                SUA CARTA FOI REVELADA
              </p>

              <h2>CARTA {escolhida}</h2>

              <img
                src={`/cartas-numerologicas/${escolhida}carta.jpg`}
                alt={`Carta numerológica ${escolhida}`}
                className="imagem-resultado"
              />

              <p className="interpretacao">
                {conteudo?.interpretacao}
              </p>

              <p className="motivacao">
                {conteudo?.motivacao}
              </p>

              <Link
                href="/cartas-numerologicas/9"
                style={{
                  display: "block",
                  backgroundColor: "#00d42a",
                  color: "#071707",
                  padding: "17px 16px",
                  borderRadius: "12px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 800,
                  fontSize: "16px",
                  textDecoration: "none",
                  textAlign: "center",
                  boxShadow:
                    "0 6px 20px rgba(0, 212, 42, 0.25)",
                }}
              >
                PRÓXIMA PERGUNTA →
              </Link>
            </div>
          )}
        </div>

        {escolhida === null && (
          <p className="instrucao">
            TOQUE EM UMA CARTA PARA REVELAR SUA MENSAGEM
          </p>
        )}
      </section>

      <style jsx>{`
        .pagina {
          min-height: 100vh;
          background: radial-gradient(
            ellipse at top,
            #172a32 0%,
            #080c11 55%,
            #030506 100%
          );
          color: #f5ead4;
          padding: 20px 12px 50px;
          font-family: Georgia, serif;
        }

        .conteudo {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .titulo {
          max-width: 700px;
          margin: 10px auto 25px;
        }

        .etapa {
          color: #e3b65e;
          font: bold 13px Arial, sans-serif;
          letter-spacing: 2px;
          margin: 0;
        }

        h1 {
          color: #f2d28c;
          font-size: clamp(27px, 5vw, 43px);
          line-height: 1.2;
          margin: 12px 0;
        }

        .orientacao {
          color: #e4cda1;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .mesa {
          padding: 24px 14px;
          border: 1px solid #c49b51;
          border-radius: 22px;
          background: radial-gradient(
            ellipse at center,
            #5a331c 0%,
            #2a180f 58%,
            #130b08 100%
          );
          box-shadow: inset 0 0 60px #0008;
          scroll-margin-top: 12px;
        }

        .cartas {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
          max-width: 850px;
          margin: 0 auto;
        }

        .carta {
          width: calc((100% - 78px) / 7);
          aspect-ratio: 89 / 156;
          padding: 0;
          border: 2px solid #c5a365;
          border-radius: 6px;
          overflow: hidden;
          background: #12313b;
          box-shadow: 0 6px 12px #0009;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .carta img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        .carta:not(:disabled):hover {
          transform: translateY(-8px);
        }

        .carta:focus-visible {
          outline: 3px solid #ffe59c;
          outline-offset: 2px;
        }

        .instrucao {
          margin-top: 25px;
          color: #e8bd64;
          font: bold 13px Arial, sans-serif;
          letter-spacing: 1px;
          line-height: 1.7;
        }

        .resultado {
          max-width: 620px;
          margin: 0 auto;
          padding: 18px 16px 22px;
          background: #101a26;
          border-radius: 16px;
        }

        .resultado h2 {
          font-size: 32px;
          color: #f3d58d;
          margin: 12px 0;
        }

        .imagem-resultado {
          display: block;
          width: 100%;
          max-width: 200px;
          height: auto;
          margin: 16px auto;
          border: 2px solid #d9a748;
          border-radius: 8px;
          box-shadow: 0 10px 30px #0008;
        }

        .interpretacao {
          color: #ffffff;
          font-size: 17px;
          line-height: 1.75;
          margin: 18px 0;
        }

        .motivacao {
          color: #ffdc75;
          font-size: 17px;
          font-weight: bold;
          font-style: italic;
          line-height: 1.65;
          margin: 18px 0 25px;
        }

        @media (max-width: 650px) {
          .pagina {
            padding: 16px 10px 40px;
          }

          .titulo {
            margin: 5px auto 20px;
          }

          .mesa {
            padding: 14px 8px;
          }

          .cartas {
            gap: 8px;
          }

          .carta {
            width: calc((100% - 24px) / 4);
            border-width: 1px;
          }

          .resultado {
            padding: 18px 12px;
          }

          .interpretacao {
            font-size: 16px;
            line-height: 1.7;
          }

          .motivacao {
            font-size: 16px;
          }

          .instrucao {
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
