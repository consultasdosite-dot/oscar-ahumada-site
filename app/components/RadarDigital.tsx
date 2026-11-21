
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RadarDigital() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || /^\/(admin|api)(\/|$)/i.test(pathname)) {
      return;
    }

    async function registrarVisita() {
      if (document.visibilityState !== "visible") {
        return;
      }

      try {
        let sessao = sessionStorage.getItem("radar_sessao");

        if (!sessao) {
          sessao = crypto.randomUUID();
          sessionStorage.setItem("radar_sessao", sessao);
        }

        let origem = "Direto";

        if (document.referrer) {
          origem = new URL(document.referrer).hostname;
        }

        const dispositivo = /Android|iPhone|iPad|Mobile/i.test(
          navigator.userAgent
        )
          ? "Celular"
          : "Computador";

        await fetch("/api/radar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessao_id: sessao,
            pagina: pathname,
            origem,
            dispositivo,
          }),
        });
      } catch {
        // O monitoramento não deve interferir na navegação.
      }
    }

    registrarVisita();

    const intervalo = window.setInterval(registrarVisita, 30000);

    document.addEventListener("visibilitychange", registrarVisita);

    return () => {
      window.clearInterval(intervalo);
      document.removeEventListener("visibilitychange", registrarVisita);
    };
  }, [pathname]);

  return null;
}
