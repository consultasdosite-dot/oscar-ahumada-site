"use client";

import { useState } from "react";

export default function SolicitarMapaPage() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [tipoAtendimento, setTipoAtendimento] = useState("online");
  const [mensagem, setMensagem] = useState("");

  function enviarSolicitacao(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const texto = `Olá, Oscar. Quero solicitar meu Mapa Numerológico Pessoal.

Nome: ${nome}
WhatsApp: ${whatsapp}
E-mail: ${email}
Data de nascimento: ${dataNascimento}
Tipo de atendimento: ${tipoAtendimento}
Mensagem: ${mensagem || "Não informada"}

Vim pelo site www.oscarahumada.com.br`;

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] px-4 py-10 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-6 py-12 text-white shadow-2xl sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">
              Mapa Numerológico Pessoal
            </p>

            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Solicite seu Mapa Numerológico
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50/90">
              Preencha seus dados abaixo. Ao finalizar, sua solicitação será
              enviada pelo WhatsApp para dar continuidade ao atendimento.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-[#dbcba9] bg-white p-6 shadow-xl sm:p-10">
          <form onSubmit={enviarSolicitacao} className="space-y-6">
            <div>
              <label className="text-sm font-bold" htmlFor="nome">
                Nome completo
              </label>

              <input
                id="nome"
                type="text"
                required
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder="Digite seu nome completo"
                className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-sm font-bold" htmlFor="whatsapp">
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
                <label className="text-sm font-bold" htmlFor="email">
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

            <div>
              <label className="text-sm font-bold" htmlFor="dataNascimento">
                Data de nascimento
              </label>

              <input
                id="dataNascimento"
                type="date"
                required
                value={dataNascimento}
                onChange={(event) => setDataNascimento(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            <div>
              <p className="text-sm font-bold">Tipo de atendimento</p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="cursor-pointer rounded-2xl border border-[#d8c9aa] p-4">
                  <input
                    type="radio"
                    name="tipoAtendimento"
                    value="online"
                    checked={tipoAtendimento === "online"}
                    onChange={(event) =>
                      setTipoAtendimento(event.target.value)
                    }
                    className="mr-3"
                  />
                  Atendimento online
                </label>

                <label className="cursor-pointer rounded-2xl border border-[#d8c9aa] p-4">
                  <input
                    type="radio"
                    name="tipoAtendimento"
                    value="presencial"
                    checked={tipoAtendimento === "presencial"}
                    onChange={(event) =>
                      setTipoAtendimento(event.target.value)
                    }
                    className="mr-3"
                  />
                  Atendimento presencial
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold" htmlFor="mensagem">
                O que você gostaria de compreender melhor neste momento?
              </label>

              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
                placeholder="Conte brevemente o que está vivendo ou quais são suas principais dúvidas."
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            <div className="rounded-[24px] bg-[#edf4fb] p-5 text-sm leading-6 text-[#4f627d]">
              Seus dados serão utilizados apenas para dar continuidade à sua
              solicitação de atendimento.
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#123d73] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
            >
              Enviar Solicitação pelo WhatsApp
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}