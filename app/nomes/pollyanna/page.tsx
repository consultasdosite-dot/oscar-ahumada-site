
import type { CSSProperties } from "react";

const qualidades =
  "Criatividade, comunicação, versatilidade, independência, determinação, inteligência prática, dinamismo, curiosidade, iniciativa, capacidade de organização, espontaneidade, sociabilidade, entusiasmo, flexibilidade, espírito empreendedor, facilidade para aprender, poder de persuasão, habilidade para estabelecer contatos, percepção das oportunidades, coragem para enfrentar mudanças, originalidade, capacidade de negociação e disposição para transformar ideias em realizações. O nome Pollyanna apresenta a vibração numerológica 41/5, associada à liberdade conquistada por meio da iniciativa, do trabalho e da construção de uma base sólida para o futuro. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando conseguir unir sua necessidade de independência à capacidade de organizar projetos e assumir responsabilidades. O número 4, presente na composição, favorece a disciplina, a perseverança, o planejamento e o desejo de construir resultados concretos, enquanto o número 1 acrescenta liderança, originalidade, iniciativa e coragem para abrir novos caminhos. A síntese 5 representa a liberdade, a comunicação, a versatilidade e o desenvolvimento por meio das experiências. Pollyanna poderá demonstrar facilidade para identificar oportunidades, estabelecer contatos, desenvolver atividades comerciais ou criativas e encontrar alternativas diante de situações desafiadoras. Sua combinação numerológica poderá favorecer iniciativas que exijam planejamento, comunicação, negociação, inovação e capacidade de adaptação. Sua maior realização poderá surgir quando compreender que a verdadeira liberdade não depende de abandonar compromissos, mas de construir condições para realizar suas escolhas com segurança e independência. Ao equilibrar disciplina e espontaneidade, poderá transformar seu entusiasmo em conquistas importantes e duradouras.";

const evitar = [
  "Sua necessidade de liberdade e independência poderá entrar em conflito com as responsabilidades necessárias à realização de seus objetivos. Deverá compreender que a disciplina não representa uma limitação, mas um instrumento para conquistar maior autonomia.",
  "Deverá evitar a dispersão de energia, iniciando muitos projetos simultaneamente sem estabelecer prioridades. Sua criatividade produzirá resultados mais consistentes quando estiver acompanhada de planejamento e continuidade.",
  "A combinação 41/5 poderá favorecer momentos de tensão entre o desejo de manter tudo organizado e a vontade de mudar rapidamente de direção. Será importante reconhecer quando uma mudança representa evolução e quando apenas interrompe um processo que precisa amadurecer.",
  "Sua iniciativa e capacidade de decisão poderão levá-la à impaciência diante de pessoas que possuem ritmos ou opiniões diferentes. O respeito às diferenças fortalecerá sua liderança e seus relacionamentos.",
  "Poderá apresentar tendência a assumir compromissos excessivos, acreditando que conseguirá administrar todas as responsabilidades ao mesmo tempo. Aprender a estabelecer limites contribuirá para sua tranquilidade e eficiência.",
  "Deverá evitar decisões impulsivas relacionadas a mudanças profissionais, relacionamentos ou compromissos financeiros. A liberdade será mais proveitosa quando suas escolhas estiverem fundamentadas em informações e planejamento.",
  "Seu principal desafio será compreender que independência e responsabilidade precisam caminhar juntas. Quando aprender a utilizar sua disciplina para organizar os próprios talentos, sem sufocar sua criatividade, poderá construir uma vida com maior liberdade, estabilidade e realização pessoal."
];

const perguntas = [
  "Estou construindo uma base sólida para conquistar a liberdade e a independência que desejo?",
  "Consigo transformar minhas ideias em projetos concretos ou frequentemente abandono iniciativas antes de alcançar resultados?",
  "Minha necessidade de organização está contribuindo para meu crescimento ou está limitando minha espontaneidade?",
  "Estou tomando decisões com planejamento ou permitindo que o entusiasmo do momento determine minhas escolhas?",
  "Consigo respeitar o ritmo e as opiniões das outras pessoas quando preciso trabalhar em equipe?",
  "Estou equilibrando meus compromissos profissionais e pessoais com momentos de descanso, criatividade e liberdade?",
  "Os caminhos que estou construindo representam meus verdadeiros objetivos ou estou apenas respondendo às expectativas das outras pessoas?"
];

export default function PaginaPollyanna() {
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
              QUALIDADES POSITIVAS DO NOME POLLYANNA
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
