"use client";

import Link from "next/link";
import { useState } from "react";

const planos = [
  {
    nome: "Mapa Essencial",
    preco: "R$ 260,00",
    pagamento: "https://link.infinitepay.io/oscar_jose_ahumada_/VC1D-KHKAjqEMwt-260,00",
    descricao: "Estudo personalizado para escolher o nome do bebê com consciência numerológica.",
    itens: [
      "Análise do nome social e do nome completo",
      "Diagnóstico do Destino pela provável data de nascimento",
      "As três energias principais e suas características comportamentais",
      "Orientações aos pais para o desenvolvimento até os 15 anos",
      "Entrega em PDF, sem consulta",
      "Complementação após o nascimento, conforme a data efetiva",
    ],
  },
  {
    nome: "Mapa com Consulta",
    preco: "R$ 440,00",
    pagamento: "https://pay.infinitepay.io/oscar_jose_ahumada_/VC1D-IOoHbeI1tM-440,00",
    descricao: "Acompanhamento personalizado para conversar sobre os nomes e esclarecer suas dúvidas.",
    itens: [
      "Todos os estudos e orientações do Mapa Essencial",
      "Consulta personalizada de 1 hora com Oscar Ahumada",
      "Comparação das opções de nomes e esclarecimento de dúvidas",
      "Entrega em PDF e complementação após o nascimento",
    ],
  },
  {
    nome: "Mapa Família",
    preco: "R$ 890,00",
    pagamento: "https://pay.infinitepay.io/oscar_jose_ahumada_/VC1D-ozypW1sD8h-890,00",
    descricao: "Uma análise ampliada que considera o bebê, os pais e as expectativas da família.",
    itens: [
      "Todos os estudos do bebê e entrega em PDF",
      "Mapas numerológicos dos pais",
      "Compatibilidade entre os pais e o bebê",
      "Avaliação dos desejos dos pais em relação às vibrações dos nomes",
      "Consultas personalizadas com Oscar Ahumada",
      "Orientações até os 15 anos e complementação após o nascimento",
    ],
  },
];

const grupos = [
  { titulo: "Números fortes", numeros: "1 · 3 · 5 · 8", texto: "Iniciativa, expressão, movimento, liderança e realização." },
  { titulo: "Números afetivos", numeros: "2 · 4 · 6", texto: "Sensibilidade, cooperação, estrutura, família e cuidado." },
  { titulo: "Números neutros", numeros: "7 · 9", texto: "Reflexão, conhecimento, espiritualidade e generosidade." },
  { titulo: "Números mestres", numeros: "11 · 22", texto: "Vibrações especiais, com características e desafios próprios." },
];

const CHAVE_PIX = "08677876863";

