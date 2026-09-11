import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Clock,
  Lock,
  Mail,
  MapPin,
  Package,
  Phone,
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
  move_size: string;
  zip_from: string;
  zip_to: string;
};

const emptyForm: FormState = {
  full_name: "",
  phone: "",
  email: "",
  move_size: "",
  zip_from: "",
  zip_to: "",
};

const crewSize = crewOptions[0].movers;

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
        className={`flex items-stretch overflow-hidden rounded-xl border bg-background shadow-sm transition-colors focus-within:border-brand ${
          error ? "border-destructive" : "border-border"
        }`}
      >
        <span className="flex w-12 shrink-0 items-center justify-center bg-brand/10 text-brand">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1 px-3.5 py-2 sm:py-3">
          <label
            htmlFor={htmlFor}
            className="block text-[11px] font-bold tracking-wide text-foreground uppercase sm:text-sm"
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
  "w-full bg-transparent text-base sm:text-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none";

export function QuoteForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.full_name.trim().length < 2) next.full_name = "Please enter your full name.";
    if (!/^\d{5}$/.test(form.zip_from)) next.zip_from = "Enter a valid 5-digit ZIP code.";
    if (!/^\d{5}$/.test(form.zip_to)) next.zip_to = "Enter a valid 5-digit ZIP code.";
    if (!form.move_size) next.move_size = "Please select your move size.";
    if (form.phone.replace(/\D/g, "").length < 10)
      next.phone = "Please enter a valid phone number.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const move_type = [form.move_size, `ZIP ${form.zip_from} → ${form.zip_to}`]
      .filter(Boolean)
      .join(" · ");

    const full_name = form.full_name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const move_date = null;

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
    setStep(2);
  };

  const startOver = () => {
    setForm(emptyForm);
    setErrors({});
    setStep(1);
  };

  if (step === 2) {
    return (
      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold tracking-wide uppercase sm:text-4xl">
            Basic Packing Includes
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packingRates.map((rate) => (
              <div
                key={rate.movers}
                className={`rounded-xl border-2 p-6 text-center transition-all ${
                  rate.movers === crewSize ? "border-brand bg-brand/5 shadow-md" : "border-border"
                }`}
              >
                <span className="mb-3 flex items-center justify-center gap-1.5 text-brand">
                  {Array.from({ length: rate.movers }).map((_, i) => (
                    <User key={i} className="h-6 w-6" />
                  ))}
                  <Truck aria-hidden className="ml-1 h-7 w-7" />
                </span>
                <p className="text-lg font-extrabold tracking-wide uppercase">
                  {rate.movers} Mover{rate.movers > 1 ? "s" : ""} + Truck
                </p>

                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-bold tracking-wide text-foreground/70 uppercase">
                    Cash Price
                  </p>
                  <p className="font-display text-4xl font-extrabold text-brand">
                    ${rate.cash}
                    <span className="text-lg font-bold">/hr</span>
                  </p>
                  <p className="text-sm text-foreground/60">when paying in cash</p>
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-bold tracking-wide text-foreground/70 uppercase">
                    Card Price
                  </p>
                  <p className="font-display text-2xl font-extrabold">
                    ${rate.card}
                    <span className="text-base font-bold">/hr</span>
                  </p>
                  <p className="text-sm text-foreground/60">when paying by card</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-base text-foreground/70">
            Cash price is available when paying in cash on the day of your move.
          </p>

          <div className="mt-10 border-t border-border pt-10 text-center">
            <h3 className="font-display text-4xl font-extrabold sm:text-5xl">
              Thanks, {form.full_name.split(" ")[0]}! 🎉
            </h3>
            <p className="mt-3 text-lg text-foreground">
              Your move request has been received. Our team will contact you shortly to confirm your
              move details.
            </p>
            <p className="mt-5 inline-block rounded-lg bg-surface px-5 py-3 text-lg text-foreground">
              Based on your selections, we recommend{" "}
              <span className="font-bold text-brand">{crewSize} movers</span> for the most efficient
              and safe move.
            </p>
          </div>

          <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            <a
              href={site.phoneHref}
              aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
              className="flex items-center gap-2 rounded-md text-lg font-semibold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              <Phone aria-hidden className="h-5 w-5 text-brand" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              aria-label={`Email Movers To Go at ${site.email}`}
              className="flex items-center gap-2 rounded-md text-lg font-semibold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              <Mail aria-hidden className="h-5 w-5 text-brand" />
              {site.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-border pt-8 text-base font-semibold text-foreground/70">
            <span className="flex items-center gap-2">
              <ShieldCheck aria-hidden className="h-5 w-5 text-brand" />
              Fully Insured
            </span>
            <span className="flex items-center gap-2">
              <Clock aria-hidden className="h-5 w-5 text-brand" />
              On-Time Service
            </span>
            <span className="flex items-center gap-2">
              <Star aria-hidden className="h-5 w-5 text-brand" />
              5-Star Rated
            </span>
          </div>

          <button
            type="button"
            onClick={startOver}
            className="mt-10 w-full rounded-lg border border-border px-5 py-4 text-base font-bold tracking-wide text-foreground uppercase transition-colors hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Get your move quote"
      className="bg-transparent sm:rounded-2xl sm:bg-background sm:p-10 sm:shadow-2xl sm:shadow-foreground/30"
    >
      <div className="space-y-3">
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

        <FieldRow icon={MapPin} label="Moving From" htmlFor="zip_from" error={errors.zip_from}>
          <input
            id="zip_from"
            name="zip_from"
            type="text"
            inputMode="numeric"
            maxLength={5}
            required
            aria-required="true"
            placeholder="ZIP Code"
            value={form.zip_from}
            onChange={(e) => update("zip_from", e.target.value.replace(/\D/g, ""))}
            className={inputClass}
          />
        </FieldRow>

        <FieldRow icon={MapPin} label="Moving To" htmlFor="zip_to" error={errors.zip_to}>
          <input
            id="zip_to"
            name="zip_to"
            type="text"
            inputMode="numeric"
            maxLength={5}
            required
            aria-required="true"
            placeholder="ZIP Code"
            value={form.zip_to}
            onChange={(e) => update("zip_to", e.target.value.replace(/\D/g, ""))}
            className={inputClass}
          />
        </FieldRow>

        <FieldRow icon={Package} label="Move Size" htmlFor="move_size" error={errors.move_size}>
          <Select value={form.move_size} onValueChange={(value) => update("move_size", value)}>
            <SelectTrigger
              id="move_size"
              aria-label="Move size"
              aria-required="true"
              className="h-auto w-full border-0 bg-transparent p-0 text-base text-foreground shadow-none focus:ring-0 sm:text-lg"
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

        <FieldRow icon={Phone} label="Phone Number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
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

        <FieldRow icon={Mail} label="Email Address" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
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
        {submitting ? "Sending…" : "Get My Quote"}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-foreground/70">
        <Lock aria-hidden className="h-3.5 w-3.5" />
        Your information is secure and will only be used to provide your moving quote.
      </p>
    </form>
  );
}
