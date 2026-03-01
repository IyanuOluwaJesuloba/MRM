import { Footer } from "@/components/Footer";
import { JoinMinistryForm } from "@/components/JoinMinistryForm";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#001b27] text-white">
        <Section className="pt-28 pb-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl hero-text">Join the ministry family</h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
                If you’d like to join Mighty Refuge Ministries, fill the form below and we’ll get in touch.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 mx-auto max-w-3xl">
            <Reveal delay={120}>
              <div className="rounded-3xl p-4 sm:p-6">
                <JoinMinistryForm />
              </div>
            </Reveal>
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}

