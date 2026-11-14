
import Image from "next/image";
import Link from "next/link";

export default function CartasNumerologicasHome() {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Link
        href="/cartas-numerologicas/1"
        aria-label="Clique aqui para começar seu jogo de cartas numerológicas"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <Image
          src="/capa-cartas.png"
          alt="Oscar Ahumada — As Cartas Numerológicas Voltaram. Clique aqui para começar."
          width={941}
          height={1672}
          priority
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Link>
    </main>
  );
}
