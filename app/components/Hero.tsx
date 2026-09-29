
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d315d] via-[#174f8a] to-[#2f7fbb] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        {/* IMAGEM PARA CELULAR */}
        <div className="mx-auto max-w-[650px] overflow-hidden rounded-2xl md:hidden">
          <Image
            src="/images/oscar-hero-mobile.png"
            alt="Oscar Ahumada - Numerologia Pessoal e Empresarial"
            width={928}
            height={1664}
            priority
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        {/* IMAGEM PARA NOTEBOOK E DESKTOP */}
        <div className="hidden overflow-hidden rounded-2xl md:block">
          <Image
            src="/images/oscar-hero-desktop.png"
            alt="Oscar Ahumada - Numerologia Pessoal e Empresarial"
            width={1648}
            height={928}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full"
          />
        </div>

        {/* BOTÃO WHATSAPP */}
        <div className="mx-auto mt-5 flex max-w-[650px] justify-center">
          <a
            href="https://wa.me/5531972159908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#20c565] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition duration-300 hover:bg-[#18a653] sm:w-auto"
          >
            FALE COM OSCAR
          </a>
        </div>

        {/* AUTORIDADE */}
        <div className="mx-auto mt-9 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
          <div>
            <strong className="block text-2xl font-bold text-[#f6c84f] sm:text-3xl">
              40+
            </strong>
            <span className="mt-1 block text-xs leading-5 text-blue-100 sm:text-sm">
              anos de experiência
            </span>
          </div>

          <div>
            <strong className="block text-2xl font-bold text-[#f6c84f] sm:text-3xl">
              30.000+
            </strong>
            <span className="mt-1 block text-xs leading-5 text-blue-100 sm:text-sm">
              mapas realizados
            </span>
          </div>

          <div>
            <strong className="block text-2xl font-bold text-[#f6c84f] sm:text-3xl">
              20+
            </strong>
            <span className="mt-1 block text-xs leading-5 text-blue-100 sm:text-sm">
              países
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
