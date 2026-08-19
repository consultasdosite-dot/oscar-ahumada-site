"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Interpretacao = {
  titulo: string;
  texto: string;
};

const interpretacoesNome: Record<number, Interpretacao> = {
  1: {
    titulo: "Independência, iniciativa e novos começos",
    texto:
      "A vibração 1 fortalece identidade, autonomia, liderança e iniciativa. É uma energia ligada à coragem de iniciar novos caminhos e construir uma trajetória própria.",
  },
  2: {
    titulo: "Parceria, sensibilidade e união",
    texto:
      "A vibração 2 valoriza cooperação, diplomacia, sensibilidade e vínculos. Favorece diálogo, parceria e capacidade de construir em conjunto.",
  },
  3: {
    titulo: "Comunicação, alegria e expressão",
    texto:
      "A vibração 3 favorece criatividade, comunicação, sociabilidade e leveza. Amplia a expressão pessoal e o desejo de viver experiências mais alegres.",
  },
  4: {
    titulo: "Estrutura, segurança e responsabilidade",
    texto:
      "A vibração 4 está ligada à organização, disciplina, estabilidade e construção. Valoriza bases sólidas, planejamento e responsabilidade.",
  },
  5: {
    titulo: "Liberdade, movimento e transformação",
    texto:
      "A vibração 5 traz movimento, flexibilidade, liberdade e novas experiências. É uma energia ligada a mudanças, adaptação e expansão.",
  },
  6: {
    titulo: "Amor, família e responsabilidade afetiva",
    texto:
      "A vibração 6 enfatiza amor, família, cuidado, compromisso e responsabilidade. Favorece o desejo de construir harmonia e proteger aqueles que ama.",
  },
  7: {
    titulo: "Profundidade, introspecção e conhecimento",
    texto:
      "A vibração 7 favorece reflexão, profundidade, estudo e desenvolvimento interior. É uma energia seletiva, analítica e ligada à busca de significado.",
  },
  8: {
    titulo: "Realização, poder e prosperidade",
    texto:
      "A vibração 8 está ligada à realização material, administração, autoridade e capacidade de conquistar resultados. Traz forte potencial para organização e prosperidade.",
  },
  9: {
    titulo: "Sensibilidade, generosidade e visão ampla",
    texto:
      "A vibração 9 amplia sensibilidade, generosidade, compreensão e visão humanitária. É uma energia relacionada à maturidade, doação e encerramento de ciclos.",
  },
};

const interpretacoesCasamento: Record<number, Interpretacao> = {
  1: {
    titulo: "Novos começos",
    texto:
      "A vibração 1 traz iniciativa e construção de uma nova identidade para o casal. O desafio está em equilibrar autonomia individual e decisões compartilhadas.",
  },
  2: {
    titulo: "Parceria e união",
    texto:
      "A vibração 2 é fortemente ligada à cooperação, sensibilidade e companheirismo. Favorece uma relação construída através do diálogo e da parceria.",
  },
  3: {
    titulo: "Alegria e comunicação",
    texto:
      "A vibração 3 favorece comunicação, criatividade e leveza. Pode trazer ao relacionamento uma vida social mais ativa e maior necessidade de expressão.",
  },
  4: {
    titulo: "Estrutura e estabilidade",
    texto:
      "A vibração 4 favorece compromisso, organização e construção de bases sólidas. É uma energia ligada à estabilidade e à responsabilidade.",
  },
  5: {
    titulo: "Movimento e transformação",
    texto:
      "A vibração 5 traz dinamismo, novidades e mudanças. O casal precisa aprender a renovar a relação sem perder suas referências e acordos.",
  },
  6: {
    titulo: "Família e compromisso",
    texto:
      "A vibração 6 está fortemente relacionada à família, ao cuidado e à responsabilidade afetiva. Favorece a construção de um lar e vínculos duradouros.",
  },
  7: {
    titulo: "Profundidade e amadurecimento",
    texto:
      "A vibração 7 favorece reflexão, profundidade e desenvolvimento interior. O relacionamento pode pedir confiança, respeito ao espaço individual e conexão além das aparências.",
  },
  8: {
    titulo: "Realização e prosperidade",
    texto:
      "A vibração 8 traz força para conquistas, administração e construção material. Pode favorecer um casal determinado, desde que o poder seja compartilhado com equilíbrio.",
  },
  9: {
    titulo: "Compreensão e propósito",
    texto:
      "A vibração 9 favorece sensibilidade, maturidade e visão ampla. A união pode estimular crescimento emocional, generosidade e participação em propósitos maiores.",
  },
};

