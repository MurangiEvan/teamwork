import Image from 'next/image';
import Link from 'next/link';
import { Search, ShieldCheck, Sparkles, Clock3, Star, ArrowRight, MonitorCog, MapPin } from 'lucide-react';
import { campuses, campusProvinces } from '@/lib/campuses';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Top brand bar */}
      <header className="border-b-4 border-tut-red-600 bg-tut-blue-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/tut-logo.png"
              alt="Tshwane University of Technology logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white object-contain p-1 ring-2 ring-white"
              priority
            />
            <div className="leading-tight">
              <p className="text-base font-semibold tracking-wide">Tshwane University of Technology</p>
              <p className="text-xs text-white/80">Computer Lab Booking System</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/labs" className="hover:text-white/80">Campuses</Link>
            <Link href="/about" className="hover:text-white/80">About</Link>
            <Link href="/contact" className="hover:text-white/80">Contact</Link>
            <Link href="/auth/login" className="rounded-full bg-tut-red-600 px-4 py-2 text-white transition hover:bg-tut-red-700">Sign in</Link>
          </nav>
        </div>
      </header>

      {/* Hero — blue/white/red gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-tut-blue-700 via-white to-white dark:from-tut-blue-900 dark:via-slate-950 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-tut-blue-600/20 blur-3xl" />
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-tut-red-600/15 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-24">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border border-tut-red-200 bg-tut-red-50 px-3 py-1 text-sm font-medium text-tut-red-700">
              <Sparkles className="mr-2 h-4 w-4" /> TUT computer labs across South Africa
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-tut-blue-700 sm:text-5xl lg:text-6xl dark:text-white">
                Find a TUT computer lab, book a workstation, and get to work.
              </h1>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                Discover programming, networking, design, and engineering workstations across all TUT campuses — in Gauteng, Mpumalanga, and Limpopo.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/labs"
                className="inline-flex items-center justify-center rounded-full bg-tut-red-600 px-5 py-3 font-medium text-white shadow-lg shadow-tut-red-600/30 transition hover:bg-tut-red-700"
              >
                Browse campuses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center rounded-full border-2 border-tut-blue-700 bg-white px-5 py-3 font-medium text-tut-blue-700 transition hover:bg-tut-blue-50 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/10"
              >
                Create student account
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-tut-blue-700" /> Verified TUT facility</div>
              <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-tut-blue-700" /> Same-day booking</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> 4.7 average rating</div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl border-2 border-tut-blue-700/20 bg-white p-5 shadow-xl shadow-tut-blue-900/10 dark:border-tut-blue-700/40 dark:bg-slate-900">
              <div className="rounded-2xl border border-tut-blue-700/20 bg-tut-blue-50 p-4 dark:border-tut-blue-700/40 dark:bg-tut-blue-950/40">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-tut-blue-700 dark:text-white">Find a campus lab</h2>
                  <div className="rounded-full bg-tut-red-600 px-3 py-1 text-xs font-medium text-white">Live availability</div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 dark:border-slate-800 dark:bg-slate-900">
                  <Search className="h-4 w-4 text-tut-blue-700" />
                  <input className="w-full bg-transparent outline-none" placeholder="Search by campus, lab, or service" />
                </div>
                <div className="mt-4 grid gap-2">
                  {campusProvinces.map((province) => (
                    <div key={province} className="rounded-xl bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-tut-blue-700 dark:bg-slate-900 dark:text-white">
                      {province}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses section grouped by province */}
      <section className="bg-tut-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-tut-red-200">All campuses</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Pick a campus near you</h2>
            </div>
            <Link
              href="/labs"
              className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-tut-blue-700 transition hover:bg-tut-red-50 sm:inline-flex"
            >
              View full list <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-10">
            {campusProvinces.map((province) => {
              const provinceCampuses = campuses.filter((c) => c.province === province);
              return (
                <div key={province}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-tut-red-600" />
                    <h3 className="text-xl font-semibold">{province} Province</h3>
                    <span className="text-sm text-white/70">{provinceCampuses.length} campus{provinceCampuses.length === 1 ? '' : 'es'}</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {provinceCampuses.map((campus) => (
                      <Link
                        key={campus.id}
                        href={`/labs/${campus.id}`}
                        className="group flex flex-col justify-between rounded-2xl border-2 border-white/10 bg-white p-5 text-slate-900 shadow-lg transition hover:border-tut-red-600 hover:shadow-tut-red-600/20 dark:bg-slate-900 dark:text-white"
                      >
                        <div>
                          <div className="mb-3 flex items-center justify-between">
                            <span className="inline-flex items-center rounded-full bg-tut-blue-700 px-2.5 py-1 text-xs font-medium text-white">
                              {campus.shortName}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                              <Star className="h-3 w-3" /> {campus.rating}
                            </span>
                          </div>
                          <p className="text-lg font-semibold">{campus.name}</p>
                          <p className="mt-1 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-300">
                            <MapPin className="h-3.5 w-3.5" /> {campus.city}
                          </p>
                          <p className="mt-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                            {campus.description}
                          </p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {campus.services.slice(0, 3).map((s) => (
                            <span
                              key={s.name}
                              className="rounded-full bg-tut-red-50 px-2 py-0.5 text-xs font-medium text-tut-red-700 dark:bg-tut-red-950/40 dark:text-tut-red-300"
                            >
                              {s.name}
                            </span>
                          ))}
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

      {/* Brand strip footer */}
      <footer className="bg-white dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 border-t-4 border-tut-red-600 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/tut-logo.png"
              alt="TUT logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-white object-contain p-0.5 ring-2 ring-tut-blue-700"
            />
            <p className="text-sm text-slate-600 dark:text-slate-300">
              © {new Date().getFullYear()} Tshwane University of Technology
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <MonitorCog className="h-4 w-4 text-tut-red-600" />
            TUT Labs
          </div>
        </div>
      </footer>
    </main>
  );
}
