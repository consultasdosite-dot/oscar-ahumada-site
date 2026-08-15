import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e3ec] bg-white/95 backdrop-blur">
      {/* CABEÇALHO PRINCIPAL */}
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
        {/* MARCA */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-black sm:h-14 sm:w-14 lg:h-16 lg:w-16">
            <Image
              src="/icon.png"
              alt="Logo Oscar Ahumada"
              fill
              priority
              sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
              className="object-contain"
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
        <nav className="hidden flex-1 items-center justify-center gap-6 xl:flex">
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

        {/* BOTÕES */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://wa.me/c/555180339532"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-[#d8b55a] bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.05em] text-[#123d73] transition hover:-translate-y-0.5 hover:bg-[#fff8e8] lg:inline-flex"
          >
            Ver Ofertas
          </a>

          <Link
            href="/comprar"
            className="whitespace-nowrap rounded-full bg-[#f6c84f] px-5 py-3 text-xs font-bold uppercase tracking-[0.04em] text-[#123d73] shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffda70] sm:px-7 sm:text-sm"
          >
            <span className="sm:hidden">Comprar</span>
            <span className="hidden sm:inline">Comprar Agora</span>
          </Link>
        </div>
      </div>

      {/* MENU MOBILE / TABLET */}
      <div className="border-t border-[#e8eef4] bg-[#f8fbfd] xl:hidden">
        <nav className="mx-auto flex max-w-[1800px] items-center justify-between gap-3 px-5 py-3 sm:px-6">
          <Link
            href="/"
            className="whitespace-nowrap text-xs font-bold text-[#123d73] sm:text-sm"
          >
            Início
          </Link>

          <Link
            href="/mapa-numerologico"
            className="whitespace-nowrap text-xs font-bold text-[#123d73] sm:text-sm"
          >
            Mapa Pessoal
          </Link>

          <Link
            href="/mapa-empresarial"
            className="whitespace-nowrap text-xs font-bold text-[#123d73] sm:text-sm"
          >
            Empresas
          </Link>

          <Link
            href="/nome-do-bebe"
            className="whitespace-nowrap text-xs font-bold text-[#123d73] sm:text-sm"
          >
            Bebê
          </Link>

          <details className="relative">
            <summary className="cursor-pointer list-none whitespace-nowrap text-xs font-bold text-[#b88716] sm:text-sm">
              Mais
            </summary>

            <div className="absolute right-0 top-8 z-[60] w-56 rounded-2xl border border-[#e3e8ee] bg-white p-2 shadow-xl">
              <Link
                href="/poderdonome"
                className="block rounded-xl px-4 py-3 text-sm font-bold text-[#123d73] hover:bg-[#f8fbfd]"
              >
                Poder do Nome
              </Link>

              <Link
                href="/nome-profissional"
                className="block rounded-xl px-4 py-3 text-sm font-bold text-[#123d73] hover:bg-[#f8fbfd]"
              >
                Nome Profissional
              </Link>

              <Link
                href="/numerologia-da-casa"
                className="block rounded-xl px-4 py-3 text-sm font-bold text-[#123d73] hover:bg-[#f8fbfd]"
              >
                Numerologia da Casa
              </Link>

              <a
                href="https://wa.me/c/555180339532"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 text-sm font-bold text-[#b88716] hover:bg-[#fff8e8]"
              >
                Ver Ofertas
              </a>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}