const valores: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  Ñ: 6,
  O: 7,
  P: 8,
  Q: 9,
  R: 1,
  S: 2,
  T: 3,
  U: 4,
  V: 5,
  W: 6,
  X: 7,
  Y: 8,
  Z: 9,
};

function reduzirNumero(numero: number) {
  const caminho: number[] = [numero];
  let resultado = numero;

  while (resultado > 9) {
    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);

    caminho.push(resultado);
  }

  return {
    resultado,
    caminho,
  };
}

function prepararNome(nome: string) {
  const protegido = nome.toUpperCase().replace(/Ñ/g, "__ENYE__");

  return protegido
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/__ENYE__/g, "Ñ");
}

function calcularNome(nome: string) {
  const normalizado = prepararNome(nome);

  const soma = normalizado.split("").reduce((total, letra) => {
    return total + (valores[letra] || 0);
  }, 0);

  if (!soma) return null;

  const reducao = reduzirNumero(soma);

  return {
    soma,
    vibracao: reducao.resultado,
    caminho: reducao.caminho,
  };
}

function calcularData(data: string) {
  if (!data) return null;

  const partes = data.split("-");

  if (partes.length !== 3) return null;

  const ano = Number(partes[0]);
  const mes = Number(partes[1]);
  const dia = Number(partes[2]);

  if (!ano || !mes || !dia) return null;

  const somaInicial = dia + mes + ano;
  const reducao = reduzirNumero(somaInicial);

  return {
    dia,
    mes,
    ano,
    somaInicial,
    vibracao: reducao.resultado,
    caminho: reducao.caminho,
  };
}

function formatarData(data: string) {
  if (!data) return "";

  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}

