"use client";

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '');

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      if (!API_URL) {
        throw new Error('The API URL is not configured for this deployment.');
      }

      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      const data = contentType.includes('application/json') ? await response.json() : null;
      if (!response.ok) {
        throw new Error(data?.message || 'The API returned an unexpected response. Check the deployed API URL.');
      }

      router.push('/dashboard');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to log in');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-600">Welcome back</p>
          <h1 className="text-3xl font-semibold">Log in to Lab Locator</h1>
          <p className="text-sm text-slate-500">Access your saved labs, bookings, and profile.</p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input name="email" type="email" required className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <input name="password" type="password" required minLength={6} className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none" placeholder="••••••••" />
          </div>
          {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
          <button type="submit" disabled={isSubmitting} className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Logging in...' : 'Continue'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          New here? <Link href="/auth/register" className="font-semibold text-blue-600">Create account</Link>
        </p>
      </div>
    </main>
  );
}
