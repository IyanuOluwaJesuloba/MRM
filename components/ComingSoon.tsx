"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";

export function ComingSoon({
  title,
  description = "We’re currently working on this page. Check back soon.",
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-navy text-(--color-soft)">
        <Section className="pt-32 pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_25px_60px_rgba(0,27,39,0.08)]">
              <Image
                src="/assests/svg/Icon Colored.png"
                alt="Mighty Refuge logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-brand">Coming soon</p>
            <h1 className="mt-4 text-4xl font-semibold text-white/80 md:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-soft">{description}</p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/home" className="w-full justify-center sm:w-auto">
                Back to Home
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost" className="w-full justify-center sm:w-auto">
                About the Ministry
              </ButtonLink>
            </div>
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}
