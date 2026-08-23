"use client";

import LandingDiagnosticoPremium, {
  type ResultadoLandingPremium,
} from "../components/LandingDiagnosticoPremium";

import {
  obterDiagnosticoNomeProfissional,
  type NumeroNomeProfissional,
} from "../data/diagnosticosNomeProfissional";

const telefoneOscar = "555180339532";

/*
 * NUMEROLOGIA LATINA
 *
 * A1 B2 C3 D4 E5 F6 G7 H8 I9
 * J1 K2 L3 M4 N5 Ñ6 O7 P8 Q9
 * R1 S2 T3 U4 V5 W6 X7 Y8 Z9
 */
const tabela: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,

  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  Ñ: 6,
  O: 7,
  P: 8,
  Q: 9,

  R: 1,
  S: 2,
  T: 3,
  U: 4,
  V: 5,
  W: 6,
  X: 7,
  Y: 8,
  Z: 9,
};

function normalizarTexto(texto: string) {
  return Array.from(texto.toUpperCase())
    .map((letra) => {
      if (letra === "Ñ") {
        return "Ñ";
      }

      return letra
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    })
    .join("")
    .replace(/[^A-ZÑ]/g, "");
}

function reduzirNumero(
  numero: number
): NumeroNomeProfissional {
  let atual = numero;

  while (
    atual > 9 &&
    atual !== 11 &&
    atual !== 22
  ) {
    atual = String(atual)
      .split("")
      .reduce(
        (soma, digito) =>
          soma + Number(digito),
        0
      );
  }

  return atual as NumeroNomeProfissional;
}

function calcularNumeroNome(
  nome: string
): NumeroNomeProfissional {
  const letras = normalizarTexto(nome);

  const soma = letras
    .split("")
    .reduce(
      (total, letra) =>
        total + (tabela[letra] || 0),
      0
    );

  return reduzirNumero(soma);
}

function calcularDestinoData(
  data: string
): NumeroNomeProfissional | null {
  if (!data) {
    return null;
  }

  const numeros =
    data.replace(/\D/g, "");

  if (!numeros) {
    return null;
  }

  const soma = numeros
    .split("")
    .reduce(
      (total, digito) =>
        total + Number(digito),
      0
    );

  return reduzirNumero(soma);
}

function formatarData(data: string) {
  if (!data) return "";

  const [ano, mes, dia] =
    data.split("-");

  if (!ano || !mes || !dia) {
    return data;
  }

  return `${dia}/${mes}/${ano}`;
}

function analisarNome(nome: string) {
  const numero =
    calcularNumeroNome(nome);

  const diagnostico =
    obterDiagnosticoNomeProfissional(
      numero
    );

  return {
    nome,
    numero,
    diagnostico,
  };
}

