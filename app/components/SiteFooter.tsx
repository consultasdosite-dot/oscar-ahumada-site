import Link from "next/link";

export default function SiteFooter() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-[#0d315d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* MARCA */}
          <div>
            <Link href="/" className="inline-block">
              <div className="text-2xl font-bold tracking-[0.08em]">
                OSCAR AHUMADA
              </div>

              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f6c84f]">
                Numerólogo das Estrelas
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
              Numerologia Latina aplicada ao autoconhecimento, escolhas
              pessoais, vida profissional e desenvolvimento empresarial.
            </p>
          </div>

          {/* SERVIÇOS */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
              Numerologia
            </p>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-blue-100">
              <Link
                href="/poderdonome"
                className="transition hover:text-white"
              >
                Poder do Nome
              </Link>

              <Link
                href="/mapa-numerologico"
                className="transition hover:text-white"
              >
                Mapa Numerológico Pessoal
              </Link>

              <Link
                href="/mapa-empresarial"
                className="transition hover:text-white"
              >
                Mapa Numerológico Empresarial
              </Link>

              <Link
                href="/nome-do-bebe"
                className="transition hover:text-white"
              >
                Nome do Bebê
              </Link>

              <Link
                href="/nome-profissional"
                className="transition hover:text-white"
              >
                Nome Profissional
              </Link>
            </nav>
          </div>

          {/* ATENDIMENTO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
              Atendimento
            </p>

            <div className="mt-5 space-y-3 text-sm leading-6 text-blue-100">
              <p>
                Atendimento personalizado com Oscar Ahumada.
              </p>

              <p>
                Consultas e Mapas Numerológicos pessoais e empresariais.
              </p>

              <p>
                Atendimento online para diferentes cidades e países.
              </p>
            </div>

            <Link
              href="/solicitar-mapa"
              className="mt-6 inline-flex rounded-full bg-[#f6c84f] px-6 py-3 text-sm font-bold text-[#123d73] transition hover:-translate-y-0.5 hover:bg-[#ffda70]"
            >
              Solicitar Atendimento
            </Link>
          </div>

          {/* CONHEÇA */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c84f]">
              Oscar Ahumada
            </p>

            <p className="mt-5 text-sm leading-7 text-blue-100">
              Conheça a trajetória, o método e o trabalho desenvolvido através
              da Numerologia Latina.
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-blue-100">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Página Inicial
              </Link>

              <Link
                href="/mapa-numerologico"
                className="transition hover:text-white"
              >
                Conheça o Mapa Numerológico
              </Link>
            </div>
          </div>
        </div>

        {/* LINHA FINAL */}
        <div className="mt-12 border-t border-white/15 pt-7">
          <div className="flex flex-col gap-4 text-center text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © {anoAtual} Oscar Ahumada. Todos os direitos reservados.
            </p>

            <p>
              Numerologia Latina • Autoconhecimento • Desenvolvimento Pessoal e
              Empresarial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}