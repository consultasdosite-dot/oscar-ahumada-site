import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e3ec] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6">
        {/* MARCA */}
        <Link href="/" className="shrink-0">
          <div className="text-xl font-bold tracking-[0.08em] text-[#123d73] sm:text-2xl">
            OSCAR AHUMADA
          </div>

          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c29629] sm:text-xs">
            Numerólogo das Estrelas
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className="text-sm font-bold text-[#123d73] transition-colors duration-200 hover:text-[#c29629]"
          >
            Início
          </Link>

          <Link
            href="/poderdonome"
            className="text-sm font-bold text-[#123d73] transition-colors duration-200 hover:text-[#c29629]"
          >
            Poder do Nome
          </Link>

          <Link
            href="/mapa-numerologico"
            className="text-sm font-bold text-[#123d73] transition-colors duration-200 hover:text-[#c29629]"
          >
            Mapa Pessoal
          </Link>

          <Link
            href="/mapa-empresarial"
            className="text-sm font-bold text-[#123d73] transition-colors duration-200 hover:text-[#c29629]"
          >
            Empresas
          </Link>

          <Link
            href="/nome-do-bebe"
            className="text-sm font-bold text-[#123d73] transition-colors duration-200 hover:text-[#c29629]"
          >
            Bebê
          </Link>

          <Link
            href="/nome-profissional"
            className="text-sm font-bold text-[#123d73] transition-colors duration-200 hover:text-[#c29629]"
          >
            Nome Profissional
          </Link>
        </nav>

        {/* CTA PRINCIPAL */}
        <a
          href="https://wa.me/c/555180339532"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#f6c84f] px-6 py-3 text-xs font-bold uppercase tracking-[0.04em] text-[#123d73] shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffda70] sm:px-8 sm:text-sm"
        >
          Ver Ofertas
        </a>
      </div>

      {/* MENU MOBILE */}
      <div className="border-t border-[#e8eef4] bg-[#f8fbfd] lg:hidden">
        <div className="flex gap-5 overflow-x-auto px-5 py-3 text-sm font-bold text-[#123d73]">
          <Link
            href="/poderdonome"
            className="whitespace-nowrap transition-colors hover:text-[#c29629]"
          >
            Poder do Nome
          </Link>

          <Link
            href="/mapa-numerologico"
            className="whitespace-nowrap transition-colors hover:text-[#c29629]"
          >
            Mapa Pessoal
          </Link>

          <Link
            href="/mapa-empresarial"
            className="whitespace-nowrap transition-colors hover:text-[#c29629]"
          >
            Empresas
          </Link>

          <Link
            href="/nome-do-bebe"
            className="whitespace-nowrap transition-colors hover:text-[#c29629]"
          >
            Bebê
          </Link>

          <Link
            href="/nome-profissional"
            className="whitespace-nowrap transition-colors hover:text-[#c29629]"
          >
            Profissional
          </Link>

          <a
            href="https://wa.me/c/555180339532"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[#b88716]"
          >
            Ver Ofertas
          </a>
        </div>
      </div>
    </header>
  );
}