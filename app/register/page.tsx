'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('STUDENT');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error ?? 'Registration failed.');
      return;
    }

    window.location.href = '/welcome';
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-4 flex justify-end">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-2xl font-bold">Create account</h1>

        <label className="mt-6 block text-sm font-medium">
          Name
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label className="mt-4 block text-sm font-medium">
          Email
          <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label className="mt-4 block text-sm font-medium">
          Password
          <input type="password" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <label className="mt-4 block text-sm font-medium">
          Role
          <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="STUDENT">STUDENT</option>
            <option value="ADMIN">ADMIN</option>
            <option value="LAB_MANAGER">MANAGER</option>
          </select>
        </label>

        {message ? <p className="mt-4 text-sm text-slate-700">{message}</p> : null}

        <button type="submit" className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 text-white">
          Register
        </button>
      </form>
    </main>
  );
}
