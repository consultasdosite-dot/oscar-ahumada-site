"use client";

import { useState } from "react";
import Link from "next/link";

export default function SolicitarNomeProfissionalPage() {
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");

  const [atividadeProfissional, setAtividadeProfissional] = useState("");
  const [objetivo, setObjetivo] = useState("");

  function enviarSolicitacao(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nomes = [nome1, nome2, nome3]
      .map((nome) => nome.trim())
      .filter(Boolean)
      .map((nome, index) => `${index + 1}. ${nome}`)
      .join("\n");

    const datas = [data1, data2, data3]
      .map((data) => data.trim())
      .filter(Boolean)
      .map((data, index) => `${index + 1}. ${data}`)
      .join("\n");

    const texto = `Olá, Oscar. Quero solicitar uma análise para escolha do meu Nome Profissional.

DADOS PARA CONTATO

Nome: ${nomeResponsavel}
WhatsApp: ${whatsapp}
E-mail: ${email}

ATIVIDADE PROFISSIONAL

${atividadeProfissional || "Não informada"}

OPÇÕES DE NOME PROFISSIONAL

${nomes || "Não informadas"}

POSSÍVEIS DATAS DE LANÇAMENTO

${datas || "Não informadas"}

OBJETIVO DA NOVA IDENTIDADE

${objetivo || "Não informado"}

Vim pelo site www.oscarahumada.com.br`;

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] px-4 py-10 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* HERO */}
        <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f6cf68]">
              Nome Profissional
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Escolha sua nova identidade profissional com estratégia numerológica
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50/90">
              Informe as opções de nome e possíveis datas de lançamento para
              analisar combinações favoráveis entre identidade, comunicação,
              liderança e realização.
            </p>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className="mt-8 rounded-[32px] border border-[#dbcba9] bg-white p-6 shadow-xl sm:p-10">
          <form onSubmit={enviarSolicitacao} className="space-y-10">

            {/* CONTATO */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Dados para contato
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Quem está solicitando a análise?
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <label htmlFor="nomeResponsavel" className="text-sm font-bold">
                    Nome completo
                  </label>

                  <input
                    id="nomeResponsavel"
                    type="text"
                    required
                    value={nomeResponsavel}
                    onChange={(event) =>
                      setNomeResponsavel(event.target.value)
                    }
                    placeholder="Digite seu nome completo"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="whatsapp" className="text-sm font-bold">
                      WhatsApp
                    </label>

                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(event) => setWhatsapp(event.target.value)}
                      placeholder="(31) 99999-9999"
                      className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-bold">
                      E-mail
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="seuemail@exemplo.com"
                      className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ATIVIDADE */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Sua atuação
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Em qual área profissional você atua?
              </h2>

              <input
                id="atividadeProfissional"
                type="text"
                required
                value={atividadeProfissional}
                onChange={(event) =>
                  setAtividadeProfissional(event.target.value)
                }
                placeholder="Ex.: terapeuta, artista, consultor, empresário, palestrante..."
                className="mt-5 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            {/* NOMES */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Opções de nome profissional
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Quais nomes você está considerando?
              </h2>

              <p className="mt-3 leading-7 text-[#607089]">
                Informe até três opções. A primeira é obrigatória.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div>
                  <label htmlFor="nome1" className="text-sm font-bold">
                    Opção 1
                  </label>

                  <input
                    id="nome1"
                    type="text"
                    required
                    value={nome1}
                    onChange={(event) => setNome1(event.target.value)}
                    placeholder="Primeiro nome"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div>
                  <label htmlFor="nome2" className="text-sm font-bold">
                    Opção 2
                  </label>

                  <input
                    id="nome2"
                    type="text"
                    value={nome2}
                    onChange={(event) => setNome2(event.target.value)}
                    placeholder="Segunda opção"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div>
                  <label htmlFor="nome3" className="text-sm font-bold">
                    Opção 3
                  </label>

                  <input
                    id="nome3"
                    type="text"
                    value={nome3}
                    onChange={(event) => setNome3(event.target.value)}
                    placeholder="Terceira opção"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>
              </div>
            </div>

            {/* DATAS */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Data de lançamento
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Quais datas você está considerando para lançar a nova identidade?
              </h2>

              <p className="mt-3 leading-7 text-[#607089]">
                Podemos comparar até três possibilidades de lançamento.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div>
                  <label htmlFor="data1" className="text-sm font-bold">
                    Data 1
                  </label>

                  <input
                    id="data1"
                    type="date"
                    value={data1}
                    onChange={(event) => setData1(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div>
                  <label htmlFor="data2" className="text-sm font-bold">
                    Data 2
                  </label>

                  <input
                    id="data2"
                    type="date"
                    value={data2}
                    onChange={(event) => setData2(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div>
                  <label htmlFor="data3" className="text-sm font-bold">
                    Data 3
                  </label>

                  <input
                    id="data3"
                    type="date"
                    value={data3}
                    onChange={(event) => setData3(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Objetivo profissional
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                O que você espera conquistar com essa nova identidade?
              </h2>

              <textarea
                id="objetivo"
                value={objetivo}
                onChange={(event) => setObjetivo(event.target.value)}
                placeholder="Ex.: quero aumentar minha autoridade, comunicar melhor meu trabalho, conquistar mais público, reposicionar minha carreira ou lançar uma nova marca pessoal."
                rows={6}
                className="mt-5 w-full resize-none rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            {/* MÉTODO */}
            <div className="rounded-[28px] bg-[#edf4fb] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#246aa7]">
                O que será observado
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Nome e data de lançamento trabalhando juntos
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5">
                  <strong>Nome 1</strong>
                  <p className="mt-2 text-sm leading-6 text-[#607089]">
                    Liderança, iniciativa e presença, combinado com Destino 3 ou 8.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <strong>Nome 3</strong>
                  <p className="mt-2 text-sm leading-6 text-[#607089]">
                    Comunicação e visibilidade, combinado com Destino 8.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <strong>Nome 8</strong>
                  <p className="mt-2 text-sm leading-6 text-[#607089]">
                    Realização, autoridade e resultados, combinado com Destino 3.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <strong>Análise conjunta</strong>
                  <p className="mt-2 text-sm leading-6 text-[#607089]">
                    As opções são comparadas antes da escolha definitiva da nova identidade.
                  </p>
                </div>
              </div>
            </div>

            {/* AVISO */}
            <div className="rounded-[24px] border border-[#eadbbd] bg-[#fffaf0] p-6">
              <p className="font-semibold">
                Uma identidade profissional precisa ser pensada antes de ser lançada.
              </p>

              <p className="mt-2 leading-7 text-[#607089]">
                Depois que um nome começa a ser divulgado, ele passa a ser
                associado ao seu trabalho, à sua imagem e à maneira como o
                mercado reconhece você.
              </p>
            </div>

            {/* PRIVACIDADE */}
            <p className="text-center text-sm leading-6 text-[#708096]">
              Seus dados serão utilizados exclusivamente para dar continuidade
              à solicitação da análise numerológica.
            </p>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#123d73] px-8 py-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1f629d]"
            >
              Solicitar Análise pelo WhatsApp
            </button>

            <div className="text-center">
              <Link
                href="/nome-profissional"
                className="text-sm font-semibold text-[#123d73] underline underline-offset-4"
              >
                Voltar para testar nomes e datas
              </Link>
            </div>

          </form>
        </section>
      </div>
    </main>
  );
}