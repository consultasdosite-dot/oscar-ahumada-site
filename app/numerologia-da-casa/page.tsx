"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type DiagnosticoCasa = {
  numero: number;
  titulo: string;
  conversa: string;
  favorece: string;
  atencao: string;
  orientacao: string;
};

const diagnosticos: Record<number, DiagnosticoCasa> = {
  1: {
    numero: 1,
    titulo: "Independência, liderança e iniciativa",
    conversa:
      "Se a sua casa vibra no número 1, existe aí uma energia muito forte de independência, iniciativa e novos começos. É como se esse ambiente estimulasse as pessoas a tomarem decisões, abrirem caminhos e buscarem mais autonomia. Quem vive nessa casa pode sentir uma necessidade maior de fazer as coisas do próprio jeito, criar projetos e assumir o comando da própria vida.",
    favorece:
      "Essa vibração favorece coragem, criatividade, originalidade, liderança e disposição para começar algo novo. Pode ser uma casa muito interessante para quem está reconstruindo a vida, iniciando uma nova fase ou buscando mais autonomia.",
    atencao:
      "O ponto de atenção aparece quando a independência vira individualismo. Pode haver dificuldade para dividir decisões, ouvir os outros ou aceitar interferências. Em uma família, é importante observar se cada pessoa não está tentando ser a única autoridade da casa.",
    orientacao:
      "Procure estimular iniciativa sem transformar tudo em disputa. Essa casa funciona melhor quando cada morador tem espaço para ser quem é, mas aprende também a compartilhar decisões e responsabilidades.",
  },

  2: {
    numero: 2,
    titulo: "Harmonia, parceria e sensibilidade",
    conversa:
      "Se a sua residência vibra no número 2, provavelmente existe uma energia muito ligada à convivência, sensibilidade e parceria. É uma casa que pede diálogo, paciência e capacidade de perceber as necessidades das outras pessoas. Muitas vezes quem vive aqui valoriza bastante companhia, família e vínculos afetivos.",
    favorece:
      "Favorece cooperação, diplomacia, união, acolhimento e relações duradouras. É uma vibração interessante para casais, famílias e pessoas que desejam construir uma atmosfera de paz e proximidade.",
    atencao:
      "A sensibilidade pode ficar exagerada. Pequenos conflitos podem ganhar peso emocional, e algumas pessoas podem ter dificuldade para impor limites ou tomar decisões sozinhas.",
    orientacao:
      "O segredo desta casa é buscar harmonia sem abrir mão da individualidade. Ouvir é importante, mas cada morador também precisa aprender a dizer o que sente e o que deseja.",
  },

  3: {
    numero: 3,
    titulo: "Alegria, criatividade e vida social",
    conversa:
      "Uma casa de vibração 3 costuma ter movimento. É uma energia ligada à comunicação, alegria, encontros, criatividade e expressão. Pode ser aquele tipo de ambiente onde as pessoas gostam de conversar, receber amigos, criar, decorar, celebrar e deixar a vida um pouco mais leve.",
    favorece:
      "Favorece sociabilidade, criatividade, comunicação, arte, festas, encontros e desenvolvimento de talentos ligados à expressão.",
    atencao:
      "O excesso dessa vibração pode provocar dispersão, gastos desnecessários, muita movimentação e pouca privacidade. Às vezes existe dificuldade para manter silêncio, organização ou concentração.",
    orientacao:
      "Aproveite a alegria dessa casa, mas crie também momentos de silêncio e organização. Criatividade cresce ainda mais quando existe algum direcionamento.",
  },

  4: {
    numero: 4,
    titulo: "Organização, trabalho e estrutura",
    conversa:
      "A vibração 4 traz uma sensação de construção. É uma casa que costuma estimular responsabilidade, organização, disciplina e preocupação com segurança. Muitas pessoas sentem que nesse ambiente precisam trabalhar, organizar a vida e criar bases mais sólidas.",
    favorece:
      "Favorece planejamento, disciplina, economia, estabilidade, administração e construção de patrimônio. É uma boa vibração para quem precisa colocar a vida em ordem.",
    atencao:
      "Quando essa energia pesa demais, a casa pode parecer muito séria. Pode aumentar rigidez, teimosia, preocupação com detalhes e dificuldade para relaxar.",
    orientacao:
      "Organização é importante, mas uma casa também precisa de leveza. Procure equilibrar responsabilidades com prazer, descanso e flexibilidade.",
  },

  5: {
    numero: 5,
    titulo: "Movimento, liberdade e mudanças",
    conversa:
      "Se sua casa vibra no número 5, provavelmente existe uma energia que não gosta muito de ficar parada. Mudanças, novidades, visitas, viagens e experiências diferentes podem fazer parte da vida dos moradores. É uma casa que estimula liberdade e movimento.",
    favorece:
      "Favorece versatilidade, comunicação, adaptação, mudanças, vida social e contato com diferentes pessoas. Pode ser especialmente interessante para atividades comerciais.",
    atencao:
      "O excesso de movimento pode gerar instabilidade. Algumas pessoas podem sentir dificuldade para criar raízes, manter rotinas ou construir vínculos mais profundos.",
    orientacao:
      "Liberdade não precisa significar falta de direção. Quanto mais os moradores criarem alguns pontos de estabilidade, melhor conseguem aproveitar toda a versatilidade do número 5.",
  },

  6: {
    numero: 6,
    titulo: "Família, amor e conforto",
    conversa:
      "A casa 6 tem uma vibração muito ligada ao lar. Família, amor, responsabilidade, cuidado e desejo de conforto costumam ganhar força. Muitas pessoas sentem vontade de cuidar da casa, receber familiares e transformar o ambiente em um verdadeiro ponto de acolhimento.",
    favorece:
      "Favorece família, cuidado, responsabilidade afetiva, beleza, conforto, proteção e construção de vínculos mais próximos.",
    atencao:
      "Cuidar demais também pode virar controle. Algumas pessoas podem assumir responsabilidades que não são delas ou querer determinar como todos deveriam viver.",
    orientacao:
      "Cuide, acolha e proteja, mas permita que cada morador faça suas próprias escolhas. Amor funciona melhor quando não vira cobrança.",
  },

  7: {
    numero: 7,
    titulo: "Silêncio, estudo e profundidade",
    conversa:
      "A vibração 7 costuma criar um ambiente mais reservado. É uma casa interessante para estudar, ler, refletir, trabalhar intelectualmente ou simplesmente se afastar um pouco do excesso de estímulos do mundo externo.",
    favorece:
      "Favorece conhecimento, introspecção, pesquisa, leitura, descanso, reflexão e desenvolvimento interior.",
    atencao:
      "O ambiente pode ficar silencioso demais. Os moradores podem se isolar, conversar pouco ou evitar encontros e atividades sociais.",
    orientacao:
      "Respeite a necessidade de silêncio dessa casa, mas não transforme recolhimento em isolamento. Criar momentos de convivência ajuda a equilibrar essa vibração.",
  },

  8: {
    numero: 8,
    titulo: "Realização, prosperidade e poder",
    conversa:
      "Uma casa de vibração 8 traz uma energia muito ligada à matéria, administração, resultados e realização. Questões financeiras, profissionais e patrimoniais podem ganhar destaque na vida de quem mora aqui. É uma vibração que costuma pedir eficiência e responsabilidade.",
    favorece:
      "Favorece negócios, administração, autoridade, prosperidade, organização financeira e busca de resultados concretos.",
    atencao:
      "Quando mal administrada, pode aumentar disputas por dinheiro, autoridade e controle. Pode existir uma tendência de medir tudo apenas pelo resultado material.",
    orientacao:
      "Use a força do 8 para construir prosperidade, mas não deixe que dinheiro ou poder comandem a convivência. Resultado material precisa caminhar junto com equilíbrio emocional.",
  },

  9: {
    numero: 9,
    titulo: "Generosidade, sensibilidade e humanidade",
    conversa:
      "Se sua residência vibra no número 9, existe aí uma energia de acolhimento, sensibilidade e doação. É comum que essa casa acabe recebendo pessoas, histórias e situações que pedem compreensão. Muitas vezes os moradores sentem vontade de ajudar, aconselhar ou cuidar de alguém.",
    favorece:
      "Favorece generosidade, sensibilidade artística, compreensão, solidariedade, visão ampla e desejo de contribuir com outras pessoas.",
    atencao:
      "A doação excessiva pode cansar. Algumas casas 9 acabam se tornando um ponto de apoio para todos, enquanto os próprios moradores esquecem de preservar sua privacidade e energia.",
    orientacao:
      "Ajudar é bonito, mas limite também é amor. Preserve momentos e espaços que pertençam somente aos moradores da casa.",
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

const telefoneWhatsApp = "555180339532";

function criarWhatsApp(mensagem: string) {
  return `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(
    mensagem
  )}`;
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

    setTimeout(() => {
      document
        .getElementById("resultado-casa")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
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
      <section className="px-4 py-6 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0d315d] via-[#174f8a] to-[#2f7fbb] px-5 py-9 text-white shadow-2xl sm:px-10 sm:py-12 lg:px-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f6c84f] sm:text-sm">
              Numerologia da Casa
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Descubra a energia do número da sua residência
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-50/90 sm:text-lg sm:leading-8">
              Digite o número da sua casa e descubra qual vibração acompanha
              esse ambiente.
            </p>

            {/* CALCULADORA */}
            <div className="mx-auto mt-7 max-w-2xl rounded-[24px] border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:p-6">
              <div className="mb-4 rounded-[18px] border border-[#f6c84f]/50 bg-[#f6c84f]/10 px-4 py-3 text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f6c84f]">
                  Importante
                </p>

                <p className="mt-1 text-sm leading-6 text-white">
                  Se você mora em apartamento, calcule somente o número da sua
                  unidade.
                </p>
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
                className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-5 py-4 text-lg text-[#123d73] outline-none placeholder:text-slate-400 focus:border-[#f6c84f] focus:ring-4 focus:ring-[#f6c84f]/20"
              />

              <button
                type="button"
                onClick={analisarCasa}
                className="mt-4 w-full rounded-full bg-[#f6c84f] px-6 py-4 text-sm font-bold uppercase tracking-[0.06em] text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Descobrir a Energia da Minha Casa
              </button>
            </div>
          </div>
        </div>
      </section>

      {!resultado && (
        <section className="px-5 pb-16 pt-4 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c29629]">
              O endereço também possui uma vibração
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Sua casa pode revelar muito mais do que um simples número na porta
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#607089]">
              Cada número apresenta características diferentes relacionadas ao
              ambiente e à experiência de seus moradores.
            </p>
          </div>
        </section>
      )}

      {resultado && diagnostico && (
        <section
          id="resultado-casa"
          className="scroll-mt-28 px-4 pb-20 pt-2 sm:px-6"
        >
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[32px] border border-[#dcccae] bg-white shadow-xl">
              {/* RESULTADO */}
              <div className="bg-[#123d73] px-6 py-8 text-center text-white sm:px-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f6c84f]">
                  Resultado da sua residência
                </p>

                <div className="mx-auto mt-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#f6c84f] text-5xl font-bold text-[#123d73] shadow-lg">
                  {resultado.vibracao}
                </div>

                <p className="mt-4 text-sm text-blue-100">
                  {resultado.numeroOriginal.split("").join(" + ")} ={" "}
                  {resultado.somaInicial}
                  {resultado.caminho.length > 1 &&
                    ` → ${resultado.caminho.slice(1).join(" → ")}`}
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold sm:text-4xl">
                  {diagnostico.titulo}
                </h2>
              </div>

              {/* CONVERSA */}
              <div className="p-6 sm:p-10">
                <div className="mx-auto max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c29629]">
                    Vamos conversar sobre essa energia?
                  </p>

                  <p className="mt-4 text-lg leading-8 text-[#405675] sm:text-xl sm:leading-9">
                    {diagnostico.conversa}
                  </p>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-[24px] bg-[#edf4fb] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246aa7]">
                        O que essa casa favorece
                      </p>

                      <p className="mt-4 leading-8 text-[#405675]">
                        {diagnostico.favorece}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-[#eadbbd] bg-[#fffaf0] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b88716]">
                        O que você precisa observar
                      </p>

                      <p className="mt-4 leading-8 text-[#405675]">
                        {diagnostico.atencao}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[24px] bg-[#123d73] p-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
                      Uma orientação para você
                    </p>

                    <p className="mt-4 leading-8 text-blue-50">
                      {diagnostico.orientacao}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ENQUETE */}
            <div className="mt-8 rounded-[32px] bg-white p-6 shadow-xl sm:p-10">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c29629]">
                  Antes de sair, me conta uma coisa...
                </p>

                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Como esse diagnóstico bateu em você?
                </h3>

                <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#607089]">
                  Escolha uma das opções abaixo. Sua resposta abre uma conversa
                  diretamente comigo no WhatsApp.
                </p>
              </div>

              <div className="mt-7 grid gap-4">
                <a
                  href={criarWhatsApp(
                    `Olá, Oscar. Fiz o diagnóstico da Numerologia da Casa. Minha residência deu vibração ${resultado.vibracao} e eu me identifiquei com o resultado.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[20px] border border-[#d8b55a] bg-[#fffaf0] px-5 py-5 text-left font-bold text-[#123d73] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  1. Sim, me identifiquei com esse diagnóstico.
                </a>

                <a
                  href={criarWhatsApp(
                    `Olá, Oscar. Fiz o diagnóstico da Numerologia da Casa. Minha residência deu vibração ${resultado.vibracao} e gostaria de uma assessoria para alterar ou harmonizar a energia da minha casa.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[20px] bg-[#123d73] px-5 py-5 text-left font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d] hover:shadow-lg"
                >
                  2. Gostaria de uma assessoria para alterar a energia da minha
                  casa.
                </a>

                <a
                  href={criarWhatsApp(
                    `Olá, Oscar. Fiz o diagnóstico da Numerologia da Casa e agora quero conhecer meu momento atual de acordo com a minha data de nascimento.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[20px] bg-[#f6c84f] px-5 py-5 text-left font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70] hover:shadow-lg"
                >
                  3. Quero conhecer meu momento atual de acordo com minha data de
                  nascimento.
                </a>
              </div>
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

            {/* CTA FINAL */}
            <div className="mt-10 rounded-[32px] bg-gradient-to-r from-[#123d73] via-[#174f8a] to-[#2b78b4] px-6 py-9 text-center text-white shadow-xl sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6c84f]">
                Numerologia aplicada à sua vida
              </p>

              <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold">
                Sua casa é apenas uma das vibrações que fazem parte da sua
                história.
              </h3>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-100">
                Nome, data de nascimento, ciclos pessoais e endereço podem
                revelar diferentes partes do momento que você está vivendo.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/mapa-numerologico"
                  className="rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70]"
                >
                  Conhecer Meu Mapa Numerológico
                </Link>

                <Link
                  href="/poderdonome"
                  className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
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