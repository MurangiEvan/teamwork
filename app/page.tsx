import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Lab Locator
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Find the right lab, fast.</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Track venue status, manage tutoring sessions, and sign in to the space your class needs.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/login"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-400 hover:bg-slate-100"
          >
            <div className="text-lg font-semibold text-slate-900">Log in</div>
            <p className="mt-2 text-sm text-slate-600">Return to your existing account and continue managing sessions.</p>
          </Link>

          <Link
            href="/register"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-400 hover:bg-slate-100"
          >
            <div className="text-lg font-semibold text-slate-900">Register</div>
            <p className="mt-2 text-sm text-slate-600">Create a new account to join the Lab Locator system.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
