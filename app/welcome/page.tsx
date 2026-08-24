import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';

export default async function WelcomePage() {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.name ?? 'there';
  const userRole = session?.user?.role ?? 'STUDENT';

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Lab Locator
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Welcome, {userName}</h1>
        <p className="mt-3 text-slate-600">
          You have successfully signed in to your Lab Locator account.
        </p>
        <p className="mt-2 text-sm text-slate-500">Role: {userRole}</p>
      </div>
    </main>
  );
}
