import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, Clock3, MapPin, Mail, Phone, ShieldCheck, Star } from 'lucide-react';
import { findCampus } from '@/lib/campuses';

export default async function CampusDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const campus = findCampus(resolvedParams.id);

  if (!campus) notFound();

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
            href="/labs"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-white/80"
          >
            <ArrowLeft className="h-4 w-4" /> All campuses
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-tut-blue-700 to-tut-blue-600 py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-tut-red-200">{campus.province} Province</p>
              <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">{campus.name}</h1>
              <p className="mt-2 flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4" /> {campus.city}
              </p>
              <p className="text-sm text-white/70">{campus.address}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-tut-blue-700">
              <Star className="h-4 w-4 text-amber-500" /> {campus.rating} • Verified TUT facility
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-tut-blue-700 dark:text-white">About this campus</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{campus.description}</p>
              <p className="mt-4 text-sm text-slate-500">{campus.building}</p>
            </div>

            <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-tut-blue-700 dark:text-white">Labs & services</h2>
              <div className="mt-4 grid gap-3">
                {campus.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800"
                  >
                    <div>
                      <p className="font-medium text-tut-blue-700 dark:text-white">{service.name}</p>
                      {service.description ? (
                        <p className="mt-1 text-sm text-slate-500">{service.description}</p>
                      ) : null}
                    </div>
                    <span className="rounded-full bg-tut-red-50 px-2 py-0.5 text-xs font-medium text-tut-red-700 dark:bg-tut-red-950/40 dark:text-tut-red-300">
                      Bookable
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-tut-blue-700/30 bg-white p-6 dark:border-tut-blue-700/50 dark:bg-slate-900">
              <div className="flex items-center gap-2 text-sm font-medium text-tut-blue-700 dark:text-white">
                <ShieldCheck className="h-4 w-4" /> Verified TUT facility
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm dark:bg-slate-800">
                  <CalendarDays className="h-4 w-4 text-tut-red-600" /> Choose your date
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm dark:bg-slate-800">
                  <Clock3 className="h-4 w-4 text-tut-blue-700" /> Pick a convenient time
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm dark:bg-slate-800">
                  <Star className="h-4 w-4 text-amber-500" /> Leave a review after your visit
                </div>
              </div>
              <button className="mt-6 w-full rounded-2xl bg-tut-red-600 px-4 py-3 font-medium text-white transition hover:bg-tut-red-700">
                Book a workstation
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">{campus.hours}</p>
            </div>

            <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-tut-blue-700 dark:text-white">Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-tut-red-600" /> {campus.contactEmail}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-tut-red-600" /> {campus.contactPhone}</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-tut-red-600" /> {campus.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
