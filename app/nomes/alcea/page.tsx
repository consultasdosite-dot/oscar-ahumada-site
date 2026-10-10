
import type { CSSProperties } from "react";

export default function PaginaAlcea() {
  return (
    <main style={pagina}>
      <div style={container}>
        <header style={cabecalho}>
          <p style={assinatura}>
            OSCAR AHUMADA — NUMERÓLOGO DAS ESTRELAS
          </p>

          <h1 style={titulo}>
            ALCÉA, VOCÊ CONHECE A FORÇA DO SEU NOME?
          </h1>

          <img
            src="/Caracurso1.png"
            alt="Oscar Ahumada — Numerólogo das Estrelas"
            style={foto}
          />
        </header>

        <section style={secaoCards}>
          {/* CARD 1 — QUALIDADES POSITIVAS */}
          <article style={card}>
            <h2 style={tituloCard}>
              QUALIDADES POSITIVAS
            </h2>

            <p style={textoCard}>
              Ordem, trabalho, organização, método,
              pontualidade, seriedade estabilidade,
              segurança, utilidade, prestação de serviços,
              estrutura, tempo, firmeza, solidez,
              consistência, durabilidade, fenômenos,
              fatos, estudos, senso comum, disciplina,
              paciência, regulamentos, modelos,
              confiabilidade, economia, engenharia,
              lógica, raciocínio, exigência, determinação,
              garantia, batalhador, incansável, resistente,
              capacidade de suportar ou de agüentar,
              interesse na natureza, preservação, ecologia,
              cultivo, pilar, sensorial, burocracia,
              hierarquia.
            </p>
          </article>

          {/* CARD 2 — DEVERÁ EVITAR */}
          <article style={card}>
            <h2 style={tituloCard}>
              DEVERÁ EVITAR
            </h2>

            <ul style={lista}>
              <li style={itemLista}>
                Perceba que quando a vida não flui do seu
                jeito você pode se tornar uma pessoa teimosa,
                rígida impedindo assim de avançar em seus
                processos ou metas.
              </li>

              <li style={itemLista}>
                Às vezes poderá sentir sua vida sufocada
                ou ter que suportar opressão por parte da
                família e também pode viver em silencio
                e com rancor de fatos passados que não
                teve a coragem de resolver na hora.
              </li>

              <li style={itemLista}>
                Pode guardar mágoas por muito tempo e
                viver com medo de mudanças ou dependente
                da família.
              </li>
            </ul>
          </article>

          {/* CARD 3 — PERGUNTAS */}
          <article style={card}>
            <h2 style={tituloCard}>
              PERGUNTAS PARA REFLETIR NO SEU DIA A DIA
            </h2>

            <ul style={listaPerguntas}>
              <li style={itemLista}>
                Consigo organizar a minha vida?
              </li>

              <li style={itemLista}>
                Preocupo-me em controlar os outros?
              </li>

              <li style={itemLista}>
                Fecho-me às experiências novas, por medo
                do desconhecido?
              </li>

              <li style={itemLista}>
                Fico me protegendo constantemente e com
                isso atraso meu crescimento e evolução?
              </li>

              <li style={itemLista}>
                Onde preciso ter estabilidade?
              </li>
            </ul>
          </article>
        </section>

        <section style={convite}>
          <h2 style={tituloConvite}>
            ALCÉA, QUER DESCOBRIR AINDA MAIS SOBRE VOCÊ?
          </h2>

          <p style={textoConvite}>
            Seu primeiro nome representa apenas uma parte
            da interpretação numerológica.
          </p>

          <p style={textoConvite}>
            Conheça o que seu nome completo e sua data
            de nascimento podem revelar sobre seus
            potenciais, desafios e caminhos de vida.
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
  fontFamily: "Arial, sans-serif",
};

const container: CSSProperties = {
  maxWidth: 780,
  margin: "0 auto",
};

const cabecalho: CSSProperties = {
  textAlign: "center",
  marginBottom: 30,
};

const assinatura: CSSProperties = {
  color: "#96703b",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 1.2,
  lineHeight: 1.5,
  margin: "0 0 18px",
};

const titulo: CSSProperties = {
  fontSize: "clamp(25px, 4vw, 32px)",
  fontWeight: 700,
  lineHeight: 1.3,
  maxWidth: 700,
  margin: "0 auto 24px",
};

const foto: CSSProperties = {
  display: "block",
  width: "100%",
  maxWidth: 300,
  height: "auto",
  margin: "0 auto",
  borderRadius: 18,
};

const secaoCards: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 24,
};

const card: CSSProperties = {
  display: "block",
  backgroundColor: "#ffffff",
  border: "1px solid #eee8df",
  borderRadius: 20,
  padding: "clamp(22px, 5vw, 36px)",
  boxShadow: "0 5px 24px rgba(0,0,0,0.06)",
};

const tituloCard: CSSProperties = {
  fontSize: "clamp(20px, 4vw, 25px)",
  fontWeight: 700,
  color: "#8b6534",
  lineHeight: 1.3,
  margin: "0 0 18px",
};

const textoCard: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  margin: "0 0 16px",
};

const lista: CSSProperties = {
  paddingLeft: 24,
  margin: 0,
  fontSize: 17,
  lineHeight: 1.8,
};

const listaPerguntas: CSSProperties = {
  ...lista,
  fontWeight: 700,
};

const itemLista: CSSProperties = {
  marginBottom: 16,
  paddingLeft: 4,
};

const convite: CSSProperties = {
  backgroundColor: "#27212e",
  color: "#ffffff",
  textAlign: "center",
  borderRadius: 20,
  padding: "clamp(22px, 5vw, 36px)",
  marginTop: 24,
};

const tituloConvite: CSSProperties = {
  fontSize: "clamp(22px, 4vw, 27px)",
  fontWeight: 700,
  color: "#e8c78b",
  lineHeight: 1.3,
  margin: "0 0 20px",
};

const textoConvite: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  margin: "0 0 16px",
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
  marginTop: 12,
};

const rodape: CSSProperties = {
  fontSize: 13,
  marginTop: 24,
};
