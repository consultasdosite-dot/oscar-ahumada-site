
import type { CSSProperties } from "react";

const qualidades =
  "Sabedoria, inteligência analítica, profundidade de pensamento, sensibilidade, intuição, espiritualidade, capacidade de observação, discernimento, concentração, independência intelectual, prudência, discrição, curiosidade, dedicação aos estudos, busca pela verdade, capacidade de investigação, reflexão, percepção dos detalhes, autenticidade, senso crítico, serenidade, sensibilidade filosófica e disposição para compreender os significados mais profundos da existência. O nome Cláudia apresenta a vibração numerológica 25/7, associada ao conhecimento, à introspecção e à busca pelo autoconhecimento. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando tiver liberdade para pensar, investigar, estudar e desenvolver sua própria compreensão da vida. A presença do número 2 na composição favorece a sensibilidade, a diplomacia e a percepção emocional, enquanto o número 5 acrescenta curiosidade, versatilidade e desejo de novas experiências. A síntese 7 representa a necessidade de transformar essas experiências em sabedoria. Cláudia poderá demonstrar facilidade para perceber aspectos que passam despercebidos por outras pessoas, compreender situações complexas e oferecer orientações fundamentadas em sua experiência. Sua maior realização poderá surgir quando conseguir equilibrar sua necessidade de privacidade e reflexão com a abertura emocional necessária para construir relacionamentos de confiança.";

const evitar = [
  "Sua tendência à análise e à reflexão poderá levá-la a pensar excessivamente antes de tomar decisões. Deverá compreender que nem todas as respostas surgem apenas por meio do raciocínio e que algumas experiências precisam ser vividas.",
  "Deverá evitar o isolamento emocional e a dificuldade de compartilhar sentimentos. Preservar sua privacidade é importante, mas permitir que pessoas de confiança conheçam suas emoções também contribui para seu equilíbrio.",
  "O senso crítico poderá tornar-se excessivamente exigente, levando-a a identificar falhas nas pessoas e situações com maior facilidade do que reconhecer suas qualidades.",
  "Poderá apresentar dificuldades para confiar nas intenções dos outros, especialmente depois de experiências decepcionantes. Será importante não transformar a prudência em desconfiança permanente.",
  "Deverá evitar a necessidade de encontrar explicações para absolutamente tudo. A vida também envolve sentimentos, espontaneidade e acontecimentos que não podem ser completamente controlados.",
  "Sua independência intelectual poderá levá-la a resistir a opiniões diferentes ou a acreditar que precisa encontrar todas as soluções sozinha. O diálogo e a troca de experiências poderão ampliar sua compreensão.",
  "Seu principal desafio será compreender que a verdadeira sabedoria não consiste apenas em acumular conhecimentos, mas em utilizá-los para viver com serenidade, fortalecer seus relacionamentos e desenvolver maior confiança em si mesma."
];

const perguntas = [
  "Estou utilizando minha capacidade de reflexão para compreender melhor minha vida ou estou pensando tanto que deixo de agir?",
  "Consigo compartilhar meus sentimentos com pessoas de confiança ou prefiro guardar minhas preocupações para mim mesma?",
  "Minha capacidade de observação está me ajudando a compreender as pessoas ou estou sendo excessivamente crítica?",
  "Estou permitindo que experiências anteriores influenciem negativamente minha confiança nos relacionamentos?",
  "Consigo aceitar situações que não possuem respostas imediatas ou sinto necessidade de controlar tudo por meio da razão?",
  "Estou equilibrando meus momentos de solitude com a convivência e o afeto das pessoas que amo?",
  "Os conhecimentos que adquiri estão contribuindo para minha felicidade e meu crescimento interior?"
];

