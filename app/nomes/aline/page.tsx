
import type { CSSProperties } from "react";

const qualidades =
  "Liberdade, versatilidade, comunicação, criatividade, curiosidade, dinamismo, entusiasmo, inteligência prática, capacidade de adaptação, espontaneidade, sociabilidade, simpatia, independência, flexibilidade, iniciativa, espírito aventureiro, facilidade para aprender, percepção das oportunidades, capacidade de negociação, poder de persuasão, habilidade para estabelecer contatos, abertura para novas experiências e disposição para enfrentar mudanças. O nome Aline apresenta a vibração numerológica 23/5, associada à liberdade de expressão, ao movimento e à capacidade de transformar experiências em aprendizado. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar satisfação quando tiver oportunidades de explorar novos caminhos, compartilhar conhecimentos e desenvolver atividades que estimulem sua criatividade e sua comunicação. Aline poderá demonstrar facilidade para compreender diferentes situações, relacionar-se com pessoas de diversos perfis e encontrar alternativas diante dos desafios. Sua natureza versátil poderá favorecer atividades ligadas à comunicação, ao comércio, às relações humanas, ao ensino e a projetos que exijam inovação. Sua maior realização poderá surgir quando compreender que a verdadeira liberdade não significa ausência de compromissos, mas a capacidade de fazer escolhas conscientes e assumir a responsabilidade pelos caminhos que deseja seguir.";

const evitar = [
  "Sua necessidade de liberdade e movimento poderá levá-la a perder o interesse por atividades que exigem continuidade, paciência e dedicação prolongada. Deverá compreender que algumas conquistas dependem de disciplina e perseverança.",
  "Deverá evitar a dispersão de energia, iniciando muitos projetos ao mesmo tempo sem concluir aqueles que realmente possuem importância para seu crescimento.",
  "O entusiasmo diante de novas oportunidades poderá favorecer decisões impulsivas. Será importante avaliar as consequências de suas escolhas antes de assumir compromissos pessoais, profissionais ou financeiros.",
  "Poderá apresentar dificuldades para lidar com rotinas, regras e limitações, especialmente quando sentir que sua independência está sendo ameaçada. Aprender a equilibrar liberdade e responsabilidade será fundamental.",
  "Deverá evitar a impaciência, a inquietação excessiva e a tendência de buscar mudanças apenas para escapar de situações que precisam ser compreendidas ou resolvidas.",
  "Sua facilidade de comunicação poderá levá-la, em determinados momentos, a falar antes de refletir ou assumir compromissos que posteriormente terá dificuldade para cumprir. A prudência fortalecerá sua credibilidade e seus relacionamentos.",
  "Seu principal desafio será compreender que a liberdade mais importante é aquela conquistada por meio do autoconhecimento. Quando aprender a direcionar seus talentos com disciplina, poderá transformar sua versatilidade em realizações consistentes e duradouras."
];

const perguntas = [
  "Estou utilizando minha liberdade para construir uma vida que realmente corresponde aos meus valores?",
  "Consigo manter o foco em meus objetivos ou costumo abandonar projetos quando surgem novas oportunidades?",
  "Minhas decisões são tomadas com consciência ou frequentemente ajo por impulso?",
  "Estou equilibrando minha necessidade de independência com os compromissos que assumo?",
  "Tenho facilidade para aceitar rotinas e responsabilidades quando elas são necessárias ao meu crescimento?",
  "Estou utilizando minha capacidade de comunicação para fortalecer meus relacionamentos e abrir novas oportunidades?",
  "As mudanças que desejo realizar representam uma evolução verdadeira ou uma tentativa de fugir de situações que preciso enfrentar?"
];

export default function PaginaAline() {
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
              QUALIDADES POSITIVAS DO NOME ALINE
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
