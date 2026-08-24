import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Sparkles, Search } from 'lucide-react';
import { campuses, campusProvinces } from '@/lib/campuses';

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b-4 border-tut-red-600 bg-tut-blue-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/tut-logo.png"
              alt="TUT logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-white object-contain p-0.5 ring-2 ring-white"
            />
            <p className="text-base font-semibold tracking-wide">TUT Labs</p>
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full bg-tut-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-tut-red-700"
          >
            Sign in
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-tut-blue-700 to-tut-blue-600 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-white/20 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-medium text-tut-red-200">All TUT campuses</p>
            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">Explore TUT computer labs</h1>
            <p className="mt-2 max-w-2xl text-white/80">
              {campuses.length} campuses across {campusProvinces.length} provinces — find the lab closest to you.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/20 bg-white px-3 py-3 text-slate-900 shadow-sm">
              <Search className="h-4 w-4 text-tut-blue-700" />
              <input className="w-full bg-transparent outline-none" placeholder="Search by campus, lab, or service" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {campusProvinces.map((province) => {
              const provinceCampuses = campuses.filter((c) => c.province === province);
              return (
                <div key={province}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-tut-red-600" />
                    <h2 className="text-2xl font-semibold text-tut-blue-700 dark:text-white">{province} Province</h2>
                    <span className="text-sm text-slate-500">{provinceCampuses.length} campus{provinceCampuses.length === 1 ? '' : 'es'}</span>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {provinceCampuses.map((campus) => (
                      <Link
                        key={campus.id}
                        href={`/labs/${campus.id}`}
                        className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-tut-red-600 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                      >
                        <div className="flex items-center justify-between">
                          <div className="rounded-full bg-tut-blue-700 px-3 py-1 text-xs font-medium text-white">{campus.shortName}</div>
                          <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                            <Star className="h-3.5 w-3.5" /> {campus.rating}
                          </div>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">{campus.name}</h3>
                        <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                          <MapPin className="h-4 w-4 text-tut-red-600" /> {campus.city}
                        </p>
                        <p className="mt-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{campus.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {campus.services.map((service) => (
                            <span
                              key={service.name}
                              className="rounded-full bg-tut-red-50 px-3 py-1 text-xs font-medium text-tut-red-700 dark:bg-tut-red-950/40 dark:text-tut-red-300"
                            >
                              {service.name}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <p className="text-xs text-slate-500">{campus.hours.split(',')[0]}</p>
                          <div className="flex items-center gap-2 text-sm font-semibold text-tut-blue-700 dark:text-white">
                            <Sparkles className="h-4 w-4 text-tut-red-600" /> View labs
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
