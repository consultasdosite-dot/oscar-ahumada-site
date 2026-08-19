import {
  obterTextoMapa,
  possuiTextoMapa,
  type InterpretacaoNumeroMapa,
} from "../data/mapaNumerologicoTextos";

import type {
  ResultadoMapaNumerologico,
  NumeroNumerologico,
} from "./geradorMapaNumerologico";

export type CapituloDiagnosticoMapa = {
  chave:
    | "nome-social"
    | "nome-completo"
    | "nome-profissional"
    | "destino"
    | "ano-pessoal"
    | "pinaculo-1"
    | "pinaculo-2"
    | "pinaculo-3"
    | "pinaculo-4"
    | "destino-conjuge";

  titulo: string;
  subtitulo: string;
  numero: number;
  interpretacao: InterpretacaoNumeroMapa;
  introducao: string;
};

export type DiagnosticoMapaCompleto = {
  nomeCliente: string;
  capitulos: CapituloDiagnosticoMapa[];
};

function obterInterpretacao(
  numero: NumeroNumerologico
): InterpretacaoNumeroMapa {
  if (!possuiTextoMapa(numero)) {
    throw new Error(
      `Não existe interpretação cadastrada para o número ${numero}.`
    );
  }

  return obterTextoMapa(numero);
}

function introducaoNomeSocial(nome: string, numero: number) {
  return `O nome pelo qual você é chamado com maior frequência possui uma importância especial no seu Mapa Numerológico. Quando alguém pronuncia "${nome}", essa vibração é repetida continuamente no seu dia a dia. Neste caso, encontramos a energia do número ${numero}.`;
}

function introducaoNomeCompleto(nome: string, numero: number) {
  return `Seu nome completo de nascimento, "${nome}", apresenta a vibração ${numero}. Essa energia complementa características importantes da sua personalidade e pode revelar aspectos que nem sempre ficam tão evidentes na maneira como você se apresenta ao mundo.`;
}

function introducaoNomeProfissional(nome: string, numero: number) {
  return `O nome profissional "${nome}" vibra no número ${numero}. Essa informação ganha importância porque é justamente esse nome que passa a ser repetido pelo público, clientes, colegas e pelas pessoas que entram em contato com sua atividade profissional.`;
}

function introducaoDestino(numero: number) {
  return `Seu número de Destino é ${numero}. Na Numerologia, o Destino representa uma direção importante da experiência de vida. Ele mostra características, aprendizados e possibilidades que tendem a ganhar força ao longo da sua trajetória.`;
}

function introducaoAnoPessoal(numero: number, ano: number) {
  return `Para ${ano}, sua vibração de Ano Pessoal é ${numero}. Essa energia não determina acontecimentos de maneira absoluta, mas indica tendências e movimentos que podem ajudar você a compreender melhor o momento e tomar decisões com mais consciência.`;
}

function introducaoPinaculo(
  numero: number,
  ordem: 1 | 2 | 3 | 4
) {
  const nomes = {
    1: "Primeiro Pináculo",
    2: "Segundo Pináculo",
    3: "Terceiro Pináculo",
    4: "Quarto Pináculo",
  };

  return `O ${nomes[ordem]} apresenta a vibração ${numero}. Os Pináculos representam grandes fases de aprendizado, desenvolvimento e descobertas ao longo da vida. Cada período traz experiências específicas que ajudam na construção da sua trajetória.`;
}

function introducaoConjuge(numero: number) {
  return `A data de nascimento do seu cônjuge apresenta Destino ${numero}. Esta informação poderá ser utilizada posteriormente na análise de compatibilidade e na compreensão da dinâmica entre as duas vibrações.`;
}

