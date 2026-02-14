
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, Card } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import Logo from "@/public/assests/svg/Icon Colored.png";
import Logo1 from "@/public/assests/svg/Logo1.png";

const missionPoints = [
  {
    letter: "T",
    title: "Transformation",
    detail: "Seeing lives radically changed by the Gospel.",
  },
  {
    letter: "E",
    title: "Empowerment",
    detail: "Empowering men and women to live victorious lives and impact their communities.",
  },
  {
    letter: "E",
    title: "Equipping",
    detail: "Discipling believers toward maturity and providing tools for spiritual growth.",
  },
  {
    letter: "M",
    title: "Movement of Revival",
    detail: "Catalyzing revival and awakening by the Holy Spirit’s power.",
  },
];

const visionPoints = [
  {
    letter: "P",
    title: "Proclamation of the Great Commission",
    detail: "The Gospel transforming cities, villages, and rural communities.",
  },
  {
    letter: "R",
    title: "A Place of Refuge",
    detail: "A spiritual home of solace, hope, healing, and transformation.",
  },
  {
    letter: "E",
    title: "Empowerment",
    detail: "Believers equipped to demonstrate God’s love and power in everyday life.",
  },
];

const coreValues = [
  {
    title: "Transparency",
    detail: "We operate with openness and accountability in life, leadership, and stewardship.",
  },
  {
    title: "Integrity",
    detail: "We align our words, choices, and service with the truth of Scripture.",
  },
  {
    title: "Excellence",
    detail: "We give God our best—intentional, diligent, and honoring in all we do.",
  },
];

