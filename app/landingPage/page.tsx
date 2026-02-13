import Image from "next/image";
import IconColored from "@/public/assests/svg/Icon Colored.png";
import IconBlack from "@/public/assests/svg/Icon Black.png";
import { Button, ButtonLink } from "@/components/Button";
import { Section, Card } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TestimonyCarousel } from "@/components/TestimonyCarousel";
import { Footer } from "@/components/Footer";
import { cx } from "@/lib/cx";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    title: "Transparency",
    body:
      "We operate with complete openness and accountability. Authentic faith, honest conversations, and transparent leadership define us.",
    iconSrc: IconColored,
  },
  {
    title: "Integrity",
    body:
      "Our words and actions align with Scripture. We live out what we teach and lead with character and conviction.",
    iconSrc: IconBlack,
  },
  {
    title: "Excellence",
    body:
      "We offer God our finest effort in worship, service, and ministry—pursuing beauty and intentionality in everything.",
    iconSrc: IconColored,
  },
];

const missionPoints = [
  {
    letter: "T",
    title: "Transformation",
    detail: "Seeing lives radically changed by the Gospel",
  },
  {
    letter: "E",
    title: "Empowerment",
    detail: "Equipping believers to live victoriously",
  },
  {
    letter: "E",
    title: "Equipping",
    detail: "Providing tools for spiritual growth and maturity",
  },
  {
    letter: "M",
    title: "Movement",
    detail: "Catalyzing revival and awakening in our communities",
  },
];

const visionPoints = [
  {
    letter: "P",
    title: "Proclamation",
    detail: "The Great Commission lived out boldly and compassionately",
  },
  {
    letter: "R",
    title: "Refuge",
    detail: "Communities experience solace, hope, and healing",
  },
  {
    letter: "E",
    title: "Empowerment",
    detail: "Men and women demonstrate God's love and power",
  },
];

const serviceCards = [
  {
    title: "Sunday Encounter Service",
    tag: "Weekend",
    time: "Sundays · 9:00 AM – 11:30 AM",
    location: "Main Auditorium",
    description:
      "Our primary family gathering featuring immersive worship, the Word, communion, and ministry to every generation.",
    highlights: ["Kids & teens church available", "Communion + ministry moments", "Livestream on YouTube"],
    button: "Plan Sunday Visit",
  },
  {
    title: "Tuesday Bible Study",
    tag: "Midweek",
    time: "Tuesdays · 6:00 PM – 7:30 PM",
    location: "Discipleship Hub · Upper Room",
    description: "Interactive teaching environments that equip you to rightly divide the Word and live it out daily.",
    highlights: ["Verse-by-verse teaching", "Small discipleship circles", "Resource materials provided"],
    button: "Save My Seat",
    tone: "brand",
  },
  {
    title: "Thursday Prayer Watches",
    tag: "Intercession",
    time: "Thursdays · 6:00 PM – 7:30 PM",
    location: "Prayer Furnace · Online & On-site",
    description: "Targeted prophetic intercession for our city, nation, and specific needs from our community.",
    highlights: ["Spirit-led worship flow", "Prayer fire teams", "Testimonies + follow-up"],
    button: "Join the Watch",
  },
];

const latestPosts = [
  {
    title: "Gospel Reaches Gbedun Town",
    tag: "Featured Outreach",
    date: "Jan, 2025",
    excerpt:
      "Our evangelism team ministered to over 200 people—sharing the Gospel and demonstrating God's love through practical service.",
    highlights: ["10+ salvations", "Healings and Miracles", "Medical + food relief"],
    action: "Read Field Report",
    featured: true,
  },
  {
    title: "Year-End Prayer Retreat",
    tag: "Upcoming Event",
    date: "December, 2026 · 3-Day Retreat",
    excerpt:
      "Encounter God's vision for 2026 in our sacred time of prayer, worship, and prophetic direction at the Prayer Mountains.",
    highlights: ["Worship nights", "Prophetic council", "Personal prayer tents"],
    action: "Reserve a Spot",
  },
  {
    title: "The Palace Pillars",
    tag: "Ministry Highlight",
    date: "Every Thursday",
    excerpt:
      "Our women's ministry is empowering women, young ladies, and girls with discipleship, mentorship, and safe spaces.",
    highlights: ["Mentorship circles", "Entrepreneur labs", "Care packages"],
    action: "Meet the Team",
  },
];

