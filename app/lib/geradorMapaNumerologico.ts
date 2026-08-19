/*
 * MOTOR DE CÁLCULO
 * MAPA NUMEROLÓGICO — OSCAR AHUMADA
 *
 * Numerologia Latina
 *
 * Alfabeto:
 * A1 B2 C3 D4 E5 F6 G7 H8 I9
 * J1 K2 L3 M4 N5 Ñ6 O7 P8 Q9
 * R1 S2 T3 U4 V5 W6 X7 Y8 Z9
 */

export const ALFABETO_LATINO: Record<string, number> = {
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

export type NumeroNumerologico =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 11
  | 22;

export type CalculoNome = {
  textoOriginal: string;
  textoNormalizado: string;
  valores: number[];
  soma: number;
  numero: NumeroNumerologico;
};

export type DataNumerologica = {
  dia: number;
  mes: number;
  ano: number;
};

export type Pinaculos = {
  primeiro: NumeroNumerologico;
  segundo: NumeroNumerologico;
  terceiro: NumeroNumerologico;
  quarto: NumeroNumerologico;
};

export type ResultadoMapaNumerologico = {
  prenome: CalculoNome | null;
  nomeCompleto: CalculoNome;
  nomeProfissional: CalculoNome | null;

  destino: NumeroNumerologico;

  anoPessoal: {
    ano: number;
    numero: NumeroNumerologico;
  };

  pinaculos: Pinaculos;

  conjuge: {
    destino: NumeroNumerologico;
  } | null;
};

/*
 * Remove acentos do português/espanhol,
 * preservando Ñ para sua posição específica
 * no Alfabeto Latino.
 */
export function normalizarNome(nome: string): string {
  const protegido = nome
    .trim()
    .toUpperCase()
    .replace(/Ñ/g, "__ENHE__");

  return protegido
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/__ENHE__/g, "Ñ");
}

/*
 * Soma todos os algarismos de um número.
 *
 * Exemplo:
 * 25 => 2 + 5 = 7
 */
function somarAlgarismos(numero: number): number {
  return Math.abs(numero)
    .toString()
    .split("")
    .reduce((total, digito) => total + Number(digito), 0);
}

/*
 * Redução numerológica.
 *
 * Mantém 11 e 22 como números mestres.
 *
 * Exemplos:
 * 25 => 7
 * 29 => 11
 * 38 => 11
 * 49 => 13 => 4
 * 44 => 8
 */
export function reduzirNumero(numero: number): NumeroNumerologico {
  let atual = Math.abs(numero);

  while (atual > 9 && atual !== 11 && atual !== 22) {
    atual = somarAlgarismos(atual);
  }

  return atual as NumeroNumerologico;
}

/*
 * Retorna os valores das letras de um nome.
 *
 * Espaços, hífens, pontos e outros caracteres
 * que não façam parte do alfabeto são ignorados.
 */
export function converterNomeEmNumeros(nome: string): number[] {
  const nomeNormalizado = normalizarNome(nome);

  const valores: number[] = [];

  for (const caractere of nomeNormalizado) {
    const valor = ALFABETO_LATINO[caractere];

    if (valor !== undefined) {
      valores.push(valor);
    }
  }

  return valores;
}

/*
 * Calcula qualquer nome.
 */
export function calcularNome(nome: string): CalculoNome {
  const valores = converterNomeEmNumeros(nome);

  const soma = valores.reduce((total, valor) => total + valor, 0);

  return {
    textoOriginal: nome,
    textoNormalizado: normalizarNome(nome),
    valores,
    soma,
    numero: reduzirNumero(soma),
  };
}

/*
 * Extrai automaticamente o primeiro nome.
 *
 * Exemplo:
 * "Carla Dias" => "Carla"
 */
export function obterPrenome(nomeCompleto: string): string {
  return nomeCompleto.trim().split(/\s+/)[0] ?? "";
}

/*
 * Converte YYYY-MM-DD para dia, mês e ano.
 *
 * Formato recebido pelo <input type="date" />.
 */
export function interpretarData(data: string): DataNumerologica {
  const partes = data.split("-");

  if (partes.length !== 3) {
    throw new Error("Data inválida.");
  }

  const ano = Number(partes[0]);
  const mes = Number(partes[1]);
  const dia = Number(partes[2]);

  if (!ano || !mes || !dia) {
    throw new Error("Data inválida.");
  }

  return {
    dia,
    mes,
    ano,
  };
}

/*
 * DESTINO
 *
 * Soma todos os algarismos da data de nascimento.
 *
 * Exemplo da apostila:
 *
 * 13/10/1969
 *
 * 1 + 3 + 1 + 0 + 1 + 9 + 6 + 9
 * = 30
 * = 3
 */
