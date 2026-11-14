
"use client";

import { useEffect, useState } from "react";

type ConteudoCarta = {
  interpretacao: string;
  motivacao: string;
};

const conteudos: Record<number, ConteudoCarta> = {
  1: {
    interpretacao:
      "Esta carta convida você a recuperar sua conexão com a espiritualidade e fortalecer a fé que talvez tenha perdido ao longo do caminho. Mas o que significa ser espiritual para você? Talvez seja confiar em suas atitudes, respeitar seus princípios e reconhecer a presença do divino de acordo com suas crenças. Procure observar se existe coerência entre aquilo que pensa, fala e realiza. A verdadeira transformação interior começa quando você assume consciência de suas próprias escolhas.",
    motivacao:
      "A fé se fortalece quando seus pensamentos, suas palavras e suas atitudes caminham na mesma direção.",
  },
  2: {
    interpretacao:
      "Talvez alguém próximo esteja precisando de sua atenção, solidariedade ou orientação. Esta carta destaca sua capacidade de acolher pessoas e compartilhar conhecimentos que podem contribuir para o crescimento de outras vidas. Algumas pessoas poderão reconhecer em você uma referência de confiança e liderança. Entretanto, antes de assumir responsabilidades, procure compreender aquilo que realmente está ao seu alcance. Ajudar também significa respeitar seus próprios limites.",
    motivacao:
      "Sua sensibilidade pode se transformar em uma força especial quando você oferece apoio com amor e equilíbrio.",
  },
  3: {
    interpretacao:
      "Seu poder de comunicação pode representar um instrumento importante para contribuir positivamente com as pessoas ao seu redor. Esta carta revela a necessidade de valorizar sua criatividade, suas palavras e sua capacidade de transmitir conhecimentos. Talvez você tenha uma mensagem que merece ser compartilhada ou um talento que ainda não está utilizando plenamente. Permita que suas ideias encontrem expressão e procure transformar sua sensibilidade em atitudes de colaboração.",
    motivacao:
      "Sua voz, sua criatividade e seus conhecimentos podem iluminar a vida de pessoas que precisam ouvir sua mensagem.",
  },
  4: {
    interpretacao:
      "Situações familiares poderão estar provocando preocupações ou exigindo decisões importantes. Esta carta convida você a observar se existem conflitos, desgastes ou responsabilidades que precisam ser reorganizados. Algumas dificuldades podem ser passageiras, enquanto outras exigem mudanças mais profundas. Evite agir impulsivamente e procure compreender os sentimentos envolvidos. Se uma situação já não corresponde às suas necessidades, talvez seja o momento de estabelecer limites e considerar novos caminhos.",
    motivacao:
      "A tranquilidade familiar começa quando você encontra coragem para cuidar do que precisa ser transformado.",
  },
  5: {
    interpretacao:
      "Uma transformação importante pode estar acontecendo em seu mundo interior. Talvez você esteja começando a compreender que determinadas situações, hábitos ou apegos já não fazem sentido em sua vida. Esta carta representa simbolicamente um despertar para novas possibilidades. Procure reconhecer aquilo que deseja deixar para trás e permita que novas experiências encontrem espaço. O desapego não precisa significar perda: muitas vezes, ele representa liberdade para crescer.",
    motivacao:
      "Quando você aprende a desapegar daquilo que limita seus caminhos, abre espaço para descobrir uma nova versão de si mesmo.",
  },
  6: {
    interpretacao:
      "Esta carta apresenta uma mensagem favorável à renovação afetiva e à possibilidade de vivenciar momentos de carinho, cumplicidade e harmonia. Se você possui um relacionamento, talvez esteja chegando o momento de recuperar sentimentos que pareciam esquecidos. Se está só, permita-se conhecer pessoas e acolher novas experiências. O amor também pode surgir como uma oportunidade de reconciliar-se consigo mesmo e fortalecer sua autoestima.",
    motivacao:
      "O amor renasce quando você permite que a esperança, o carinho e a confiança voltem a ocupar espaço em sua vida.",
  },
  7: {
    interpretacao:
      "Esta carta convida você a reconstruir sua força interior e recuperar a conexão com aquilo que considera sagrado. Talvez esteja vivendo um período de distanciamento emocional ou sentindo dificuldade em encontrar entusiasmo para seus dias. Procure reservar momentos para refletir, cultivar suas crenças e compreender suas necessidades mais profundas. A espiritualidade pode oferecer um caminho de autoconhecimento, mas também será importante transformar suas percepções em atitudes conscientes.",
    motivacao:
      "A luz que você procura pode começar a se revelar quando decide cuidar de sua fé, de seus sentimentos e de sua própria história.",
  },
  8: {
    interpretacao:
      "Esta carta apresenta uma mensagem de confiança em seus objetivos e em sua capacidade de realização. Mesmo que determinados projetos ainda pareçam distantes, talvez você já possua recursos e conhecimentos importantes para desenvolvê-los. Procure não abandonar seus sonhos apenas porque os resultados ainda não apareceram. Organize seus planos, reconheça suas capacidades e avance com perseverança. Acreditar em seus objetivos significa também assumir a responsabilidade por construí-los.",
    motivacao:
      "Seus sonhos merecem confiança, planejamento e atitudes que os aproximem da realidade.",
  },
  9: {
    interpretacao:
      "Esta carta representa simbolicamente um momento de plenitude espiritual e renovação interior. Talvez você esteja precisando de silêncio para compreender acontecimentos recentes e reorganizar seus sentimentos. Se a oração, a meditação ou a contemplação fazem parte de suas crenças, reserve um momento para essas práticas. Procure reconhecer aquilo que deseja transformar e estabelecer novas intenções para sua vida. O crescimento interior começa com consciência e disposição para mudar.",
    motivacao:
      "A serenidade que você cultiva dentro de si pode transformar a maneira como enxerga o mundo e conduz sua vida.",
  },
  10: {
    interpretacao:
      "Chegou a hora de reagir e fortalecer o relacionamento que mantém consigo mesmo. Talvez esteja esperando que alguma circunstância externa resolva situações que também dependem de suas atitudes. Esta carta convida você a abandonar a passividade e recuperar sua disposição para enfrentar os desafios. Não é necessário transformar toda a vida de uma só vez. Comece com pequenas decisões e permita que cada conquista renove sua confiança.",
    motivacao:
      "A mudança que você espera pode começar com uma atitude simples: acreditar novamente em sua capacidade de recomeçar.",
  },
  11: {
    interpretacao:
      "Sua intuição está pedindo atenção. Esta carta convida você a olhar para seu mundo interior e compreender sentimentos que talvez estejam sendo ignorados. Em meio às responsabilidades e aos acontecimentos cotidianos, pode ser difícil perceber aquilo que realmente deseja. Reserve momentos para refletir, meditar ou simplesmente permanecer em silêncio. Ouça suas percepções, mas procure também observar os fatos com clareza antes de tomar decisões importantes.",
    motivacao:
      "Quando você aprende a ouvir sua voz interior com serenidade, encontra novas possibilidades de compreender a própria vida.",
  },
  12: {
    interpretacao:
      "Esta carta convida você a refletir sobre sua vida com mais carinho e compreensão. Talvez o desânimo, as decepções ou a perda de confiança estejam dificultando sua disposição para avançar. Não é necessário enfrentar todas as dificuldades sozinho. Procure conversar com pessoas de confiança e permita-se receber apoio. Também pode ser importante perdoar situações do passado e reconhecer que você merece uma nova oportunidade de viver com mais tranquilidade.",
    motivacao:
      "Você não precisa permanecer preso às dificuldades de ontem. Cada novo dia oferece a possibilidade de reconstruir sua esperança.",
  },
  13: {
    interpretacao:
      "Se você sente que perdeu a direção de sua vida, esta carta traz um convite especial à renovação. Momentos difíceis podem provocar dúvidas e enfraquecer a confiança, mas também podem revelar a necessidade de reconstruir caminhos. Procure reconhecer aquilo que aprendeu e fortalecer a fé de acordo com suas crenças. Talvez esteja chegando a hora de abandonar sentimentos que limitam seus passos e recuperar a disposição para realizar seus objetivos.",
    motivacao:
      "Mesmo depois dos períodos mais difíceis, você pode reencontrar sua luz e descobrir novos motivos para seguir em frente.",
  },
  14: {
    interpretacao:
      "Esta carta destaca a necessidade de recuperar seu equilíbrio emocional e fortalecer sua serenidade. Talvez você esteja procurando compreender acontecimentos que parecem não ter explicação ou tentando ajudar pessoas que enfrentam suas próprias dificuldades. Antes de oferecer respostas, procure cuidar de seus sentimentos e reconhecer seus limites. A reflexão espiritual poderá contribuir para ampliar sua percepção, mas nem todas as situações exigem soluções imediatas.",
    motivacao:
      "Quando você encontra equilíbrio dentro de si, torna-se mais preparado para compreender a vida e acolher quem precisa de sua presença.",
  },
  15: {
    interpretacao:
      "Esta carta pede atenção especial à influência que você exerce sobre seus relacionamentos afetivos. Suas palavras, atitudes e decisões poderão contribuir positivamente para a vida de outras pessoas, mas também poderão provocar desconfortos quando não existe compreensão. Procure observar como demonstra carinho, estabelece limites e expressa suas expectativas. Nem sempre ajudar significa decidir pelo outro. O respeito e a responsabilidade emocional são fundamentais para construir vínculos saudáveis.",
    motivacao:
      "Sua presença pode transformar uma relação quando você escolhe agir com amor, consciência e respeito.",
  },
  16: {
    interpretacao:
      "Momentos de insegurança pessoal podem levar você a questionar diferentes áreas de sua vida. Esta carta representa a necessidade de compreender as mudanças que estão acontecendo e avaliar qual direção deseja seguir. As mensagens recebidas ao longo desta jornada podem servir como instrumentos de reflexão sobre seus desejos e desafios. Se sente que chegou a hora de mudar, procure definir objetivos claros e imaginar como deseja construir seu futuro.",
    motivacao:
      "O futuro começa a ganhar forma quando você transforma suas inquietações em objetivos e escolhas conscientes.",
  },
  17: {
    interpretacao:
      "A carta 17, simbolicamente associada à Estrela, apresenta uma mensagem de proteção espiritual, esperança e renovação da autoestima. Talvez você esteja começando a descobrir novas possibilidades de crescimento interior ou percebendo que possui capacidades ainda pouco exploradas. Permita-se acolher essas descobertas de acordo com suas crenças e experiências. Valorize suas qualidades e procure cultivar pensamentos que fortaleçam a confiança em si mesmo.",
    motivacao:
      "Reconheça a luz que existe em você e permita que a esperança renove seus sentimentos e seus caminhos.",
  },
  18: {
    interpretacao:
      "Esta carta convida você a avaliar se está conduzindo sua vida com integridade e coerência. Talvez sentimentos de instabilidade ou insegurança estejam dificultando suas escolhas. Pergunte a si mesmo o que realmente provoca essas inquietações e quais atitudes poderiam contribuir para recuperar o equilíbrio. Procure compreender seus valores, reconhecer suas responsabilidades e fortalecer sua confiança. Sua luz interior pode se manifestar por meio de decisões mais conscientes.",
    motivacao:
      "Quando suas escolhas estão alinhadas com seus valores, você encontra mais segurança para seguir seu próprio caminho.",
  },
  19: {
    interpretacao:
      "Esta carta destaca seu potencial de liderança, sensibilidade espiritual e capacidade de orientar pessoas. Talvez você esteja percebendo que amigos ou familiares procuram sua companhia em busca de conselhos e compreensão. Procure reconhecer o valor de suas experiências e compartilhar aquilo que aprendeu com humildade. Sua intuição poderá ajudar a identificar necessidades ao seu redor, mas será importante ouvir as pessoas e respeitar as escolhas individuais.",
    motivacao:
      "Sua maior força está na capacidade de compartilhar conhecimentos e inspirar pessoas sem deixar de respeitar seus caminhos.",
  },
  20: {
    interpretacao:
      "Esta carta apresenta uma mensagem de perdão, reconciliação e renovação dos relacionamentos. Talvez você esteja carregando mágoas ou se afastando de pessoas importantes por causa de situações que ainda provocam desconforto. Procure refletir sobre aquilo que merece ser resolvido e considere a possibilidade de reconstruir vínculos quando houver respeito e disposição de ambas as partes. Perdoar não significa aceitar comportamentos prejudiciais, mas pode representar a libertação de sentimentos que pesam em seu coração.",
    motivacao:
      "Ao liberar ressentimentos e cultivar limites saudáveis, você abre espaço para viver com mais leveza e tranquilidade.",
  },
  21: {
    interpretacao:
      "Esta carta apresenta simbolicamente uma mensagem de apoio espiritual e confiança em seu caminho. Dentro de suas crenças, talvez você encontre conforto ao reconhecer o carinho e as boas intenções de pessoas que desejam sua felicidade. Entretanto, as oportunidades também dependerão de suas atitudes e decisões. Procure manter a mente aberta, respeitar as diferenças e valorizar as pessoas que contribuem positivamente para sua trajetória. Confie em suas capacidades e faça sua parte para realizar seus objetivos.",
    motivacao:
      "Aceite o carinho de quem torce por você, mas lembre-se de que seus próprios passos são fundamentais para construir o futuro desejado.",
  },
  22: {
    interpretacao:
      "Esta carta representa simbolicamente um despertar para a espiritualidade e para aspectos profundos de sua sensibilidade. Talvez você esteja percebendo intuições, emoções ou experiências interiores que despertam novos questionamentos. Em algumas tradições espirituais, essa sensibilidade é associada à mediunidade. Procure compreender suas experiências com tranquilidade, respeitando suas crenças e evitando conclusões precipitadas. O autoconhecimento pode ajudar você a reconhecer seus sentimentos e encontrar formas equilibradas de desenvolver sua vida interior.",
    motivacao:
      "Seu crescimento espiritual começa quando você acolhe suas percepções com serenidade, responsabilidade e respeito por si mesmo.",
  },
};