const testimonies = [
  {
    quote:
      "I came to Mighty Refuge searching for answers. Today I'm transformed by God's love, part of a family, and serving others.",
    name: "Grace A.",
    detail: "Educator",
  },
  {
    quote:
      "The prayer and intercession here is real. I've seen God answer prayers in ways I never thought possible.",
    name: "Emmanuel O.",
    detail: "Entrepreneur",
  },
  {
    quote:
      "Discipleship at Mighty Refuge helped me understand God's Word like never before. I'm equipped to live my faith.",
    name: "Toyin B.",
    detail: "Creative Director",
  },
];

const quickActions = [
  {
    title: "Share Your Prayer Needs",
    description:
      "We believe in the power of prayer. Submit your request and our community will intercede with you.",
    details: "Average response is less than 24 hours",
    button: "Submit Prayer Request",
    tone: "brand",
  },
  {
    title: "Become a Member",
    description:
      "Ready to take the next step? Discover membership pathways and get connected to our ministry family.",
    details: "Monthly Foundations Track",
    button: "Start Membership",
    tone: "navy",
  },
  {
    title: "Support Our Mission",
    description:
      "Your generosity helps us reach more communities with the Gospel. Give securely to support our work.",
    details: "Tax-deductible giving",
    button: "Make a Donation",
    tone: "neutral",
  },
] as const;

