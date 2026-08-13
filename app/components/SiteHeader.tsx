import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e3ec] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-6">
        {/* MARCA */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-black shadow-sm sm:h-16 sm:w-16">
            <Image
              src="/logos/logo-oscar-ahumada.png"
              alt="Logo Oscar Ahumada"
              fill
              priority
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <div className="text-xl font-bold tracking-[0.08em] text-[#123d73] sm:text-2xl">
              OSCAR AHUMADA
            </div>

            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c29629] sm:text-xs">
              Numerólogo das Estrelas
            </div>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-5 xl:flex">
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

        {/* AÇÕES */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/c/555180339532"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-[#d8b55a] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.04em] text-[#123d73] transition hover:-translate-y-0.5 hover:bg-[#fff8e8] lg:inline-flex"
          >
            Ver Ofertas
          </a>

          <Link
            href="/comprar"
            className="rounded-full bg-[#f6c84f] px-5 py-3 text-xs font-bold uppercase tracking-[0.04em] text-[#123d73] shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffda70] sm:px-7 sm:text-sm"
          >
            Comprar Agora
          </Link>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className="border-t border-[#e8eef4] bg-[#f8fbfd] xl:hidden">
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

          <Link
            href="/comprar"
            className="whitespace-nowrap text-[#123d73]"
          >
            Comprar
          </Link>
        </div>
      </div>
    </header>
  );
}