
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
      "Você possui a capacidade de influenciar positivamente a vida de muitas pessoas. Entretanto, este momento pede discrição e responsabilidade na comunicação. Observe suas palavras, ouça o que você mesmo diz e procure transmitir suas ideias de forma clara. Nem sempre as pessoas compreendem imediatamente suas intenções. Apresente projetos concretos e ofereça os esclarecimentos necessários.",
    motivacao:
      "Suas palavras têm poder. Use sua voz para construir pontes e inspirar pessoas.",
  },
  2: {
    interpretacao:
      "Uma nova parceria ou uma pessoa especial poderá trazer alegria e renovação à sua vida social. Esteja atento ao que acontece ao seu redor, pois oportunidades de convivência e novas propostas podem surgir. Abra espaço para conhecer pessoas e compartilhar experiências. Sua disposição para receber o novo fará diferença.",
    motivacao:
      "Novos encontros podem abrir caminhos que você ainda não imaginou.",
  },
  3: {
    interpretacao:
      "Esta carta traz uma mensagem favorável ao crescimento e à expansão de seu mundo social. Você poderá vivenciar momentos de satisfação, reconhecimento e novas oportunidades. Mantenha-se aberto às experiências e aprenda também a receber o carinho e a colaboração das pessoas. Aproveite esta fase para desenvolver seus talentos e ampliar horizontes.",
    motivacao:
      "Permita que sua alegria e sua autenticidade abram novas portas.",
  },
  4: {
    interpretacao:
      "Se você está em dúvida sobre o que fazer, talvez seja importante equilibrar suas responsabilidades com momentos de descanso e recreação. Algumas situações ainda precisam de tempo para amadurecer. Evite cobranças excessivas e não permita que a impaciência prejudique sua convivência. Descontrair-se pode ajudar você a enxergar novas possibilidades.",
    motivacao:
      "Respeitar o tempo das coisas também faz parte da construção da felicidade.",
  },
  5: {
    interpretacao:
      "Seu mundo social pode estar entrando em um período de transformação. Novas amizades e experiências poderão mostrar caminhos diferentes dos habituais. Aproveite para renovar seus contatos, sair da rotina e conhecer pessoas que compartilham interesses positivos. Não se feche às novidades por receio de mudar.",
    motivacao:
      "Renovar suas amizades pode significar renovar também sua maneira de viver.",
  },
  6: {
    interpretacao:
      "Esta carta recomenda discrição em sua vida social. Você poderá encontrar comentários desfavoráveis, críticas ou pessoas que não compreendem suas conquistas. Evite expor excessivamente seus assuntos pessoais e preserve aquilo que considera importante. Não permita que opiniões alheias determinem sua felicidade ou prejudiquem seus relacionamentos.",
    motivacao:
      "Proteja sua tranquilidade e compartilhe suas conquistas com quem realmente torce por você.",
  },
  7: {
    interpretacao:
      "Talvez você esteja se afastando das pessoas sem perceber o quanto sua presença é importante. Amigos e familiares podem sentir falta do seu contato e interpretar seu silêncio de maneira equivocada. Observe as razões desse distanciamento e procure compreender possíveis críticas. Uma conversa sincera poderá aproximar pessoas importantes.",
    motivacao:
      "Sua presença pode fazer diferença na vida de alguém que espera por você.",
  },
  8: {
    interpretacao:
      "Esta carta destaca o reconhecimento social conquistado por sua dedicação e capacidade de liderança. Seu esforço poderá produzir resultados importantes, especialmente na vida profissional. Justiça, responsabilidade e determinação são elementos fundamentais desta fase. Continue trabalhando por seus objetivos e valorize as pessoas que contribuíram para sua trajetória.",
    motivacao:
      "O reconhecimento se fortalece quando sua competência caminha ao lado da humildade.",
  },
  9: {
    interpretacao:
      "Esta carta convida você a fortalecer sua espiritualidade e compartilhar conhecimentos que possam beneficiar outras pessoas. Sua experiência e sua sensibilidade poderão ajudar alguém a encontrar orientação e esperança. Não esconda seus valores, mas respeite sempre as crenças e os caminhos individuais daqueles que procuram sua companhia.",
    motivacao:
      "Quando você compartilha sua luz com respeito, ajuda a iluminar outros caminhos.",
  },
  10: {
    interpretacao:
      "Este é um momento para reavaliar seu círculo de amizades e recuperar relações que ficaram distantes. Se você se sentiu excluído ou esquecido, poderá surgir uma oportunidade de reconciliação. Procure agir com humildade, reconhecer sua participação nos acontecimentos e aceitar ajuda quando necessário. Novas atitudes poderão restaurar vínculos importantes.",
    motivacao:
      "Reconstruir uma amizade pode começar com um gesto simples de aproximação.",
  },
  11: {
    interpretacao:
      "Uma pessoa poderá chegar à sua vida trazendo conhecimentos, oportunidades ou uma nova maneira de compreender o mundo. Seu círculo social tende a ganhar movimento, desde que você também esteja disposto a participar. Procure experimentar novas atividades, conhecer pessoas e não levar todas as situações com excessiva seriedade.",
    motivacao:
      "Abra seu coração às novidades: um encontro pode transformar sua perspectiva de vida.",
  },
  12: {
    interpretacao:
      "Esta carta recomenda prudência na comunicação. Talvez você esteja guardando sentimentos ou opiniões que deseja expressar, mas o momento exige reflexão. Algumas palavras poderão ser interpretadas de maneira diferente da sua intenção. Antes de falar, avalie o contexto, respeite os sentimentos envolvidos e escolha a melhor maneira de se posicionar.",
    motivacao:
      "Saber quando falar é tão importante quanto saber o que dizer.",
  },
  13: {
    interpretacao:
      "Seu mundo social está passando por uma renovação. Algumas amizades poderão se afastar enquanto novas pessoas chegam, trazendo experiências diferentes. Nem todo encerramento precisa ser visto como uma perda. Reconheça o valor dos vínculos que fizeram parte da sua história e permita que novas conexões encontrem espaço em sua vida.",
    motivacao:
      "Cada ciclo que termina abre espaço para novos encontros e aprendizados.",
  },
  14: {
    interpretacao:
      "Paciência e perseverança são essenciais neste momento. A convivência com amigos e colegas de trabalho pode exigir mais tolerância e compreensão. Evite alimentar conflitos por impaciência ou por expectativas excessivas. Observe o tempo de cada pessoa, procure ouvir diferentes opiniões e valorize o diálogo.",
    motivacao:
      "A serenidade ajuda a preservar os relacionamentos que realmente importam.",
  },
  15: {
    interpretacao:
      "Esta carta destaca uma fase de magnetismo pessoal, simpatia e capacidade de atrair a atenção das pessoas. Sua presença poderá despertar interesse e abrir oportunidades de aproximação. Aproveite esse movimento com naturalidade, autenticidade e respeito. Valorize seus talentos sem depender da aprovação constante dos outros.",
    motivacao:
      "Seu maior encanto está em permitir que sua verdadeira personalidade apareça.",
  },
  16: {
    interpretacao:
      "Se existe alguém especial por quem você sente grande interesse, esta carta sugere a possibilidade de mudanças favoráveis na maneira como vocês se relacionam. Uma situação aparentemente definida poderá tomar outro rumo. Mantenha a mente aberta, observe os acontecimentos e respeite os sentimentos e as decisões de cada pessoa.",
    motivacao:
      "O que parecia impossível ontem pode ganhar uma nova perspectiva amanhã.",
  },
  17: {
    interpretacao:
      "Esta carta apresenta perspectivas de reconhecimento e realização em seu mundo social. Seus talentos poderão despertar admiração e abrir espaço para novas experiências. Aproveite as oportunidades de demonstrar suas capacidades e compartilhar aquilo que sabe fazer. Seja confiante, mantendo sempre a simplicidade e a autenticidade.",
    motivacao:
      "Não esconda seus talentos: sua luz merece encontrar espaço para brilhar.",
  },
  18: {
    interpretacao:
      "Chegou a hora de observar sua participação na vida social. Se ultimamente você tem vivido de maneira mais isolada do que gostaria, esta carta convida à reação. Procure reencontrar amigos, participar de atividades e conhecer novos ambientes. Pequenas iniciativas poderão renovar sua disposição e trazer experiências agradáveis.",
    motivacao:
      "A vida também acontece nos encontros que você se permite viver.",
  },
  19: {
    interpretacao:
      "Pessoas ao seu redor poderão estar aguardando suas decisões ou sua iniciativa. Esta carta destaca a importância de assumir responsabilidades e exercer sua capacidade de liderança em situações sociais ou profissionais. Observe onde sua participação pode contribuir positivamente e procure agir com clareza, determinação e respeito.",
    motivacao:
      "Sua liderança ganha força quando suas atitudes inspiram confiança.",
  },
  20: {
    interpretacao:
      "Comentários, desentendimentos ou desgastes com determinadas pessoas poderão provocar questionamentos sobre sua vida social. Em vez de alimentar conflitos, procure observar como suas próprias atitudes influenciam essas situações. Reavalie suas companhias, estabeleça limites e evite participar de conversas que prejudicam a tranquilidade de outras pessoas.",
    motivacao:
      "Escolher bem suas companhias é também uma maneira de cuidar de si mesmo.",
  },
  21: {
    interpretacao:
      "Uma pessoa de outra cidade, região ou ambiente poderá trazer novidades importantes para sua vida. Esta carta sugere possibilidades de expansão social, novos contatos e oportunidades de conhecer realidades diferentes. Esteja preparado para receber propostas e avaliar mudanças com serenidade, sem perder de vista seus objetivos.",
    motivacao:
      "O mundo é maior do que sua rotina; permita-se descobrir novos horizontes.",
  },
  22: {
    interpretacao:
      "Esta carta anuncia a possibilidade de acontecimentos inesperados que poderão movimentar seu mundo social. Se você sente que tudo está parado, procure manter-se atento às oportunidades e preparado para agir. Uma novidade poderá exigir decisões rápidas, mas isso não significa abandonar a prudência. Confie em sua capacidade de adaptação.",
    motivacao:
      "Quando a vida surpreender você, transforme o inesperado em oportunidade.",
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

export default function Jogo3Page() {
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
          <p className="etapa">JOGO 3 DE 9</p>

          <h1>SEU MUNDO SOCIAL</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas
            para descobrir a mensagem sobre sua vida social
            e sua comunicação com as pessoas.
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
                href="/cartas-numerologicas/4"
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
