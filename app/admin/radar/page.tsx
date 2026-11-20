
import { redirect } from "next/navigation";
import { getSupabaseAdmin } from "../../lib/supabaseAdmin";
import { getSupabaseServer } from "../../lib/supabaseServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Radar Digital",
  robots: {
    index: false,
    follow: false,
  },
};

async function entrar(formData: FormData) {
  "use server";

  const email = String(formData.get("email") || "").trim();
  const senha = String(formData.get("senha") || "");

  if (!email || !senha) {
    redirect("/admin/radar?erro=login");
  }

  const supabase = await getSupabaseServer();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: senha,
  });

  if (error) {
    redirect("/admin/radar?erro=login");
  }

  const { data, error: erroUsuario } =
    await supabase.auth.getUser();

  if (
    erroUsuario ||
    !data.user ||
    data.user.app_metadata?.radar_admin !== true
  ) {
    await supabase.auth.signOut();
    redirect("/admin/radar?erro=permissao");
  }

  redirect("/admin/radar");
}

async function sair() {
  "use server";

  const supabase = await getSupabaseServer();
  await supabase.auth.signOut();

  redirect("/admin/radar");
}

type Props = {
  searchParams: Promise<{ erro?: string }>;
};

export default async function RadarPage({ searchParams }: Props) {
  const supabaseAuth = await getSupabaseServer();

  const { data: dadosUsuario, error: erroUsuario } =
    await supabaseAuth.auth.getUser();

  const autorizado =
    !erroUsuario &&
    dadosUsuario.user?.app_metadata?.radar_admin === true;

  if (!autorizado) {
    const { erro } = await searchParams;

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-5 text-white">
        <section className="w-full max-w-md rounded-2xl border border-[#d4af37]/30 bg-[#101e2e] p-8 shadow-2xl">
          <div className="text-center">
            <p className="font-serif text-5xl text-[#d4af37]">
              OA
            </p>

            <p className="mt-4 text-xs tracking-[0.3em] text-[#d4af37]">
              OSCAR AHUMADA
            </p>

            <h1 className="mt-8 text-3xl font-bold">
              RADAR DIGITAL
            </h1>

            <p className="mt-3 text-sm text-slate-400">
              Acesso administrativo exclusivo
            </p>
          </div>

          {erro && (
            <p
              role="alert"
              className="mt-6 rounded-lg border border-red-700 bg-red-950 p-4 text-center text-sm text-red-200"
            >
              {erro === "permissao"
                ? "Esta conta não possui autorização administrativa."
                : "Não foi possível entrar. Confira seus dados."}
            </p>
          )}

          <form action={entrar} className="mt-8 space-y-5">
            <label className="block text-sm font-medium">
              E-mail
              <input
                type="email"
                name="email"
                autoComplete="username"
                required
                className="mt-2 w-full rounded-lg border border-slate-600 bg-[#07111f] px-4 py-3 text-white outline-none focus:border-[#d4af37]"
                placeholder="Seu e-mail administrativo"
              />
            </label>

            <label className="block text-sm font-medium">
              Senha
              <input
                type="password"
                name="senha"
                autoComplete="current-password"
                required
                className="mt-2 w-full rounded-lg border border-slate-600 bg-[#07111f] px-4 py-3 text-white outline-none focus:border-[#d4af37]"
                placeholder="Sua senha"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#d4af37] px-5 py-4 font-bold text-black hover:bg-[#e8c65c]"
            >
              ENTRAR NO RADAR DIGITAL
            </button>
          </form>
        </section>
      </main>
    );
  }

  const supabase = getSupabaseAdmin();

  const agora = new Date();
  const limite = new Date(agora.getTime() - 90000);

  const { data, error, count } = await supabase
    .from("radar_visitantes")
    .select("*", { count: "exact" })
    .gte("ultimo_acesso", limite.toISOString())
    .neq("origem", "Teste")
    .order("ultimo_acesso", { ascending: false })
    .limit(100);

  const visitantes = data || [];
  const online = count || 0;

  const celulares = visitantes.filter(
    (v) => v.dispositivo === "Celular"
  ).length;

  const computadores = visitantes.filter(
    (v) => v.dispositivo === "Computador"
  ).length;

  function horario(data: string) {
    return new Date(data).toLocaleTimeString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  }

  function permanencia(inicio: string, fim: string) {
    const segundos = Math.max(
      0,
      Math.floor(
        (new Date(fim).getTime() -
          new Date(inicio).getTime()) / 1000
      )
    );

    return `${Math.floor(segundos / 60)}min ${segundos % 60}s`;
  }

  return (
    <main className="min-h-screen bg-[#07111f] p-5 text-white md:p-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="font-serif text-5xl text-[#d4af37]">
            OA
          </p>

          <p className="mt-3 tracking-[0.3em] text-[#d4af37]">
            OSCAR AHUMADA
          </p>

          <h1 className="mt-8 text-4xl font-bold md:text-6xl">
            RADAR DIGITAL
          </h1>

          <p className="mt-3 text-slate-400">
            Central de monitoramento de visitantes
          </p>

          <p className="mt-4 text-sm text-green-400">
            ● MONITORAMENTO EM TESTE
          </p>

          <form action={sair} className="mt-6">
            <button
              type="submit"
              className="rounded-lg border border-slate-600 px-6 py-2 text-sm hover:bg-slate-800"
            >
              SAIR DO PAINEL
            </button>
          </form>
        </header>

        {error && (
          <div className="mb-6 rounded-xl bg-red-950 p-5">
            Não foi possível consultar os visitantes.
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-green-700 bg-[#101e2e] p-8 text-center">
            <p className="text-sm text-green-400">
              ONLINE AGORA
            </p>
            <p className="mt-4 text-7xl font-bold text-green-400">
              {error ? "—" : online}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#101e2e] p-8 text-center">
            <p className="text-sm text-slate-400">
              CELULARES NA LISTA
            </p>
            <p className="mt-4 text-6xl font-bold">
              {error ? "—" : celulares}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#101e2e] p-8 text-center">
            <p className="text-sm text-slate-400">
              COMPUTADORES NA LISTA
            </p>
            <p className="mt-4 text-6xl font-bold">
              {error ? "—" : computadores}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-700 bg-[#101e2e] p-5">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">
              Visitantes ativos
            </h2>

            <a
              href="/admin/radar"
              className="rounded-lg bg-[#d4af37] px-6 py-3 font-bold text-black"
            >
              ATUALIZAR RADAR
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-700 text-slate-400">
                <tr>
                  <th className="p-4">Status</th>
                  <th className="p-4">Página</th>
                  <th className="p-4">Origem</th>
                  <th className="p-4">Dispositivo</th>
                  <th className="p-4">Permanência estimada</th>
                  <th className="p-4">Último sinal</th>
                </tr>
              </thead>

              <tbody>
                {visitantes.map((v) => (
                  <tr
                    key={v.id}
                    className="border-b border-slate-800"
                  >
                    <td className="p-4 text-green-400">
                      ● Online
                    </td>

                    <td className="p-4 text-[#d4af37]">
                      {v.pagina}
                    </td>

                    <td className="p-4">{v.origem}</td>

                    <td className="p-4">{v.dispositivo}</td>

                    <td className="p-4">
                      {permanencia(
                        v.primeiro_acesso,
                        v.ultimo_acesso
                      )}
                    </td>

                    <td className="p-4">
                      {horario(v.ultimo_acesso)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!error && visitantes.length === 0 && (
              <p className="py-12 text-center text-slate-400">
                Nenhum visitante online neste momento.
              </p>
            )}
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-slate-500">
          RADAR DIGITAL — OSCAR AHUMADA © 2026
        </footer>
      </div>
    </main>
  );
}