export function montarDiagnosticoMapa(
  resultado: ResultadoMapaNumerologico,
  nomeCliente: string
): DiagnosticoMapaCompleto {
  const capitulos: CapituloDiagnosticoMapa[] = [];

  if (resultado.prenome) {
    capitulos.push({
      chave: "nome-social",
      titulo: "Nome Social",
      subtitulo: resultado.prenome.textoOriginal,
      numero: resultado.prenome.numero,
      interpretacao: obterInterpretacao(resultado.prenome.numero),
      introducao: introducaoNomeSocial(
        resultado.prenome.textoOriginal,
        resultado.prenome.numero
      ),
    });
  }

  capitulos.push({
    chave: "nome-completo",
    titulo: "Nome Completo",
    subtitulo: resultado.nomeCompleto.textoOriginal,
    numero: resultado.nomeCompleto.numero,
    interpretacao: obterInterpretacao(resultado.nomeCompleto.numero),
    introducao: introducaoNomeCompleto(
      resultado.nomeCompleto.textoOriginal,
      resultado.nomeCompleto.numero
    ),
  });

  if (resultado.nomeProfissional) {
    capitulos.push({
      chave: "nome-profissional",
      titulo: "Nome Profissional",
      subtitulo: resultado.nomeProfissional.textoOriginal,
      numero: resultado.nomeProfissional.numero,
      interpretacao: obterInterpretacao(
        resultado.nomeProfissional.numero
      ),
      introducao: introducaoNomeProfissional(
        resultado.nomeProfissional.textoOriginal,
        resultado.nomeProfissional.numero
      ),
    });
  }

  capitulos.push({
    chave: "destino",
    titulo: "Destino",
    subtitulo: `Destino ${resultado.destino}`,
    numero: resultado.destino,
    interpretacao: obterInterpretacao(resultado.destino),
    introducao: introducaoDestino(resultado.destino),
  });

  capitulos.push({
    chave: "ano-pessoal",
    titulo: `Previsão ${resultado.anoPessoal.ano}`,
    subtitulo: `Ano Pessoal ${resultado.anoPessoal.numero}`,
    numero: resultado.anoPessoal.numero,
    interpretacao: obterInterpretacao(
      resultado.anoPessoal.numero
    ),
    introducao: introducaoAnoPessoal(
      resultado.anoPessoal.numero,
      resultado.anoPessoal.ano
    ),
  });

  capitulos.push({
    chave: "pinaculo-1",
    titulo: "Primeiro Pináculo",
    subtitulo: `Vibração ${resultado.pinaculos.primeiro}`,
    numero: resultado.pinaculos.primeiro,
    interpretacao: obterInterpretacao(
      resultado.pinaculos.primeiro
    ),
    introducao: introducaoPinaculo(
      resultado.pinaculos.primeiro,
      1
    ),
  });

  capitulos.push({
    chave: "pinaculo-2",
    titulo: "Segundo Pináculo",
    subtitulo: `Vibração ${resultado.pinaculos.segundo}`,
    numero: resultado.pinaculos.segundo,
    interpretacao: obterInterpretacao(
      resultado.pinaculos.segundo
    ),
    introducao: introducaoPinaculo(
      resultado.pinaculos.segundo,
      2
    ),
  });

  capitulos.push({
    chave: "pinaculo-3",
    titulo: "Terceiro Pináculo",
    subtitulo: `Vibração ${resultado.pinaculos.terceiro}`,
    numero: resultado.pinaculos.terceiro,
    interpretacao: obterInterpretacao(
      resultado.pinaculos.terceiro
    ),
    introducao: introducaoPinaculo(
      resultado.pinaculos.terceiro,
      3
    ),
  });

  capitulos.push({
    chave: "pinaculo-4",
    titulo: "Quarto Pináculo",
    subtitulo: `Vibração ${resultado.pinaculos.quarto}`,
    numero: resultado.pinaculos.quarto,
    interpretacao: obterInterpretacao(
      resultado.pinaculos.quarto
    ),
    introducao: introducaoPinaculo(
      resultado.pinaculos.quarto,
      4
    ),
  });

  if (resultado.conjuge) {
    capitulos.push({
      chave: "destino-conjuge",
      titulo: "Destino do Cônjuge",
      subtitulo: `Destino ${resultado.conjuge.destino}`,
      numero: resultado.conjuge.destino,
      interpretacao: obterInterpretacao(
        resultado.conjuge.destino
      ),
      introducao: introducaoConjuge(
        resultado.conjuge.destino
      ),
    });
  }

  return {
    nomeCliente,
    capitulos,
  };
}