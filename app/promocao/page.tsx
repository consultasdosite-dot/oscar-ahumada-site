
"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/5531972159908?text=" +
  encodeURIComponent(
    "Olá, Oscar! Quero comprar o Mapa Numerológico completo da promoção do Portal 11/11 por R$ 170,00, em até 10 vezes sem juros."
  );

const ENCERRAMENTO = new Date("2026-11-11T23:23:00-03:00");

function calcularTempoRestante() {
  const diferenca = Math.max(
    0,
    Math.floor((ENCERRAMENTO.getTime() - Date.now()) / 1000)
  );

  return {
    dias: Math.floor(diferenca / 86400),
    horas: Math.floor((diferenca % 86400) / 3600),
    minutos: Math.floor((diferenca % 3600) / 60),
    segundos: diferenca % 60,
    encerrada: diferenca === 0,
  };
}

export default function PromocaoPage() {
  const [tempo, setTempo] = useState<
    ReturnType<typeof calcularTempoRestante> | undefined
  >();

  useEffect(() => {
    const atualizar = () => setTempo(calcularTempoRestante());

    atualizar();

    const intervalo = window.setInterval(atualizar, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  const formatar = (numero: number) =>
    String(numero).padStart(2, "0");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050510",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        padding: 0,
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 600 }}>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar a promoção pelo WhatsApp"
          style={{
            display: "block",
            width: "calc(100% - 32px)",
            maxWidth: 460,
            margin: "0 auto",
          }}
        >
          <img
            src="/promocao-oscar.png"
            alt="Promoção especial do Mapa Numerológico de Oscar Ahumada"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </a>

        <section
          style={{
            padding: "28px 18px 42px",
            textAlign: "center",
            background: "linear-gradient(180deg, #080817, #171024)",
          }}
        >
          <h2
            style={{
              color: "#FFD75A",
              fontSize: "clamp(19px, 5vw, 27px)",
              margin: "0 0 12px",
            }}
          >
            OFERTA ESPECIAL DO PORTAL 11/11
          </h2>

          <p style={{ fontSize: 16, marginBottom: 20 }}>
            {tempo?.encerrada
              ? "A promoção do Portal 11/11 foi encerrada."
              : "Aproveite! Oferta válida até 11/11/2026, às 23h23."}
          </p>

          <div
            aria-label="Contagem regressiva até 11 de novembro de 2026, às 23h23, horário de Brasília"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 26,
            }}
          >
            {[
              ["DIAS", tempo?.dias ?? 0],
              ["HORAS", tempo?.horas ?? 0],
              ["MINUTOS", tempo?.minutos ?? 0],
              ["SEGUNDOS", tempo?.segundos ?? 0],
            ].map(([rotulo, numero]) => (
              <div
                key={rotulo}
                style={{
                  flex: 1,
                  maxWidth: 110,
                  background: "#100D19",
                  border: "1px solid #D5A52D",
                  borderRadius: 12,
                  padding: "14px 5px",
                }}
              >
                <div
                  style={{
                    color: "#FFD75A",
                    fontSize: "clamp(25px, 7vw, 43px)",
                    fontWeight: 800,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {formatar(Number(numero))}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 1,
                    marginTop: 5,
                  }}
                >
                  {rotulo}
                </div>
              </div>
            ))}
          </div>

          {tempo && !tempo.encerrada ? (
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "linear-gradient(180deg, #28D951, #087C25)",
                color: "#FFFFFF",
                padding: "20px 12px",
                borderRadius: 15,
                fontSize: "clamp(20px, 5vw, 27px)",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 0 18px #16B84366",
              }}
            >
              COMPRAR AGORA
            </a>
          ) : (
            <div
              style={{
                color: "#FFD75A",
                fontWeight: 700,
                padding: 18,
              }}
            >
              {tempo
                ? "OFERTA ENCERRADA EM 11/11 ÀS 23H23"
                : "CARREGANDO OFERTA..."}
            </div>
          )}

          <p
            style={{
              color: "#D6C9AA",
              fontSize: 13,
              marginTop: 16,
            }}
          >
            Promoção especial do Portal 11/11.
          </p>
        </section>
      </div>
    </main>
  );
}
