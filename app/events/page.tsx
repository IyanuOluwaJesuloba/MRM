import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { Card, Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import Logo from "@/public/assests/svg/Icon Colored.png";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-(--color-soft) text-foreground">
        <section className="relative isolate overflow-hidden bg-[#001b27] text-white min-h-svh md:min-h-screen">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#001b27] via-[#001b27]/92 to-[#001b27]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,140,33,0.22),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(255,255,255,0.12),_transparent_55%)]" />
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,140,33,0.35),transparent_70%)] blur-3xl" />
            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_72%)] blur-3xl" />
            <div className="absolute inset-0 opacity-55">
              <Image
                src={Logo}
                alt="Mighty Refuge Ministries logo"
                fill
                priority
                className="object-contain opacity-15 blur-[0.5px]"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-[#001b27]/30 via-[#001b27]/60 to-[#001b27]" />
          </div>

          <div className="section-shell pb-20 mt-24 sm:mt-32">
            <Reveal>
              <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
                <div className="text-center lg:col-span-7 lg:text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ffd1a4]">Events & Calendar</p>
                  <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                    Upcoming gatherings,<span className="hero-text"> annual traditions</span>, and special services
                  </h1>
                  <p className="mx-auto mt-6 max-w-3xl text-base text-white/75 sm:text-lg lg:mx-0">
                    Get updates on upcoming events, regular activities, annual traditions, and any registration or RSVP requirements.
                  </p>

                  <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                   
                    <ButtonLink
                      href="/getInvolved"
                      variant="ghost"
                      className="button-ripple w-fit border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
                    >
                      Join a team →
                    </ButtonLink>
                  </div>
                </div>

                <div className="mx-auto w-full max-w-xl lg:col-span-5">
                  <div className="hero-card p-6 sm:p-8">
                    <div className="hero-orb" />
                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,140,33,0.42),transparent_70%)] blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-3xl" />

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Next up</p>
                    <p className="mt-4 text-2xl font-semibold text-white">Upcoming gatherings</p>
                    <p className="mt-3 text-sm text-white/75">
                      Watch this space for dates, venues, and RSVP details.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-none border-l border-r-3 border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Year-End Retreat</p>
                        <p className="mt-2 text-base font-semibold text-white">Last week of the year</p>
                      </div>
                      <div className="rounded-none border-l border-r-3 border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Annual Retreat</p>
                        <p className="mt-2 text-base font-semibold text-white">Last week of August</p>
                      </div>
                      <div className="rounded-2xl border-l border-r-3 border-white/10 p-5 sm:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Updates</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">
                          Details are announced as we get closer. Check back regularly or reach out if you have questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="page-glass-wrapper">
          <div className="page-glass-bg" aria-hidden="true">
            <Image src="/assests/svg/Backdrop.png" alt="Glassy background" fill className="page-bg-image" priority />
          </div>
          <div className="page-glass-overlay" aria-hidden="true" />

          <div className="page-glass-content">
            <div className="page-glass-content-wrapper">
              <Section className="py-20">
                <Reveal>
                  <SectionHeading
                    eyebrow="Annual Traditions"
                    title="Two retreat seasons we keep as a ministry"
                    description="We gather intentionally to pray, fellowship, and hear God ahead of new seasons."
                  />
                </Reveal>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  <Reveal>
                    <Card className="p-6 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Last week of the year</p>
                      <h3 className="mt-4 text-2xl font-semibold text-[#001b27]">Year-End Prayer Retreat</h3>
                      <p className="mt-4 text-base text-muted">
                        Every last week of the year, we come together for a prayer retreat where we pray, play, and hear God ahead of the
                        coming year.
                      </p>
                      <div className="mt-6 rounded-xl bg-[#001b27]/5 p-5">
                        <p className="text-sm font-semibold text-[#001b27]">Registration / RSVP</p>
                        <p className="mt-2 text-sm text-muted">
                          Details, venue, and registration instructions are announced as the retreat approaches.
                        </p>
                      </div>
                    </Card>
                  </Reveal>

                  <Reveal delay={120}>
                    <Card className="p-6 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Last week of August</p>
                      <h3 className="mt-4 text-2xl font-semibold text-[#001b27]">Annual Prayer Retreat</h3>
                      <p className="mt-4 text-base text-muted">
                        Our Annual Prayer Retreat holds every August (the last week of August). We are trusting God for a venue change this
                        year.
                      </p>
                      <div className="mt-6 rounded-xl bg-[#001b27]/5 p-5">
                        <p className="text-sm font-semibold text-[#001b27]">Registration / RSVP</p>
                        <p className="mt-2 text-sm text-muted">
                          Watch for announcements about the new venue and any required registration.
                        </p>
                      </div>
                    </Card>
                  </Reveal>
                </div>
              </Section>

              <Section className="pb-24">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  <Reveal className="lg:col-span-7">
                    <SectionHeading
                      eyebrow="Programs Over the Years"
                      title="How we have served our city and beyond"
                      align="left"
                    />
                    <div className="mt-6 space-y-5 text-base text-muted">
                      <p>
                        Over the years, God has helped us host and participate in several programs that express the Gospel through prayer,
                        outreach, and compassion.
                      </p>
                      <p>
                        The most recent is our <span className="font-semibold text-[#001b27]">Village Outreach</span>, held at Gbedun Town
                        here in Ibadan.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={120} className="lg:col-span-5">
                    <Card className="p-6 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Highlights</p>
                      <ul className="mt-6 space-y-3 text-sm text-muted">
                        <li className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span>Visitation to the orphanage</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span>Street evangelism</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span>Street giving</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span>Prayer meeting</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span>Village outreach (Gbedun Town, Ibadan)</span>
                        </li>
                      </ul>
                    </Card>
                  </Reveal>
                </div>
              </Section>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

