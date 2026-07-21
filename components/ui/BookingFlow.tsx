"use client";

import { Check, MapPin, CalendarDays, Clock } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { treatments } from "@/data/treatments";
import { locations, getLocation } from "@/data/locations";
import { Button } from "./Button";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DAYS_AHEAD = 30;

interface AvailableDate {
  iso: string;
  label: string;
  slots: string[];
}

interface BookingFlowProps {
  initialTreatment?: string;
  initialLocationId?: string;
  /** Shown as a "Done" action on the confirmation screen (e.g. close modal). */
  onDone?: () => void;
}

const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;

/**
 * Reusable, location-aware booking flow used both inside the booking modal
 * and on the /book-appointment page. Availability comes from the editable
 * SAMPLE config in data/locations.ts — it is not live, real-time data.
 */
export function BookingFlow({
  initialTreatment,
  initialLocationId,
  onDone,
}: BookingFlowProps) {
  const [treatment, setTreatment] = useState(
    initialTreatment ?? treatments[0].name,
  );
  const [locationId, setLocationId] = useState(initialLocationId ?? "");
  const [dateISO, setDateISO] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // "Today" is resolved on the client to avoid SSR hydration mismatches.
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(new Date()), []);

  const location = getLocation(locationId);
  const treatmentData = treatments.find((t) => t.name === treatment);

  // Upcoming bookable dates for the selected location, derived from the
  // location's weekday availability template.
  const availableDates = useMemo<AvailableDate[]>(() => {
    if (!today || !location) return [];
    const out: AvailableDate[] = [];
    for (let i = 0; i < DAYS_AHEAD; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const slots = location.availability[d.getDay()];
      if (slots && slots.length) {
        out.push({
          iso: toISO(d),
          label: d.toLocaleDateString("en-CA", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
          slots,
        });
      }
    }
    return out;
  }, [today, location]);

  const availableTimes = useMemo(
    () => availableDates.find((d) => d.iso === dateISO)?.slots ?? [],
    [availableDates, dateISO],
  );

  // Changing location invalidates the previously chosen date/time.
  useEffect(() => {
    setDateISO("");
    setTime("");
  }, [locationId]);

  // Clear a selected time that is no longer offered on the chosen date.
  useEffect(() => {
    if (time && !availableTimes.includes(time)) setTime("");
  }, [availableTimes, time]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!locationId) return setError("Please select a location first.");
    if (!dateISO) return setError("Please choose an available date.");
    if (!time) return setError("Please choose an available time.");
    if (!name.trim() || !email.trim() || !phone.trim()) {
      return setError("Please complete your contact details.");
    }
    if (!EMAIL_RE.test(email.trim())) {
      return setError("Please enter a valid email address.");
    }
    setError(null);
    setSubmitted(true);
  };

  const selectedDateLabel = availableDates.find((d) => d.iso === dateISO)?.label;

  if (submitted) {
    return (
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-white">
          <Check size={26} aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-serif text-3xl font-medium text-black-pure">
          Request Received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-medium-gray">
          Thank you, {name.split(" ")[0]}! We&apos;ve received your request and
          our team will contact you to confirm your appointment.
        </p>

        <dl className="mx-auto mt-6 max-w-sm rounded-2xl border border-soft-gray bg-white p-5 text-left text-sm">
          <SummaryRow term="Session" value={`${treatment} · ${treatmentData?.duration}`} />
          <SummaryRow term="Location" value={location?.name ?? ""} />
          <SummaryRow term="Address" value={location?.address ?? ""} />
          <SummaryRow term="Date" value={selectedDateLabel ?? ""} />
          <SummaryRow term="Time" value={time} />
          <SummaryRow term="Contact" value={`${name} · ${phone}`} />
        </dl>

        <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-medium-gray">
          Times shown are sample availability, not a confirmed real-time
          booking — we&apos;ll confirm your exact slot when we reach out.
        </p>

        {onDone && (
          <Button className="mt-7" variant="primary" onClick={onDone}>
            Done
          </Button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      {/* 1 — Session */}
      <Step number={1} label="Choose your session">
        <select
          aria-label="Whitening session"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className="btn-focus w-full rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-black-pure"
        >
          {treatments.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name} · {t.duration}
            </option>
          ))}
        </select>
      </Step>

      {/* 2 — Location */}
      <Step number={2} label="Select a location">
        <fieldset>
          <legend className="sr-only">Location</legend>
          <div className="flex flex-col gap-3">
            {locations.map((loc) => {
              const Icon = loc.icon;
              const active = locationId === loc.id;
              return (
                <label
                  key={loc.id}
                  className={`btn-focus flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors duration-200 ${
                    active
                      ? "border-champagne bg-champagne/5"
                      : "border-soft-gray bg-white hover:border-champagne/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="location"
                    value={loc.id}
                    checked={active}
                    onChange={() => setLocationId(loc.id)}
                    className="peer sr-only"
                  />
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      active
                        ? "border-champagne bg-champagne text-white"
                        : "border-soft-gray bg-cream text-charcoal"
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-black-pure">
                      {loc.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-medium-gray">
                      {loc.address}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </Step>

      {/* 3 — Date & time */}
      <Step number={3} label="Pick a date & time">
        {!location ? (
          <p className="rounded-xl border border-dashed border-soft-gray bg-white px-4 py-3 text-sm text-medium-gray">
            Please select a location first.
          </p>
        ) : availableDates.length === 0 ? (
          <p className="rounded-xl border border-dashed border-soft-gray bg-white px-4 py-3 text-sm text-medium-gray">
            No appointments are currently available. Please choose another
            location.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
                <CalendarDays size={13} aria-hidden="true" /> Date
              </span>
              <select
                aria-label="Appointment date"
                value={dateISO}
                onChange={(e) => setDateISO(e.target.value)}
                className="btn-focus w-full rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-black-pure"
              >
                <option value="">Select a date…</option>
                {availableDates.map((d) => (
                  <option key={d.iso} value={d.iso}>
                    {d.label}
                  </option>
                ))}
              </select>
            </label>

            {dateISO && (
              <div>
                <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
                  <Clock size={13} aria-hidden="true" /> Time
                </span>
                {availableTimes.length === 0 ? (
                  <p className="mt-2 rounded-xl border border-dashed border-soft-gray bg-white px-4 py-3 text-sm text-medium-gray">
                    No appointments are currently available for this date.
                    Choose another date or location.
                  </p>
                ) : (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {availableTimes.map((t) => {
                      const active = time === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setTime(t)}
                          className={`btn-focus rounded-lg border px-4 py-2 text-sm transition-colors duration-200 ${
                            active
                              ? "border-champagne bg-champagne text-white"
                              : "border-soft-gray bg-white text-black-pure hover:border-champagne"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            <p className="text-xs leading-relaxed text-medium-gray">
              Sample availability shown — we&apos;ll confirm your exact slot when
              we contact you.
            </p>
          </div>
        )}
      </Step>

      {/* 4 — Contact details */}
      <Step number={4} label="Your details">
        <div className="flex flex-col gap-4">
          <Field label="Full Name" value={name} onChange={setName} type="text" autoComplete="name" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" value={email} onChange={setEmail} type="email" autoComplete="email" />
            <Field label="Phone" value={phone} onChange={setPhone} type="tel" autoComplete="tel" />
          </div>
        </div>
      </Step>

      {/* Summary */}
      {location && dateISO && time && (
        <div className="rounded-2xl border border-champagne/25 bg-cream/60 p-5">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
            <MapPin size={13} aria-hidden="true" /> Appointment Summary
          </p>
          <dl className="mt-3 text-sm">
            <SummaryRow term="Session" value={`${treatment} · ${treatmentData?.duration}`} />
            <SummaryRow term="Location" value={location.name} />
            <SummaryRow term="Address" value={location.address} />
            <SummaryRow term="Date" value={selectedDateLabel ?? ""} />
            <SummaryRow term="Time" value={time} />
            {(name || phone) && (
              <SummaryRow term="Contact" value={[name, phone].filter(Boolean).join(" · ")} />
            )}
          </dl>
        </div>
      )}

      {error && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Confirm Booking
      </Button>
    </form>
  );
}

function Step({
  number,
  label,
  children,
}: {
  number: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 flex items-center gap-2.5 font-sans text-sm font-medium text-black-pure">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black-pure text-xs text-white">
          {number}
        </span>
        {label}
      </p>
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="btn-focus rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-black-pure placeholder:text-medium-gray"
      />
    </label>
  );
}

function SummaryRow({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-soft-gray/70 py-1.5 last:border-0">
      <dt className="shrink-0 text-medium-gray">{term}</dt>
      <dd className="text-right font-medium text-black-pure">{value}</dd>
    </div>
  );
}
