
import type { CSSProperties } from "react";

const qualidades =
  "Independência, iniciativa, liderança, determinação, coragem, originalidade, criatividade, autoconfiança, espírito empreendedor, capacidade de decisão, objetividade, dinamismo, perseverança, entusiasmo, pioneirismo, ambição construtiva, autenticidade, força de vontade, capacidade de superação, responsabilidade pelas próprias escolhas e disposição para enfrentar desafios. O nome Arilda apresenta a vibração numerológica 19/1, associada ao desenvolvimento da individualidade, à autonomia e à capacidade de abrir novos caminhos. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando tiver liberdade para expressar suas ideias, assumir iniciativas e transformar seus projetos em conquistas pessoais. Arilda poderá demonstrar habilidade para liderar, organizar seus objetivos e incentivar outras pessoas a acreditarem em suas próprias capacidades. Sua força estará na coragem de começar, na confiança para tomar decisões e na disposição de construir uma trajetória coerente com seus valores. O grande aprendizado dessa vibração será compreender que a verdadeira liderança não depende de controlar os outros, mas de desenvolver segurança interior, responsabilidade e respeito pelas diferenças.";

const evitar = [
  "Sua necessidade de independência poderá levá-la a acreditar que precisa resolver todos os problemas sozinha. Deverá compreender que aceitar ajuda não diminui sua capacidade nem sua autoridade.",
  "Deverá evitar a impaciência diante de pessoas que possuem ritmos, opiniões e maneiras de agir diferentes das suas. A capacidade de ouvir será tão importante quanto a habilidade de tomar decisões.",
  "O desejo de realizar seus objetivos poderá despertar comportamentos excessivamente exigentes, competitivos ou autoritários. É importante compreender que liderar não significa impor sua vontade.",
  "Poderá apresentar dificuldades para reconhecer erros ou modificar decisões quando sentir que sua autonomia está sendo questionada. A flexibilidade será fundamental para seu crescimento.",
  "Deverá evitar o orgulho excessivo, a resistência em demonstrar sentimentos e a tendência de esconder fragilidades por receio de parecer vulnerável.",
  "A vibração 19/1 poderá trazer reflexões importantes sobre o equilíbrio entre individualidade e cooperação. O desafio será conquistar independência sem se afastar emocionalmente das pessoas que ama.",
  "Seu principal aprendizado será compreender que a verdadeira força não está apenas em conquistar espaços e alcançar resultados, mas também em cultivar a humildade, a sensibilidade e a capacidade de compartilhar suas vitórias."
];

const perguntas = [
  "Estou utilizando minha independência para construir uma vida que realmente corresponde aos meus desejos?",
  "Consigo ouvir opiniões diferentes sem sentir que minha autoridade ou capacidade estão sendo questionadas?",
  "Tenho facilidade para pedir ajuda quando preciso ou acredito que devo resolver tudo sozinha?",
  "Estou exercendo minha liderança com respeito, sensibilidade e compreensão?",
  "Minhas decisões são motivadas pela confiança em mim mesma ou pela necessidade de provar meu valor aos outros?",
  "Consigo reconhecer meus erros e mudar de direção quando percebo que existe um caminho melhor?",
  "Estou valorizando meus relacionamentos tanto quanto minhas conquistas e meus objetivos pessoais?"
];

export default function PaginaArilda() {
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
              QUALIDADES POSITIVAS DO NOME ARILDA
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
