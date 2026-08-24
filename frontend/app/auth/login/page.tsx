"use client";

import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-600">Welcome back</p>
          <h1 className="text-3xl font-semibold">Log in to Lab Locator</h1>
          <p className="text-sm text-slate-500">Access your saved labs, bookings, and profile.</p>
        </div>
        <form className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <input type="password" className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none" placeholder="••••••••" />
          </div>
          <button className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-medium text-white">Continue</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          New here? <Link href="/auth/register" className="font-semibold text-blue-600">Create account</Link>
        </p>
      </div>
    </main>
  );
}
