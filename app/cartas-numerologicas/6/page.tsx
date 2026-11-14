
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
      "A harmonia de seus relacionamentos começa pelo equilíbrio que você cultiva dentro de si. Esta carta chama sua atenção para possíveis sentimentos de ansiedade, solidão ou inquietação que podem estar interferindo na vida afetiva e também na convivência familiar. Antes de cobrar respostas ou tomar decisões, procure compreender suas emoções e recuperar a tranquilidade. Cuide de seus pensamentos, respeite seus limites e permita-se viver momentos de descanso e serenidade.",
    motivacao:
      "Quando você encontra paz dentro de si, abre espaço para viver o amor com mais leveza.",
  },
  2: {
    interpretacao:
      "Chegou o momento de esclarecer situações importantes em sua vida afetiva. Talvez um relacionamento esteja exigindo decisões que não podem continuar sendo adiadas. Esta carta convida você a avaliar se deseja permanecer, transformar ou encerrar uma situação que já não corresponde às suas necessidades. Converse com sinceridade, compreenda seus sentimentos e respeite também os desejos da outra pessoa. Decidir com consciência pode devolver tranquilidade à sua vida.",
    motivacao:
      "O amor merece clareza, respeito e a coragem de escolher aquilo que faz sentido para sua felicidade.",
  },
  3: {
    interpretacao:
      "Sedução e atração são os temas desta carta. Um encontro inesperado poderá despertar sentimentos intensos e trazer novidades à sua vida afetiva. Você pode se sentir atraído por alguém diferente das pessoas que costuma conhecer. Entretanto, observe que seu próprio magnetismo também poderá despertar o interesse de outras pessoas. Se já possui um compromisso, procure agir com consciência e responsabilidade diante dessas possibilidades.",
    motivacao:
      "Seu encanto está na autenticidade. Permita-se viver novas emoções sem perder de vista seus valores.",
  },
  4: {
    interpretacao:
      "Se existem questionamentos ou dificuldades de convivência dentro de casa, esta carta sugere que chegou a hora de organizar as situações. Talvez uma conversa familiar ou um diálogo com a pessoa amada possa esclarecer pendências que vêm causando desconforto. Procure estabelecer acordos, dividir responsabilidades e recuperar a harmonia do lar. O momento favorece atitudes práticas que contribuam para uma convivência mais equilibrada.",
    motivacao:
      "Um relacionamento se fortalece quando existe disposição para conversar, compreender e construir juntos.",
  },
  5: {
    interpretacao:
      "Esta carta apresenta uma mensagem de renovação e movimento na vida afetiva. Você poderá vivenciar momentos de alegria, entusiasmo e maior disposição para compartilhar sentimentos. Se está em um relacionamento, aproveite para renovar a convivência e sair da rotina. Se está só, permita-se conhecer pessoas e viver novas experiências. O importante é acolher as oportunidades com liberdade, equilíbrio e respeito.",
    motivacao:
      "O amor ganha novas cores quando você se permite renovar sentimentos e experiências.",
  },
  6: {
    interpretacao:
      "Esta carta destaca um momento favorável para o renascimento dos sentimentos e a valorização do amor. Uma relação poderá ganhar novo significado, ou você poderá perceber o interesse de alguém que deseja aproximar-se. Se existe uma pessoa especial em sua vida, procure demonstrar carinho e fortalecer a reciprocidade. Permita-se reconhecer seus desejos afetivos e viver experiências que contribuam para sua felicidade.",
    motivacao:
      "Abra seu coração para amar e ser amado, lembrando que o carinho verdadeiro se constrói com reciprocidade.",
  },
  7: {
    interpretacao:
      "Ciúmes, teimosia ou dificuldades de comunicação poderão provocar tensões em seus relacionamentos. Esta carta recomenda observar atitudes que estejam prejudicando o entendimento entre você e a pessoa amada. Evite interpretações precipitadas e procure compreender o que realmente está acontecendo. Se existe uma decisão importante a tomar, faça isso com serenidade. O diálogo e a confiança poderão ajudar a restaurar o equilíbrio afetivo.",
    motivacao:
      "O amor se fortalece quando a confiança ocupa o lugar da insegurança e o diálogo supera a teimosia.",
  },
  8: {
    interpretacao:
      "Esta carta convida você a rever possíveis atitudes autoritárias, cobranças excessivas ou manifestações de ciúme em sua vida afetiva. Relacionamentos saudáveis precisam de espaço para que cada pessoa expresse suas opiniões e preserve sua individualidade. Procure compreender como suas atitudes influenciam a convivência e esteja disposto a mudar aquilo que causa desconforto. O respeito é indispensável para construir uma relação equilibrada.",
    motivacao:
      "Amar não é controlar, mas compartilhar a vida com confiança, liberdade e respeito.",
  },
  9: {
    interpretacao:
      "Talvez algumas pessoas próximas estejam precisando de mais atenção, carinho e presença. Esta carta convida você a demonstrar seus sentimentos e reservar tempo para quem realmente importa. Não espere uma ocasião especial para expressar amor, agradecer ou oferecer acolhimento. Pequenos gestos podem fortalecer relacionamentos e renovar vínculos afetivos. Se existe alguém que você ama, permita que essa pessoa perceba a importância que possui em sua vida.",
    motivacao:
      "O amor que você sente merece ser demonstrado, não apenas guardado no coração.",
  },
  10: {
    interpretacao:
      "Esta carta convida você a recuperar a confiança em sua vida amorosa. Talvez experiências anteriores tenham provocado inseguranças ou reduzido sua disposição para viver novas emoções. Chegou o momento de olhar para si com mais carinho, valorizar suas qualidades e reconhecer aquilo que realmente deseja. Não permita que decepções passadas determinem todas as suas escolhas. Renove sua disposição para buscar relações que contribuam para sua felicidade.",
    motivacao:
      "Seu passado pode ensinar, mas não precisa impedir que você volte a acreditar no amor.",
  },
  11: {
    interpretacao:
      "Se você sente que algo não está bem em sua vida afetiva, esta carta recomenda prestar atenção aos próprios sentimentos. Talvez existam dúvidas ou situações que ainda não foram esclarecidas. Ouça sua intuição, mas procure também compreender os fatos antes de tomar decisões. Uma conversa sincera poderá ajudar a encontrar respostas. Confie em sua sensibilidade sem permitir que o medo ou a insegurança conduzam suas atitudes.",
    motivacao:
      "Ouça seu coração, mas permita que a serenidade e a clareza orientem suas decisões.",
  },
  12: {
    interpretacao:
      "Esta carta traz um convite especial para recuperar o amor-próprio e fortalecer sua autoestima. Talvez você esteja dedicando tanta atenção às expectativas de outras pessoas que acabou deixando seus próprios desejos em segundo plano. Invista em seu bem-estar, cuide de sua aparência da maneira que lhe faz feliz e valorize suas qualidades. Sua vida afetiva poderá encontrar mais equilíbrio quando você reconhecer o próprio valor.",
    motivacao:
      "Antes de buscar reconhecimento no olhar de alguém, descubra a beleza e a força que existem em você.",
  },
  13: {
    interpretacao:
      "Chegou a hora de conversar sobre o futuro de sua vida afetiva. Esta carta representa a necessidade de reconstruir situações, rever expectativas e estabelecer novos caminhos. Se um relacionamento está desgastado, procure compreender se existe disposição de ambas as partes para transformá-lo. Não tenha medo de reconhecer aquilo que precisa mudar. Planejamento, sinceridade e atitudes conscientes poderão ajudar você a iniciar uma nova etapa.",
    motivacao:
      "Reconstruir o amor exige coragem para conversar, disposição para mudar e respeito pelos sentimentos envolvidos.",
  },
  14: {
    interpretacao:
      "Sua vida afetiva poderá encontrar novos caminhos por meio da paciência, da tolerância e do perdão. Esta carta convida você a refletir sobre situações que ainda provocam mágoas ou dificuldades de entendimento. Talvez seja possível recuperar a harmonia de um relacionamento, desde que exista vontade de ambas as partes. Procure ouvir, compreender e respeitar os limites individuais. Perdoar não significa aceitar tudo, mas libertar-se do peso de ressentimentos.",
    motivacao:
      "A serenidade e o respeito podem abrir caminhos para a reconciliação e a renovação dos sentimentos.",
  },
  15: {
    interpretacao:
      "Esta carta chama sua atenção para possíveis atitudes de superioridade, exigências excessivas ou dificuldade em aceitar as necessidades da pessoa amada. Em momentos de carência, cobrar constantemente demonstrações de afeto pode acabar provocando distanciamento. Procure agir com mais sensibilidade e reconhecer que o carinho precisa ser oferecido com liberdade. O diálogo e a compreensão poderão contribuir para relações mais tranquilas.",
    motivacao:
      "A verdadeira força do amor está no carinho que aproxima, não nas cobranças que afastam.",
  },
  16: {
    interpretacao:
      "Uma ruptura, um afastamento ou uma mudança importante poderá exigir uma nova maneira de compreender sua vida afetiva. Esta carta representa o encerramento de padrões desgastados e a possibilidade de reconstrução. Nem toda transformação significa o fim definitivo de um relacionamento; às vezes, é necessário abandonar comportamentos que já não funcionam. Avalie o que pode ser recuperado e o que precisa seguir outro caminho, sempre respeitando sua dignidade e a liberdade de cada pessoa.",
    motivacao:
      "Quando algo deixa de funcionar, a coragem de transformar pode abrir espaço para uma nova história.",
  },
  17: {
    interpretacao:
      "Esta carta, simbolicamente associada à Estrela, apresenta uma mensagem de esperança, encantamento e renovação amorosa. Você poderá viver momentos especiais, recuperar o entusiasmo pelos sentimentos ou descobrir novas possibilidades afetivas. Se existe uma relação importante em sua vida, aproveite para demonstrar carinho e fortalecer a convivência. Permita que a alegria e a confiança iluminem suas escolhas, sem deixar de reconhecer a importância da reciprocidade.",
    motivacao:
      "Deixe que a esperança ilumine seu coração e permita-se viver o amor com alegria e autenticidade.",
  },
  18: {
    interpretacao:
      "Preocupações e inseguranças poderão estar dificultando sua compreensão da realidade afetiva. Esta carta convida você a observar se está interpretando situações a partir de medos ou dúvidas que ainda não foram esclarecidos. Evite tomar decisões importantes durante momentos de instabilidade emocional. Procure recuperar a tranquilidade, compreender seus sentimentos e conversar com sinceridade quando necessário.",
    motivacao:
      "Quando você encontra equilíbrio emocional, consegue enxergar o amor com mais clareza.",
  },
  19: {
    interpretacao:
      "Uma nova pessoa poderá conquistar um espaço importante em sua vida afetiva. Esta carta representa a possibilidade de encontros, aproximações e experiências que tragam carinho e atenção. Se você está aberto a um relacionamento, permita-se conhecer pessoas com ideias e propostas diferentes. Se já vive uma relação, observe como novas atitudes podem renovar a convivência. O importante é acolher as oportunidades com confiança e discernimento.",
    motivacao:
      "Permita-se conhecer novas possibilidades: o carinho pode surgir quando você menos espera.",
  },
  20: {
    interpretacao:
      "Talvez você esteja sentindo que um relacionamento exige comportamentos ou decisões que não correspondem à sua vontade. Esta carta convida você a reconhecer seus limites e avaliar situações que provocam sensação de sufocamento. Não é necessário abandonar sua individualidade para manter um vínculo afetivo. Converse com clareza, expresse suas necessidades e estabeleça limites saudáveis. Aprender a dizer basta pode ser uma demonstração de respeito por si mesmo.",
    motivacao:
      "Você merece viver um amor em que possa ser quem realmente é, com liberdade e respeito.",
  },
  21: {
    interpretacao:
      "Esta carta traz uma mensagem favorável ao reconhecimento de seus esforços e ao crescimento na vida afetiva. Talvez você esteja percebendo resultados positivos de atitudes que tomou para fortalecer um relacionamento ou recuperar a confiança no amor. Aproveite esta fase para valorizar suas conquistas emocionais, demonstrar gratidão e continuar cultivando vínculos saudáveis. O crescimento afetivo depende de dedicação, respeito e disposição para compartilhar.",
    motivacao:
      "O amor amadurece quando você reconhece suas conquistas e continua cultivando aquilo que faz bem ao coração.",
  },
  22: {
    interpretacao:
      "Seu relacionamento poderá estar exigindo definições importantes. Talvez a pessoa amada esteja cobrando respostas, atitudes ou compromissos que você ainda não decidiu assumir. Esta carta convida você a compreender a origem dessas expectativas e avaliar o que realmente deseja construir. Evite permanecer indefinidamente em situações confusas. Converse com sinceridade, estabeleça prioridades e tome decisões coerentes com seus sentimentos.",
    motivacao:
      "A vida afetiva avança com mais segurança quando existe clareza sobre o que cada pessoa deseja construir.",
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

export default function Jogo6Page() {
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
          <p className="etapa">JOGO 6 DE 9</p>

          <h1>SITUAÇÕES AFETIVAS E AMOROSAS</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas
            para descobrir a mensagem sobre sua vida
            afetiva e amorosa.
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
                href="/cartas-numerologicas/7"
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
