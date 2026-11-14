
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
      "Talvez você esteja atravessando um momento em que a solidão ou as cobranças excessivas estão ocupando espaço em seus pensamentos. Esta carta convida você a observar como está tratando a si mesmo. Nem tudo precisa ser perfeito, e você não precisa carregar tantas exigências. Procure substituir pensamentos que alimentam preocupações por atitudes que favoreçam sua tranquilidade. Respire, reconheça suas qualidades e permita-se viver com mais leveza.",
    motivacao:
      "Seus pensamentos podem abrir novos caminhos. Escolha cultivar aqueles que fortalecem sua confiança e sua alegria.",
  },
  2: {
    interpretacao:
      "Dúvidas, incertezas ou sentimentos de ciúme podem estar provocando desconfiança em relação às pessoas. Esta carta recomenda atenção à maneira como você interpreta os acontecimentos. Nem sempre aquilo que sentimos corresponde exatamente ao que está acontecendo. Antes de fazer acusações ou tomar decisões, procure esclarecer os fatos e conversar com serenidade. Sua intuição merece ser ouvida, mas precisa caminhar ao lado do discernimento.",
    motivacao:
      "A tranquilidade cresce quando você substitui suposições por compreensão e diálogo.",
  },
  3: {
    interpretacao:
      "Chegou a hora de romper o silêncio e recuperar sua disposição para participar mais ativamente da vida. Esta carta destaca sua capacidade de agradar, comunicar-se e transmitir alegria às pessoas. Talvez você esteja permanecendo em uma situação de estagnação que não combina com sua verdadeira natureza. Experimente olhar os acontecimentos por outro ângulo e permita que sua espontaneidade volte a aparecer.",
    motivacao:
      "Quando você permite que sua alegria se manifeste, descobre novas razões para acreditar na beleza da vida.",
  },
  4: {
    interpretacao:
      "Momentos de insegurança ou falta de confiança podem estar levando você a refletir excessivamente e até a se afastar das pessoas. Esta carta convida a observar se algumas preocupações possuem fundamentos reais ou se estão sendo ampliadas pelos próprios pensamentos. Refletir é importante, mas pensar constantemente sobre os mesmos problemas nem sempre traz soluções. Procure organizar suas ideias e não permita que o isolamento se transforme em um hábito.",
    motivacao:
      "Sua mente pode ser uma grande aliada quando você aprende a transformar preocupações em atitudes construtivas.",
  },
  5: {
    interpretacao:
      "Esta carta indica um período de maior sensibilidade emocional e desejo de transformar alguma situação que já não proporciona satisfação. Entretanto, decisões tomadas durante momentos de inquietação podem não representar aquilo que você realmente deseja. Permita que suas emoções encontrem equilíbrio antes de promover mudanças importantes. Depois, observe novamente os acontecimentos, procurando enxergá-los por uma perspectiva diferente.",
    motivacao:
      "Nem toda resposta precisa surgir imediatamente. Às vezes, a serenidade revela caminhos que a ansiedade não permite enxergar.",
  },
  6: {
    interpretacao:
      "Chegou o momento de refletir sobre os acontecimentos recentes e compreender como eles estão influenciando seus sentimentos. Questões afetivas ou amorosas podem estar provocando dúvidas e preocupações. Se perceber que precisa de apoio, procure conversar com alguém de confiança. Reserve um tempo para descansar a mente e evitar cobranças excessivas. Você não precisa resolver todas as situações ao mesmo tempo.",
    motivacao:
      "Cuidar de suas emoções é reconhecer que você também merece acolhimento, compreensão e tranquilidade.",
  },
  7: {
    interpretacao:
      "Esta carta apresenta um momento especial de reflexão e fortalecimento da intuição. Talvez você esteja começando a compreender a vida de maneira diferente, reconhecendo sentimentos e necessidades que antes passavam despercebidos. Valorize os momentos de silêncio e procure ouvir sua voz interior. Uma nova perspectiva poderá surgir a partir desse processo de autoconhecimento. Continue observando as próximas mensagens das cartas com atenção.",
    motivacao:
      "As respostas mais importantes podem surgir quando você encontra serenidade para ouvir a si mesmo.",
  },
  8: {
    interpretacao:
      "Preocupações relacionadas às finanças ou ao patrimônio podem estar ocupando espaço em seus pensamentos. Esta carta recomenda revisar suas contas, organizar compromissos e avaliar a maneira como administra seus recursos. Um planejamento mais claro poderá contribuir para diminuir inquietações e ampliar sua capacidade de encontrar soluções criativas. Procure tratar os assuntos materiais com responsabilidade, sem permitir que dominem toda a sua vida emocional.",
    motivacao:
      "Organizar sua vida material pode devolver tranquilidade à mente e liberdade aos seus projetos.",
  },
  9: {
    interpretacao:
      "Talvez você esteja precisando de um período de recolhimento para compreender melhor seus sentimentos. Esta carta convida a olhar para seu mundo interior e refletir sobre aquilo que pensa de si mesmo. Observe se suas ideias estão fortalecendo sua confiança ou alimentando críticas desnecessárias. O silêncio pode ser produtivo quando utilizado para renovar perspectivas e reconhecer suas qualidades.",
    motivacao:
      "A relação mais importante que você constrói ao longo da vida é aquela que mantém consigo mesmo.",
  },
  10: {
    interpretacao:
      "Esta carta pede uma reação diante de situações que parecem estagnadas. Talvez você esteja esperando que alguma coisa aconteça para recuperar o entusiasmo e a confiança. Entretanto, uma mudança de atitude poderá produzir resultados importantes. Procure enxergar sua vida por uma perspectiva diferente e identifique pequenas ações que contribuam para fortalecer sua autoestima. Reconheça seu valor e permita-se experimentar novas possibilidades.",
    motivacao:
      "Quando você muda sua maneira de agir, começa também a transformar a maneira como se sente.",
  },
  11: {
    interpretacao:
      "Esta carta traz uma mensagem de confiança relacionada aos seus projetos pessoais e profissionais. Se você está pensando em desenvolver um empreendimento ou iniciar uma atividade importante, procure reconhecer seu potencial. Entretanto, entusiasmo e boas ideias precisam ser acompanhados de planejamento. Considere buscar orientações técnicas ou especializadas e avalie a possibilidade de compartilhar responsabilidades com pessoas preparadas.",
    motivacao:
      "Acredite em sua capacidade de realizar, lembrando que pedir orientação também demonstra inteligência e maturidade.",
  },
  12: {
    interpretacao:
      "Não renuncie aos seus sonhos por causa de dúvidas ou decepções passageiras. Esta carta indica a possibilidade de receber informações ou viver experiências que transformem sua maneira de compreender a vida. Procure acolher os aprendizados sem julgar a si mesmo com tanta severidade. Você pode rever suas escolhas, reconhecer erros e continuar avançando. O crescimento interior também acontece quando aprendemos a nos tratar com mais compreensão.",
    motivacao:
      "Seus sonhos merecem uma nova oportunidade, e você merece caminhar sem o peso das cobranças excessivas.",
  },
  13: {
    interpretacao:
      "Uma fase de dificuldades interiores pode estar se aproximando do encerramento. Esta carta convida você a abandonar pensamentos negativos que alimentam a solidão e prejudicam a relação consigo mesmo. Observe aquilo que precisa ser transformado em sua maneira de pensar e sentir. O passado pode oferecer aprendizados, mas não precisa determinar sua disposição para viver. Comece a construir uma relação mais positiva com sua própria história.",
    motivacao:
      "A renovação começa quando você deixa de lutar contra si mesmo e escolhe valorizar quem é.",
  },
  14: {
    interpretacao:
      "Esta carta destaca a importância de buscar equilíbrio entre mente, corpo e espiritualidade. Talvez seus pensamentos estejam precisando de mais tranquilidade e sua rotina de momentos dedicados ao próprio bem-estar. Atividades que favoreçam o relaxamento, a meditação ou a reflexão poderão contribuir para uma percepção mais serena dos acontecimentos. Respeite seu ritmo e procure cultivar hábitos que fortaleçam sua harmonia interior.",
    motivacao:
      "O equilíbrio se constrói quando você oferece atenção e cuidado a todas as dimensões da sua vida.",
  },
  15: {
    interpretacao:
      "Antes de entrar em uma discussão ou defender intensamente uma posição, procure avaliar se existem fundamentos suficientes para esse confronto. Esta carta chama sua atenção para situações de justiça, cobranças e divergências que podem provocar desgaste emocional. Defender seus direitos é importante, mas também é necessário reconhecer os limites de cada situação. Escolha suas batalhas com discernimento e preserve sua tranquilidade sempre que possível.",
    motivacao:
      "A verdadeira força está em saber quando lutar, como agir e o que merece sua energia.",
  },
  16: {
    interpretacao:
      "Esta carta apresenta uma mensagem favorável à fertilidade de ideias e ao desenvolvimento de projetos. Talvez esteja chegando o momento de transformar dificuldades em oportunidades e recuperar a confiança em suas capacidades. Observe os talentos que possui e procure utilizá-los de maneira prática. Situações que pareciam desfavoráveis podem ganhar novas perspectivas quando você reconhece seu potencial e assume uma postura mais determinada.",
    motivacao:
      "Seus talentos podem transformar desafios em realizações quando você decide acreditar em sua própria capacidade.",
  },
  17: {
    interpretacao:
      "Sua imaginação poderá estar atravessando um período especialmente fértil. Esta carta destaca criatividade, inspiração e a possibilidade de desenvolver ideias que merecem ser compartilhadas. Talvez você esteja encontrando soluções para situações que antes pareciam difíceis. Não esconda seus pensamentos por receio de críticas. Organize suas ideias, confie em seus conhecimentos e permita que sua criatividade encontre espaço para se manifestar.",
    motivacao:
      "Sua mente possui um universo de possibilidades. Dê forma às ideias que podem iluminar seu caminho.",
  },
  18: {
    interpretacao:
      "Talvez você esteja vivendo um período de maior sensibilidade emocional, sentindo necessidade de carinho, compreensão ou acolhimento. Esta carta convida você a não enfrentar todas as preocupações sozinho. Permita que pessoas de confiança se aproximem e conheçam seus sentimentos. Um abraço, uma conversa sincera ou um momento compartilhado podem contribuir para recuperar a tranquilidade. Aceitar apoio não diminui sua independência.",
    motivacao:
      "Você merece receber carinho e compreensão. Permitir-se ser acolhido também é uma forma de amor-próprio.",
  },
  19: {
    interpretacao:
      "Esta carta convida você a refletir sobre a maneira como utiliza sua força pessoal. Talvez esteja tentando assumir todas as responsabilidades ou acreditando que precisa resolver tudo sozinho. Entretanto, reconhecer seus limites e valorizar a contribuição das outras pessoas pode tornar seus caminhos mais leves. A humildade não diminui suas capacidades; ao contrário, amplia sua disposição para aprender, compartilhar e construir resultados.",
    motivacao:
      "Sua grandeza aparece quando a confiança caminha ao lado da humildade e da compreensão.",
  },
  20: {
    interpretacao:
      "Não permita que comentários ou julgamentos de outras pessoas determinem a maneira como você se sente. Esta carta recomenda proteger sua tranquilidade diante de opiniões injustas ou situações que provoquem desconforto. Procure estabelecer limites e preservar sua autonomia. Se a oração faz parte de suas crenças, reserve um momento para fortalecer sua espiritualidade e recuperar a serenidade. O importante é não entregar a terceiros o controle de suas decisões.",
    motivacao:
      "Sua paz interior se fortalece quando você reconhece seu valor e deixa de depender da aprovação alheia.",
  },
  21: {
    interpretacao:
      "Seus talentos artísticos, sua criatividade e sua maneira de expressar ideias poderão contribuir para ampliar sua influência pessoal. Esta carta representa a possibilidade de conhecer pessoas que tragam informações, respostas ou oportunidades inesperadas. Procure demonstrar suas capacidades e esteja aberto a novos contatos. O mundo poderá oferecer experiências enriquecedoras quando você reconhecer seus dons e permitir que sejam compartilhados.",
    motivacao:
      "Seus talentos podem abrir portas e aproximar pessoas capazes de contribuir para sua realização.",
  },
  22: {
    interpretacao:
      "Esta carta apresenta uma mensagem de transformação interior. Algo em sua maneira de pensar ou compreender a vida pode estar mudando, trazendo novas perspectivas e questionamentos importantes. Permita-se observar essas transformações sem medo. Descobertas e percepções poderão ajudá-lo a reconhecer desejos que estavam esquecidos ou caminhos ainda não explorados. Confie no processo de amadurecimento e esteja aberto aos aprendizados.",
    motivacao:
      "A magia da vida se revela quando você reconhece que sempre existe a possibilidade de se transformar e recomeçar.",
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

export default function Jogo7Page() {
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
          <p className="etapa">JOGO 7 DE 9</p>

          <h1>SEU ESTADO MENTAL E EMOCIONAL</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas
            para descobrir a mensagem sobre seus
            pensamentos, suas emoções e seu equilíbrio
            interior.
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
                href="/cartas-numerologicas/8"
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
