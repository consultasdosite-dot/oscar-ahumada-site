
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
      "Esta carta anuncia um momento favorável para realizar projetos familiares e fortalecer sua segurança pessoal e patrimonial. É uma oportunidade para organizar planos importantes, investir no bem-estar da família e consolidar relacionamentos. Uniões, casamentos e compromissos afetivos também encontram perspectivas positivas. Aproveite esta fase para construir aquilo que deseja preservar no futuro.",
    motivacao:
      "O que você constrói com amor, dedicação e responsabilidade pode se transformar em uma conquista duradoura.",
  },
  2: {
    interpretacao:
      "Esta carta pede atenção aos relacionamentos familiares, afetivos e profissionais. Podem surgir divergências, cobranças ou dificuldades de entendimento com pessoas próximas. Evite atitudes agressivas, palavras que machucam e exigências excessivas. Antes de reagir, procure compreender os sentimentos envolvidos e encontrar uma maneira equilibrada de resolver os conflitos.",
    motivacao:
      "A compreensão pode transformar um momento de conflito em uma oportunidade de reconciliação.",
  },
  3: {
    interpretacao:
      "Seu lar está pedindo mais atenção, alegria e participação da sua parte. Talvez seja o momento de assumir algumas responsabilidades familiares ou simplesmente demonstrar mais carinho às pessoas que convivem com você. Pequenos gestos, uma surpresa, um presente ou momentos compartilhados podem renovar a energia da casa e fortalecer os vínculos afetivos.",
    motivacao:
      "A felicidade dentro de casa começa muitas vezes com os pequenos gestos que oferecemos a quem amamos.",
  },
  4: {
    interpretacao:
      "Esta carta apresenta perspectivas de consolidação profissional e maior segurança material. Projetos que exigiram dedicação podem começar a produzir resultados importantes. Aproveite as oportunidades para alcançar metas, fortalecer sua estabilidade e desenvolver novos caminhos. Entretanto, procure abandonar o excesso de rigidez e permita-se assumir riscos calculados quando necessário.",
    motivacao:
      "A estabilidade nasce da dedicação, mas o crescimento também exige coragem para avançar.",
  },
  5: {
    interpretacao:
      "Você está pensando em mudar de casa, trabalho, cidade ou até mesmo transformar sua maneira de viver? Esta carta representa movimento e novidades que podem alcançar sua vida profissional e patrimonial. Uma oportunidade poderá estimular decisões importantes. Observe os sinais de mudança e prepare-se para avaliar novos caminhos com liberdade e responsabilidade.",
    motivacao:
      "Algumas mudanças chegam para mostrar que sua vida ainda possui muitos caminhos a explorar.",
  },
  6: {
    interpretacao:
      "Chegou a hora de colocar mais harmonia em sua casa e em seus relacionamentos familiares. Esta carta convida você a resolver pendências, reorganizar a convivência e recuperar a tranquilidade do lar. Se existe alguém a perdoar, considere essa possibilidade. Se alguma situação precisa ser reconstruída, procure dar o primeiro passo. O equilíbrio familiar começa com atitudes conscientes.",
    motivacao:
      "Quando existe disposição para compreender e perdoar, o lar pode voltar a ser um lugar de paz.",
  },
  7: {
    interpretacao:
      "Talvez você esteja passando por um período em que prefere permanecer em casa, evitar encontros ou afastar-se da convivência social. Esta carta sugere observar se o isolamento está ajudando você a recuperar suas energias ou apenas alimentando preocupações. Respeite sua necessidade de silêncio, mas não deixe de cultivar os relacionamentos que fazem bem à sua vida.",
    motivacao:
      "O recolhimento pode renovar suas forças, mas compartilhar a vida também alimenta a felicidade.",
  },
  8: {
    interpretacao:
      "Esta carta traz perspectivas favoráveis para esclarecer pendências e resolver situações que você considera injustas. Questões profissionais, financeiras ou patrimoniais poderão encontrar uma definição importante. Pode surgir o reconhecimento de seu trabalho, a confirmação de uma função ou a possibilidade de adquirir um bem. Mantenha seus objetivos organizados e aja com responsabilidade.",
    motivacao:
      "Suas conquistas se fortalecem quando você une determinação, justiça e confiança em suas capacidades.",
  },
  9: {
    interpretacao:
      "Esta carta convida você a olhar com mais carinho para sua casa e sua família. Talvez esteja chegando o momento de cultivar tranquilidade, fortalecer os vínculos afetivos e dedicar mais atenção à espiritualidade no ambiente familiar. Procure criar espaços de paz, diálogo e compreensão. Uma convivência harmoniosa também depende da energia que cada pessoa oferece ao lar.",
    motivacao:
      "A paz interior que você cultiva pode transformar a atmosfera de toda a sua casa.",
  },
  10: {
    interpretacao:
      "Decisões profissionais ou relacionadas aos estudos podem exigir rapidez e objetividade. Esta carta indica possibilidades de mudar uma situação que parecia desfavorável. Avalie as oportunidades e procure agir com segurança. Ao mesmo tempo, reserve momentos para cuidar da família e renovar a harmonia do lar. O crescimento profissional será ainda mais valioso quando acompanhado de equilíbrio pessoal.",
    motivacao:
      "Você pode transformar os resultados da sua vida quando decide agir com clareza e determinação.",
  },
  11: {
    interpretacao:
      "Sua força interior e sua capacidade de organização serão especialmente importantes neste momento. Esta carta convida você a recuperar o comando de situações familiares, profissionais ou materiais que precisam de uma direção mais clara. Reconheça seu potencial, organize suas prioridades e não permita que a insegurança impeça suas iniciativas. Talvez seja hora de assumir responsabilidades que você vem adiando.",
    motivacao:
      "Dentro de você existem recursos suficientes para reorganizar sua vida e construir novos resultados.",
  },
  12: {
    interpretacao:
      "Esta carta traz um alerta para agir com prudência diante de situações familiares, profissionais ou patrimoniais. Algo importante poderá exigir uma decisão delicada, e agir apenas pela emoção pode aumentar os riscos de arrependimento. Antes de assumir compromissos ou abrir mão de alguma coisa, analise os acontecimentos com serenidade. Busque informações e evite decisões precipitadas.",
    motivacao:
      "A calma e a reflexão podem proteger aquilo que você levou tanto tempo para construir.",
  },
  13: {
    interpretacao:
      "Chegou o momento de avaliar aquilo que está causando desconforto em sua vida familiar, profissional ou material. Esta carta representa encerramentos, transformações e possibilidades de recomeço. Assim como uma planta precisa de cuidados e da retirada dos galhos secos para se renovar, algumas situações também precisam ser deixadas para trás. Identifique o que perdeu seu sentido e prepare-se para uma nova etapa.",
    motivacao:
      "Encerrar aquilo que não contribui mais para sua felicidade pode abrir espaço para uma vida renovada.",
  },
  14: {
    interpretacao:
      "Sua presença poderá contribuir para resolver conflitos ou dificuldades no ambiente profissional. Esta carta destaca sua capacidade de conciliar interesses, acalmar situações tensas e encontrar soluções equilibradas. Utilize a diplomacia, a paciência e a habilidade de ouvir diferentes opiniões. Nem sempre será necessário impor sua vontade; muitas vezes, o entendimento será seu maior instrumento.",
    motivacao:
      "Quem consegue levar serenidade aos conflitos demonstra uma força que vai além das palavras.",
  },
  15: {
    interpretacao:
      "Esta carta convida você a observar como está julgando as atitudes das pessoas que ama. Talvez algumas críticas ou cobranças estejam acontecendo sem que todos os fatos tenham sido compreendidos. Antes de tirar conclusões, procure ouvir, dialogar e considerar os sentimentos envolvidos. O respeito e a justiça dentro da família dependem também da disposição para compreender.",
    motivacao:
      "O amor se fortalece quando substituímos julgamentos precipitados por compreensão e respeito.",
  },
  16: {
    interpretacao:
      "Sua casa, sua família e seu lar precisam de atenção especial. Esta carta funciona como um convite para observar situações que talvez estejam sendo deixadas para depois. Procure dedicar tempo às pessoas importantes, acompanhar questões familiares e perceber aquilo que necessita de cuidado. Não espere que o distanciamento ou os problemas aumentem para demonstrar sua presença.",
    motivacao:
      "Cuidar hoje de quem você ama pode evitar arrependimentos e fortalecer os laços de amanhã.",
  },
  17: {
    interpretacao:
      "Sua inspiração e sua capacidade de encontrar soluções poderão contribuir para resolver questões importantes dentro de casa. Esta carta destaca a necessidade de agir com segurança, sensibilidade e responsabilidade diante de situações que pedem proteção ou orientação. Confie em sua experiência, valorize suas ideias e procure utilizar seus conhecimentos para promover mais tranquilidade no ambiente familiar.",
    motivacao:
      "Sua capacidade de cuidar, orientar e encontrar soluções pode fazer uma diferença importante na vida de sua família.",
  },
  18: {
    interpretacao:
      "Uma pessoa próxima poderá precisar de sua ajuda, proteção ou orientação. Pode ser alguém da família ou uma amizade importante. Esta carta destaca sua sensibilidade diante das necessidades dos outros, mas também recomenda objetividade e segurança. Procure compreender a situação antes de agir e ofereça aquilo que realmente estiver ao seu alcance, sem assumir responsabilidades que pertencem a outras pessoas.",
    motivacao:
      "Ajudar com amor é importante; ajudar com equilíbrio permite que todos cresçam.",
  },
  19: {
    interpretacao:
      "Chegou a hora de expressar suas ideias e participar mais ativamente das decisões familiares. Talvez seja necessário reunir pessoas, conversar sobre responsabilidades ou apresentar soluções que você já vem considerando. Esta carta destaca sua capacidade de liderança e a importância de fazer sua voz ser ouvida. Assuma suas responsabilidades com confiança e esteja disposto também a ouvir os demais.",
    motivacao:
      "Sua experiência merece ser compartilhada, principalmente quando pode contribuir para o bem-estar de todos.",
  },
  20: {
    interpretacao:
      "Você pode estar atravessando um momento de insatisfação com situações familiares ou profissionais. Talvez sinta vontade de desistir de algo ou abandonar responsabilidades por considerar que não está recebendo o reconhecimento esperado. Esta carta recomenda calma. Antes de tomar decisões definitivas, avalie suas expectativas e procure compreender o que realmente precisa mudar. Defender seus direitos é importante, mas evite exageros.",
    motivacao:
      "Você pode buscar justiça e reconhecimento sem perder a serenidade nem abandonar seus objetivos.",
  },
  21: {
    interpretacao:
      "Esta carta apresenta perspectivas de crescimento e expansão em sua vida profissional. Novas portas poderão se abrir, oferecendo oportunidades para assumir funções de liderança, ampliar responsabilidades ou desenvolver projetos importantes. Prepare-se para aproveitar essas possibilidades. Valorize sua experiência, organize seus objetivos e mantenha uma postura responsável diante dos novos desafios.",
    motivacao:
      "O mundo oferece oportunidades a quem se prepara para crescer e assume com coragem suas responsabilidades.",
  },
  22: {
    interpretacao:
      "Chegou a hora de tomar decisões importantes em diferentes áreas de sua vida. Esta carta convida você a abandonar dúvidas constantes e reconhecer situações que já não contribuem para sua felicidade. Questões familiares, profissionais ou materiais poderão exigir atitudes mais firmes. Reflita sobre seus verdadeiros desejos, estabeleça prioridades e procure agir com determinação.",
    motivacao:
      "Quando você decide o que realmente deseja construir, começa a transformar possibilidades em realizações.",
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

export default function Jogo4Page() {
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
          <p className="etapa">JOGO 4 DE 9</p>

          <h1>FAMÍLIA, PATRIMÔNIO E PROFISSÃO</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas
            para descobrir a mensagem sobre sua família,
            patrimônio e vida profissional.
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
                href="/cartas-numerologicas/5"
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
