import Link from "next/link";
import { produtos } from "../data/produtos";

function formatarPreco(valor: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(valor);
}

export default function ComprarPage() {
  return (
    <main className="bg-[#f7f3eb] text-[#123d73]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0d315d] via-[#174f8a] to-[#2f7fbb] px-5 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f6c84f] sm:text-sm">
            Serviços e atendimentos
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Escolha seu atendimento e compre de forma rápida
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Para quem já conhece o trabalho de Oscar Ahumada e quer ir direto
            ao serviço ideal, reunimos aqui as principais opções disponíveis.
          </p>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {produtos.map((produto) => {
              const temDesconto =
                produto.precoOriginal &&
                produto.precoOriginal > produto.preco;

              return (
                <article
                  key={produto.id}
                  className="flex h-full flex-col rounded-[30px] border border-[#dfd2bb] bg-white p-7 shadow-[0_16px_45px_rgba(18,61,115,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(18,61,115,0.12)]"
                >
                  {/* DESTAQUE */}
                  {produto.destaque && (
                    <span className="inline-flex w-fit rounded-full bg-[#fff4d2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b88716]">
                      {produto.destaque}
                    </span>
                  )}

                  {/* TÍTULO */}
                  <h2 className="mt-5 text-2xl font-semibold leading-tight">
                    {produto.titulo}
                  </h2>

                  {/* PREÇOS */}
                  <div className="mt-5">
                    {temDesconto && (
                      <p className="text-sm font-semibold text-[#8a96a6] line-through">
                        {formatarPreco(produto.precoOriginal!)}
                      </p>
                    )}

                    <p className="mt-1 text-3xl font-bold text-[#123d73]">
                      {formatarPreco(produto.preco)}
                    </p>

                    {temDesconto && (
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#c29629]">
                        Condição especial
                      </p>
                    )}
                  </div>

                  {/* DESCRIÇÃO */}
                  <p className="mt-6 flex-1 leading-7 text-[#607089]">
                    {produto.descricao}
                  </p>

                  {/* CÓDIGO PROMOCIONAL */}
                  {produto.codigoPromocional && (
                    <div className="mt-6 rounded-[18px] border border-[#eadbbd] bg-[#fffaf0] px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b88716]">
                        Código promocional
                      </p>

                      <p className="mt-1 font-semibold text-[#123d73]">
                        {produto.codigoPromocional}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-7">
                    <a
                      href={produto.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        produto.tipoCheckout === "infinitepay"
                          ? "inline-flex w-full items-center justify-center rounded-full bg-[#f6c84f] px-6 py-4 text-sm font-bold text-[#123d73] shadow-md transition hover:-translate-y-1 hover:bg-[#ffda70]"
                          : "inline-flex w-full items-center justify-center rounded-full bg-[#123d73] px-6 py-4 text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#1f629d]"
                      }
                    >
                      {produto.tipoCheckout === "infinitepay"
                        ? "Comprar agora"
                        : "Ver no WhatsApp"}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* BLOCO FINAL */}
          <div className="mt-14 rounded-[34px] bg-gradient-to-r from-[#123d73] via-[#174f8a] to-[#2b78b4] px-7 py-10 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6c84f]">
                Ainda está em dúvida?
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Veja também as ofertas disponíveis no catálogo oficial
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Algumas condições e oportunidades podem ser atualizadas ao longo
                do tempo. O catálogo do WhatsApp concentra as ofertas vigentes.
              </p>
            </div>

            <a
              href="https://wa.me/c/555180339532"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex shrink-0 items-center justify-center rounded-full bg-[#f6c84f] px-8 py-4 text-sm font-bold text-[#123d73] transition hover:-translate-y-1 hover:bg-[#ffda70] lg:mt-0"
            >
              Ver Ofertas no WhatsApp
            </a>
          </div>

          {/* VOLTAR */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="text-sm font-bold text-[#123d73] transition hover:text-[#c29629]"
            >
              ← Voltar para a Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}