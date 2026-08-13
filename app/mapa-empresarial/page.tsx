import Link from "next/link";

const pilares = [
  {
    numero: "01",
    titulo: "Nome Fantasia",
    texto:
      "Revela a principal vibração pela qual a empresa se apresenta ao mercado. É o primeiro e mais forte número regente da análise empresarial.",
  },
  {
    numero: "02",
    titulo: "Razão Social",
    texto:
      "Mostra uma segunda força vibracional da empresa e permite compreender características importantes da estrutura que sustenta o negócio.",
  },
  {
    numero: "03",
    titulo: "Destino da Empresa",
    texto:
      "É calculado através da data de início das atividades ou do registro oficial e mostra a direção vibracional que acompanha a trajetória da empresa.",
  },
  {
    numero: "04",
    titulo: "Número do Endereço",
    texto:
      "Analisa a vibração numérica do local onde a empresa funciona e como essa energia pode interagir com as atividades desenvolvidas.",
  },
];

const beneficios = [
  "Compreender a vibração do Nome Fantasia.",
  "Analisar a força numerológica da Razão Social.",
  "Conhecer o Destino da empresa.",
  "Avaliar a energia do endereço.",
  "Identificar forças e desafios do negócio.",
  "Avaliar se as vibrações combinam com a atividade da empresa.",
  "Obter uma visão mais ampla antes de mudanças importantes.",
  "Apoiar decisões de posicionamento e crescimento.",
];

