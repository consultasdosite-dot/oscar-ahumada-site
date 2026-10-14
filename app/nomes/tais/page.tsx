import type { CSSProperties } from "react";

const qualidades = "Amor, afetividade, simpatia, compromisso, coesão, dedicação, amizade, sociabilidade, consciência grupal, lar, situações domésticas, família, consideração com os outros, estar junto ou misturado: nós, equipe, time, interesse por pessoas, diplomacia, psicologia, senso artístico e de saúde, bem-estar, parceria, colaboração, códigos de comportamento, justiça social, advocacia, integração, conveniência, associações, acordos, conselhos, conversas, palavras, inter-relações, casamento, amor conjugal ou filial, normalidade, coisas comuns e explícitas / concretas, educação, anfitrião, guardião, curador, ética, paz, serenidade, calma, responsabilidade, cura, satisfação, regras, prestação de serviços, ajuda, consideração com os outros, harmonia, música, amalgamar, estratégia, eficiência, fidelidade.";
const evitar = [
  "Normalmente esta personalidade é regida pela perfeição e quando as coisas não acontecem com equilíbrio pode se fechar em seu mundo por medo de rejeição devido a sua necessidade incondicional de ter alguém ao seu lado.",
  "Pode ser muito ciumenta e controladora, preocupada com os outros ao extremo de invadir a privacidade sem ser chamada.",
  "Ao mesmo tempo poderá ser escravizada pelo simples fato de permanecer numa relação que nada lhe acrescenta."
];
const perguntas = [
  "Tenho amadurecimento para assumir minhas responsabilidades sociais?",
  "Ainda estou vinculado à minha família ou a alguma coisa que atrase meu crescimento pessoal?",
  "Sou capaz de me dedicar e me comprometer com o que interessa?",
  "Costumo invadir as pessoas, intrometendo-me ou querendo ajudar sem ser solicitada?",
  "Queixo-me demais?"
];

export default function PaginaTais() {
  return (
    <main style={pagina}>
      <div style={container}>
        <header style={cabecalho}>
          <p style={assinatura}>OSCAR AHUMADA — NUMERÓLOGO DAS ESTRELAS</p>
          <img src="/Caracurso1.png" alt="Oscar Ahumada — Numerólogo das Estrelas" style={foto} />
        </header>

        <section style={secaoCards}>
          <article style={card}>
            <h2 style={tituloCard}>QUALIDADES POSITIVAS DO NOME TAÍS</h2>
            <p style={textoCard}>{qualidades}</p>
          </article>

          <article style={card}>
            <h2 style={tituloCard}>DEVERÁ EVITAR</h2>
            {evitar.map((texto) => (
              <p key={texto} style={textoCard}>{texto}</p>
            ))}
          </article>

          <article style={card}>
            <h2 style={tituloCard}>PERGUNTAS PARA REFLETIR NO SEU DIA A DIA</h2>
            <ul style={listaPerguntas}>
              {perguntas.map((pergunta) => (
                <li key={pergunta} style={itemLista}>{pergunta}</li>
              ))}
            </ul>
          </article>
        </section>

        <section style={convite}>
          <h2 style={tituloConvite}>QUER DESCOBRIR AINDA MAIS SOBRE VOCÊ?</h2>
          <p style={textoConvite}>Seu primeiro nome representa apenas uma parte da interpretação numerológica.</p>
          <p style={textoConvite}>Conheça o que seu nome completo e sua data de nascimento podem revelar sobre seus potenciais, desafios e caminhos de vida.</p>
          <a href="/nomes/quero-saber-tudo" style={botaoVerde}>QUERO SABER TUDO</a>
          <p style={rodape}>Oscar Ahumada — Numerólogo das Estrelas</p>
        </section>
      </div>
    </main>
  );
}

const pagina: CSSProperties = { minHeight: "100vh", backgroundColor: "#f8f6f2", color: "#27232b", padding: "32px 16px 64px", fontFamily: "Arial, sans-serif" };
const container: CSSProperties = { maxWidth: 780, margin: "0 auto" };
const cabecalho: CSSProperties = { textAlign: "center", marginBottom: 30 };
const assinatura: CSSProperties = { color: "#96703b", fontSize: 13, fontWeight: 700, letterSpacing: 1.2, lineHeight: 1.5, margin: "0 0 18px" };
const titulo: CSSProperties = { fontSize: "clamp(25px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.3, maxWidth: 700, margin: "0 auto 24px" };
const foto: CSSProperties = { display: "block", width: "100%", maxWidth: 300, height: "auto", margin: "0 auto", borderRadius: 18 };
const secaoCards: CSSProperties = { display: "grid", gridTemplateColumns: "1fr", gap: 24 };
const card: CSSProperties = { display: "block", backgroundColor: "#ffffff", border: "1px solid #eee8df", borderRadius: 20, padding: "clamp(22px, 5vw, 36px)", boxShadow: "0 5px 24px rgba(0,0,0,0.06)" };
const tituloCard: CSSProperties = { fontSize: "clamp(20px, 4vw, 25px)", fontWeight: 700, color: "#8b6534", lineHeight: 1.3, margin: "0 0 18px" };
const textoCard: CSSProperties = { fontSize: 17, lineHeight: 1.8, margin: "0 0 16px" };
const listaPerguntas: CSSProperties = { paddingLeft: 24, margin: 0, fontSize: 17, lineHeight: 1.8, fontWeight: 700 };
const itemLista: CSSProperties = { marginBottom: 16, paddingLeft: 4 };
const convite: CSSProperties = { backgroundColor: "#27212e", color: "#ffffff", textAlign: "center", borderRadius: 20, padding: "clamp(22px, 5vw, 36px)", marginTop: 24 };
const tituloConvite: CSSProperties = { fontSize: "clamp(22px, 4vw, 27px)", fontWeight: 700, color: "#e8c78b", lineHeight: 1.3, margin: "0 0 20px" };
const textoConvite: CSSProperties = { fontSize: 17, lineHeight: 1.8, margin: "0 0 16px" };
const botaoVerde: CSSProperties = { display: "inline-block", backgroundColor: "#16803c", color: "#ffffff", textDecoration: "none", fontSize: 17, fontWeight: 700, padding: "18px 28px", borderRadius: 12, marginTop: 12 };
const rodape: CSSProperties = { fontSize: 13, marginTop: 24 };