export default function NoivasPage() {
  const [nomeSolteira, setNomeSolteira] = useState("");
  const [nomeCasada, setNomeCasada] = useState("");
  const [dataCasamento, setDataCasamento] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [erro, setErro] = useState("");

  const resultadoSolteira = useMemo(
    () => (mostrarResultado ? calcularNome(nomeSolteira) : null),
    [mostrarResultado, nomeSolteira]
  );

  const resultadoCasada = useMemo(
    () => (mostrarResultado ? calcularNome(nomeCasada) : null),
    [mostrarResultado, nomeCasada]
  );

  const resultadoData = useMemo(
    () => (mostrarResultado ? calcularData(dataCasamento) : null),
    [mostrarResultado, dataCasamento]
  );

  function limparResultado() {
    setMostrarResultado(false);
    setErro("");
  }

  function diagnosticar() {
    if (!nomeSolteira.trim() || !nomeCasada.trim() || !dataCasamento) {
      setErro("Preencha os três campos para descobrir suas vibrações.");
      return;
    }

    setErro("");
    setMostrarResultado(true);

    setTimeout(() => {
      document
        .getElementById("resultados-noivas")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  const whatsapp =
    "https://wa.me/555180339532?text=" +
    encodeURIComponent(
      "Olá, Oscar. Fiz os diagnósticos da página Noivas e gostaria de tirar algumas dúvidas antes de definir meu nome de casada e a data do casamento."
    );

  return (
    <main className="min-h-screen bg-[#061a30] text-white">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[680px]">
        <Image
          src="/images/noivos-numerologia.jpg"
          alt="Casal de noivos em um cenário romântico"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031426]/95 via-[#031426]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a30] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-5 pb-14 pt-20 sm:min-h-[620px] sm:px-8 lg:min-h-[680px] lg:items-center lg:px-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e7b64d] sm:text-sm">
              Numerologia para Noivas
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Seu nome.
              <br />
              Sua nova história.
              <br />
              <span className="text-[#e7b64d]">Sua data.</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-white/90">
              Descubra as vibrações que podem acompanhar o início da vida a dois.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="relative z-10 -mt-4 px-4 pb-16 sm:px-6 lg:-mt-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[34px] border border-[#d5a74b]/60 bg-[#08233f] p-5 shadow-2xl sm:p-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e7b64d]">
                3 diagnósticos numerológicos
              </p>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Veja o que os números revelam
              </h2>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <div className="rounded-[24px] bg-[#f9f6f0] p-5 text-[#102f55]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7b64d] font-bold">
                  1
                </span>

                <label
                  htmlFor="nomeSolteira"
                  className="mt-4 block text-base font-bold"
                >
                  Nome de Solteira
                </label>

                <input
                  id="nomeSolteira"
                  type="text"
                  value={nomeSolteira}
                  onChange={(event) => {
                    setNomeSolteira(event.target.value);
                    limparResultado();
                  }}
                  placeholder="Digite seu nome de solteira"
                  className="mt-3 w-full rounded-xl border border-[#d4d8df] bg-white px-4 py-4 outline-none transition focus:border-[#d5a74b] focus:ring-4 focus:ring-[#d5a74b]/15"
                />
              </div>

              <div className="rounded-[24px] bg-[#f9f6f0] p-5 text-[#102f55]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7b64d] font-bold">
                  2
                </span>

                <label
                  htmlFor="nomeCasada"
                  className="mt-4 block text-base font-bold"
                >
                  Nome de Casada
                </label>

                <input
                  id="nomeCasada"
                  type="text"
                  value={nomeCasada}
                  onChange={(event) => {
                    setNomeCasada(event.target.value);
                    limparResultado();
                  }}
                  placeholder="Como pretende assinar após casar?"
                  className="mt-3 w-full rounded-xl border border-[#d4d8df] bg-white px-4 py-4 outline-none transition focus:border-[#d5a74b] focus:ring-4 focus:ring-[#d5a74b]/15"
                />
              </div>

              <div className="rounded-[24px] bg-[#f9f6f0] p-5 text-[#102f55]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7b64d] font-bold">
                  3
                </span>

                <label
                  htmlFor="dataCasamento"
                  className="mt-4 block text-base font-bold"
                >
                  Data do Casamento
                </label>

                <input
                  id="dataCasamento"
                  type="date"
                  value={dataCasamento}
                  onChange={(event) => {
                    setDataCasamento(event.target.value);
                    limparResultado();
                  }}
                  className="mt-3 w-full rounded-xl border border-[#d4d8df] bg-white px-4 py-4 outline-none transition focus:border-[#d5a74b] focus:ring-4 focus:ring-[#d5a74b]/15"
                />
              </div>
            </div>

            <div className="mt-7 text-center">
              <button
                type="button"
                onClick={diagnosticar}
                className="w-full max-w-3xl rounded-full bg-gradient-to-r from-[#c89431] via-[#f4cb68] to-[#c89431] px-7 py-5 text-sm font-black uppercase tracking-[0.08em] text-[#102f55] shadow-xl transition hover:-translate-y-1 sm:text-base"
              >
                Descobrir as Vibrações do Meu Casamento
              </button>

              {erro && (
                <p className="mt-4 text-sm font-semibold text-[#f4cb68]">
                  {erro}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      {mostrarResultado &&
        resultadoSolteira &&
        resultadoCasada &&
        resultadoData && (
          <section
            id="resultados-noivas"
            className="scroll-mt-36 px-4 pb-20 sm:px-6"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e7b64d]">
                  Seus resultados
                </p>

                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Três vibrações. Uma nova etapa.
                </h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <ResultadoCard
                  legenda="Nome de Solteira"
                  numero={resultadoSolteira.vibracao}
                  calculo={`${resultadoSolteira.soma} → ${resultadoSolteira.caminho.join(
                    " → "
                  )}`}
                  interpretacao={
                    interpretacoesNome[resultadoSolteira.vibracao]
                  }
                />

                <ResultadoCard
                  legenda="Nome de Casada"
                  numero={resultadoCasada.vibracao}
                  calculo={`${resultadoCasada.soma} → ${resultadoCasada.caminho.join(
                    " → "
                  )}`}
                  interpretacao={interpretacoesNome[resultadoCasada.vibracao]}
                />

                <ResultadoCard
                  legenda={formatarData(dataCasamento)}
                  numero={resultadoData.vibracao}
                  calculo={`${resultadoData.dia} + ${resultadoData.mes} + ${
                    resultadoData.ano
                  } = ${resultadoData.somaInicial} → ${resultadoData.caminho.join(
                    " → "
                  )}`}
                  interpretacao={
                    interpretacoesCasamento[resultadoData.vibracao]
                  }
                />
              </div>

              <div className="mt-8 rounded-[30px] border border-[#d5a74b]/50 bg-[#0b2949] px-6 py-8 text-center sm:px-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7b64d]">
                  A mudança do nome
                </p>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Vibração{" "}
                  <span className="text-[#e7b64d]">
                    {resultadoSolteira.vibracao}
                  </span>{" "}
                  →{" "}
                  <span className="text-[#e7b64d]">
                    {resultadoCasada.vibracao}
                  </span>
                </h3>

                <p className="mx-auto mt-4 max-w-3xl leading-8 text-blue-100">
                  Cada vibração ativa características diferentes. Antes de
                  decidir definitivamente como assinar após o casamento, vale
                  compreender o significado dessa mudança dentro da sua própria
                  história.
                </p>
              </div>
            </div>
          </section>
        )}

      {/* CTA */}
      <section className="border-t border-[#d5a74b]/20 bg-[#04172d] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.27em] text-[#e7b64d]">
            Antes de decidir
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Ficou com alguma dúvida sobre seu novo nome ou sobre a data?
          </h2>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex max-w-4xl items-center justify-center rounded-[22px] bg-gradient-to-r from-[#c89431] via-[#f4cb68] to-[#c89431] px-7 py-5 text-center text-sm font-black uppercase leading-6 tracking-[0.04em] text-[#102f55] shadow-2xl transition hover:-translate-y-1 sm:text-base"
          >
            Converse com Oscar Ahumada e tire as dúvidas antes de definir nome e
            data de casamento
          </a>

          <p className="mt-10 font-serif text-2xl italic text-[#e7b64d] sm:text-3xl">
            O amor é a escolha. A Numerologia é o guia.
          </p>
        </div>
      </section>
    </main>
  );
}

function ResultadoCard({
  legenda,
  numero,
  calculo,
  interpretacao,
}: {
  legenda: string;
  numero: number;
  calculo: string;
  interpretacao: Interpretacao;
}) {
  return (
    <article className="rounded-[28px] border border-[#d5a74b] bg-[#f9f6f0] p-7 text-center text-[#102f55] shadow-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7125]">
        {legenda}
      </p>

      <div className="mx-auto mt-5 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d5a74b] bg-[#08294a] text-5xl font-semibold text-[#e7b64d] shadow-xl">
        {numero}
      </div>

      <p className="mt-4 text-sm text-[#788393]">{calculo}</p>

      <h3 className="mt-5 text-xl font-semibold sm:text-2xl">
        {interpretacao.titulo}
      </h3>

      <p className="mt-4 leading-7 text-[#59697d]">
        {interpretacao.texto}
      </p>
    </article>
  );
}