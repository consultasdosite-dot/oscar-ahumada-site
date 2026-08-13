"use client";

import { useState } from "react";
import { calcularNomeSocial } from "../lib/numerologia";
import { obterInterpretacaoNome } from "../data/interpretacoesNome";

type ResultadoNome = ReturnType<typeof calcularNomeSocial>;

export default function NomeDoBebePage() {
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");

  const [resultados, setResultados] = useState<ResultadoNome[]>([]);

  function analisarNomes() {
    const nomes = [nome1, nome2, nome3]
      .map((nome) => nome.trim())
      .filter(Boolean);

    const calculados = nomes.map((nome) => calcularNomeSocial(nome));

    setResultados(calculados);
  }

  function limparTudo() {
    setNome1("");
    setNome2("");
    setNome3("");
    setResultados([]);

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
              Numerologia para Bebês
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Antes de escolher o nome do seu bebê, descubra a energia que ele pode carregar.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50/90">
              Compare até três nomes e observe a vibração numerológica de cada
              opção antes de tomar uma decisão tão importante.
            </p>

            <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-md sm:p-7">

              <div className="grid gap-4 md:grid-cols-3">
                <input
                  type="text"
                  value={nome1}
                  onChange={(event) => setNome1(event.target.value)}
                  placeholder="Primeiro nome"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />

                <input
                  type="text"
                  value={nome2}
                  onChange={(event) => setNome2(event.target.value)}
                  placeholder="Segundo nome"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />

                <input
                  type="text"
                  value={nome3}
                  onChange={(event) => setNome3(event.target.value)}
                  placeholder="Terceiro nome"
                  className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20"
                />
              </div>

              <button
                type="button"
                onClick={analisarNomes}
                className="mt-5 w-full rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Comparar os Nomes
              </button>

            </div>
          </div>
        </section>

        {/* INTRODUÇÃO */}
        <section className="px-2 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
              Uma escolha para toda a vida
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              O nome será repetido milhares de vezes ao longo da vida.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#607089]">
              Pela Numerologia Latina, cada letra possui um valor numérico.
              A combinação dessas letras forma uma vibração que pode revelar
              tendências importantes de personalidade, expressão e comportamento.
            </p>
          </div>
        </section>

        {/* RESULTADOS */}
        {resultados.length > 0 && (
          <section className="pb-16">
            <div className="grid gap-6 lg:grid-cols-3">

              {resultados.map((resultado) => {
                const interpretacao = obterInterpretacaoNome(
                  resultado.vogaisReduzidas,
                  resultado.consoantesReduzidas,
                  resultado.nomeOriginal
                );

                return (
                  <article
                    key={resultado.nomeOriginal}
                    className="overflow-hidden rounded-[30px] border border-[#dbcba9] bg-white shadow-xl"
                  >
                    <div className="bg-[#123d73] px-6 py-7 text-center text-white">

                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6cf68]">
                        Análise do Nome
                      </p>

                      <h2 className="mt-3 break-words text-3xl font-bold">
                        {resultado.nomeNormalizado}
                      </h2>

                      <div className="mt-5 inline-flex min-h-20 min-w-20 items-center justify-center rounded-full bg-[#f6c84f] px-4 text-3xl font-bold text-[#123d73]">
                        {resultado.revelacaoNomeSocial}
                      </div>

                      {resultado.numeroMestre && (
                        <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[#f6cf68]">
                          Número Mestre {resultado.revelacaoNomeSocial}
                        </p>
                      )}

                    </div>

                    <div className="p-6">

                      {/* LETRAS */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c29629]">
                          Energia das letras
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {resultado.letras.map((item, index) => (
                            <div
                              key={`${item.letra}-${index}`}
                              className="min-w-12 rounded-xl border border-[#dfd2bb] bg-[#faf7f1] px-3 py-2 text-center"
                            >
                              <div className="font-bold">{item.letra}</div>

                              <div className="text-xs font-bold text-[#c29629]">
                                {item.valor}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SOMA */}
                      <div className="mt-6 rounded-[20px] bg-[#f8f5ef] p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c29629]">
                          Soma Total
                        </p>

                        <p className="mt-3 text-2xl font-semibold">
                          {resultado.somaTotal}
                        </p>

                        <p className="mt-2 text-sm text-[#607089]">
                          Redução: {resultado.caminhoReducaoTotal.join(" → ")}
                        </p>
                      </div>

                      {/* VOGAIS */}
                      <div className="mt-4 grid grid-cols-2 gap-3">

                        <div className="rounded-[18px] border border-[#dfd2bb] p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c29629]">
                            Vogais
                          </p>

                          <p className="mt-2 text-xl font-semibold">
                            {resultado.somaVogais} →{" "}
                            {resultado.vogaisReduzidas}
                          </p>
                        </div>

                        <div className="rounded-[18px] border border-[#dfd2bb] p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c29629]">
                            Consoantes
                          </p>

                          <p className="mt-2 text-xl font-semibold">
                            {resultado.somaConsoantes} →{" "}
                            {resultado.consoantesReduzidas}
                          </p>
                        </div>

                      </div>

                      {/* COMBINAÇÃO */}
                      <div className="mt-4 rounded-[20px] border border-[#d4af37]/40 bg-[#fffaf0] p-5 text-center">

                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c29629]">
                          Combinação
                        </p>

                        <p className="mt-3 text-2xl font-bold">
                          {resultado.vogaisReduzidas} +{" "}
                          {resultado.consoantesReduzidas}
                          {interpretacao && (
                            <>
                              {" "}
                              ={" "}
                              <span className="text-[#c29629]">
                                {interpretacao.resultado}
                              </span>
                            </>
                          )}
                        </p>

                      </div>

                      {/* INTERPRETAÇÃO */}
                      {interpretacao && (
                        <div className="mt-5 rounded-[22px] bg-[#edf4fb] p-5">

                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246aa7]">
                            O que este nome revela
                          </p>

                          <p className="mt-3 leading-7 text-[#405675]">
                            {interpretacao.texto}
                          </p>

                        </div>
                      )}

                    </div>
                  </article>
                );
              })}

            </div>

            {/* COMPARAÇÃO */}
            {resultados.length > 1 && (
              <div className="mt-10 rounded-[30px] bg-[#123d73] px-6 py-9 text-center text-white shadow-xl sm:px-10">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">
                  Compare com calma
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold">
                  Cada nome apresenta uma vibração diferente.
                </h2>

                <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-100">
                  A comparação ajuda a perceber características diferentes entre
                  as opções, mas uma escolha definitiva pode considerar também o
                  nome completo, sobrenomes, data prevista ou data de nascimento
                  e outras informações importantes.
                </p>

              </div>
            )}

            {/* CTA */}
            <div className="mt-10 rounded-[34px] bg-gradient-to-br from-[#fffaf0] to-white p-7 text-center shadow-xl sm:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">
                Uma escolha importante merece uma análise completa
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold">
                Quer escolher o nome do seu bebê com mais segurança numerológica?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#607089]">
                Na análise completa podemos estudar diferentes opções de nomes
                e observar como as vibrações se apresentam antes da decisão final.
              </p>

              <a
                href="/solicitar-nome-bebe"
                className="mt-8 inline-flex rounded-full bg-[#123d73] px-9 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
              >
                Quero uma Análise Completa do Nome do Bebê
              </a>

              <button
                type="button"
                onClick={limparTudo}
                className="mx-auto mt-4 block text-sm font-semibold text-[#607089] underline underline-offset-4"
              >
                Comparar outros nomes
              </button>

            </div>

          </section>
        )}

      </div>
    </main>
  );
}