export default function MapaEmpresarialPage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#123d73]">
      {/* HERO */}
      <section className="px-6 pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-gradient-to-br from-[#174f8a] via-[#246aa7] to-[#3b89c4] px-7 py-16 text-white shadow-[0_25px_70px_rgba(18,61,115,0.18)] sm:px-12 lg:px-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#f6c84f]">
              Numerologia Empresarial
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Descubra as energias que acompanham o nome, o destino e o
              endereço da sua empresa.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50/90 sm:text-xl">
              Uma empresa também possui números regentes. Eles podem revelar
              características importantes sobre posicionamento, estrutura,
              expansão, relacionamentos e realização material.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/solicitar-mapa-empresarial"
                className="rounded-full bg-[#f6c84f] px-8 py-4 text-center text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70]"
              >
                Quero Analisar Minha Empresa
              </Link>

              <a
                href="#como-funciona"
                className="rounded-full border border-white/40 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Entender Como Funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c29629]">
              A identidade numérica do negócio
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              O nome de uma empresa não é apenas uma identificação.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#607089]">
            <p>
              Na Numerologia Empresarial, as letras que formam os nomes da
              empresa são convertidas em valores numéricos. A partir dessas
              somas surgem números regentes que permitem analisar determinadas
              características vibracionais do negócio.
            </p>

            <p>
              A análise também considera a data de início das atividades ou do
              registro oficial e a vibração numérica do endereço.
            </p>

            <p className="font-semibold text-[#123d73]">
              O objetivo é compreender se essas energias favorecem aquilo que a
              empresa deseja construir e representar no mercado.
            </p>
          </div>
        </div>
      </section>

      {/* 4 PILARES */}
      <section
        id="como-funciona"
        className="bg-[#edf4fb] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c29629]">
              Os números regentes
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Os quatro pontos fundamentais da análise empresarial
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#607089]">
              Cada informação mostra uma dimensão diferente da empresa. A
              leitura conjunta permite uma compreensão muito mais ampla do
              negócio.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pilares.map((item) => (
              <div
                key={item.numero}
                className="group rounded-[30px] border border-[#d9c9aa] bg-white p-8 shadow-[0_15px_40px_rgba(18,61,115,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,61,115,0.12)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b55a] bg-[#fffaf0] text-sm font-bold text-[#b88716]">
                      {item.numero}
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold">
                      {item.titulo}
                    </h3>
                  </div>

                  <span className="text-6xl font-light text-[#c29629]/10">
                    {item.numero}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-[#607089]">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOME FANTASIA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c29629]">
                A força principal
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                O Nome Fantasia é o primeiro número que observamos.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#607089]">
                É através dele que a empresa normalmente é conhecida,
                lembrada, divulgada e apresentada ao público.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#607089]">
                Na metodologia utilizada no Mapa Numerológico Empresarial, o
                número proveniente do Nome Fantasia é considerado o primeiro e
                mais forte número regente.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#123d73] p-9 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f6c84f]">
                Uma pergunta importante
              </p>

              <p className="mt-5 text-3xl font-semibold leading-tight">
                A vibração do nome da sua empresa está de acordo com aquilo que
                você espera conquistar?
              </p>

              <p className="mt-6 leading-7 text-blue-100">
                Antes de alterar um nome empresarial, é importante compreender
                as energias envolvidas e avaliar o conjunto da análise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLOS DE ENERGIAS */}
      <section className="bg-[#fffdf9] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c29629]">
              Diferentes vibrações
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Cada número apresenta características diferentes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#607089]">
              Por isso, não existe uma única energia adequada para todos os
              negócios. É necessário observar a atividade, os objetivos e o
              conjunto numerológico da empresa.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[26px] border border-[#e2d6c0] bg-white p-7">
              <span className="text-4xl font-semibold text-[#c29629]">3</span>

              <h3 className="mt-4 text-xl font-semibold">
                Comunicação e expansão
              </h3>

              <p className="mt-3 leading-7 text-[#607089]">
                Uma vibração relacionada à expressão, comunicação, público,
                criatividade e capacidade de expansão.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#e2d6c0] bg-white p-7">
              <span className="text-4xl font-semibold text-[#c29629]">4</span>

              <h3 className="mt-4 text-xl font-semibold">
                Estrutura e solidez
              </h3>

              <p className="mt-3 leading-7 text-[#607089]">
                Associada à organização, segurança, disciplina, construção e
                resultados desenvolvidos no longo prazo.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#e2d6c0] bg-white p-7">
              <span className="text-4xl font-semibold text-[#c29629]">5</span>

              <h3 className="mt-4 text-xl font-semibold">
                Movimento e expansão
              </h3>

              <p className="mt-3 leading-7 text-[#607089]">
                Uma energia relacionada à liberdade, novidades, movimento,
                mudanças, oportunidades e contato com ambientes diferentes.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#e2d6c0] bg-white p-7">
              <span className="text-4xl font-semibold text-[#c29629]">6</span>

              <h3 className="mt-4 text-xl font-semibold">
                Serviço e cuidado
              </h3>

              <p className="mt-3 leading-7 text-[#607089]">
                Relacionada à prestação de serviços, responsabilidade,
                colaboração, proteção, cuidado e bem-estar.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#e2d6c0] bg-white p-7">
              <span className="text-4xl font-semibold text-[#c29629]">7</span>

              <h3 className="mt-4 text-xl font-semibold">
                Conhecimento e especialização
              </h3>

              <p className="mt-3 leading-7 text-[#607089]">
                Favorece pesquisa, análise, conhecimento e especialização, mas
                exige atenção ao isolamento e à abertura para o mercado.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#e2d6c0] bg-white p-7">
              <span className="text-4xl font-semibold text-[#c29629]">8</span>

              <h3 className="mt-4 text-xl font-semibold">
                Resultados e matéria
              </h3>

              <p className="mt-3 leading-7 text-[#607089]">
                Uma vibração fortemente ligada à administração, eficiência,
                realização material, autoridade e geração de resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c29629]">
              Uma visão estratégica
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              O que podemos observar no Mapa Numerológico Empresarial?
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#607089]">
              O estudo não observa um número isoladamente. A proposta é
              compreender como diferentes vibrações participam da identidade e
              da trajetória do negócio.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#dfd2bb] bg-white p-8 shadow-xl">
            <div className="space-y-5">
              {beneficios.map((beneficio) => (
                <div
                  key={beneficio}
                  className="flex gap-4 border-b border-[#e9dfce] pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f6c84f] text-sm font-bold text-[#123d73]">
                    ✓
                  </div>

                  <p className="leading-7 text-[#4f627d]">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANTES DE CRIAR OU ALTERAR */}
      <section className="bg-[#edf4fb] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c29629]">
            Nome empresarial
          </p>

          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Está criando uma empresa ou pensando em mudar o nome?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#607089]">
            Uma alteração no Nome Fantasia ou na Razão Social modifica os
            números resultantes da análise. Por isso, antes de tomar uma decisão
            definitiva, é possível estudar as opções e compreender melhor suas
            características numerológicas.
          </p>

          <Link
            href="/solicitar-mapa-empresarial"
            className="mt-9 inline-flex rounded-full bg-[#123d73] px-9 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1f629d]"
          >
            Quero Analisar o Nome da Minha Empresa
          </Link>
        </div>
      </section>

      {/* OSCAR */}
      <section className="bg-[#123d73] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f6c84f]">
                Oscar Ahumada
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Numerologia aplicada também às decisões empresariais.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                O Mapa Numerológico Empresarial reúne diferentes números
                regentes para oferecer uma leitura ampla das características
                que acompanham a empresa.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
              <p className="text-xl leading-8 text-blue-50">
                “É muito importante se consultar antes de mudar as energias do
                nome.”
              </p>

              <p className="mt-5 font-semibold text-[#f6c84f]">
                Oscar Ahumada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-white p-8 text-center shadow-[0_20px_60px_rgba(18,61,115,0.12)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c29629]">
            Mapa Numerológico Empresarial
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold">
            Descubra o que os números da sua empresa podem revelar.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#607089]">
            Analise o Nome Fantasia, a Razão Social, o Destino e a vibração do
            endereço para compreender melhor a identidade numerológica do seu
            negócio.
          </p>

          <Link
            href="/solicitar-mapa-empresarial"
            className="mt-9 inline-flex rounded-full bg-[#f6c84f] px-9 py-4 text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70]"
          >
            Solicitar Meu Mapa Empresarial
          </Link>
        </div>
      </section>
    </main>
  );
}