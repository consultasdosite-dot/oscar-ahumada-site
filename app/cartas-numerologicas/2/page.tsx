
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
      "Esta carta convida você a refletir sobre as responsabilidades que vem assumindo em seus relacionamentos. Talvez esteja dedicando muita energia às necessidades de outras pessoas, deixando seus próprios sentimentos em segundo plano. Também pode ser o momento de reavaliar vínculos desgastados que já não contribuem para seu bem-estar. Observe suas relações com sinceridade e reconheça o que precisa mudar.",
    motivacao:
      "Relacionamentos saudáveis começam quando você também aprende a valorizar a si mesmo.",
  },
  2: {
    interpretacao:
      "A energia desta carta favorece a união, o entendimento e a construção de parcerias duradouras. É um momento para fortalecer compromissos, estabelecer acordos e compartilhar decisões importantes. Aprenda a ouvir, conversar e participar ativamente das escolhas feitas a dois. Uma relação se torna mais forte quando existe reciprocidade.",
    motivacao:
      "A verdadeira união acontece quando duas pessoas caminham juntas, respeitando suas individualidades.",
  },
  3: {
    interpretacao:
      "Novas pessoas podem chegar à sua vida trazendo propostas, experiências e oportunidades de crescimento. Esta carta convida você a refletir sobre sua disposição para ampliar seus relacionamentos. Talvez seja necessário deixar a rotina e permitir que novas conexões aconteçam. Esteja preparado para mudanças e observe quem realmente acrescenta algo positivo ao seu caminho.",
    motivacao:
      "Abra espaço para novas pessoas, mas preserve sempre sua autenticidade.",
  },
  4: {
    interpretacao:
      "Esta carta destaca a importância de consolidar relacionamentos familiares, afetivos e profissionais. Pode ser um período favorável para fortalecer uma parceria, formalizar um compromisso ou concretizar algo esperado há muito tempo. Entretanto, acordos e contratos precisam ser avaliados com responsabilidade. Busque estabilidade sem perder a sensibilidade.",
    motivacao:
      "Os vínculos mais fortes são construídos com confiança, responsabilidade e respeito.",
  },
  5: {
    interpretacao:
      "Uma mudança de direção pode transformar seus relacionamentos. Novas situações e oportunidades poderão surgir, mas também será necessário observar possíveis inseguranças. Evite decisões precipitadas e procure compreender o que realmente está acontecendo. Às vezes, uma mudança de comportamento é suficiente para renovar uma relação.",
    motivacao:
      "Não tenha medo de mudar o que precisa ser transformado para viver relações mais felizes.",
  },
  6: {
    interpretacao:
      "Esta carta traz uma mensagem favorável à harmonia afetiva, à reconciliação e ao fortalecimento dos compromissos. Pode ser um momento especial para anunciar uma união, aprofundar uma parceria ou recuperar a tranquilidade em seus relacionamentos. O carinho, a solidariedade e a compreensão serão fundamentais para construir uma convivência mais amorosa.",
    motivacao:
      "O amor floresce quando existe disposição para cuidar, compreender e compartilhar.",
  },
  7: {
    interpretacao:
      "Talvez você esteja se afastando das pessoas sem perceber. O silêncio e o isolamento podem gerar incompreensões entre aqueles que desejam sua presença. Esta carta convida você a observar seus relacionamentos e compreender as razões de possíveis críticas ou distanciamentos. Procure dialogar e demonstrar seus sentimentos com mais clareza.",
    motivacao:
      "Aproximar-se de quem importa também é uma forma de fortalecer sua própria vida.",
  },
  8: {
    interpretacao:
      "Esta carta aponta possibilidades de apoio financeiro, acordos profissionais e parcerias que podem contribuir para sua estabilidade material. Questões relacionadas ao trabalho ou aos negócios poderão exigir decisões compartilhadas. Avalie cuidadosamente as propostas recebidas e procure construir relações baseadas na confiança e em interesses equilibrados.",
    motivacao:
      "Parcerias bem construídas podem transformar oportunidades em realizações.",
  },
  9: {
    interpretacao:
      "Uma pessoa especial pode surgir em seu caminho trazendo orientações, conhecimentos ou novas perspectivas. Esta carta destaca a importância das relações que favorecem seu crescimento interior e espiritual. Permita-se aprender com pessoas experientes e esteja aberto a desenvolver novas formas de compreender a vida.",
    motivacao:
      "Algumas pessoas chegam à nossa vida para iluminar caminhos que ainda não conhecemos.",
  },
  10: {
    interpretacao:
      "Uma situação desconfortável em seus relacionamentos pode começar a encontrar uma solução. Acordos aguardados, mudanças de comportamento e novas possibilidades de entendimento podem favorecer sua vida. Esta carta sugere que você mantenha uma postura positiva e esteja preparado para aproveitar oportunidades de reconciliação e transformação.",
    motivacao:
      "Uma nova atitude pode mudar completamente o rumo de um relacionamento.",
  },
  11: {
    interpretacao:
      "Este momento pede cautela, paciência e sabedoria nas relações pessoais e profissionais. Talvez não seja a melhor ocasião para decisões impulsivas ou discussões desnecessárias. Observe o comportamento das pessoas, compreenda diferentes pontos de vista e procure agir com diplomacia. Nem toda situação precisa ser resolvida imediatamente.",
    motivacao:
      "A sabedoria está em reconhecer o momento de falar, ouvir e esperar.",
  },
  12: {
    interpretacao:
      "Esta carta convida você a avaliar um relacionamento que talvez esteja causando desgaste emocional ou dificultando seu crescimento. Pergunte a si mesmo se essa relação ainda contribui para sua felicidade e tranquilidade. Caso perceba que mudanças são necessárias, procure recuperar sua autonomia e estabelecer novos objetivos para sua vida.",
    motivacao:
      "Você merece construir relações que respeitem sua liberdade e seu valor pessoal.",
  },
  13: {
    interpretacao:
      "Chegou o momento de transformar uma parceria ou relacionamento que não está correspondendo às suas expectativas. Esta carta pede coragem para avaliar situações, estabelecer limites e tomar decisões conscientes. Pergunte a si mesmo se está agindo com independência ou permitindo que outras pessoas determinem seus caminhos.",
    motivacao:
      "Transformar um relacionamento começa pela coragem de reconhecer o que precisa mudar.",
  },
  14: {
    interpretacao:
      "Se você está vivendo dúvidas em seus relacionamentos, esta carta recomenda paciência e equilíbrio. Nem todas as respostas precisam surgir imediatamente. Evite conflitos desnecessários e permita que as situações amadureçam antes de tomar decisões importantes. Assim como um navio precisa de águas tranquilas para chegar ao porto, algumas relações precisam de serenidade para encontrar seu caminho.",
    motivacao:
      "A tranquilidade pode revelar soluções que a ansiedade não permite enxergar.",
  },
  15: {
    interpretacao:
      "Todo relacionamento exige responsabilidade compartilhada. Esta carta convida você a observar suas atitudes e compreender como elas influenciam as pessoas ao redor. Procure equilibrar expectativas, manifestações emocionais e decisões. Uma convivência saudável depende de respeito, diálogo e disposição de ambas as partes.",
    motivacao:
      "O equilíbrio nas relações começa quando cada pessoa reconhece sua responsabilidade.",
  },
  16: {
    interpretacao:
      "Revelações, notícias inesperadas ou mudanças de comportamento podem movimentar seus relacionamentos. Algumas situações poderão exigir adaptações importantes em sua vida afetiva. Evite reagir impulsivamente e procure compreender os acontecimentos antes de decidir. Mesmo as transformações difíceis podem trazer oportunidades de amadurecimento.",
    motivacao:
      "Nem toda mudança representa uma perda; algumas revelam novos caminhos.",
  },
  17: {
    interpretacao:
      "Esta carta apresenta perspectivas favoráveis de felicidade, reconhecimento e proteção em seus relacionamentos. Você pode estar entrando em uma fase especialmente positiva para fortalecer vínculos e aproximar-se de pessoas que compartilham seus valores. Aproveite este momento para cultivar amizades, demonstrar carinho e valorizar quem faz parte da sua vida.",
    motivacao:
      "Quando você valoriza as boas relações, multiplica as possibilidades de felicidade.",
  },
  18: {
    interpretacao:
      "Talvez você esteja atravessando uma fase de instabilidade emocional ou sentindo vontade de se afastar das pessoas. Esta carta convida você a não permitir que sentimentos passageiros determinem todos os seus relacionamentos. Procure compreender suas emoções e, quando se sentir preparado, retome o contato com amigos e pessoas de confiança.",
    motivacao:
      "Mesmo nos momentos de incerteza, o carinho das pessoas certas pode trazer renovação.",
  },
  19: {
    interpretacao:
      "A energia desta carta está associada à luz, à vitalidade e à realização nos relacionamentos. Você poderá vivenciar momentos de maior satisfação e reconhecimento, fortalecendo vínculos importantes. Entretanto, esta fase também pede responsabilidade e maturidade para conduzir suas relações. Aproveite as oportunidades para compartilhar alegria e construir experiências positivas.",
    motivacao:
      "Sua luz se torna ainda mais intensa quando é compartilhada com outras pessoas.",
  },
  20: {
    interpretacao:
      "Esta carta convida você a refletir sobre seu comportamento nas relações familiares, profissionais e afetivas. Se percebe distanciamento ou dificuldades de convivência, talvez seja necessário rever suas expectativas. Pergunte a si mesmo se está exigindo mais do que as outras pessoas conseguem oferecer. O diálogo e a compreensão poderão ajudar a recuperar o equilíbrio.",
    motivacao:
      "Relacionamentos mais felizes começam quando substituímos cobranças excessivas por compreensão.",
  },
  21: {
    interpretacao:
      "Esta carta indica possibilidades de expansão dos relacionamentos e fortalecimento de parcerias. Novas oportunidades profissionais, acordos e até viagens relacionadas a negócios podem surgir. Aproveite este período para ampliar contatos e desenvolver projetos compartilhados. Procure estabelecer conexões com pessoas que contribuam para seu crescimento.",
    motivacao:
      "O mundo oferece novas possibilidades quando você se permite construir boas parcerias.",
  },
  22: {
    interpretacao:
      "Esta carta alerta para vínculos de dependência emocional ou situações de apego que podem estar limitando seu desenvolvimento. Observe se algum relacionamento está dificultando suas decisões ou impedindo seu crescimento. Aprender a estabelecer limites e preservar sua autonomia é fundamental para viver relações equilibradas.",
    motivacao:
      "Amar e compartilhar não significa abrir mão da própria liberdade.",
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

export default function Jogo2Page() {
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
          <p className="etapa">JOGO 2 DE 9</p>

          <h1>SEUS RELACIONAMENTOS</h1>

          <p className="orientacao">
            Concentre-se e escolha uma das 22 cartas para
            descobrir a mensagem sobre seus relacionamentos.
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
                href="/cartas-numerologicas/3"
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
