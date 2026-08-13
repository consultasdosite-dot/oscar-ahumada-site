"use client";

import { useMemo, useState } from "react";
import { calcularNomeSocial } from "../lib/numerologia";

type AnaliseNomeProfissional = {
  nome: string;
  numeroNome: number;
  destino: number;
  favoravel: boolean;
  classificacao: string;
  explicacao: string;
};

function somarDigitos(valor: number): number {
  let resultado = valor;

  while (resultado > 9 && resultado !== 11 && resultado !== 22) {
    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }

  return resultado;
}

function calcularDestinoData(data: string): number {
  if (!data) return 0;

  const apenasNumeros = data.replace(/\D/g, "");

  const soma = apenasNumeros
    .split("")
    .reduce((total, digito) => total + Number(digito), 0);

  return somarDigitos(soma);
}

function avaliarCombinacao(
  numeroNome: number,
  destino: number
): Omit<AnaliseNomeProfissional, "nome" | "numeroNome" | "destino"> {
  if (numeroNome === 1 && destino === 3) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "O Nome 1 reforça liderança, iniciativa, presença e capacidade de comando, enquanto o Destino 3 acrescenta comunicação, expressão e visibilidade.",
    };
  }

  if (numeroNome === 1 && destino === 8) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "O Nome 1 fortalece liderança, autonomia e iniciativa, enquanto o Destino 8 favorece realização material, autoridade, gestão e resultados.",
    };
  }

  if (numeroNome === 3 && destino === 8) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "O Nome 3 favorece comunicação, expressão, criatividade e conquista de público, enquanto o Destino 8 acrescenta força material, autoridade e foco em resultados.",
    };
  }

  if (numeroNome === 8 && destino === 3) {
    return {
      favoravel: true,
      classificacao: "Combinação Favorável",
      explicacao:
        "O Nome 8 favorece realização, gestão, autoridade e força material, enquanto o Destino 3 amplia comunicação, exposição, criatividade e capacidade de alcançar o público.",
    };
  }

  return {
    favoravel: false,
    classificacao: "Combinação a Avaliar",
    explicacao:
      "Esta combinação não corresponde aos pares considerados mais favoráveis para a escolha de um Nome Profissional dentro deste método. Isso não significa que o nome seja necessariamente inadequado, mas indica que merece uma análise mais cuidadosa.",
  };
}

