"use client";

import LandingDiagnosticoPremium, {
  type ResultadoLandingPremium,
} from "../components/LandingDiagnosticoPremium";

import {
  diagnosticosNomeBebe,
  type NumeroNomeBebe,
} from "../data/diagnosticosNomeBebe";

/*
 * ALFABETO DE NUMEROLOGIA LATINA
 *
 * A1 B2 C3 D4 E5 F6 G7 H8 I9
 * J1 K2 L3 M4 N5 Ñ6 O7 P8 Q9
 * R1 S2 T3 U4 V5 W6 X7 Y8 Z9
 */
const valoresLetras: Record<string, number> = {
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

function normalizarNome(nome: string) {
  return nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function reduzirNumeroNome(numero: number): NumeroNomeBebe {
  let atual = numero;

  while (atual > 9 && atual !== 11 && atual !== 22) {
    atual = atual
      .toString()
      .split("")
      .reduce((total, digito) => total + Number(digito), 0);
  }

  return atual as NumeroNomeBebe;
}

function calcularNumeroNome(
  nome: string
): NumeroNomeBebe | null {
  const nomeNormalizado = normalizarNome(nome);

  let soma = 0;

  for (const letra of nomeNormalizado) {
    if (valoresLetras[letra]) {
      soma += valoresLetras[letra];
    }
  }

  if (soma === 0) {
    return null;
  }

  return reduzirNumeroNome(soma);
}

function criarResumoNome(nome: string) {
  const numero = calcularNumeroNome(nome);

  if (!numero) {
    return null;
  }

  const leitura = diagnosticosNomeBebe[numero];

  return {
    nome,
    numero,
    leitura,
  };
}

function calcularDiagnostico(
  valores: Record<string, string>
): ResultadoLandingPremium | null {
  const nome1 = valores.nome1?.trim() || "";
  const nome2 = valores.nome2?.trim() || "";
  const nome3 = valores.nome3?.trim() || "";

  const opcao1 = criarResumoNome(nome1);
  const opcao2 = criarResumoNome(nome2);
  const opcao3 = criarResumoNome(nome3);

  if (!opcao1 || !opcao2 || !opcao3) {
    return null;
  }

  return {
    numero:
      `${opcao1.numero} • ${opcao2.numero} • ${opcao3.numero}`,

    titulo:
      "As três opções carregam caminhos vibracionais diferentes",

    diagnostico:
      `${opcao1.nome} vibra no número ${opcao1.numero}. ` +
      `${opcao1.leitura.revelacao}\n\n` +
      `${opcao2.nome} vibra no número ${opcao2.numero}. ` +
      `${opcao2.leitura.revelacao}\n\n` +
      `${opcao3.nome} vibra no número ${opcao3.numero}. ` +
      `${opcao3.leitura.revelacao}`,

    positivo:
      `${opcao1.nome} — Número ${opcao1.numero}: ` +
      `${opcao1.leitura.potenciais}\n\n` +
      `${opcao2.nome} — Número ${opcao2.numero}: ` +
      `${opcao2.leitura.potenciais}\n\n` +
      `${opcao3.nome} — Número ${opcao3.numero}: ` +
      `${opcao3.leitura.potenciais}`,

    atencao:
      `${opcao1.nome} — ${opcao1.leitura.desafios}\n\n` +
      `${opcao2.nome} — ${opcao2.leitura.desafios}\n\n` +
      `${opcao3.nome} — ${opcao3.leitura.desafios}`,

    orientacao:
      `Antes de escolher definitivamente entre ${opcao1.nome}, ${opcao2.nome} e ${opcao3.nome}, existe uma informação fundamental: o número do nome não deve ser analisado isoladamente.\n\n` +
      `A possível data de nascimento revela o Destino da criança. É o encontro entre a vibração do nome e esse Destino que permite uma análise muito mais profunda sobre potenciais, desafios, equilíbrio e desenvolvimento.\n\n` +
      `Por isso, não estamos simplesmente escolhendo qual dos três números parece mais bonito ou favorável. Um nome pode ser excelente para determinado Destino e exigir mais atenção quando combinado com outro.\n\n` +
      `O estudo personalizado de Oscar Ahumada cruza as opções de nome com a possível data de nascimento e aprofunda a análise para ajudar os pais a fazer uma escolha mais consciente.`,
  };
}

export default function BebePage() {
  return (
    <LandingDiagnosticoPremium
     
      imagem="/images/lp-bebe-fechado.png"

      altImagem="Bebê recém-nascido dormindo"

      titulo="Qual nome combina com o Destino do seu bebê?"

      subtitulo="Compare três opções de nome e descubra as diferentes vibrações que cada escolha pode trazer para a vida da criança."

      campos={[
        {
          id: "responsavel",
          label: "SEU NOME",
          placeholder: "Digite seu nome",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "nome1",
          label: "1ª OPÇÃO DE NOME DO BEBÊ",
          placeholder: "Digite o nome completo",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "nome2",
          label: "2ª OPÇÃO DE NOME DO BEBÊ",
          placeholder: "Digite o nome completo",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "nome3",
          label: "3ª OPÇÃO DE NOME DO BEBÊ",
          placeholder: "Digite o nome completo",
          tipo: "text",
          obrigatorio: true,
        },

        {
          id: "dataNascimento",
          label: "POSSÍVEL DATA DE NASCIMENTO",
          tipo: "date",
          obrigatorio: false,
        },

        {
          id: "whatsapp",
          label: "SEU WHATSAPP",
          placeholder: "(00) 00000-0000",
          tipo: "tel",
          obrigatorio: true,
        },
      ]}

      textoAntesBotao="O nome acompanhará seu filho por toda a vida. Descubra o que cada uma das três opções pode estimular antes de tomar essa decisão."

      textoBotao="COMPARAR OS 3 NOMES"

      calcular={calcularDiagnostico}

      tituloPosDiagnostico="Agora escolha o nível de análise que deseja para o seu bebê"

      textoPosDiagnostico="O diagnóstico gratuito mostra as vibrações iniciais dos nomes. Para aprofundar a escolha, conhecer a relação com o provável Destino e receber orientações personalizadas, conheça os três Mapas Numerológicos do Bebê disponíveis."

      textoBotaoOscar="CONHECER OS 3 MAPAS DO BEBÊ"

      linkWhatsAppOscar={() => "/nome-do-bebe"}
    />
  );
}
