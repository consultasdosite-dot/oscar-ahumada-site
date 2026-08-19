"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import type { CampoLandingConfig } from "../data/landingPages";

export type ResultadoLanding = {
  numero?: number | string;
  titulo: string;
  diagnostico: string;
  positivo?: string;
  atencao?: string;
  orientacao?: string;
};

type LandingDiagnosticoProps = {
  imagem: string;
  altImagem: string;

  titulo: string;
  subtitulo: string;

  campos: CampoLandingConfig[];

  textoAntesBotao: string;
  textoBotao: string;

  calcular: (
    valores: Record<string, string>
  ) => ResultadoLanding | null;

  tituloPosDiagnostico: string;
  textoPosDiagnostico: string;
  textoBotaoOscar: string;

  linkWhatsAppOscar: (
    valores: Record<string, string>,
    resultado: ResultadoLanding
  ) => string;
};

export default function LandingDiagnostico({
  imagem,
  altImagem,
  titulo,
  subtitulo,
  campos,
  textoAntesBotao,
  textoBotao,
  calcular,
  tituloPosDiagnostico,
  textoPosDiagnostico,
  textoBotaoOscar,
  linkWhatsAppOscar,
}: LandingDiagnosticoProps) {
  const [valores, setValores] = useState<Record<string, string>>({});
  const [resultado, setResultado] =
    useState<ResultadoLanding | null>(null);

  const [erro, setErro] = useState("");

  function atualizarCampo(
    id: string,
    valor: string
  ) {
    setValores((anterior) => ({
      ...anterior,
      [id]: valor,
    }));

    setResultado(null);
    setErro("");
  }

  function executarDiagnostico(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const campoVazio = campos.find(
      (campo) =>
        campo.obrigatorio !== false &&
        !valores[campo.id]?.trim()
    );

    if (campoVazio) {
      setErro(`Preencha: ${campoVazio.label}`);
      return;
    }

    try {
      const novoResultado = calcular(valores);

      if (!novoResultado) {
        setErro("Não foi possível gerar seu diagnóstico.");
        return;
      }

      setResultado(novoResultado);
      setErro("");

      window.setTimeout(() => {
        document
          .getElementById("resultado-diagnostico")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 150);
    } catch {
      setResultado(null);
      setErro("Não foi possível gerar seu diagnóstico.");
    }
  }

  async function compartilharLanding() {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : "";

    const dados = {
      title: titulo,
      text: `${titulo} — descubra seu diagnóstico personalizado com Oscar Ahumada.`,
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(dados);
        return;
      }

      await navigator.clipboard.writeText(url);

      alert(
        "Link copiado! Agora você pode compartilhar com seus amigos."
      );
    } catch {
      // Compartilhamento cancelado pelo usuário
    }
  }

  return (
    <main className="fixed inset-0 z-[9999] overflow-y-auto bg-[#07192e]">

      {/* PRIMEIRA TELA */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">

        {/* IMAGEM DE FUNDO */}
        <Image
          src={imagem}
          alt={altImagem}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* ESCURECIMENTO SUTIL */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061326]/20 via-[#061326]/35 to-[#061326]/80" />

        {/* CONTEÚDO */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-xl flex-col px-4 pb-7 pt-5 sm:px-6 sm:pb-10 sm:pt-7">

          {/* LOGO OA TRANSPARENTE */}
          <div className="flex justify-center">
            <div className="relative h-24 w-40 sm:h-28 sm:w-48">
              <Image
                src="/logos/logo-oa-transparente.png"
                alt="Oscar Ahumada — Numerólogo das Estrelas"
                fill
                priority
                unoptimized
                sizes="192px"
                className="object-contain"
              />
            </div>
          </div>

          {/* TÍTULO DINÂMICO */}
          <div className="mt-1 text-center text-white">

            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/90">
              Descubra
            </p>

            <h1 className="mx-auto mt-2 max-w-lg text-4xl font-light uppercase leading-[1.05] tracking-tight text-[#f6cf68] sm:text-5xl">
              {titulo}
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/90">
              {subtitulo}
            </p>

          </div>

          {/* CARD TRANSPARENTE */}
          <form
            onSubmit={executarDiagnostico}
            className="mt-6 rounded-[30px] border border-white/20 bg-[#07192e]/35 p-5 shadow-2xl backdrop-blur-md sm:p-6"
          >
            <div className="space-y-4">
              {campos.map((campo) => (
                <div key={campo.id}>
                  <label
                    htmlFor={campo.id}
                    className="mb-1 block text-[11px] font-black uppercase tracking-[0.1em] text-white"
                  >
                    {campo.label}
                  </label>

                  <input
                    id={campo.id}
                    type={campo.tipo ?? "text"}
                    value={valores[campo.id] ?? ""}
                    onChange={(event) =>
                      atualizarCampo(
                        campo.id,
                        event.target.value
                      )
                    }
                    placeholder={campo.placeholder}
                    required={campo.obrigatorio !== false}
                    className="w-full border-0 border-b border-[#f6cf68]/55 bg-transparent px-1 py-3 text-base text-white outline-none placeholder:text-white/55 focus:border-[#f6cf68]"
                  />
                </div>
              ))}
            </div>

            <p className="mx-auto mt-5 max-w-sm text-center text-[13px] leading-5 text-white/90">
              {textoAntesBotao}
            </p>

            {erro && (
              <div className="mt-4 rounded-2xl border border-red-300/30 bg-red-500/15 px-4 py-3 text-center text-sm font-semibold text-white">
                {erro}
              </div>
            )}

            {/* CTA PRINCIPAL */}
            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-gradient-to-r from-[#eebd42] via-[#f6cf68] to-[#eebd42] px-5 py-4 text-[13px] font-black uppercase tracking-[0.04em] text-[#123d73] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
            >
              {textoBotao}
            </button>

            {/* COMPARTILHAR */}
            <button
              type="button"
              onClick={compartilharLanding}
              className="mt-3 w-full rounded-full border border-white/35 bg-white/5 px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:bg-white/10 active:scale-[0.98]"
            >
              COMPARTILHE COM SEUS AMIGOS
            </button>

            {/* AURAMEETS */}
            <a
              href="https://www.aurameets.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-[#f6cf68]/55 bg-[#07192e]/20 px-5 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-[#f6cf68] backdrop-blur-md transition hover:bg-white/10 active:scale-[0.98]"
            >
              QUERO MAIS PRESENTES &gt;&gt;&gt;
            </a>
          </form>

          {/* MARCA DISCRETA */}
          <div className="mt-auto pt-6 text-center text-white">
            <p className="text-sm font-medium tracking-[0.22em]">
              OSCAR AHUMADA
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#f6cf68]">
              Numerólogo das Estrelas
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      {resultado && (
        <section
          id="resultado-diagnostico"
          className="scroll-mt-0 bg-[#f8f5ef]"
        >
          <div className="mx-auto max-w-xl px-5 py-10 sm:px-8 sm:py-14">

            <div className="text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#c29629]">
                Seu diagnóstico personalizado
              </p>

              {resultado.numero !== undefined && (
                <div className="mx-auto mt-4 flex min-h-16 min-w-16 w-fit items-center justify-center rounded-full bg-[#123d73] px-4 text-xl font-black text-[#f6c84f] shadow-lg">
                  {resultado.numero}
                </div>
              )}

              <h2 className="mx-auto mt-4 max-w-md text-2xl font-semibold leading-tight text-[#123d73]">
                {resultado.titulo}
              </h2>
            </div>

            {/* DIAGNÓSTICO */}
            <p className="mt-6 text-[16px] leading-8 text-[#405675]">
              {resultado.diagnostico}
            </p>

            {/* PONTOS POSITIVOS */}
            {resultado.positivo && (
              <div className="mt-6 rounded-[22px] bg-white p-5 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#246aa7]">
                  O que essa combinação favorece
                </p>

                <p className="mt-3 leading-7 text-[#405675]">
                  {resultado.positivo}
                </p>
              </div>
            )}

            {/* ATENÇÃO */}
            {resultado.atencao && (
              <div className="mt-4 rounded-[22px] bg-[#fff8e8] p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#a77a18]">
                  O que merece sua atenção
                </p>

                <p className="mt-3 leading-7 text-[#405675]">
                  {resultado.atencao}
                </p>
              </div>
            )}

            {/* ORIENTAÇÃO */}
            {resultado.orientacao && (
              <div className="mt-4 rounded-[22px] bg-[#123d73] p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#f6c84f]">
                  Orientação de Oscar Ahumada
                </p>

                <p className="mt-3 leading-7 text-blue-50">
                  {resultado.orientacao}
                </p>
              </div>
            )}

            {/* CONSULTA */}
            <div className="mt-9 text-center">
              <h3 className="text-2xl font-semibold leading-tight text-[#123d73]">
                {tituloPosDiagnostico}
              </h3>

              <p className="mx-auto mt-4 max-w-md leading-7 text-[#607089]">
                {textoPosDiagnostico}
              </p>

              <a
                href={linkWhatsAppOscar(
                  valores,
                  resultado
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f6c84f] px-5 py-4 text-center text-[13px] font-black uppercase tracking-[0.05em] text-[#123d73] shadow-lg transition hover:bg-[#ffda70] active:scale-[0.98]"
              >
                {textoBotaoOscar}
              </a>

              {/* COMPARTILHAR RESULTADO */}
              <button
                type="button"
                onClick={compartilharLanding}
                className="mt-3 w-full rounded-full border border-[#123d73]/20 bg-white px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#123d73]"
              >
                COMPARTILHE COM SEUS AMIGOS
              </button>

              {/* AURAMEETS */}
              <a
                href="https://www.aurameets.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-[#c29629]/40 bg-transparent px-5 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.06em] text-[#a77a18]"
              >
                QUERO MAIS PRESENTES &gt;&gt;&gt;
              </a>
            </div>

            {/* RODAPÉ MÍNIMO */}
            <div className="mt-9 border-t border-[#e7dfd0] pt-6 text-center">
              <div className="relative mx-auto h-16 w-28">
                <Image
                  src="/logos/logo-oa-transparente.png"
                  alt="Oscar Ahumada"
                  fill
                  unoptimized
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}