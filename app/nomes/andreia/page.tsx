
import type { CSSProperties } from "react";

const qualidades =
  "Liderança, determinação, autoconfiança, ambição construtiva, capacidade administrativa, organização, disciplina, responsabilidade, perseverança, objetividade, senso de justiça, visão estratégica, coragem, iniciativa, eficiência, autoridade, maturidade, habilidade para negociar, capacidade de superação, espírito empreendedor, competência para administrar recursos, firmeza nas decisões e disposição para conquistar independência material. O nome Andreia apresenta a vibração numerológica 35/8, associada à realização, ao poder pessoal e à capacidade de transformar esforços em resultados concretos. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar satisfação ao assumir responsabilidades, desenvolver projetos e conquistar reconhecimento por suas competências. Andreia poderá demonstrar facilidade para identificar oportunidades, organizar objetivos e enfrentar desafios que exigem determinação e segurança. A presença do número 3 na composição de sua vibração favorece a expressão, a criatividade e a comunicação, enquanto o número 5 acrescenta versatilidade, movimento e capacidade de adaptação. A síntese 8 representa o aprendizado de utilizar essas qualidades para construir prosperidade com equilíbrio, ética e consciência. Sua maior realização poderá surgir quando compreender que o verdadeiro sucesso não depende apenas das conquistas materiais, mas também da qualidade dos relacionamentos e da satisfação com a própria trajetória.";

const evitar = [
  "Sua determinação e capacidade de liderança poderão levá-la a assumir responsabilidades excessivas, acreditando que precisa manter tudo sob seu controle. Aprender a delegar será fundamental para preservar seu equilíbrio.",
  "Deverá evitar a tendência de medir seu valor pessoal exclusivamente pelas conquistas profissionais, financeiras ou pelo reconhecimento recebido das outras pessoas.",
  "O desejo de alcançar resultados poderá despertar impaciência diante de obstáculos ou de pessoas que possuem um ritmo diferente do seu. A compreensão e a flexibilidade serão importantes para fortalecer seus relacionamentos.",
  "Poderá apresentar dificuldades para demonstrar vulnerabilidade ou pedir ajuda, especialmente quando sentir que precisa transmitir uma imagem permanente de força e segurança.",
  "Deverá evitar atitudes autoritárias, exigências excessivas e a necessidade de controlar decisões que também pertencem a outras pessoas. A verdadeira liderança se fortalece por meio do respeito e da cooperação.",
  "O excesso de dedicação ao trabalho e às responsabilidades materiais poderá fazer com que deixe em segundo plano sua vida afetiva, o descanso e as experiências que proporcionam satisfação emocional.",
  "Seu principal desafio será compreender que prosperidade significa construir uma vida equilibrada. O dinheiro, o reconhecimento e as realizações são importantes, mas não devem substituir a tranquilidade interior, os vínculos afetivos e o respeito aos próprios valores."
];

const perguntas = [
  "Estou utilizando minha capacidade de liderança para construir uma vida que realmente corresponde aos meus valores?",
  "Consigo reconhecer meu próprio valor independentemente das minhas conquistas materiais e profissionais?",
  "Tenho facilidade para delegar responsabilidades ou acredito que preciso controlar todas as situações?",
  "Estou equilibrando minhas ambições profissionais com minha vida afetiva e meu bem-estar?",
  "Minhas decisões são guiadas pela consciência e pela justiça ou apenas pela necessidade de alcançar resultados?",
  "Consigo demonstrar meus sentimentos e pedir ajuda sem considerar isso um sinal de fraqueza?",
  "Estou construindo uma prosperidade que também inclui felicidade, tranquilidade e relacionamentos saudáveis?"
];

export default function PaginaAndreia() {
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
              QUALIDADES POSITIVAS DO NOME ANDREIA
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
