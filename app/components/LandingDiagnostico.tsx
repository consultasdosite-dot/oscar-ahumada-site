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
  imagemMobile?: string;
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

  modoCompacto?: boolean;
  cardEscuro?: boolean;
};

export default function LandingDiagnostico({
  imagem,
  imagemMobile,
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
  modoCompacto = false,
  cardEscuro,
}: LandingDiagnosticoProps) {
  const [valores, setValores] =
    useState<Record<string, string>>({});

  const [resultado, setResultado] =
    useState<ResultadoLanding | null>(null);

  const [erro, setErro] = useState("");

  /*
   * A Compatibilidade usa fotografia muito clara.
   * Por isso recebe automaticamente um card mais
   * escuro para garantir legibilidade.
   *
   * Outras LPs continuam usando o visual anterior.
   */
  const usarCardEscuro =
    cardEscuro ??
    titulo
      .toLowerCase()
      .includes("compatibilidade");

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
      setErro(
        `Preencha: ${campoVazio.label}`
      );
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
            "resultado-diagnostico"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 150);
    } catch {
      setResultado(null);
      setErro(
        "Não foi possível gerar seu diagnóstico."
      );
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

      await navigator.clipboard.writeText(
        url
      );

      alert(
        "Link copiado! Agora você pode compartilhar com seus amigos."
      );
    } catch {
      // compartilhamento cancelado
    }
  }

  return (
    <main className="fixed inset-0 z-[9999] overflow-y-auto overflow-x-hidden bg-[#07192e]">

      {/* PRIMEIRA TELA */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#07192e]">

        {/* IMAGEM MOBILE */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src={
              imagemMobile ?? imagem
            }
            alt={altImagem}
            fill
            priority
            sizes="100vw"
            className={
              modoCompacto
                ? "object-cover object-bottom"
                : "object-cover object-center"
            }
          />
        </div>

        {/* IMAGEM DESKTOP */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={imagem}
            alt={altImagem}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* CONTRASTE DA FOTO */}
        <div
          className={
            usarCardEscuro
              ? "absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/20"
              : modoCompacto
                ? "absolute inset-0 bg-gradient-to-b from-[#04152d]/18 via-[#04152d]/10 to-transparent"
                : "absolute inset-0 bg-gradient-to-b from-[#061326]/10 via-[#061326]/20 to-[#061326]/68"
          }
        />

        {/* CONTEÚDO */}
        <div
          className={
            modoCompacto
              ? "relative z-10 mx-auto flex min-h-[100svh] w-full max-w-xl flex-col items-center px-4 pt-2"
              : "relative z-10 mx-auto flex min-h-[100svh] w-full max-w-xl flex-col px-4 pb-6 pt-5 sm:px-6"
          }
        >

          {/* LOGO */}
          <div className="flex justify-center">
            <div
              className={
                modoCompacto
                  ? "relative h-[58px] w-28 sm:h-[64px] sm:w-32"
                  : "relative h-20 w-36 sm:h-24 sm:w-44"
              }
            >
              <Image
                src="/logos/logo-oa-transparente.png"
                alt="Oscar Ahumada — Numerólogo das Estrelas"
                fill
                priority
                unoptimized
                sizes="176px"
                className="object-contain"
              />
            </div>
          </div>

          {/* TÍTULO */}
          <div
            className={
              usarCardEscuro
                ? "text-center text-[#102a46]"
                : "text-center text-white"
            }
          >
            <p
              className={
                usarCardEscuro
                  ? "text-[8px] font-black uppercase tracking-[0.3em] text-[#203b58]"
                  : modoCompacto
                    ? "text-[8px] font-bold uppercase tracking-[0.3em] text-white/85"
                    : "text-[9px] font-bold uppercase tracking-[0.3em] text-white/85"
              }
            >
              Descubra
            </p>

            <h1
              className={
                modoCompacto
                  ? "mx-auto mt-0.5 max-w-lg text-[24px] font-light uppercase leading-[1] tracking-tight text-[#d39b23] sm:text-[30px]"
                  : "mx-auto mt-1.5 max-w-lg text-[32px] font-light uppercase leading-[1.02] tracking-tight text-[#f6cf68] sm:text-[42px]"
              }
            >
              {titulo}
            </h1>

            <p
              className={
                usarCardEscuro
                  ? "mx-auto mt-1.5 max-w-[410px] text-[10px] font-medium leading-[1rem] text-[#20354d]"
                  : modoCompacto
                    ? "mx-auto mt-1.5 max-w-[390px] text-[9.5px] leading-[0.95rem] text-white/80 sm:text-[10px]"
                    : "mx-auto mt-3 max-w-md text-[12px] leading-[1.4rem] text-white/85"
              }
            >
              {subtitulo}
            </p>
          </div>

          {/* CARD */}
          <form
            onSubmit={
              executarDiagnostico
            }
            className={
              usarCardEscuro
                ? "mx-auto mt-2.5 w-full max-w-[390px] rounded-[18px] border border-white/25 bg-[#07192e]/78 px-4 py-3 shadow-2xl backdrop-blur-[6px]"
                : modoCompacto
                  ? "mx-auto mt-2 w-full max-w-[370px] rounded-[16px] border border-white/15 bg-[#061a35]/15 px-3 py-2.5 shadow-sm backdrop-blur-[0.5px]"
                  : "mx-auto mt-4 w-full rounded-[22px] border border-white/15 bg-[#07192e]/20 px-4 py-4 shadow-lg backdrop-blur-[5px] sm:px-5 sm:py-5"
            }
          >

            {/* CAMPOS */}
            <div
              className={
                usarCardEscuro
                  ? "space-y-2"
                  : modoCompacto
                    ? "space-y-1"
                    : "space-y-2.5"
              }
            >
              {campos.map(
                (campo) => (
                  <div key={campo.id}>
                    <label
                      htmlFor={
                        campo.id
                      }
                      className={
                        usarCardEscuro
                          ? "block text-[8px] font-black uppercase tracking-[0.1em] text-white"
                          : modoCompacto
                            ? "block text-[7.5px] font-bold uppercase tracking-[0.08em] text-white/90"
                            : "block text-[9px] font-bold uppercase tracking-[0.1em] text-white/90"
                      }
                    >
                      {
                        campo.label
                      }
                    </label>

                    <input
                      id={campo.id}
                      type={
                        campo.tipo ??
                        "text"
                      }
                      value={
                        valores[
                          campo.id
                        ] ?? ""
                      }
                      onChange={(
                        event
                      ) =>
                        atualizarCampo(
                          campo.id,
                          event.target
                            .value
                        )
                      }
                      placeholder={
                        campo.placeholder
                      }
                      required={
                        campo.obrigatorio !==
                        false
                      }
                      className={
                        usarCardEscuro
                          ? "w-full border-0 border-b border-[#e7b83f]/65 bg-transparent px-0 py-1.5 text-[13px] font-medium text-white outline-none placeholder:text-white/65 focus:border-[#f6cf68] [color-scheme:dark]"
                          : modoCompacto
                            ? "w-full border-0 border-b border-[#f6cf68]/35 bg-transparent px-0 py-[3px] text-[12px] text-white outline-none placeholder:text-white/45 focus:border-[#f6cf68]"
                            : "w-full border-0 border-b border-[#f6cf68]/40 bg-transparent px-0.5 py-1.5 text-[14px] text-white outline-none placeholder:text-white/45 focus:border-[#f6cf68]"
                      }
                    />
                  </div>
                )
              )}
            </div>

            {/* TEXTO AUXILIAR */}
            <p
              className={
                usarCardEscuro
                  ? "mx-auto mt-2.5 max-w-[340px] text-center text-[9px] font-medium leading-[0.9rem] text-white/90"
                  : modoCompacto
                    ? "mx-auto mt-1.5 max-w-[320px] text-center text-[8px] leading-[0.8rem] text-white/75"
                    : "mx-auto mt-3 max-w-sm text-center text-[11px] leading-[1.15rem] text-white/75"
              }
            >
              {textoAntesBotao}
            </p>

            {erro && (
              <div className="mt-2 rounded-lg border border-red-300/40 bg-red-600/25 px-3 py-2 text-center text-[10px] font-semibold text-white">
                {erro}
              </div>
            )}

            {/* BOTÃO PRINCIPAL */}
            <button
              type="submit"
              className={
                usarCardEscuro
                  ? "mt-3 w-full rounded-full bg-gradient-to-r from-[#e9b83e] via-[#ffd363] to-[#e9b83e] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.035em] text-[#102d50] shadow-md transition hover:brightness-105 active:scale-[0.98]"
                  : modoCompacto
                    ? "mt-2 w-full rounded-full bg-gradient-to-r from-[#eebd42] via-[#f6cf68] to-[#eebd42] px-3 py-2 text-[9px] font-black uppercase tracking-[0.03em] text-[#123d73] shadow-sm transition hover:brightness-105 active:scale-[0.98]"
                    : "mt-3.5 w-full rounded-full bg-gradient-to-r from-[#eebd42] via-[#f6cf68] to-[#eebd42] px-4 py-3 text-[11px] font-black uppercase tracking-[0.04em] text-[#123d73] shadow-md transition hover:brightness-105 active:scale-[0.98]"
              }
            >
              {textoBotao}
            </button>

            {/* BOTÕES SECUNDÁRIOS */}
            <div
              className={
                modoCompacto
                  ? "mt-2 grid grid-cols-2 gap-2"
                  : "mt-2 space-y-2"
              }
            >
              <button
                type="button"
                onClick={
                  compartilharLanding
                }
                className={
                  usarCardEscuro
                    ? "rounded-full border border-white/45 bg-white/[0.04] px-2 py-2 text-[7.5px] font-bold uppercase tracking-[0.05em] text-white transition hover:bg-white/10"
                    : modoCompacto
                      ? "rounded-full border border-white/20 bg-white/[0.02] px-2 py-1.5 text-[7px] font-bold uppercase tracking-[0.04em] text-white/90 transition hover:bg-white/10"
                      : "w-full rounded-full border border-white/25 bg-white/[0.03] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.07em] text-white/90 transition hover:bg-white/10"
                }
              >
                COMPARTILHE
              </button>

              <a
                href="https://www.aurameets.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  usarCardEscuro
                    ? "flex items-center justify-center rounded-full border border-[#f6cf68]/60 bg-[#07192e]/30 px-2 py-2 text-center text-[7.5px] font-bold uppercase tracking-[0.05em] text-[#ffd363]"
                    : modoCompacto
                      ? "flex items-center justify-center rounded-full border border-[#f6cf68]/30 bg-transparent px-2 py-1.5 text-center text-[7px] font-bold uppercase tracking-[0.04em] text-[#f6cf68]"
                      : "flex w-full items-center justify-center rounded-full border border-[#f6cf68]/35 bg-transparent px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.07em] text-[#f6cf68]"
                }
              >
                MAIS PRESENTES &gt;&gt;
              </a>
            </div>
          </form>

          {/* MARCA DISCRETA */}
          {!modoCompacto && (
            <div className="mt-auto pt-2 text-center text-white">
              <p className="text-[9px] font-medium tracking-[0.2em]">
                OSCAR AHUMADA
              </p>

              <p className="mt-0.5 text-[7px] uppercase tracking-[0.24em] text-[#f6cf68]">
                Numerólogo das Estrelas
              </p>
            </div>
          )}
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

              {resultado.numero !==
                undefined && (
                <div className="mx-auto mt-4 flex min-h-16 min-w-16 w-fit items-center justify-center rounded-full bg-[#123d73] px-4 text-xl font-black text-[#f6c84f] shadow-lg">
                  {
                    resultado.numero
                  }
                </div>
              )}

              <h2 className="mx-auto mt-4 max-w-md text-2xl font-semibold leading-tight text-[#123d73]">
                {resultado.titulo}
              </h2>
            </div>

            <p className="mt-6 text-[16px] leading-8 text-[#405675]">
              {
                resultado.diagnostico
              }
            </p>

            {resultado.positivo && (
              <div className="mt-6 rounded-[22px] bg-white p-5 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#246aa7]">
                  O que essa combinação favorece
                </p>

                <p className="mt-3 leading-7 text-[#405675]">
                  {
                    resultado.positivo
                  }
                </p>
              </div>
            )}

            {resultado.atencao && (
              <div className="mt-4 rounded-[22px] bg-[#fff8e8] p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#a77a18]">
                  O que merece sua atenção
                </p>

                <p className="mt-3 leading-7 text-[#405675]">
                  {
                    resultado.atencao
                  }
                </p>
              </div>
            )}

            {resultado.orientacao && (
              <div className="mt-4 rounded-[22px] bg-[#123d73] p-5 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#f6c84f]">
                  Orientação de Oscar Ahumada
                </p>

                <p className="mt-3 leading-7 text-blue-50">
                  {
                    resultado.orientacao
                  }
                </p>
              </div>
            )}

            {/* CONSULTA */}
            <div className="mt-9 text-center">
              <h3 className="text-2xl font-semibold leading-tight text-[#123d73]">
                {
                  tituloPosDiagnostico
                }
              </h3>

              <p className="mx-auto mt-4 max-w-md leading-7 text-[#607089]">
                {
                  textoPosDiagnostico
                }
              </p>

              <a
                href={linkWhatsAppOscar(
                  valores,
                  resultado
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f6c84f] px-5 py-4 text-center text-[13px] font-black uppercase tracking-[0.05em] text-[#123d73] shadow-lg transition hover:bg-[#ffda70]"
              >
                {textoBotaoOscar}
              </a>

              <button
                type="button"
                onClick={
                  compartilharLanding
                }
                className="mt-3 w-full rounded-full border border-[#123d73]/20 bg-white px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#123d73]"
              >
                COMPARTILHE COM SEUS AMIGOS
              </button>

              <a
                href="https://www.aurameets.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-[#c29629]/40 px-5 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.06em] text-[#a77a18]"
              >
                QUERO MAIS PRESENTES &gt;&gt;&gt;
              </a>
            </div>

            {/* LOGO FINAL */}
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