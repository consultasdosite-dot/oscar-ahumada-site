
"use client";

import Image from "next/image";
import Link from "next/link";

export default function MeuMomentoMaterialPage() {
  return (
    <main className="min-h-screen bg-[#071c20] flex items-center justify-center">
      <Link
        href="/mm/jogo1"
        aria-label="Começar o jogo Meu Momento Material"
        className="block w-full max-w-[560px] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#eec875]"
      >
        <Image
          src="/mm-capa.png"
          alt="As Cartas do Seu Momento Material Voltaram. Clique aqui para começar. Oscar Ahumada, Numerólogo das Estrelas."
          width={1122}
          height={1402}
          priority
          sizes="(max-width: 560px) 100vw, 560px"
          className="block h-auto w-full"
        />
      </Link>
    </main>
  );
}
