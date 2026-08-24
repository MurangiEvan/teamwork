import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-medium text-blue-600">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold">Let’s talk about your lab booking experience.</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Reach out for demo requests, onboarding, or partnership opportunities.</p>
        <div className="mt-8 rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
          <p className="font-medium">Email: hello@lablocator.com</p>
          <p className="mt-2 font-medium">Phone: +1 (555) 014-7788</p>
        </div>
        <div className="mt-8">
          <Link href="/" className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white">Back home</Link>
        </div>
      </div>
    </main>
  );
}
