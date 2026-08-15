"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type DiagnosticoCasa = {
  numero: number;
  titulo: string;
  resumo: string;
  positivo: string;
  negativo: string;
};

const diagnosticos: Record<number, DiagnosticoCasa> = {
  1: {
    numero: 1,
    titulo: "Independência, liderança e iniciativa",
    resumo:
      "A vibração 1 favorece pessoas independentes, criativas, originais e com forte iniciativa.",
    positivo:
      "Pode estimular liderança, autonomia, capacidade de dirigir assuntos e disposição para abrir novos caminhos. É uma energia que valoriza individualidade, coragem e iniciativa.",
    negativo:
      "Quando vivida de maneira desequilibrada, pode aumentar o individualismo, o egoísmo e a dificuldade de compartilhar decisões e responsabilidades dentro da casa.",
  },

  2: {
    numero: 2,
    titulo: "Harmonia, parceria e diplomacia",
    resumo:
      "A vibração 2 tende a atrair pessoas tranquilas, diplomáticas, sensíveis e que valorizam a convivência.",
    positivo:
      "Favorece associações duradouras, relações familiares, cooperação, simplicidade e capacidade de compreender as necessidades das outras pessoas.",
    negativo:
      "Pode existir dificuldade para quem deseja viver de forma muito independente. Também exige limites claros entre convivência, visitas e privacidade dos moradores.",
  },

  3: {
    numero: 3,
    titulo: "Alegria, criatividade e vida social",
    resumo:
      "A vibração 3 favorece alegria, sociabilidade, criatividade, encontros e uma casa movimentada.",
    positivo:
      "É uma energia favorável para receber pessoas, desenvolver talentos criativos e estimular atividades ligadas à expressão e à comunicação.",
    negativo:
      "O excesso de movimento pode gerar intranquilidade, pouca privacidade, gastos exagerados com lazer e dificuldade para criar momentos de silêncio e recolhimento.",
  },

  4: {
    numero: 4,
    titulo: "Organização, trabalho e estrutura",
    resumo:
      "A vibração 4 tende a atrair pessoas práticas, trabalhadoras, econômicas e organizadas.",
    positivo:
      "Favorece disciplina, administração, responsabilidade, capacidade de organização e construção de uma vida estruturada.",
    negativo:
      "Pode acentuar rigidez, teimosia, preocupação excessiva com detalhes e sensação de pouca leveza no ambiente.",
  },

  5: {
    numero: 5,
    titulo: "Movimento, liberdade e mudanças",
    resumo:
      "A vibração 5 favorece pessoas versáteis, dinâmicas, inquietas e ligadas a movimento e novidades.",
    positivo:
      "Estimula ação, contato com pessoas, participação na comunidade, mudanças e atividades que exigem flexibilidade. Também é uma vibração especialmente interessante para casas comerciais.",
    negativo:
      "Pode dificultar a sensação de aconchego, permanência e estabilidade. Os moradores podem sentir muito movimento e pouco espaço para vínculos mais profundos.",
  },

  6: {
    numero: 6,
    titulo: "Família, amor e conforto",
    resumo:
      "A vibração 6 favorece vida familiar, responsabilidade, cuidado, harmonia e busca de conforto.",
    positivo:
      "Pode oferecer aos moradores uma atmosfera de amor, proteção, convivência, conforto e dedicação à família. Também favorece atividades de serviço e ajuda à comunidade.",
    negativo:
      "Pode trazer teimosia, acomodação e tendência de alguém querer controlar excessivamente a vida doméstica ou assumir a posição de dono da verdade.",
  },

  7: {
    numero: 7,
    titulo: "Silêncio, estudo e profundidade",
    resumo:
      "A vibração 7 favorece repouso, quietude, estudo, reflexão e atividades educacionais.",
    positivo:
      "É uma energia interessante para pessoas que valorizam conhecimento, introspecção, pensamento profundo, leitura e desenvolvimento intelectual.",
    negativo:
      "Pode reduzir a disposição para festas, encontros e vida social intensa. Os moradores podem se tornar excessivamente calados, retraídos ou observadores.",
  },

  8: {
    numero: 8,
    titulo: "Sucesso, matéria e realização",
    resumo:
      "A vibração 8 cria uma atmosfera de importância, realização, negócios, administração e resultados materiais.",
    positivo:
      "Favorece eficiência, ambição, capacidade administrativa, imagem de sucesso e atividades voltadas a ganhos financeiros. É uma das vibrações mais ligadas à matéria e aos negócios.",
    negativo:
      "O dinheiro precisa ser bem administrado. Também podem surgir disputas de poder, excesso de autoridade e conflitos entre moradores que desejam impor suas próprias decisões.",
  },

  9: {
    numero: 9,
    titulo: "Humanidade, arte e doação",
    resumo:
      "A vibração 9 favorece pessoas que desejam servir, ajudar e desenvolver uma visão mais universal da vida.",
    positivo:
      "Pode atrair sensibilidade artística, amor, compreensão, generosidade, acolhimento e desejo de contribuir com outras pessoas.",
    negativo:
      "É uma vibração exigente, que pode trazer desgaste, excesso de doação e dificuldade em preservar a privacidade. A casa pode acabar se tornando um ponto de apoio constante para todos.",
  },
};