export default function NomeProfissionalPage() {
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [analisar, setAnalisar] = useState(false);

  const destino = useMemo(
    () => calcularDestinoData(dataLancamento),
    [dataLancamento]
  );

  const resultados = useMemo<AnaliseNomeProfissional[]>(() => {
    if (!analisar || !dataLancamento) return [];

    const nomes = [nome1, nome2, nome3]
      .map((nome) => nome.trim())
      .filter(Boolean);

    return nomes.map((nome) => {
      const calculo = calcularNomeSocial(nome);

      const numeroNome = calculo.revelacaoNomeSocial;

      const avaliacao = avaliarCombinacao(numeroNome, destino);

      return {
        nome,
        numeroNome,
        destino,
        ...avaliacao,
      };
    });
  }, [analisar, dataLancamento, destino, nome1, nome2, nome3]);

  function executarAnalise() {
    if (!nome1.trim() || !dataLancamento) {
      return;
    }

    setAnalisar(true);
  }

  function limparTudo() {
    setNome1("");
    setNome2("");
    setNome3("");
    setDataLancamento("");
    setAnalisar(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#edf4fb] via-[#f7f3eb] to-[#f7f3eb] px-4 py-10 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f6cf68]">
              Numerologia Profissional
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Escolha um nome profissional com força, comunicação e potencial
              de realização
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50/90">
              Compare até três opções de nome profissional e analise como a
              vibração do nome se relaciona com a data de lançamento da nova
              identidade.
            </p>

            <div className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-md sm:p-7">

              <div className="grid gap-4 md:grid-cols-3">
                <input
                  type="text"
                  value={nome1}
                  onChange={(event) => {
                    setNome1(event.target.value);
                    setAnalisar(false);
                  }}
                  placeholder="Primeiro nome profissional"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />

                <input
                  type="text"
                  value={nome2}
                  onChange={(event) => {
                    setNome2(event.target.value);
                    setAnalisar(false);
                  }}
                  placeholder="Segunda opção"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />

                <input
                  type="text"
                  value={nome3}
                  onChange={(event) => {
                    setNome3(event.target.value);
                    setAnalisar(false);
                  }}
                  placeholder="Terceira opção"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="dataLancamento"
                  className="block text-left text-sm font-semibold"
                >
                  Data de lançamento da nova identidade
                </label>

                <input
                  id="dataLancamento"
                  type="date"
                  value={dataLancamento}
                  onChange={(event) => {
                    setDataLancamento(event.target.value);
                    setAnalisar(false);
                  }}
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />
              </div>

              <button
                type="button"
                onClick={executarAnalise}
                className="mt-5 w-full rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Analisar Nome e Data de Lançamento
              </button>
            </div>
          </div>
        </section>

        {/* EXPLICAÇÃO */}
        <section className="px-2 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                O que buscamos
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Três vibrações especialmente importantes para uma identidade
                profissional
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#607089]">
                Dentro deste método, os números 1, 3 e 8 possuem características
                especialmente interessantes quando falamos de liderança,
                comunicação, visibilidade, realização e resultados.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-[28px] border border-[#dfd2bb] bg-white p-7 shadow-sm">
                <span className="text-5xl font-semibold text-[#c29629]">
                  1
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Liderança
                </h3>

                <p className="mt-3 leading-7 text-[#607089]">
                  Iniciativa, comando, autonomia, presença, originalidade e
                  capacidade de abrir caminhos.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#dfd2bb] bg-white p-7 shadow-sm">
                <span className="text-5xl font-semibold text-[#c29629]">
                  3
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Comunicação
                </h3>

                <p className="mt-3 leading-7 text-[#607089]">
                  Expressão, criatividade, capacidade de conquistar público,
                  visibilidade e sociabilidade.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#dfd2bb] bg-white p-7 shadow-sm">
                <span className="text-5xl font-semibold text-[#c29629]">
                  8
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Realização
                </h3>

                <p className="mt-3 leading-7 text-[#607089]">
                  Administração, autoridade, força material, eficiência,
                  crescimento e geração de resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REGRA */}
        <section className="bg-[#edf4fb] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                Combinações Favoráveis
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Nome e Destino precisam trabalhar juntos
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Nome 1", "Destino 3"],
                ["Nome 1", "Destino 8"],
                ["Nome 3", "Destino 8"],
                ["Nome 8", "Destino 3"],
              ].map(([nome, destinoItem]) => (
                <div
                  key={`${nome}-${destinoItem}`}
                  className="rounded-[26px] border border-[#d8c9aa] bg-white p-7 text-center"
                >
                  <p className="text-xl font-semibold">
                    {nome}
                  </p>

                  <div className="my-3 text-2xl text-[#c29629]">
                    +
                  </div>

                  <p className="text-xl font-semibold">
                    {destinoItem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADOS */}
        {resultados.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl">

              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                  Resultado da Análise
                </p>

                <h2 className="mt-4 text-4xl font-semibold">
                  Destino da data escolhida: {destino}
                </h2>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">

                {resultados.map((resultado) => (
                  <article
                    key={resultado.nome}
                    className={`overflow-hidden rounded-[30px] border bg-white shadow-xl ${
                      resultado.favoravel
                        ? "border-[#d4af37]"
                        : "border-[#d8d8d8]"
                    }`}
                  >

                    <div
                      className={`px-6 py-7 text-center text-white ${
                        resultado.favoravel
                          ? "bg-[#123d73]"
                          : "bg-[#607089]"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6cf68]">
                        Nome Profissional
                      </p>

                      <h3 className="mt-3 break-words text-3xl font-bold">
                        {resultado.nome.toUpperCase()}
                      </h3>

                      <div className="mt-5 flex items-center justify-center gap-4">
                        <div className="rounded-full bg-[#f6c84f] px-5 py-3 text-2xl font-bold text-[#123d73]">
                          Nome {resultado.numeroNome}
                        </div>

                        <span className="text-2xl">
                          +
                        </span>

                        <div className="rounded-full border border-white/30 px-5 py-3 text-2xl font-bold">
                          Destino {resultado.destino}
                        </div>
                      </div>
                    </div>

                    <div className="p-7">
                      <p
                        className={`text-sm font-bold uppercase tracking-[0.18em] ${
                          resultado.favoravel
                            ? "text-[#c29629]"
                            : "text-[#607089]"
                        }`}
                      >
                        {resultado.classificacao}
                      </p>

                      <p className="mt-4 leading-8 text-[#405675]">
                        {resultado.explicacao}
                      </p>

                      {resultado.favoravel && (
                        <div className="mt-6 rounded-[20px] bg-[#edf4fb] p-5">
                          <p className="font-semibold text-[#123d73]">
                            Esta combinação atende a um dos padrões considerados
                            favoráveis para uma nova identidade profissional.
                          </p>
                        </div>
                      )}
                    </div>
                  </article>
                ))}

              </div>

              {/* CTA */}
              <div className="mt-10 rounded-[34px] bg-gradient-to-br from-[#fffaf0] to-white p-7 text-center shadow-xl sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                  Antes de lançar sua nova identidade
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold">
                  Um nome profissional será repetido, divulgado e associado à
                  sua imagem por muitos anos.
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#607089]">
                  Na análise completa podemos estudar diferentes nomes, avaliar
                  datas possíveis de lançamento e observar outras características
                  antes da decisão final.
                </p>

                <a
                  href="/solicitar-nome-profissional"
                  className="mt-8 inline-flex rounded-full bg-[#123d73] px-9 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
                >
                  Quero uma Análise Completa do Meu Nome Profissional
                </a>

                <button
                  type="button"
                  onClick={limparTudo}
                  className="mx-auto mt-5 block text-sm font-semibold text-[#607089] underline underline-offset-4"
                >
                  Testar outros nomes e datas
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}