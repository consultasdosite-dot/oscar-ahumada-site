"use client";

import { useState } from "react";

import type { CSSProperties, FormEvent } from "react";

const WHATSAPP_OSCAR = "5531972159908";

const informacoes = [

  {

    titulo: "O PODER DO SEU PRIMEIRO NOME",

    texto:

      "O prenome representa a energia comportamental mais forte da sua personalidade. Sua interpretação permite reconhecer qualidades, características, tendências e desafios que acompanham você ao longo da vida.",

  },

  {

    titulo: "O PODER DO SEU NOME COMPLETO",

    texto:

      "O nome completo representa uma segunda energia comportamental, complementar àquela do prenome. A combinação dessas duas energias amplia a compreensão de suas atitudes, relacionamentos e possibilidades pessoais.",

  },

  {

    titulo: "SEU DESTINO NUMEROLÓGICO",

    texto:

      "O número do Destino é calculado a partir da soma do dia, mês e ano de nascimento. Ele permite interpretar tendências e aprendizados relacionados ao caminho que você percorre durante a vida.",

  },

  {

    titulo: "OS QUATRO PINÁCULOS DA VIDA",

    texto:

      "A vida é interpretada por meio de quatro grandes períodos numerológicos, chamados Pináculos. Cada período apresenta uma energia que permite compreender melhor os desafios, as oportunidades e as experiências de cada etapa.",

  },

  {

    titulo: "PREVISÃO PARA SEU ANO PESSOAL",

    texto:

      "A previsão do Ano Pessoal considera o dia e o mês de nascimento e o ano que será analisado. Ela ajuda a compreender tendências e possibilidades para o período. Previsão não é predição: não determina acontecimentos inevitáveis.",

  },

  {

    titulo: "SEUS NÚMEROS REGENTES",

    texto:

      "Na Numerologia Latina, as letras são convertidas em valores numéricos. A interpretação considera especialmente os números regentes do prenome, do nome completo e do Destino, oferecendo uma visão mais ampla das energias presentes na sua vida.",

  },

];

const pinaculos = [

  {

    titulo: "PRIMEIRO PINÁCULO",

    periodo: "Do nascimento até os 31 anos",

    calculo: "Dia + mês de nascimento",

  },

  {

    titulo: "SEGUNDO PINÁCULO",

    periodo: "Dos 32 aos 41 anos",

    calculo: "Dia + ano de nascimento",

  },

  {

    titulo: "TERCEIRO PINÁCULO",

    periodo: "Dos 42 aos 51 anos",

    calculo: "Primeiro + segundo Pináculos",

  },

  {

    titulo: "QUARTO PINÁCULO",

    periodo: "A partir dos 52 anos",

    calculo: "Mês + ano de nascimento",

  },

];

const ofertas = [
  {
    id: "com-consulta",
    titulo: "MAPA NUMEROLÓGICO COMPLETO + PREVISÕES 2027 + CONSULTA",
    descricao: "Mapa Numerológico pessoal completo em texto em PDF, mais previsões para 2027, mais consulta online de 1 hora com Oscar Ahumada.",
    anterior: "R$ 800,00",
    preco: "R$ 395,00",
  },
  {
    id: "sem-consulta",
    titulo: "MAPA NUMEROLÓGICO COMPLETO + PREVISÕES 2027 — SEM CONSULTA",
    descricao: "Mapa Numerológico pessoal completo em texto em PDF, mais previsões para 2027, sem consulta.",
    anterior: "R$ 440,00",
    preco: "R$ 260,00",
  },
  {
    id: "previsoes",
    titulo: "MAPA DE PREVISÕES PESSOAIS ATÉ 31/12/2027 — SEM CONSULTA",
    descricao: "Mapa das previsões pessoais em texto em PDF, desde este momento até 31/12/2027, com dicas mês a mês e revelações dos cinco aspectos: Pessoal, Afetivo, Material, Profissional e Espiritual. Entrega em PDF, sem consulta.",
    anterior: "R$ 350,00",
    preco: "R$ 170,00",
  },
];