const coreValueCardStyles = [
  "bg-[linear-gradient(135deg,rgba(255,140,33,0.10),rgba(255,255,255,0.72))]",
  "bg-[linear-gradient(135deg,rgba(0,80,109,0.12),rgba(255,255,255,0.70))]",
  "bg-[linear-gradient(135deg,rgba(0,27,39,0.10),rgba(255,255,255,0.72))]",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-(--color-soft) text-foreground">
        <section className="relative isolate overflow-hidden bg-[#001b27] text-white">
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

          <div className="section-shell pb-20 pt-28 sm:pt-32">
            <Reveal>
              <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
                <div className="text-center lg:col-span-7 lg:text-left py-18">
                  <div className="mx-auto flex w-fit items-center gap-3 px- py-2 text-[#ffd1a4] shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur lg:mx-0">
                    <Image src={Logo} alt="Mighty Refuge Ministries" width={26} height={26} className="object-contain" />
                    <p className="text-xs font-semibold uppercase tracking-[0.4em]">Mighty Refuge Ministries</p>
                  </div>

                  <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                    A refuge of
                    <span className="hero-text"> spiritual solace</span>,
                    hope, and transformation
                  </h1>
                  <p className="mx-auto mt-6 max-w-3xl text-base text-white/75 sm:text-lg lg:mx-0">
                    Officially founded on March 18th, 2024, we exist to fulfill the Great Commission (Matthew 28:18–20) by proclaiming the
                    Gospel, winning souls, and discipling believers to maturity (Ephesians 4:13)—through the power of the Holy Spirit (Acts
                    1:8).
                  </p>

                  <div className="mt-12 flex flex-wrap justify-center gap-4 lg:justify-start">
                    <ButtonLink
                      href="#leadership"
                      variant="outlineLight"
                      className="button-ripple w-fit shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
                    >
                      Meet the Leadership →
                    </ButtonLink>
                    <ButtonLink
                      href="#contact"
                      variant="ghost"
                      className="button-ripple w-fit border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
                    >
                      Contact Us →
                    </ButtonLink>
                  </div>
                </div>

                <div className="mx-auto w-full max-w-xl lg:col-span-5">
                  <div className="hero-card p-8">
                    <div className="hero-orb" />
                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,140,33,0.42),transparent_70%)] blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-3xl" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <Image src={Logo1} alt="Mighty Refuge Ministries" width={46} height={46} className="object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">About the Ministry</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Who we are</p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-none border-l border-r-3 border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Senior Pastor</p>
                        <p className="mt-2 text-base font-semibold text-white">Pst. Abiodun Benjamin Richard</p>
                      </div>
                      <div className="rounded-none border-l border-r-3 border-white/10  p-5 transition-transform duration-300 hover:-translate-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Scripture Mandate</p>
                        <p className="mt-2 text-base font-semibold text-white">Matthew 28:18–20</p>
                      </div>
                      <div className="rounded-2xl border-l border-r-3 border-white/10  p-5 sm:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Our Heartbeat</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">
                          Jesus exalted. The Holy Spirit welcomed. Lives transformed.
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
            <Image
              src="/assests/svg/Backdrop.png"
              alt="Glassy background"
              fill
              className="page-bg-image"
              priority
            />
          </div>
          <div className="page-glass-overlay" aria-hidden="true" />

          <div className="page-glass-content">
            <div className="page-glass-content-wrapper">
              <Section>
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  <Reveal className="lg:col-span-7">
                    <SectionHeading
                      eyebrow="Our Journey"
                      title="From small gatherings to a growing ministry family"
                      align="left"
                    />
                    <div className="mt-6 space-y-5 text-base text-muted">
                      <p>
                        Mighty Refuge Ministries became our official name in 2024, but our senior pastor has been in ministry for
                        quite a while. Over the years, God has shaped our expression through different arms.
                      </p>
                      <p>
                        It began with <span className="font-semibold text-[#001b27]">School of the Spirit</span>, a small gathering of
                        believers passionate about spiritual growth. It started during his undergraduate days at the University of
                        Ibadan, where many of the early members were also part of the Methodist Campus Fellowship.
                      </p>
                      <p>
                        Another name we carried during past seasons was <span className="font-semibold text-[#001b27]">Engaging the Holy Ghost</span>.
                        Today, as Mighty Refuge Ministries, we continue with the same heartbeat: Jesus exalted, the Holy Spirit
                        welcomed, and lives transformed.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={120} className="lg:col-span-5">
                    <div className=" p-8 border-r border-r-[#001b27]/50 text-end">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Quick Profile</p>
                      <div className="mt-6 space-y-5">
                        <div>
                          <p className="text-sm font-semibold text-[#001b27]">Official Name</p>
                          <p className="text-base text-muted">Mighty Refuge Ministries</p>
                        </div>
                        <div className="separator" />
                        <div>
                          <p className="text-sm font-semibold text-[#001b27]">Founding Date</p>
                          <p className="text-base text-muted">March 18th, 2024</p>
                        </div>
                        <div className="separator " />
                        <div>
                          <p className="text-sm font-semibold text-[#001b27]">Senior Pastor / President</p>
                          <p className="text-base text-muted">Pst. Abiodun Benjamin Richard</p>
                        </div>
                        <div className="separator" />
                        <div>
                          <p className="text-sm font-semibold text-[#001b27]">Address</p>
                          <p className="text-base text-muted">Olumbe Bassir Drive, Ashi Bodija, Ibadan</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </Section>

              <Section fullBleed className="py-0">
                <div className="relative overflow-hidden bg-[#001b27] text-white">
                  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,140,33,0.55),transparent_65%)] blur-2xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,33,0.36),transparent_62%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_55%,rgba(255,255,255,0.16),transparent_60%)]" />
                    <div className="absolute inset-0 bg-linear-to-b from-[#001b27]/25 via-[#001b27]/78 to-[#001b27]" />
                  </div>

                  <div className="section-shell">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                      <Reveal>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand text-left lg:text-end">Mission Statement (TEEM)</p>
                          <h2 className="mt-4 text-3xl font-semibold text-left lg:text-end">Our Mission</h2>
                          <p className="mt-4 text-base text-white/75 text-left lg:text-end">
                            At Mighty Refuge Mission, our mission is to fulfill the Great Commission (Matthew 28:18–20) by proclaiming the
                            Gospel to villages, rural communities, and cities, winning souls for Christ, and discipling believers to become
                            mature followers of Jesus (Ephesians 4:13). We provide a refuge of spiritual solace, hope, and transformation
                            through the Holy Spirit&apos;s power (Acts 1:8), empowering men and women to live victorious lives and impact their
                            communities for God&apos;s glory.
                          </p>
                          <div className="mt-8 space-y-4 text-left lg:text-end">
                            {missionPoints.map((point) => (
                              <div key={point.title} className="flex gap-4 lg:justify-end">
                                <div className="order-2 text-left lg:order-1 lg:text-end">
                                  <p className="text-lg font-semibold">{point.title}</p>
                                  <p className="text-sm text-white/75">{point.detail}</p>
                                </div>
                                <div className="order-1 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 font-semibold text-brand lg:order-2">
                                  {point.letter}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>

                      <Reveal delay={120}>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Vision Statement (PRE)</p>
                          <h2 className="mt-4 text-3xl font-semibold">Our Vision</h2>
                          <p className="mt-4 text-base text-white/75">
                            Our vision is to see cities, villages, and rural communities transformed by the Gospel, where men and women are
                            discipled to become like Christ (2 Corinthians 3:18), equipped to fulfill God&apos;s purpose (Ephesians 4:12–13), and
                            empowered to demonstrate God&apos;s love and power (Matthew 5:16). We envision a movement of revival and awakening,
                            where Christ&apos;s love is manifested, and lives are forever changed (Joel 2:28–29).
                          </p>
                          <div className="mt-8 space-y-4">
                            {visionPoints.map((point) => (
                              <div key={point.title} className="flex gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 font-semibold text-brand">
                                  {point.letter}
                                </div>
                                <div>
                                  <p className="text-lg font-semibold">{point.title}</p>
                                  <p className="text-sm text-white/75">{point.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </Section>

              <Section>
                <Reveal>
                  <SectionHeading
                    eyebrow="Core Values (TIE)"
                    title="How we live, lead, and serve"
                    description="Our values shape our culture, our ministry is built on character before gifting."
                  />
                </Reveal>
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                  {coreValues.map((value, idx) => (
                    <Reveal key={value.title} delay={idx * 120}>
                      <div
                        className={`group rounded-xl border border-[#001b27]/10 p-8 shadow-[0_30px_70px_rgba(0,27,39,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 ${
                          coreValueCardStyles[idx % coreValueCardStyles.length]
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{value.title}</p>
                        <p className="mt-4 text-lg font-semibold text-[#001b27] transition-colors duration-300 group-hover:text-[#00506d]">{value.title}</p>
                        <p className="mt-3 text-base text-muted">{value.detail}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Section>

              <Section id="leadership">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  <Reveal className="lg:col-span-7">
                    <SectionHeading eyebrow="Leadership" title="A structure that supports growth and accountability" align="left" />
                    <div className="mt-6 space-y-5 text-base text-muted">
                      <p>
                        Mighty Refuge Ministries is guided by a Board of Trustees and a pastorate team, supported by department heads
                        who steward our ministry units.
                      </p>
                      <div className="rounded-xl border border-[#001b27]/10 bg-white/60 p-6 backdrop-blur">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Board of Trustees</p>
                        <ul className="mt-4 grid gap-2 text-base text-muted sm:grid-cols-2">
                          <li>Mrs Kolawole Olayemi</li>
                          <li>Umukoro Isaac</li>
                          <li>Mr Kolawole Iseoluwa</li>
                          <li>Pst. Abiodun Benjamin Richard</li>
                        </ul>
                      </div>
                      <div className="rounded-xl border border-[#001b27]/10 bg-white/60 p-6 backdrop-blur">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Departments</p>
                        <p className="mt-3 text-base text-muted">
                          We currently have 9 ministry units. The ministry units include Evangelism & Outreach, Media & Communication, Technical,
                          Protocol & Ushering, Finance, Prayer, Aesthetics & Decoration, Welfare.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={120} className="lg:col-span-5">
                    <div className="p-10 border-b border-l rounded-xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">The Pastorate</p>
                      <div className="mt-6 space-y-6">
                        <div>
                          <p className="text-lg font-semibold text-[#001b27]">Abiodun Benjamin Richard</p>
                          <p className="text-sm font-semibold text-[#00506d]">President</p>
                        </div>
                        <div className="separator" />
                        <div>
                          <p className="text-lg font-semibold text-[#001b27]">Abiodun Aanuoluwa Oladayo</p>
                          <p className="text-sm font-semibold text-[#00506d]">Vice President</p>
                        </div>
                        <div className="separator" />
                        <div>
                          <p className="text-lg font-semibold text-[#001b27]">Fadayomi Olasukanmi Joseph</p>
                          <p className="text-sm font-semibold text-[#00506d]">Administrator / Resident Pastor</p>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-start sm:justify-end">
                        <ButtonLink href="#contact" variant="navy" className="button-ripple w-fit">
                          Meet our pastors →
                        </ButtonLink>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </Section>

              <Section id="services">
                <Reveal>
                  <SectionHeading
                    eyebrow="Worship With Us"
                    title="Weekly service schedule"
                    description="All services are currently physical at our church venue (location to be announced)."
                  />
                </Reveal>

                <Reveal delay={120}>
                  <div className="mx-auto mt-12 max-w-5xl p-10 shadow-[0_30px_70px_rgba(0,27,39,0.08)] backdrop-blur">
                    <div className="grid gap-8 md:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Sunday</p>
                        <p className="mt-3 text-2xl font-semibold text-[#001b27]">Sunday Service</p>
                        <p className="mt-2 text-base text-muted">9:00 AM – 11:00 AM</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Tuesday</p>
                        <p className="mt-3 text-2xl font-semibold text-[#001b27]">Bible Study</p>
                        <p className="mt-2 text-base text-muted">6:00 PM – 7:00 PM</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Thursday</p>
                        <p className="mt-3 text-2xl font-semibold text-[#001b27]">Prayer Meeting</p>
                        <p className="mt-2 text-base text-muted">6:00 PM – 7:00 PM</p>
                      </div>
                    </div>
                    <div className="separator" />
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <ButtonLink href="#contact" className="w-fit">
                        Ask a question →
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              </Section>

              <Section id="contact">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  <Reveal className="lg:col-span-7">
                    <SectionHeading eyebrow="Contact" title="We’d love to hear from you" align="left" />
                    <p className="mt-6 text-base text-muted">
                      You can reach us using the details below.
                    </p>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#001b27]/10 bg-white/60 p-6 backdrop-blur">
                        <p className="text-sm font-semibold text-[#001b27]">Address</p>
                        <p className="mt-2 text-base text-muted">Olumbe Bassir Drive, Ashi Bodija, Ibadan</p>
                      </div>
                      <div className="rounded-xl border border-[#001b27]/10 bg-white/60 p-6 backdrop-blur">
                        <p className="text-sm font-semibold text-[#001b27]">Email</p>
                        <p className="mt-2 text-base text-muted">mightyrefugemission@gmail.com</p>
                      </div>
                      <div className="rounded-xl border border-[#001b27]/10 bg-white/60 p-6 backdrop-blur">
                        <p className="text-sm font-semibold text-[#001b27]">Phone</p>
                        <p className="mt-2 text-base text-muted">+234 813 119 8600</p>
                        <p className="mt-1 text-sm text-muted">Alternate: 08109875522</p>
                      </div>
                      <div className="rounded-xl border border-[#001b27]/10 bg-white/60 p-6 backdrop-blur">
                        <p className="text-sm font-semibold text-[#001b27]">Office Hours</p>
                        <p className="mt-2 text-base text-muted">Tuesday and Thursday · 10:00 AM – 2:00 PM</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={120} className="lg:col-span-5 mb-5">
                    <div className="relative overflow-hidden rounded-2xl mb-5 border border-white/20 bg-[#001b27] p-8 text-white shadow-[0_35px_90px_rgba(0,27,39,0.18)] sm:p-10">
                      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,140,33,0.45),transparent_70%)] blur-2xl spin-slower" />
                      <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-3xl spin-slower" />
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Ministry Commitment</p>
                      <p className="mt-5 text-3xl font-semibold leading-tight">
                        A refuge where Christ is proclaimed, disciples are formed, and revival is pursued.
                      </p>
                      <p className="mt-5 text-base text-white/75">
                        If you’re looking for a community to grow, serve, and go, we’ll be honored to walk with you.
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <ButtonLink href="#services" variant="outlineLight" className="button-ripple w-fit">
                          View service times →
                        </ButtonLink>
                        <ButtonLink href="/landingPage#connect" variant="ghost" className="button-ripple w-fit">
                          Get connected →
                        </ButtonLink>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </Section>

              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