export function calcularDestino(dataNascimento: string): NumeroNumerologico {
  const { dia, mes, ano } = interpretarData(dataNascimento);

  const numeros = `${dia
    .toString()
    .padStart(2, "0")}${mes
    .toString()
    .padStart(2, "0")}${ano}`;

  const soma = numeros
    .split("")
    .reduce((total, numero) => total + Number(numero), 0);

  return reduzirNumero(soma);
}

/*
 * ANO PESSOAL
 *
 * Dia de nascimento
 * +
 * mês de nascimento
 * +
 * ano que desejamos analisar.
 *
 * Exemplo:
 *
 * nascimento 13/10
 * ano 2002
 *
 * 2+0+0+2+1+3+1+0 = 9
 */
export function calcularAnoPessoal(
  dataNascimento: string,
  anoAnalisado: number
): NumeroNumerologico {
  const { dia, mes } = interpretarData(dataNascimento);

  const numeros = `${anoAnalisado}${dia
    .toString()
    .padStart(2, "0")}${mes.toString().padStart(2, "0")}`;

  const soma = numeros
    .split("")
    .reduce((total, numero) => total + Number(numero), 0);

  return reduzirNumero(soma);
}

/*
 * VIBRAÇÃO DO MÊS
 *
 * Ano pessoal + número do mês calendário.
 *
 * Exemplo da apostila:
 *
 * Ano pessoal 9
 * Maio = 5
 *
 * 9 + 5 = 14 = 5
 */
export function calcularMesPessoal(
  anoPessoal: NumeroNumerologico,
  mes: number
): NumeroNumerologico {
  if (mes < 1 || mes > 12) {
    throw new Error("Mês inválido.");
  }

  return reduzirNumero(anoPessoal + mes);
}

/*
 * PINÁCULOS
 *
 * Segundo a estrutura apresentada na apostila:
 *
 * 1º = dia + mês
 * 2º = dia + ano
 * 3º = primeiro + segundo
 * 4º = mês + ano
 */
export function calcularPinaculos(
  dataNascimento: string
): Pinaculos {
  const { dia, mes, ano } = interpretarData(dataNascimento);

  const diaReduzido = reduzirNumero(dia);
  const mesReduzido = reduzirNumero(mes);
  const anoReduzido = reduzirNumero(
    ano
      .toString()
      .split("")
      .reduce((total, numero) => total + Number(numero), 0)
  );

  const primeiro = reduzirNumero(diaReduzido + mesReduzido);

  const segundo = reduzirNumero(diaReduzido + anoReduzido);

  const terceiro = reduzirNumero(primeiro + segundo);

  const quarto = reduzirNumero(mesReduzido + anoReduzido);

  return {
    primeiro,
    segundo,
    terceiro,
    quarto,
  };
}

/*
 * GERADOR CENTRAL
 *
 * Esta função reúne os cálculos principais
 * necessários para produzir o futuro mapa.
 */
export function gerarMapaNumerologico(params: {
  nomeSocial?: string;
  nomeCompleto: string;
  nomeProfissional?: string;
  dataNascimento: string;
  dataConjuge?: string;
  anoPrevisao?: number;
}): ResultadoMapaNumerologico {
  const {
    nomeSocial,
    nomeCompleto,
    nomeProfissional,
    dataNascimento,
    dataConjuge,
    anoPrevisao = new Date().getFullYear(),
  } = params;

  if (!nomeCompleto.trim()) {
    throw new Error("Informe o nome completo.");
  }

  if (!dataNascimento) {
    throw new Error("Informe a data de nascimento.");
  }

  /*
   * Se Nome Social não for informado,
   * usamos automaticamente o prenome
   * do Nome Completo.
   */
  const prenomeUtilizado =
    nomeSocial?.trim() || obterPrenome(nomeCompleto);

  return {
    prenome: prenomeUtilizado
      ? calcularNome(prenomeUtilizado)
      : null,

    nomeCompleto: calcularNome(nomeCompleto),

    nomeProfissional: nomeProfissional?.trim()
      ? calcularNome(nomeProfissional)
      : null,

    destino: calcularDestino(dataNascimento),

    anoPessoal: {
      ano: anoPrevisao,
      numero: calcularAnoPessoal(
        dataNascimento,
        anoPrevisao
      ),
    },

    pinaculos: calcularPinaculos(dataNascimento),

    conjuge: dataConjuge
      ? {
          destino: calcularDestino(dataConjuge),
        }
      : null,
  };
}