import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  if (typeof window !== "undefined") {
    throw new Error("Acesso permitido somente no servidor.");
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error("Configuração do Supabase incompleta.");
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}