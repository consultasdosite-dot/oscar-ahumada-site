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
    <main className="min-h-screen bg-[#17130f]">
      <section className="relative mx-auto w-full max-w-[1500px]">
        <img
          src="/transicao-2027.png"
          alt="Saiba como será a sua transição para 2027"
          className="block h-auto w-full"
        />

        <form
          onSubmit={descobrirTransicao}
          className="absolute inset-0"
        >
          {/* DIA */}
          <input
            type="number"
            inputMode="numeric"
            min="1"
            max="31"
            value={dia}
            onChange={(event) => setDia(event.target.value)}
            aria-label="Dia de nascimento"
            className="
              absolute
              left-[52.5%]
              top-[57.5%]
              h-[8%]
              w-[19.5%]
              rounded-md
              border-0
              bg-white
              px-2
              text-center
              text-[14px]
              font-bold
              text-[#29231d]
              outline-none
              sm:text-lg
              md:text-2xl
            "
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
            className="
              absolute
              left-[73.5%]
              top-[57.5%]
              h-[8%]
              w-[19.5%]
              rounded-md
              border-0
              bg-white
              px-2
              text-center
              text-[14px]
              font-bold
              text-[#29231d]
              outline-none
              sm:text-lg
              md:text-2xl
            "
          />

          {/* BOTÃO */}
          <button
            type="submit"
            aria-label="Descobrir minha transição"
            className="
              absolute
              left-[52%]
              top-[67%]
              h-[8%]
              w-[41.5%]
              cursor-pointer
              rounded-md
              bg-transparent
            "
          />

          {erro && (
            <div
              className="
                absolute
                left-[52%]
                top-[76%]
                w-[41.5%]
                rounded-md
                bg-red-700
                px-2
                py-1
                text-center
                text-[10px]
                font-semibold
                text-white
                sm:text-sm
              "
            >
              {erro}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}