export default function PaginaClaudia() {
  return (
    <main style={pagina}>
      <div style={container}>
        <header style={cabecalho}>
          <p style={assinatura}>
            OSCAR AHUMADA — NUMERÓLOGO DAS ESTRELAS
          </p>
          <img
            src="/Caracurso1.png"
            alt="Oscar Ahumada — Numerólogo das Estrelas"
            style={foto}
          />
        </header>

        <section style={secaoCards}>
          <article style={card}>
            <h2 style={tituloCard}>
              QUALIDADES POSITIVAS DO NOME CLÁUDIA
            </h2>
            <p style={textoCard}>{qualidades}</p>
          </article>

          <article style={card}>
            <h2 style={tituloCard}>DEVERÁ EVITAR</h2>
            {evitar.map((texto) => (
              <p key={texto} style={textoCard}>
                {texto}
              </p>
            ))}
          </article>

          <article style={card}>
            <h2 style={tituloCard}>
              PERGUNTAS PARA REFLETIR NO SEU DIA A DIA
            </h2>
            <ul style={listaPerguntas}>
              {perguntas.map((pergunta) => (
                <li key={pergunta} style={itemLista}>
                  {pergunta}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section style={convite}>
          <h2 style={tituloConvite}>
            QUER DESCOBRIR AINDA MAIS SOBRE VOCÊ?
          </h2>
          <p style={textoConvite}>
            Seu primeiro nome representa apenas uma parte da
            interpretação numerológica.
          </p>
          <p style={textoConvite}>
            Conheça o que seu nome completo e sua data de
            nascimento podem revelar sobre seus potenciais,
            desafios e caminhos de vida.
          </p>
          <a
            href="/nomes/quero-saber-tudo"
            style={botaoVerde}
          >
            QUERO SABER TUDO
          </a>
          <p style={rodape}>
            Oscar Ahumada — Numerólogo das Estrelas
          </p>
        </section>
      </div>
    </main>
  );
}

const pagina: CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#f8f6f2",
  color: "#27232b",
  padding: "32px 16px 64px",
  fontFamily: "Arial, sans-serif"
};

const container: CSSProperties = {
  maxWidth: 780,
  margin: "0 auto"
};

const cabecalho: CSSProperties = {
  textAlign: "center",
  marginBottom: 30
};

const assinatura: CSSProperties = {
  color: "#96703b",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 1.2,
  lineHeight: 1.5,
  margin: "0 0 18px"
};

const foto: CSSProperties = {
  display: "block",
  width: "100%",
  maxWidth: 300,
  height: "auto",
  margin: "0 auto",
  borderRadius: 18
};

const secaoCards: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 24
};

const card: CSSProperties = {
  display: "block",
  backgroundColor: "#ffffff",
  border: "1px solid #eee8df",
  borderRadius: 20,
  padding: "clamp(22px, 5vw, 36px)",
  boxShadow: "0 5px 24px rgba(0,0,0,0.06)"
};

const tituloCard: CSSProperties = {
  fontSize: "clamp(20px, 4vw, 25px)",
  fontWeight: 700,
  color: "#8b6534",
  lineHeight: 1.3,
  margin: "0 0 18px"
};

const textoCard: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  margin: "0 0 16px"
};

const listaPerguntas: CSSProperties = {
  paddingLeft: 24,
  margin: 0,
  fontSize: 17,
  lineHeight: 1.8,
  fontWeight: 700
};

const itemLista: CSSProperties = {
  marginBottom: 16,
  paddingLeft: 4
};

const convite: CSSProperties = {
  backgroundColor: "#27212e",
  color: "#ffffff",
  textAlign: "center",
  borderRadius: 20,
  padding: "clamp(22px, 5vw, 36px)",
  marginTop: 24
};

const tituloConvite: CSSProperties = {
  fontSize: "clamp(22px, 4vw, 27px)",
  fontWeight: 700,
  color: "#e8c78b",
  lineHeight: 1.3,
  margin: "0 0 20px"
};

const textoConvite: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  margin: "0 0 16px"
};

const botaoVerde: CSSProperties = {
  display: "inline-block",
  backgroundColor: "#16803c",
  color: "#ffffff",
  textDecoration: "none",
  fontSize: 17,
  fontWeight: 700,
  padding: "18px 28px",
  borderRadius: 12,
  marginTop: 12
};

const rodape: CSSProperties = {
  fontSize: 13,
  marginTop: 24
};
