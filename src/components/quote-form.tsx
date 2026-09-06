import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Send,
  ShieldCheck,
  Star,
  Truck,
  User,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { notifyQuoteRequest } from "@/lib/quote-notification";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { crewOptions, moveSizes, packingRates, site } from "@/data/site";

type FormState = {
  full_name: string;
  phone: string;
  email: string;
  move_date: string;
  move_size: string;
  zip_from: string;
  zip_to: string;
  notes: string;
};

const emptyForm: FormState = {
  full_name: "",
  phone: "",
  email: "",
  move_date: "",
  move_size: "",
  zip_from: "",
  zip_to: "",
  notes: "",
};

const trustPoints = [
  "Professional & Reliable",
  "Careful With Your Belongings",
  "Fully Equipped Truck",
  "On-Time & Efficient",
  "No Hidden Fees",
];

function FieldRow({
  icon: Icon,
  label,
  htmlFor,
  error,
  children,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  htmlFor: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={`flex items-stretch overflow-hidden rounded-lg border bg-surface transition-colors focus-within:border-brand ${
          error ? "border-destructive" : "border-border"
        }`}
      >
        <span className="flex w-12 shrink-0 items-center justify-center bg-brand/10 text-brand">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1 px-3.5 py-2">
          <label
            htmlFor={htmlFor}
            className="block text-[11px] font-bold tracking-wide text-foreground/70 uppercase"
          >
            {label}
          </label>
          {children}
        </div>
      </div>
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full bg-transparent text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none";

function formatMoveDate(value: string) {
  if (!value) return "date TBD";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function QuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [crewSize, setCrewSize] = useState<2 | 3>(crewOptions[0].movers);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validateStep1 = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!/^\d{5}$/.test(form.zip_from)) next.zip_from = "Enter a valid 5-digit ZIP code.";
    if (!/^\d{5}$/.test(form.zip_to)) next.zip_to = "Enter a valid 5-digit ZIP code.";
    if (!form.move_date) next.move_date = "Please select a moving date.";
    if (!form.move_size) next.move_size = "Please select your move size.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateStep2 = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.full_name.trim().length < 2) next.full_name = "Please enter your full name.";
    if (form.phone.replace(/\D/g, "").length < 10)
      next.phone = "Please enter a valid phone number.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onStep1Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep1()) return;
    setStep(2);
  };

  const onStep2Submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep2()) return;
    setSubmitting(true);

    const move_type = [
      form.move_size,
      `${crewSize} Movers`,
      `ZIP ${form.zip_from} → ${form.zip_to}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join(" · ");

    const full_name = form.full_name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const move_date = form.move_date || null;

    const { error } = await supabase.from("quote_requests").insert({
      full_name,
      phone,
      email,
      move_type,
      move_date,
    });
    setSubmitting(false);

    notifyQuoteRequest({ data: { full_name, phone, email, move_type, move_date } }).catch(
      (notifyError: unknown) => {
        console.error("Failed to send quote notification email", notifyError);
      },
    );

    if (error) {
      toast.error(
        "We couldn't confirm your request was saved — please also call " +
          site.phoneDisplay +
          " to make sure we have it.",
      );
    }
    setStep(3);
  };

  const startOver = () => {
    setForm(emptyForm);
    setCrewSize(crewOptions[0].movers);
    setErrors({});
    setStep(1);
  };

  if (step === 3) {
    return (
      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-background p-8 shadow-2xl shadow-foreground/30 sm:p-10">
          <p className="mb-4 inline-block bg-brand px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            Step 3 of 3
          </p>

          <h2 className="font-display text-2xl font-extrabold tracking-wide uppercase">
            Basic Packing Includes
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {packingRates.map((rate) => (
              <div
                key={rate.movers}
                className={`rounded-lg border-2 p-4 text-center transition-all ${
                  rate.movers === crewSize ? "border-brand bg-brand/5 shadow-md" : "border-border"
                }`}
              >
                <span className="mb-2 flex items-center justify-center gap-1 text-brand">
                  {Array.from({ length: rate.movers }).map((_, i) => (
                    <User key={i} className="h-4 w-4" />
                  ))}
                  <Truck aria-hidden className="ml-1 h-5 w-5" />
                </span>
                <p className="text-xs font-extrabold tracking-wide uppercase">
                  {rate.movers} Mover{rate.movers > 1 ? "s" : ""} + Truck
                </p>

                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-[10px] font-bold tracking-wide text-foreground/60 uppercase">
                    Cash Price
                  </p>
                  <p className="font-display text-2xl font-extrabold text-brand">
                    ${rate.cash}
                    <span className="text-sm font-bold">/hr</span>
                  </p>
                  <p className="text-[10px] text-foreground/50">when paying in cash</p>
                </div>

                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-[10px] font-bold tracking-wide text-foreground/60 uppercase">
                    Card Price
                  </p>
                  <p className="font-display text-lg font-extrabold">
                    ${rate.card}
                    <span className="text-xs font-bold">/hr</span>
                  </p>
                  <p className="text-[10px] text-foreground/50">when paying by card</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground/70">
            Cash price is available when paying in cash on the day of your move.
          </p>

          <div className="mt-8 border-t border-border pt-8 text-center">
            <h3 className="font-display text-3xl font-extrabold">
              Thanks, {form.full_name.split(" ")[0]}! 🎉
            </h3>
            <p className="mt-2 text-foreground">
              Your move request has been received. Our team will contact you shortly to confirm your
              move details.
            </p>
            <p className="mt-4 inline-block rounded-lg bg-surface px-4 py-2 text-sm text-foreground">
              Based on your selections, we recommend{" "}
              <span className="font-bold text-brand">{crewSize} movers</span> for the most efficient
              and safe move.
            </p>
          </div>

          <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            <a
              href={site.phoneHref}
              aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
              className="flex items-center gap-2 rounded-md text-sm font-semibold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              <Phone aria-hidden className="h-4 w-4 text-brand" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              aria-label={`Email Movers To Go at ${site.email}`}
              className="flex items-center gap-2 rounded-md text-sm font-semibold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              <Mail aria-hidden className="h-4 w-4 text-brand" />
              {site.email}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border pt-6 text-xs font-semibold text-foreground/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck aria-hidden className="h-4 w-4 text-brand" />
              Fully Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Clock aria-hidden className="h-4 w-4 text-brand" />
              On-Time Service
            </span>
            <span className="flex items-center gap-1.5">
              <Star aria-hidden className="h-4 w-4 text-brand" />
              5-Star Rated
            </span>
          </div>

          <button
            type="button"
            onClick={startOver}
            className="mt-8 w-full rounded-lg border border-border px-5 py-3 text-sm font-bold tracking-wide text-foreground uppercase transition-colors hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <form
        onSubmit={onStep2Submit}
        noValidate
        aria-label="Finish your moving quote request"
        className="rounded-2xl bg-background p-8 shadow-2xl shadow-foreground/30 sm:p-10"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="inline-block bg-brand px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            Step 2 of 3
          </p>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-sm font-semibold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            ← Back
          </button>
        </div>

        <h2 className="font-display text-3xl font-extrabold">Get Your Move Quote</h2>
        <p className="mt-2 text-base text-foreground">
          Almost done — just your contact info so we can send your quote.
        </p>

        <div className="mt-4 rounded-lg border border-border bg-surface p-4">
          <p className="text-[11px] font-bold tracking-wide text-foreground/70 uppercase">
            Your Move
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            {crewSize} Movers · {form.move_size} · {form.zip_from} → {form.zip_to} ·{" "}
            {formatMoveDate(form.move_date)}
          </p>
        </div>

        <div className="mt-4 space-y-3">
          <FieldRow icon={User} label="Your Name" htmlFor="full_name" error={errors.full_name}>
            <input
              id="full_name"
              name="full_name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.full_name)}
              aria-describedby={errors.full_name ? "full_name-error" : undefined}
              placeholder="Enter your name"
              value={form.full_name}
              onChange={(e) => update("full_name", e.target.value)}
              className={inputClass}
            />
          </FieldRow>

          <FieldRow icon={Phone} label="Phone Number" htmlFor="phone_2" error={errors.phone}>
            <input
              id="phone_2"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-required="true"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass}
            />
          </FieldRow>

          <FieldRow
            icon={Mail}
            label="Email Address (Optional)"
            htmlFor="email_2"
            error={errors.email}
          >
            <input
              id="email_2"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
          </FieldRow>
        </div>

        <button
          type="submit"
          disabled={submitting}
          aria-label="Get my quote"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3.5 text-base font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Send aria-hidden className="h-4 w-4" />
          {submitting ? "Sending…" : "Get My Quote"}
        </button>
        <p className="mt-3 text-center text-xs text-foreground/70">
          Your information is secure and will only be used to provide your moving quote.
        </p>
      </form>
    );
  }

  return (
    <form
      onSubmit={onStep1Submit}
      noValidate
      aria-label="Check your moving rate"
      className="rounded-2xl bg-background p-8 shadow-2xl shadow-foreground/30 sm:p-10"
    >
      <p className="mb-4 inline-block bg-brand px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
        Step 1 of 3
      </p>

      <h2 className="font-display text-3xl font-extrabold">
        Check Your <span className="text-brand">Rate</span>
      </h2>
      <p className="mt-2 text-base text-foreground">Our simple rates. No hidden fees.</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {crewOptions.map((option) => (
          <button
            key={option.movers}
            type="button"
            onClick={() => setCrewSize(option.movers)}
            aria-pressed={crewSize === option.movers}
            aria-label={`${option.movers} movers and truck, ${option.rate} dollars per hour`}
            className={`rounded-lg border-2 p-4 text-center transition-all ${
              crewSize === option.movers
                ? "border-brand bg-brand/5 shadow-md"
                : "border-border hover:border-brand/50"
            }`}
          >
            <span aria-hidden className="mb-2 flex items-center justify-center gap-1 text-brand">
              {Array.from({ length: option.movers }).map((_, i) => (
                <User key={i} className="h-6 w-6" />
              ))}
            </span>
            <p className="text-xs font-extrabold tracking-wide uppercase">
              {option.movers} Movers + Truck
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">
              ${option.rate}
            </p>
            <p className="text-xs font-bold text-foreground/70 uppercase">/ Hour</p>
          </button>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
        {trustPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70"
          >
            <CheckCircle2 aria-hidden className="h-3.5 w-3.5 text-brand" />
            {point}
          </li>
        ))}
      </ul>

      <h3 className="mt-7 border-t border-border pt-6 font-display text-xl font-extrabold uppercase">
        Tell Us About Your Move
      </h3>

      <div className="mt-4 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <FieldRow
            icon={MapPin}
            label="Moving From (ZIP)"
            htmlFor="zip_from"
            error={errors.zip_from}
          >
            <input
              id="zip_from"
              name="zip_from"
              type="text"
              inputMode="numeric"
              maxLength={5}
              required
              aria-required="true"
              placeholder="Enter ZIP code"
              value={form.zip_from}
              onChange={(e) => update("zip_from", e.target.value.replace(/\D/g, ""))}
              className={inputClass}
            />
          </FieldRow>

          <FieldRow icon={MapPin} label="Moving To (ZIP)" htmlFor="zip_to" error={errors.zip_to}>
            <input
              id="zip_to"
              name="zip_to"
              type="text"
              inputMode="numeric"
              maxLength={5}
              required
              aria-required="true"
              placeholder="Enter ZIP code"
              value={form.zip_to}
              onChange={(e) => update("zip_to", e.target.value.replace(/\D/g, ""))}
              className={inputClass}
            />
          </FieldRow>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <FieldRow
            icon={CalendarDays}
            label="Moving Date"
            htmlFor="move_date"
            error={errors.move_date}
          >
            <input
              id="move_date"
              name="move_date"
              type="date"
              required
              aria-required="true"
              value={form.move_date}
              onChange={(e) => update("move_date", e.target.value)}
              className={inputClass}
            />
          </FieldRow>

          <FieldRow icon={Package} label="Move Size" htmlFor="move_size" error={errors.move_size}>
            <Select value={form.move_size} onValueChange={(value) => update("move_size", value)}>
              <SelectTrigger
                id="move_size"
                aria-label="Move size"
                aria-required="true"
                className="h-auto w-full border-0 bg-transparent p-0 text-base text-foreground shadow-none focus:ring-0 sm:text-sm"
              >
                <SelectValue placeholder="Select move size" />
              </SelectTrigger>
              <SelectContent>
                {moveSizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FieldRow>
        </div>

        <FieldRow icon={MessageSquare} label="Additional Details (Optional)" htmlFor="notes">
          <textarea
            id="notes"
            name="notes"
            rows={2}
            placeholder="Any special requests or additional information?"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </FieldRow>
      </div>

      <button
        type="submit"
        aria-label="Continue to contact info"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3.5 text-base font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:opacity-90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Continue
        <ArrowRight aria-hidden className="h-4 w-4" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-foreground/70">
        <ShieldCheck aria-hidden className="h-3.5 w-3.5" />
        One more step to get your phone/email and lock in your rate.
      </p>
    </form>
  );
}
