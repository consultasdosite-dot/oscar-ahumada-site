"use client";

import LandingDiagnostico, {
  type ResultadoLanding,
} from "../components/LandingDiagnostico";

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
): ResultadoLanding | null {
  const data1 = valores.data1?.trim();
  const data2 = valores.data2?.trim();

  if (!data1 || !data2) {
    return null;
  }

  /*
   * IMPORTANTE:
   * Os Destinos NÃO são somados.
   *
   * Calculamos:
   * Pessoa 1 -> seu próprio Destino
   * Pessoa 2 -> seu próprio Destino
   *
   * Depois buscamos diretamente a interpretação
   * dessa combinação na matriz:
   *
   * Exemplo:
   * Destino 1 com Destino 2
   * continua sendo 1 com 2.
   *
   * NÃO vira Destino 3.
   */
  const compatibilidade =
    calcularCompatibilidadePelasDatas(
      data1,
      data2
    );

  const destino1 = compatibilidade.destino1;
  const destino2 = compatibilidade.destino2;

  return {
    numero: `${destino1} • ${destino2}`,

    titulo: `Compatibilidade entre Destino ${destino1} e Destino ${destino2}`,

    diagnostico:
      `Seu Destino é ${destino1} e o Destino do seu par é ${destino2}. ` +
      compatibilidade.diagnostico,

    positivo: compatibilidade.potencial,

    atencao: compatibilidade.atencao,

    orientacao: compatibilidade.orientacao,
  };
}

function criarLinkWhatsApp(
  valores: Record<string, string>,
  resultado: ResultadoLanding
) {
  const nome = valores.nome || "";
  const whatsapp = valores.whatsapp || "";
  const data1 = valores.data1 || "";
  const data2 = valores.data2 || "";

  const mensagem = [
    "Olá, Oscar Ahumada.",
    "",
    "Fiz o diagnóstico de Compatibilidade dos Destinos no seu site.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Minha data de nascimento: ${formatarData(data1)}`,
    `Data de nascimento do meu par: ${formatarData(data2)}`,
    "",
    resultado.titulo,
    "",
    resultado.diagnostico,
    "",
    "Gostaria de compreender melhor nossa compatibilidade e como podemos melhorar nossa relação.",
  ].join("\n");

  return `https://wa.me/${telefoneOscar}?text=${encodeURIComponent(
    mensagem
  )}`;
}

export default function CompatibilidadePage() {
  return (
    <LandingDiagnostico
      imagem="/images/lp-compatibilidade.jpg"
      altImagem="Casal adulto conversando diante de uma lareira"
      titulo="Compatibilidade do Casal"
      subtitulo="Duas datas de nascimento. Dois Destinos. Descubra como essas duas personalidades se encontram no amor."
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
          label: "DATA DE NASCIMENTO DO SEU PAR",
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
      textoAntesBotao="Descubra como os Destinos de vocês se comportam juntos e o que pode tornar essa relação ainda melhor."
      textoBotao="DESCOBRIR NOSSA COMPATIBILIDADE"
      calcular={calcularCompatibilidade}
      tituloPosDiagnostico="Como melhorar ainda mais essa compatibilidade?"
      textoPosDiagnostico="Conhecer os dois Destinos permite compreender comportamentos, necessidades, diferenças e pontos de equilíbrio. Oscar Ahumada pode aprofundar essa leitura de forma personalizada para vocês."
      textoBotaoOscar="QUERO FALAR COM OSCAR AHUMADA"
      linkWhatsAppOscar={criarLinkWhatsApp}
    />
  );
}