"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { cx } from "@/lib/cx";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  interest: "",
  message: "",
};

export function JoinMinistryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return Boolean(form.fullName.trim() && form.email.trim() && form.phone.trim());
  }, [form.email, form.fullName, form.phone]);

  const update =
    (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and phone number.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed. Please try again.");
    }
  };

  return (
    <div className="hero-card p-6 sm:p-8">
      <div className="hero-orb" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,140,33,0.42),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-3xl" />

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Join the Ministry</p>
      <h2 className="mt-4 text-3xl font-semibold text-white">We’d love to connect with you</h2>
      <p className="mt-3 text-base text-white/75">
        Fill this form and our team will reach out with next steps, service units, and meeting information.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full Name" required>
            <input
              value={form.fullName}
              onChange={update("fullName")}
              className={inputClass}
              autoComplete="name"
              name="fullName"
            />
          </Field>

          <Field label="Phone Number" required>
            <input
              value={form.phone}
              onChange={update("phone")}
              className={inputClass}
              autoComplete="tel"
              name="phone"
            />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Email Address" required>
            <input
              value={form.email}
              onChange={update("email")}
              className={inputClass}
              autoComplete="email"
              name="email"
              type="email"
            />
          </Field>

          <Field label="Location (City)">
            <input value={form.location} onChange={update("location")} className={inputClass} name="location" />
          </Field>
        </div>

        <Field label="How would you like to serve?">
          <div className="group relative">
            <select
              value={form.interest}
              onChange={update("interest")}
              className={cx(
                inputClass,
                "navy-select appearance-none cursor-pointer pr-12",
                "rounded-xl border border-white/15 bg-gradient-to-br from-white/12 via-white/6 to-transparent",
                "bg-[#001b27]/60 text-white shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl",
                "transition duration-200",
                "hover:border-white/28 hover:bg-[#001b27]/72",
                "focus:border-brand/70 focus:ring-2 focus:ring-brand/30",
              )}
              name="interest"
            >
              <option value="">Select an option</option>
              <option value="Membership">Membership</option>
              <option value="Service Unit">Service Unit</option>
              <option value="Outreach">Outreach</option>
              <option value="Prayer">Prayer</option>
              <option value="I’m not sure yet">I’m not sure yet</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-white/70 transition-colors duration-200 group-hover:text-white/90 group-focus-within:text-brand"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.936a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Field>

        <Field label="Message">
          <textarea value={form.message} onChange={update("message")} className={cx(inputClass, "min-h-28")} name="message" />
        </Field>

        {status === "success" && <p className="text-sm font-semibold text-emerald-700">Submission received. We’ll reach out soon.</p>}
        {status === "error" && errorMessage && <p className="text-sm font-semibold text-red-600">{errorMessage}</p>}

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            By submitting, you agree to be contacted by the ministry for follow-up.
          </p>
          <Button type="submit" variant="navy" className="w-full justify-center sm:w-auto" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting…" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-white">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-sm border border-[color-mix(in_srgb,var(--color-navy)_18%,transparent)] bg-white/70 px-4 py-3 text-sm text-[#001b27] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
