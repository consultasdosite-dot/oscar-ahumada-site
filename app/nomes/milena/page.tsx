
import type { CSSProperties } from "react";

const qualidades =
  "Generosidade, sensibilidade, compreensão, solidariedade, intuição, sabedoria, criatividade, empatia, capacidade de acolhimento, diplomacia, espiritualidade, percepção emocional, inteligência analítica, senso de justiça, altruísmo, capacidade de aconselhar, dedicação, inspiração, tolerância, profundidade de pensamento, espírito humanitário, capacidade de superação e disposição para contribuir positivamente com a vida das pessoas. O nome Milena apresenta a vibração numerológica 27/9, associada à sabedoria adquirida por meio das experiências, à sensibilidade humana e ao desenvolvimento da consciência sobre o próprio papel na sociedade. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando utilizar seus conhecimentos, talentos e experiências para ajudar, orientar, ensinar ou inspirar outras pessoas. O número 2, presente na composição, favorece a diplomacia, a cooperação, a sensibilidade e a percepção dos sentimentos, enquanto o número 7 acrescenta profundidade intelectual, intuição, capacidade de investigação e busca pelo autoconhecimento. A síntese 9 representa a generosidade, a compreensão, a solidariedade e a capacidade de reconhecer necessidades que ultrapassam os próprios interesses. Milena poderá demonstrar facilidade para compreender situações emocionalmente complexas, perceber sentimentos que nem sempre são expressos e oferecer orientações fundamentadas em sua sensibilidade e experiência. Sua combinação numerológica poderá favorecer atividades relacionadas ao ensino, à comunicação, à arte, ao aconselhamento, à pesquisa, às relações humanas e aos projetos de natureza social ou humanitária. Sua maior realização poderá surgir quando compreender que ajudar as pessoas não significa assumir suas responsabilidades ou abandonar os próprios sonhos. Ao equilibrar generosidade, discernimento e amor-próprio, poderá transformar sua sensibilidade em uma importante fonte de realização pessoal e contribuição para o mundo.";

const evitar = [
  "Sua sensibilidade e disposição para ajudar poderão levá-la a absorver preocupações e problemas que pertencem a outras pessoas. Deverá compreender que oferecer apoio não significa assumir responsabilidades que não são suas.",
  "Deverá evitar criar expectativas excessivas sobre a gratidão, o reconhecimento ou a reciprocidade das pessoas. Nem todos demonstram sentimentos e reconhecimento da mesma maneira.",
  "Sua percepção emocional poderá torná-la especialmente sensível às críticas, rejeições e decepções. Será importante desenvolver segurança interior para não permitir que opiniões externas determinem seu valor pessoal.",
  "Poderá apresentar tendência a guardar mágoas ou permanecer emocionalmente ligada a acontecimentos que já deveriam ter sido superados. Aprender a encerrar ciclos será fundamental para seu equilíbrio.",
  "Sua capacidade de compreender os sentimentos das pessoas poderá levá-la a justificar comportamentos inadequados ou permanecer em relacionamentos desequilibrados. A compaixão precisa caminhar ao lado do respeito por si mesma.",
  "Deverá evitar o isolamento emocional quando sentir que não está sendo compreendida. Compartilhar suas necessidades e estabelecer diálogos sinceros poderá evitar afastamentos e conflitos desnecessários.",
  "Seu principal desafio será compreender que a verdadeira generosidade não exige sacrifício permanente. Quando aprender a estabelecer limites, reconhecer suas necessidades e transformar experiências difíceis em sabedoria, poderá utilizar seus talentos para ajudar outras pessoas sem comprometer sua própria felicidade."
];

const perguntas = [
  "Estou utilizando minha sensibilidade para contribuir positivamente com a vida das pessoas sem esquecer das minhas próprias necessidades?",
  "Consigo ajudar familiares e amigos sem assumir responsabilidades que pertencem a eles?",
  "Estou permitindo que decepções anteriores influenciem negativamente minhas escolhas e meus relacionamentos atuais?",
  "Minha generosidade nasce de uma decisão consciente ou da necessidade de receber reconhecimento e aprovação?",
  "Consigo estabelecer limites quando percebo que determinada situação está prejudicando meu equilíbrio emocional?",
  "Estou utilizando meus conhecimentos, minha intuição e minhas experiências para desenvolver meus próprios talentos e objetivos?",
  "Quais situações preciso compreender, perdoar ou encerrar para construir uma vida com mais liberdade emocional, serenidade e realização?"
];

export default function PaginaMilena() {
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
              QUALIDADES POSITIVAS DO NOME MILENA
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