const quickActionToneStyles = {
  brand: {
    wrapper: "border-[#ffcf9f]/60 bg-[#fff5ec] text-[#4c2a14]",
    pill: "bg-[#ffead9] text-[#c75b00]",
    detail: "text-[#c75b00]/80",
    button: "bg-[#c75b00] text-white hover:bg-[#c75b00]/90",
  },
  navy: {
    wrapper: "border-white/15 bg-[#001b27] text-white",
    pill: "bg-white/10 text-white/80",
    detail: "text-white/70",
    button: "bg-white text-[#001b27] hover:bg-white/90",
  },
  neutral: {
    wrapper: "border-[#001b27]/10 bg-white text-[#001b27]",
    pill: "bg-[#e8f5ff] text-[#00506d]",
    detail: "text-[#00506d]/80",
    button: "bg-[#001b27] text-white hover:bg-[#001b27]/80",
  },
} as const;

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-(--color-soft) text-foreground">
        <HeroSection />

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
              <Section fullBleed className="pt-0" style={{ paddingBlock: 0 }}>
                <div className="grid w-full items-stretch gap-10 lg:grid-cols-2 lg:gap-0">
                  <div className="w-full px-6">
                    <Reveal>
                      <div className="w-full space-y-6 pt-10 md:pt-25 lg:pr-10 lg:pl-40">
                        <SectionHeading
                          eyebrow="Welcome to Mighty Refuge Ministries"
                          title="A growing faith community in Ibadan, Nigeria dedicated to the Great Commission."
                          align="left"
                        />
                        <p className="text-lg text-muted">
                          For over a decade, God has been weaving our story through prayer, discipleship, and courageous evangelism.
                          From School of the Spirit to Mighty Refuge today, our heartbeat is authentic worship, powerful intercession,
                          and Gospel-centered outreach that shapes lives and communities.
                        </p>
                        <p className="text-lg text-muted">
                          Whether you’re seeking spiritual growth, a place to belong, or a call to action, you’ll find a warm welcome
                          and a community committed to seeing God’s kingdom advance in our generation.
                        </p>
                        <div className="flex lg:flex-wrap flex-row gap-4">
                          <ButtonLink href="/about" className="w-fit">
                            Learn Our Full Story →
                          </ButtonLink>
                          <ButtonLink href="#services" variant="navy" className="w-fit">
                            Join Us →
                          </ButtonLink>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                  <Reveal delay={120} className="md:block hidden ">
                    <div className="relative flex h-[360px] w-full items-end justify-end lg:h-auto lg:min-h-[600px]">
                      <Image
                        src="/assests/svg/christian%20gathering.jpg"
                        alt="Mighty Refuge congregation gathered in worship"
                        fill
                        priority
                        sizes="(min-width: 1024px) 100vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </Section>

              {/* <Section>
                <SectionHeading
                  eyebrow="What Makes Us Different"
                  title="Core values that shape our culture"
                />
                <div className="mt-10 grid-responsive">
                  {values.map((value) => (
                    <Card key={value.title} className="p-6 text-left">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10">
                        <Image
                          src={value.iconSrc}
                          alt={`${value.title} emblem`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold">{value.title}</h3>
                      <p className="mt-3 text-muted">{value.body}</p>
                    </Card>
                  ))}
                </div>
              </Section> */}

              <Section fullBleed className="pt-0">
                <div className="relative isolate overflow-hidden">
                  <Image
                    src="/Pastor.webp"
                    alt="Lead Pastor of Mighty Refuge Ministries"
                    fill
                    priority
                    sizes="200vw"
                    className="object-cover md:block hidden"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#00131c]/95 via-[#001b27]/80 to-transparent" />

                  <div className="relative z-10 w-full px-6 py-16 sm:px-10 lg:px-16">
                    <Reveal>
                      <div className="max-w-xl space-y-6 text-white pl-30 lg:py-20">
                        <h2 className="text-4xl font-semibold leading-tight">Our Lead Pastor</h2>
                        <p className="text-lg text-white/80">
                          Pastor Benjamin Abiodun has spent two decades raising intercessors, discipling pioneers, and launching Spirit-led
                          expressions of church. His heart beats for authentic revival—where Scripture, prayer, and the Holy
                          Spirit&apos; power transform cities.
                        </p>
                        <p className="text-base text-white/70">
                          From humble beginnings with School of the Spirit to today&apos;s Mighty Refuge movement, he continues to call
                          believers into deeper intimacy with Jesus and courageous obedience to the Great Commission.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
                         
                          <div className="">
                          <ButtonLink href="/about" className="w-fit">
                            Learn more about him →
                          </ButtonLink>
                        </div>
                        </div>
                        
                      </div>
                    </Reveal>
                  </div>
                </div>
              </Section>

              {/* <Section >
                <div className="grid gap-8 lg:grid-cols-2">
                  <MissionVisionBlock
                    title="Our Mission: TEEM"
                    summary="We fulfill the Great Commission by proclaiming the Gospel, discipling believers, and providing a refuge of hope and transformation."
                    points={missionPoints}
                  />
                  <MissionVisionBlock
                    title="Our Vision: PRE"
                    summary="We see a movement where the Gospel transforms communities, creating spaces of refuge and empowerment for God's people."
                    points={visionPoints}
                  />
                </div>
              </Section> */}

              <Section id="services" className="relative overflow-hidden">
                <div
                  className="pointer-events-none -mt-10 absolute inset-x-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,140,33,0.15),_transparent_65%)] blur-3xl"
                  aria-hidden="true"
                />
                <Reveal>
                  <SectionHeading
                    eyebrow="Our lifestyle is consistent with the doctrine of scripture"
                    title="WORSHIP WITH US"
                  />
                  <p className="mx-auto mt-4 max-w-3xl text-center text-base text-muted">
                    Whether you crave deep teachings, family worship moments, or fiery intercession, there&apos;s a space curated for you
                    every week. Choose a gathering and plan your visit.
                  </p>
                </Reveal>
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                  {serviceCards.map((card, idx) => (
                    <Reveal key={card.title} delay={idx * 120}>
                      <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-xl  p-7 text-left shadow-[0_25px_60px_rgba(0,27,39,0.08)]">
                        <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/60" aria-hidden="true" />
                        <span className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/60" aria-hidden="true" />
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
                          <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">{card.tag}</span>
                          <span className="text-[#001b27]/70">{card.time}</span>
                        </div>

                        <div className="flex flex-1 flex-col gap-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-[#001b27]">{card.title}</h3>
                            <p className="mt-1 text-sm font-semibold text-[#00506d]">{card.location}</p>
                          </div>
                          <p className="text-base text-muted">{card.description}</p>

                          <ul className="mt-2 space-y-2 text-sm">
                            {card.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2 text-[#001b27]/80">
                                <span className="mt-1 h-2 w-2 rounded-full bg-[#ff8c21]" aria-hidden="true" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button variant="navy" className="mt-4 w-full justify-between ">
                          {card.button} <span>→</span>
                        </Button>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Section>

              <Section id="updates" className="relative overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-x-1/2 -top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(0,27,39,0.25),_transparent_65%)] blur-3xl"
                  aria-hidden="true"
                />
                <Reveal>
                  <SectionHeading
                    eyebrow="Latest From Our Community"
                    title="What's Happening at Mighty Refuge"
                    description="Stories, events, and ministry highlights that keep you close to what God is building in and through our house."
                  />
                </Reveal>
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                  {latestPosts.map((post) => {
                    const isFeatured = Boolean(post.featured);
                    return (
                      <Reveal key={post.title} delay={isFeatured ? 0 : 140}>
                        <article
                          className={cx(
                            "relative flex h-full flex-col gap-5 rounded-xl p-8 shadow-[0_30px_70px_rgba(0,27,39,0.08)] backdrop-blur transition duration-500 hover:-translate-y-1",
                            isFeatured
                              ? "lg:col-span-2 border border-white/20 bg-[#001b27] text-white"
                              : "border border-[#001b27]/10 bg-transparent"
                          )}
                        >
                          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]">
                            <span
                              className={cx(
                                "rounded-xl px-4 py-1 font-semibold",
                                isFeatured ? "bg-white/10 text-white" : "bg-brand/10 text-brand"
                              )}
                            >
                              {post.tag}
                            </span>
                            <span className={cx("text-[0.65rem] font-semibold", isFeatured ? "text-white/70" : "text-[#001b27]/60")}>
                              {post.date}
                            </span>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-3xl font-semibold leading-snug">{post.title}</h3>
                            <p className={cx("text-base", isFeatured ? "text-white/80" : "text-muted")}>{post.excerpt}</p>
                            <ul className="space-y-2 text-sm">
                              {post.highlights.map((highlight) => (
                                <li
                                  key={highlight}
                                  className={cx("flex items-start gap-3", isFeatured ? "text-white/85" : "text-[#001b27]/80")}
                                >
                                  <span
                                    className={cx(
                                      "mt-1 h-2.5 w-2.5 rounded-xl",
                                      isFeatured ? "bg-white/70" : "bg-[#ff8c21]"
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            variant={isFeatured ? "ghost" : "subtle"}
                            className={cx(
                              "mt-auto w-fit",
                              isFeatured ? "border-white/30 text-white hover:bg-white/10" : "text-[#001b27] hover:bg-[#001b27]/10"
                            )}
                          >
                            {post.action} <span>→</span>
                          </Button>
                        </article>
                      </Reveal>
                    );
                  })}
                </div>
              </Section>

              <div className="w-full bg-[#001b27]">
                <Section id="testimonies">
                  <Reveal>
                    <SectionHeading
                      eyebrow="Testimonies of Transformation"
                      title="See God's Faithfulness"
                      tone="light"
                    />
                  </Reveal>
                  <Reveal delay={120}>
                    <div className="mt-1">
                      <TestimonyCarousel items={testimonies} />
                    </div>
                  </Reveal>
                </Section>
              </div>

              <Section id="connect" className="relative my-16 overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[480px] -translate-x-1/2 rotate-6 bg-[radial-gradient(circle,_rgba(255,140,33,0.2),_transparent_70%)] blur-3xl"
                  aria-hidden="true"
                />
                <Reveal>
                  <SectionHeading
                    eyebrow="Get Connected"
                    title="Find your next step in community"
                    description="Whether it's prayer support, spiritual growth, or radical generosity - choose a step and we’ll walk with you."
                  />
                </Reveal>
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                  {quickActions.map((action) => {
                    const tone = quickActionToneStyles[action.tone];
                    return (
                      <Reveal key={action.title} delay={120}>
                        <div
                          className={cx(
                            "flex h-full flex-col rounded-xl border p-8 shadow-[0_30px_70px_rgba(0,27,39,0.08)] ",
                            tone.wrapper
                          )}
                        >
                          
                          <h3 className="mt-3 text-xl font-semibold">{action.title}</h3>
                          <p className="mt-3 flex-1 text-base">{action.description}</p>
                          <p className={cx("mt-4 text-sm font-semibold", tone.detail)}>{action.details}</p>
                          <Button variant="outline" className={cx("mt-8 w-full justify-between mb-4", tone.button)}>
                            {action.button} <span>→</span>
                          </Button>
                        </div>
                      </Reveal>
                    );
                  })}
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

function MissionVisionBlock({
  title,
  summary,
  points,
}: {
  title: string;
  summary: string;
  points: { letter: string; title: string; detail: string }[];
}) {
  return (
    <Card className="p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-brand">{title}</p>
      <p className="mt-4 text-lg text-muted">{summary}</p>
      <div className="mt-6 space-y-4">
        {points.map((point) => (
          <div key={point.title} className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-semibold text-brand">
              {point.letter}
            </div>
            <div>
              <p className="text-lg font-semibold">{point.title}</p>
              <p className="text-sm text-muted">{point.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
