"use client";

import { useState } from "react";
import Link from "next/link";

export default function SolicitarNomeBebePage() {
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");

  const [sobrenome, setSobrenome] = useState("");
  const [dataPrevista, setDataPrevista] = useState("");
  const [observacoes, setObservacoes] = useState("");

  function enviarSolicitacao(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nomesEscolhidos = [nome1, nome2, nome3]
      .map((nome) => nome.trim())
      .filter(Boolean)
      .map((nome, index) => `${index + 1}. ${nome}`)
      .join("\n");

    const texto = `Olá, Oscar. Quero solicitar uma análise para a escolha do nome do bebê.

DADOS DO RESPONSÁVEL

Nome: ${nomeResponsavel}
WhatsApp: ${whatsapp}
E-mail: ${email}

OPÇÕES DE NOMES

${nomesEscolhidos}

SOBRENOME

${sobrenome || "Ainda não definido"}

DATA PREVISTA DE NASCIMENTO

${dataPrevista || "Não informada"}

OBSERVAÇÕES

${observacoes || "Não informado"}

Vim pelo site www.oscarahumada.com.br`;

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] px-4 py-10 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* HERO */}
        <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f6cf68]">
              Numerologia para Bebês
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Escolha o nome do seu bebê com mais consciência numerológica
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50/90">
              Informe as opções de nomes que você está considerando. A análise
              permite observar as diferentes vibrações antes de uma escolha tão
              importante.
            </p>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className="mt-8 rounded-[32px] border border-[#dbcba9] bg-white p-6 shadow-xl sm:p-10">
          <form onSubmit={enviarSolicitacao} className="space-y-10">

            {/* RESPONSÁVEL */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Dados para contato
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Quem está solicitando a análise?
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <label
                    htmlFor="nomeResponsavel"
                    className="text-sm font-bold"
                  >
                    Nome completo
                  </label>

                  <input
                    id="nomeResponsavel"
                    type="text"
                    required
                    value={nomeResponsavel}
                    onChange={(event) =>
                      setNomeResponsavel(event.target.value)
                    }
                    placeholder="Digite seu nome completo"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="text-sm font-bold"
                    >
                      WhatsApp
                    </label>

                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(event) =>
                        setWhatsapp(event.target.value)
                      }
                      placeholder="(31) 99999-9999"
                      className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold"
                    >
                      E-mail
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="seuemail@exemplo.com"
                      className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* NOMES */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Opções de nomes
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Quais nomes vocês estão considerando?
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-[#607089]">
                Informe até três opções. Apenas a primeira opção é obrigatória.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="nome1"
                    className="text-sm font-bold"
                  >
                    Opção 1
                  </label>

                  <input
                    id="nome1"
                    type="text"
                    required
                    value={nome1}
                    onChange={(event) =>
                      setNome1(event.target.value)
                    }
                    placeholder="Primeiro nome"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nome2"
                    className="text-sm font-bold"
                  >
                    Opção 2
                  </label>

                  <input
                    id="nome2"
                    type="text"
                    value={nome2}
                    onChange={(event) =>
                      setNome2(event.target.value)
                    }
                    placeholder="Segundo nome"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nome3"
                    className="text-sm font-bold"
                  >
                    Opção 3
                  </label>

                  <input
                    id="nome3"
                    type="text"
                    value={nome3}
                    onChange={(event) =>
                      setNome3(event.target.value)
                    }
                    placeholder="Terceiro nome"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>
              </div>
            </div>

            {/* SOBRENOME */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Nome completo
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Qual sobrenome o bebê deverá utilizar?
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-[#607089]">
                O sobrenome é importante para uma análise mais completa das
                possibilidades do nome.
              </p>

              <input
                id="sobrenome"
                type="text"
                value={sobrenome}
                onChange={(event) =>
                  setSobrenome(event.target.value)
                }
                placeholder="Ex.: Silva Oliveira"
                className="mt-5 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            {/* NASCIMENTO */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Nascimento
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Existe uma data prevista para o nascimento?
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-[#607089]">
                Se houver uma previsão, você pode informá-la. Caso ainda não
                exista uma data definida, deixe o campo em branco.
              </p>

              <div className="mt-5 max-w-md">
                <input
                  id="dataPrevista"
                  type="date"
                  value={dataPrevista}
                  onChange={(event) =>
                    setDataPrevista(event.target.value)
                  }
                  className="w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                />
              </div>
            </div>

            {/* OBSERVAÇÕES */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Conte um pouco mais
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Existe alguma dúvida especial sobre os nomes?
              </h2>

              <textarea
                id="observacoes"
                value={observacoes}
                onChange={(event) =>
                  setObservacoes(event.target.value)
                }
                placeholder="Ex.: estamos divididos entre dois nomes, queremos homenagear alguém da família ou gostaríamos de saber qual opção apresenta uma vibração mais adequada."
                rows={6}
                className="mt-5 w-full resize-none rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            {/* O QUE SERÁ ANALISADO */}
            <div className="rounded-[28px] bg-[#edf4fb] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#246aa7]">
                Análise Numerológica
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Uma comparação além de simplesmente “gostar” de um nome.
              </h3>

              <div className="mt-5 grid gap-3 text-[#4f627d] sm:grid-cols-2">
                <p>• Vibração numerológica de cada opção</p>
                <p>• Valores das letras</p>
                <p>• Vogais e consoantes</p>
                <p>• Combinação numerológica</p>
                <p>• Presença de Números Mestres</p>
                <p>• Comparação entre as opções</p>
              </div>
            </div>

            {/* AVISO */}
            <div className="rounded-[24px] border border-[#eadbbd] bg-[#fffaf0] p-6">
              <p className="font-semibold text-[#123d73]">
                Uma escolha para toda a vida
              </p>

              <p className="mt-2 leading-7 text-[#607089]">
                A Numerologia pode acrescentar uma nova perspectiva à escolha
                do nome. A decisão final, naturalmente, continua pertencendo à
                família.
              </p>
            </div>

            {/* PRIVACIDADE */}
            <p className="text-center text-sm leading-6 text-[#708096]">
              Os dados enviados serão utilizados exclusivamente para dar
              continuidade à sua solicitação.
            </p>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#123d73] px-8 py-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1f629d]"
            >
              Solicitar Análise pelo WhatsApp
            </button>

            <div className="text-center">
              <Link
                href="/nome-do-bebe"
                className="text-sm font-semibold text-[#123d73] underline underline-offset-4"
              >
                Voltar e comparar outros nomes
              </Link>
            </div>

          </form>
        </section>
      </div>
    </main>
  );
}