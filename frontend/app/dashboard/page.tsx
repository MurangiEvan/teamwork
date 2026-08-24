import Link from 'next/link';

const cards = [
  { title: 'My bookings', value: '3 upcoming' },
  { title: 'Favorites', value: '7 saved labs' },
  { title: 'Profile', value: 'Updated recently' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-medium text-blue-600">Dashboard</p>
          <h1 className="mt-3 text-3xl font-semibold">Welcome back to your care hub.</h1>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                <p className="text-sm text-slate-500">{card.title}</p>
                <p className="mt-2 text-xl font-semibold">{card.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/labs" className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white">Discover labs</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