function calcularNomeProfissional(
  valores: Record<string, string>
): ResultadoLandingPremium | null {
  const nome1 =
    valores.nome1?.trim();

  const nome2 =
    valores.nome2?.trim();

  const nome3 =
    valores.nome3?.trim();

  if (!nome1 || !nome2 || !nome3) {
    return null;
  }

  const opcao1 =
    analisarNome(nome1);

  const opcao2 =
    analisarNome(nome2);

  const opcao3 =
    analisarNome(nome3);

  const destino =
    calcularDestinoData(
      valores.dataLancamento || ""
    );

  const diagnosticoGeral = [
    `${opcao1.nome.toUpperCase()} — NÚMERO ${opcao1.numero}`,
    opcao1.diagnostico.imagemTransmitida,
    "",
    `${opcao2.nome.toUpperCase()} — NÚMERO ${opcao2.numero}`,
    opcao2.diagnostico.imagemTransmitida,
    "",
    `${opcao3.nome.toUpperCase()} — NÚMERO ${opcao3.numero}`,
    opcao3.diagnostico.imagemTransmitida,
  ].join("\n\n");

  const positivos = [
    `${opcao1.nome.toUpperCase()} — NÚMERO ${opcao1.numero}`,
    `Atitudes profissionais: ${opcao1.diagnostico.atitudes}`,
    "",
    `Aptidões e talentos: ${opcao1.diagnostico.aptidoes}`,
    "",
    `Pontos positivos: ${opcao1.diagnostico.positivos}`,
    "",
    `Atividades favorecidas: ${opcao1.diagnostico.atividadesFavorecidas}`,
    "",
    "────────────────────────",
    "",
    `${opcao2.nome.toUpperCase()} — NÚMERO ${opcao2.numero}`,
    `Atitudes profissionais: ${opcao2.diagnostico.atitudes}`,
    "",
    `Aptidões e talentos: ${opcao2.diagnostico.aptidoes}`,
    "",
    `Pontos positivos: ${opcao2.diagnostico.positivos}`,
    "",
    `Atividades favorecidas: ${opcao2.diagnostico.atividadesFavorecidas}`,
    "",
    "────────────────────────",
    "",
    `${opcao3.nome.toUpperCase()} — NÚMERO ${opcao3.numero}`,
    `Atitudes profissionais: ${opcao3.diagnostico.atitudes}`,
    "",
    `Aptidões e talentos: ${opcao3.diagnostico.aptidoes}`,
    "",
    `Pontos positivos: ${opcao3.diagnostico.positivos}`,
    "",
    `Atividades favorecidas: ${opcao3.diagnostico.atividadesFavorecidas}`,
  ].join("\n\n");

  const pontosAtencao = [
    `${opcao1.nome.toUpperCase()} — ${opcao1.diagnostico.negativos}`,
    "",
    `${opcao2.nome.toUpperCase()} — ${opcao2.diagnostico.negativos}`,
    "",
    `${opcao3.nome.toUpperCase()} — ${opcao3.diagnostico.negativos}`,
  ].join("\n\n");

  const orientacoesIndividuais = [
    `${opcao1.nome.toUpperCase()}: ${opcao1.diagnostico.orientacao}`,
    "",
    `${opcao2.nome.toUpperCase()}: ${opcao2.diagnostico.orientacao}`,
    "",
    `${opcao3.nome.toUpperCase()}: ${opcao3.diagnostico.orientacao}`,
  ].join("\n\n");

  const textoDestino = destino
    ? [
        "",
        `A POSSÍVEL DATA ESCOLHIDA POSSUI DESTINO ${destino}.`,
        "",
        `Isso acrescenta uma informação muito importante à análise. Não basta observar somente o número do Nome Profissional. A vibração do nome passará a atuar a partir de um momento que também possui sua própria energia.`,
        "",
        `Por isso, um nome que isoladamente apresenta características positivas pode não ser necessariamente a opção mais adequada quando cruzado com o Destino ${destino}, com seu Destino pessoal e com os objetivos que você deseja alcançar.`,
      ].join("\n\n")
    : [
        "",
        "A DATA DE ADOÇÃO DO NOVO NOME TAMBÉM É IMPORTANTE.",
        "",
        "Quando você decidir quando começará oficialmente a utilizar sua nova identidade profissional, essa data poderá ser analisada juntamente com o nome escolhido.",
      ].join("\n\n");

  const fechamento = [
    orientacoesIndividuais,
    textoDestino,
    "",
    "QUAL DAS TRÊS OPÇÕES É REALMENTE A MELHOR?",
    "",
    "Este diagnóstico mostra como cada Nome Profissional tende a se apresentar isoladamente. Mas uma escolha definitiva exige uma análise mais profunda.",
    "",
    "É importante cruzar a vibração do novo nome com seu Destino pessoal, seu nome de nascimento, sua profissão, seus objetivos, o público que você deseja alcançar e o momento em que essa nova identidade começará a ser utilizada.",
    "",
    "É justamente nesse cruzamento que podem aparecer informações que não estão visíveis nesta análise inicial.",
    "",
    "Uma consulta personalizada com Oscar Ahumada permite comparar as três opções e compreender qual delas apresenta maior coerência com a carreira, a imagem e os resultados que você deseja construir.",
  ].join("\n\n");

  return {
    numero:
      `${opcao1.numero} • ${opcao2.numero} • ${opcao3.numero}`,

    titulo:
      "Comparativo Numerológico das 3 opções de Nome Profissional",

    diagnostico:
      diagnosticoGeral,

    positivo:
      positivos,

    atencao:
      pontosAtencao,

    orientacao:
      fechamento,
  };
}