const linkWhatsApp =
  "https://wa.me/5531972159908?text=" +
  encodeURIComponent(
    "Olá, Oscar! Concluí as 9 perguntas das Cartas Numerológicas e gostaria de conversar com você."
  );

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

export default function Jogo9Page() {
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
          <p className="etapa">JOGO 9 DE 9</p>

          <h1>
            O QUE ESTÁ OCULTO EM VOCÊ E O EQUILÍBRIO
          </h1>

          <p className="orientacao">
            Chegamos à última pergunta.
            Concentre-se e escolha uma das 22 cartas
            para receber uma mensagem de reflexão
            sobre seu mundo interior e seu equilíbrio.
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
                SUA ÚLTIMA CARTA FOI REVELADA
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

              <div className="encerramento">
                <p className="etapa">
                  JORNADA CONCLUÍDA
                </p>

                <h3>
                  VOCÊ CHEGOU AO FINAL DAS
                  9 PERGUNTAS!
                </h3>

                <p className="mensagemFinal">
                  Obrigado por compartilhar este momento
                  de autoconhecimento comigo.
                </p>

                <p className="mensagemFinal">
                  Que as mensagens das Cartas
                  Numerológicas inspirem você a refletir
                  sobre suas escolhas, valorizar seus
                  talentos e encontrar mais equilíbrio
                  em sua vida.
                </p>

                <p className="assinatura">
                  Com carinho,
                </p>

                <p className="assinaturaNome">
                  Oscar Ahumada
                </p>

                <p className="assinaturaCargo">
                  Numerólogo das Estrelas
                </p>
              </div>

              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
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
                FALAR COM OSCAR
              </a>
            </div>
          )}
        </div>

        {escolhida === null && (
          <p className="instrucao">
            TOQUE EM UMA CARTA PARA REVELAR SUA
            ÚLTIMA MENSAGEM
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

        .encerramento {
          border-top: 1px solid #c49b51;
          padding: 26px 0 20px;
          margin-top: 25px;
        }

        .encerramento h3 {
          color: #f2d28c;
          font-size: 23px;
          line-height: 1.4;
          margin: 15px 0 20px;
        }

        .mensagemFinal {
          color: #f5ead4;
          font-size: 17px;
          line-height: 1.7;
          margin: 12px 0;
        }

        .assinatura {
          color: #e2cfa8;
          font-style: italic;
          font-size: 16px;
          margin: 23px 0 5px;
        }

        .assinaturaNome {
          color: #ffdc75;
          font-size: 23px;
          font-weight: bold;
          margin: 5px 0;
        }

        .assinaturaCargo {
          color: #e2cfa8;
          font-size: 14px;
          letter-spacing: 1px;
          margin: 4px 0 15px;
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

          .mensagemFinal {
            font-size: 16px;
          }

          .encerramento h3 {
            font-size: 20px;
          }

          .instrucao {
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
