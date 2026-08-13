"use client";

import { useState } from "react";

export default function SolicitarMapaEmpresarialPage() {
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [nomeFantasia, setNomeFantasia] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [endereco, setEndereco] = useState("");
  const [atividade, setAtividade] = useState("");
  const [objetivo, setObjetivo] = useState("");

  function enviarSolicitacao(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const texto = `Olá, Oscar. Quero solicitar meu Mapa Numerológico Empresarial.

DADOS DO RESPONSÁVEL

Nome: ${nomeResponsavel}
WhatsApp: ${whatsapp}
E-mail: ${email}

DADOS DA EMPRESA

Nome Fantasia: ${nomeFantasia}
Razão Social: ${razaoSocial}
Data de início/registro: ${dataInicio}
Endereço: ${endereco}
Atividade principal: ${atividade}

O que desejo compreender:
${objetivo || "Não informado"}

Vim pelo site www.oscarahumada.com.br`;

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] px-4 py-10 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* HERO */}
        <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-6 py-12 text-white shadow-2xl sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">
              Mapa Numerológico Empresarial
            </p>

            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Solicite a análise numerológica da sua empresa
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50/90">
              Preencha os dados abaixo para iniciar a análise do Nome Fantasia,
              Razão Social, Destino e Número do Endereço da empresa.
            </p>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className="mt-8 rounded-[30px] border border-[#dbcba9] bg-white p-6 shadow-xl sm:p-10">
          <form onSubmit={enviarSolicitacao} className="space-y-10">

            {/* RESPONSÁVEL */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Dados do responsável
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

            {/* EMPRESA */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Dados da empresa
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Informações para o estudo numerológico
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-[#607089]">
                Essas informações serão utilizadas para analisar os principais
                números regentes da empresa.
              </p>

              <div className="mt-6 space-y-6">

                <div>
                  <label
                    htmlFor="nomeFantasia"
                    className="text-sm font-bold"
                  >
                    Nome Fantasia
                  </label>

                  <input
                    id="nomeFantasia"
                    type="text"
                    required
                    value={nomeFantasia}
                    onChange={(event) =>
                      setNomeFantasia(event.target.value)
                    }
                    placeholder="Nome pelo qual a empresa é conhecida"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="razaoSocial"
                    className="text-sm font-bold"
                  >
                    Razão Social
                  </label>

                  <input
                    id="razaoSocial"
                    type="text"
                    required
                    value={razaoSocial}
                    onChange={(event) =>
                      setRazaoSocial(event.target.value)
                    }
                    placeholder="Razão Social completa da empresa"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="dataInicio"
                      className="text-sm font-bold"
                    >
                      Data de início das atividades ou registro
                    </label>

                    <input
                      id="dataInicio"
                      type="date"
                      required
                      value={dataInicio}
                      onChange={(event) =>
                        setDataInicio(event.target.value)
                      }
                      className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="atividade"
                      className="text-sm font-bold"
                    >
                      Atividade principal
                    </label>

                    <input
                      id="atividade"
                      type="text"
                      required
                      value={atividade}
                      onChange={(event) =>
                        setAtividade(event.target.value)
                      }
                      placeholder="Ex.: clínica, comércio, consultoria..."
                      className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="endereco"
                    className="text-sm font-bold"
                  >
                    Endereço da empresa
                  </label>

                  <input
                    id="endereco"
                    type="text"
                    required
                    value={endereco}
                    onChange={(event) =>
                      setEndereco(event.target.value)
                    }
                    placeholder="Informe o endereço utilizado pela empresa"
                    className="mt-2 w-full rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
                  />
                </div>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="border-t border-[#e8decb] pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c29629]">
                Objetivo da análise
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                O que você deseja compreender melhor?
              </h2>

              <textarea
                id="objetivo"
                value={objetivo}
                onChange={(event) =>
                  setObjetivo(event.target.value)
                }
                placeholder="Ex.: quero saber se o nome favorece crescimento, vendas, posicionamento, sociedade, expansão ou uma mudança de nome."
                rows={6}
                className="mt-5 w-full resize-none rounded-2xl border border-[#d8c9aa] px-5 py-4 outline-none transition focus:border-[#c29629] focus:ring-4 focus:ring-[#c29629]/10"
              />
            </div>

            {/* EXPLICAÇÃO */}
            <div className="rounded-[26px] bg-[#edf4fb] p-6">
              <p className="font-semibold text-[#123d73]">
                O que será analisado
              </p>

              <div className="mt-4 grid gap-3 text-sm leading-6 text-[#4f627d] sm:grid-cols-2">
                <p>• Nome Fantasia</p>
                <p>• Razão Social</p>
                <p>• Destino da empresa</p>
                <p>• Número do Endereço</p>
              </div>
            </div>

            {/* PRIVACIDADE */}
            <div className="rounded-[24px] bg-[#faf7f1] p-5 text-sm leading-6 text-[#607089]">
              As informações enviadas serão utilizadas exclusivamente para dar
              continuidade à solicitação do Mapa Numerológico Empresarial.
            </div>

            {/* BOTÃO */}
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