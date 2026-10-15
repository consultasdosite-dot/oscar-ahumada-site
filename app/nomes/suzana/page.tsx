
import type { CSSProperties } from "react";

const qualidades =
  "Determinação, responsabilidade, organização, disciplina, perseverança, capacidade de realização, liderança construtiva, visão prática, planejamento, estabilidade, confiança, dedicação, comprometimento, eficiência, paciência, lealdade, honestidade, persistência, capacidade administrativa, senso de justiça, maturidade, espírito empreendedor, habilidade para solucionar problemas e transformar ideias em resultados concretos. O nome Suzana apresenta a vibração do número mestre 22, cuja expressão reduzida é 4. Na interpretação numerológica, essa combinação representa o potencial de construir realizações importantes por meio do trabalho, da organização e de uma visão que ultrapassa interesses exclusivamente pessoais. Suzana poderá demonstrar grande capacidade para administrar responsabilidades, estruturar projetos e contribuir para o desenvolvimento das pessoas ao seu redor. Sua maior realização poderá surgir quando conseguir unir seus ideais à disciplina necessária para transformá-los em realidade.";

const evitar = [
  "Sua capacidade de assumir responsabilidades poderá levá-la a carregar obrigações excessivas, acreditando que precisa resolver tudo sozinha. É importante aprender a compartilhar tarefas e aceitar a colaboração das pessoas.",
  "Deverá evitar a rigidez de pensamento e a necessidade de controlar todas as situações. Nem sempre os acontecimentos seguirão seus planos, e a flexibilidade será fundamental para preservar o equilíbrio emocional.",
  "O perfeccionismo e a autocobrança poderão provocar insatisfação, mesmo diante de conquistas importantes. Reconhecer o próprio progresso será tão necessário quanto estabelecer novas metas.",
  "Poderá dedicar tanta energia ao trabalho e às obrigações que acabará deixando em segundo plano os relacionamentos, o descanso e os momentos de prazer.",
  "Deverá evitar o medo de fracassar, a resistência às mudanças e a tendência de adiar decisões enquanto espera encontrar condições absolutamente seguras.",
  "A vibração mestre 22 poderá despertar grandes expectativas em relação às próprias realizações. Entretanto, seu potencial não deverá ser confundido com a obrigação de alcançar resultados extraordinários.",
  "Seu principal desafio será compreender que construir uma vida sólida também significa respeitar seus limites, cultivar a serenidade e permitir que a felicidade esteja presente durante o caminho, não apenas depois das conquistas."
];

const perguntas = [
  "Estou utilizando minha capacidade de organização para construir a vida que realmente desejo?",
  "Consigo compartilhar responsabilidades ou acredito que preciso resolver tudo sozinha?",
  "Estou sendo excessivamente exigente comigo mesma?",
  "Tenho flexibilidade para aceitar mudanças e situações que fogem ao meu controle?",
  "Estou dedicando tempo suficiente à minha vida afetiva, ao descanso e ao bem-estar?",
  "Reconheço minhas conquistas ou estou sempre preocupada com aquilo que ainda falta realizar?",
  "Meus projetos representam meus verdadeiros sonhos ou apenas as expectativas que outras pessoas depositaram em mim?"
];

export default function PaginaSuzana() {
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
              QUALIDADES POSITIVAS DO NOME SUZANA
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
