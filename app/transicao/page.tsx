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

    /*
      TRANSIÇÃO 2026 → 2027

      Exemplo: 15/08

      15 + 08 + 2026
      1 + 5 + 0 + 8 + 2 + 0 + 2 + 6
      = 24
      = 6

      Portanto:
      Ano Pessoal 6 → Ano Pessoal 7
      Página: /transicao6
    */

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
    <main className="min-h-screen bg-[#17130f]">
      <section className="relative min-h-screen overflow-hidden">
        {/* IMAGEM DE FUNDO */}
        <div
          className="absolute inset-0 bg-cover bg-[32%_center] bg-no-repeat md:bg-center"
          style={{
            backgroundImage: "url('/transicao-2027.png')",
          }}
        />

        {/* ESCURECIMENTO PARA DAR LEITURA */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/10" />

        {/* MOBILE: degradê para separar foto e formulário */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/80 md:bg-gradient-to-r md:from-transparent md:via-black/10 md:to-black/45" />

        {/* CONTEÚDO */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-end px-5 pb-8 pt-[48vh] md:items-center md:justify-end md:px-10 md:py-12 lg:px-16">
          <div className="w-full md:w-[52%] lg:w-[48%]">
            <div className="rounded-[28px] border border-white/15 bg-[#17130f]/80 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e9bd62] sm:text-sm">
                Numerologia Latina
              </p>

              <h1 className="font-serif text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                Saiba como será a sua{" "}
                <span className="text-[#f1c96f]">transição</span> para 2027
              </h1>

              <div className="my-6 h-px w-24 bg-[#e9bd62]" />

              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                Digite somente seu{" "}
                <strong className="text-[#f1c96f]">dia e mês</strong> de
                nascimento e surpreenda-se.
              </p>

              <form
                onSubmit={descobrirTransicao}
                className="mt-7"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="dia"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/70"
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
                      className="h-16 w-full rounded-2xl border border-[#d7a947] bg-white px-5 text-center text-2xl font-bold text-[#29231d] outline-none transition focus:border-[#f1c96f] focus:ring-4 focus:ring-[#e9bd62]/20 sm:h-[72px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mes"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/70"
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
                      className="h-16 w-full rounded-2xl border border-[#d7a947] bg-white px-5 text-center text-2xl font-bold text-[#29231d] outline-none transition focus:border-[#f1c96f] focus:ring-4 focus:ring-[#e9bd62]/20 sm:h-[72px]"
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
                  className="mt-5 flex min-h-[64px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#e3ad43] via-[#f4ce78] to-[#e3ad43] px-5 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-[#211a12] shadow-[0_12px_35px_rgba(226,171,66,0.28)] transition hover:scale-[1.01] active:scale-[0.99] sm:text-base"
                >
                  Descobrir minha transição
                  <span className="ml-3 text-2xl">→</span>
                </button>
              </form>

              <p className="mt-5 text-center text-xs leading-5 text-white/60">
                Resultado imediato e gratuito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}