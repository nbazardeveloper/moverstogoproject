import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { Session } from "@supabase/supabase-js";
import { LogOut, RefreshCw } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Lead = Database["public"]["Tables"]["quote_requests"]["Row"];

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin | Movers To Go" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminPage,
});

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [leadsError, setLeadsError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => subscription.subscription.unsubscribe();
  }, []);

  const fetchLeads = async () => {
    setLeadsLoading(true);
    setLeadsError(null);
    const { data, error } = await supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setLeadsError(error.message);
    } else {
      setLeads(data ?? []);
    }
    setLeadsLoading(false);
  };

  useEffect(() => {
    if (session) void fetchLeads();
  }, [session]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSigningIn(true);
    setSignInError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setSignInError(error.message);
    setSigningIn(false);
  };

  const logOut = async () => {
    await supabase.auth.signOut();
    setLeads([]);
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <main>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-foreground/60">Loading…</p>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          {!session ? (
            <form
              onSubmit={onSubmit}
              className="mx-auto max-w-sm rounded-2xl border border-border bg-background p-8 shadow-lg"
            >
              <h1 className="mb-4 font-display text-2xl font-extrabold text-foreground">
                Admin Login
              </h1>

              <label htmlFor="admin-email" className="mb-1.5 block text-sm font-semibold">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                required
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mb-3 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm focus-visible:border-brand focus-visible:outline-none"
              />

              <label htmlFor="admin-password" className="mb-1.5 block text-sm font-semibold">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm focus-visible:border-brand focus-visible:outline-none"
              />

              {signInError && (
                <p role="alert" className="mt-2 text-sm text-destructive">
                  {signInError}
                </p>
              )}

              <button
                type="submit"
                disabled={signingIn}
                className="mt-4 w-full rounded-lg bg-brand px-5 py-3 text-sm font-bold tracking-wide text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {signingIn ? "Signing in…" : "Sign In"}
              </button>
            </form>
          ) : (
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h1 className="font-display text-3xl font-extrabold">
                  Leads <span className="text-brand">({leads.length})</span>
                </h1>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => fetchLeads()}
                    disabled={leadsLoading}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand disabled:opacity-60"
                  >
                    <RefreshCw aria-hidden className="h-4 w-4" />
                    Refresh
                  </button>
                  <button
                    type="button"
                    onClick={logOut}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                  >
                    <LogOut aria-hidden className="h-4 w-4" />
                    Log Out
                  </button>
                </div>
              </div>

              {leadsError && (
                <p role="alert" className="mb-4 text-sm text-destructive">
                  {leadsError}
                </p>
              )}

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[800px] text-left text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th scope="col" className="p-3 text-xs font-bold tracking-wide uppercase">
                        Date
                      </th>
                      <th scope="col" className="p-3 text-xs font-bold tracking-wide uppercase">
                        Name
                      </th>
                      <th scope="col" className="p-3 text-xs font-bold tracking-wide uppercase">
                        Phone
                      </th>
                      <th scope="col" className="p-3 text-xs font-bold tracking-wide uppercase">
                        Email
                      </th>
                      <th scope="col" className="p-3 text-xs font-bold tracking-wide uppercase">
                        Move Date
                      </th>
                      <th scope="col" className="p-3 text-xs font-bold tracking-wide uppercase">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-t border-border">
                        <td className="p-3 whitespace-nowrap text-foreground/70">
                          {formatDate(lead.created_at)}
                        </td>
                        <td className="p-3 font-semibold">{lead.full_name}</td>
                        <td className="p-3 whitespace-nowrap">
                          <a href={`tel:${lead.phone}`} className="hover:text-brand">
                            {lead.phone}
                          </a>
                        </td>
                        <td className="p-3">
                          <a href={`mailto:${lead.email}`} className="hover:text-brand">
                            {lead.email}
                          </a>
                        </td>
                        <td className="p-3 whitespace-nowrap">{lead.move_date ?? "—"}</td>
                        <td className="p-3 text-foreground/70">{lead.move_type}</td>
                      </tr>
                    ))}
                    {leads.length === 0 && !leadsLoading && (
                      <tr>
                        <td colSpan={6} className="p-6 text-center text-foreground/60">
                          No leads yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
