"use client";

import LandingDiagnosticoPremium, {
  type ResultadoLandingPremium,
} from "../components/LandingDiagnosticoPremium";

import {
  calcularCompatibilidadePelasDatas,
} from "../data/compatibilidadeDestinos";

const telefoneOscar = "555180339532";

function formatarData(data: string) {
  if (!data) return "";

  const [ano, mes, dia] = data.split("-");

  if (!ano || !mes || !dia) {
    return data;
  }

  return `${dia}/${mes}/${ano}`;
}

function calcularCompatibilidade(
  valores: Record<string, string>
): ResultadoLandingPremium | null {
  const data1 = valores.data1?.trim();
  const data2 = valores.data2?.trim();

  if (!data1 || !data2) {
    return null;
  }

  /*
   * REGRA CORRETA:
   *
   * Os Destinos NÃO são somados.
   *
   * Calculamos separadamente:
   *
   * Pessoa 1 -> seu Destino
   * Pessoa 2 -> seu Destino
   *
   * Depois buscamos diretamente a leitura
   * da combinação entre os dois Destinos.
   *
   * Exemplo:
   * Destino 3 com Destino 6
   * continua sendo 3 com 6.
   */
  const compatibilidade =
    calcularCompatibilidadePelasDatas(
      data1,
      data2
    );

  const destino1 =
    compatibilidade.destino1;

  const destino2 =
    compatibilidade.destino2;

  return {
    numero: `${destino1} • ${destino2}`,

    titulo:
      `Compatibilidade entre Destino ${destino1} e Destino ${destino2}`,

    diagnostico:
      `Seu Destino é ${destino1} e o Destino do seu par é ${destino2}. ` +
      compatibilidade.diagnostico,

    positivo:
      compatibilidade.potencial,

    atencao:
      compatibilidade.atencao,

    orientacao:
      compatibilidade.orientacao,
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

  const data1 =
    valores.data1 || "";

  const data2 =
    valores.data2 || "";

  const mensagem = [
    "Olá, Oscar Ahumada.",
    "",
    "Fiz o diagnóstico de Compatibilidade dos Destinos no seu site.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Minha data de nascimento: ${formatarData(
      data1
    )}`,
    `Data de nascimento do meu par: ${formatarData(
      data2
    )}`,
    "",
    resultado.titulo,
    "",
    resultado.diagnostico,
    "",
    resultado.positivo
      ? `O que favorece nossa relação: ${resultado.positivo}`
      : "",
    "",
    resultado.atencao
      ? `O que merece atenção: ${resultado.atencao}`
      : "",
    "",
    resultado.orientacao
      ? `Orientação: ${resultado.orientacao}`
      : "",
    "",
    "Gostaria de compreender melhor nossa relação, nossas diferenças e como podemos melhorar nossa compatibilidade numerológica.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${telefoneOscar}?text=${encodeURIComponent(
    mensagem
  )}`;
}

export default function CompatibilidadePage() {
  return (
    <LandingDiagnosticoPremium
      imagem="/images/lp-casal-novo.png"

      altImagem="Casal adulto conversando em um jardim"

      titulo="Compatibilidade do Casal"

      subtitulo="Duas datas de nascimento. Dois Destinos. Descubra como essas duas personalidades se encontram, onde existe afinidade e quais pontos podem fortalecer a relação."

      campos={[
        {
          id: "nome",
          label: "SEU NOME",
          placeholder: "Digite seu nome",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "data1",
          label: "SUA DATA DE NASCIMENTO",
          tipo: "date",
          obrigatorio: true,
        },

        {
          id: "data2",
          label:
            "DATA DE NASCIMENTO DO SEU PAR",
          tipo: "date",
          obrigatorio: true,
        },

        {
          id: "whatsapp",
          label: "SEU WHATSAPP",
          placeholder: "(00) 00000-0000",
          tipo: "tel",
          obrigatorio: true,
        },
      ]}

      textoAntesBotao="Descubra como os Destinos de vocês funcionam juntos e quais atitudes podem trazer mais entendimento, equilíbrio e harmonia para a relação."

      textoBotao="DESCOBRIR NOSSA COMPATIBILIDADE"

      calcular={calcularCompatibilidade}

      tituloPosDiagnostico="Quer entender ainda mais profundamente a relação de vocês?"

      textoPosDiagnostico="A comparação dos Destinos revela comportamentos importantes, mas uma análise numerológica mais profunda pode mostrar necessidades emocionais, formas diferentes de amar, momentos de vida, desafios e pontos de equilíbrio que não aparecem apenas nesta primeira leitura."

      textoBotaoOscar="QUERO CONVERSAR COM OSCAR AHUMADA"

      linkWhatsAppOscar={
        criarLinkWhatsApp
      }
    />
  );
}