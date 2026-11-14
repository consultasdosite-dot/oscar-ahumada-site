
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
      "Se você está pensando em promover mudanças em sua vida, esta carta convida você a considerar que o momento pode estar se aproximando. Entretanto, antes de agir, procure avaliar com serenidade se já possui as condições necessárias ou se ainda precisa organizar seus planos. Pessoas, convites ou propostas inesperadas poderão despertar novas possibilidades e acelerar decisões que você vem adiando. Prepare-se para reconhecer as oportunidades sem abandonar a prudência.",
    motivacao:
      "As grandes mudanças começam quando você transforma seus desejos em decisões conscientes.",
  },
  2: {
    interpretacao:
      "Uma amizade especial poderá surgir trazendo encanto, alegria e experiências diferentes para sua vida. Esta carta destaca encontros inesperados e a possibilidade de conhecer pessoas que despertem sentimentos positivos. Esteja aberto às novidades e permita que novas conexões se desenvolvam naturalmente. Às vezes, um encontro aparentemente simples pode marcar o início de uma etapa importante.",
    motivacao:
      "A vida pode surpreender você através das pessoas que chegam sem avisar.",
  },
  3: {
    interpretacao:
      "Situações inesperadas poderão aproximar você de pessoas que compartilham seus interesses, sonhos e objetivos. Se ultimamente está se sentindo sem direção, esta carta sugere que novos contatos poderão contribuir para ampliar suas perspectivas. Procure conversar, participar de atividades e demonstrar suas ideias. Uma oportunidade poderá surgir justamente quando você decidir sair da rotina.",
    motivacao:
      "Uma conversa pode abrir caminhos que você ainda não conseguiu enxergar.",
  },
  4: {
    interpretacao:
      "Projetos, aventuras ou decisões que envolvam mudanças poderão provocar divergências dentro da família. Talvez as pessoas próximas não compreendam suas intenções ou considerem arriscados os caminhos que você deseja seguir. Esta carta recomenda evitar confrontos precipitados. Avalie os riscos, organize seus argumentos e procure compreender as preocupações daqueles que convivem com você. Nem sempre a ausência de apoio significa que seus planos devem ser abandonados, mas pode indicar a necessidade de preparação.",
    motivacao:
      "A coragem de realizar seus sonhos se fortalece quando é acompanhada de planejamento e maturidade.",
  },
  5: {
    interpretacao:
      "Esta carta apresenta um momento favorável para promover as mudanças que você deseja realizar. Novas oportunidades poderão estimular sua iniciativa e despertar entusiasmo por projetos que estavam sendo adiados. Aproveite para pensar com clareza naquilo que pretende transformar. Escreva seus objetivos, identifique os recursos necessários e estabeleça atitudes concretas para alcançá-los. A renovação começa quando suas ideias encontram uma direção.",
    motivacao:
      "O primeiro passo para transformar sua vida é decidir o que deseja construir.",
  },
  6: {
    interpretacao:
      "Mudanças em sua vida afetiva poderão trazer questionamentos ou cobranças dentro de um relacionamento. Talvez você esteja tentando compreender novos sentimentos ou enfrentando dificuldades para conciliar expectativas. Esta carta sugere dedicar mais atenção ao diálogo, à convivência e aos momentos de tranquilidade a dois. Uma viagem de lazer, um passeio ou uma experiência diferente poderá contribuir para aliviar tensões e recuperar a harmonia.",
    motivacao:
      "Renovar o amor também significa criar momentos para ouvir, compreender e compartilhar.",
  },
  7: {
    interpretacao:
      "Esta carta convida você a viver com mais confiança e reduzir os questionamentos que impedem seu avanço. Mudanças fazem parte da vida e nem sempre será possível antecipar todos os resultados. Talvez algumas transformações estejam acontecendo justamente porque você desejou ou preparou novos caminhos. Procure observar os acontecimentos com serenidade e reconhecer sua participação nas escolhas que o trouxeram até aqui.",
    motivacao:
      "Nem sempre você precisa conhecer todo o caminho para ter coragem de dar o próximo passo.",
  },
  8: {
    interpretacao:
      "Uma nova função, uma indicação profissional ou a possibilidade de assumir uma posição de liderança poderá trazer responsabilidades importantes. Esta carta destaca sua capacidade de orientar pessoas e compartilhar conhecimentos. Se uma oportunidade de crescimento surgir, procure exercê-la com entusiasmo, organização e respeito. Sua experiência poderá contribuir não apenas para alcançar resultados, mas também para incentivar aqueles que trabalham ao seu lado.",
    motivacao:
      "A liderança mais valiosa é aquela que transforma conhecimento em inspiração para outras pessoas.",
  },
  9: {
    interpretacao:
      "Seus sonhos e objetivos podem ser importantes para você, mas talvez nem todas as pessoas estejam preparadas para oferecer o apoio que deseja. Esta carta também aponta para possíveis oscilações emocionais e questionamentos sobre sua vida espiritual. Antes de promover mudanças, procure compreender suas necessidades e buscar orientações que ajudem a esclarecer dúvidas. Respeite suas crenças e não permita que a falta de incentivo enfraqueça sua confiança.",
    motivacao:
      "Seu caminho ganha força quando você aprende a confiar em seus valores, mesmo sem a aprovação de todos.",
  },
  10: {
    interpretacao:
      "Novas propostas poderão surgir trazendo possibilidades de transformar sua rotina, seus projetos ou sua maneira de viver. Esta carta destaca um período de movimento e oportunidades. Talvez você já tenha reunido conhecimentos, experiências e recursos necessários para realizar algo que deseja há muito tempo. Observe as alternativas disponíveis, avalie suas prioridades e prepare-se para tomar decisões com confiança.",
    motivacao:
      "Quando a preparação encontra a oportunidade, seus sonhos podem começar a se tornar realidade.",
  },
  11: {
    interpretacao:
      "Uma experiência que começou como aventura ou novidade poderá adquirir um significado mais profundo em sua vida. Esta carta destaca transformações interiores e o desejo crescente de liberdade. Talvez você esteja descobrindo novas necessidades e percebendo que algumas limitações já não fazem sentido. Procure compreender o que deseja mudar e como construir uma realidade mais próxima de seus valores, sem agir por impulso.",
    motivacao:
      "A verdadeira liberdade começa quando você reconhece quem é e escolhe como deseja viver.",
  },
  12: {
    interpretacao:
      "Projetos novos poderão enfrentar atrasos ou dificuldades provocadas por circunstâncias que não dependem exclusivamente de você. Esta carta convida a identificar aquilo que está impedindo o avanço de seus planos. Em vez de aceitar a estagnação como definitiva, procure soluções, reorganize prioridades e avalie alternativas. Talvez seja necessário mudar a estratégia para recuperar o movimento.",
    motivacao:
      "Um obstáculo pode atrasar seus planos, mas não precisa determinar o fim dos seus objetivos.",
  },
  13: {
    interpretacao:
      "Talvez você esteja dedicando muita energia a sonhos e projetos que permanecem apenas no pensamento. Esta carta recomenda distinguir aquilo que realmente deseja realizar das ideias que já não fazem sentido em sua vida. A dispersão pode dificultar suas decisões e afastar você de objetivos possíveis. Reavalie seus planos, estabeleça prioridades e escolha onde deseja concentrar seus esforços.",
    motivacao:
      "Seus sonhos ganham força quando deixam de ser apenas pensamentos e se transformam em atitudes.",
  },
  14: {
    interpretacao:
      "Chegou o momento de refletir sobre a atenção que você dedica a si mesmo e sobre a maneira como está conduzindo seus planos. Se os resultados não aparecem no tempo esperado, talvez seja necessário revisar escolhas, reconhecer limitações ou desenvolver mais paciência. Esta carta recomenda evitar decisões motivadas pela ansiedade. Cuide de suas necessidades e permita que os projetos amadureçam com responsabilidade.",
    motivacao:
      "Cuidar de si e respeitar o tempo das conquistas também são formas de avançar.",
  },
  15: {
    interpretacao:
      "Esta carta chama sua atenção para possíveis momentos de solidão relacionados à maneira como você vem reagindo às pessoas. Atitudes agressivas, cobranças excessivas ou dificuldade em aceitar opiniões diferentes poderão provocar afastamentos. Procure observar seu comportamento e reconhecer que nem todos precisam pensar da mesma forma. O diálogo e o respeito poderão abrir espaço para uma convivência mais tranquila.",
    motivacao:
      "Você pode defender suas ideias sem fechar as portas para o carinho e a compreensão das outras pessoas.",
  },
  16: {
    interpretacao:
      "Um impedimento poderá modificar o andamento de seus planos, mas esta carta também indica a possibilidade de encerramento de uma etapa e abertura de um novo caminho. Situações que pareciam difíceis poderão começar a encontrar soluções. Evite interpretar os obstáculos como fracassos definitivos. Observe o que está terminando, reconheça os aprendizados e prepare-se para recuperar sua disposição.",
    motivacao:
      "O fim de uma etapa pode representar a oportunidade de recomeçar com mais experiência e confiança.",
  },
  17: {
    interpretacao:
      "Esta carta, associada simbolicamente à Estrela, apresenta perspectivas de encontros especiais, encantamento e momentos de felicidade. Uma aproximação inesperada poderá despertar sentimentos positivos e trazer renovação à sua vida. Talvez seja uma experiência afetiva marcante ou uma situação que devolva entusiasmo aos seus dias. Permita-se acolher as novidades com alegria, mantendo os pés no chão.",
    motivacao:
      "Existem encontros que iluminam nossa vida e nos lembram de que ainda há muito para viver.",
  },
  18: {
    interpretacao:
      "Você poderá estar enfrentando dúvidas sobre permanecer onde está ou seguir uma nova direção. Esta carta destaca a necessidade de tomar decisões que envolvem projetos pessoais, profissionais ou afetivos. Permanecer indefinidamente entre possibilidades pode aumentar a insegurança. Procure identificar seus verdadeiros objetivos, avaliar as consequências de cada alternativa e escolher com responsabilidade.",
    motivacao:
      "A clareza surge quando você reconhece o que deseja e encontra coragem para escolher seu caminho.",
  },
  19: {
    interpretacao:
      "Liderança, novas aventuras e caminhos diferentes são os temas desta carta. Você poderá receber um convite para orientar pessoas, assumir responsabilidades ou participar de um projeto que amplie suas experiências. Também pode surgir o desejo de buscar uma vida mais satisfatória em outro ambiente. Esteja atento às oportunidades e prepare-se para demonstrar sua capacidade de iniciativa.",
    motivacao:
      "Novos horizontes se abrem quando você assume o protagonismo da própria história.",
  },
  20: {
    interpretacao:
      "Talvez os maiores obstáculos que você enfrenta neste momento estejam relacionados às cobranças que faz a si mesmo. Esta carta convida a observar pensamentos limitantes, inseguranças e atitudes de autopunição que podem dificultar suas realizações. Antes de acreditar que algo é impossível, procure reconhecer suas capacidades e rever expectativas excessivas. Trate-se com mais compreensão e permita-se recomeçar.",
    motivacao:
      "Você merece ser seu maior aliado, não o obstáculo que impede sua felicidade.",
  },
  21: {
    interpretacao:
      "Esta carta apresenta perspectivas de realização, descobertas e expansão de seus horizontes. Viagens, novos conhecimentos e experiências em lugares diferentes poderão fazer parte de uma etapa de crescimento. Seus objetivos podem ganhar novas possibilidades, especialmente se você estiver disposto a conhecer outros ambientes e aproveitar oportunidades. Mantenha a mente aberta e continue preparando os caminhos para suas conquistas.",
    motivacao:
      "O mundo reserva possibilidades para quem tem coragem de explorar novos caminhos.",
  },
  22: {
    interpretacao:
      "Se você sente que seus projetos estão parados, esta carta convida a recuperar a vitalidade, a criatividade e a motivação. A dispersão ou a falta de iniciativa podem estar afastando você dos resultados desejados. Procure identificar aquilo que realmente desperta seu entusiasmo e reorganize sua rotina. Não espere que a inspiração apareça sozinha: pequenas atitudes poderão ajudar a recuperar seu movimento.",
    motivacao:
      "A inspiração cresce quando você decide agir e transforma sua energia em novas realizações.",
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

export default function Jogo5Page() {
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
          <p className="etapa">JOGO 5 DE 9</p>

          <h1>NOVIDADES EM SUA VIDA</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas
            para descobrir a mensagem sobre as novidades
            e mudanças que poderão surgir em sua vida.
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
                href="/cartas-numerologicas/6"
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
