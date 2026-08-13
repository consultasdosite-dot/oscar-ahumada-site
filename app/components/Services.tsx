import Link from "next/link";

const servicos = [
  {
    numero: "01",
    titulo: "Poder do Nome",
    texto:
      "Descubra a vibração do nome pelo qual você é conhecido e conheça uma das revelações da Numerologia Latina.",
    href: "/poderdonome",
    cta: "Descobrir agora",
  },
  {
    numero: "02",
    titulo: "Mapa Numerológico Pessoal",
    texto:
      "Compreenda talentos, desafios, ciclos, relacionamentos, propósito e momentos importantes da sua trajetória.",
    href: "/mapa-numerologico",
    cta: "Conhecer meu mapa",
  },
  {
    numero: "03",
    titulo: "Mapa Numerológico Empresarial",
    texto:
      "Analise Nome Fantasia, Razão Social, Destino e Número do Endereço para compreender melhor a identidade numerológica da empresa.",
    href: "/mapa-empresarial",
    cta: "Analisar minha empresa",
  },
  {
    numero: "04",
    titulo: "Nome do Bebê",
    texto:
      "Compare diferentes opções e observe a vibração numerológica dos nomes antes de uma escolha tão importante.",
    href: "/nome-do-bebe",
    cta: "Comparar nomes",
  },
  {
    numero: "05",
    titulo: "Nome Profissional",
    texto:
      "Estude opções de identidade profissional e possíveis datas de lançamento com foco em liderança, comunicação e realização.",
    href: "/nome-profissional",
    cta: "Testar nomes e datas",
  },
  {
    numero: "06",
    titulo: "Numerologia da Casa",
    texto:
      "Descubra a vibração do número da sua residência e compreenda como essa energia pode influenciar o ambiente, a convivência e determinadas experiências vividas pelos moradores.",
    href: "/numerologia-da-casa",
    cta: "Analisar minha casa",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f7f3eb] px-5 py-20 text-[#123d73] sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* CABEÇALHO */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c29629] sm:text-sm">
            Numerologia aplicada à vida real
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Descubra como os números podem ajudar em decisões importantes
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#607089]">
            Cada serviço foi pensado para responder a uma necessidade diferente:
            compreender a própria vida, analisar uma empresa, escolher um nome,
            construir uma nova identidade profissional ou entender a energia do
            lugar onde você vive.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicos.map((servico) => (
            <article
              key={servico.numero}
              className="group relative overflow-hidden rounded-[30px] border border-[#dfd2bb] bg-white p-7 shadow-[0_16px_45px_rgba(18,61,115,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(18,61,115,0.13)]"
            >
              {/* NÚMERO DECORATIVO */}
              <div className="absolute right-5 top-3 text-7xl font-light text-[#c29629]/10">
                {servico.numero}
              </div>

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b55a] bg-[#fffaf0] text-sm font-bold text-[#b88716]">
                  {servico.numero}
                </div>

                <h3 className="mt-7 text-2xl font-semibold leading-tight">
                  {servico.titulo}
                </h3>

                <p className="mt-5 min-h-[112px] leading-7 text-[#607089]">
                  {servico.texto}
                </p>

                <Link
                  href={servico.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#123d73] transition group-hover:text-[#c29629]"
                >
                  {servico.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BLOCO DE CONVERSÃO */}
        <div className="mt-14 overflow-hidden rounded-[34px] bg-gradient-to-r from-[#123d73] via-[#174f8a] to-[#2b78b4] px-7 py-10 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6c84f]">
              Não sabe por onde começar?
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Comece por uma descoberta simples: o poder do seu nome.
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              É gratuito, rápido e pode ser o primeiro passo para compreender
              melhor a sua própria vibração numerológica.
            </p>
          </div>

          <Link
            href="/poderdonome"
            className="mt-7 inline-flex shrink-0 items-center justify-center rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70] lg:mt-0"
          >
            Descobrir o Poder do Meu Nome
          </Link>
        </div>
      </div>
    </section>
  );
}