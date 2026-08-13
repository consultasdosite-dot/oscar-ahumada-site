import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e3ec] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-6">
        {/* MARCA */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-black sm:h-14 sm:w-14">
            <Image
              src="/logos/logo-oscar-ahumada.png"
              alt="Logo Oscar Ahumada"
              fill
              priority
              sizes="56px"
              className="object-contain p-1"
            />
          </div>

          <div className="hidden sm:block">
            <div className="whitespace-nowrap text-xl font-bold tracking-[0.08em] text-[#123d73] lg:text-2xl">
              OSCAR AHUMADA
            </div>

            <div className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c29629] lg:text-xs">
              Numerólogo das Estrelas
            </div>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex">
          <Link
            href="/"
            className="whitespace-nowrap text-sm font-bold text-[#123d73] transition-colors hover:text-[#c29629]"
          >
            Início
          </Link>

          <Link
            href="/poderdonome"
            className="whitespace-nowrap text-sm font-bold text-[#123d73] transition-colors hover:text-[#c29629]"
          >
            Poder do Nome
          </Link>

          <Link
            href="/mapa-numerologico"
            className="whitespace-nowrap text-sm font-bold text-[#123d73] transition-colors hover:text-[#c29629]"
          >
            Mapa Pessoal
          </Link>

          <Link
            href="/mapa-empresarial"
            className="whitespace-nowrap text-sm font-bold text-[#123d73] transition-colors hover:text-[#c29629]"
          >
            Empresas
          </Link>

          <Link
            href="/nome-do-bebe"
            className="whitespace-nowrap text-sm font-bold text-[#123d73] transition-colors hover:text-[#c29629]"
          >
            Bebê
          </Link>

          <Link
            href="/nome-profissional"
            className="whitespace-nowrap text-sm font-bold text-[#123d73] transition-colors hover:text-[#c29629]"
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
            className="hidden whitespace-nowrap rounded-full border border-[#d8b55a] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.04em] text-[#123d73] transition hover:-translate-y-0.5 hover:bg-[#fff8e8] lg:inline-flex"
          >
            Ver Ofertas
          </a>

          <Link
            href="/comprar"
            className="whitespace-nowrap rounded-full bg-[#f6c84f] px-5 py-3 text-xs font-bold uppercase tracking-[0.04em] text-[#123d73] shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffda70] sm:px-6 sm:text-sm"
          >
            Comprar Agora
          </Link>
        </div>
      </div>

      {/* MENU MOBILE / TABLET */}
      <div className="border-t border-[#e8eef4] bg-[#f8fbfd] xl:hidden">
        <div className="flex gap-5 overflow-x-auto px-5 py-3 text-sm font-bold text-[#123d73]">
          <Link href="/" className="whitespace-nowrap">
            Início
          </Link>

          <Link href="/poderdonome" className="whitespace-nowrap">
            Poder do Nome
          </Link>

          <Link href="/mapa-numerologico" className="whitespace-nowrap">
            Mapa Pessoal
          </Link>

          <Link href="/mapa-empresarial" className="whitespace-nowrap">
            Empresas
          </Link>

          <Link href="/nome-do-bebe" className="whitespace-nowrap">
            Bebê
          </Link>

          <Link href="/nome-profissional" className="whitespace-nowrap">
            Nome Profissional
          </Link>

          <a
            href="https://wa.me/c/555180339532"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[#b88716]"
          >
            Ver Ofertas
          </a>

          <Link href="/comprar" className="whitespace-nowrap text-[#123d73]">
            Comprar
          </Link>
        </div>
      </div>
    </header>
  );
}