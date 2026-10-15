
import type { CSSProperties } from "react";

const qualidades =
  "Inteligência, criatividade, capacidade de observação, disciplina, organização, responsabilidade, determinação, intuição, independência intelectual, concentração, prudência, capacidade de planejamento, facilidade para aprender, senso crítico, profundidade de pensamento, persistência, discernimento, habilidade para solucionar problemas, comunicação, originalidade, espírito pesquisador, capacidade de análise e busca pelo aperfeiçoamento pessoal. O nome Zuleica apresenta a vibração numerológica 34/7, associada à construção do conhecimento por meio da experiência, da disciplina e da reflexão. Na interpretação numerológica, essa combinação sugere uma personalidade que poderá encontrar realização quando conseguir transformar suas ideias em projetos bem estruturados e utilizar seus conhecimentos para compreender situações, orientar decisões e construir resultados consistentes. O número 3, presente na composição, favorece a criatividade, a comunicação, a expressão de ideias e a capacidade de encontrar diferentes possibilidades diante dos desafios. O número 4 acrescenta organização, responsabilidade, perseverança, método e disposição para construir bases sólidas. A síntese 7 representa a investigação, a profundidade intelectual, a intuição, o discernimento e a necessidade de compreender os acontecimentos além das aparências. Zuleica poderá demonstrar facilidade para perceber detalhes, identificar incoerências, organizar informações e desenvolver soluções fundamentadas em sua experiência e capacidade de análise. Sua combinação numerológica poderá favorecer atividades relacionadas à administração, ao planejamento, à pesquisa, ao ensino, à comunicação especializada, à tecnologia, à investigação e a projetos que exijam conhecimento e precisão. Sua maior realização poderá surgir quando compreender que a sabedoria não depende apenas de acumular informações ou manter tudo sob controle, mas também de compartilhar experiências e reconhecer o valor dos sentimentos. Ao equilibrar criatividade, disciplina e sensibilidade, poderá transformar seus conhecimentos em realizações importantes e duradouras.";

const evitar = [
  "Sua capacidade de observação e análise poderá levá-la a examinar excessivamente os detalhes antes de tomar decisões. Deverá compreender que nem todas as situações permitem alcançar certeza absoluta e que algumas oportunidades exigem confiança e iniciativa.",
  "Deverá evitar transformar seu senso de responsabilidade em rigidez. Sua necessidade de organização poderá gerar desconforto quando outras pessoas utilizarem métodos ou seguirem ritmos diferentes dos seus.",
  "A combinação 34/7 poderá favorecer uma postura exigente diante dos próprios resultados. Será importante reconhecer suas conquistas e compreender que o aperfeiçoamento é um processo contínuo, não uma obrigação de alcançar a perfeição.",
  "Sua independência intelectual poderá levá-la a acreditar que precisa resolver todos os problemas sozinha. Aceitar colaboração e compartilhar responsabilidades não diminuirá sua capacidade, mas poderá ampliar suas possibilidades de realização.",
  "Poderá apresentar tendência a guardar sentimentos ou demonstrar suas preocupações de maneira excessivamente racional. Deverá lembrar que os relacionamentos também precisam de acolhimento, espontaneidade e demonstrações de afeto.",
  "Deverá evitar críticas constantes, especialmente quando perceber erros ou atitudes que considere incoerentes. Sua inteligência será mais valorizada quando utilizada para orientar e construir soluções, em vez de apenas apontar dificuldades.",
  "Seu principal desafio será equilibrar a necessidade de compreender e organizar tudo com a capacidade de confiar, dialogar e aceitar o inesperado. Quando aprender a unir conhecimento, criatividade e flexibilidade emocional, poderá construir uma vida com maior serenidade, reconhecimento e realização pessoal."
];

const perguntas = [
  "Estou utilizando minha inteligência e minha capacidade de organização para construir os resultados que realmente desejo?",
  "Consigo aceitar maneiras diferentes de pensar e agir ou espero que as pessoas sigam meus próprios critérios?",
  "Minha busca pelo aperfeiçoamento está contribuindo para meu crescimento ou está me impedindo de reconhecer minhas conquistas?",
  "Estou compartilhando minhas preocupações e sentimentos ou tentando resolver tudo sozinha?",
  "Consigo utilizar minha criatividade e minha comunicação com a mesma confiança que utilizo minha capacidade de análise?",
  "Estou permitindo que o excesso de planejamento e a necessidade de segurança dificultem decisões importantes?",
  "Como posso transformar meus conhecimentos e minhas experiências em realizações que tragam satisfação pessoal e contribuam positivamente para outras pessoas?"
];

export default function PaginaZuleica() {
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
              QUALIDADES POSITIVAS DO NOME ZULEICA
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
