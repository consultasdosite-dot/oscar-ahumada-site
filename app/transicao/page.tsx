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
      2 + 0 + 2 + 6;

    const anoPessoal2026 = reduzirNumero(soma2026);
    router.push(`/transicao${anoPessoal2026}`);
  }

  return (
    <main className="min-h-screen bg-[#17130f]">
      {/* MOBILE — mantido sem alterações */}
      <section className="relative mx-auto w-full md:hidden">
        <img
          src="/transicao-2027-mobile.png"
          alt="Saiba como será a sua transição para 2027"
          className="block h-auto w-full"
        />

        <form onSubmit={descobrirTransicao} className="absolute inset-0">
          {/* DIA */}
          <input
            type="number"
            inputMode="numeric"
            min="1"
            max="31"
            value={dia}
            onChange={(event) => setDia(event.target.value)}
            aria-label="Dia de nascimento"
            className="absolute left-[9%] top-[68%] h-[6%] w-[42%] rounded-xl border-0 bg-white px-2 text-center text-xl font-bold text-[#29231d] outline-none"
          />

          {/* MÊS */}
          <input
            type="number"
            inputMode="numeric"
            min="1"
            max="12"
            value={mes}
            onChange={(event) => setMes(event.target.value)}
            aria-label="Mês de nascimento"
            className="absolute left-[54%] top-[68%] h-[6%] w-[37%] rounded-xl border-0 bg-white px-2 text-center text-xl font-bold text-[#29231d] outline-none"
          />

          {/* BOTÃO */}
          <button
            type="submit"
            aria-label="Descobrir minha transição"
            className="absolute left-[9%] top-[76%] h-[6.5%] w-[82%] cursor-pointer rounded-xl bg-transparent"
          />

          {erro && (
            <div className="absolute left-[10%] top-[83%] w-[80%] rounded-lg bg-red-700 px-3 py-2 text-center text-xs font-semibold text-white">
              {erro}
            </div>
          )}
        </form>
      </section>

      {/* DESKTOP — foto à esquerda; formulário à direita */}
      <section className="mx-auto hidden w-full max-w-[1500px] md:grid md:min-h-[650px] md:grid-cols-2 md:items-stretch">
        <div className="min-h-[650px] overflow-hidden bg-[#201b17]">
          <img
            src="/transicao-2027.png"
            alt="Oscar Ahumada em seu escritório"
            className="h-full w-full object-cover object-[58%_center]"
          />
        </div>

        <div className="flex items-center justify-center bg-[#17130f] px-8 py-14 text-white lg:px-14">
          <div className="w-full max-w-[520px]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7b46c]">
              Oscar Ahumada · Numerólogo das Estrelas
            </p>
            <h1 className="text-3xl font-bold leading-tight lg:text-5xl">
              Saiba como será sua transição para <span className="text-[#e3c17b]">2027</span>
            </h1>
            <p className="mt-5 text-base leading-7 text-[#e7dfd5]">
              Informe seu dia e mês de nascimento para descobrir sua transição numerológica.
            </p>

            <form onSubmit={descobrirTransicao} className="mt-9">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dia-desktop" className="mb-2 block text-sm font-bold text-white">
                    DD — Dia
                  </label>
                  <input
                    id="dia-desktop"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="31"
                    placeholder="DD"
                    value={dia}
                    onChange={(event) => setDia(event.target.value)}
                    className="w-full rounded-xl border border-[#bda16e] bg-white px-4 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]"
                  />
                </div>
                <div>
                  <label htmlFor="mes-desktop" className="mb-2 block text-sm font-bold text-white">
                    MM — Mês
                  </label>
                  <input
                    id="mes-desktop"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="12"
                    placeholder="MM"
                    value={mes}
                    onChange={(event) => setMes(event.target.value)}
                    className="w-full rounded-xl border border-[#bda16e] bg-white px-4 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-[#d7b46c] px-5 py-4 text-base font-extrabold uppercase tracking-wide text-[#17130f] transition hover:bg-[#edce8e]"
              >
                Descobrir minha transição
              </button>

              {erro && (
                <div role="alert" className="mt-4 rounded-lg bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white">
                  {erro}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
