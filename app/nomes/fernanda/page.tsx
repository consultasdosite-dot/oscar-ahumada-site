
import type { CSSProperties } from "react";

const qualidades =
  "Liderança, independência, iniciativa, coragem, determinação, criatividade, autoconfiança, capacidade de decisão, espírito empreendedor, originalidade, persistência, inteligência prática, dinamismo, responsabilidade, poder de realização, ambição construtiva, capacidade de organização, firmeza de propósito, autenticidade, entusiasmo, capacidade de superação e disposição para abrir novos caminhos. O nome Fernanda apresenta a vibração numerológica 28/10/1, associada à iniciativa, à autonomia e ao desenvolvimento da própria identidade. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando tiver oportunidades de tomar decisões, desenvolver projetos e utilizar seus talentos para conquistar objetivos importantes. O número 2, presente na composição, acrescenta sensibilidade, diplomacia e necessidade de cooperação, enquanto o número 8 favorece a capacidade administrativa, a determinação e o interesse por resultados concretos. A síntese 1 representa a liderança e a coragem de construir o próprio caminho. Fernanda poderá demonstrar facilidade para assumir responsabilidades, encontrar soluções diante dos desafios e motivar outras pessoas por meio de seu exemplo. Sua maior realização poderá surgir quando compreender que a verdadeira liderança não consiste em controlar todas as situações, mas em desenvolver confiança, equilíbrio emocional e capacidade de colaboração. Ao unir sua força de vontade à sensibilidade e ao respeito pelas pessoas, poderá transformar suas iniciativas em conquistas consistentes e significativas.";

const evitar = [
  "Sua determinação e necessidade de independência poderão levá-la a assumir responsabilidades excessivas, acreditando que precisa resolver tudo sozinha. Deverá compreender que compartilhar tarefas e aceitar ajuda não diminui sua capacidade de liderança.",
  "Deverá evitar atitudes autoritárias ou a necessidade de controlar decisões que também envolvem outras pessoas. O diálogo e a cooperação fortalecerão seus relacionamentos pessoais e profissionais.",
  "O desejo de conquistar resultados poderá favorecer a impaciência diante de processos que exigem tempo, planejamento e perseverança. Será importante respeitar o ritmo necessário para cada realização.",
  "Poderá apresentar dificuldades para reconhecer suas próprias fragilidades, especialmente quando sentir que precisa demonstrar força e segurança. Aprender a expressar sentimentos contribuirá para seu equilíbrio emocional.",
  "Deverá evitar transformar sua capacidade de realização em cobranças excessivas, tanto consigo mesma quanto com as pessoas que fazem parte de sua vida. Nem todas as situações precisam ser avaliadas exclusivamente pelos resultados alcançados.",
  "Sua iniciativa poderá levá-la a tomar decisões precipitadas quando desejar resolver rapidamente uma situação. Será importante avaliar alternativas, ouvir opiniões e considerar as consequências antes de agir.",
  "Seu principal desafio será compreender que independência não significa isolamento e que liderança não exige superioridade. Quando aprender a equilibrar determinação, sensibilidade e cooperação, poderá conquistar seus objetivos sem comprometer a harmonia de seus relacionamentos."
];

const perguntas = [
  "Estou utilizando minha capacidade de liderança para construir meus objetivos ou tentando controlar situações que não dependem apenas de mim?",
  "Consigo aceitar ajuda e compartilhar responsabilidades ou acredito que preciso resolver tudo sozinha?",
  "Minhas decisões estão sendo tomadas com equilíbrio ou frequentemente ajo movida pela pressa de alcançar resultados?",
  "Estou respeitando as opiniões e os sentimentos das pessoas que convivem comigo?",
  "Minha busca por independência está fortalecendo minha autoestima ou criando distanciamento nos meus relacionamentos?",
  "Consigo reconhecer minhas conquistas sem exigir constantemente mais de mim mesma?",
  "Estou utilizando minha força de vontade para realizar aquilo que realmente faz sentido para minha felicidade e meu propósito de vida?"
];

export default function PaginaFernanda() {
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
              QUALIDADES POSITIVAS DO NOME FERNANDA
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
