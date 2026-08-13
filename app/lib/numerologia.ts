const alfabetoLatino: Record<string, number> = {
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

const vogais = new Set(["A", "E", "I", "O", "U"]);

/**
 * Normaliza o nome sem perder a letra Ñ.
 */
export function normalizarNome(nome: string): string {
  return nome
    .toUpperCase()
    .replace(/Ñ/g, "__ENHE__")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/__ENHE__/g, "Ñ")
    .replace(/[^A-ZÑ]/g, "");
}

/**
 * Reduz um número até um dígito,
 * preservando os números mestres 11 e 22.
 *
 * Exemplos:
 * 14 -> 5
 * 29 -> 11
 * 38 -> 11
 * 22 -> 22
 */
export function reduzirNumero(numero: number): number {
  let resultado = numero;

  while (resultado > 9) {
    if (resultado === 11 || resultado === 22) {
      return resultado;
    }

    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }

  return resultado;
}

/**
 * Retorna o caminho completo da redução.
 *
 * Exemplos:
 * 14 -> [14, 5]
 * 29 -> [29, 11]
 * 22 -> [22]
 */
export function obterCaminhoReducao(numero: number): number[] {
  const caminho = [numero];

  let resultado = numero;

  while (resultado > 9) {
    if (resultado === 11 || resultado === 22) {
      break;
    }

    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);

    caminho.push(resultado);
  }

  return caminho;
}

/**
 * Calcula a Revelação do Nome Social
 * pelo método de Numerologia Latina de Oscar Ahumada.
 */
export function calcularNomeSocial(nome: string) {
  const nomeNormalizado = normalizarNome(nome);

  let somaTotal = 0;
  let somaVogais = 0;
  let somaConsoantes = 0;

  const letras = nomeNormalizado.split("").map((letra) => {
    const valor = alfabetoLatino[letra] ?? 0;
    const tipo = vogais.has(letra) ? "vogal" : "consoante";

    somaTotal += valor;

    if (tipo === "vogal") {
      somaVogais += valor;
    } else {
      somaConsoantes += valor;
    }

    return {
      letra,
      valor,
      tipo,
    };
  });

  /*
   * RESULTADO PRINCIPAL
   *
   * A Revelação do Nome Social vem da soma
   * de TODAS as letras do nome.
   */
  const revelacaoNomeSocial = reduzirNumero(somaTotal);
  const caminhoReducaoTotal = obterCaminhoReducao(somaTotal);

  /*
   * VOGAIS E CONSOANTES
   *
   * Permanecem separadas porque serão utilizadas
   * nas combinações interpretativas do Módulo 3.
   */
  const vogaisReduzidas = reduzirNumero(somaVogais);
  const consoantesReduzidas = reduzirNumero(somaConsoantes);

  const somaCombinacao = vogaisReduzidas + consoantesReduzidas;
  const combinacaoReduzida = reduzirNumero(somaCombinacao);

  const numeroMestre =
    revelacaoNomeSocial === 11 || revelacaoNomeSocial === 22;

  return {
    nomeOriginal: nome,
    nomeNormalizado,

    letras,

    // Revelação principal
    somaTotal,
    somaTotalReduzida: revelacaoNomeSocial,
    caminhoReducaoTotal,
    revelacaoNomeSocial,
    numeroMestre,

    // Vogais
    somaVogais,
    vogaisReduzidas,

    // Consoantes
    somaConsoantes,
    consoantesReduzidas,

    // Combinação usada no Módulo 3
    somaCombinacao,
    combinacaoReduzida,
  };
}