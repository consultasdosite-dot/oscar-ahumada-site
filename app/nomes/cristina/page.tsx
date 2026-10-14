
import type { CSSProperties } from "react";

const qualidades =
  "Amor, afetividade, simpatia, compromisso, dedicação, amizade, sociabilidade, consciência grupal, família, lar, consideração com os outros, diplomacia, sensibilidade, senso artístico, bem-estar, parceria, colaboração, justiça social, integração, casamento, amor conjugal e filial, educação, ética, paz, serenidade, responsabilidade, capacidade de acolher, aconselhar, cuidar, orientar, ajudar e promover a harmonia. Esta personalidade possui uma forte tendência a valorizar os vínculos afetivos, a estabilidade emocional e o sentimento de pertencimento. Sua realização está frequentemente relacionada à possibilidade de contribuir para a felicidade e o crescimento das pessoas que ama.";

const evitar = [
  "A necessidade de manter tudo em harmonia poderá fazer com que esta personalidade assuma responsabilidades que não lhe pertencem, esquecendo-se de cuidar de suas próprias necessidades.",
  "Deverá evitar o excesso de proteção, o ciúme e a tendência de controlar as pessoas em nome do amor. Ajudar alguém não significa decidir por essa pessoa.",
  "Sua busca pela perfeição nos relacionamentos poderá provocar frustrações quando as pessoas não corresponderem às suas expectativas. É importante compreender que cada indivíduo possui seu próprio caminho.",
  "O medo da rejeição ou da solidão poderá levá-la a permanecer em relacionamentos ou situações que já não contribuem para sua felicidade.",
  "Precisa aprender que amar também significa respeitar limites, preservar sua individualidade e permitir que os outros assumam suas próprias responsabilidades."
];

const perguntas = [
  "Estou cuidando de mim com a mesma dedicação que ofereço às outras pessoas?",
  "Consigo amar sem controlar ou exigir que tudo aconteça da maneira que considero correta?",
  "Estou assumindo responsabilidades que pertencem a outras pessoas?",
  "Minha necessidade de agradar está impedindo que eu expresse meus verdadeiros sentimentos?",
  "Sei estabelecer limites sem sentir culpa?",
  "Estou construindo relacionamentos baseados no amor e na liberdade ou na dependência emocional?"
];

export default function PaginaCristina() {
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
            <h2 style={tituloCard}>QUALIDADES POSITIVAS DO NOME CRISTINA</h2>
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