function criarLinkWhatsApp(
  valores: Record<string, string>,
  resultado: ResultadoLandingPremium
) {
  const nome =
    valores.nome || "";

  const whatsapp =
    valores.whatsapp || "";

  const nome1 =
    valores.nome1 || "";

  const nome2 =
    valores.nome2 || "";

  const nome3 =
    valores.nome3 || "";

  const data =
    valores.dataLancamento || "";

  const numero1 =
    nome1
      ? calcularNumeroNome(nome1)
      : "";

  const numero2 =
    nome2
      ? calcularNumeroNome(nome2)
      : "";

  const numero3 =
    nome3
      ? calcularNumeroNome(nome3)
      : "";

  const destino =
    calcularDestinoData(data);

  const mensagem = [
    "Olá, Oscar Ahumada.",
    "",
    "Fiz o diagnóstico das minhas opções de Nome Profissional no seu site.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    "",
    `1ª opção: ${nome1} — Número ${numero1}`,
    `2ª opção: ${nome2} — Número ${numero2}`,
    `3ª opção: ${nome3} — Número ${numero3}`,
    "",
    data
      ? `Possível data de adoção: ${formatarData(
          data
        )}`
      : "",
    destino
      ? `Destino da possível data: ${destino}`
      : "",
    "",
    resultado.titulo,
    "",
    "Quero compreender qual dessas três opções combina melhor com meu Destino, minha profissão e os resultados que desejo construir.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${telefoneOscar}?text=${encodeURIComponent(
    mensagem
  )}`;
}

export default function NomeProfissionalPage() {
  return (
    <LandingDiagnosticoPremium
      imagem="/images/lp-nome-profissional.png"

      altImagem="Profissional com diploma em ambiente de trabalho"

      titulo="Qual nome profissional combina com o Destino da sua carreira?"

      subtitulo="Compare três opções e descubra o que cada Nome Profissional pode transmitir sobre sua imagem, suas atitudes, seus talentos e suas oportunidades."

      campos={[
        {
          id: "nome",
          label: "SEU NOME",
          placeholder:
            "Digite seu nome",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "nome1",
          label:
            "1ª OPÇÃO DE NOME PROFISSIONAL",
          placeholder:
            "Digite o nome completo",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "nome2",
          label:
            "2ª OPÇÃO DE NOME PROFISSIONAL",
          placeholder:
            "Digite o nome completo",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "nome3",
          label:
            "3ª OPÇÃO DE NOME PROFISSIONAL",
          placeholder:
            "Digite o nome completo",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "dataLancamento",
          label:
            "POSSÍVEL DATA DE ADOÇÃO DO NOVO NOME",
          tipo: "date",
          obrigatorio: false,
        },

        {
          id: "whatsapp",
          label: "SEU WHATSAPP",
          placeholder:
            "(00) 00000-0000",
          tipo: "tel",
          obrigatorio: true,
        },
      ]}

      textoAntesBotao="Um Nome Profissional será falado, divulgado e associado à sua imagem durante muitos anos. Compare as três opções antes de decidir."

      textoBotao="COMPARAR AS 3 OPÇÕES"

      calcular={
        calcularNomeProfissional
      }

      tituloPosDiagnostico="Qual dessas três opções realmente trabalha a favor da carreira que você deseja construir?"

      textoPosDiagnostico="O número do Nome Profissional é apenas uma parte da análise. Ao cruzar cada opção com seu Destino, sua trajetória, sua atividade e a possível data de adoção do novo nome, podemos descobrir diferenças importantes entre nomes que, isoladamente, poderiam parecer igualmente positivos."

      textoBotaoOscar="QUERO DESCOBRIR QUAL NOME É MELHOR PARA MIM"

      linkWhatsAppOscar={
        criarLinkWhatsApp
      }
    />
  );
}