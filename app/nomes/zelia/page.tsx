
import type { CSSProperties } from "react";

const qualidades =
  "Generosidade, solidariedade, compaixão, sensibilidade humana, idealismo, altruísmo, sabedoria, compreensão, tolerância, fraternidade, universalidade, espiritualidade, inspiração, criatividade, intuição, percepção, consciência coletiva, capacidade de acolhimento, dedicação às causas humanas, senso de justiça, respeito às diferenças, diplomacia, nobreza de sentimentos, capacidade de aconselhar, ensinar, orientar, perdoar, compartilhar conhecimentos e contribuir para o desenvolvimento das pessoas. Esta personalidade apresenta uma tendência a perceber a vida de maneira abrangente, procurando compreender o significado das experiências e encontrar um propósito maior para suas realizações. Sua sensibilidade pode favorecer atividades relacionadas à educação, às artes, à comunicação, ao aconselhamento e ao desenvolvimento humano.";

const evitar = [
  "Sua sensibilidade diante das dificuldades humanas poderá levá-la a assumir problemas que não lhe pertencem, sacrificando suas próprias necessidades em nome do bem-estar dos outros.",
  "Deverá evitar a tendência de idealizar pessoas e relacionamentos, criando expectativas elevadas que poderão resultar em decepções quando a realidade não corresponder aos seus desejos.",
  "O excesso de generosidade poderá atrair pessoas que procuram ajuda sem demonstrar disposição para assumir suas próprias responsabilidades. É importante aprender a oferecer apoio sem permitir abusos.",
  "Poderá apresentar dificuldades para encerrar ciclos, abandonar lembranças ou aceitar que determinadas situações já cumpriram seu papel em sua vida.",
  "Precisa evitar o sentimento de culpa, o excesso de preocupação com o sofrimento alheio e a tendência de colocar suas necessidades sempre em último lugar.",
  "Seu grande aprendizado está em compreender que ajudar o mundo não significa carregar o mundo sobre os próprios ombros."
];

const perguntas = [
  "Estou utilizando minha sensibilidade para construir uma vida mais significativa?",
  "Consigo ajudar as pessoas sem assumir responsabilidades que não são minhas?",
  "Tenho facilidade para perdoar e encerrar situações que já não contribuem para meu crescimento?",
  "Minhas expectativas sobre as pessoas estão de acordo com a realidade?",
  "Estou dedicando tempo suficiente aos meus próprios sonhos e necessidades?",
  "Sei estabelecer limites quando minha generosidade não é respeitada?",
  "Estou vivendo de acordo com meus valores ou tentando corresponder às expectativas dos outros?"
];

export default function PaginaZelia() {
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
            <h2 style={tituloCard}>QUALIDADES POSITIVAS DO NOME ZÉLIA</h2>
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
