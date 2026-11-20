
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../lib/supabaseAdmin";

export const runtime = "nodejs";

const LIMITE_BYTES = 2048;
const INTERVALO_MINIMO_MS = 10000;

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function resposta(
  status: number,
  sucesso = false
) {
  return NextResponse.json(
    { sucesso },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  try {
    const origemRequisicao = request.headers.get("origin");

    if (!origemRequisicao) {
      return resposta(403);
    }

    let origemURL: URL;

    try {
      origemURL = new URL(origemRequisicao);
    } catch {
      return resposta(403);
    }

    const host = request.headers.get("host");

    if (
      !host ||
      origemURL.host !== host ||
      !["http:", "https:"].includes(origemURL.protocol)
    ) {
      return resposta(403);
    }

    const tipo = request.headers.get("content-type") || "";

    if (!tipo.toLowerCase().startsWith("application/json")) {
      return resposta(415);
    }

    const tamanhoInformado = Number(
      request.headers.get("content-length") || 0
    );

    if (tamanhoInformado > LIMITE_BYTES) {
      return resposta(413);
    }

    const texto = await request.text();

    if (
      new TextEncoder().encode(texto).length > LIMITE_BYTES
    ) {
      return resposta(413);
    }

    let dados: unknown;

    try {
      dados = JSON.parse(texto);
    } catch {
      return resposta(400);
    }

    if (
      !dados ||
      typeof dados !== "object" ||
      Array.isArray(dados)
    ) {
      return resposta(400);
    }

    const {
      sessao_id,
      pagina,
      origem,
      dispositivo,
    } = dados as Record<string, unknown>;

    if (
      typeof sessao_id !== "string" ||
      !uuidRegex.test(sessao_id) ||
      typeof pagina !== "string" ||
      !pagina.startsWith("/") ||
      pagina.startsWith("//") ||
      pagina.length > 250 ||
      pagina.includes("?") ||
      pagina.includes("#") ||
      pagina.includes("\\") ||
      /[\u0000-\u001f\u007f]/.test(pagina) ||
      /^\/(admin|api)(\/|$)/i.test(pagina)
    ) {
      return resposta(400);
    }

    const origemLimpa =
      typeof origem === "string" &&
      origem.length <= 100 &&
      /^[a-zA-Z0-9.-]+$/.test(origem)
        ? origem
        : "Direto";

    const dispositivoLimpo =
      dispositivo === "Celular" ||
      dispositivo === "Computador"
        ? dispositivo
        : "Desconhecido";

    const supabase = getSupabaseAdmin();

    const { data: registro, error: erroConsulta } =
      await supabase
        .from("radar_visitantes")
        .select("ultimo_acesso")
        .eq("sessao_id", sessao_id)
        .maybeSingle();

    if (erroConsulta) {
      console.error("Radar consulta:", erroConsulta.code);
      return resposta(500);
    }

    const agora = Date.now();

    if (registro?.ultimo_acesso) {
      const ultimo = new Date(
        registro.ultimo_acesso
      ).getTime();

      if (
        Number.isFinite(ultimo) &&
        agora - ultimo >= 0 &&
        agora - ultimo < INTERVALO_MINIMO_MS
      ) {
        return resposta(200, true);
      }
    }

    const { error } = await supabase
      .from("radar_visitantes")
      .upsert(
        {
          sessao_id,
          pagina,
          origem: origemLimpa,
          dispositivo: dispositivoLimpo,
          ultimo_acesso: new Date(agora).toISOString(),
        },
        {
          onConflict: "sessao_id",
        }
      );

    if (error) {
      console.error("Radar registro:", error.code);
      return resposta(500);
    }

    return resposta(200, true);
  } catch {
    return resposta(500);
  }
}
