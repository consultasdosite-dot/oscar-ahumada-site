
import type { CSSProperties } from "react";

const qualidades =
  "Sensibilidade, diplomacia, delicadeza, compreensão, intuição, cooperação, gentileza, empatia, capacidade de acolhimento, paciência, percepção emocional, habilidade para conciliar interesses, atenção aos detalhes, capacidade de escuta, lealdade, discrição, dedicação, senso de harmonia, criatividade, prudência, companheirismo, adaptabilidade e facilidade para construir relacionamentos baseados na confiança. O nome Paola apresenta a vibração numerológica 20/2, associada ao desenvolvimento da sensibilidade, à cooperação e à capacidade de reconhecer o valor dos relacionamentos humanos. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando aprender a utilizar sua percepção emocional para construir relações equilibradas, promover a harmonia e participar de projetos que valorizem o trabalho em conjunto. O número 2 representa a diplomacia, a receptividade, a colaboração e a capacidade de perceber necessidades que nem sempre são expressas diretamente. O número composto 20 acrescenta uma dimensão de amadurecimento interior, convidando ao desenvolvimento da confiança, da paciência e da capacidade de tomar decisões sem depender continuamente da aprovação de outras pessoas. Paola poderá demonstrar facilidade para ouvir, compreender diferentes pontos de vista, estabelecer vínculos de confiança e contribuir para a solução de conflitos. Sua combinação numerológica poderá favorecer atividades relacionadas às relações humanas, ao atendimento, à comunicação, à educação, à arte, à organização de equipes e a trabalhos que exijam sensibilidade e cooperação. Sua maior realização poderá surgir quando compreender que ser gentil não significa abrir mão de suas opiniões e que preservar a harmonia não exige aceitar situações que prejudiquem seu bem-estar. Ao equilibrar sensibilidade, firmeza e amor-próprio, poderá transformar sua capacidade de acolhimento em uma importante fonte de realização pessoal e profissional.";

const evitar = [
  "Sua sensibilidade poderá levá-la a valorizar excessivamente a opinião das outras pessoas. Deverá compreender que ouvir conselhos é importante, mas suas decisões precisam considerar também seus próprios sentimentos, necessidades e objetivos.",
  "Deverá evitar concordar com situações que a incomodam apenas para preservar a harmonia. A dificuldade de dizer não poderá gerar sobrecarga emocional e comprometer o equilíbrio dos relacionamentos.",
  "Sua capacidade de perceber mudanças no comportamento das pessoas poderá levá-la a interpretar silêncios ou atitudes de maneira excessivamente pessoal. Será importante buscar esclarecimentos antes de tirar conclusões.",
  "Poderá apresentar tendência à indecisão quando precisar escolher entre caminhos diferentes. Deverá desenvolver confiança em sua capacidade de avaliar possibilidades e assumir as consequências de suas escolhas.",
  "Sua dedicação aos relacionamentos poderá fazê-la colocar as necessidades de familiares, amigos ou parceiros acima das próprias. A reciprocidade será fundamental para construir vínculos saudáveis e duradouros.",
  "Deverá evitar guardar ressentimentos ou esperar que as pessoas descubram espontaneamente aquilo que está sentindo. A comunicação clara e respeitosa poderá prevenir mal-entendidos e fortalecer a confiança.",
  "Seu principal desafio será compreender que sensibilidade não representa fragilidade. Quando aprender a estabelecer limites, expressar suas opiniões e confiar nas próprias decisões, poderá transformar sua delicadeza em uma força capaz de construir relacionamentos mais equilibrados e uma vida com maior realização pessoal."
];

const perguntas = [
  "Estou respeitando meus sentimentos e minhas necessidades ou colocando constantemente as expectativas das outras pessoas em primeiro lugar?",
  "Consigo expressar minhas opiniões com tranquilidade, mesmo quando são diferentes das opiniões de familiares, amigos ou colegas?",
  "Estou tomando minhas decisões com confiança ou esperando que outras pessoas escolham por mim?",
  "Minha preocupação em preservar a harmonia está me levando a aceitar situações que prejudicam meu bem-estar?",
  "Consigo estabelecer limites e dizer não sem sentir que estou decepcionando as pessoas que amo?",
  "Estou construindo relacionamentos baseados na reciprocidade ou oferecendo muito mais atenção e dedicação do que recebo?",
  "O que preciso desenvolver em mim para transformar minha sensibilidade em segurança emocional, independência e realização pessoal?"
];

export default function PaginaPaola() {
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
              QUALIDADES POSITIVAS DO NOME PAOLA
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
