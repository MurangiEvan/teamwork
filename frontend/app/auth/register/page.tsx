"use client";

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          fullname: formData.get('fullname'),
          email: formData.get('email'),
          password: formData.get('password'),
          role: formData.get('role'),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Unable to create account');
      }

      router.push('/dashboard');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to create account');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-600">Create account</p>
          <h1 className="text-3xl font-semibold">Join Lab Locator</h1>
          <p className="text-sm text-slate-500">Start finding labs and booking appointments instantly.</p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium">Full name</label>
            <input name="fullname" required minLength={2} className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none" placeholder="Jamie Carter" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input name="email" type="email" required className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <input name="password" type="password" required minLength={6} className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none" placeholder="••••••••" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Role</label>
            <select name="role" defaultValue="STUDENT" className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none">
              <option value="STUDENT">Student</option>
              <option value="ADMIN">Admin</option>
              <option value="LAB_MANAGER">Manager</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
          <button type="submit" disabled={isSubmitting} className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account? <Link href="/auth/login" className="font-semibold text-blue-600">Log in</Link>
        </p>
      </div>
    </main>
  );
}
