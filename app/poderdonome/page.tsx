"use client";

import { useState } from "react";
import { calcularNomeSocial } from "../lib/numerologia";
import { obterInterpretacaoNome } from "../data/interpretacoesNome";

export default function PoderDoNomePage() {
  const [nome, setNome] = useState("");
  const [resultado, setResultado] = useState<ReturnType<
    typeof calcularNomeSocial
  > | null>(null);

  function revelarNome() {
    const nomeLimpo = nome.trim();

    if (!nomeLimpo) {
      setResultado(null);
      return;
    }

    setResultado(calcularNomeSocial(nomeLimpo));
  }

  function limparCalculo() {
    setNome("");
    setResultado(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const interpretacao = resultado
    ? obterInterpretacaoNome(
        resultado.vogaisReduzidas,
        resultado.consoantesReduzidas,
        resultado.nomeOriginal
      )
    : null;

  function compartilharWhatsApp() {
    if (!resultado) return;

    const primeiroNome =
      resultado.nomeOriginal.trim().split(/\s+/)[0] ||
      resultado.nomeNormalizado;

    const combinacao = interpretacao
      ? `${resultado.vogaisReduzidas} + ${resultado.consoantesReduzidas} = ${interpretacao.resultado}`
      : `${resultado.vogaisReduzidas} + ${resultado.consoantesReduzidas}`;

    const mensagem = `Descobri o que meu nome revela através da Numerologia Latina de Oscar Ahumada.

Meu nome: ${primeiroNome}
Minha combinação numerológica: ${combinacao}
Revelação do Nome Social: ${resultado.revelacaoNomeSocial}${
      resultado.numeroMestre ? " — Número Mestre" : ""
    }

Descubra também o Poder do Seu Nome:
https://www.oscarahumada.com.br/poderdonome`;

    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function compartilharNativo() {
    if (!resultado) return;

    const primeiroNome =
      resultado.nomeOriginal.trim().split(/\s+/)[0] ||
      resultado.nomeNormalizado;

    const texto = `Descobri minha combinação numerológica: ${resultado.vogaisReduzidas} + ${resultado.consoantesReduzidas}${
      interpretacao ? ` = ${interpretacao.resultado}` : ""
    }. Faça também a revelação do seu nome pela Numerologia Latina de Oscar Ahumada.`;

    const url = "https://www.oscarahumada.com.br/poderdonome";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Descubra o Poder do Seu Nome",
          text: `${primeiroNome}: ${texto}`,
          url,
        });
      } catch {
        // O usuário pode simplesmente cancelar o compartilhamento.
      }
    } else {
      compartilharWhatsApp();
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#edf4fb] via-[#f7f3eb] to-[#f7f3eb] px-4 py-8 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* HERO */}
        <section className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-5 py-9 text-white shadow-2xl sm:rounded-[36px] sm:px-10 sm:py-12 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f6cf68] sm:text-sm sm:tracking-[0.3em]">
              Método Oscar Ahumada
            </p>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Descubra o Poder do Seu Nome
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50/90 sm:mt-6 sm:text-lg sm:leading-8">
              Digite o nome pelo qual você é conhecido no dia a dia e descubra
              o que a Numerologia Latina revela sobre a vibração do seu nome.
            </p>

            <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:mt-10 sm:rounded-[28px] sm:p-7">
              <label
                htmlFor="nome"
                className="block text-left text-sm font-semibold text-white"
              >
                Digite seu nome
              </label>

              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    revelarNome();
                  }
                }}
                placeholder="Ex.: Oscar"
                autoComplete="name"
                className="mt-3 w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-base text-[#123d73] outline-none transition placeholder:text-slate-400 focus:border-[#f6cf68] focus:ring-4 focus:ring-[#f6cf68]/20 sm:text-lg"
              />

              <button
                type="button"
                onClick={revelarNome}
                className="mt-4 w-full rounded-full bg-[#f6c84f] px-6 py-4 text-sm font-bold uppercase tracking-[0.06em] text-[#123d73] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ffda70] sm:px-8 sm:tracking-[0.08em]"
              >
                Revelar o Poder do Meu Nome
              </button>
            </div>
          </div>
        </section>

        {/* RESULTADO */}
        {resultado && (
          <section className="mt-7 rounded-[26px] border border-[#dbcba9] bg-white p-5 shadow-xl sm:mt-10 sm:rounded-[32px] sm:p-10">

            {/* NOME */}
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c29629] sm:text-sm sm:tracking-[0.25em]">
                Sua Revelação
              </p>

              <h2 className="mt-3 break-words text-3xl font-bold tracking-tight sm:text-4xl">
                {resultado.nomeNormalizado}
              </h2>

              <div className="mt-6 inline-flex min-h-24 min-w-24 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#faf5e7] px-5 text-4xl font-bold text-[#c29629] shadow-inner sm:mt-7 sm:min-h-28 sm:min-w-28 sm:text-5xl">
                {resultado.revelacaoNomeSocial}
              </div>

              {resultado.numeroMestre && (
                <p className="mt-4 text-base font-bold uppercase tracking-[0.16em] text-[#c29629] sm:text-lg sm:tracking-[0.2em]">
                  Número Mestre {resultado.revelacaoNomeSocial}
                </p>
              )}
            </div>

            {/* LETRAS */}
            <div className="mt-9 border-t border-[#eadfc9] pt-7 sm:mt-10 sm:pt-8">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#607089] sm:text-sm sm:tracking-[0.2em]">
                A energia de cada letra
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
                {resultado.letras.map((item, index) => (
                  <div
                    key={`${item.letra}-${index}`}
                    className="min-w-14 rounded-xl border border-[#dfd2bb] bg-[#faf7f1] px-3 py-3 text-center sm:min-w-16 sm:rounded-2xl sm:px-4 sm:py-4"
                  >
                    <div className="text-xl font-bold sm:text-2xl">
                      {item.letra}
                    </div>

                    <div className="mt-1 text-xs font-bold text-[#c29629] sm:text-sm">
                      {item.valor}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RESULTADOS */}
            <div className="mt-8 grid gap-4 lg:grid-cols-2 sm:mt-10 sm:gap-5">
              <div className="rounded-[22px] bg-[#f8f5ef] p-5 sm:rounded-[24px] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c29629] sm:text-sm sm:tracking-[0.18em]">
                  Soma do Nome
                </p>

                <p className="mt-4 text-3xl font-semibold">
                  {resultado.somaTotal}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#607089] sm:text-base">
                  Redução: {resultado.caminhoReducaoTotal.join(" → ")}
                </p>
              </div>

              <div className="rounded-[22px] bg-[#123d73] p-5 text-white sm:rounded-[24px] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6cf68] sm:text-sm sm:tracking-[0.18em]">
                  Revelação do Nome Social
                </p>

                <p className="mt-4 text-4xl font-bold text-[#f6cf68] sm:text-5xl">
                  {resultado.revelacaoNomeSocial}
                </p>

                {resultado.numeroMestre && (
                  <p className="mt-3 font-semibold text-[#f6cf68]">
                    Número Mestre
                  </p>
                )}

                <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                  Este número representa a vibração principal do nome pelo qual
                  você é conhecido socialmente.
                </p>
              </div>
            </div>

            {/* VOGAIS E CONSOANTES */}
            <div className="mt-5 grid gap-4 md:grid-cols-2 sm:mt-6 sm:gap-5">
              <div className="rounded-[22px] border border-[#ded1b9] bg-[#fffdf9] p-5 sm:rounded-[24px] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c29629] sm:text-sm sm:tracking-[0.18em]">
                  Vogais
                </p>

                <p className="mt-4 text-2xl font-semibold sm:text-3xl">
                  {resultado.somaVogais} → {resultado.vogaisReduzidas}
                </p>
              </div>

              <div className="rounded-[22px] border border-[#ded1b9] bg-[#fffdf9] p-5 sm:rounded-[24px] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c29629] sm:text-sm sm:tracking-[0.18em]">
                  Consoantes
                </p>

                <p className="mt-4 text-2xl font-semibold sm:text-3xl">
                  {resultado.somaConsoantes} →{" "}
                  {resultado.consoantesReduzidas}
                </p>
              </div>
            </div>

            {/* COMBINAÇÃO */}
            <div className="mt-5 rounded-[24px] border border-[#d4af37]/40 bg-[#fffaf0] p-5 text-center sm:mt-6 sm:rounded-[26px] sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#c29629] sm:text-sm sm:tracking-[0.2em]">
                Sua Combinação Numerológica
              </p>

              <p className="mt-4 text-3xl font-bold text-[#123d73] sm:text-4xl">
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

            {/* DIAGNÓSTICO */}
            {interpretacao && (
              <div className="mt-7 overflow-hidden rounded-[26px] border border-[#d9c28d] bg-gradient-to-br from-[#fffdf8] to-[#f8f1e2] shadow-lg sm:mt-8 sm:rounded-[30px]">
                <div className="bg-[#123d73] px-5 py-5 text-center text-white sm:px-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6cf68] sm:tracking-[0.28em]">
                    Numerologia Latina
                  </p>

                  <h3 className="mt-2 text-xl font-semibold sm:text-3xl">
                    O que seu nome revela sobre você
                  </h3>
                </div>

                <div className="px-5 py-7 sm:px-10 sm:py-10">
                  <div className="mx-auto max-w-3xl">
                    <p className="text-base leading-8 text-[#334b68] sm:text-xl sm:leading-9">
                      {interpretacao.texto}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!interpretacao && (
              <div className="mt-7 rounded-[24px] border border-[#e1d4bd] bg-[#faf7f1] p-6 text-center">
                <p className="font-semibold text-[#123d73]">
                  A interpretação aprofundada desta combinação está sendo
                  preparada.
                </p>
              </div>
            )}

            {/* COMPARTILHAMENTO */}
            <div className="mt-8 rounded-[26px] border border-[#cbd9e7] bg-[#edf5fc] p-5 text-center sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246aa7]">
                Seu nome revelou algo sobre você?
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#123d73] sm:text-2xl">
                Compartilhe e descubra o que o nome de alguém especial também
                revela.
              </h3>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={compartilharWhatsApp}
                  className="rounded-full bg-[#123d73] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
                >
                  Compartilhar no WhatsApp
                </button>

                <button
                  type="button"
                  onClick={compartilharNativo}
                  className="rounded-full border border-[#123d73] px-7 py-4 text-sm font-bold text-[#123d73] transition hover:bg-white"
                >
                  Compartilhar Minha Revelação
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-[26px] bg-gradient-to-r from-[#123d73] to-[#1f629d] px-5 py-8 text-center text-white sm:mt-10 sm:rounded-[30px] sm:px-10 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6cf68] sm:text-sm sm:tracking-[0.25em]">
                Seu nome é apenas o começo
              </p>

              <h3 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
                E se você pudesse compreender não apenas quem você é, mas
                também os ciclos, desafios e oportunidades que acompanham a sua
                história?
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                O Mapa Numerológico completo reúne outras informações do seu
                nome e da sua data de nascimento para aprofundar o
                autoconhecimento e ajudar você a compreender melhor suas
                escolhas, talentos, desafios e momentos de vida.
              </p>

              <p className="mx-auto mt-5 max-w-2xl font-semibold leading-7 text-white">
                A revelação que você acabou de receber é somente uma parte
                dessa história.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/#servicos"
                  className="rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70]"
                >
                  Quero Descobrir Meu Mapa Completo
                </a>

                <button
                  type="button"
                  onClick={limparCalculo}
                  className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Calcular Outro Nome
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}