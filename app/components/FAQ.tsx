const perguntas = [
  {
    pergunta: "O que é Numerologia Latina?",
    resposta:
      "A Numerologia Latina é um método de interpretação dos números presentes no nome, na data de nascimento e em outras informações importantes da vida pessoal ou empresarial. A proposta é ampliar o autoconhecimento e oferecer uma leitura mais consciente de talentos, desafios, ciclos e tendências.",
  },
  {
    pergunta: "O Mapa Numerológico prevê o futuro?",
    resposta:
      "O Mapa Numerológico não determina acontecimentos de forma rígida. Ele mostra tendências, ciclos, potenciais e pontos de atenção que podem ajudar você a compreender melhor o momento que está vivendo e tomar decisões com mais consciência.",
  },
  {
    pergunta: "Qual a diferença entre o Mapa Numerológico e uma consulta?",
    resposta:
      "O Mapa Numerológico é uma análise estruturada e aprofundada do nome e da data de nascimento. A consulta é um atendimento direcionado às suas perguntas e ao momento atual, permitindo aprofundar dúvidas específicas e interpretar situações de forma mais personalizada.",
  },
  {
    pergunta: "O atendimento pode ser feito online?",
    resposta:
      "Sim. Os atendimentos podem ser realizados online, permitindo atender pessoas em diferentes cidades e países com praticidade e acompanhamento personalizado.",
  },
  {
    pergunta: "Como funciona a Numerologia Empresarial?",
    resposta:
      "A análise empresarial considera principalmente o Nome Fantasia, a Razão Social, o Destino da empresa e o Número do Endereço. O objetivo é compreender como essas vibrações participam da identidade, posicionamento e trajetória do negócio.",
  },
  {
    pergunta: "É possível analisar o nome de um bebê antes do nascimento?",
    resposta:
      "Sim. É possível comparar diferentes opções de nomes antes da escolha definitiva, observando a vibração de cada alternativa. Quando houver sobrenomes e uma previsão de nascimento, essas informações também podem enriquecer a análise.",
  },
  {
    pergunta: "Posso escolher um nome profissional pela Numerologia?",
    resposta:
      "Sim. A análise do Nome Profissional permite estudar diferentes opções de identidade e também possíveis datas de lançamento, buscando combinações mais adequadas ao objetivo profissional e ao posicionamento desejado.",
  },
  {
    pergunta: "O número da casa realmente influencia o ambiente?",
    resposta:
      "Dentro da Numerologia, o número da residência possui uma vibração própria. Essa energia pode ser interpretada para compreender determinadas características do ambiente, da convivência e das experiências dos moradores.",
  },
  {
    pergunta: "É possível harmonizar o número de uma residência?",
    resposta:
      "Sim. Dentro do método utilizado, podem ser estudadas formas de harmonização através da combinação entre números e letras, sempre considerando a vibração atual e o objetivo dos moradores.",
  },
  {
    pergunta: "Onde encontro os valores e promoções atuais?",
    resposta:
      "Os valores, condições especiais e promoções disponíveis são atualizados no catálogo oficial de Oscar Ahumada no WhatsApp. Assim, você sempre consulta as condições vigentes no momento.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#f7f3eb] px-5 py-20 text-[#123d73] sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* CABEÇALHO */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c29629] sm:text-sm">
            Perguntas frequentes
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tire suas dúvidas antes de escolher seu atendimento
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#607089]">
            Reunimos algumas das perguntas mais comuns sobre os serviços,
            análises e atendimentos numerológicos.
          </p>
        </div>

        {/* PERGUNTAS */}
        <div className="mt-12 space-y-4">
          {perguntas.map((item, index) => (
            <details
              key={item.pergunta}
              className="group rounded-[24px] border border-[#dfd2bb] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(18,61,115,0.05)] open:shadow-[0_16px_40px_rgba(18,61,115,0.08)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-sm font-bold text-[#c29629]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold leading-7 sm:text-xl">
                    {item.pergunta}
                  </h3>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4fb] text-xl font-semibold text-[#123d73] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="ml-8 mt-5 border-t border-[#eee4d2] pt-5 sm:ml-10">
                <p className="leading-8 text-[#607089]">
                  {item.resposta}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-12 rounded-[32px] bg-gradient-to-r from-[#123d73] via-[#174f8a] to-[#2b78b4] px-7 py-10 text-center text-white shadow-xl sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6c84f]">
            Ainda ficou alguma dúvida?
          </p>

          <h3 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold">
            Escolha o atendimento que mais combina com o seu momento
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Consulte os serviços, análises e condições disponíveis atualmente
            no catálogo oficial.
          </p>

          <a
            href="https://wa.me/c/555180339532"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffda70]"
          >
            Ver Atendimentos e Ofertas
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}