
import type { CSSProperties } from "react";

const qualidades =
  "Generosidade, solidariedade, sensibilidade humana, compaixão, altruísmo, idealismo, sabedoria, compreensão, tolerância, fraternidade, consciência coletiva, espiritualidade, criatividade, inspiração, intuição, percepção, diplomacia, nobreza de sentimentos, senso de justiça, respeito às diferenças, capacidade de acolher, aconselhar, ensinar, orientar, compartilhar conhecimentos e contribuir para o desenvolvimento das pessoas. A personalidade regida pelo número 9 possui uma visão abrangente da vida e frequentemente demonstra interesse pelo bem-estar coletivo. Sua capacidade de compreender diferentes realidades favorece relacionamentos humanos, atividades artísticas, educativas e iniciativas que promovam transformações positivas. Carla poderá encontrar satisfação ao perceber que suas experiências, conhecimentos e talentos também contribuem para o crescimento das pessoas ao seu redor.";

const evitar = [
  "Sua sensibilidade e disposição para ajudar poderão levá-la a assumir responsabilidades que não lhe pertencem, esquecendo-se de cuidar das próprias necessidades e interesses.",
  "Deverá evitar idealizar excessivamente as pessoas, esperando delas atitudes e sentimentos que nem sempre correspondem à realidade. A frustração poderá surgir quando suas expectativas forem maiores do que aquilo que os outros conseguem oferecer.",
  "O excesso de generosidade poderá fazer com que algumas pessoas se aproveitem de sua disponibilidade. É importante compreender que ajudar não significa aceitar qualquer comportamento ou abrir mão dos próprios limites.",
  "Poderá apresentar dificuldades para encerrar relacionamentos, abandonar lembranças ou aceitar mudanças importantes. Aprender a concluir ciclos é fundamental para abrir espaço a novas experiências.",
  "Deverá evitar o sentimento de culpa, o excesso de preocupação com problemas alheios e a tendência de colocar sua felicidade em segundo plano.",
  "Seu grande desafio será compreender que a verdadeira generosidade começa pelo respeito a si mesma. Cuidar dos outros é importante, mas preservar sua individualidade também faz parte de seu crescimento."
];

const perguntas = [
  "Estou utilizando minha sensibilidade e meus talentos para construir uma vida com significado?",
  "Consigo ajudar as pessoas sem assumir problemas e responsabilidades que não são meus?",
  "Tenho facilidade para encerrar ciclos e deixar para trás situações que já cumpriram seu papel?",
  "Minhas expectativas sobre as pessoas estão de acordo com a realidade?",
  "Estou dedicando atenção suficiente aos meus próprios sonhos e necessidades?",
  "Sei estabelecer limites quando minha generosidade não é respeitada?",
  "Estou vivendo de acordo com meus valores ou tentando corresponder às expectativas dos outros?"
];

export default function PaginaCarla() {
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
              QUALIDADES POSITIVAS DO NOME CARLA
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
