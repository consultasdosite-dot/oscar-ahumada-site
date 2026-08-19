"use client";

import { FormEvent, useState } from "react";

import {
  gerarMapaNumerologico,
  type ResultadoMapaNumerologico,
} from "../../lib/geradorMapaNumerologico";

import {
  montarDiagnosticoMapa,
  type DiagnosticoMapaCompleto,
} from "../../lib/montarDiagnosticoMapa";

import {
  montarPrevisoes2026e2027,
  type PrevisaoAnoCompleta,
} from "../../data/previsoesNumerologicas";

type PrevisoesMapa = {
  previsao2026: PrevisaoAnoCompleta;
  previsao2027: PrevisaoAnoCompleta;
};

export default function GeradorMapaNumerologicoPage() {
  const [autorizado, setAutorizado] = useState(false);
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const [nomeSocial, setNomeSocial] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomeProfissional, setNomeProfissional] = useState("");
  const [sexo, setSexo] = useState("M");
  const [dataNascimento, setDataNascimento] = useState("");
  const [dataConjuge, setDataConjuge] = useState("");

  const [resultado, setResultado] =
    useState<ResultadoMapaNumerologico | null>(null);

  const [diagnostico, setDiagnostico] =
    useState<DiagnosticoMapaCompleto | null>(null);

  const [previsoes, setPrevisoes] =
    useState<PrevisoesMapa | null>(null);

  const [erroCalculo, setErroCalculo] = useState("");

  function entrar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (senha === "Oscar2026") {
      setAutorizado(true);
      setErroSenha("");
      return;
    }

    setErroSenha("Senha incorreta.");
  }

  function limparResultados() {
    setResultado(null);
    setDiagnostico(null);
    setPrevisoes(null);
  }

  function gerarMapa(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const mapa = gerarMapaNumerologico({
        nomeSocial,
        nomeCompleto,
        nomeProfissional,
        dataNascimento,
        dataConjuge,
        anoPrevisao: 2026,
      });

      const leitura = montarDiagnosticoMapa(
        mapa,
        nomeSocial.trim() || nomeCompleto.trim()
      );

      const previsoesCalculadas =
        montarPrevisoes2026e2027(dataNascimento);

      setResultado(mapa);
      setDiagnostico(leitura);
      setPrevisoes(previsoesCalculadas);
      setErroCalculo("");

      setTimeout(() => {
        document
          .getElementById("resultado-mapa")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 150);
    } catch (error) {
      setResultado(null);
      setDiagnostico(null);
      setPrevisoes(null);

      if (error instanceof Error) {
        setErroCalculo(error.message);
      } else {
        setErroCalculo("Não foi possível calcular o mapa.");
      }
    }
  }

  function limpar() {
    setNomeSocial("");
    setNomeCompleto("");
    setNomeProfissional("");
    setSexo("M");
    setDataNascimento("");
    setDataConjuge("");

    setResultado(null);
    setDiagnostico(null);
    setPrevisoes(null);
    setErroCalculo("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!autorizado) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#071d38] via-[#123d73] to-[#246aa7] px-5 py-10">
        <section className="w-full max-w-md rounded-[32px] border border-white/15 bg-white p-7 shadow-2xl sm:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#123d73] text-3xl font-bold text-[#f6c84f]">
              OA
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#c29629]">
              Área Privada
            </p>

            <h1 className="mt-3 text-3xl font-semibold text-[#123d73]">
              Gerador de Mapas Numerológicos
            </h1>

            <p className="mt-4 leading-7 text-[#607089]">
              Área de uso exclusivo para produção dos Mapas Numerológicos de
              Oscar Ahumada.
            </p>
          </div>

          <form onSubmit={entrar} className="mt-8">
            <label
              htmlFor="senha"
              className="text-sm font-semibold text-[#123d73]"
            >
              Senha de acesso
            </label>

            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
                setErroSenha("");
              }}
              placeholder="Digite sua senha"
              autoComplete="current-password"
              className="mt-2 w-full rounded-2xl border border-[#d8d8d8] bg-[#f8fafc] px-5 py-4 text-[#123d73] outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/15"
            />

            {erroSenha && (
              <p className="mt-3 text-sm font-semibold text-red-600">
                {erroSenha}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-[#f6c84f] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
            >
              Entrar
            </button>
          </form>
        </section>
      </main>
    );
  }

  const capitulosPermanentes =
    diagnostico?.capitulos.filter(
      (capitulo) => capitulo.chave !== "ano-pessoal"
    ) ?? [];

  return (
    <main className="min-h-screen bg-[#f4f1ea] px-4 py-8 text-[#123d73] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        {/* CABEÇALHO */}
        <section className="overflow-hidden rounded-[34px] bg-gradient-to-br from-[#0d315d] via-[#174f8a] to-[#2f7fbb] px-6 py-10 text-white shadow-2xl sm:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f6c84f]">
                Área Privada Oscar Ahumada
              </p>

              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Gerador de Mapa Numerológico
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                Insira os dados do cliente para calcular e montar
                automaticamente o diagnóstico completo e as previsões
                numerológicas de 2026 e 2027.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setAutorizado(false);
                setSenha("");
                limparResultados();
              }}
              className="self-start rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white/10 md:self-auto"
            >
              Sair
            </button>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <form
          onSubmit={gerarMapa}
          className="mt-8 rounded-[32px] border border-[#dfd2bb] bg-white p-6 shadow-xl sm:p-10"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c29629]">
              Dados do Cliente
            </p>

            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Informações para o Mapa Numerológico
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-[#607089]">
              O sistema calculará os números regentes, os diagnósticos
              permanentes, os Pináculos e as previsões para 2026 e 2027.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="nomeSocial"
                className="text-sm font-bold text-[#123d73]"
              >
                Nome Social / Nome pelo qual é conhecido
              </label>

              <input
                id="nomeSocial"
                type="text"
                value={nomeSocial}
                onChange={(event) => {
                  setNomeSocial(event.target.value);
                  limparResultados();
                }}
                placeholder="Ex.: Oscar Ahumada"
                className="mt-2 w-full rounded-2xl border border-[#d8d8d8] px-5 py-4 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/15"
              />
            </div>

            <div>
              <label
                htmlFor="nomeCompleto"
                className="text-sm font-bold text-[#123d73]"
              >
                Nome Completo de Nascimento
              </label>

              <input
                id="nomeCompleto"
                type="text"
                value={nomeCompleto}
                onChange={(event) => {
                  setNomeCompleto(event.target.value);
                  limparResultados();
                }}
                placeholder="Nome completo conforme nascimento"
                required
                className="mt-2 w-full rounded-2xl border border-[#d8d8d8] px-5 py-4 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/15"
              />
            </div>

            <div>
              <label
                htmlFor="nomeProfissional"
                className="text-sm font-bold text-[#123d73]"
              >
                Nome Profissional
              </label>

              <input
                id="nomeProfissional"
                type="text"
                value={nomeProfissional}
                onChange={(event) => {
                  setNomeProfissional(event.target.value);
                  limparResultados();
                }}
                placeholder="Se utilizar"
                className="mt-2 w-full rounded-2xl border border-[#d8d8d8] px-5 py-4 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/15"
              />
            </div>

            <div>
              <label
                htmlFor="sexo"
                className="text-sm font-bold text-[#123d73]"
              >
                Sexo
              </label>

              <select
                id="sexo"
                value={sexo}
                onChange={(event) => {
                  setSexo(event.target.value);
                  limparResultados();
                }}
                className="mt-2 w-full rounded-2xl border border-[#d8d8d8] bg-white px-5 py-4 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/15"
              >
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="dataNascimento"
                className="text-sm font-bold text-[#123d73]"
              >
                Data de Nascimento
              </label>

              <input
                id="dataNascimento"
                type="date"
                value={dataNascimento}
                onChange={(event) => {
                  setDataNascimento(event.target.value);
                  limparResultados();
                }}
                required
                className="mt-2 w-full rounded-2xl border border-[#d8d8d8] px-5 py-4 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/15"
              />
            </div>

            <div>
              <label
                htmlFor="dataConjuge"
                className="text-sm font-bold text-[#123d73]"
              >
                Data de Nascimento do Cônjuge
              </label>

              <input
                id="dataConjuge"
                type="date"
                value={dataConjuge}
                onChange={(event) => {
                  setDataConjuge(event.target.value);
                  limparResultados();
                }}
                className="mt-2 w-full rounded-2xl border border-[#d8d8d8] px-5 py-4 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/15"
              />

              <p className="mt-2 text-xs text-[#607089]">
                Campo opcional.
              </p>
            </div>
          </div>

          {erroCalculo && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
              {erroCalculo}
            </div>
          )}

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#123d73] px-8 py-5 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1f629d]"
          >
            Gerar Mapa Numerológico Completo
          </button>
        </form>

        {/* RESUMO DOS NÚMEROS */}
        {resultado && previsoes && (
          <section className="mt-8 rounded-[32px] border border-[#dfd2bb] bg-white p-6 shadow-xl sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c29629]">
              Números Regentes
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Estrutura Numerológica
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <CardNumero
                titulo="Nome Social"
                numero={resultado.prenome?.numero ?? "-"}
              />

              <CardNumero
                titulo="Nome Completo"
                numero={resultado.nomeCompleto.numero}
              />

              <CardNumero
                titulo="Nome Profissional"
                numero={resultado.nomeProfissional?.numero ?? "-"}
              />

              <CardNumero
                titulo="Destino"
                numero={resultado.destino}
              />

              <CardNumero
                titulo="Ano Pessoal 2026"
                numero={previsoes.previsao2026.numeroAnoPessoal}
              />

              <CardNumero
                titulo="Ano Pessoal 2027"
                numero={previsoes.previsao2027.numeroAnoPessoal}
              />

              {resultado.conjuge && (
                <CardNumero
                  titulo="Destino do Cônjuge"
                  numero={resultado.conjuge.destino}
                />
              )}
            </div>
          </section>
        )}

        {/* MAPA */}
        {diagnostico && (
          <section
            id="resultado-mapa"
            className="scroll-mt-8 mt-8"
          >
            {/* ABERTURA */}
            <div className="rounded-[34px] bg-gradient-to-br from-[#0d315d] via-[#174f8a] to-[#2f7fbb] px-6 py-10 text-center text-white shadow-2xl sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6c84f]">
                Mapa Numerológico
              </p>

              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                {diagnostico.nomeCliente}
              </h2>

              <p className="mx-auto mt-4 max-w-3xl leading-7 text-blue-100">
                A partir daqui começa a leitura das principais vibrações
                encontradas no seu mapa.
              </p>
            </div>

            {/* DIAGNÓSTICOS PERMANENTES */}
            <div className="mt-8 space-y-8">
              {capitulosPermanentes.map((capitulo) => (
                <article
                  key={capitulo.chave}
                  className="overflow-hidden rounded-[32px] border border-[#dfd2bb] bg-white shadow-xl"
                >
                  <div className="bg-[#123d73] px-6 py-8 text-white sm:px-10">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f6c84f]">
                      {capitulo.titulo}
                    </p>

                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold sm:text-3xl">
                          {capitulo.subtitulo}
                        </h3>

                        <p className="mt-2 text-blue-100">
                          {capitulo.interpretacao.titulo}
                        </p>
                      </div>

                      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#f6c84f] text-3xl font-bold text-[#123d73]">
                        {capitulo.numero}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-10">
                    <p className="text-lg leading-8 text-[#405675]">
                      {capitulo.introducao}
                    </p>

                    <div className="mt-8">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c29629]">
                        Quero conversar com você sobre essa energia
                      </p>

                      <p className="mt-4 text-lg leading-8 text-[#405675]">
                        {capitulo.interpretacao.diagnostico}
                      </p>
                    </div>

                    <div className="mt-7 rounded-[24px] bg-[#edf4fb] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246aa7]">
                        Essência desta vibração
                      </p>

                      <p className="mt-4 leading-8 text-[#405675]">
                        {capitulo.interpretacao.essencia}
                      </p>
                    </div>

                    <div className="mt-7 grid gap-6 lg:grid-cols-2">
                      <div className="rounded-[24px] bg-[#f3f8fc] p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246aa7]">
                          Potencialidades
                        </p>

                        <ul className="mt-4 space-y-3">
                          {capitulo.interpretacao.potencialidades.map(
                            (item) => (
                              <li
                                key={item}
                                className="flex gap-3 leading-7 text-[#405675]"
                              >
                                <span className="font-bold text-[#c29629]">
                                  +
                                </span>

                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="rounded-[24px] border border-[#eadbbd] bg-[#fffaf0] p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b88716]">
                          Pontos de atenção
                        </p>

                        <ul className="mt-4 space-y-3">
                          {capitulo.interpretacao.pontosAtencao.map(
                            (item) => (
                              <li
                                key={item}
                                className="flex gap-3 leading-7 text-[#405675]"
                              >
                                <span className="font-bold text-[#b88716]">
                                  •
                                </span>

                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-7 rounded-[24px] bg-[#123d73] p-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
                        Atitudes para seu equilíbrio
                      </p>

                      <p className="mt-4 leading-8 text-blue-50">
                        {capitulo.interpretacao.atitudes}
                      </p>
                    </div>

                    <div className="mt-7 grid gap-6 lg:grid-cols-2">
                      <div className="rounded-[24px] border border-[#d9e1e8] p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246aa7]">
                          Trabalho e realização
                        </p>

                        <p className="mt-4 leading-8 text-[#405675]">
                          {capitulo.interpretacao.trabalho}
                        </p>
                      </div>

                      <div className="rounded-[24px] border border-[#d9e1e8] p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246aa7]">
                          Relacionamentos
                        </p>

                        <p className="mt-4 leading-8 text-[#405675]">
                          {capitulo.interpretacao.relacionamentos}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 rounded-[24px] bg-[#f8fafc] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#607089]">
                        Perguntas para refletir
                      </p>

                      <div className="mt-4 space-y-4">
                        {capitulo.interpretacao.reflexao.map(
                          (pergunta, index) => (
                            <p
                              key={pergunta}
                              className="leading-7 text-[#405675]"
                            >
                              <strong className="text-[#c29629]">
                                {index + 1}.
                              </strong>{" "}
                              {pergunta}
                            </p>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mt-7 rounded-[24px] bg-gradient-to-br from-[#fff8e8] to-[#fffdf8] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c29629]">
                        Minha orientação para você
                      </p>

                      <p className="mt-4 text-lg font-medium leading-8 text-[#123d73]">
                        {capitulo.interpretacao.orientacaoOscar}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* PREVISÕES */}
            {previsoes && (
              <div className="mt-12 space-y-12">
                <PrevisaoAno
                  previsao={previsoes.previsao2026}
                />

                <PrevisaoAno
                  previsao={previsoes.previsao2027}
                />
              </div>
            )}

            {/* BOTÕES FINAIS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => {
                  limparResultados();

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="rounded-full border border-[#123d73] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:bg-[#123d73] hover:text-white"
              >
                Alterar Dados
              </button>

              <button
                type="button"
                onClick={limpar}
                className="rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:bg-[#ffda70]"
              >
                Novo Cliente
              </button>
            </div>
          </section>
        )}

        <p className="mt-8 text-center text-xs text-[#7b8798]">
          Ferramenta interna de produção de Mapas Numerológicos.
        </p>
      </div>
    </main>
  );
}

function PrevisaoAno({
  previsao,
}: {
  previsao: PrevisaoAnoCompleta;
}) {
  return (
    <section className="overflow-hidden rounded-[34px] border border-[#dfd2bb] bg-white shadow-2xl">
      {/* ABERTURA DO ANO */}
      <div className="bg-gradient-to-br from-[#102f57] via-[#174f8a] to-[#2f7fbb] px-6 py-10 text-white sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#f6c84f]">
          Previsões {previsao.ano}
        </p>

        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Ano Pessoal {previsao.numeroAnoPessoal}
            </h2>

            <p className="mt-3 text-xl text-blue-100">
              {previsao.anual.titulo}
            </p>
          </div>

          <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full bg-[#f6c84f] text-5xl font-bold text-[#123d73] shadow-xl">
            {previsao.numeroAnoPessoal}
          </div>
        </div>
      </div>

      {/* PREVISÃO ANUAL */}
      <div className="p-6 sm:p-10">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c29629]">
            O movimento do seu ano
          </p>

          <p className="mt-4 text-lg leading-8 text-[#405675]">
            {previsao.anual.abertura}
          </p>

          <p className="mt-5 text-lg leading-8 text-[#405675]">
            {previsao.anual.movimentoDoAno}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-[#edf4fb] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246aa7]">
              Trabalho e vida material
            </p>

            <p className="mt-4 leading-8 text-[#405675]">
              {previsao.anual.profissionalFinanceiro}
            </p>
          </div>

          <div className="rounded-[24px] bg-[#fff8e8] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b88716]">
              Vida afetiva
            </p>

            <p className="mt-4 leading-8 text-[#405675]">
              {previsao.anual.afetivo}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-[#eadbbd] bg-[#fffaf0] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b88716]">
            Ponto de atenção
          </p>

          <p className="mt-4 leading-8 text-[#405675]">
            {previsao.anual.pontoAtencao}
          </p>
        </div>

        <div className="mt-6 rounded-[24px] bg-[#123d73] p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
            Minha orientação para {previsao.ano}
          </p>

          <p className="mt-4 text-lg leading-8 text-blue-50">
            {previsao.anual.orientacaoOscar}
          </p>
        </div>

        {/* PREVISÕES MENSAIS */}
        <div className="mt-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c29629]">
              Previsões Mensais
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Janeiro a Dezembro de {previsao.ano}
            </h3>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#607089]">
              Cada mês acrescenta uma nova vibração ao movimento do seu Ano
              Pessoal. Observe as oportunidades, os cuidados e a atitude
              indicada para cada período.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {previsao.meses.map((mes) => (
              <article
                key={`${previsao.ano}-${mes.mes}`}
                className="overflow-hidden rounded-[26px] border border-[#d9e1e8] bg-[#f8fafc]"
              >
                <div className="flex items-center justify-between bg-[#123d73] px-5 py-5 text-white">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6c84f]">
                      {mes.nomeMes}
                    </p>

                    <h4 className="mt-1 text-xl font-semibold">
                      {mes.previsao.titulo}
                    </h4>
                  </div>

                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#f6c84f] text-2xl font-bold text-[#123d73]">
                    {mes.numero}
                  </div>
                </div>

                <div className="p-5">
                  <p className="leading-7 text-[#405675]">
                    {mes.previsao.energia}
                  </p>

                  <div className="mt-5 rounded-2xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#246aa7]">
                      Favorece
                    </p>

                    <p className="mt-2 leading-7 text-[#405675]">
                      {mes.previsao.favorece}
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#fff8e8] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b88716]">
                      Atenção
                    </p>

                    <p className="mt-2 leading-7 text-[#405675]">
                      {mes.previsao.atencao}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-[#d9e1e8] pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#607089]">
                      Sua atitude
                    </p>

                    <p className="mt-2 font-medium leading-7 text-[#123d73]">
                      {mes.previsao.atitude}
                    </p>
                  </div>

                  {mes.transicaoProximoAno && (
                    <div className="mt-4 rounded-2xl border border-[#d4af37]/40 bg-[#fffdf5] px-4 py-3">
                      <p className="text-xs leading-6 text-[#8a6a20]">
                        Este período também começa a preparar sua energia para
                        o próximo ano numerológico.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CardNumero({
  titulo,
  numero,
}: {
  titulo: string;
  numero: number | string;
}) {
  return (
    <article className="rounded-[26px] border border-[#d9e1e8] bg-[#f8fafc] p-6 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#607089]">
        {titulo}
      </p>

      <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#123d73] text-3xl font-bold text-[#f6c84f]">
        {numero}
      </div>
    </article>
  );
}