function Pagamento({ plano }: { plano: (typeof planos)[number] }) {
  const [mostrarPix, setMostrarPix] = useState(false);
  const [copiado, setCopiado] = useState(false);

  async function copiarChave() {
    try {
      await navigator.clipboard.writeText(CHAVE_PIX);
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <div className="mt-8 space-y-3">
      <a href={plano.pagamento} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-[#123d73] px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-[#1f629d]">
        PAGAR COM CARTÃO
      </a>
      <button type="button" onClick={() => setMostrarPix(!mostrarPix)} aria-expanded={mostrarPix} className="w-full rounded-full border-2 border-[#123d73] px-5 py-4 text-sm font-bold text-[#123d73] transition hover:bg-[#edf4fb]">
        {mostrarPix ? "OCULTAR DADOS DO PIX" : "PAGAR COM PIX"}
      </button>
      {mostrarPix && (
        <div className="rounded-2xl border border-[#dbcba9] bg-[#fffdf9] p-5 text-sm leading-7 text-[#4f627d]">
          <p className="font-bold text-[#123d73]">Pagamento via Pix</p>
          <p className="mt-2">Valor: <strong>{plano.preco}</strong></p>
          <p>Chave Pix — CPF: <strong>{CHAVE_PIX}</strong></p>
          <p>Favorecido: <strong>OSCAR JOSÉ AHUMADA</strong></p>
          <p>Banco informado: <strong>WISE</strong></p>
          <button type="button" onClick={copiarChave} className="mt-4 w-full rounded-full bg-[#123d73] px-4 py-3 font-bold text-white">
            {copiado ? "CHAVE COPIADA" : "COPIAR CHAVE PIX"}
          </button>
          <p className="mt-4">Abra o aplicativo do seu banco, escolha Pix por chave CPF, cole a chave e informe o valor de {plano.preco}. Confira o favorecido e a instituição exibidos pelo banco antes de confirmar.</p>
          <p className="mt-3 text-xs leading-5">O pagamento é realizado diretamente no aplicativo bancário. Esta página não confirma automaticamente o recebimento.</p>
        </div>
      )}
      <Link href="/solicitar-nome-bebe" className="block text-center text-sm font-semibold text-[#123d73] underline underline-offset-4">Prefere conversar antes de contratar?</Link>
    </div>
  );
}

export default function NomeDoBebePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#edf4fb] via-[#f7f3eb] to-[#f7f3eb] px-4 py-10 text-[#123d73] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f6cf68]">Numerologia para Bebês</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">O nome do seu bebê é uma escolha para toda a vida.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50/90">Conheça as energias do nome social, do nome completo e do Destino. Escolha um estudo personalizado para compreender as características numerológicas do seu bebê e receber orientações para sua família.</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#planos" className="rounded-full bg-[#f6c84f] px-8 py-4 text-center text-sm font-bold text-[#123d73] transition hover:bg-[#ffda70]">CONHECER OS TRÊS MAPAS</a>
              <Link href="/bebe" className="rounded-full border border-white/40 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">FAZER DIAGNÓSTICO GRATUITO</Link>
            </div>
          </div>
        </section>

        <section className="px-2 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">Uma escolha consciente</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Muito além da beleza e da sonoridade do nome.</h2>
            <p className="mt-6 text-lg leading-8 text-[#607089]">Na Numerologia Latina, cada letra possui um valor numérico. Oscar Ahumada analisa o conjunto das vibrações para compreender tendências simbólicas de personalidade, expressão e comportamento. O estudo considera as três energias principais do bebê, o nome completo e a possível data de nascimento, oferecendo também orientações aos pais para acompanhar seu desenvolvimento até os 15 anos.</p>
          </div>
        </section>

        <section className="rounded-[32px] bg-white px-6 py-12 shadow-sm sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">Metodologia Oscar Ahumada</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Quatro grupos de números essenciais</h2>
            <p className="mt-5 leading-7 text-[#607089]">Cada grupo apresenta características próprias. Nenhum é superior ao outro: a análise busca compreender como as vibrações se combinam.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {grupos.map((grupo) => (
              <div key={grupo.titulo} className="rounded-[24px] border border-[#e2d6c0] bg-[#fffdf9] p-6">
                <p className="text-sm font-semibold text-[#c29629]">{grupo.titulo}</p>
                <p className="mt-3 text-2xl font-bold">{grupo.numeros}</p>
                <p className="mt-4 leading-7 text-[#607089]">{grupo.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="planos" className="scroll-mt-8 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">Escolha seu atendimento</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Três formas de cuidar dessa escolha</h2>
            <p className="mt-5 text-lg leading-8 text-[#607089]">Do estudo em PDF ao acompanhamento completo da família, escolha a opção que melhor atende às suas necessidades.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {planos.map((plano, index) => (
              <article key={plano.nome} className="flex flex-col overflow-hidden rounded-[30px] border border-[#dbcba9] bg-white shadow-xl">
                <div className="bg-[#123d73] px-7 py-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6cf68]">Opção {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{plano.nome}</h3>
                  <p className="mt-4 text-3xl font-bold text-[#f6cf68]">{plano.preco}</p>
                  <p className="mt-4 leading-7 text-blue-100">{plano.descricao}</p>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <ul className="flex-1 space-y-4">
                    {plano.itens.map((item) => (
                      <li key={item} className="flex gap-3 leading-7 text-[#4f627d]">
                        <span className="font-bold text-[#c29629]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Pagamento plano={plano} />
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-6 text-[#607089]">Os valores são por pacote. A quantidade de consultas do Mapa Família será confirmada no atendimento antes da contratação.</p>
        </section>

        <section className="rounded-[32px] bg-[#edf4fb] px-6 py-12 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c29629]">Compatibilidade familiar</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Os desejos dos pais também fazem parte da escolha.</h2>
            <p className="mt-6 text-lg leading-8 text-[#607089]">Imagine um pai com vibração 22 e uma mãe com vibração 8. Ambos podem valorizar força, liderança e realização. Ao considerar um nome como Ian, associado à vibração 6, a análise permite conversar sobre características mais voltadas ao afeto, à família e ao cuidado.</p>
            <p className="mt-5 text-lg leading-8 text-[#607089]">O objetivo não é impor um nome forte ou afetivo, mas compreender as expectativas dos pais e buscar uma escolha consciente que respeite a individualidade simbólica do bebê e a harmonia familiar.</p>
          </div>
        </section>

        <section className="px-2 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">E quando o bebê nascer?</h2>
            <p className="mt-6 text-lg leading-8 text-[#607089]">O estudo considera inicialmente a provável data de nascimento. Após o nascimento, o mapa é complementado com a data efetiva, especialmente quando o parto ocorre de forma natural. Nos casos de cesárea, Oscar poderá apresentar uma orientação numerológica sobre a harmonização da data, sempre respeitando as decisões e recomendações médicas e obstétricas.</p>
            <p className="mt-5 text-sm leading-6 text-[#607089]">A Numerologia é uma prática de interpretação simbólica e autoconhecimento. Não garante características comportamentais, resultados futuros ou condições de saúde e não deve orientar ou substituir decisões médicas sobre a data ou a forma do parto.</p>
          </div>
        </section>

        <section className="rounded-[32px] bg-[#123d73] px-6 py-12 text-white sm:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f6cf68]">Oscar Ahumada · Numerólogo das Estrelas</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Experiência e atenção personalizada para sua família.</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">Com mais de 40 anos de experiência, Oscar Ahumada realiza estudos numerológicos que consideram o conjunto das vibrações do nome e do Destino, evitando conclusões baseadas em um único número isolado. O propósito é ajudar os pais a compreender as possibilidades e fazer uma escolha com mais conhecimento.</p>
            <Link href="/solicitar-nome-bebe" className="mt-8 inline-flex rounded-full bg-[#f6c84f] px-9 py-4 text-center text-sm font-bold text-[#123d73] transition hover:bg-[#ffda70]">SOLICITAR MEU MAPA DO BEBÊ</Link>
          </div>
        </section>

        <section className="py-12 text-center">
          <p className="text-sm leading-7 text-[#607089]">Atendimento online para famílias do Brasil e do exterior.</p>
          <Link href="/bebe" className="mt-4 inline-block text-sm font-semibold text-[#123d73] underline underline-offset-4">Prefere começar pelo diagnóstico gratuito? Compare até três nomes.</Link>
        </section>
      </div>
    </main>
  );
}
