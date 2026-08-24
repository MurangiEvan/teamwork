import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-medium text-blue-600">About Lab Locator</p>
        <h1 className="mt-3 text-3xl font-semibold">A cleaner way to discover trusted medical labs.</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Lab Locator helps patients compare services, understand pricing, and book visits with confidence.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Secure booking flow', 'Transparent pricing', 'Verified lab profiles'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/labs" className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white">View labs</Link>
        </div>
      </div>
    </main>
  );
}
