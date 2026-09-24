"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function TransicaoPage() {
  const router = useRouter();

  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [erro, setErro] = useState("");

  function reduzirNumero(numero: number): number {
    let resultado = numero;

    while (resultado > 9) {
      resultado = String(resultado)
        .split("")
        .reduce((soma, digito) => soma + Number(digito), 0);
    }

    return resultado;
  }

  function descobrirTransicao(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");

    const diaNumero = Number(dia);
    const mesNumero = Number(mes);

    if (
      !Number.isInteger(diaNumero) ||
      diaNumero < 1 ||
      diaNumero > 31 ||
      !Number.isInteger(mesNumero) ||
      mesNumero < 1 ||
      mesNumero > 12
    ) {
      setErro("Digite um dia e um mês válidos.");
      return;
    }

    const soma2026 =
      String(diaNumero)
        .split("")
        .reduce((soma, numero) => soma + Number(numero), 0) +
      String(mesNumero)
        .split("")
        .reduce((soma, numero) => soma + Number(numero), 0) +
      2 +
      0 +
      2 +
      6;

    const anoPessoal2026 = reduzirNumero(soma2026);

    router.push(`/transicao${anoPessoal2026}`);
  }

  return (
    <main className="bg-[#17130f]">
      <section className="relative md:min-h-screen md:overflow-hidden">
        {/* MOBILE - FOTO SEM CORTE EXAGERADO */}
        <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:hidden">
          <div
            className="absolute inset-0 bg-contain bg-top bg-no-repeat"
            style={{
              backgroundImage: "url('/transicao-2027.png')",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#17130f]" />
        </div>

        {/* DESKTOP - MANTÉM O VISUAL ATUAL */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: "url('/transicao-2027.png')",
          }}
        />

        <div className="absolute inset-0 hidden bg-black/10 md:block" />

        <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-black/10 to-black/45 md:block" />

        {/* CONTEÚDO */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-8 md:flex md:min-h-screen md:items-center md:justify-end md:px-10 md:py-12 lg:px-16">
          <div className="w-full md:w-[52%] lg:w-[48%]">
            <div className="-mt-5 rounded-[24px] border border-white/15 bg-[#17130f] p-5 shadow-2xl sm:p-7 md:mt-0 md:rounded-[28px] md:bg-[#17130f]/80 md:p-8 md:backdrop-blur-md lg:p-10">
              <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#e9bd62] md:mb-3 md:text-left md:text-sm">
                Numerologia Latina
              </p>

              <h1 className="text-center font-serif text-[34px] font-semibold leading-[1.03] text-white sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
                Saiba como será a sua{" "}
                <span className="text-[#f1c96f]">transição</span> para 2027
              </h1>

              <div className="mx-auto my-4 h-px w-20 bg-[#e9bd62] md:mx-0 md:my-6 md:w-24" />

              <p className="text-center text-base leading-relaxed text-white/90 md:text-left md:text-xl">
                Digite somente seu{" "}
                <strong className="text-[#f1c96f]">dia e mês</strong> de
                nascimento e surpreenda-se.
              </p>

              <form onSubmit={descobrirTransicao} className="mt-5 md:mt-7">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="dia"
                      className="mb-2 block text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 md:text-left md:text-xs"
                    >
                      Dia
                    </label>

                    <input
                      id="dia"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max="31"
                      value={dia}
                      onChange={(event) => setDia(event.target.value)}
                      placeholder="DD"
                      className="h-14 w-full rounded-xl border border-[#d7a947] bg-white px-3 text-center text-xl font-bold text-[#29231d] outline-none transition focus:border-[#f1c96f] focus:ring-4 focus:ring-[#e9bd62]/20 sm:h-16 md:h-[72px] md:rounded-2xl md:px-5 md:text-2xl"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mes"
                      className="mb-2 block text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 md:text-left md:text-xs"
                    >
                      Mês
                    </label>

                    <input
                      id="mes"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max="12"
                      value={mes}
                      onChange={(event) => setMes(event.target.value)}
                      placeholder="MM"
                      className="h-14 w-full rounded-xl border border-[#d7a947] bg-white px-3 text-center text-xl font-bold text-[#29231d] outline-none transition focus:border-[#f1c96f] focus:ring-4 focus:ring-[#e9bd62]/20 sm:h-16 md:h-[72px] md:rounded-2xl md:px-5 md:text-2xl"
                    />
                  </div>
                </div>

                {erro && (
                  <p className="mt-3 rounded-xl bg-red-950/70 px-4 py-3 text-center text-sm font-semibold text-red-100">
                    {erro}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-4 flex min-h-[58px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#e3ad43] via-[#f4ce78] to-[#e3ad43] px-4 text-center text-[13px] font-extrabold uppercase tracking-[0.05em] text-[#211a12] shadow-[0_12px_35px_rgba(226,171,66,0.28)] transition active:scale-[0.99] md:mt-5 md:min-h-[64px] md:rounded-2xl md:px-5 md:text-base"
                >
                  Descobrir minha transição
                  <span className="ml-2 text-xl md:ml-3 md:text-2xl">→</span>
                </button>
              </form>

              <p className="mt-4 text-center text-xs leading-5 text-white/60 md:mt-5">
                Resultado imediato e gratuito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}