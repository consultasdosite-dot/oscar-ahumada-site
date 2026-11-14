
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
      "Esta carta indica um momento favorável para retomar projetos, iniciar uma nova etapa ou superar algo que deixou sua vida parada. Valorize sua independência e reconheça sua capacidade de assumir a direção das próprias escolhas. Pense também em suas necessidades: não é preciso esperar que alguém dê o primeiro passo por você.",
    motivacao:
      "A transformação começa quando você confia na própria iniciativa.",
  },
  2: {
    interpretacao:
      "Talvez este seja um período em que você precise de acolhimento, apoio ou colaboração. No trabalho, uma parceria ou a chegada de alguém disposto a ajudar pode contribuir para seus objetivos. Ouça sua intuição, aceite apoio quando fizer sentido e aja com cautela. Compartilhar não diminui sua força.",
    motivacao:
      "Permitir-se receber ajuda também é uma demonstração de sabedoria.",
  },
  3: {
    interpretacao:
      "Um novo movimento em sua vida social pode estar começando, desde que você se permita participar dele. Conhecer pessoas e abrir-se a novas experiências pode ampliar seus caminhos. Esta carta convida você a mostrar mais sua luz, observar o que acontece ao redor e não se fechar às novidades.",
    motivacao:
      "Sua presença pode abrir portas que o isolamento manteria fechadas.",
  },
  4: {
    interpretacao:
      "Compromissos e responsabilidades estão pedindo organização e disposição. Você pode sentir necessidade de consolidar a vida profissional e construir a segurança que deseja. Tenha firmeza, mas evite deixar que a rigidez ou o medo atrasem seus planos. A estabilidade se fortalece com atitudes consistentes.",
    motivacao:
      "Construa suas bases com disciplina, sem perder a flexibilidade.",
  },
  5: {
    interpretacao:
      "Mudanças inesperadas podem movimentar sua rotina. Uma proposta de trabalho, um estudo ou uma nova oportunidade pode despertar o desejo de transformar algum aspecto da sua vida. Se as atividades de sempre já não fazem sentido, avalie o que realmente precisa mudar e prepare-se para agir com consciência.",
    motivacao:
      "Mudar de direção também pode ser uma forma de avançar.",
  },
  6: {
    interpretacao:
      "Esta carta chama sua atenção para a reconciliação e o equilíbrio emocional. Talvez seja hora de resolver pendências, abrir o coração ao perdão e também perdoar a si mesmo. Relações e sentimentos encontram mais espaço para se reorganizar quando a tensão diminui. Como um navio que precisa de águas calmas para entrar no porto, você também merece encontrar serenidade.",
    motivacao:
      "A paz que você cultiva dentro de si transforma a maneira de se relacionar.",
  },
  7: {
    interpretacao:
      "Você pode estar analisando tanto as situações que acaba adiando decisões importantes. A reflexão é valiosa, mas o excesso de dúvidas pode atrasar seus projetos. Observe seus pensamentos, reconheça sua capacidade e procure agir com mais confiança em si mesmo e nas escolhas que faz.",
    motivacao:
      "Confie na sua percepção sem deixar que a dúvida paralise seus passos.",
  },
  8: {
    interpretacao:
      "Realização material e decisões importantes são os temas desta carta. Uma questão que aguardava definição pode começar a se esclarecer, abrindo espaço para investir em um projeto ou iniciar uma atividade planejada há algum tempo. Organize suas prioridades e avance com responsabilidade para aproveitar as oportunidades.",
    motivacao:
      "Sua dedicação merece ser acompanhada de decisões firmes e conscientes.",
  },
  9: {
    interpretacao:
      "Esta carta aponta possibilidades de conquistas e realização de objetivos pessoais. Para aproveitar essa fase, talvez seja necessário deixar para trás situações que já cumpriram seu papel. Evite permitir que lembranças ou vínculos com o passado impeçam seu crescimento. Há novos caminhos a considerar.",
    motivacao:
      "Quando você libera o que passou, cria espaço para novas realizações.",
  },
  10: {
    interpretacao:
      "A mensagem desta carta é de reação e mudança de rumo. Se você está se sentindo sem energia para enfrentar uma situação, procure recuperar sua coragem, determinação e objetividade. Em vez de esperar que tudo se resolva sozinho, observe o que está ao seu alcance e comece a agir.",
    motivacao:
      "Você pode mudar o rumo da história a partir da próxima atitude.",
  },
  11: {
    interpretacao:
      "Este momento pede sabedoria, discrição e habilidade para lidar com as pessoas. Nem tudo precisa ser exposto ou explicado a quem está ao redor. A carta também destaca uma força interior que pode ajudar você a conduzir situações desejadas há muito tempo. Use sua influência com equilíbrio.",
    motivacao:
      "A verdadeira força aparece quando a sabedoria orienta suas decisões.",
  },
  12: {
    interpretacao:
      "Talvez você esteja vivendo um período de imobilidade sem perceber o quanto suas próprias escolhas contribuem para isso. Esta carta convida à reação: rever hábitos, mudar a programação dos dias e buscar uma nova postura diante das situações. Pequenas atitudes podem tirar a vida da estagnação.",
    motivacao:
      "Um movimento consciente hoje pode abrir o caminho de amanhã.",
  },
  13: {
    interpretacao:
      "Uma situação que vem incomodando você pode estar se aproximando do fim. Este é um convite para reavaliar caminhos e tomar decisões que favoreçam uma nova etapa. A necessidade de liberdade pode ficar mais intensa, mas é importante refletir antes de agir e compreender o que realmente precisa mudar.",
    motivacao:
      "Encerrar um ciclo pode ser o primeiro passo para se renovar.",
  },
  14: {
    interpretacao:
      "Paciência e conciliação são as orientações desta carta. Você pode estar aguardando os frutos de algo que já construiu, mas a ansiedade não precisa conduzir suas escolhas. Respeite o tempo necessário, procure acordos equilibrados e confie no valor do esforço realizado.",
    motivacao:
      "Nem tudo floresce no mesmo instante; perseverar também é avançar.",
  },
  15: {
    interpretacao:
      "Decisões delicadas pedem cautela, senso de justiça e atenção ao uso do próprio poder. Aprenda a delegar e respeite as vontades e os limites das outras pessoas. Às vezes, tentar ajudar sem que tenham pedido pode gerar frustrações. O equilíbrio está em orientar sem controlar.",
    motivacao:
      "Respeitar o espaço do outro também fortalece as relações.",
  },
  16: {
    interpretacao:
      "Talvez você esteja atravessando uma fase desafiadora, com acontecimentos que provocam insegurança ou desânimo. Evite atitudes impulsivas e procure estabelecer um objetivo claro, possível de alcançar. Situações inesperadas podem mudar o rumo das coisas, mas isso não significa que o desequilíbrio será permanente.",
    motivacao:
      "Mesmo nos dias difíceis, a clareza de propósito ajuda a recomeçar.",
  },
  17: {
    interpretacao:
      "Esta carta representa boas perspectivas e a possibilidade de colher resultados do que você vem construindo. O reconhecimento pode aparecer tanto na vida profissional quanto nos vínculos afetivos. Aproveite o momento para afirmar seus desejos, valorizar suas conquistas e continuar cultivando o que tem importância para você.",
    motivacao:
      "Reconheça o caminho percorrido e permita-se celebrar cada conquista.",
  },
  18: {
    interpretacao:
      "A carta chama a atenção para possíveis oscilações emocionais, inseguranças ou decepções. Em vez de deixar que essas sensações determinem suas atitudes, procure compreender o que está acontecendo e reagir com serenidade. Observe seus sentimentos antes de tomar decisões importantes.",
    motivacao:
      "Compreender suas emoções é um passo para recuperar a confiança.",
  },
  19: {
    interpretacao:
      "Este pode ser um momento favorável para assumir liderança ou novas responsabilidades. Uma função de comando, uma atividade de gestão ou um desafio maior pode permitir que você demonstre suas capacidades. Ao mesmo tempo, as exigências tendem a crescer: organize-se e reconheça seus limites.",
    motivacao:
      "Liderar é mostrar capacidade sem esquecer a responsabilidade.",
  },
  20: {
    interpretacao:
      "Chegou a hora de observar como você tem cuidado dos próprios objetivos. A autocrítica excessiva e as cobranças constantes podem estar dificultando seu avanço. Em vez de permanecer preso ao que não fez, procure fortalecer sua independência e tomar atitudes que ajudem a sair da estagnação.",
    motivacao:
      "Seja responsável pelas mudanças, mas também generoso consigo mesmo.",
  },
  21: {
    interpretacao:
      "Esta carta indica expansão e a possibilidade de benefícios inesperados, inclusive materiais. Novas oportunidades podem surgir, mas será importante preservar seus interesses e manter limites claros diante das expectativas alheias. Saiba dizer não ao que não combina com seus objetivos.",
    motivacao:
      "Crescer também significa escolher com consciência o que merece seu sim.",
  },
  22: {
    interpretacao:
      "A rotina pode estar ocupando um espaço grande em sua vida. Se você sente vontade de mudar, procure entender se esse desejo é apenas passageiro ou se aponta para uma necessidade real. Reflita sobre a direção que deseja seguir e sobre como transformar suas escolhas em atitudes concretas.",
    motivacao:
      "Uma nova direção começa quando você identifica o que quer construir.",
  },
};

function embaralharCartas(): number[] {
  const numeros = Array.from({ length: 22 }, (_, i) => i + 1);

  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }

  return numeros;
}

export default function Jogo1Page() {
  const [cartas, setCartas] = useState<number[]>([]);
  const [escolhida, setEscolhida] = useState<number | null>(null);

  useEffect(() => {
    setCartas(embaralharCartas());
  }, []);

  useEffect(() => {
    if (escolhida !== null) {
      document.getElementById("mesa-cartas")?.scrollIntoView({
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
          <p className="etapa">JOGO 1 DE 9</p>

          <h1>SEU MOMENTO ATUAL</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas para
            descobrir a mensagem do seu momento atual.
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
            <div className="resultado" aria-live="polite">
              <p className="etapa">SUA CARTA FOI REVELADA</p>

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
                href="/cartas-numerologicas/2"
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
                  boxShadow: "0 6px 20px rgba(0, 212, 42, 0.25)",
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