export default function QueroSaberTudo() {

  const [nome, setNome] = useState("");

  const [nascimento, setNascimento] = useState("");

  const [whatsapp, setWhatsapp] = useState("");
  const [ofertaSelecionada, setOfertaSelecionada] = useState(ofertas[0].id);

  function escolherOferta(id: string) {
    setOfertaSelecionada(id);
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  }

  function solicitarMapa(evento: FormEvent<HTMLFormElement>) {

    evento.preventDefault();

    const oferta = ofertas.find((item) => item.id === ofertaSelecionada) ?? ofertas[0];

    const mensagem = [

      "Olá, Oscar Ahumada!",

      "",

      "Quero solicitar informações para comprar o produto selecionado:",
      `${oferta.titulo} — ${oferta.preco}`,

      "",

      `Nome completo: ${nome.trim()}`,

      `Data de nascimento: ${nascimento}`,

      `WhatsApp com DDD: ${whatsapp.trim()}`,

    ].join("\n");

    window.location.href =

      `https://wa.me/${WHATSAPP_OSCAR}?text=` +

      encodeURIComponent(mensagem);

  }

  return (

    <main style={pagina}>

      <div style={container}>

        <header style={cabecalho}>

          <p style={assinatura}>

            OSCAR AHUMADA — NUMERÓLOGO DAS ESTRELAS

          </p>

          <h1 style={tituloPrincipal}>

            QUERO SABER TUDO SOBRE MEU MAPA NUMEROLÓGICO

          </h1>

          <img

            src="/Caracurso17.png"

            alt="Oscar Ahumada — Numerólogo das Estrelas"

            style={fotografia}

          />

          <section style={secaoOfertas} aria-label="Opções do mapa numerológico">
            <h2 style={tituloSecao}>ESCOLHA SEU MAPA NUMEROLÓGICO</h2>
            <div style={grade}>
              {ofertas.map((oferta) => (
                <article key={oferta.id} style={card}>
                  <h3 style={tituloCard}>{oferta.titulo}</h3>
                  <p style={textoCard}>{oferta.descricao}</p>
                  <p style={precoAnterior}>
                    De <span style={{ textDecoration: "line-through" }}>{oferta.anterior}</span> por
                  </p>
                  <p style={precoPromocional}>{oferta.preco}</p>
                  <button
                    type="button"
                    style={botaoVerde}
                    onClick={() => escolherOferta(oferta.id)}
                  >
                    QUERO COMPRAR
                  </button>
                </article>
              ))}
            </div>
          </section>

          <p style={textoIntroducao}>

            Há mais de 30 anos, descobri na Numerologia uma

            ferramenta de autoconhecimento que transformou

            minha maneira de compreender a vida e as pessoas.

          </p>

          <p style={textoIntroducao}>

            Ao longo dessa trajetória, desenvolvi meu trabalho

            de interpretação numerológica, ajudando pessoas

            a reconhecer suas características, seus potenciais

            e os desafios presentes em suas jornadas.

          </p>

          <p style={textoIntroducao}>

            O primeiro nome revela apenas uma parte da sua

            personalidade. O Mapa Numerológico Pessoal Completo

            reúne diferentes informações para oferecer uma

            interpretação mais abrangente sobre você.

          </p>

        </header>

        <section style={secao}>

          <h2 style={tituloSecao}>

            O QUE VOCÊ VAI DESCOBRIR NO SEU MAPA

          </h2>

          <div style={grade}>

            {informacoes.map((item) => (

              <article key={item.titulo} style={card}>

                <h3 style={tituloCard}>{item.titulo}</h3>

                <p style={textoCard}>{item.texto}</p>

              </article>

            ))}

          </div>

        </section>

        <section style={secao}>

          <h2 style={tituloSecao}>

            CONHEÇA OS QUATRO PINÁCULOS DA SUA VIDA

          </h2>

          <div style={grade}>

            {pinaculos.map((item) => (

              <article key={item.titulo} style={card}>

                <h3 style={tituloCard}>{item.titulo}</h3>

                <p style={textoCard}>

                  <strong>{item.periodo}</strong>

                </p>

                <p style={textoCard}>{item.calculo}</p>

              </article>

            ))}

          </div>

        </section>

        <section id="formulario" style={secaoFormulario}>

          <h2 style={tituloFormulario}>

            SOLICITE SEU MAPA NUMEROLÓGICO

          </h2>

          <p style={textoFormulario}>

            Preencha os dados abaixo para solicitar informações

            sobre seu Mapa Numerológico Pessoal Completo

            diretamente com Oscar Ahumada.

          </p>

          <form onSubmit={solicitarMapa} style={formulario}>
            <label htmlFor="oferta" style={rotulo}>Produto escolhido</label>
            <select
              id="oferta"
              value={ofertaSelecionada}
              onChange={(e) => setOfertaSelecionada(e.target.value)}
              style={campoFormulario}
              required
            >
              {ofertas.map((oferta) => (
                <option key={oferta.id} value={oferta.id}>
                  {oferta.titulo} — {oferta.preco}
                </option>
              ))}
            </select>

            <label htmlFor="nome" style={rotulo}>

              Nome completo

            </label>

            <input

              id="nome"

              type="text"

              value={nome}

              onChange={(e) => setNome(e.target.value)}

              placeholder="Digite seu nome completo"

              autoComplete="name"

              required

              style={campoFormulario}

            />

            <label htmlFor="nascimento" style={rotulo}>

              Data de nascimento

            </label>

            <input

              id="nascimento"

              type="date"

              value={nascimento}

              onChange={(e) => setNascimento(e.target.value)}

              required

              style={campoFormulario}

            />

            <label htmlFor="whatsapp" style={rotulo}>

              WhatsApp com DDD

            </label>

            <input

              id="whatsapp"

              type="tel"

              value={whatsapp}

              onChange={(e) => setWhatsapp(e.target.value)}

              placeholder="Ex.: 31999999999"

              inputMode="tel"

              autoComplete="tel"

              pattern="[0-9()+\s-]{10,20}"

              title="Informe seu WhatsApp com DDD"

              required

              style={campoFormulario}

            />

            <button type="submit" style={botaoVerde}>

              QUERO MEU MAPA

            </button>

          </form>

          <p style={observacao}>

            Ao clicar no botão, você será direcionado ao WhatsApp

            com uma mensagem preenchida. Confira e envie

            a mensagem para concluir sua solicitação.

          </p>

        </section>

        <footer style={rodape}>

          <p>Oscar Ahumada — Numerólogo das Estrelas</p>

          <a

            href="https://www.oscarahumada.com.br"

            style={linkRodape}

          >

            www.oscarahumada.com.br

          </a>

        </footer>

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

  maxWidth: 820,

  margin: "0 auto",

};

const cabecalho: CSSProperties = {

  textAlign: "center",

  marginBottom: 36,

};

const assinatura: CSSProperties = {

  color: "#96703b",

  fontSize: 13,

  fontWeight: 700,

  letterSpacing: 1.2,

  lineHeight: 1.5,

  margin: "0 0 18px",

};

const tituloPrincipal: CSSProperties = {

  fontSize: "clamp(25px, 4vw, 34px)",

  fontWeight: 700,

  lineHeight: 1.3,

  margin: "0 auto 24px",

  maxWidth: 750,

};

const fotografia: CSSProperties = {

  display: "block",

  width: "100%",

  maxWidth: 300,

  height: "auto",

  margin: "0 auto 28px",

  borderRadius: 18,

};

const secaoOfertas: CSSProperties = {
  maxWidth: 620,
  margin: "0 auto 30px",
  textAlign: "left",
};

const precoAnterior: CSSProperties = {
  textAlign: "center",
  fontSize: 17,
  margin: "10px 0 4px",
};

const precoPromocional: CSSProperties = {
  textAlign: "center",
  fontSize: 32,
  fontWeight: 700,
  color: "#16803c",
  margin: 0,
};

const textoIntroducao: CSSProperties = {

  fontSize: 17,

  lineHeight: 1.8,

  textAlign: "left",

  margin: "0 0 18px",

};

const secao: CSSProperties = {

  marginBottom: 36,

};

const tituloSecao: CSSProperties = {

  fontSize: "clamp(21px, 4vw, 27px)",

  color: "#8b6534",

  textAlign: "center",

  lineHeight: 1.4,

  margin: "0 0 24px",

};

const grade: CSSProperties = {

  display: "grid",

  gridTemplateColumns: "1fr",

  gap: 18,

};

const card: CSSProperties = {

  backgroundColor: "#ffffff",

  border: "1px solid #eee8df",

  borderRadius: 18,

  padding: "clamp(22px, 5vw, 32px)",

  boxShadow: "0 5px 24px rgba(0,0,0,0.06)",

};

const tituloCard: CSSProperties = {

  fontSize: "clamp(19px, 3vw, 23px)",

  color: "#8b6534",

  lineHeight: 1.4,

  margin: "0 0 14px",

};

const textoCard: CSSProperties = {

  fontSize: 17,

  lineHeight: 1.8,

  margin: "0 0 12px",

};

const secaoFormulario: CSSProperties = {

  backgroundColor: "#27212e",

  color: "#ffffff",

  borderRadius: 20,

  padding: "clamp(24px, 5vw, 40px)",

  marginTop: 36,

};

const tituloFormulario: CSSProperties = {

  fontSize: "clamp(22px, 4vw, 28px)",

  color: "#e8c78b",

  lineHeight: 1.4,

  textAlign: "center",

  margin: "0 0 20px",

};

const textoFormulario: CSSProperties = {

  fontSize: 17,

  lineHeight: 1.8,

  textAlign: "center",

  marginBottom: 28,

};

const formulario: CSSProperties = {

  display: "flex",

  flexDirection: "column",

  gap: 12,

  maxWidth: 520,

  margin: "0 auto",

};

const rotulo: CSSProperties = {

  fontSize: 16,

  fontWeight: 700,

  marginTop: 8,

};

const campoFormulario: CSSProperties = {

  display: "block",

  width: "100%",

  boxSizing: "border-box",

  padding: "15px 16px",

  border: "1px solid #d8d2c9",

  borderRadius: 10,

  backgroundColor: "#ffffff",

  color: "#27232b",

  fontSize: 16,

};

const botaoVerde: CSSProperties = {

  display: "block",

  width: "100%",

  backgroundColor: "#16803c",

  color: "#ffffff",

  border: "none",

  borderRadius: 12,

  padding: "18px 24px",

  fontSize: 18,

  fontWeight: 700,

  cursor: "pointer",

  marginTop: 18,

};

const observacao: CSSProperties = {

  fontSize: 13,

  lineHeight: 1.7,

  textAlign: "center",

  opacity: 0.85,

  maxWidth: 520,

  margin: "22px auto 0",

};

const rodape: CSSProperties = {

  textAlign: "center",

  paddingTop: 30,

  fontSize: 14,

  lineHeight: 1.8,

};

const linkRodape: CSSProperties = {

  color: "#8b6534",

  fontWeight: 700,

  textDecoration: "none",

};