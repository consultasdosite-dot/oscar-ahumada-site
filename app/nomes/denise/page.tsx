
import type { CSSProperties } from "react";

const qualidades =
  "Comunicação, criatividade, simpatia, espontaneidade, inteligência, imaginação, sociabilidade, entusiasmo, sensibilidade, expressividade, alegria, facilidade para aprender, capacidade de persuasão, originalidade, percepção emocional, habilidade para estabelecer contatos, generosidade, bom humor, versatilidade, inspiração, capacidade de motivar pessoas, talento para transmitir conhecimentos e disposição para desenvolver novas ideias. O nome Denise apresenta a vibração numerológica 30/3, associada à expressão pessoal, à criatividade e à capacidade de transformar pensamentos e sentimentos em comunicação. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando tiver liberdade para desenvolver seus talentos, compartilhar conhecimentos, estabelecer relacionamentos e participar de atividades que valorizem suas ideias. O número composto 30 amplia a importância da expressão consciente, convidando ao desenvolvimento da autenticidade e da confiança na própria voz. O número 3 representa a comunicação, a imaginação, a sociabilidade, a alegria e a capacidade de inspirar outras pessoas por meio de palavras, atitudes e realizações. Denise poderá demonstrar facilidade para perceber oportunidades de interação, criar ambientes agradáveis, apresentar soluções criativas e transmitir entusiasmo às pessoas que convivem com ela. Sua combinação numerológica poderá favorecer atividades relacionadas à comunicação, ao ensino, à arte, à escrita, às vendas, ao atendimento, à publicidade, às relações humanas e a projetos que exijam criatividade e expressão pessoal. Sua maior realização poderá surgir quando compreender que possuir talentos não é suficiente: será necessário desenvolvê-los com disciplina, continuidade e confiança. Ao equilibrar espontaneidade, responsabilidade e sensibilidade, poderá transformar sua capacidade de comunicação em uma importante fonte de reconhecimento, crescimento e realização pessoal.";

const evitar = [
  "Sua facilidade para desenvolver ideias poderá levá-la a iniciar diferentes projetos sem concluir aqueles que exigem dedicação prolongada. Deverá compreender que a criatividade produz resultados mais consistentes quando está acompanhada de planejamento e perseverança.",
  "Deverá evitar utilizar o bom humor ou a espontaneidade para esconder preocupações e sentimentos importantes. Demonstrar alegria é uma qualidade, mas reconhecer momentos de tristeza ou insegurança também faz parte do equilíbrio emocional.",
  "Sua necessidade de expressão poderá levá-la a falar impulsivamente em situações de conflito. Será importante refletir antes de responder, especialmente quando suas palavras puderem provocar mal-entendidos ou ferir pessoas próximas.",
  "Poderá apresentar sensibilidade diante de críticas ou da falta de reconhecimento. Deverá compreender que opiniões diferentes não diminuem seu valor e que observações construtivas podem contribuir para seu aperfeiçoamento.",
  "Sua sociabilidade poderá levá-la a assumir compromissos excessivos ou dedicar energia a atividades que não contribuem para seus objetivos. Aprender a estabelecer prioridades será fundamental para preservar seu tempo e sua tranquilidade.",
  "Deverá evitar a tendência de comparar suas conquistas com as realizações de outras pessoas. Cada trajetória possui seu próprio ritmo, e o desenvolvimento de seus talentos dependerá principalmente de suas escolhas e de sua dedicação.",
  "Seu principal desafio será transformar criatividade e entusiasmo em realizações concretas. Quando aprender a equilibrar comunicação, disciplina e confiança interior, poderá utilizar seus talentos de maneira mais consciente, construir relacionamentos saudáveis e alcançar maior satisfação pessoal e profissional."
];

const perguntas = [
  "Estou utilizando minha capacidade de comunicação para expressar meus verdadeiros sentimentos e objetivos?",
  "Consigo transformar minhas ideias criativas em projetos concretos ou frequentemente abandono iniciativas antes de concluí-las?",
  "Estou utilizando minha espontaneidade para construir relacionamentos saudáveis ou falando impulsivamente em situações delicadas?",
  "Consigo receber críticas construtivas sem permitir que elas prejudiquem minha confiança e minha autoestima?",
  "Estou dedicando tempo suficiente ao desenvolvimento dos meus talentos ou permitindo que distrações afastem minha atenção do que realmente importa?",
  "Minha alegria e meu entusiasmo representam aquilo que sinto ou estou escondendo preocupações que precisam ser compreendidas?",
  "Quais talentos preciso desenvolver com mais disciplina para transformar minha criatividade em reconhecimento, independência e realização pessoal?"
];

export default function PaginaDenise() {
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
              QUALIDADES POSITIVAS DO NOME DENISE
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
