"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import type { CampoLandingConfig } from "../data/landingPages";

export type ResultadoLandingPremium = {
  numero?: number | string;
  titulo: string;
  diagnostico: string;
  positivo?: string;
  atencao?: string;
  orientacao?: string;
};

type LandingDiagnosticoPremiumProps = {
  imagem: string;
  altImagem: string;

  titulo: string;
  subtitulo: string;

  campos: CampoLandingConfig[];

  textoAntesBotao: string;
  textoBotao: string;

  calcular: (
    valores: Record<string, string>
  ) => ResultadoLandingPremium | null;

  tituloPosDiagnostico: string;
  textoPosDiagnostico: string;
  textoBotaoOscar: string;

  linkWhatsAppOscar: (
    valores: Record<string, string>,
    resultado: ResultadoLandingPremium
  ) => string;
};

export default function LandingDiagnosticoPremium({
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
}: LandingDiagnosticoPremiumProps) {
  const [valores, setValores] =
    useState<Record<string, string>>({});

  const [resultado, setResultado] =
    useState<ResultadoLandingPremium | null>(null);

  const [erro, setErro] = useState("");

  function atualizarCampo(
    id: string,
    valor: string
  ) {
    setValores((anterior) => ({
      ...anterior,
      [id]: valor,
    }));

    setErro("");
    setResultado(null);
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
      const novoResultado =
        calcular(valores);

      if (!novoResultado) {
        setErro(
          "Não foi possível gerar seu diagnóstico."
        );
        return;
      }

      setResultado(novoResultado);
      setErro("");

      window.setTimeout(() => {
        document
          .getElementById(
            "resultado-diagnostico-premium"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 150);
    } catch {
      setErro(
        "Não foi possível gerar seu diagnóstico."
      );
      setResultado(null);
    }
  }

  async function compartilharLanding() {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : "";

    const dados = {
      title: titulo,
      text: `${titulo} — faça seu diagnóstico com Oscar Ahumada.`,
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
      // usuário cancelou
    }
  }

  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#17395f]">
      {/* PRIMEIRO BLOCO */}
      <section className="mx-auto flex min-h-screen w-full max-w-[1320px] items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(20,40,70,0.12)] lg:grid-cols-[0.92fr_1.08fr]">

          {/* FOTO */}
          <div className="relative min-h-[320px] bg-[#e9e3d7] sm:min-h-[420px] lg:min-h-[760px]">
            <Image
              src={imagem}
              alt={altImagem}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07192e]/28 via-transparent to-transparent" />

            {/* LOGO SOBRE FOTO NO DESKTOP */}
            <div className="absolute left-5 top-5 hidden lg:block">
              <div className="relative h-20 w-36">
                <Image
                  src="/logos/logo-oa-transparente.png"
                  alt="Oscar Ahumada"
                  fill
                  unoptimized
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="flex flex-col justify-center bg-[#0c2745] px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-12">

            {/* LOGO MOBILE/TABLET */}
            <div className="mb-4 flex justify-center lg:hidden">
              <div className="relative h-16 w-28">
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

            {/* CABEÇALHO */}
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#dcb64b]">
                Oscar Ahumada
              </p>

              <h1 className="mt-2 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                {titulo}
              </h1>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75 lg:mx-0">
                {subtitulo}
              </p>
            </div>

            {/* FORMULÁRIO */}
            <form
              onSubmit={executarDiagnostico}
              className="mt-6"
            >
              <div className="grid gap-4">
                {campos.map((campo) => (
                  <div key={campo.id}>
                    <label
                      htmlFor={campo.id}
                      className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.08em] text-white/85"
                    >
                      {campo.label}
                    </label>

                    <input
                      id={campo.id}
                      type={campo.tipo ?? "text"}
                      value={
                        valores[campo.id] ?? ""
                      }
                      onChange={(event) =>
                        atualizarCampo(
                          campo.id,
                          event.target.value
                        )
                      }
                      placeholder={campo.placeholder}
                      required={
                        campo.obrigatorio !== false
                      }
                      className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#dcb64b] focus:bg-white/[0.08]"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-[12px] leading-5 text-white/70 lg:text-left">
                {textoAntesBotao}
              </p>

              {erro && (
                <div className="mt-3 rounded-xl border border-red-300/25 bg-red-500/15 px-4 py-3 text-center text-sm font-semibold text-white">
                  {erro}
                </div>
              )}

              {/* CTA PRINCIPAL */}
              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-gradient-to-r from-[#e7b63f] via-[#f6cf68] to-[#e7b63f] px-5 py-3.5 text-[12px] font-black uppercase tracking-[0.04em] text-[#14375e] shadow-lg transition hover:brightness-105 active:scale-[0.99]"
              >
                {textoBotao}
              </button>

              {/* SECUNDÁRIOS */}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={compartilharLanding}
                  className="rounded-full border border-white/20 bg-white/[0.03] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.05em] text-white/90 transition hover:bg-white/[0.08]"
                >
                  COMPARTILHE COM SEUS AMIGOS
                </button>

                <a
                  href="https://www.aurameets.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full border border-[#dcb64b]/40 px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.05em] text-[#f6cf68] transition hover:bg-white/[0.05]"
                >
                  QUERO MAIS PRESENTES &gt;&gt;&gt;
                </a>
              </div>
            </form>

            <div className="mt-6 border-t border-white/10 pt-4 text-center lg:text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Oscar Ahumada — Numerólogo das Estrelas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      {resultado && (
        <section
          id="resultado-diagnostico-premium"
          className="bg-[#f7f4ed]"
        >
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b88b21]">
                Seu diagnóstico personalizado
              </p>

              {resultado.numero !== undefined && (
                <div className="mx-auto mt-4 flex min-h-16 min-w-16 w-fit items-center justify-center rounded-full bg-[#17395f] px-5 text-xl font-black text-[#f6cf68]">
                  {resultado.numero}
                </div>
              )}

              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold leading-tight text-[#17395f] sm:text-3xl">
                {resultado.titulo}
              </h2>
            </div>

            {/* DIAGNÓSTICO */}
            <div className="mt-7 rounded-[24px] bg-white p-6 shadow-sm sm:p-8">
              <p className="whitespace-pre-line text-[16px] leading-8 text-[#405675]">
                {resultado.diagnostico}
              </p>
            </div>

            {/* POSITIVOS */}
            {resultado.positivo && (
              <div className="mt-5 rounded-[22px] border border-[#dce6ef] bg-white p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#27689d]">
                  O que essa energia favorece
                </p>

                <p className="mt-3 whitespace-pre-line leading-7 text-[#405675]">
                  {resultado.positivo}
                </p>
              </div>
            )}

            {/* ATENÇÃO */}
            {resultado.atencao && (
              <div className="mt-5 rounded-[22px] border border-[#f0dfb8] bg-[#fff9ed] p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#9d771d]">
                  O que merece sua atenção
                </p>

                <p className="mt-3 whitespace-pre-line leading-7 text-[#405675]">
                  {resultado.atencao}
                </p>
              </div>
            )}

            {/* ORIENTAÇÃO */}
            {resultado.orientacao && (
              <div className="mt-5 rounded-[22px] bg-[#17395f] p-6 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#f6cf68]">
                  Orientação de Oscar Ahumada
                </p>

                <p className="mt-3 whitespace-pre-line leading-7 text-white/85">
                  {resultado.orientacao}
                </p>
              </div>
            )}

            {/* CTA FINAL */}
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold leading-tight text-[#17395f]">
                {tituloPosDiagnostico}
              </h3>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#65768b]">
                {textoPosDiagnostico}
              </p>

              <a
                href={linkWhatsAppOscar(
                  valores,
                  resultado
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f6cf68] px-5 py-4 text-center text-[12px] font-black uppercase tracking-[0.05em] text-[#17395f] shadow-lg"
              >
                {textoBotaoOscar}
              </a>

              <button
                type="button"
                onClick={compartilharLanding}
                className="mt-3 w-full rounded-full border border-[#17395f]/20 bg-white px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.05em] text-[#17395f]"
              >
                COMPARTILHE COM SEUS AMIGOS
              </button>

              <a
                href="https://www.aurameets.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-[#b88b21]/30 bg-transparent px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.05em] text-[#9d771d]"
              >
                QUERO MAIS PRESENTES &gt;&gt;&gt;
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}