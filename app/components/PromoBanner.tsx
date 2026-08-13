"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type TempoRestante = {
  horas: number;
  minutos: number;
  segundos: number;
  terminou: boolean;
};

function calcularTempoRestante(): TempoRestante {
  const agora = new Date();

  const fimDoDia = new Date();
  fimDoDia.setHours(23, 59, 59, 999);

  const diferenca = fimDoDia.getTime() - agora.getTime();

  if (diferenca <= 0) {
    return {
      horas: 0,
      minutos: 0,
      segundos: 0,
      terminou: true,
    };
  }

  const horas = Math.floor(diferenca / (1000 * 60 * 60));
  const minutos = Math.floor(
    (diferenca % (1000 * 60 * 60)) / (1000 * 60)
  );
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  return {
    horas,
    minutos,
    segundos,
    terminou: false,
  };
}

function formatarNumero(numero: number) {
  return String(numero).padStart(2, "0");
}

export default function PromoBanner() {
  const [tempo, setTempo] = useState<TempoRestante>(() =>
    calcularTempoRestante()
  );

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setTempo(calcularTempoRestante());
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  const textoContagem = useMemo(() => {
    return `${formatarNumero(tempo.horas)}:${formatarNumero(
      tempo.minutos
    )}:${formatarNumero(tempo.segundos)}`;
  }, [tempo]);

  if (tempo.terminou) {
    return null;
  }

  return (
    <section className="border-b border-[#e5c96f] bg-gradient-to-r from-[#fff7d8] via-[#ffe996] to-[#fff7d8] px-4 py-4 text-[#123d73]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a77600]">
            Oferta especial de hoje
          </p>

          <h2 className="mt-1 text-lg font-bold leading-snug sm:text-xl">
            Mapa Numerológico Pessoal Completo + Previsões 2026 e 2027 +
            Consulta Online
          </h2>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="text-sm font-semibold text-[#6f7d8e] line-through">
              R$ 800,00
            </span>

            <span className="text-2xl font-extrabold text-[#9d6b00]">
              R$ 444,00
            </span>

            <span className="rounded-full bg-[#123d73] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
              somente hoje
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <div className="rounded-[18px] border border-[#cfae47] bg-white/80 px-5 py-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e742b]">
              Termina em
            </p>

            <p className="mt-1 font-mono text-2xl font-extrabold tracking-[0.08em] text-[#123d73]">
              {textoContagem}
            </p>
          </div>

          <Link
            href="/solicitar-mapa"
            className="rounded-full bg-[#123d73] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1f629d]"
          >
            Quero aproveitar R$ 444,00
          </Link>
        </div>
      </div>
    </section>
  );
}