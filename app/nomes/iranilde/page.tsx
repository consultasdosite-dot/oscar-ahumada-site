
import type { CSSProperties } from "react";

const qualidades =
  "Liderança, independência, iniciativa, coragem, determinação, criatividade, autoconfiança, capacidade de decisão, originalidade, inteligência, sensibilidade, intuição, capacidade de observação, pensamento analítico, comunicação, curiosidade intelectual, persistência, responsabilidade, autenticidade, capacidade de superação, busca pelo conhecimento e disposição para abrir novos caminhos. O nome Iranilde apresenta a vibração numerológica 37/10/1, associada à independência, ao desenvolvimento da própria identidade e à capacidade de transformar conhecimentos e experiências em realizações pessoais. Na interpretação numerológica, o número 3 acrescenta criatividade, expressão, comunicação e sensibilidade artística, enquanto o número 7 representa a introspecção, a análise, a espiritualidade e a necessidade de compreender profundamente as situações da vida. A soma dessas influências conduz ao número 10, que se reduz ao 1, símbolo de iniciativa, liderança, autonomia e novos começos. Iranilde poderá apresentar uma personalidade observadora, inteligente e determinada, com facilidade para desenvolver ideias próprias e encontrar soluções originais para seus desafios. Sua sensibilidade poderá levá-la a perceber detalhes que outras pessoas não observam, enquanto sua independência favorecerá a construção de um caminho pessoal baseado em suas convicções. Entretanto, sua maior realização poderá surgir quando aprender a equilibrar a necessidade de liberdade com a capacidade de compartilhar pensamentos, sentimentos e experiências. Ao unir criatividade, conhecimento, intuição e iniciativa, poderá transformar seus talentos em conquistas significativas, desenvolvendo uma liderança consciente, inspiradora e respeitosa.";

const evitar = [
  "Sua independência e necessidade de tomar decisões próprias poderão levá-la a resistir às opiniões de outras pessoas. Deverá compreender que ouvir diferentes pontos de vista não diminui sua autonomia, mas amplia sua capacidade de fazer escolhas conscientes.",

  "Sua tendência à análise e à reflexão poderá favorecer períodos de isolamento, especialmente quando enfrentar situações emocionalmente difíceis. Será importante compreender que compartilhar sentimentos e preocupações poderá fortalecer seus relacionamentos.",

  "Deverá evitar a autocrítica excessiva e a necessidade de encontrar respostas perfeitas para todas as situações. Nem sempre será possível compreender ou controlar todos os acontecimentos da vida.",

  "Sua criatividade poderá produzir muitas ideias e possibilidades, mas será necessário evitar a dispersão e a dificuldade de concluir projetos iniciados. Organização, disciplina e persistência serão fundamentais para transformar seus talentos em resultados concretos.",

  "Poderá demonstrar certa dificuldade para expressar suas emoções quando sentir que não será compreendida. Aprender a comunicar seus sentimentos com clareza e confiança contribuirá para sua segurança emocional.",

  "Sua capacidade de observação poderá levá-la a questionar excessivamente as atitudes e intenções das pessoas. Deverá evitar desconfianças desnecessárias e desenvolver relacionamentos baseados no diálogo e no respeito.",

  "Seu principal desafio será equilibrar a liberdade individual com a convivência harmoniosa. Quando aprender a unir inteligência, sensibilidade, criatividade e cooperação, poderá conquistar seus objetivos sem comprometer sua tranquilidade emocional e seus relacionamentos."
];

const perguntas = [
  "Estou utilizando minha inteligência e criatividade para construir meus objetivos ou permitindo que minhas ideias permaneçam apenas no pensamento?",

  "Minha necessidade de independência está fortalecendo minha autoestima ou dificultando minha capacidade de aceitar ajuda?",

  "Consigo expressar meus sentimentos com naturalidade ou prefiro guardar minhas preocupações para mim mesma?",

  "Estou utilizando minha capacidade de observação para compreender melhor as pessoas ou permitindo que dúvidas e desconfianças prejudiquem meus relacionamentos?",

  "Tenho conseguido transformar meus conhecimentos e talentos em realizações concretas?",

  "Estou respeitando meus momentos de reflexão sem permitir que o isolamento me afaste das pessoas importantes em minha vida?",

  "Minha busca por conhecimento, liberdade e realização está contribuindo para construir uma vida mais equilibrada, significativa e feliz?"
];

export default function PaginaIranilde() {
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
              QUALIDADES POSITIVAS DO NOME IRANILDE
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
