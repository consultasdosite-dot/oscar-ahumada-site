
import type { CSSProperties } from "react";

const qualidades =
  "Sensibilidade, intuição, independência, inteligência, profundidade emocional, capacidade de observação, determinação, responsabilidade afetiva, lealdade, criatividade, percepção dos sentimentos, generosidade, capacidade de superação, discernimento, busca pelo autoconhecimento, dedicação, coragem para recomeçar, espírito investigativo, capacidade de reflexão, autenticidade, compreensão, força interior e disposição para transformar experiências em aprendizado. O nome Amanda apresenta a vibração numerológica 16/7, associada ao desenvolvimento da consciência pessoal, ao amadurecimento emocional e à descoberta da própria força interior. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando aprender a equilibrar sua necessidade de independência com sua sensibilidade e seu desejo de construir vínculos afetivos verdadeiros. O número 1, presente na composição, favorece a iniciativa, a autonomia, a coragem e a capacidade de abrir novos caminhos. O número 6 acrescenta responsabilidade, afetividade, dedicação à família, senso de proteção e valorização dos relacionamentos. A síntese 7 representa a introspecção, a investigação, a intuição e a busca por respostas mais profundas sobre a vida. Amanda poderá demonstrar uma personalidade que reúne força e delicadeza, determinação e sensibilidade, independência e necessidade de afeto. Sua combinação numerológica poderá favorecer atividades relacionadas ao aconselhamento, à pesquisa, ao ensino, à comunicação, às relações humanas e a trabalhos que exijam percepção, responsabilidade e compreensão. O composto 16/7 também convida à reflexão sobre expectativas, orgulho, confiança e mudanças que contribuem para o amadurecimento. Sua maior realização poderá surgir quando compreender que a verdadeira independência não exige afastamento emocional e que amar não significa abandonar a própria identidade. Ao transformar experiências difíceis em conhecimento, fortalecer sua autoestima e desenvolver relações baseadas na confiança e no respeito, poderá encontrar maior equilíbrio, serenidade e realização pessoal.";

const evitar = [
  "Sua independência poderá levá-la a acreditar que precisa demonstrar força em todas as circunstâncias. Deverá compreender que reconhecer fragilidades, pedir apoio e compartilhar sentimentos não diminui sua capacidade de enfrentar os desafios da vida.",
  "Deverá evitar criar expectativas idealizadas sobre relacionamentos e pessoas próximas. Quando esperar que os outros correspondam exatamente àquilo que imagina, poderá experimentar decepções que seriam evitadas por meio do diálogo e da compreensão.",
  "A combinação 16/7 poderá favorecer momentos de orgulho ou resistência em reconhecer erros. Será importante compreender que mudar de opinião, pedir desculpas e aceitar orientações representam atitudes de amadurecimento, não sinais de fraqueza.",
  "Sua sensibilidade afetiva poderá levá-la a guardar mágoas e interpretar determinadas experiências como rejeição pessoal. Deverá evitar permitir que acontecimentos anteriores comprometam sua confiança em novas oportunidades e relacionamentos.",
  "Poderá apresentar tendência a assumir responsabilidades excessivas pelas pessoas que ama, tentando protegê-las de todas as dificuldades. Será importante reconhecer que cada pessoa precisa desenvolver autonomia e aprender com suas próprias experiências.",
  "Deverá evitar o isolamento emocional quando enfrentar conflitos ou mudanças inesperadas. Sua capacidade de reflexão será mais proveitosa quando estiver acompanhada de comunicação sincera e disposição para compreender diferentes pontos de vista.",
  "Seu principal desafio será equilibrar independência, humildade e afetividade. Quando aprender a reconhecer suas necessidades emocionais, abandonar expectativas rígidas e transformar experiências difíceis em sabedoria, poderá desenvolver relacionamentos mais saudáveis e construir uma vida com maior segurança interior e realização pessoal."
];

const perguntas = [
  "Estou utilizando minha independência para construir uma vida mais equilibrada ou tentando demonstrar que não preciso de ninguém?",
  "Consigo expressar meus sentimentos com sinceridade ou escondo minhas necessidades emocionais por receio de parecer vulnerável?",
  "Estou criando expectativas realistas sobre as pessoas que amo ou esperando que correspondam exatamente àquilo que imagino?",
  "Consigo reconhecer meus erros, mudar de opinião e aceitar orientações sem sentir que minha independência está sendo ameaçada?",
  "Estou permitindo que decepções e experiências anteriores prejudiquem minha confiança nos relacionamentos atuais?",
  "Minha dedicação à família e às pessoas próximas está equilibrada com o cuidado que preciso dedicar a mim mesma?",
  "Quais experiências preciso compreender e transformar em aprendizado para fortalecer minha autoestima, minha serenidade e minha realização pessoal?"
];

export default function PaginaAmanda() {
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
              QUALIDADES POSITIVAS DO NOME AMANDA
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
