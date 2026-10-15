
import type { CSSProperties } from "react";

const qualidades =
  "Amor, generosidade, responsabilidade, sensibilidade, acolhimento, dedicação, lealdade, diplomacia, compreensão, solidariedade, capacidade de conciliação, espírito protetor, senso de justiça, harmonia, equilíbrio emocional, criatividade, compromisso com a família, disposição para ajudar, habilidade para aconselhar, capacidade de organização, perseverança e valorização dos relacionamentos. O nome Alzira apresenta a vibração numerológica 24/6, associada à responsabilidade afetiva, à construção de vínculos sólidos e à busca pela harmonia. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando utilizar sua sensibilidade e sua capacidade de organização para contribuir positivamente com a vida das pessoas. O número 2, presente na composição, favorece a cooperação, a diplomacia e a percepção dos sentimentos, enquanto o número 4 acrescenta disciplina, estabilidade, dedicação e compromisso. A síntese 6 representa o amor, o cuidado e o desejo de construir ambientes acolhedores. Alzira poderá demonstrar facilidade para compreender necessidades emocionais, oferecer orientações, organizar situações familiares e assumir responsabilidades importantes. Sua presença poderá transmitir segurança e confiança, especialmente quando conseguir equilibrar sua dedicação com serenidade e respeito à individualidade das pessoas. Sua maior realização poderá surgir quando compreender que amar não significa assumir todos os problemas dos outros, mas oferecer apoio sem abandonar os próprios sonhos, necessidades e objetivos. Ao reconhecer seu valor pessoal e estabelecer limites saudáveis, poderá transformar sua generosidade em uma fonte de felicidade, equilíbrio e realização.";

const evitar = [
  "Sua disposição para cuidar das pessoas poderá levá-la a assumir responsabilidades que não lhe pertencem. Deverá compreender que ajudar não significa resolver todos os problemas ou impedir que os outros aprendam com suas próprias experiências.",
  "Deverá evitar colocar constantemente as necessidades familiares e afetivas acima de seus próprios sonhos. O cuidado consigo mesma é tão importante quanto a dedicação às pessoas que ama.",
  "Seu desejo de harmonia poderá levá-la a evitar conversas necessárias ou aceitar situações que provocam sofrimento. Será importante expressar sentimentos e estabelecer limites com serenidade e firmeza.",
  "Poderá apresentar tendência à preocupação excessiva com o bem-estar das pessoas próximas, especialmente quando não conseguir acompanhar ou influenciar suas decisões. Aprender a confiar na capacidade dos outros contribuirá para sua tranquilidade.",
  "Deverá evitar a cobrança de reconhecimento por tudo aquilo que oferece. Quando a dedicação se transforma em expectativa de retribuição, poderão surgir frustrações e ressentimentos.",
  "Sua responsabilidade poderá levá-la ao perfeccionismo e à necessidade de manter tudo organizado e sob controle. Será importante aceitar que nem todas as situações dependem exclusivamente de sua atuação.",
  "Seu principal desafio será compreender que o amor verdadeiro precisa caminhar ao lado do respeito, da liberdade e do equilíbrio. Quando aprender a cuidar das pessoas sem esquecer de si mesma, poderá construir relacionamentos mais saudáveis e uma vida emocionalmente gratificante."
];

const perguntas = [
  "Estou cuidando de mim mesma com a mesma dedicação que ofereço às pessoas que amo?",
  "Consigo ajudar familiares e amigos sem assumir responsabilidades que pertencem a eles?",
  "Estou expressando meus sentimentos com sinceridade ou prefiro guardar minhas preocupações para evitar conflitos?",
  "Minha necessidade de harmonia está contribuindo para minha felicidade ou me levando a aceitar situações que precisam mudar?",
  "Consigo estabelecer limites sem sentir culpa quando preciso dizer não?",
  "Estou reconhecendo meu próprio valor ou dependo excessivamente da aprovação e do reconhecimento das outras pessoas?",
  "Os compromissos que assumo estão permitindo que eu realize meus sonhos e desenvolva meus talentos pessoais?"
];

export default function PaginaAlzira() {
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
              QUALIDADES POSITIVAS DO NOME ALZIRA
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
