
import type { CSSProperties } from "react";

const qualidades =
  "Inteligência analítica, sensibilidade, intuição, curiosidade, capacidade de observação, discernimento, independência intelectual, concentração, versatilidade, prudência, discrição, percepção dos detalhes, facilidade para aprender, capacidade de investigação, reflexão, autenticidade, criatividade, espírito pesquisador, adaptabilidade, profundidade de pensamento e busca pelo conhecimento. O nome Pedro apresenta a vibração numerológica 25/7, associada à sabedoria adquirida por meio das experiências, à investigação e ao autoconhecimento. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando tiver oportunidades de estudar, observar, compreender e desenvolver seus próprios conhecimentos. O número 2, presente na composição, favorece a sensibilidade, a diplomacia e a percepção emocional, enquanto o número 5 acrescenta curiosidade, flexibilidade, desejo de liberdade e disposição para conhecer novas possibilidades. A síntese 7 representa a necessidade de transformar essas experiências em sabedoria. Pedro poderá demonstrar facilidade para perceber aspectos que outras pessoas não identificam imediatamente, analisar situações complexas e encontrar soluções fundamentadas na observação e no raciocínio. Sua combinação numerológica poderá favorecer atividades que exijam pesquisa, planejamento, especialização, tecnologia, ensino, investigação ou compreensão do comportamento humano. Sua maior realização poderá surgir quando aprender a equilibrar sua necessidade de independência com a abertura necessária para compartilhar sentimentos, conhecimentos e experiências. Ao reconhecer que a verdadeira sabedoria também se desenvolve por meio do diálogo e da convivência, poderá construir uma vida mais equilibrada e significativa.";

const evitar = [
  "Sua capacidade de análise poderá levá-lo a pensar excessivamente antes de tomar decisões. Deverá compreender que nem todas as respostas surgem apenas por meio da reflexão e que algumas experiências precisam ser vividas.",
  "Deverá evitar o isolamento emocional e a dificuldade de compartilhar preocupações. Preservar sua privacidade é importante, mas permitir que pessoas de confiança conheçam seus sentimentos contribuirá para seu equilíbrio.",
  "Sua curiosidade e necessidade de liberdade poderão levá-lo a mudar de interesses com frequência. Será importante desenvolver perseverança para concluir projetos que exigem dedicação prolongada.",
  "Poderá apresentar tendência à desconfiança quando não compreender completamente as intenções das outras pessoas. Deverá evitar transformar a prudência em suspeita permanente.",
  "Seu senso crítico poderá tornar-se excessivamente exigente, levando-o a identificar falhas com maior facilidade do que reconhecer qualidades. O respeito às diferenças fortalecerá seus relacionamentos.",
  "Deverá evitar a necessidade de encontrar explicações para absolutamente tudo. A vida também envolve sentimentos, espontaneidade e situações que não podem ser controladas apenas pela razão.",
  "Seu principal desafio será compreender que o conhecimento precisa caminhar ao lado da sensibilidade. Quando aprender a equilibrar independência, confiança e comunicação emocional, poderá transformar suas experiências em sabedoria e realização pessoal."
];

const perguntas = [
  "Estou utilizando minha capacidade de observação para compreender melhor a vida ou estou analisando tanto que deixo de agir?",
  "Consigo compartilhar meus sentimentos com pessoas de confiança ou prefiro enfrentar todas as dificuldades sozinho?",
  "Minha curiosidade está contribuindo para meu crescimento ou está me afastando da conclusão de projetos importantes?",
  "Estou permitindo que experiências anteriores prejudiquem minha confiança nos relacionamentos atuais?",
  "Consigo aceitar opiniões diferentes sem transformar minhas convicções em exigências para as outras pessoas?",
  "Estou equilibrando minha necessidade de liberdade e privacidade com a convivência das pessoas que amo?",
  "Os conhecimentos e as experiências que adquiri estão contribuindo para minha felicidade e para a realização dos meus objetivos?"
];

export default function PaginaPedro() {
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
              QUALIDADES POSITIVAS DO NOME PEDRO
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