function calcularVibracao(numeroResidencia: string) {
  const numeros = numeroResidencia.replace(/\D/g, "");

  if (!numeros) {
    return null;
  }

  const somaInicial = numeros
    .split("")
    .reduce((soma, digito) => soma + Number(digito), 0);

  const caminho: number[] = [somaInicial];

  let resultado = somaInicial;

  while (resultado > 9) {
    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);

    caminho.push(resultado);
  }

  return {
    numeroOriginal: numeros,
    somaInicial,
    caminho,
    vibracao: resultado,
  };
}

export default function NumerologiaDaCasaPage() {
  const [numeroCasa, setNumeroCasa] = useState("");
  const [numeroCalculado, setNumeroCalculado] = useState("");

  const resultado = useMemo(() => {
    if (!numeroCalculado) {
      return null;
    }

    return calcularVibracao(numeroCalculado);
  }, [numeroCalculado]);

  const diagnostico =
    resultado && resultado.vibracao
      ? diagnosticos[resultado.vibracao]
      : null;

  function analisarCasa() {
    const numeros = numeroCasa.replace(/\D/g, "");

    if (!numeros) {
      setNumeroCalculado("");
      return;
    }

    setNumeroCalculado(numeros);
  }

  function limpar() {
    setNumeroCasa("");
    setNumeroCalculado("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#123d73]">
      {/* HERO */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0d315d] via-[#174f8a] to-[#2f7fbb] px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f6c84f] sm:text-sm">
              Numerologia da Casa
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Descubra a energia do número da sua residência
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50/90">
              O número da sua casa possui uma vibração própria. Ela pode revelar
              características do ambiente, tendências de convivência e
              determinadas experiências vividas pelos moradores.
            </p>

            {/* CALCULADORA */}
            <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-md sm:p-7">
              {/* AVISO IMPORTANTE */}
              <div className="mb-6 rounded-[22px] border border-[#f6c84f]/60 bg-[#f6c84f]/15 px-5 py-5 text-left shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f6c84f] text-lg font-black text-[#123d73]">
                    !
                  </div>

                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#f6c84f]">
                      Importante
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-white sm:text-base">
                      Se você mora em apartamento, calcule somente o número da
                      sua unidade. Não utilize o número do prédio, bloco ou
                      condomínio.
                    </p>
                  </div>
                </div>
              </div>

              <label
                htmlFor="numeroCasa"
                className="block text-left text-sm font-semibold"
              >
                Número da sua residência
              </label>

              <input
                id="numeroCasa"
                type="text"
                inputMode="numeric"
                value={numeroCasa}
                onChange={(event) => {
                  setNumeroCasa(event.target.value);
                  setNumeroCalculado("");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    analisarCasa();
                  }
                }}
                placeholder="Ex.: 406"
                className="mt-3 w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-lg text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6c84f] focus:ring-4 focus:ring-[#f6c84f]/20"
              />

              <p className="mt-3 text-left text-xs leading-5 text-blue-100">
                Digite apenas a numeração principal da residência.
              </p>

              <button
                type="button"
                onClick={analisarCasa}
                className="mt-5 w-full rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Descobrir a Energia da Minha Casa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      {!resultado && (
        <section className="px-5 pb-20 pt-6 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c29629] sm:text-sm">
              O endereço também possui uma vibração
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Sua casa pode revelar muito mais do que um simples número na porta
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#607089]">
              A soma dos algarismos da residência é reduzida até chegar a uma
              vibração de 1 a 9. Cada resultado apresenta características
              diferentes relacionadas ao ambiente e à experiência de seus
              moradores.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((numero) => (
                <div
                  key={numero}
                  className="flex aspect-square items-center justify-center rounded-[24px] border border-[#dfd2bb] bg-white text-3xl font-bold text-[#c29629] shadow-sm"
                >
                  {numero}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RESULTADO */}
      {resultado && diagnostico && (
        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[34px] border border-[#dcccae] bg-white shadow-xl">
              {/* CABEÇALHO DO RESULTADO */}
              <div className="bg-[#123d73] px-6 py-10 text-center text-white sm:px-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f6c84f]">
                  Resultado da sua residência
                </p>

                <p className="mt-5 text-lg text-blue-100">
                  Número informado
                </p>

                <p className="mt-1 text-3xl font-semibold">
                  {resultado.numeroOriginal}
                </p>

                <div className="mx-auto mt-6 flex h-28 w-28 items-center justify-center rounded-full border border-[#f6c84f]/50 bg-[#f6c84f] text-5xl font-bold text-[#123d73] shadow-lg">
                  {resultado.vibracao}
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f6c84f]">
                  Vibração da Casa
                </p>

                <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
                  {diagnostico.titulo}
                </h2>
              </div>

              {/* CÁLCULO */}
              <div className="border-b border-[#eadfc9] bg-[#fffaf0] px-6 py-6 text-center sm:px-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c29629]">
                  Como chegamos ao resultado
                </p>

                <p className="mt-3 text-xl font-semibold">
                  {resultado.numeroOriginal.split("").join(" + ")} ={" "}
                  {resultado.somaInicial}
                </p>

                {resultado.caminho.length > 1 && (
                  <p className="mt-2 text-[#607089]">
                    Redução: {resultado.caminho.join(" → ")}
                  </p>
                )}
              </div>

              {/* DIAGNÓSTICO */}
              <div className="p-6 sm:p-10">
                <div className="mx-auto max-w-3xl">
                  <p className="text-xl leading-9 text-[#405675]">
                    {diagnostico.resumo}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-[26px] bg-[#edf4fb] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246aa7]">
                        Potencial da vibração
                      </p>

                      <p className="mt-4 leading-8 text-[#405675]">
                        {diagnostico.positivo}
                      </p>
                    </div>

                    <div className="rounded-[26px] border border-[#eadbbd] bg-[#fffaf0] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b88716]">
                        Ponto de atenção
                      </p>

                      <p className="mt-4 leading-8 text-[#405675]">
                        {diagnostico.negativo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HARMONIZAÇÃO */}
            <div className="mt-8 rounded-[32px] bg-gradient-to-r from-[#123d73] via-[#174f8a] to-[#2b78b4] px-6 py-9 text-center text-white shadow-xl sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6c84f]">
                Harmonização da residência
              </p>

              <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold">
                E se a energia da sua casa não estiver favorecendo aquilo que
                você deseja viver?
              </h3>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-100">
                A Numerologia permite estudar possibilidades de harmonização da
                vibração do endereço através da combinação entre números e
                letras, sempre considerando o objetivo dos moradores.
              </p>

              <p className="mx-auto mt-4 max-w-2xl font-semibold text-white">
                Na próxima etapa desta ferramenta, vamos aprofundar também essa
                possibilidade de harmonização.
              </p>
            </div>

            {/* NOVO CÁLCULO */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={limpar}
                className="rounded-full border border-[#123d73] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:bg-[#123d73] hover:text-white"
              >
                Calcular Outro Número
              </button>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-[34px] bg-white p-7 text-center shadow-xl sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c29629]">
                Numerologia aplicada ao seu ambiente
              </p>

              <h3 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold">
                Os números também podem ajudar você a compreender a energia dos
                espaços onde vive e trabalha.
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#607089]">
                Além da residência, a Numerologia Empresarial também analisa a
                vibração do endereço utilizado pela empresa.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/mapa-empresarial"
                  className="rounded-full bg-[#123d73] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
                >
                  Conhecer a Numerologia Empresarial
                </Link>

                <Link
                  href="/poderdonome"
                  className="rounded-full border border-[#123d73] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:bg-[#edf4fb]"
                >
                  Descobrir o Poder do Meu Nome
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}