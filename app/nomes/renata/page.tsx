
import type { CSSProperties } from "react";

const qualidades =
  "Intuição, inteligência analítica, profundidade de pensamento, sensibilidade, espiritualidade, capacidade de observação, discernimento, concentração, independência intelectual, prudência, discrição, percepção dos detalhes, curiosidade, capacidade de investigação, reflexão, autenticidade, determinação, sabedoria adquirida pelas experiências, capacidade de superação e busca pela verdade. O nome Renata apresenta a vibração numerológica 16/7, associada ao autoconhecimento, à transformação interior e ao desenvolvimento da sabedoria. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando compreender que suas experiências, inclusive as mais desafiadoras, representam oportunidades de amadurecimento. A presença do número 1 na composição favorece a iniciativa, a independência e a força de vontade, enquanto o número 6 acrescenta sensibilidade, responsabilidade afetiva e necessidade de harmonia. A síntese 7 representa a busca pelo conhecimento e pela compreensão mais profunda da vida. Renata poderá demonstrar facilidade para perceber situações que outras pessoas não identificam imediatamente, analisar comportamentos e encontrar respostas por meio da observação e da reflexão. O número 16 também convida a desenvolver humildade, flexibilidade e consciência nas relações pessoais, evitando que expectativas rígidas provoquem decepções desnecessárias. Sua maior realização poderá surgir quando aprender a equilibrar razão e emoção, confiança e prudência, independência e afeto. Ao transformar conhecimento em atitudes conscientes, poderá construir uma vida mais serena, autêntica e alinhada aos seus valores.";

const evitar = [
  "Sua capacidade de análise poderá levá-la a pensar excessivamente sobre situações que exigem decisões práticas. Deverá compreender que nem todas as respostas surgem antes da experiência e que, em determinados momentos, será necessário confiar em sua capacidade de agir.",
  "Deverá evitar o isolamento emocional, especialmente quando estiver enfrentando decepções ou dificuldades. Preservar sua privacidade é importante, mas compartilhar sentimentos com pessoas de confiança poderá fortalecer seu equilíbrio interior.",
  "A vibração 16/7 convida a observar o orgulho, a rigidez e a dificuldade de reconhecer os próprios erros. Aprender a rever opiniões e aceitar diferentes pontos de vista contribuirá para seu crescimento.",
  "Poderá apresentar tendência à desconfiança quando suas expectativas forem contrariadas. Será importante avaliar cada situação com serenidade, sem permitir que experiências anteriores determinem todos os seus relacionamentos.",
  "Deverá evitar a autocrítica excessiva e a necessidade de compreender ou controlar absolutamente tudo. Algumas situações exigem aceitação, paciência e abertura para o inesperado.",
  "Sua sensibilidade poderá levá-la a guardar mágoas ou a interpretar determinadas atitudes de maneira muito pessoal. O diálogo sincero será fundamental para evitar afastamentos e conflitos desnecessários.",
  "Seu principal desafio será compreender que o verdadeiro conhecimento também exige humildade emocional. Quando aprender a transformar decepções em aprendizado e a equilibrar sua independência com a confiança nas pessoas, poderá desenvolver uma sabedoria capaz de fortalecer todas as áreas de sua vida."
];

const perguntas = [
  "Estou utilizando minhas experiências para desenvolver sabedoria ou continuo presa a situações que já deveriam ter sido superadas?",
  "Consigo reconhecer meus próprios erros e rever opiniões quando descubro uma maneira melhor de compreender determinada situação?",
  "Minha necessidade de privacidade está contribuindo para meu equilíbrio ou está criando distanciamento das pessoas que amo?",
  "Estou permitindo que decepções anteriores prejudiquem minha confiança nos relacionamentos atuais?",
  "Consigo equilibrar minha capacidade de análise com a coragem necessária para tomar decisões?",
  "Estou cuidando das minhas emoções com a mesma dedicação que utilizo para compreender os problemas das outras pessoas?",
  "Os conhecimentos e as experiências que adquiri estão me ajudando a viver com mais serenidade, humildade e confiança em mim mesma?"
];

export default function PaginaRenata() {
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
              QUALIDADES POSITIVAS DO NOME RENATA
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
